// _runtime/01268_rng.js
let getRandomValues;

const uint8Array = new Uint8Array(16);

export default function rng() {
  let tmp = getRandomValues;
  if (!tmp) {
    const _crypto = crypto;
    getRandomValues = typeof crypto !== "undefined";
    if (typeof crypto !== "undefined") {
      const _crypto4 = crypto;
      getRandomValues = crypto.getRandomValues;
    }
    if (getRandomValues) {
      const _crypto2 = crypto;
      const getRandomValues2 = crypto.getRandomValues;
      const _crypto3 = crypto;
      getRandomValues = getRandomValues2.bind(crypto);
    }
    tmp = getRandomValues;
    if (!tmp) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
      throw error;
    }
  }
  return tmp(uint8Array);
}
