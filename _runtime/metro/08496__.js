// _runtime/metro/08496__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef8492 from "08492__.js";
import _modDef8497 from "08497__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const FeComposite = fn;
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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class FeComposite {
  constructor() {
    self = this;
    tmp = closure_3(this, FeComposite);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FeComposite);
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
_inherits(FeComposite, _modDef8492);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    };
    const merged = Object.assign(FeComposite(8491).extractFilter(this.props));
    const obj2 = FeComposite(8491);
    const merged1 = Object.assign(FeComposite(8491).extractFeComposite(this.props));
    return (
      <tmp
        ref={function ref(arg0) {
          return self.refMethod(arg0);
        }}
      />
    );
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(FeComposite, items);
importDefaultResultResult.displayName = "FeComposite";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.k1 = 0;
obj.k2 = 0;
obj.k3 = 0;
obj.k4 = 0;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
