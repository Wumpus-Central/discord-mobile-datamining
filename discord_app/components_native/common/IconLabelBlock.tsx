// === Module 16640: IconLabelBlock ===

// Module 16640 (IconLabelBlock)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import shared from "shared" /* 4682 */;
import Text_Text from "Text/Text" /* 4825 */;
import IconUploaderDefault from "IconUploader" /* 10378 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["error"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { wrapper: { alignItems: "center", paddingTop: 26, paddingBottom: 16 }, error: { fontSize: 12, textAlign: "center", alignSelf: "center", marginBottom: 10, color: nativeDefault.unsafe_rawColors.RED_400 }, label: null, iconUploaderWrapper: null, text: null };
let obj3 = { fontSize: 12, textAlign: "center", alignSelf: "center", marginBottom: 10, color: nativeDefault.unsafe_rawColors.RED_400 };
obj2.label = { fontSize: 12, marginTop: 20, color: nativeDefault.colors.TEXT_SUBTLE };
obj2.iconUploaderWrapper = { alignSelf: "stretch", alignItems: "center" };
obj2.text = { marginTop: 9 };
let closure_9 = createStyles.createLegacyClassComponentStyles(obj2);
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
    tmp3 = React5(native.LegacyText, obj);
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
    tmp4 = React5(Text_Text.Text, obj);
  }
  return tmp4;
};
prototype["renderIcon"] = function renderIcon() {
  const tmp = closure_9(this.context);
  ({ iconProps, source, darkSource, errorProps } = this.props);
  if (null != iconProps) {
    const error = iconProps.error;
    const obj2 = { style: tmp.iconUploaderWrapper, children: null };
    const obj3 = {};
    const tmp11 = _objectWithoutProperties(iconProps, closure_3);
    const merged = Object.assign(tmp11);
    const items = [React5(IconUploaderDefault, obj3), ];
    let tmp14Result = null;
    if (null != error) {
      const obj4 = { style: null };
      const items1 = [tmp.error, tmp4];
      obj4.style = items1;
      const merged1 = Object.assign(errorProps);
      obj4.children = error;
      tmp14Result = React5(native.LegacyText, obj4);
    }
    items[1] = tmp14Result;
    obj2.children = items;
    return React6(hasOwnProperty, obj2);
  } else {
    if (null == source) {
      if (obj.isThemeLight(this.context.theme)) {
        darkSource = tmp2;
      }
      source = darkSource;
      obj = shared;
    }
    const obj5 = { source, style: tmp3, resizeMode: "contain" };
    return React5(timestampProducer, obj5);
  }
};
prototype["render"] = function render() {
  const obj = { style: null, children: null };
  const items = [closure_9(this.context).wrapper, this.props.wrapperStyles];
  obj.style = items;
  const items1 = [this.renderIcon(), this.props.children, this.renderLabel(), this.renderText()];
  obj.children = items1;
  return React6(hasOwnProperty, obj);
};
IconLabelBlock.contextType = fn(4537).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/IconLabelBlock.tsx");

export default IconLabelBlock;