// === Module 8207: ? ===

// Module 8207
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import extractViewBox from "extractViewBox" /* 8149 */;
import extractProps from "extractProps" /* 8151 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8160 */;
import _modDef8208 from "module_8208" /* 8208 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let size;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const Image = react_native.Image;
const jsx = Fragment.jsx;
const re9 = /\s+/;
class SvgImage {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, SvgImage);
    const obj = _getPrototypeOf(SvgImage);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(SvgImage, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let assetSource;
    let height;
    let href;
    let parts;
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
    const onLoad = props.onLoad;
    if (preserveAspectRatio) {
      const str = preserveAspectRatio.trim();
      parts = str.split(re9);
    } else {
      parts = [];
    }
    size = { x, y, width, height, onLoad, meetOrSlice: extractViewBox.meetOrSliceTypes[tmp3] || 0, align: extractViewBox.alignEnum[tmp2] || "xMidYMid", src: assetSource };
    [tmp2, tmp3] = parts;
    extractViewBox.meetOrSliceTypes[tmp3] || 0;
    assetSource = null;
    extractViewBox.alignEnum[tmp2] || "xMidYMid";
    if (href) {
      let tmp10 = href;
      const resolveAssetSource = Image.resolveAssetSource;
      if (typeof href === "string") {
        tmp10 = { uri: href };
        const obj = { uri: href };
      }
      assetSource = resolveAssetSource(tmp10);
    }
    _modDef8208;
    const tmp4Result = extractProps;
    const merged = Object.assign(tmp4Result.withoutXY(this, props));
    const merged1 = Object.assign(size);
    return <tmp11 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(SvgImage, items);
importDefaultResultResult.displayName = "Image";
importDefaultResultResult.defaultProps = { x: 0, y: 0, width: 0, height: 0, preserveAspectRatio: "xMidYMid meet" };

export default importDefaultResultResult;