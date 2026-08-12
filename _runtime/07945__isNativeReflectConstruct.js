// _runtime/07945__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";
import { __INTERNAL_VIEW_CONFIG } from "metro/07946___INTERNAL_VIEW_CONFIG.js";

const ForeignObject = arg1;
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
class ForeignObject {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, ForeignObject);
    tmp2 = __esModule;
    obj = __esModule(ForeignObject);
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
require("_inherits")(ForeignObject, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let obj = { x: props.x, y: props.y, width: props.width, height: props.height };
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const tmp = __INTERNAL_VIEW_CONFIG;
      const merged = Object.assign(self(7891).withoutXY(this, props));
      const merged1 = Object.assign(obj);
      obj.children = props.children;
      return <tmp ref={function ref(arg0) {
        return self.refMethod(arg0);
      }} />;
    }
  }
];
const importDefaultResultResult = importDefaultResult(ForeignObject, items);
importDefaultResultResult.displayName = "ForeignObject";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;