// === Module 9367: PairwiseFingerprint ===

// Module 9367 (PairwiseFingerprint)
import _asyncToGenerator2 from "_asyncToGenerator" /* 9366 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c7, c8;

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
let obj = function _generatePairwiseFingerprint() {
  obj = _asyncToGenerator(async function(arg0, arg1, arg2, arg3, arg4) {
    let obj8;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let uint8Array;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_6 = tmp;
            let closure_5 = tmp4;
            closure_0 = undefined;
            uint8Array = undefined;
            closure_2 = undefined;
            const items = [, ];
            const obj9 = _asyncToGenerator2;
            items[0] = obj9.generateKeyFingerprint(closure_0, closure_1, closure_2);
            const obj10 = _asyncToGenerator2;
            items[1] = obj10.generateKeyFingerprint(closure_0, closure_3, closure_4);
            c7 = 1;
            c8 = 1;
            const obj4 = { value: all(items), done: false };
            return obj4;
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            const sorted = closure_0.sort(closure_134_5);
            const _Uint8Array2 = Uint8Array;
            const self3 = this;
            const self4 = this;
            uint8Array = new Uint8Array(closure_0[0].byteLength + closure_0[1].byteLength);
            const result = uint8Array.set(closure_0[0], 0);
            const result1 = uint8Array.set(closure_0[1], closure_0[0].byteLength);
            c7 = 2;
            c8 = 1;
            const obj6 = { value: obj8.scryptAsync(uint8Array, closure_134_3, closure_134_4), done: false };
            obj8 = closure_134_0(closure_134_1[2]);
            return obj6;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_2 = value;
          const _Uint8Array = Uint8Array;
          const self = this;
          const self2 = this;
          const uint8Array1 = new Uint8Array(closure_2);
          c8 = 3;
          obj = { value: uint8Array1, done: true };
          return obj;
        }
      } catch (tmp10) {
        c8 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46);
let closure_4 = { N: 16384, r: 8, p: 2, dkLen: 64 };
let result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts");

export const generatePairwiseFingerprint = function generatePairwiseFingerprint() {
  return obj(...arguments);
};