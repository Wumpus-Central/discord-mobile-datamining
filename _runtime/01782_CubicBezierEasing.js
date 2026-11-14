// _runtime/01782_CubicBezierEasing.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck_mod from "metro/00041__classCallCheck.js";

let _classCallCheck = _classCallCheck_mod;
const ERROR_MESSAGES = {
  invalidCoordinate(x1, x2) {
    return (
      "Invalid " +
      x1 +
      " coordinate for cubic bezier easing point, it should be a number between 0 and 1, received " +
      x2
    );
  },
};
class CubicBezierEasing {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = closure_0(this, CubicBezierEasing);
    if (global >= 0) {
      num = 1;
      if (global <= 1) {
        tmp2 = importDefault;
        if (importDefault >= 0) {
          if (importDefault <= 1) {
            tmp3 = arg1;
            tmp4 = importAll;
            self.x1 = global;
            self.y1 = arg1;
            self.x2 = importDefault;
            self.y2 = importAll;
            return;
          }
        }
        tmp5 = globalThis;
        _Error = Error;
        tmp6 = closure_1;
        str = "x2";
        _HermesInternal = HermesInternal;
        str2 = "[Reanimated] ";
        tmp7 = new.target;
        tmp8 = new.target;
        error = new Error("[Reanimated] " + closure_1.invalidCoordinate("x2", importDefault));
        tmp10 = error;
        throw error;
      }
    }
    error1 = new Error("[Reanimated] " + closure_1.invalidCoordinate("x1", global));
    throw error1;
  }
}
_classCallCheck = CubicBezierEasing;
const entry = {
  key: "toString",
  value: function toString() {
    return "" + _classCallCheck.easingName + "(" + this.x1 + ", " + this.y1 + ", " + this.x2 + ", " + this.y2 + ")";
  },
};
const items = [
  entry,
  {
    key: "normalize",
    value: function normalize() {
      return { name: _classCallCheck.easingName, x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2 };
    },
  },
];
const tmp2 = _createClassDefault(CubicBezierEasing, items);
tmp2.easingName = "cubicBezier";

export { ERROR_MESSAGES };
export const CubicBezierEasing = tmp2;
