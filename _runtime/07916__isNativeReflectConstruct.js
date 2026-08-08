// _runtime/07916__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";
import { 07913__ } from "metro/07913__.js";
import { __INTERNAL_VIEW_CONFIG } from "metro/07918___INTERNAL_VIEW_CONFIG.js";

const Mask = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class Mask {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, Mask);
    tmp2 = __esModule;
    obj = __esModule(Mask);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
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
require("_inherits")(Mask, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      let maskContentUnits;
      let maskUnits;
      let style;
      const self = this;
      const props = this.props;
      ({ maskUnits, maskContentUnits, style } = props);
      let obj = { x: props.x, y: props.y, width: props.width, height: props.height, maskUnits: null, maskContentUnits: null, maskType: null };
      let num = 0;
      if (undefined !== maskUnits) {
        num = 07913__[maskUnits];
      }
      obj[4] = num;
      let num2 = 1;
      if (undefined !== maskContentUnits) {
        num2 = 07913__[maskContentUnits];
      }
      obj[5] = num2;
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
      obj[6] = self(7917).maskType[str];
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const tmp5 = self;
      const tmp8 = __INTERNAL_VIEW_CONFIG;
      const merged = Object.assign(self(7850).withoutXY(this, props));
      const merged1 = Object.assign(obj);
      obj.children = props.children;
      return <tmp8 ref={function ref(arg0) {
        return self.refMethod(arg0);
      }} />;
    }
  }
];
const importDefaultResultResult = importDefaultResult(Mask, items);
importDefaultResultResult.displayName = "Mask";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;