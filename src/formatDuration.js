export function formatDuration(inputSeconds) {
  if (!inputSeconds) {
    return "--:--:--";
  }

  const seconds = Math.round(inputSeconds);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const secondsStr = (seconds % 60).toString().padStart(2, "0");
  const minutesStr = (minutes % 60).toString().padStart(2, "0");
  const hoursStr = hours.toString().padStart(2, "0");

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
}
