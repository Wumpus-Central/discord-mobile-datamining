// _runtime/metro/08505__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef8492 from "08492__.js";
import _modDef8506 from "08506__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const FeOffset = fn;
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
class FeOffset {
  constructor() {
    self = this;
    tmp = closure_3(this, FeOffset);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FeOffset);
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
_inherits(FeOffset, _modDef8492);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const merged = Object.assign(this.props);
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    };
    const merged1 = Object.assign(FeOffset(8491).extractFilter(this.props));
    const obj2 = FeOffset(8491);
    const merged2 = Object.assign(FeOffset(8491).extractIn(this.props));
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
const importDefaultResultResult = _createClass(FeOffset, items);
importDefaultResultResult.displayName = "FeOffset";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.dx = 0;
obj.dy = 0;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
