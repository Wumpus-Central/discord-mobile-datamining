// _runtime/08133__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "08076__isNativeReflectConstruct.js";
import _modDef8130 from "metro/08130__.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/08135___INTERNAL_VIEW_CONFIG.js";
import closure_3 from "metro/00041__classCallCheck.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
noopAll;
class Mask {
  constructor() {
    self = this;
    tmp = closure_3(this, Mask);
    tmp2 = closure_5;
    obj = closure_5(Mask);
    tmp3 = closure_4;
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
_inheritsDefault(Mask, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ maskUnits, maskContentUnits, style } = props);
      let obj = { x: props.x, y: props.y, width: props.width, height: props.height, maskUnits: null, maskContentUnits: null, maskType: null };
      let num = 0;
      if (undefined !== maskUnits) {
        num = _modDef8130[maskUnits];
      }
      obj[4] = num;
      let num2 = 1;
      if (undefined !== maskContentUnits) {
        num2 = _modDef8130[maskContentUnits];
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
      obj[6] = self(8134).maskType[str];
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const tmp5 = self;
      const tmp8 = __INTERNAL_VIEW_CONFIGDefault;
      const merged = Object.assign(self(8067).withoutXY(this, props));
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