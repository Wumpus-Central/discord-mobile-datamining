// === Module 8312: _isNativeReflectConstruct ===

// Module 8312 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8265 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8313 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const SvgImage = arg1;
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
noopAll;
const re9 = /\s+/;
class SvgImage {
  constructor() {
    self = this;
    tmp = closure_3(this, SvgImage);
    tmp2 = closure_5;
    obj = closure_5(SvgImage);
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
_inheritsDefault(SvgImage, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ preserveAspectRatio, href } = props);
      ({ x, y, width, height } = props);
      if (undefined === href) {
        href = props.xlinkHref;
      }
      if (preserveAspectRatio) {
        let parts = preserveAspectRatio.trim().split(closure_9);
        const str = preserveAspectRatio.trim();
      } else {
        parts = [];
      }
      let obj = { x, y, width, height, onLoad: props.onLoad, meetOrSlice: self(8254).meetOrSliceTypes[tmp3] || 0, align: null, src: null };
      [tmp2, tmp3] = parts;
      const tmp6 = self(8254).meetOrSliceTypes[tmp3] || 0;
      obj[6] = self(8254).alignEnum[tmp2] || "xMidYMid";
      let assetSource = null;
      if (href) {
        let tmp10 = href;
        if (typeof href === "string") {
          obj = { uri: null };
          obj[0] = href;
          tmp10 = obj;
        }
        assetSource = Image.resolveAssetSource(tmp10);
      }
      obj[7] = assetSource;
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const tmp7 = self(8254).alignEnum[tmp2] || "xMidYMid";
      const tmp11 = __INTERNAL_VIEW_CONFIGDefault;
      const merged = Object.assign(self(8256).withoutXY(this, props));
      const merged1 = Object.assign(obj);
      return <tmp11 ref={function ref(arg0) {
        return self.refMethod(arg0);
      }} />;
    }
  }
];
const importDefaultResultResult = importDefaultResult(SvgImage, items);
importDefaultResultResult.displayName = "Image";
importDefaultResultResult.defaultProps = { x: 0, y: 0, width: 0, height: 0, preserveAspectRatio: "xMidYMid meet" };

export default importDefaultResultResult;