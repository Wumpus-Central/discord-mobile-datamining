// _runtime/metro/10002__.js

export function createAbortError(signal) {
  let aborted;
  if (signal != null) {
    aborted = signal.aborted;
  }
  if (aborted) {
    if (undefined !== signal.reason) {
      return signal.reason;
    }
  }
  const error = new Error("The operation was aborted.");
  error.name = "AbortError";
  return error;
}
