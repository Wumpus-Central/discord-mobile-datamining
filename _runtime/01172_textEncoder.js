// === Module 1172: textEncoder ===

// Module 1172 (textEncoder)
import _createClassDefault from "_createClass" /* 42 */;
import XXH64 from "_classCallCheck" /* 41 */;
import closure_1 from "_classPrivateFieldBase" /* 90 */;
import importDefaultResult1 from "_classPrivateFieldKey" /* 91 */;

let c2 = 0x009e3779b185ebca87n;
let c3 = 0x00c2b2ae3d27d4eb4fn;
let c4 = 1609587929392839161n;
let c5 = 0x0085ebca77c2b2ae63n;
let c6 = 2870177450012600261n;
let closure_7 = 2n ** 64n - 1n;
const textEncoder = new TextEncoder();
let closure_9 = importDefaultResult1("seed");
let closure_10 = importDefaultResult1("v1");
let closure_11 = importDefaultResult1("v2");
let closure_12 = importDefaultResult1("v3");
let closure_13 = importDefaultResult1("v4");
let closure_14 = importDefaultResult1("memory");
let closure_15 = importDefaultResult1("len");
let closure_16 = importDefaultResult1("memsize");
class XXH64 {
  constructor() {
    num = global;
    if (global === undefined) {
      num = 0;
    }
    tmp = XXH64(this, XXH64);
    definePropertyResult = Object.defineProperty(this, closure_9, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(this, closure_10, { writable: true, value: "a" });
    definePropertyResult2 = Object.defineProperty(this, closure_11, { writable: true, value: "a" });
    definePropertyResult3 = Object.defineProperty(this, closure_12, { writable: true, value: "a" });
    definePropertyResult4 = Object.defineProperty(this, closure_13, { writable: true, value: "a" });
    definePropertyResult5 = Object.defineProperty(this, closure_14, { writable: true, value: "a" });
    definePropertyResult6 = Object.defineProperty(this, closure_15, { writable: true, value: "a" });
    definePropertyResult7 = Object.defineProperty(this, closure_16, { writable: true, value: "a" });
    resetResult = this.reset(num);
    return;
  }
}
const items = [
  {
    key: "reset",
    value: function reset() {
      const self = this;
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = callback(self, closure_9)[closure_9];
      }
      callback(self, closure_9)[closure_9] = BigInt.asUintN(32, BigInt(tmp));
      const tmp4 = callback(self, closure_9);
      callback(self, closure_10)[closure_10] = BigInt.asUintN(64, callback(self, closure_9)[closure_9] + c2 + c3);
      const tmp5 = callback(self, closure_10);
      callback(self, closure_11)[closure_11] = BigInt.asUintN(64, callback(self, closure_9)[closure_9] + c3);
      const tmp6 = callback(self, closure_11);
      callback(self, closure_12)[closure_12] = callback(self, closure_9)[closure_9];
      const tmp7 = callback(self, closure_12);
      callback(self, closure_13)[closure_13] = BigInt.asUintN(64, callback(self, closure_9)[closure_9] - c2);
      callback(self, closure_14)[closure_14] = null;
      callback(self, closure_15)[closure_15] = 0;
      callback(self, closure_16)[closure_16] = 0;
      return self;
    }
  },
  {
    key: "update",
    value: function update(str) {
      let encodeResult = str;
      if (typeof str === "string") {
        let subarrayResult = textEncoder;
        encodeResult = textEncoder.encode(str);
      }
      const self = this;
      subarrayResult = length;
      if (0 === encodeResult.length) {
        return self;
      } else {
        subarrayResult = callback;
        subarrayResult = closure_15;
        subarrayResult = callback(self, closure_15);
        subarrayResult[closure_15] = subarrayResult[closure_15] + length;
        subarrayResult = closure_16;
        if (0 === callback(self, closure_16)[closure_16]) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(32);
          subarrayResult(self, closure_14)[closure_14] = uint8Array;
          const subarrayResultResult = subarrayResult(self, closure_14);
        }
        if (subarrayResult(self, subarrayResult)[subarrayResult] + length < 32) {
          subarrayResult = closure_14;
          subarrayResult = encodeResult.subarray(0, length);
          subarrayResult = subarrayResult(self, closure_14)[closure_14].set(subarrayResult, subarrayResult(self, subarrayResult)[subarrayResult]);
          subarrayResult = subarrayResult(self, subarrayResult);
          subarrayResult[subarrayResult] = subarrayResult[subarrayResult] + length;
          return self;
        } else {
          let num4 = 0;
          if (subarrayResult(self, subarrayResult)[subarrayResult] > 0) {
            const obj = subarrayResult(self, closure_14)[closure_14];
            const result = obj.set(encodeResult.subarray(0, 32 - subarrayResult(self, subarrayResult)[subarrayResult]), subarrayResult(self, subarrayResult)[subarrayResult]);
            const tmp12 = subarrayResult(self, closure_14)[closure_14];
            const _BigInt = BigInt;
            const _BigInt2 = BigInt;
            const subarrayResult1 = encodeResult.subarray(0, 32 - subarrayResult(self, subarrayResult)[subarrayResult]);
            const bigint = 8n;
            const _BigInt3 = BigInt;
            const BigIntResult = BigInt(tmp12[0]);
            const bigint2 = 16n;
            const _BigInt4 = BigInt;
            const tmp15 = BigInt(tmp12[0]) | BigInt(tmp12[1]) << 8n;
            const bigint3 = 24n;
            const _BigInt5 = BigInt;
            const tmp16 = BigInt(tmp12[0]) | BigInt(tmp12[1]) << 8n | BigInt(tmp12[2]) << 16n;
            const bigint4 = 32n;
            const _BigInt6 = BigInt;
            const tmp17 = BigInt(tmp12[0]) | BigInt(tmp12[1]) << 8n | BigInt(tmp12[2]) << 16n | BigInt(tmp12[3]) << 24n;
            const bigint5 = 40n;
            const _BigInt7 = BigInt;
            const tmp18 = BigInt(tmp12[0]) | BigInt(tmp12[1]) << 8n | BigInt(tmp12[2]) << 16n | BigInt(tmp12[3]) << 24n | BigInt(tmp12[4]) << 32n;
            const bigint6 = 48n;
            const _BigInt8 = BigInt;
            const tmp19 = BigInt(tmp12[0]) | BigInt(tmp12[1]) << 8n | BigInt(tmp12[2]) << 16n | BigInt(tmp12[3]) << 24n | BigInt(tmp12[4]) << 32n | BigInt(tmp12[5]) << 40n;
            const bigint7 = 56n;
            const tmp20 = BigInt(tmp12[0]) | BigInt(tmp12[1]) << 8n | BigInt(tmp12[2]) << 16n | BigInt(tmp12[3]) << 24n | BigInt(tmp12[4]) << 32n | BigInt(tmp12[5]) << 40n | BigInt(tmp12[6]) << 48n;
            const tmp21 = BigInt(tmp12[0]) | BigInt(tmp12[1]) << 8n | BigInt(tmp12[2]) << 16n | BigInt(tmp12[3]) << 24n | BigInt(tmp12[4]) << 32n | BigInt(tmp12[5]) << 40n | BigInt(tmp12[6]) << 48n | BigInt(tmp12[7]) << 56n;
            const _BigInt9 = BigInt;
            const asUintNResult = BigInt.asUintN(64, subarrayResult(self, closure_10)[closure_10] + tmp21 * c3);
            const bigint8 = 31n;
            const bigint9 = 64n;
            const diff = 64n - 31n;
            const _BigInt10 = BigInt;
            subarrayResult(self, closure_10)[closure_10] = BigInt.asUintN(64, (asUintNResult << 31n & closure_7 | asUintNResult >> diff) * c2);
            const memory = self.memory;
            const _BigInt11 = BigInt;
            const _BigInt12 = BigInt;
            const subarrayResultResult1 = subarrayResult(self, closure_10);
            const _BigInt13 = BigInt;
            const BigIntResult1 = BigInt(memory[8]);
            const _BigInt14 = BigInt;
            const tmp30 = BigInt(memory[8]) | BigInt(memory[9]) << 8n;
            const _BigInt15 = BigInt;
            const tmp31 = BigInt(memory[8]) | BigInt(memory[9]) << 8n | BigInt(memory[10]) << 16n;
            const _BigInt16 = BigInt;
            const tmp32 = BigInt(memory[8]) | BigInt(memory[9]) << 8n | BigInt(memory[10]) << 16n | BigInt(memory[11]) << 24n;
            const _BigInt17 = BigInt;
            const tmp33 = BigInt(memory[8]) | BigInt(memory[9]) << 8n | BigInt(memory[10]) << 16n | BigInt(memory[11]) << 24n | BigInt(memory[12]) << 32n;
            const _BigInt18 = BigInt;
            const tmp34 = BigInt(memory[8]) | BigInt(memory[9]) << 8n | BigInt(memory[10]) << 16n | BigInt(memory[11]) << 24n | BigInt(memory[12]) << 32n | BigInt(memory[13]) << 40n;
            const tmp35 = BigInt(memory[8]) | BigInt(memory[9]) << 8n | BigInt(memory[10]) << 16n | BigInt(memory[11]) << 24n | BigInt(memory[12]) << 32n | BigInt(memory[13]) << 40n | BigInt(memory[14]) << 48n;
            const tmp36 = BigInt(memory[8]) | BigInt(memory[9]) << 8n | BigInt(memory[10]) << 16n | BigInt(memory[11]) << 24n | BigInt(memory[12]) << 32n | BigInt(memory[13]) << 40n | BigInt(memory[14]) << 48n | BigInt(memory[15]) << 56n;
            const _BigInt19 = BigInt;
            const asUintNResult1 = BigInt.asUintN(64, subarrayResult(self, closure_11)[closure_11] + tmp36 * c3);
            const _BigInt20 = BigInt;
            subarrayResult(self, closure_11)[closure_11] = BigInt.asUintN(64, (asUintNResult1 << 31n & closure_7 | asUintNResult1 >> diff) * c2);
            const memory2 = self.memory;
            const _BigInt21 = BigInt;
            const _BigInt22 = BigInt;
            const subarrayResultResult2 = subarrayResult(self, closure_11);
            const _BigInt23 = BigInt;
            const BigIntResult2 = BigInt(memory2[16]);
            const _BigInt24 = BigInt;
            const tmp41 = BigInt(memory2[16]) | BigInt(memory2[17]) << 8n;
            const _BigInt25 = BigInt;
            const tmp42 = BigInt(memory2[16]) | BigInt(memory2[17]) << 8n | BigInt(memory2[18]) << 16n;
            const _BigInt26 = BigInt;
            const tmp43 = BigInt(memory2[16]) | BigInt(memory2[17]) << 8n | BigInt(memory2[18]) << 16n | BigInt(memory2[19]) << 24n;
            const _BigInt27 = BigInt;
            const tmp44 = BigInt(memory2[16]) | BigInt(memory2[17]) << 8n | BigInt(memory2[18]) << 16n | BigInt(memory2[19]) << 24n | BigInt(memory2[20]) << 32n;
            const _BigInt28 = BigInt;
            const tmp45 = BigInt(memory2[16]) | BigInt(memory2[17]) << 8n | BigInt(memory2[18]) << 16n | BigInt(memory2[19]) << 24n | BigInt(memory2[20]) << 32n | BigInt(memory2[21]) << 40n;
            const tmp46 = BigInt(memory2[16]) | BigInt(memory2[17]) << 8n | BigInt(memory2[18]) << 16n | BigInt(memory2[19]) << 24n | BigInt(memory2[20]) << 32n | BigInt(memory2[21]) << 40n | BigInt(memory2[22]) << 48n;
            const tmp47 = BigInt(memory2[16]) | BigInt(memory2[17]) << 8n | BigInt(memory2[18]) << 16n | BigInt(memory2[19]) << 24n | BigInt(memory2[20]) << 32n | BigInt(memory2[21]) << 40n | BigInt(memory2[22]) << 48n | BigInt(memory2[23]) << 56n;
            const _BigInt29 = BigInt;
            const asUintNResult2 = BigInt.asUintN(64, subarrayResult(self, closure_12)[closure_12] + tmp47 * c3);
            const _BigInt30 = BigInt;
            subarrayResult(self, closure_12)[closure_12] = BigInt.asUintN(64, (asUintNResult2 << 31n & closure_7 | asUintNResult2 >> diff) * c2);
            const memory3 = self.memory;
            const _BigInt31 = BigInt;
            const _BigInt32 = BigInt;
            const subarrayResultResult3 = subarrayResult(self, closure_12);
            const _BigInt33 = BigInt;
            const BigIntResult3 = BigInt(memory3[24]);
            const _BigInt34 = BigInt;
            const tmp52 = BigInt(memory3[24]) | BigInt(memory3[25]) << 8n;
            const _BigInt35 = BigInt;
            const tmp53 = BigInt(memory3[24]) | BigInt(memory3[25]) << 8n | BigInt(memory3[26]) << 16n;
            const _BigInt36 = BigInt;
            const tmp54 = BigInt(memory3[24]) | BigInt(memory3[25]) << 8n | BigInt(memory3[26]) << 16n | BigInt(memory3[27]) << 24n;
            const _BigInt37 = BigInt;
            const tmp55 = BigInt(memory3[24]) | BigInt(memory3[25]) << 8n | BigInt(memory3[26]) << 16n | BigInt(memory3[27]) << 24n | BigInt(memory3[28]) << 32n;
            const _BigInt38 = BigInt;
            const tmp56 = BigInt(memory3[24]) | BigInt(memory3[25]) << 8n | BigInt(memory3[26]) << 16n | BigInt(memory3[27]) << 24n | BigInt(memory3[28]) << 32n | BigInt(memory3[29]) << 40n;
            const tmp57 = BigInt(memory3[24]) | BigInt(memory3[25]) << 8n | BigInt(memory3[26]) << 16n | BigInt(memory3[27]) << 24n | BigInt(memory3[28]) << 32n | BigInt(memory3[29]) << 40n | BigInt(memory3[30]) << 48n;
            const tmp58 = BigInt(memory3[24]) | BigInt(memory3[25]) << 8n | BigInt(memory3[26]) << 16n | BigInt(memory3[27]) << 24n | BigInt(memory3[28]) << 32n | BigInt(memory3[29]) << 40n | BigInt(memory3[30]) << 48n | BigInt(memory3[31]) << 56n;
            const _BigInt39 = BigInt;
            const asUintNResult3 = BigInt.asUintN(64, subarrayResult(self, closure_13)[closure_13] + tmp58 * c3);
            const _BigInt40 = BigInt;
            subarrayResult(self, closure_13)[closure_13] = BigInt.asUintN(64, (asUintNResult3 << 31n & closure_7 | asUintNResult3 >> diff) * c2);
            num4 = 32 - subarrayResult(self, subarrayResult)[subarrayResult];
            subarrayResult(self, subarrayResult)[subarrayResult] = 0;
            const subarrayResultResult4 = subarrayResult(self, closure_13);
          }
          const diff1 = subarrayResult - 32;
          const bigint10 = 8n;
          const bigint11 = 16n;
          const bigint12 = 24n;
          const bigint13 = 32n;
          const bigint14 = 40n;
          const bigint15 = 48n;
          const bigint16 = 56n;
          const bigint17 = 31n;
          const bigint18 = 64n;
          const diff2 = 64n - 31n;
          let sum2 = num4;
          let tmp66 = subarrayResult;
          let tmp67 = num4;
          if (num4 <= diff1) {
            do {
              let _BigInt41 = BigInt;
              let _BigInt42 = BigInt;
              let BigIntResult4 = BigInt(encodeResult[sum2]);
              let _BigInt43 = BigInt;
              let tmp69 = BigIntResult4 | BigInt(encodeResult[sum2 + 1]) << 8n;
              let _BigInt44 = BigInt;
              let tmp70 = tmp69 | BigInt(encodeResult[sum2 + 2]) << 16n;
              let _BigInt45 = BigInt;
              let tmp71 = tmp70 | BigInt(encodeResult[sum2 + 3]) << 24n;
              let _BigInt46 = BigInt;
              let tmp72 = tmp71 | BigInt(encodeResult[sum2 + 4]) << 32n;
              let _BigInt47 = BigInt;
              let tmp73 = tmp72 | BigInt(encodeResult[sum2 + 5]) << 40n;
              let _BigInt48 = BigInt;
              let tmp74 = tmp73 | BigInt(encodeResult[sum2 + 6]) << 48n;
              let tmp76 = callback;
              let tmp77 = closure_10;
              let tmp75 = tmp74 | BigInt(encodeResult[sum2 + 7]) << 56n;
              let tmp78 = callback(self, closure_10);
              let tmp79 = c3;
              let _BigInt49 = BigInt;
              let asUintNResult4 = BigInt.asUintN(64, callback(self, closure_10)[closure_10] + tmp75 * c3);
              let tmp81 = closure_7;
              let tmp82 = c2;
              let _BigInt50 = BigInt;
              tmp78[closure_10] = BigInt.asUintN(64, (asUintNResult4 << 31n & closure_7 | asUintNResult4 >> diff2) * c2);
              let sum = sum2 + 8;
              let _BigInt51 = BigInt;
              let _BigInt52 = BigInt;
              let BigIntResult5 = BigInt(encodeResult[sum]);
              let _BigInt53 = BigInt;
              let tmp85 = BigIntResult5 | BigInt(encodeResult[sum + 1]) << 8n;
              let _BigInt54 = BigInt;
              let tmp86 = tmp85 | BigInt(encodeResult[sum + 2]) << 16n;
              let _BigInt55 = BigInt;
              let tmp87 = tmp86 | BigInt(encodeResult[sum + 3]) << 24n;
              let _BigInt56 = BigInt;
              let tmp88 = tmp87 | BigInt(encodeResult[sum + 4]) << 32n;
              let _BigInt57 = BigInt;
              let tmp89 = tmp88 | BigInt(encodeResult[sum + 5]) << 40n;
              let _BigInt58 = BigInt;
              let tmp90 = tmp89 | BigInt(encodeResult[sum + 6]) << 48n;
              let tmp92 = closure_11;
              let tmp91 = tmp90 | BigInt(encodeResult[sum + 7]) << 56n;
              let tmp93 = callback(self, closure_11);
              let _BigInt59 = BigInt;
              let asUintNResult5 = BigInt.asUintN(64, callback(self, closure_11)[closure_11] + tmp91 * c3);
              let _BigInt60 = BigInt;
              tmp93[closure_11] = BigInt.asUintN(64, (asUintNResult5 << 31n & closure_7 | asUintNResult5 >> diff2) * c2);
              let sum1 = sum + 8;
              let _BigInt61 = BigInt;
              let _BigInt62 = BigInt;
              let BigIntResult6 = BigInt(encodeResult[sum1]);
              let _BigInt63 = BigInt;
              let tmp97 = BigIntResult6 | BigInt(encodeResult[sum1 + 1]) << 8n;
              let _BigInt64 = BigInt;
              let tmp98 = tmp97 | BigInt(encodeResult[sum1 + 2]) << 16n;
              let _BigInt65 = BigInt;
              let tmp99 = tmp98 | BigInt(encodeResult[sum1 + 3]) << 24n;
              let _BigInt66 = BigInt;
              subarrayResult = tmp99 | BigInt(encodeResult[sum1 + 4]) << 32n;
              let _BigInt67 = BigInt;
              subarrayResult = subarrayResult | BigInt(encodeResult[sum1 + 5]) << 40n;
              let _BigInt68 = BigInt;
              subarrayResult = subarrayResult | BigInt(encodeResult[sum1 + 6]) << 48n;
              subarrayResult = closure_12;
              subarrayResult = subarrayResult | BigInt(encodeResult[sum1 + 7]) << 56n;
              subarrayResult = callback(self, closure_12);
              let _BigInt69 = BigInt;
              subarrayResult = BigInt.asUintN(64, callback(self, closure_12)[closure_12] + subarrayResult * c3);
              let _BigInt70 = BigInt;
              subarrayResult[closure_12] = BigInt.asUintN(64, (subarrayResult << 31n & closure_7 | subarrayResult >> diff2) * c2);
              subarrayResult = sum1 + 8;
              let _BigInt71 = BigInt;
              let _BigInt72 = BigInt;
              subarrayResult = BigInt(encodeResult[subarrayResult]);
              let _BigInt73 = BigInt;
              subarrayResult = subarrayResult | BigInt(encodeResult[subarrayResult + 1]) << 8n;
              let _BigInt74 = BigInt;
              subarrayResult = subarrayResult | BigInt(encodeResult[subarrayResult + 2]) << 16n;
              let _BigInt75 = BigInt;
              subarrayResult = subarrayResult | BigInt(encodeResult[subarrayResult + 3]) << 24n;
              let _BigInt76 = BigInt;
              subarrayResult = subarrayResult | BigInt(encodeResult[subarrayResult + 4]) << 32n;
              let _BigInt77 = BigInt;
              subarrayResult = subarrayResult | BigInt(encodeResult[subarrayResult + 5]) << 40n;
              let _BigInt78 = BigInt;
              subarrayResult = subarrayResult | BigInt(encodeResult[subarrayResult + 6]) << 48n;
              subarrayResult = closure_13;
              subarrayResult = subarrayResult | BigInt(encodeResult[subarrayResult + 7]) << 56n;
              subarrayResult = callback(self, closure_13);
              let _BigInt79 = BigInt;
              subarrayResult = BigInt.asUintN(64, callback(self, closure_13)[closure_13] + subarrayResult * c3);
              let _BigInt80 = BigInt;
              subarrayResult[closure_13] = BigInt.asUintN(64, (subarrayResult << 31n & closure_7 | subarrayResult >> diff2) * c2);
              sum2 = subarrayResult + 8;
              tmp66 = callback;
              tmp67 = sum2;
            } while (sum2 <= diff1);
          }
          if (tmp67 < subarrayResult) {
            subarrayResult = closure_14;
            subarrayResult = closure_16;
            subarrayResult = encodeResult.subarray(tmp67, subarrayResult);
            subarrayResult = tmp66(self, closure_14)[closure_14].set(subarrayResult, tmp66(self, closure_16)[closure_16]);
            tmp66(self, closure_16)[closure_16] = subarrayResult - tmp67;
            const obj2 = tmp66(self, closure_14)[closure_14];
          }
          return self;
        }
      }
    }
  },
  {
    key: "digest",
    value: function digest() {
      let diff1;
      let sum5;
      const self = this;
      const tmp2 = callback(this, closure_14)[closure_14];
      const tmp3 = callback(this, closure_16)[closure_16];
      if (callback(this, closure_15)[closure_15] >= 32) {
        const tmp10 = tmp(self, closure_10)[closure_10];
        const bigint = 1n;
        const bigint2 = 64n;
        const tmp14 = tmp(self, closure_11)[closure_11];
        const bigint3 = 7n;
        const sum = (tmp10 << 1n & closure_7 | tmp10 >> 64n - 1n) + (tmp14 << 7n & closure_7 | tmp14 >> 64n - 7n);
        const tmp17 = tmp(self, closure_12)[closure_12];
        const bigint4 = 12n;
        const sum1 = sum + (tmp17 << 12n & closure_7 | tmp17 >> 64n - 12n);
        const tmp20 = tmp(self, closure_13)[closure_13];
        const bigint5 = 18n;
        const sum2 = sum1 + (tmp20 << 18n & closure_7 | tmp20 >> 64n - 18n);
        const _BigInt2 = BigInt;
        const asUintNResult = BigInt.asUintN(64, tmp(self, closure_10)[closure_10] * c3);
        const bigint6 = 31n;
        const diff = 64n - 31n;
        const _BigInt3 = BigInt;
        const _BigInt4 = BigInt;
        const _BigInt5 = BigInt;
        const asUintNResult2 = BigInt.asUintN(64, tmp(self, closure_11)[closure_11] * c3);
        const _BigInt6 = BigInt;
        const _BigInt7 = BigInt;
        const asUintNResult1 = BigInt.asUintN(64, BigInt.asUintN(64, sum2 ^ (asUintNResult << 31n & closure_7 | asUintNResult >> diff) * c2) * c2 + c5);
        const tmp12 = tmp10 << 1n & closure_7 | tmp10 >> 64n - 1n;
        const _BigInt8 = BigInt;
        const asUintNResult4 = BigInt.asUintN(64, tmp(self, closure_12)[closure_12] * c3);
        const _BigInt9 = BigInt;
        const _BigInt10 = BigInt;
        const asUintNResult3 = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, sum2 ^ (asUintNResult << 31n & closure_7 | asUintNResult >> diff) * c2) * c2 + c5) ^ (asUintNResult2 << 31n & closure_7 | asUintNResult2 >> diff) * c2) * c2 + c5);
        const _BigInt11 = BigInt;
        const asUintNResult6 = BigInt.asUintN(64, tmp(self, closure_13)[closure_13] * c3);
        const _BigInt12 = BigInt;
        const _BigInt13 = BigInt;
        let asUintNResult7 = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, sum2 ^ (asUintNResult << 31n & closure_7 | asUintNResult >> diff) * c2) * c2 + c5) ^ (asUintNResult2 << 31n & closure_7 | asUintNResult2 >> diff) * c2) * c2 + c5) ^ (asUintNResult4 << 31n & closure_7 | asUintNResult4 >> diff) * c2) * c2 + c5) ^ (asUintNResult6 << 31n & closure_7 | asUintNResult6 >> diff) * c2) * c2 + c5);
        const asUintNResult5 = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, sum2 ^ (asUintNResult << 31n & closure_7 | asUintNResult >> diff) * c2) * c2 + c5) ^ (asUintNResult2 << 31n & closure_7 | asUintNResult2 >> diff) * c2) * c2 + c5) ^ (asUintNResult4 << 31n & closure_7 | asUintNResult4 >> diff) * c2) * c2 + c5);
      } else {
        const _BigInt = BigInt;
        asUintNResult7 = BigInt.asUintN(64, tmp(self, closure_9)[closure_9] + c6);
      }
      let sum3 = asUintNResult7 + BigInt(tmp(self, tmp4)[tmp4]);
      let num3 = 0;
      let tmp37 = sum3;
      let num4 = 0;
      if (0 <= tmp3 - 8) {
        do {
          let _BigInt14 = BigInt;
          let _BigInt15 = BigInt;
          let BigIntResult = BigInt(tmp2[num3]);
          let _BigInt16 = BigInt;
          let tmp39 = BigIntResult | BigInt(tmp2[num3 + 1]) << 8n;
          let _BigInt17 = BigInt;
          let tmp40 = tmp39 | BigInt(tmp2[num3 + 2]) << 16n;
          let _BigInt18 = BigInt;
          let tmp41 = tmp40 | BigInt(tmp2[num3 + 3]) << 24n;
          let _BigInt19 = BigInt;
          let tmp42 = tmp41 | BigInt(tmp2[num3 + 4]) << 32n;
          let _BigInt20 = BigInt;
          let tmp43 = tmp42 | BigInt(tmp2[num3 + 5]) << 40n;
          let _BigInt21 = BigInt;
          let tmp44 = tmp43 | BigInt(tmp2[num3 + 6]) << 48n;
          let tmp45 = c3;
          let _BigInt22 = BigInt;
          let asUintNResult8 = BigInt.asUintN(64, (tmp44 | BigInt(tmp2[num3 + 7]) << 56n) * c3);
          let tmp47 = closure_7;
          let tmp48 = c2;
          let _BigInt23 = BigInt;
          let tmp49 = sum3 ^ BigInt.asUintN(64, (asUintNResult8 << 31n & closure_7 | asUintNResult8 >> tmp35) * c2);
          let tmp50 = c5;
          let _BigInt24 = BigInt;
          sum3 = BigInt.asUintN(64, (tmp49 << 27n & closure_7 | tmp49 >> tmp36) * c2 + c5);
          num3 = num3 + 8;
          tmp37 = sum3;
          num4 = num3;
          diff1 = tmp3 - 8;
        } while (num3 <= diff1);
      }
      const sum4 = num4 + 4;
      let asUintNResult9 = tmp37;
      let tmp54 = num4;
      if (sum4 <= tmp3) {
        const _BigInt31 = BigInt;
        const _BigInt32 = BigInt;
        const _BigInt33 = BigInt;
        const BigIntResult1 = BigInt(tmp2[num4 + 1] << 8 | tmp2[num4]);
        const tmp68 = tmp2[num4 + 3] << 8 | tmp2[num4 + 2];
        const _BigInt34 = BigInt;
        const tmp70 = BigInt(tmp2[num4 + 1] << 8 | tmp2[num4]) | BigInt(tmp2[num4 + 3] << 8 | tmp2[num4 + 2]) << 16n;
        const _BigInt35 = BigInt;
        const tmp73 = tmp37 ^ BigInt.asUintN(64, (BigInt(tmp2[num4 + 1] << 8 | tmp2[num4]) | BigInt(tmp2[num4 + 3] << 8 | tmp2[num4 + 2]) << 16n | BigInt(0) << 32n | BigInt(0) << 48n) * c2);
        const bigint7 = 23n;
        const _BigInt36 = BigInt;
        asUintNResult9 = BigInt.asUintN(64, (tmp73 << 23n & closure_7 | tmp73 >> 64n - 23n) * c3 + c4);
        tmp54 = sum4;
        const tmp71 = BigInt(tmp2[num4 + 1] << 8 | tmp2[num4]) | BigInt(tmp2[num4 + 3] << 8 | tmp2[num4 + 2]) << 16n | BigInt(0) << 32n;
      }
      let asUintNResult10 = asUintNResult9;
      let tmp57 = asUintNResult9;
      if (tmp54 < tmp3) {
        do {
          sum5 = tmp54 + 1;
          let _BigInt25 = BigInt;
          let _BigInt26 = BigInt;
          let BigIntResult2 = BigInt(tmp2[tmp54]);
          let _BigInt27 = BigInt;
          let tmp60 = BigIntResult2 | BigInt(0) << 16n;
          let _BigInt28 = BigInt;
          let tmp61 = tmp60 | BigInt(0) << 32n;
          let tmp62 = c6;
          let _BigInt29 = BigInt;
          let tmp63 = asUintNResult10 ^ BigInt.asUintN(64, (tmp61 | BigInt(0) << 48n) * c6);
          let tmp64 = closure_7;
          let tmp65 = c2;
          let _BigInt30 = BigInt;
          asUintNResult10 = BigInt.asUintN(64, (tmp63 << 11n & closure_7 | tmp63 >> tmp55) * c2);
          tmp57 = asUintNResult10;
          tmp54 = sum5;
        } while (sum5 < tmp3);
      }
      const asUintNResult11 = BigInt.asUintN(64, (tmp57 ^ BigInt.asUintN(64, tmp57 >> 33n)) * c3);
      const asUintNResult12 = BigInt.asUintN(64, (asUintNResult11 ^ BigInt.asUintN(64, asUintNResult11 >> 29n)) * c4);
      return BigInt.asUintN(64, asUintNResult12 ^ BigInt.asUintN(64, asUintNResult12 >> 32n));
    }
  }
];
const importDefaultResultResult = _createClassDefault(XXH64, items);

export const XXH64 = importDefaultResultResult;
export const hash = function hash(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  const obj = new closure_17(num);
  return new closure_17(num).update(arg0).digest();
};