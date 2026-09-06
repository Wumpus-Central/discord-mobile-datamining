// _runtime/metro/08489__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef8490 from "08490__.js";
import _modDef8492 from "08492__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const FeBlend = fn;
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
class FeBlend {
  constructor() {
    self = this;
    tmp = closure_3(this, FeBlend);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FeBlend);
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
_inherits(FeBlend, _modDef8492);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    };
    const merged = Object.assign(FeBlend(8491).extractFilter(this.props));
    const obj2 = FeBlend(8491);
    const merged1 = Object.assign(FeBlend(8491).extractIn(this.props));
    const obj3 = FeBlend(8491);
    const merged2 = Object.assign(FeBlend(8491).extractFeBlend(this.props));
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
const importDefaultResultResult = _createClass(FeBlend, items);
importDefaultResultResult.displayName = "FeBlend";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.mode = "normal";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
