// _runtime/08253_Path.js
import Fragment from "react/00021_Fragment.js";
import extractProps from "08184_extractProps.js";
import multiplyMatricesDefault from "08193_multiplyMatrices.js";
import _modDef8254 from "metro/08254__.js";
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
class Path {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Path);
    const obj = _getPrototypeOf(Path);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(Path, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let d;
    const self = this;
    const props = this.props;
    const obj = { d };
    d = props.d;
    const obj2 = extractProps;
    const merged = Object.assign(obj2.extract(this, props));
    _modDef8254;
    const merged1 = Object.assign(obj);
    return (
      <tmp2
        ref={function ref(arg0) {
          return self.refMethod(arg0);
        }}
      />
    );
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Path, items);
importDefaultResultResult.displayName = "Path";

export default importDefaultResultResult;
