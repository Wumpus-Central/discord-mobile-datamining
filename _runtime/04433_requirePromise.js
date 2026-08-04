// _runtime/04433_requirePromise.js

export default function requirePromise() {
  if (typeof Promise === "disabledUntil") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};