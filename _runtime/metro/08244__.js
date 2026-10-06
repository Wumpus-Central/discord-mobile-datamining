// _runtime/metro/08244__.js
import Fragment from "../react/00021_Fragment.js";
import multiplyMatricesDefault from "../08193_multiplyMatrices.js";
import _modDef8245 from "08245__.js";
import extractGradientDefault from "../08246_extractGradient.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";

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
class LinearGradient {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, LinearGradient);
    const obj = _getPrototypeOf(LinearGradient);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(LinearGradient, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const obj = { x1: props.x1, y1: props.y1, x2: props.x2, y2: props.y2 };
    _modDef8245;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(extractGradientDefault(props, this));
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
const importDefaultResultResult = _createClass(LinearGradient, items);
importDefaultResultResult.displayName = "LinearGradient";
importDefaultResultResult.defaultProps = { x1: "0%", y1: "0%", x2: "100%", y2: "0%" };

export default importDefaultResultResult;
