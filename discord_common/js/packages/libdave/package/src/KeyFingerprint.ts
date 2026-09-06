// discord_common/js/packages/libdave/package/src/KeyFingerprint.ts
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";

let closure_1 = async function _generateKeyFingerprint(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else if (0 !== closure_0) {
        const _Error4 = Error;
        const error = new Error("unsupported fingerprint format version");
        throw error;
      } else if (0 === tmp29.byteLength) {
        const _Error3 = Error;
        const error1 = new Error("zero-length key");
        throw error1;
      } else if (0 === arr.length) {
        const _Error2 = Error;
        const error2 = new Error("zero-length user ID");
        throw error2;
      } else {
        const _BigInt = BigInt;
        const BigIntResult = BigInt(arr);
        const bigint = 0n;
        if (BigIntResult >= 0n) {
          const bigint2 = 64n;
          const bigint3 = 2n;
          if (BigIntResult < 2n ** 64n) {
            const _Uint8Array = Uint8Array;
            const uint8Array = new Uint8Array(2 + tmp29.byteLength + 8);
            const result = uint8Array.set(tmp29, 2);
            const _DataView = DataView;
            const dataView = new DataView(uint8Array.buffer);
            dataView.setUint16(0, tmp28);
            dataView.setBigUint64(2 + tmp29.byteLength, BigIntResult);
            c3 = 3;
            obj = { value: uint8Array, done: true };
            return obj;
          }
        }
        const _Error = Error;
        const error3 = new Error("user ID out of range");
        throw error3;
      }
    } catch (tmp23) {
      c3 = tmp;
      throw tmp23;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeyFingerprint.ts");

export const generateKeyFingerprint = function generateKeyFingerprint() {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
