// === Module 10945: baseDelay ===

// Module 10945 (baseDelay)

export default function baseDelay(fn, arg1, arg2) {
  closure_0 = fn;
  closure_1 = arg2;
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    const _setTimeout = setTimeout;
    return setTimeout(() => {
      closure_0.apply(undefined, closure_1);
    }, arg1);
  }
};