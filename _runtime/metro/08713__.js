// _runtime/metro/08713__.js
import extractBrushDefault from "../08707_extractBrush.js";
import _modDef8716 from "08716__.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let Shape = fn;
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
  } catch (err) {}
}
const findNodeHandle = fn(17).findNodeHandle;
let closure_8 = Math.PI / 180;
class SVGMatrix {
  constructor(arg0) {
    self = this;
    tmp = hasOwnProperty(this, Shape);
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
const entry = {
  key: "multiply",
  value: function multiply(arg0) {
    ({ a, b, c, d } = this);
    ({ a: a2, b: b2, c: c2, d: d2, e, f } = arg0);
    const obj2 = Object.create(Shape.prototype);
    hasOwnProperty(obj2, Shape);
    ({
      a: tmp.a,
      b: tmp.b,
      c: tmp.c,
      d: tmp.d,
      e: tmp.e,
      f: tmp.f,
    } = {
      a: a * a2 + c * b2,
      c: a * c2 + c * d2,
      e: a * e + c * f + this.e,
      b: b * a2 + d * b2,
      d: b * c2 + d * d2,
      f: b * e + d * f + this.f,
    });
    return obj2;
  },
};
let items = [
  entry,
  {
    key: "inverse",
    value: function inverse() {
      ({ a, b, c, d, e, f } = this);
      const diff = a * d - b * c;
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp2.a,
        b: tmp2.b,
        c: tmp2.c,
        d: tmp2.d,
        e: tmp2.e,
        f: tmp2.f,
      } = {
        a: d / diff,
        b: -b / diff,
        c: -c / diff,
        d: a / diff,
        e: (c * f - d * e) / diff,
        f: -a * f - (b * e) / diff,
      });
      return obj2;
    },
  },
  {
    key: "translate",
    value: function translate(arg0, arg1) {
      ({ a, b, c, d } = this);
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp.a,
        b: tmp.b,
        c: tmp.c,
        d: tmp.d,
        e: tmp.e,
        f: tmp.f,
      } = { a, c, e: a * arg0 + c * arg1 + this.e, b, d, f: b * arg0 + d * arg1 + this.f });
      return obj2;
    },
  },
  {
    key: "scale",
    value: function scale(mapped) {
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp.a,
        b: tmp.b,
        c: tmp.c,
        d: tmp.d,
        e: tmp.e,
        f: tmp.f,
      } = { a: this.a * mapped, c: this.c * mapped, e: this.e, b: this.b * mapped, d: this.d * mapped, f: this.f });
      return obj2;
    },
  },
  {
    key: "scaleNonUniform",
    value: function scaleNonUniform(arg0, arg1) {
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp.a,
        b: tmp.b,
        c: tmp.c,
        d: tmp.d,
        e: tmp.e,
        f: tmp.f,
      } = { a: this.a * arg0, c: this.c * arg1, e: this.e, b: this.b * arg0, d: this.d * arg1, f: this.f });
      return obj2;
    },
  },
  {
    key: "rotate",
    value: function rotate(arg0) {
      const cosResult = Math.cos(closure_8 * arg0);
      const sinResult = Math.sin(closure_8 * arg0);
      ({ a, b, c, d } = this);
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp4.a,
        b: tmp4.b,
        c: tmp4.c,
        d: tmp4.d,
        e: tmp4.e,
        f: tmp4.f,
      } = {
        a: a * cosResult + c * sinResult,
        c: a * -sinResult + c * cosResult,
        e: this.e,
        b: b * cosResult + d * sinResult,
        d: b * -sinResult + d * cosResult,
        f: this.f,
      });
      return obj2;
    },
  },
  {
    key: "rotateFromVector",
    value: function rotateFromVector(result2, result2) {
      const atan2Result = Math.atan2(result2, result2);
      const cosResult = Math.cos(closure_8 * atan2Result);
      const sinResult = Math.sin(closure_8 * atan2Result);
      ({ a, b, c, d } = this);
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp5.a,
        b: tmp5.b,
        c: tmp5.c,
        d: tmp5.d,
        e: tmp5.e,
        f: tmp5.f,
      } = {
        a: a * cosResult + c * sinResult,
        c: a * -sinResult + c * cosResult,
        e: this.e,
        b: b * cosResult + d * sinResult,
        d: b * -sinResult + d * cosResult,
        f: this.f,
      });
      return obj2;
    },
  },
  {
    key: "flipX",
    value: function flipX() {
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp.a,
        b: tmp.b,
        c: tmp.c,
        d: tmp.d,
        e: tmp.e,
        f: tmp.f,
      } = { a: this.a * -1, c: this.c, e: this.e, b: this.b * -1, d: this.d, f: this.f });
      return obj2;
    },
  },
  {
    key: "flipY",
    value: function flipY() {
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp.a,
        b: tmp.b,
        c: tmp.c,
        d: tmp.d,
        e: tmp.e,
        f: tmp.f,
      } = { a: this.a, c: this.c * -1, e: this.e, b: this.b, d: this.d * -1, f: this.f });
      return obj2;
    },
  },
  {
    key: "skewX",
    value: function skewX(arg0) {
      const tanResult = Math.tan(closure_8 * arg0);
      ({ a, b } = this);
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp2.a,
        b: tmp2.b,
        c: tmp2.c,
        d: tmp2.d,
        e: tmp2.e,
        f: tmp2.f,
      } = { a, c: a * tanResult + this.c, e: this.e, b, d: b * tanResult + this.d, f: this.f });
      return obj2;
    },
  },
  {
    key: "skewY",
    value: function skewY(arg0) {
      const tanResult = Math.tan(closure_8 * arg0);
      ({ c, d } = this);
      const obj2 = Object.create(Shape.prototype);
      hasOwnProperty(obj2, Shape);
      ({
        a: tmp2.a,
        b: tmp2.b,
        c: tmp2.c,
        d: tmp2.d,
        e: tmp2.e,
        f: tmp2.f,
      } = { a: this.a + c * tanResult, c, e: this.e, b: this.b + d * tanResult, d, f: this.f });
      return obj2;
    },
  },
];
const importDefaultResult1Result = _createClass(SVGMatrix, items);
class SVGPoint {
  constructor(arg0) {
    self = this;
    tmp = hasOwnProperty(this, Shape);
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
const entry1 = {
  key: "matrixTransform",
  value: function matrixTransform(arg0) {
    ({ x, y } = this);
    const point = { x: arg0.a * x + arg0.c * y + arg0.e, y: arg0.b * x + arg0.d * y + arg0.f };
    const obj = Object.create(Shape.prototype);
    hasOwnProperty(obj, Shape);
    ({ x: tmp.x, y: tmp.y } = point);
    return obj;
  },
};
const items1 = [entry1];
const importDefaultResult1Result1 = _createClass(SVGPoint, items1);
let obj = {
  createSVGPoint() {
    return new importDefaultResult1Result1();
  },
  createSVGMatrix() {
    return new importDefaultResult1Result();
  },
};
class Shape {
  constructor(arg0) {
    self = this;
    tmp = hasOwnProperty(this, Shape);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(Shape);
    tmp3 = closure_3;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.root = null;
    tmp3Result.refMethod = (root) => {
      closure_0.root = root;
    };
    tmp3Result.setNativeProps = (obj) => {
      for (const key10004 in arg0) {
        let BrushProperties = Shape(8714).BrushProperties;
        if (!BrushProperties.includes(key10004)) {
          continue;
        } else {
          arg0[key10004] = extractBrushDefault(arg0[key10004]);
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
      let obj = arg0;
      if (!arg0) {
        obj = {};
      }
      const fill = obj.fill;
      const fill2 = undefined === fill || fill;
      const stroke = obj.stroke;
      const stroke2 = undefined === stroke || stroke;
      const markers = obj.markers;
      const markers2 = undefined === markers || markers;
      const clipped = obj.clipped;
      const clipped2 = undefined === clipped || clipped;
      const tmp5 = findNodeHandle(closure_0.root);
      return Shape(8715).default.getBBox(tmp5, { fill: fill2, stroke: stroke2, markers: markers2, clipped: clipped2 });
    };
    tmp3Result.getCTM = () => {
      const tmp = findNodeHandle(closure_0.root);
      const _default = Shape(8715).default;
      return new importDefaultResult1Result(Shape(8715).default.getCTM(tmp));
    };
    tmp3Result.getScreenCTM = () => {
      const tmp = findNodeHandle(closure_0.root);
      const _default = Shape(8715).default;
      return new importDefaultResult1Result(Shape(8715).default.getScreenCTM(tmp));
    };
    tmp3Result.isPointInFill = (arg0) => {
      const tmp = findNodeHandle(closure_0.root);
      return Shape(8715).default.isPointInFill(tmp, arg0);
    };
    tmp3Result.isPointInStroke = (arg0) => {
      const tmp = findNodeHandle(closure_0.root);
      return Shape(8715).default.isPointInStroke(tmp, arg0);
    };
    tmp3Result.getTotalLength = () => {
      const tmp = findNodeHandle(closure_0.root);
      return Shape(8715).default.getTotalLength(tmp);
    };
    tmp3Result.getPointAtLength = (length) => {
      const tmp = findNodeHandle(closure_0.root);
      const _default = Shape(8715).default;
      const obj = { length };
      return new importDefaultResult1Result1(Shape(8715).default.getPointAtLength(tmp, { length }));
    };
    tmp7 = closure_1(c2[10])(tmp3Result);
    return tmp3Result;
  }
}
_inherits(Shape, fn(19).Component);
const entry2 = {
  key: "getNativeScrollRef",
  value: function getNativeScrollRef() {
    return this.root;
  },
};
const items2 = [entry2];
const importDefaultResult1Result2 = _createClass(Shape, items2);
importDefaultResult1Result2.prototype.ownerSVGElement = obj;

export default importDefaultResult1Result2;
export const multiplyMatrices = function multiplyMatrices(arg0, arg1) {
  ({ a, b, c, d } = arg0);
  ({ a: a2, b: b2, c: c2, d: d2, e, f } = arg1);
  return {
    a: a * a2 + c * b2,
    c: a * c2 + c * d2,
    e: a * e + c * f + arg0.e,
    b: b * a2 + d * b2,
    d: b * c2 + d * d2,
    f: b * e + d * f + arg0.f,
  };
};
export const invert = function invert(permissions) {
  ({ a, b, c, d, e, f } = permissions);
  const diff = a * d - b * c;
  return {
    a: d / diff,
    b: -b / diff,
    c: -c / diff,
    d: a / diff,
    e: (c * f - d * e) / diff,
    f: -a * f - (b * e) / diff,
  };
};
export const SVGMatrix = importDefaultResult1Result;
export const matrixTransform = function _matrixTransform(arg0, arg1) {
  ({ x, y } = arg1);
  const point = { x: arg0.a * x + arg0.c * y + arg0.e, y: arg0.b * x + arg0.d * y + arg0.f };
  return point;
};
export const SVGPoint = importDefaultResult1Result1;
export const ownerSVGElement = obj;
