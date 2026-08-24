// === Module 10008: baseDelay ===

// Module 10008 (baseDelay)

export default function baseDelay(fn) {
  closure_0 = fn;
  closure_1 = arg2;
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    const _setTimeout = setTimeout;
    return setTimeout(() => {
      callback.apply(undefined, closure_1);
    }, arg1);
  }
};