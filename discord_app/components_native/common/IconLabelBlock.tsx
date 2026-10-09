// === Module 17485: IconLabelBlock ===

// Module 17485 (IconLabelBlock)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import shared from "shared" /* 4930 */;
import Text_Text from "Text/Text" /* 5087 */;
import FastImageDefault from "FastImage" /* 6163 */;
import IconUploaderDefault from "IconUploader" /* 9610 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["error"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { wrapper: { alignItems: "center", paddingTop: 26, paddingBottom: 16 }, error: { fontSize: 12, textAlign: "center", alignSelf: "center", marginBottom: 10, color: nativeDefault.unsafe_rawColors.RED_400 }, label: null, iconUploaderWrapper: null, text: null };
let obj3 = { fontSize: 12, textAlign: "center", alignSelf: "center", marginBottom: 10, color: nativeDefault.unsafe_rawColors.RED_400 };
obj2.label = { fontSize: 12, marginTop: 20, color: nativeDefault.colors.TEXT_SUBTLE };
obj2.iconUploaderWrapper = { alignSelf: "stretch", alignItems: "center" };
obj2.text = { marginTop: 9 };
let closure_8 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class IconLabelBlock extends PureComponent {
}
const prototype = IconLabelBlock.prototype;
prototype["renderLabel"] = function renderLabel() {
  const label = this.props.label;
  let tmp3 = null;
  if (null != label) {
    const obj = { style: null, children: null };
    const items = [tmp.label, tmp2];
    obj.style = items;
    obj.children = label;
    tmp3 = timestampProducer(native.LegacyText, obj);
  }
  return tmp3;
};
prototype["renderText"] = function renderText() {
  const text = this.props.text;
  let tmp4 = null;
  if (null != text) {
    const obj = { variant: "heading-md/medium", color: "text-default", style: null, accessibilityRole: null, children: null };
    const items = [tmp.text, tmp2];
    obj.style = items;
    obj.accessibilityRole = tmp3;
    obj.children = text;
    tmp4 = timestampProducer(Text_Text.Text, obj);
  }
  return tmp4;
};
prototype["renderIcon"] = function renderIcon() {
  const tmp = closure_8(this.context);
  ({ iconProps, source, darkSource, errorProps } = this.props);
  if (null != iconProps) {
    const error = iconProps.error;
    const obj2 = { style: tmp.iconUploaderWrapper, children: null };
    const obj3 = {};
    const tmp12 = _objectWithoutProperties(iconProps, closure_3);
    const merged = Object.assign(tmp12);
    const items = [timestampProducer(IconUploaderDefault, obj3), ];
    let tmp15Result = null;
    if (null != error) {
      const obj4 = { style: null };
      const items1 = [tmp.error, tmp4];
      obj4.style = items1;
      const merged1 = Object.assign(errorProps);
      obj4.children = error;
      tmp15Result = timestampProducer(native.LegacyText, obj4);
    }
    items[1] = tmp15Result;
    obj2.children = items;
    return React5(View, obj2);
  } else {
    if (null == source) {
      if (obj.isThemeLight(this.context.theme)) {
        darkSource = tmp2;
      }
      source = darkSource;
      obj = shared;
    }
    const obj5 = { source, style: tmp3, resizeMode: "contain" };
    return timestampProducer(FastImageDefault, obj5);
  }
};
prototype["render"] = function render() {
  const obj = { style: null, children: null };
  const items = [closure_8(this.context).wrapper, this.props.wrapperStyles];
  obj.style = items;
  const items1 = [this.renderIcon(), this.props.children, this.renderLabel(), this.renderText()];
  obj.children = items1;
  return React5(View, obj);
};
IconLabelBlock.contextType = fn(4788).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/IconLabelBlock.tsx");

export default IconLabelBlock;