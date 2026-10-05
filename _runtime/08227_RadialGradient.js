// === Module 8227: RadialGradient ===

// Module 8227 (RadialGradient)
import Fragment from "Fragment" /* 21 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8160 */;
import extractGradientDefault from "extractGradient" /* 8213 */;
import _modDef8228 from "module_8228" /* 8228 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
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
    _modDef8228;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(extractGradientDefault(props, this));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(RadialGradient, items);
importDefaultResultResult.displayName = "RadialGradient";
importDefaultResultResult.defaultProps = { cx: "50%", cy: "50%", r: "50%" };

export default importDefaultResultResult;