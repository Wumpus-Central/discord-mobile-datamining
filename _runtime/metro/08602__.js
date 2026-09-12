// === Module 8602: ? ===

// Module 8602
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8598 from "module_8598" /* 8598 */;
import _modDef8603 from "module_8603" /* 8603 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Circle = fn;
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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class Circle {
  constructor() {
    self = this;
    tmp = closure_3(this, Circle);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Circle);
    tmp3 = closure_4;
    if (closure_7()) {
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
_inherits(Circle, _modDef8598);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    let obj = {};
    ({ cx, cy, r } = props);
    const merged = Object.assign(Circle(8589).extract(this, props));
    obj.cx = cx;
    obj.cy = cy;
    obj.r = r;
    obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const obj2 = Circle(8589);
    const merged1 = Object.assign(obj);
    return jsx(_modDef8603, {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    });
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Circle, items);
importDefaultResultResult.displayName = "Circle";
importDefaultResultResult.defaultProps = { cx: 0, cy: 0, r: 0 };

export default importDefaultResultResult;