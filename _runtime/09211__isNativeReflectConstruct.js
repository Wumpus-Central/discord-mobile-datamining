// _runtime/09211__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import c3 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

let SHA224 = require;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const uint32Array = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
const uint32Array1 = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
const uint32Array2 = new Uint32Array(64);
class SHA256 {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, SHA224);
    items = [64, 32, 8];
    items[3] = false;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(SHA224);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.A = outer1_7[0] | 0;
    tmp3Result.B = outer1_7[1] | 0;
    tmp3Result.C = outer1_7[2] | 0;
    tmp3Result.D = outer1_7[3] | 0;
    tmp3Result.E = outer1_7[4] | 0;
    tmp3Result.F = outer1_7[5] | 0;
    tmp3Result.G = outer1_7[6] | 0;
    tmp3Result.H = outer1_7[7] | 0;
    return tmp3Result;
  }
}
SHA224 = SHA256;
_inherits(SHA256, require("_isNativeReflectConstruct").HashMD);
let items = [
  {
    key: "get",
    value: function get() {
      const items = [, , , , , , , ];
      ({ A: arr[0], B: arr[1], C: arr[2], D: arr[3], E: arr[4], F: arr[5], G: arr[6], H: arr[7] } = this);
      return items;
    }
  },
  {
    key: "set",
    value: function set(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {

    }
  },
  {
    key: "process",
    value: function process(getUint32, sum) {
      let A;
      let B;
      let C;
      let D;
      let E;
      let F;
      let G;
      let H;
      let num2;
      let tmp22;
      let tmp23;
      let tmp24;
      let tmp25;
      let tmp26;
      let tmp27;
      let tmp28;
      let tmp29;
      let num = 0;
      do {
        let tmp2 = uint32Array2;
        uint32Array2[num] = getUint32.getUint32(sum, false);
        num = num + 1;
        sum = sum + 4;
        num2 = 16;
      } while (num < 16);
      do {
        let tmp3 = uint32Array2;
        let tmp4 = uint32Array2[num2 - 15];
        let tmp5 = uint32Array2[num2 - 2];
        let tmp6 = SHA224;
        let tmp7 = dependencyMap;
        let rotrResult = SHA224(9206).rotr(tmp4, 7);
        let tmp9 = rotrResult ^ SHA224(9206).rotr(tmp4, 18) ^ tmp4 >>> 3;
        let rotrResult1 = SHA224(9206).rotr(tmp5, 17);
        uint32Array2[num2] = (rotrResult1 ^ SHA224(9206).rotr(tmp5, 19) ^ tmp5 >>> 10) + uint32Array2[num2 - 7] + tmp9 + uint32Array2[num2 - 16] | 0;
        num2 = num2 + 1;
      } while (num2 < 64);
      const self = this;
      ({ A, B, C, D, E, F, G, H } = this);
      let num3 = 0;
      do {
        let tmp11 = SHA224;
        let tmp12 = dependencyMap;
        let rotrResult2 = SHA224(9206).rotr(E, 6);
        let tmp14 = rotrResult2 ^ SHA224(9206).rotr(E, 11);
        let sum1 = H + (tmp14 ^ SHA224(9206).rotr(E, 25));
        let tmp16 = uint32Array;
        let tmp17 = uint32Array2;
        let tmp18 = sum1 + SHA224(9212).Chi(E, F, G) + uint32Array[num3] + uint32Array2[num3] | 0;
        let rotrResult3 = SHA224(9206).rotr(A, 2);
        let tmp20 = rotrResult3 ^ SHA224(9206).rotr(A, 13);
        let tmp21 = tmp20 ^ SHA224(9206).rotr(A, 22);
        tmp22 = D + tmp18 | 0;
        tmp23 = tmp18 + (tmp21 + SHA224(9212).Maj(A, B, C) | 0) | 0;
        num3 = num3 + 1;
        H = G;
        tmp24 = G;
        G = F;
        tmp25 = F;
        F = E;
        tmp26 = E;
        E = tmp22;
        D = C;
        tmp27 = C;
        C = B;
        tmp28 = B;
        B = A;
        tmp29 = A;
        A = tmp23;
      } while (num3 < 64);
      const result = self.set(tmp23 + self.A | 0, tmp29 + self.B | 0, tmp28 + self.C | 0, tmp27 + self.D | 0, tmp22 + self.E | 0, tmp26 + self.F | 0, tmp25 + self.G | 0, tmp24 + self.H | 0);
    }
  },
  {
    key: "roundClean",
    value: function roundClean() {
      uint32Array2.fill(0);
    }
  },
  {
    key: "destroy",
    value: function destroy() {
      const result = this.set(0, 0, 0, 0, 0, 0, 0, 0);
      const buffer = this.buffer;
      buffer.fill(0);
    }
  }
];
const _moduleResult = _createClass(SHA256, items);
let c9 = _moduleResult;
class SHA224 {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, SHA224);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(SHA224);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.A = -1056596264;
    tmp3Result.B = 914150663;
    tmp3Result.C = 812702999;
    tmp3Result.D = -150054599;
    tmp3Result.E = -4191439;
    tmp3Result.F = 1750603025;
    tmp3Result.G = 1694076839;
    tmp3Result.H = -1090891868;
    tmp3Result.outputLen = 28;
    return tmp3Result;
  }
}
_inherits(SHA224, _moduleResult);
let closure_10 = _createClass(SHA224);

export const SHA256 = _moduleResult;
export const sha256 = require("_asyncLoop").wrapConstructor(() => new closure_9());
export const sha224 = require("_asyncLoop").wrapConstructor(() => new closure_10());