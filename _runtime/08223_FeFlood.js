// _runtime/08223_FeFlood.js
import Fragment from "react/00021_Fragment.js";
import extractFeFlood from "08207_extractFeFlood.js";
import _modDef8208 from "metro/08208__.js";
import _modDef8224 from "metro/08224__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";

const extractFeFloodDefault = extractFeFlood;

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
class FeFlood {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeFlood);
    const obj = _getPrototypeOf(FeFlood);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(FeFlood, _modDef8208);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    _modDef8224;
    const obj2 = extractFeFlood;
    const merged = Object.assign(obj2.extractFilter(this.props));
    const merged1 = Object.assign(extractFeFloodDefault(this.props));
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
const importDefaultResultResult = _createClass(FeFlood, items);
importDefaultResultResult.displayName = "FeFlood";
let obj = { floodColor: "black", floodOpacity: 1 };
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
