// _runtime/07799__isNativeReflectConstruct.js
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _classCallCheck from "_classCallCheck";
import importDefaultResult1 from "_createClass";
import { findNodeHandle } from "get ActivityIndicator";

let Shape = arg1;
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
let closure_8 = Math.PI / 180;
class SVGMatrix {
  constructor(arg0) {
    self = this;
    tmp = outer1_5(this, Shape);
    if (global) {
      ({ a: self.a, b: self.b, c: self.c, d: self.d, e: self.e, f: self.f } = global);
    } else {
      num = 1;
      self.a = 1;
      num2 = 0;
      self.b = 0;
      self.c = 0;
      self.d = 1;
      self.e = 0;
      self.f = 0;
    }
    return;
  }
}
Shape = SVGMatrix;
let obj = {
  key: "multiply",
  value: function multiply(arg0) {
    let a;
    let a2;
    let b;
    let b2;
    let c;
    let c2;
    let d;
    let d2;
    let e;
    let f;
    ({ a, b, c, d } = this);
    ({ a: a2, b: b2, c: c2, d: d2, e, f } = arg0);
    let obj = { a: a * a2 + c * b2, c: a * c2 + c * d2, e: a * e + c * f + this.e, b: b * a2 + d * b2, d: b * c2 + d * d2, f: b * e + d * f + this.f };
    obj = Object.create(Shape.prototype);
    callback2(obj, Shape);
    ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
    return obj;
  }
};
let items = [
  obj,
  {
    key: "inverse",
    value: function inverse() {
      let a;
      let b;
      let c;
      let d;
      let e;
      let f;
      ({ a, b, c, d, e, f } = this);
      const diff = a * d - b * c;
      let obj = { a: d / diff, b: -b / diff, c: -c / diff, d: a / diff, e: (c * f - d * e) / diff, f: -a * f - b * e / diff };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp2.a, b: tmp2.b, c: tmp2.c, d: tmp2.d, e: tmp2.e, f: tmp2.f } = obj);
      return obj;
    }
  },
  {
    key: "translate",
    value: function translate(arg0, arg1) {
      let a;
      let b;
      let c;
      let d;
      ({ a, b, c, d } = this);
      let obj = { a, c, e: a * arg0 + c * arg1 + this.e, b, d, f: b * arg0 + d * arg1 + this.f };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj;
    }
  },
  {
    key: "scale",
    value: function scale(mapped, dpi) {
      let obj = { a: this.a * mapped, c: this.c * mapped, e: this.e, b: this.b * mapped, d: this.d * mapped, f: this.f };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj;
    }
  },
  {
    key: "scaleNonUniform",
    value: function scaleNonUniform(arg0, arg1) {
      let obj = { a: this.a * arg0, c: this.c * arg1, e: this.e, b: this.b * arg0, d: this.d * arg1, f: this.f };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj;
    }
  },
  {
    key: "rotate",
    value: function rotate(arg0) {
      let a;
      let b;
      let c;
      let d;
      const cosResult = Math.cos(closure_8 * arg0);
      const sinResult = Math.sin(closure_8 * arg0);
      ({ a, b, c, d } = this);
      let obj = { a: a * cosResult + c * sinResult, c: a * tmp3 + c * cosResult, e: this.e, b: b * cosResult + d * sinResult, d: b * tmp3 + d * cosResult, f: this.f };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp4.a, b: tmp4.b, c: tmp4.c, d: tmp4.d, e: tmp4.e, f: tmp4.f } = obj);
      return obj;
    }
  },
  {
    key: "rotateFromVector",
    value: function rotateFromVector(result2, result2) {
      let a;
      let b;
      let c;
      let d;
      const atan2Result = Math.atan2(result2, result2);
      const cosResult = Math.cos(closure_8 * atan2Result);
      const sinResult = Math.sin(closure_8 * atan2Result);
      ({ a, b, c, d } = this);
      let obj = { a: a * cosResult + c * sinResult, c: a * tmp4 + c * cosResult, e: this.e, b: b * cosResult + d * sinResult, d: b * tmp4 + d * cosResult, f: this.f };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp5.a, b: tmp5.b, c: tmp5.c, d: tmp5.d, e: tmp5.e, f: tmp5.f } = obj);
      return obj;
    }
  },
  {
    key: "flipX",
    value: function flipX() {
      let obj = { a: this.a * -1, c: this.c, e: this.e, b: this.b * -1, d: this.d, f: this.f };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj;
    }
  },
  {
    key: "flipY",
    value: function flipY() {
      let obj = { a: this.a, c: this.c * -1, e: this.e, b: this.b, d: this.d * -1, f: this.f };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj;
    }
  },
  {
    key: "skewX",
    value: function skewX(arg0) {
      let a;
      let b;
      const tanResult = Math.tan(closure_8 * arg0);
      ({ a, b } = this);
      let obj = { a, c: a * tanResult + this.c, e: this.e, b, d: b * tanResult + this.d, f: this.f };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp2.a, b: tmp2.b, c: tmp2.c, d: tmp2.d, e: tmp2.e, f: tmp2.f } = obj);
      return obj;
    }
  },
  {
    key: "skewY",
    value: function skewY(arg0) {
      let c;
      let d;
      const tanResult = Math.tan(closure_8 * arg0);
      ({ c, d } = this);
      let obj = { a: this.a + c * tanResult, c, e: this.e, b: this.b + d * tanResult, d, f: this.f };
      obj = Object.create(Shape.prototype);
      callback2(obj, Shape);
      ({ a: tmp2.a, b: tmp2.b, c: tmp2.c, d: tmp2.d, e: tmp2.e, f: tmp2.f } = obj);
      return obj;
    }
  }
];
const importDefaultResult1Result = importDefaultResult1(SVGMatrix, items);
let c9 = importDefaultResult1Result;
class SVGPoint {
  constructor(arg0) {
    self = this;
    tmp = outer1_5(this, Shape);
    if (global) {
      ({ x: self.x, y: self.y } = global);
    } else {
      num = 0;
      self.x = 0;
      self.y = 0;
    }
    return;
  }
}
Shape = SVGPoint;
obj = {
  key: "matrixTransform",
  value: function matrixTransform(arg0) {
    let x;
    let y;
    ({ x, y } = this);
    let obj = { x: arg0.a * x + arg0.c * y + arg0.e, y: arg0.b * x + arg0.d * y + arg0.f };
    obj = Object.create(Shape.prototype);
    callback2(obj, Shape);
    ({ x: tmp.x, y: tmp.y } = obj);
    return obj;
  }
};
const items1 = [obj];
const importDefaultResult1Result1 = importDefaultResult1(SVGPoint, items1);
obj = {
  createSVGPoint() {
    return new importDefaultResult1Result1();
  },
  createSVGMatrix() {
    return new closure_9();
  }
};
class Shape {
  constructor(arg0) {
    self = this;
    tmp = outer1_5(this, apply);
    items = [];
    items[0] = global;
    tmp2 = outer1_4;
    obj = outer1_4(apply);
    tmp3 = outer1_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.root = null;
    tmp3Result.refMethod = (root) => {
      closure_0.root = root;
    };
    tmp3Result.setNativeProps = (obj) => {
      for (const key10004 in arg0) {
        let tmp3 = key10004;
        let tmp4 = tmp3Result;
        let tmp5 = outer1_2;
        let BrushProperties = tmp3Result(outer1_2[7]).BrushProperties;
        if (!BrushProperties.includes(key10004)) {
          continue;
        } else {
          let tmp = outer1_1;
          arg0[key10004] = outer1_1(tmp5[8])(arg0[key10004]);
          continue;
        }
        continue;
      }
      const root = tmp3Result.root;
      if (root != null) {
        root.setNativeProps(obj);
      }
    };
    tmp3Result.getBBox = (arg0) => {
      let obj = arg0;
      if (!arg0) {
        obj = {};
      }
      let fill = obj.fill;
      fill = undefined === fill || fill;
      let stroke = obj.stroke;
      stroke = undefined === stroke || stroke;
      let markers = obj.markers;
      markers = undefined === markers || markers;
      let clipped = obj.clipped;
      clipped = undefined === clipped || clipped;
      const tmp5 = outer1_6(tmp3Result.root);
      return tmp3Result(outer1_2[9]).default.getBBox(tmp5, { fill, stroke, markers, clipped });
    };
    tmp3Result.getCTM = () => {
      const tmp = outer1_6(tmp3Result.root);
      const _default = tmp3Result(outer1_2[9]).default;
      return new outer1_9(tmp3Result(outer1_2[9]).default.getCTM(tmp));
    };
    tmp3Result.getScreenCTM = () => {
      const tmp = outer1_6(tmp3Result.root);
      const _default = tmp3Result(outer1_2[9]).default;
      return new outer1_9(tmp3Result(outer1_2[9]).default.getScreenCTM(tmp));
    };
    tmp3Result.isPointInFill = (arg0) => {
      const tmp = outer1_6(tmp3Result.root);
      return tmp3Result(outer1_2[9]).default.isPointInFill(tmp, arg0);
    };
    tmp3Result.isPointInStroke = (arg0) => {
      const tmp = outer1_6(tmp3Result.root);
      return tmp3Result(outer1_2[9]).default.isPointInStroke(tmp, arg0);
    };
    tmp3Result.getTotalLength = () => {
      const tmp = outer1_6(tmp3Result.root);
      return tmp3Result(outer1_2[9]).default.getTotalLength(tmp);
    };
    tmp3Result.getPointAtLength = (length) => {
      const tmp = outer1_6(tmp3Result.root);
      const _default = tmp3Result(outer1_2[9]).default;
      const obj = { length };
      return new outer1_10(tmp3Result(outer1_2[9]).default.getPointAtLength(tmp, { length }));
    };
    tmp7 = require("Mixin")(tmp3Result);
    return tmp3Result;
  }
}
require("_inherits")(Shape, require("noop").Component);
const items2 = [
  {
    key: "getNativeScrollRef",
    value: function getNativeScrollRef() {
      return this.root;
    }
  }
];
const importDefaultResult1Result2 = importDefaultResult1(Shape, items2);
importDefaultResult1Result2.prototype.ownerSVGElement = obj;

export default importDefaultResult1Result2;
export const multiplyMatrices = function multiplyMatrices(arg0) {
  let a;
  let a2;
  let b;
  let b2;
  let c;
  let c2;
  let d;
  let d2;
  let e;
  let f;
  ({ a, b, c, d } = arg0);
  ({ a: a2, b: b2, c: c2, d: d2, e, f } = arg1);
  return { a: a * a2 + c * b2, c: a * c2 + c * d2, e: a * e + c * f + arg0.e, b: b * a2 + d * b2, d: b * c2 + d * d2, f: b * e + d * f + arg0.f };
};
export const invert = function invert(permissions) {
  let a;
  let b;
  let c;
  let d;
  let e;
  let f;
  ({ a, b, c, d, e, f } = permissions);
  const diff = a * d - b * c;
  return { a: d / diff, b: -b / diff, c: -c / diff, d: a / diff, e: (c * f - d * e) / diff, f: -a * f - b * e / diff };
};
export const SVGMatrix = importDefaultResult1Result;
export const matrixTransform = function _matrixTransform(arg0) {
  let x;
  let y;
  ({ x, y } = arg1);
  return { x: arg0.a * x + arg0.c * y + arg0.e, y: arg0.b * x + arg0.d * y + arg0.f };
};
export const SVGPoint = importDefaultResult1Result1;
export const ownerSVGElement = obj;