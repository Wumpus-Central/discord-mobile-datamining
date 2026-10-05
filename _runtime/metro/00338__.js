// _runtime/metro/00338__.js
import ViewDefault from "../00108_View.js";
import flattenStyleDefault from "../00148_flattenStyle.js";
import get_hairlineWidthDefault from "../00254_get_hairlineWidth.js";
import ImageDefault from "../00328_Image.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import hasOwnProperty from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";

let size;

let metroImportAll;
let metroImportDefault;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_2 = ["children", "style", "imageStyle", "imageRef", "importantForAccessibility"];
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
class ImageBackground {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, ImageBackground);
    const items1 = [...items];
    const obj = _getPrototypeOf(ImageBackground);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._viewRef = null;
    tmp3Result._captureRef = (_viewRef) => {
      closure_0._viewRef = _viewRef;
    };
    return tmp3Result;
  }
}
_inherits(ImageBackground, react.Component);
const entry = {
  key: "setNativeProps",
  value: function setNativeProps(arg0) {
    const _viewRef = this._viewRef;
    if (_viewRef) {
      _viewRef.setNativeProps(arg0);
    }
  },
};
let items = [
  entry,
  {
    key: "render",
    value: function render() {
      let children;
      let height;
      let imageRef;
      let imageStyle;
      let importantForAccessibility;
      let items;
      let items1;
      let style;
      const props = this.props;
      ({ style, importantForAccessibility } = props);
      ({ children, imageStyle, imageRef } = props);
      const tmp = _objectWithoutProperties(props, closure_2);
      size = flattenStyleDefault(style);
      const obj = {
        accessibilityIgnoresInvertColors: true,
        importantForAccessibility,
        style,
        ref: this._captureRef,
        children: items1,
      };
      const obj2 = { importantForAccessibility, style: items, ref: imageRef };
      const tmp3 = ViewDefault;
      const tmp5 = ImageDefault;
      const merged = Object.assign(tmp);
      items = [get_hairlineWidthDefault.absoluteFill, ,];
      let width;
      if (size != null) {
        width = size.width;
      }
      const size1 = { width, height };
      height = undefined;
      if (size != null) {
        height = size.height;
      }
      items[1] = size1;
      items[2] = imageStyle;
      items1 = [metroImportDefault(tmp5, obj2), children];
      return metroImportAll(tmp3, obj);
    },
  },
];

export default _createClass(ImageBackground, items);
