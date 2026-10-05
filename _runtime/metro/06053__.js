// === Module 6053: ? ===

// Module 6053
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let requireNativeComponent;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_0 = ["maskElement", "children"];
({ View: metroRequire, StyleSheet: metroImportDefault, requireNativeComponent } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_11 = requireNativeComponent("RNCMaskedView");
class MaskedView {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, MaskedView);
    const items1 = [...items];
    const obj = _getPrototypeOf(MaskedView);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result._hasWarnedInvalidRenderMask = false;
    return tmp3Result;
  }
}
_inherits(MaskedView, react.Component);
const entry = {
  key: "render",
  value: function render() {
    let children;
    let items;
    let maskElement;
    let tmp9;
    const self = this;
    const props = this.props;
    ({ maskElement, children } = props);
    const tmp = _objectWithoutProperties(props, closure_0);
    if (react.isValidElement(maskElement)) {
      const obj2 = { children: items };
      const merged = Object.assign(tmp);
      const obj3 = { pointerEvents: "none", style: metroImportDefault.absoluteFill, children: maskElement };
      items = [metroImportAll(metroRequire, obj3), children];
      tmp9 = React4(closure_11, obj2);
    } else {
      if (!self._hasWarnedInvalidRenderMask) {
        const _console = console;
        console.warn("MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.");
        self._hasWarnedInvalidRenderMask = true;
      }
      const obj = { children };
      const merged1 = Object.assign(tmp);
      tmp9 = metroImportAll(metroRequire, obj);
    }
    return tmp9;
  }
};
let items = [entry];

export default _createClass(MaskedView, items);