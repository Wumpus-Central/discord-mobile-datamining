// === Module 1171: runtimeHashMessageKey ===

// Module 1171 (runtimeHashMessageKey)
import textEncoder from "textEncoder" /* 1172 */;

require = arg1;
const dependencyMap = arg6;
arg5.runtimeHashMessageKey = function runtimeHashMessageKey(code) {
  let num = 0;
  const BigIntResult = BigInt(textEncoder.hash(code, 0));
  const items = [];
  const rounded = Math.ceil(Math.floor(Math.log2(Number(BigIntResult)) + 1) / 8);
  if (0 < rounded) {
    do {
      let _Number = Number;
      let _BigInt = BigInt;
      let _BigInt2 = BigInt;
      let tmp3 = BigIntResult >> BigInt(8 * num);
      let arr = items.unshift(Number(tmp3 & BigInt(255)));
      num = num + 1;
    } while (num < rounded);
  }
  const uint8Array = new Uint8Array(items);
  let reversed = uint8Array;
  if (!closure_3) {
    reversed = uint8Array.reverse();
  }
  const items1 = [dependencyMap[reversed[0] >> 2], dependencyMap[(3 & reversed[0]) << 4 | reversed[1] >> 4], dependencyMap[(15 & reversed[1]) << 2 | reversed[2] >> 6], dependencyMap[63 & reversed[2]], dependencyMap[reversed[3] >> 2], dependencyMap[(3 & reversed[3]) << 4 | reversed[4] >> 4]];
  return items1.join("");
};
let closure_2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
let uint8Array = new Uint8Array(4);
const uint32Array = new Uint32Array(uint8Array.buffer);
uint32Array[0] = 1;
let closure_3 = !(1 & uint8Array[0]);