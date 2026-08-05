import { __INTERNAL_VIEW_CONFIG } from "metro/08531___INTERNAL_VIEW_CONFIG.js";
// _runtime/08530__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

const Rect = arg1;
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
class Rect {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, Rect);
    tmp2 = __esModule;
    obj = __esModule(Rect);
    tmp3 = __esModule;
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
require("_inherits")(Rect, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let obj = { x: props.x, y: props.y, width: props.width, height: props.height, rx: props.rx, ry: props.ry };
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const tmp = __INTERNAL_VIEW_CONFIG;
      const merged = Object.assign(self(8452).withoutXY(this, props));
      const merged1 = Object.assign(obj);
      return <tmp ref={function ref(arg0) {
        return self.refMethod(arg0);
      }} />;
    }
  }
];
const importDefaultResultResult = importDefaultResult(Rect, items);
importDefaultResultResult.displayName = "Rect";
importDefaultResultResult.defaultProps = { x: 0, y: 0, width: 0, height: 0 };

export default importDefaultResultResult;