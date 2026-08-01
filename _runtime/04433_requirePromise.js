// === Module 4433: requirePromise ===

// Module 4433 (requirePromise)

export default function requirePromise() {
  if (typeof Promise === "disabledUntil") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};