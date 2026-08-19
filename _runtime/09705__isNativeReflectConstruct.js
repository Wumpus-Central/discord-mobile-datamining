// === Module 9705: _isNativeReflectConstruct ===

// Module 9705 (_isNativeReflectConstruct)
import _asyncLoop from "_asyncLoop" /* 9699 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const HashMD = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class HashMD {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = closure_2(this, HashMD);
    tmp2 = closure_4;
    obj = closure_4(HashMD);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.blockLen = global;
    tmp3Result.outputLen = require;
    tmp3Result.padOffset = importDefault;
    tmp3Result.isLE = importAll;
    tmp3Result.finished = false;
    tmp3Result.length = 0;
    tmp3Result.pos = 0;
    tmp3Result.destroyed = false;
    uint8Array = new Uint8Array(global);
    tmp3Result.buffer = uint8Array;
    tmp3Result.view = require("_asyncLoop").createView(tmp3Result.buffer);
    return tmp3Result;
  }
}
_inherits(HashMD, _asyncLoop.Hash);
let items = [
  {
    key: "update",
    value: function update(B) {
      let tmp8;
      const self = this;
      HashMD(9700).exists(this);
      ({ buffer, blockLen, view } = this);
      const toBytesResult = HashMD(9699).toBytes(B);
      let num = 0;
      if (0 < toBytesResult.length) {
        do {
          let _Math = Math;
          let bound = Math.min(blockLen - self.pos, length - num);
          if (bound !== blockLen) {
            let result = buffer.set(toBytesResult.subarray(num, num + bound), self.pos);
            self.pos = self.pos + bound;
            let sum = num + bound;
            tmp8 = sum;
            if (self.pos === blockLen) {
              let processResult = self.process(view, 0);
              self.pos = 0;
              tmp8 = sum;
            }
          } else {
            let tmp7 = num;
            tmp8 = num;
            if (blockLen <= length - num) {
              do {
                let processResult1 = self.process(tmp6, tmp7);
                let sum1 = tmp7 + blockLen;
                tmp7 = sum1;
                tmp8 = sum1;
                diff = length - sum1;
              } while (blockLen <= diff);
            }
          }
          num = tmp8;
        } while (tmp8 < length);
      }
      self.length = self.length + toBytesResult.length;
      self.roundClean();
      return self;
    }
  },
  {
    key: "digestInto",
    value: function digestInto(content) {
      const self = this;
      HashMD(9700).exists(this);
      HashMD(9700).output(content, this);
      this.finished = true;
      ({ buffer, view, blockLen, isLE } = this);
      let num = tmp3 + 1;
      buffer[+this.pos] = 128;
      const buffer2 = this.buffer;
      buffer2.subarray(num).fill(0);
      if (this.padOffset > blockLen - num) {
        self.process(view, 0);
        num = 0;
      }
      if (num < blockLen) {
        do {
          buffer[num] = 0;
          num = num + 1;
        } while (num < blockLen);
      }
      const diff = blockLen - 8;
      const BigIntResult = BigInt(8 * self.length);
      if (typeof view.setBigUint64 === "function") {
        view.setBigUint64(diff, BigIntResult, isLE);
      } else {
        const _BigInt = BigInt;
        const _BigInt2 = BigInt;
        const BigIntResult2 = BigInt(4294967295);
        const _Number = Number;
        const _Number2 = Number;
        const BigIntResult1 = BigInt(32);
        let num2 = 0;
        const NumberResult = Number(BigIntResult >> BigInt(32) & BigIntResult2);
        if (isLE) {
          num2 = 4;
        }
        let num3 = 4;
        if (isLE) {
          num3 = 0;
        }
        view.setUint32(diff + num2, NumberResult, isLE);
        view.setUint32(diff + num3, Number(BigIntResult & BigIntResult2), isLE);
        const NumberResult1 = Number(BigIntResult & BigIntResult2);
      }
      self.process(view, 0);
      view = HashMD(9699).createView(content);
      const outputLen = self.outputLen;
      if (outputLen % 4) {
        const _Error2 = Error;
        error = new Error("_sha2: outputLen should be aligned to 32bit");
        throw error;
      } else {
        const result = outputLen / 4;
        const value = self.get();
        if (result > value.length) {
          const _Error = Error;
          const error1 = new Error("_sha2: outputLen bigger than state");
          throw error1;
        } else {
          let num5 = 0;
          if (0 < result) {
            do {
              let setUint32Result2 = view.setUint32(4 * num5, value[num5], isLE);
              num5 = num5 + 1;
            } while (num5 < result);
          }
        }
      }
      const subarrayResult = buffer2.subarray(num);
    }
  },
  {
    key: "digest",
    value: function digest() {
      ({ buffer, outputLen } = this);
      this.digestInto(buffer);
      const substr = buffer.slice(0, outputLen);
      this.destroy();
      return substr;
    }
  },
  {
    key: "_cloneInto",
    value: function _cloneInto(arg0) {
      const self = this;
      let constructor = arg0;
      if (!arg0) {
        constructor = new self.constructor();
      }
      const items = [...self.get()];
      constructor.set.apply(items);
      constructor.length = self.length;
      ({ pos: tmp.pos, finished: tmp.finished, destroyed: tmp.destroyed } = self);
      if (self.length % self.blockLen) {
        const buffer = constructor.buffer;
        const result = buffer.set(tmp5);
      }
      return constructor;
    }
  }
];

export const Chi = (E, F, G) => E & F ^ ~E & G;
export const Maj = (A, B, C) => A & B ^ A & C ^ B & C;
export const HashMD = _createClass(HashMD, items);