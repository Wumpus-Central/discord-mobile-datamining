// discord_common/js/packages/libdave/package/src/KeyFingerprint.ts
import asyncGeneratorStep from "asyncGeneratorStep";

function _generateKeyFingerprint() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let asyncGeneratorStep = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (0 !== asyncGeneratorStep) {
            const _Error4 = Error;
            const error = new Error("unsupported fingerprint format version");
            throw error;
          } else if (0 === tmp30.byteLength) {
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
                const uint8Array = new Uint8Array(2 + tmp30.byteLength + 8);
                const result = uint8Array.set(tmp30, 2);
                const _DataView = DataView;
                const dataView = new DataView(uint8Array.buffer);
                dataView.setUint16(0, tmp29);
                dataView.setBigUint64(2 + tmp30.byteLength, BigIntResult);
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = uint8Array;
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
    })();
  });
  const _generateKeyFingerprint = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeyFingerprint.ts");

export const generateKeyFingerprint = function generateKeyFingerprint(asyncGeneratorStep, closure_3, closure_2) {
  const self = this;
  const apply = _generateKeyFingerprint.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};