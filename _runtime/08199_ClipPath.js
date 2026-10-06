// _runtime/08199_ClipPath.js
import Fragment from "react/00021_Fragment.js";
import extractProps from "08184_extractProps.js";
import multiplyMatricesDefault from "08193_multiplyMatrices.js";
import _modDef8200 from "metro/08200__.js";
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
class ClipPath {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ClipPath);
    const obj = _getPrototypeOf(ClipPath);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(ClipPath, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const props = this.props;
    _modDef8200;
    const obj2 = extractProps;
    const merged = Object.assign(obj2.extract(this, props));
    return <tmp ref={this.refMethod}>{props.children}</tmp>;
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(ClipPath, items);
importDefaultResultResult.displayName = "ClipPath";

export default importDefaultResultResult;
