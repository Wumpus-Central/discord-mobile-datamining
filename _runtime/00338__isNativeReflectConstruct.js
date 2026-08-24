// === Module 338: _isNativeReflectConstruct ===

// Module 338 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import closure_4 from "_classCallCheck" /* 41 */;
import closure_5 from "_possibleConstructorReturn" /* 93 */;
import closure_6 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import jsxProd from "jsxProd" /* 21 */;

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
({ jsx: error, jsxs: closure_8 } = jsxProd);
class ImageBackground {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_4(this, closure_0);
    items1 = [...items];
    tmp2 = closure_6;
    obj = closure_6(closure_0);
    tmp3 = closure_5;
    if (_isNativeReflectConstruct()) {
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
importDefaultResult1(ImageBackground, noopAll.Component);
let items = [
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const _viewRef = this._viewRef;
      if (_viewRef) {
        _viewRef.setNativeProps(arg0);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ style, importantForAccessibility } = props);
      ({ children, imageStyle, imageRef } = props);
      const size = ImageBackground(148)(style);
      let obj = { accessibilityIgnoresInvertColors: true, importantForAccessibility, style, ref: this._captureRef, children: null };
      const tmp = callback(props, closure_2);
      const tmp2 = closure_8;
      obj = {};
      const tmp3 = ImageBackground(108);
      const tmp4 = closure_7;
      const merged = Object.assign(tmp);
      obj.importantForAccessibility = importantForAccessibility;
      const items = [ImageBackground(254).absoluteFill, , ];
      let width;
      if (size != null) {
        width = size.width;
      }
      obj = { width, height: null };
      let height;
      if (size != null) {
        height = size.height;
      }
      obj[1] = height;
      items[1] = obj;
      items[2] = imageStyle;
      obj.style = items;
      obj.ref = imageRef;
      const items1 = [tmp4(ImageBackground(328), obj), children];
      obj[4] = items1;
      return tmp2(tmp3, obj);
    }
  }
];

export default importDefaultResult(ImageBackground, items);