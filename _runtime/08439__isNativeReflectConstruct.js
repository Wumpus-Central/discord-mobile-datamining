// _runtime/08439__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";
import { __INTERNAL_VIEW_CONFIG } from "metro/08440___INTERNAL_VIEW_CONFIG.js";

const ClipPath = arg1;
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
class ClipPath {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, ClipPath);
    tmp2 = __esModule;
    obj = __esModule(ClipPath);
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
require("_inherits")(ClipPath, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      const props = this.props;
      const obj = { ref: this.refMethod };
      const tmp = __INTERNAL_VIEW_CONFIG;
      const merged = Object.assign(ClipPath(8424).extract(this, props));
      obj.children = props.children;
      return <tmp ref={this.refMethod} />;
    }
  }
];
const importDefaultResultResult = importDefaultResult(ClipPath, items);
importDefaultResultResult.displayName = "ClipPath";

export default importDefaultResultResult;