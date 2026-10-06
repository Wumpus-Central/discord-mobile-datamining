// === Module 8193: multiplyMatrices ===

// Module 8193 (multiplyMatrices)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import _modDef8196 from "module_8196" /* 8196 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const Component = react.Component;
const findNodeHandle = react_native.findNodeHandle;
let closure_8 = Math.PI / 180;
class SVGMatrix {
  constructor(arg0) {
    const self = this;
    _classCallCheck(this, SVGMatrix);
    if (arg0) {
      ({ a: self.a, b: self.b, c: self.c, d: self.d, e: self.e, f: self.f } = arg0);
    } else {
      self.a = 1;
      self.b = 0;
      self.c = 0;
      self.d = 1;
      self.e = 0;
      self.f = 0;
    }
  }
}
const entry = {
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
    const obj = { a: a * a2 + c * b2, c: a * c2 + c * d2, e: a * e + c * f + this.e, b: b * a2 + d * b2, d: b * c2 + d * d2, f: b * e + d * f + this.f };
    const obj2 = Object.create(SVGMatrix.prototype);
    _classCallCheck(obj2, SVGMatrix);
    ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
    return obj2;
  }
};
let items = [
  entry,
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
      const obj = { a: d / diff, b: -b / diff, c: -c / diff, d: a / diff, e: (c * f - d * e) / diff, f: -a * f - b * e / diff };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp2.a, b: tmp2.b, c: tmp2.c, d: tmp2.d, e: tmp2.e, f: tmp2.f } = obj);
      return obj2;
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
      const obj = { a, c, e: a * arg0 + c * arg1 + this.e, b, d, f: b * arg0 + d * arg1 + this.f };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj2;
    }
  },
  {
    key: "scale",
    value: function scale(translateY) {
      const obj = { a: this.a * translateY, c: this.c * translateY, e: this.e, b: this.b * translateY, d: this.d * translateY, f: this.f };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj2;
    }
  },
  {
    key: "scaleNonUniform",
    value: function scaleNonUniform(arg0, arg1) {
      const obj = { a: this.a * arg0, c: this.c * arg1, e: this.e, b: this.b * arg0, d: this.d * arg1, f: this.f };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj2;
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
      const obj = { a: a * cosResult + c * sinResult, c: a * -sinResult + c * cosResult, e: this.e, b: b * cosResult + d * sinResult, d: b * -sinResult + d * cosResult, f: this.f };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp4.a, b: tmp4.b, c: tmp4.c, d: tmp4.d, e: tmp4.e, f: tmp4.f } = obj);
      return obj2;
    }
  },
  {
    key: "rotateFromVector",
    value: function rotateFromVector(result2, result22) {
      let a;
      let b;
      let c;
      let d;
      const atan2Result = Math.atan2(result2, result2);
      const cosResult = Math.cos(closure_8 * atan2Result);
      const sinResult = Math.sin(closure_8 * atan2Result);
      ({ a, b, c, d } = this);
      const obj = { a: a * cosResult + c * sinResult, c: a * -sinResult + c * cosResult, e: this.e, b: b * cosResult + d * sinResult, d: b * -sinResult + d * cosResult, f: this.f };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp5.a, b: tmp5.b, c: tmp5.c, d: tmp5.d, e: tmp5.e, f: tmp5.f } = obj);
      return obj2;
    }
  },
  {
    key: "flipX",
    value: function flipX() {
      const obj = { a: this.a * -1, c: this.c, e: this.e, b: this.b * -1, d: this.d, f: this.f };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj2;
    }
  },
  {
    key: "flipY",
    value: function flipY() {
      const obj = { a: this.a, c: this.c * -1, e: this.e, b: this.b, d: this.d * -1, f: this.f };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp.a, b: tmp.b, c: tmp.c, d: tmp.d, e: tmp.e, f: tmp.f } = obj);
      return obj2;
    }
  },
  {
    key: "skewX",
    value: function skewX(arg0) {
      let a;
      let b;
      const tanResult = Math.tan(closure_8 * arg0);
      ({ a, b } = this);
      const obj = { a, c: a * tanResult + this.c, e: this.e, b, d: b * tanResult + this.d, f: this.f };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp2.a, b: tmp2.b, c: tmp2.c, d: tmp2.d, e: tmp2.e, f: tmp2.f } = obj);
      return obj2;
    }
  },
  {
    key: "skewY",
    value: function skewY(arg0) {
      let c;
      let d;
      const tanResult = Math.tan(closure_8 * arg0);
      ({ c, d } = this);
      const obj = { a: this.a + c * tanResult, c, e: this.e, b: this.b + d * tanResult, d, f: this.f };
      const obj2 = Object.create(SVGMatrix.prototype);
      _classCallCheck(obj2, SVGMatrix);
      ({ a: tmp2.a, b: tmp2.b, c: tmp2.c, d: tmp2.d, e: tmp2.e, f: tmp2.f } = obj);
      return obj2;
    }
  }
];
const importDefaultResult1Result = _createClass(SVGMatrix, items);
let c9 = importDefaultResult1Result;
class SVGPoint {
  constructor(arg0) {
    const self = this;
    _classCallCheck(this, SVGPoint);
    if (arg0) {
      ({ x: self.x, y: self.y } = arg0);
    } else {
      self.x = 0;
      self.y = 0;
    }
  }
}
const entry1 = {
  key: "matrixTransform",
  value: function matrixTransform(arg0) {
    let x;
    let y;
    ({ x, y } = this);
    const point = { x: arg0.a * x + arg0.c * y + arg0.e, y: arg0.b * x + arg0.d * y + arg0.f };
    const obj = Object.create(SVGPoint.prototype);
    _classCallCheck(obj, SVGPoint);
    ({ x: tmp.x, y: tmp.y } = point);
    return obj;
  }
};
const items1 = [entry1];
const importDefaultResult1Result1 = _createClass(SVGPoint, items1);
let obj = {
  createSVGPoint() {
    const tmp = new importDefaultResult1Result1();
    return tmp;
  },
  createSVGMatrix() {
    const tmp = new c9();
    return tmp;
  }
};
class Shape {
  constructor(arg0) {
    let constructResult;
    const self = this;
    let tmp = _classCallCheck(this, Shape);
    const items = [arg0];
    let obj = _getPrototypeOf(Shape);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result.root = null;
    tmp3Result.refMethod = (root) => {
      closure_0.root = root;
    };
    tmp3Result.setNativeProps = (obj) => {
      for (const key10004 in obj) {
        let BrushProperties = Shape(closure_2_2[7]).BrushProperties;
        if (!BrushProperties.includes(key10004)) {
          continue;
        } else {
          obj[key10004] = closure_2_1(closure_2_2[8])(obj[key10004]);
          continue;
        }
        continue;
      }
      const root = closure_0.root;
      if (root != null) {
        root.setNativeProps(obj);
      }
    };
    tmp3Result.getBBox = (arg0) => {
      const tmp = arg0 || {};
      const fill = tmp.fill;
      const fill2 = undefined === fill || fill;
      const stroke = tmp.stroke;
      const stroke2 = undefined === stroke || stroke;
      const markers = tmp.markers;
      const markers2 = undefined === markers || markers;
      const clipped = tmp.clipped;
      const clipped2 = undefined === clipped || clipped;
      const tmp6 = closure_2_6(closure_0.root);
      const _default = Shape(closure_2_2[9]).default;
      return _default.getBBox(tmp6, { fill: fill2, stroke: stroke2, markers: markers2, clipped: clipped2 });
    };
    tmp3Result.getCTM = () => {
      const tmp = closure_2_6(closure_0.root);
      const _default = Shape(closure_2_2[9]).default;
      const tmp2 = new closure_2_9(_default.getCTM(tmp));
      return tmp2;
    };
    tmp3Result.getScreenCTM = () => {
      const tmp = closure_2_6(closure_0.root);
      const _default = Shape(closure_2_2[9]).default;
      const tmp2 = new closure_2_9(_default.getScreenCTM(tmp));
      return tmp2;
    };
    tmp3Result.isPointInFill = (arg0) => {
      const tmp = closure_2_6(closure_0.root);
      const _default = Shape(closure_2_2[9]).default;
      return _default.isPointInFill(tmp, arg0);
    };
    tmp3Result.isPointInStroke = (arg0) => {
      const tmp = closure_2_6(closure_0.root);
      const _default = Shape(closure_2_2[9]).default;
      return _default.isPointInStroke(tmp, arg0);
    };
    tmp3Result.getTotalLength = () => {
      const tmp = closure_2_6(closure_0.root);
      const _default = Shape(closure_2_2[9]).default;
      return _default.getTotalLength(tmp);
    };
    tmp3Result.getPointAtLength = (length) => {
      const tmp = closure_2_6(closure_0.root);
      const _default = Shape(closure_2_2[9]).default;
      const obj = { length };
      const tmp2 = new closure_2_10(_default.getPointAtLength(tmp, obj));
      return tmp2;
    };
    _modDef8196(tmp3Result);
    return tmp3Result;
  }
}
_inherits(Shape, Component);
const entry2 = {
  key: "getNativeScrollRef",
  value: function getNativeScrollRef() {
    return this.root;
  }
};
const items2 = [entry2];
const importDefaultResult1Result2 = _createClass(Shape, items2);
importDefaultResult1Result2.prototype.ownerSVGElement = obj;
const SVGMatrix_export = importDefaultResult1Result;
const SVGPoint_export = importDefaultResult1Result1;

export default importDefaultResult1Result2;
export const multiplyMatrices = function multiplyMatrices(arg0, arg1) {
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
export { SVGMatrix_export as SVGMatrix };
export const matrixTransform = function _matrixTransform(arg0, arg1) {
  let x;
  let y;
  ({ x, y } = arg1);
  const point = { x: arg0.a * x + arg0.c * y + arg0.e, y: arg0.b * x + arg0.d * y + arg0.f };
  return point;
};
export { SVGPoint_export as SVGPoint };
export const ownerSVGElement = obj;