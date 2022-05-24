<script>
  import * as idb from "idb-keyval";
  import { formatDuration } from './formatDuration.js';


  const MIN_PLAYBACK_RATE = 0.5;
  const MAX_PLAYBACK_RATE = 4;

  function getStoredPlaybackRate() {
    const stored = localStorage.getItem("playbackRate");
    if (isNaN(+stored) || +stored < MIN_PLAYBACK_RATE || +stored > MAX_PLAYBACK_RATE) {
      return 1;
    } else {
      return +stored;
    }
  }

  function remapDuration(duration, rate) {
    if (!duration) {
      return 0;
    }

    return Math.round(duration / rate);
  }

  async function getStoredFile() {
    const stored = await idb.get("lastFile");
    if (stored && stored instanceof FileSystemHandle) {
      let grant = await stored.queryPermission({mode: "read"});
      if (grant === "prompt") {
        promptPermissions = true;
        restoredLockedHandle = stored;
      } else if (grant === "granted") {
        fileHandle = stored;
      }
    }
  }

  async function requestPermissions() {
    const grant = await restoredLockedHandle.requestPermission({mode: "read"});
    if (grant === "granted") {
      fileHandle = restoredLockedHandle;
    }
    promptPermissions = false;
    restoredLockedHandle = undefined;
  }

  let audioUrl,
    fileHandle,
    fileName,
    playbackRate = getStoredPlaybackRate(),
    audio,
    pos = 0,
    duration = 0,
    restoredLockedHandle,
    promptPermissions = false;

  getStoredFile();

  $: remappedPos = remapDuration(pos, playbackRate);
  $: remappedDuration = remapDuration(duration, playbackRate);
  $: localStorage.setItem("playbackRate", playbackRate);
  $: if (audio) {
    audio.playbackRate = playbackRate;
  }
  $: if (fileHandle) {
    idb.set("lastFile", fileHandle);
  }
  $: (async () => {
    if (fileHandle) {
      const fileData = await fileHandle.getFile();
      fileName = fileHandle.name;
      audioUrl = URL.createObjectURL(fileData);
    }
  })();

  async function openFile() {
    [fileHandle] = await window.showOpenFilePicker({
      multiple: false
    });
  }

  function deltaPlaybackRate(delta) {
    playbackRate = Math.max(MIN_PLAYBACK_RATE, Math.min(MAX_PLAYBACK_RATE, playbackRate + delta));
    playbackRate = Math.round(playbackRate * 10) / 10;
  }

  function onKeydown(e) {
    const key = e.key.toLowerCase();
    let handled = false;
    if (key === "e") {
      deltaPlaybackRate(0.1);
      handled = true;
    } else if (key === "q") {
      deltaPlaybackRate(-0.1);
      handled = true;
    } else if (key === " " && audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      handled = true;
    }

    if (handled) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    } else {
      return true;
    }
  }
</script>

<svelte:window on:keydown|capture={onKeydown}/>

<div>
  <button on:click={openFile}>
    Open local file
  </button>

  {#if promptPermissions}
    <button on:click={requestPermissions}>
      Open previous file
    </button>
  {/if}

  {#if fileName}
    <p>
      Now playing: <strong>{fileName}</strong>,
      <strong>{formatDuration(remappedPos)}</strong> /
      <strong>{formatDuration(remappedDuration)}</strong>
    </p>
  {/if}

  <p>
    Playback rate: {playbackRate}. Press <strong>E</strong> to increase, <strong>Q</strong> to decrease.
  </p>

  <audio src={audioUrl}
         controls
         bind:this={audio}
         bind:currentTime={pos}
         bind:duration={duration}
         autoplay></audio>
</div>

<style>
  button {
    padding: 5px 10px;
  }

  audio {
    width: 100%;
  }
</style>
