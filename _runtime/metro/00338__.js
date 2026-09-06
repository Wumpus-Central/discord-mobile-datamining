// === Module 338: ? ===

// Module 338
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const ImageBackground = importDefault;
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
let closure_2 = ["children", "style", "imageStyle", "imageRef", "importantForAccessibility"];
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
class ImageBackground {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_4(this, ImageBackground);
    items1 = [...items];
    tmp2 = metroRequire;
    obj = metroRequire(ImageBackground);
    tmp3 = hasOwnProperty;
    if (closure_9()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._viewRef = null;
    tmp3Result._captureRef = (_viewRef) => {
      closure_0._viewRef = _viewRef;
    };
    return tmp3Result;
  }
}
_inherits(ImageBackground, noop.Component);
const entry = {
  key: "setNativeProps",
  value: function setNativeProps(arg0) {
    const _viewRef = this._viewRef;
    if (_viewRef) {
      _viewRef.setNativeProps(arg0);
    }
  }
};
let items = [
  entry,
  {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ style, importantForAccessibility } = props);
      ({ children, imageStyle, imageRef } = props);
      let size = ImageBackground(148)(style);
      let obj = { accessibilityIgnoresInvertColors: true, importantForAccessibility, style, ref: this._captureRef, children: null };
      const tmp = _objectWithoutProperties(props, closure_2);
      obj = {};
      const tmp3 = ImageBackground(108);
      const merged = Object.assign(tmp);
      obj.importantForAccessibility = importantForAccessibility;
      const items = [ImageBackground(254).absoluteFill, , ];
      let width;
      if (size != null) {
        width = size.width;
      }
      size = { width, height: null };
      let height;
      if (size != null) {
        height = size.height;
      }
      size.height = height;
      items[1] = size;
      items[2] = imageStyle;
      obj.style = items;
      obj.ref = imageRef;
      const items1 = [React5(ImageBackground(328), obj), children];
      obj.children = items1;
      return React6(tmp3, obj);
    }
  }
];

export default _createClass(ImageBackground, items);