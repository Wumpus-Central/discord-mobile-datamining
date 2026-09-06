// === Module 8534: ? ===

// Module 8534
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8477 from "module_8477" /* 8477 */;
import unitsDefault from "units" /* 8531 */;
import _modDef8536 from "module_8536" /* 8536 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Mask = fn;
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
  } catch (err) {
  }
}
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class Mask {
  constructor() {
    self = this;
    tmp = closure_3(this, Mask);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Mask);
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
_inherits(Mask, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ maskUnits, maskContentUnits, style } = props);
    const size = { x: props.x, y: props.y, width: props.width, height: props.height, maskUnits: null, maskContentUnits: null, maskType: null };
    let num = 0;
    if (undefined !== maskUnits) {
      num = unitsDefault[maskUnits];
    }
    size.maskUnits = num;
    let num2 = 1;
    if (undefined !== maskContentUnits) {
      num2 = unitsDefault[maskContentUnits];
    }
    size.maskContentUnits = num2;
    let str;
    if (props != null) {
      str = props.maskType;
    }
    if (!str) {
      let maskType;
      if (style != null) {
        maskType = style.maskType;
      }
      str = maskType;
    }
    if (!str) {
      str = "luminance";
    }
    size.maskType = Mask(8535).maskType[str];
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged = Object.assign(Mask(8468).withoutXY(this, props));
    const merged1 = Object.assign(size);
    obj.children = props.children;
    return <tmp8 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Mask, items);
importDefaultResultResult.displayName = "Mask";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;