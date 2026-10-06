// _runtime/08219_FeGaussianBlur.js
import Fragment from "react/00021_Fragment.js";
import extractFeFlood from "08207_extractFeFlood.js";
import _modDef8208 from "metro/08208__.js";
import _modDef8220 from "metro/08220__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const jsx = Fragment.jsx;
class FeGaussianBlur {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeGaussianBlur);
    const obj = _getPrototypeOf(FeGaussianBlur);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(FeGaussianBlur, _modDef8208);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    _modDef8220;
    const obj2 = extractFeFlood;
    const merged = Object.assign(obj2.extractFilter(this.props));
    const obj3 = extractFeFlood;
    const merged1 = Object.assign(obj3.extractIn(this.props));
    const obj4 = extractFeFlood;
    const merged2 = Object.assign(obj4.extractFeGaussianBlur(this.props));
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
const importDefaultResultResult = _createClass(FeGaussianBlur, items);
importDefaultResultResult.displayName = "FeGaussianBlur";
let obj = { stdDeviation: 0, edgeMode: "none" };
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
