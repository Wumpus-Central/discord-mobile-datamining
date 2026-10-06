// _runtime/metro/06060__.js
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

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
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
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
        console.warn(
          "MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.",
        );
        self._hasWarnedInvalidRenderMask = true;
      }
      const obj = { children };
      const merged1 = Object.assign(tmp);
      tmp9 = metroImportAll(metroRequire, obj);
    }
    return tmp9;
  },
};
let items = [entry];

export default _createClass(MaskedView, items);
