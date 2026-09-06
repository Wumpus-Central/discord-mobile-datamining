// === Module 8524: ? ===

// Module 8524
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8477 from "module_8477" /* 8477 */;
import _modDef8525 from "module_8525" /* 8525 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const SvgImage = fn;
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
_possibleConstructorReturnDefault;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const re9 = /\s+/;
class SvgImage {
  constructor() {
    self = this;
    tmp = closure_3(this, SvgImage);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(SvgImage);
    tmp3 = closure_4;
    if (closure_8()) {
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
_inherits(SvgImage, _modDef8477);
const entry = {
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
      let parts = preserveAspectRatio.trim().split(re9);
      const str = preserveAspectRatio.trim();
    } else {
      parts = [];
    }
    const size = { x, y, width, height, onLoad: props.onLoad, meetOrSlice: SvgImage(8466).meetOrSliceTypes[tmp3] || 0, align: null, src: null };
    [tmp2, tmp3] = parts;
    const tmp6 = SvgImage(8466).meetOrSliceTypes[tmp3] || 0;
    size.align = SvgImage(8466).alignEnum[tmp2] || "xMidYMid";
    let assetSource = null;
    if (href) {
      let tmp10 = href;
      if (typeof href === "string") {
        let obj = { uri: href };
        tmp10 = obj;
      }
      assetSource = Image.resolveAssetSource(tmp10);
    }
    size.src = assetSource;
    obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const tmp7 = SvgImage(8466).alignEnum[tmp2] || "xMidYMid";
    const merged = Object.assign(SvgImage(8468).withoutXY(this, props));
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