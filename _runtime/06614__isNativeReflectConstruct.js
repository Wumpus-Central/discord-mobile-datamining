// _runtime/06614__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";
import { __INTERNAL_VIEW_CONFIG } from "metro/06615___INTERNAL_VIEW_CONFIG.js";

const FeComposite = arg1;
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
class FeComposite {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, FeComposite);
    tmp2 = __esModule;
    obj = __esModule(FeComposite);
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
require("_inherits")(FeComposite, require("_isNativeReflectConstruct"));
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
    const merged = Object.assign(self(6609).extractFilter(this.props));
    const obj2 = self(6609);
    const merged1 = Object.assign(self(6609).extractFeComposite(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeComposite, items);
importDefaultResultResult.displayName = "FeComposite";
obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.k1 = 0;
obj.k2 = 0;
obj.k3 = 0;
obj.k4 = 0;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;