// _runtime/08334__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "08265__isNativeReflectConstruct.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/08335___INTERNAL_VIEW_CONFIG.js";
import closure_3 from "metro/00041__classCallCheck.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

const Rect = arg1;
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
  } catch (err) {}
}
noopAll;
class Rect {
  constructor() {
    self = this;
    tmp = closure_3(this, Rect);
    tmp2 = closure_5;
    obj = closure_5(Rect);
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
_inheritsDefault(Rect, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let obj = { x: props.x, y: props.y, width: props.width, height: props.height, rx: props.rx, ry: props.ry };
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        },
      };
      const tmp = __INTERNAL_VIEW_CONFIGDefault;
      const merged = Object.assign(self(8256).withoutXY(this, props));
      const merged1 = Object.assign(obj);
      return (
        <tmp
          ref={function ref(arg0) {
            return self.refMethod(arg0);
          }}
        />
      );
    },
  },
];
const importDefaultResultResult = importDefaultResult(Rect, items);
importDefaultResultResult.displayName = "Rect";
importDefaultResultResult.defaultProps = { x: 0, y: 0, width: 0, height: 0 };

export default importDefaultResultResult;
