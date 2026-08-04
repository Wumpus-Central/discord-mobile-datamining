// _runtime/08612__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const re9 = /\s+/;
class SvgImage {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, SvgImage);
    tmp2 = __esModule;
    obj = __esModule(SvgImage);
    tmp3 = __esModule;
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
require("_inherits")(SvgImage, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      let height;
      let href;
      let preserveAspectRatio;
      let tmp2;
      let tmp3;
      let width;
      let x;
      let y;
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
      let obj = { x, y, width, height, onLoad: props.onLoad, meetOrSlice: null, align: null, src: null };
      [tmp2, tmp3] = parts;
      obj[5] = self(8554).meetOrSliceTypes[tmp3] || 0;
      const tmp6 = self(8554).meetOrSliceTypes[tmp3] || 0;
      obj[6] = self(8554).alignEnum[tmp2] || "xMidYMid";
      let assetSource = null;
      if (href) {
        let tmp10 = href;
        if (typeof href !== "__FORMATJS_LISTFORMAT_DATA__") {
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
      const tmp7 = self(8554).alignEnum[tmp2] || "xMidYMid";
      const tmp11 = importDefault(8613);
      const merged = Object.assign(self(8556).withoutXY(this, props));
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