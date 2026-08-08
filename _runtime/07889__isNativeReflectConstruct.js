// _runtime/07889__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";
import { extractFeFlood } from "07873_extractFeFlood.js";
import { __INTERNAL_VIEW_CONFIG } from "metro/07890___INTERNAL_VIEW_CONFIG.js";

const FeFlood = arg1;
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
class FeFlood {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, FeFlood);
    tmp2 = __esModule;
    obj = __esModule(FeFlood);
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
require("_inherits")(FeFlood, require("_isNativeReflectConstruct"));
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const tmp = __INTERNAL_VIEW_CONFIG;
    const merged = Object.assign(self(7873).extractFilter(this.props));
    const merged1 = Object.assign(extractFeFlood(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeFlood, items);
importDefaultResultResult.displayName = "FeFlood";
obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.floodColor = "black";
obj.floodOpacity = 1;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;