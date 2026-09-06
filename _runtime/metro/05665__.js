// === Module 5665: ? ===

// Module 5665
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

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
const MaskedView = ["maskElement", "children"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet: closure_7, requireNativeComponent } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_11 = requireNativeComponent("RNCMaskedView");
class MaskedView {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = c2(this, MaskedView);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(MaskedView);
    tmp3 = closure_3;
    if (c10()) {
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
_inherits(MaskedView, noop.Component);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ maskElement, children } = props);
    const tmp = _objectWithoutProperties(props, MaskedView);
    if (noop.isValidElement(maskElement)) {
      let obj = {};
      const merged = Object.assign(tmp);
      obj = { pointerEvents: "none", style: absoluteFill.absoluteFill, children: maskElement };
      const items = [React6(timestampProducer, obj), children];
      obj.children = items;
      let tmp9 = React7(closure_11, obj);
    } else {
      if (!self._hasWarnedInvalidRenderMask) {
        const _console = console;
        console.warn("MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.");
        self._hasWarnedInvalidRenderMask = true;
      }
      obj = {};
      const merged1 = Object.assign(tmp);
      obj.children = children;
      tmp9 = React6(timestampProducer, obj);
    }
    return tmp9;
  }
};
let items = [entry];

export default _createClass(MaskedView, items);