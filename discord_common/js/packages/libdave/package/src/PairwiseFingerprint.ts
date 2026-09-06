// === Module 9139: PairwiseFingerprint ===

// Module 9139 (PairwiseFingerprint)
import KeyFingerprint from "KeyFingerprint" /* 9138 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
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
let closure_6 = async function _generatePairwiseFingerprint() {
  closure_6 = tmp2;
  const items = [KeyFingerprint.generateKeyFingerprint(closure_0, closure_1, closure_2), ];
  items[1] = KeyFingerprint.generateKeyFingerprint(closure_0, closure_3, closure_4);
  await Promise.all(items);
  closure_133_0 = value;
  const sorted = closure_133_0.sort(closure_134_5);
  const _Uint8Array2 = Uint8Array;
  const uint8Array = new Uint8Array(closure_133_0[0].byteLength + closure_133_0[1].byteLength);
  closure_133_1 = uint8Array;
  const result = closure_133_1.set(closure_133_0[0], 0);
  const result1 = closure_133_1.set(closure_133_0[1], closure_133_0[0].byteLength);
  await closure_134_0(closure_134_1[2]).scryptAsync(closure_133_1, closure_134_3, closure_134_4);
  closure_133_2 = value;
  const _Uint8Array = Uint8Array;
  const uint8Array1 = new Uint8Array(closure_133_2);
  return uint8Array1;
};
let closure_3 = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46);
let closure_4 = { N: 16384, r: 8, p: 2, dkLen: 64 };
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts");

export const generatePairwiseFingerprint = function generatePairwiseFingerprint() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};