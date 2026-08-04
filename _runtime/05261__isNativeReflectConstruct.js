import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c9;
let closure_6;
let error;
let metroImportAll;
let requireNativeComponent;
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
const MaskedView = ["maskElement", "children"];
let c5 = importAllResult;
({ View: closure_6, StyleSheet: error, requireNativeComponent } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_11 = requireNativeComponent("RNCMaskedView");
class MaskedView {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = _isNativeReflectConstruct(this, MaskedView);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(MaskedView);
    tmp3 = _isNativeReflectConstruct;
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
require("_inherits")(MaskedView, importAllResult.Component);
let items = [
  {
    key: "render",
    value: function render() {
      let children;
      let maskElement;
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
          console.warn("MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.");
          self._hasWarnedInvalidRenderMask = true;
        }
        obj = {};
        const merged1 = Object.assign(tmp);
        obj.children = children;
        tmp9 = callback4(closure_6, obj);
      }
      return tmp9;
    }
  }
];

export default importDefaultResult(MaskedView, items);