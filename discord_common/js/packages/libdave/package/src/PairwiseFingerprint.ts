// discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts
import closure_2 from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_3 from "../../../../../../_runtime/00036__arrayLikeToArray.js";

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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c7 = 0;
    c8 = 0;
    return (function*(arg0, arg1, arg2, arg3, arg4) {
      closure_6 = tmp2;
      const items = [lib(9345).generateKeyFingerprint(lib, uint8Array, closure_2), ];
      const obj9 = lib(9345);
      items[1] = lib(9345).generateKeyFingerprint(lib, closure_3, closure_4);
      lib = yield Promise.all(items);
      const sorted = lib.sort(closure_5);
      const _Uint8Array2 = Uint8Array;
      uint8Array = new Uint8Array(lib[0].byteLength + lib[1].byteLength);
      const result = uint8Array.set(lib[0], 0);
      const result1 = uint8Array.set(lib[1], lib[0].byteLength);
      closure_2 = yield lib(uint8Array[2]).scryptAsync(uint8Array, closure_3, closure_4);
      const _Uint8Array = Uint8Array;
      const uint8Array1 = new Uint8Array(closure_2);
      return uint8Array1;
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = { N: 16384, r: 8, p: 2, dkLen: 64 };
let result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts");

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