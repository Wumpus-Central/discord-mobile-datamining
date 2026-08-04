// discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts
import asyncGeneratorStep from "asyncGeneratorStep";
import module_36 from "module_36";

const require = arg1;
function compareArrays(arg0, arg1) {
  if (0 < arg0.length) {
    let num2 = 0;
    if (0 < arg1.length) {
      while (arg0[num2] == arg1[num2]) {
        let sum = num2 + 1;
        if (sum < arg0.length) {
          num2 = sum;
        }
      }
      return arg0[num2] - arg1[num2];
    }
  }
  return arg0.length - arg1.length;
}
function _generatePairwiseFingerprint() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let asyncGeneratorStep = arg2;
    let module_36 = arg3;
    let closure_4 = arg4;
    let c7 = 0;
    let c8 = 0;
    return (function*(arg0, arg1, arg2, arg3, arg4) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_6 = tmp2;
              let closure_5 = tmp5;
              let lib;
              let uint8Array;
              let asyncGeneratorStep;
              const items = [lib(8889).generateKeyFingerprint(lib, uint8Array, asyncGeneratorStep), ];
              const obj9 = lib(8889);
              items[1] = lib(8889).generateKeyFingerprint(lib, module_36, closure_4);
              c7 = 1;
              c8 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = Promise.all(items);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              lib = arg1;
              const sorted = lib.sort(closure_5);
              const _Uint8Array2 = Uint8Array;
              uint8Array = new Uint8Array(lib[0].byteLength + lib[1].byteLength);
              const result = uint8Array.set(lib[0], 0);
              const result1 = uint8Array.set(lib[1], lib[0].byteLength);
              c7 = 2;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = lib(uint8Array[2]).scryptAsync(uint8Array, module_36, closure_4);
              return obj3;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            asyncGeneratorStep = arg1;
            const _Uint8Array = Uint8Array;
            const uint8Array1 = new Uint8Array(asyncGeneratorStep);
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = uint8Array1;
            return obj;
          }
        } catch (tmp13) {
          c8 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _generatePairwiseFingerprint = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = { N: 16384, r: 8, p: 2, dkLen: 64 };
let result = require("XorAndSalsa").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts");

export const generatePairwiseFingerprint = function generatePairwiseFingerprint(callback1, uint8Array, arg2, uint8Array1, arg4) {
  const self = this;
  const apply = _generatePairwiseFingerprint.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};