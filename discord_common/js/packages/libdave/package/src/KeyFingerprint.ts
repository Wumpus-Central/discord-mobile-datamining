// === Module 9352: _asyncToGenerator ===

// Module 9352 (_asyncToGenerator)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _generateKeyFingerprint() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const length = arg2;
    let c3 = 0;
    return (async function(arg0, value, arg2) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else if (0 !== closure_0) {
            const _Error4 = Error;
            const self7 = this;
            const self8 = this;
            const error = new Error("unsupported fingerprint format version");
            throw error;
          } else if (0 === closure_1.byteLength) {
            const _Error3 = Error;
            const self5 = this;
            const self6 = this;
            const error1 = new Error("zero-length key");
            throw error1;
          } else if (0 === length.length) {
            const _Error2 = Error;
            const self3 = this;
            const self4 = this;
            const error2 = new Error("zero-length user ID");
            throw error2;
          } else {
            const _BigInt = BigInt;
            const BigIntResult = BigInt(length);
            const bigint = 0n;
            if (BigIntResult >= 0n) {
              const bigint2 = 64n;
              const bigint3 = 2n;
              if (BigIntResult < 2n ** 64n) {
                const _Uint8Array = Uint8Array;
                const self9 = this;
                const self10 = this;
                const uint8Array = new Uint8Array(2 + closure_1.byteLength + 8);
                const result = uint8Array.set(closure_1, 2);
                const _DataView = DataView;
                const self11 = this;
                const self12 = this;
                const dataView = new DataView(uint8Array.buffer);
                dataView.setUint16(0, tmp18);
                dataView.setBigUint64(2 + closure_1.byteLength, BigIntResult);
                c3 = 3;
                return { value: uint8Array, done: true };
              }
            }
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error3 = new Error("user ID out of range");
            throw error3;
          }
        } catch (tmp14) {
          c3 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeyFingerprint.ts");

export const generateKeyFingerprint = function generateKeyFingerprint() {
  return obj(...arguments);
};