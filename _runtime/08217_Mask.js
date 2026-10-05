// === Module 8217: Mask ===

// Module 8217 (Mask)
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 8151 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8160 */;
import unitsDefault from "units" /* 8214 */;
import maskType2 from "maskType" /* 8218 */;
import _modDef8219 from "module_8219" /* 8219 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let size;

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
class Mask {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Mask);
    const obj = _getPrototypeOf(Mask);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(Mask, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let maskContentUnits;
    let maskType;
    let maskUnits;
    let num;
    let num2;
    let str;
    let style;
    const self = this;
    const props = this.props;
    ({ maskUnits, maskContentUnits, style } = props);
    size = { x: props.x, y: props.y, width: props.width, height: props.height, maskUnits: num, maskContentUnits: num2, maskType: maskType[str] };
    num = 0;
    const children = props.children;
    if (undefined !== maskUnits) {
      num = unitsDefault[maskUnits];
    }
    num2 = 1;
    if (undefined !== maskContentUnits) {
      num2 = unitsDefault[maskContentUnits];
    }
    str = undefined;
    maskType = maskType2.maskType;
    if (props != null) {
      str = props.maskType;
    }
    if (!str) {
      let maskType1;
      if (style != null) {
        maskType1 = style.maskType;
      }
      str = maskType1;
    }
    if (!str) {
      str = "luminance";
    }
    _modDef8219;
    const tmp5Result = extractProps;
    const merged = Object.assign(tmp5Result.withoutXY(this, props));
    const merged1 = Object.assign(size);
    return <tmp8 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{children}</tmp8>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Mask, items);
importDefaultResultResult.displayName = "Mask";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;