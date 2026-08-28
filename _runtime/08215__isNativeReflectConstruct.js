// === Module 8215: _isNativeReflectConstruct ===

// Module 8215 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8211 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8216 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

const Circle = arg1;
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
noopAll;
class Circle {
  constructor() {
    self = this;
    tmp = closure_3(this, Circle);
    tmp2 = closure_5;
    obj = closure_5(Circle);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inheritsDefault(Circle, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let obj = {};
      ({ cx, cy, r } = props);
      const merged = Object.assign(self(8202).extract(this, props));
      obj.cx = cx;
      obj.cy = cy;
      obj.r = r;
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const obj2 = self(8202);
      const merged1 = Object.assign(obj);
      return jsx(__INTERNAL_VIEW_CONFIGDefault, {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      });
    }
  }
];
const importDefaultResultResult = importDefaultResult(Circle, items);
importDefaultResultResult.displayName = "Circle";
importDefaultResultResult.defaultProps = { cx: 0, cy: 0, r: 0 };

export default importDefaultResultResult;