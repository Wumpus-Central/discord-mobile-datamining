// _runtime/00338__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00098__inherits.js";
import jsxProd from "react/00021_jsxProd.js";

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
      const tmp = callback(props, closure_2);
      let obj = {};
      const tmp3 = ImageBackground(108);
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
      const items1 = [callback2(ImageBackground(328), obj), children];
      obj[4] = items1;
      return callback3(tmp3, obj);
    }
  }
];

export default importDefaultResult(ImageBackground, items);