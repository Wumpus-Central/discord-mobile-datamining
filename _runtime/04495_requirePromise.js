// === Module 4495: requirePromise ===

// Module 4495 (requirePromise)

export default function requirePromise() {
  if (typeof Promise === "HAS_APPLICATION") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};