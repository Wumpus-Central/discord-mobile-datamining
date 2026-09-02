// === Module 513: uint8Array ===

// Module 513 (uint8Array)
const uint8Array = new Uint8Array(16);
arg5.default = function rng() {
  let tmp = getRandomValues;
  if (!getRandomValues) {
    const _crypto = crypto;
    getRandomValues = typeof crypto !== "undefined";
    if (typeof crypto !== "undefined") {
      const _crypto4 = crypto;
      getRandomValues = crypto.getRandomValues;
    }
    if (getRandomValues) {
      const _crypto2 = crypto;
      const _crypto3 = crypto;
      getRandomValues = getRandomValues2.bind(crypto);
    }
    tmp = getRandomValues;
    if (!getRandomValues) {
      const _Error = Error;
      error = new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      throw error;
    }
  }
  return tmp(uint8Array);
};