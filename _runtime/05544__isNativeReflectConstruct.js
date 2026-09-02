// _runtime/05544__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import closure_1 from "metro/00109__objectWithoutProperties.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importAllResult from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

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
const MaskedView = ["maskElement", "children"];
let c5 = importAllResult;
({ View: closure_6, StyleSheet: error, requireNativeComponent } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_11 = requireNativeComponent("RNCMaskedView");
class MaskedView {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_2(this, MaskedView);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(MaskedView);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._hasWarnedInvalidRenderMask = false;
    return tmp3Result;
  }
}
_inheritsDefault(MaskedView, importAllResult.Component);
let items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ maskElement, children } = props);
      const tmp = callback(props, MaskedView);
      if (importAllResult.isValidElement(maskElement)) {
        let obj = {};
        const merged = Object.assign(tmp);
        obj = { pointerEvents: "none", style: null, children: null };
        obj[1] = absoluteFill.absoluteFill;
        obj[2] = maskElement;
        const items = [callback4(closure_6, obj), children];
        obj.children = items;
        let tmp9 = callback5(closure_11, obj);
      } else {
        if (!self._hasWarnedInvalidRenderMask) {
          const _console = console;
          console.warn(
            "MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.",
          );
          self._hasWarnedInvalidRenderMask = true;
        }
        obj = {};
        const merged1 = Object.assign(tmp);
        obj.children = children;
        tmp9 = callback4(closure_6, obj);
      }
      return tmp9;
    },
  },
];

export default importDefaultResult(MaskedView, items);
