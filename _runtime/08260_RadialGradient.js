// _runtime/08260_RadialGradient.js
import Fragment from "react/00021_Fragment.js";
import multiplyMatricesDefault from "08193_multiplyMatrices.js";
import extractGradientDefault from "08246_extractGradient.js";
import _modDef8261 from "metro/08261__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
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
class RadialGradient {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RadialGradient);
    const obj = _getPrototypeOf(RadialGradient);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(RadialGradient, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let cx;
    let cy;
    let fx;
    let r;
    let rx;
    let ry;
    const self = this;
    const props = this.props;
    ({ rx, ry, r, cx, cy, fx } = props);
    if (undefined === fx) {
      fx = cx;
    }
    let fy = props.fy;
    const obj = { fx, fy, rx, ry, cx, cy };
    if (undefined === fy) {
      fy = cy;
    }
    if (!rx) {
      rx = r;
    }
    if (!ry) {
      ry = r;
    }
    _modDef8261;
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
const importDefaultResultResult = _createClass(RadialGradient, items);
importDefaultResultResult.displayName = "RadialGradient";
importDefaultResultResult.defaultProps = { cx: "50%", cy: "50%", r: "50%" };

export default importDefaultResultResult;
