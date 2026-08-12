// discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts
import asyncGeneratorStep from "asyncGeneratorStep";
import _arrayLikeToArray from "../../../../../../_runtime/00036__arrayLikeToArray.js";

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
      let closure_6 = tmp2;
      const items = [lib(9243).generateKeyFingerprint(lib, uint8Array, asyncGeneratorStep), ];
      const obj9 = lib(9243);
      items[1] = lib(9243).generateKeyFingerprint(lib, module_36, closure_4);
      lib = yield Promise.all(items);
      const sorted = lib.sort(closure_5);
      const _Uint8Array2 = Uint8Array;
      uint8Array = new Uint8Array(lib[0].byteLength + lib[1].byteLength);
      const result = uint8Array.set(lib[0], 0);
      const result1 = uint8Array.set(lib[1], lib[0].byteLength);
      asyncGeneratorStep = yield lib(uint8Array[2]).scryptAsync(uint8Array, module_36, closure_4);
      const _Uint8Array = Uint8Array;
      const uint8Array1 = new Uint8Array(asyncGeneratorStep);
      return uint8Array1;
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