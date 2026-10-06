// _runtime/08255_Pattern.js
import Fragment from "react/00021_Fragment.js";
import extractTransformDefault from "08177_extractTransform.js";
import extractViewBoxDefault from "08182_extractViewBox.js";
import multiplyMatricesDefault from "08193_multiplyMatrices.js";
import unitsDefault from "08247_units.js";
import _modDef8256 from "metro/08256__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";

let size;

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
class Pattern {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Pattern);
    const obj = _getPrototypeOf(Pattern);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(Pattern, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let children;
    let height;
    let id;
    let num;
    let patternContentUnits;
    let patternTransform;
    let patternUnits;
    let preserveAspectRatio;
    let transform;
    let viewBox;
    let width;
    let x;
    let y;
    const self = this;
    const props = this.props;
    ({ patternTransform, patternUnits, patternContentUnits } = props);
    ({ transform, id, x, y, width, height, children, viewBox, preserveAspectRatio } = props);
    const tmp3 = extractTransformDefault;
    if (!patternTransform) {
      patternTransform = transform;
    }
    if (!patternTransform) {
      patternTransform = props;
    }
    const tmp3Result = tmp3(patternTransform);
    size = {
      x,
      y,
      width,
      height,
      name: id,
      matrix: tmp3Result,
      patternTransform: tmp3Result,
      patternUnits: (patternUnits && unitsDefault[patternUnits]) || 0,
      patternContentUnits: num,
    };
    num = 1;
    (patternUnits && unitsDefault[patternUnits]) || 0;
    if (patternContentUnits) {
      num = unitsDefault[patternContentUnits];
    }
    _modDef8256;
    const merged = Object.assign(size);
    const merged1 = Object.assign(extractViewBoxDefault({ viewBox, preserveAspectRatio }));
    return (
      <tmpResult
        ref={function ref(arg0) {
          return self.refMethod(arg0);
        }}
      >
        {children}
      </tmpResult>
    );
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Pattern, items);
importDefaultResultResult.displayName = "Pattern";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;
