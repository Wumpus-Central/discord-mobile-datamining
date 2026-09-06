// discord_app/components_native/common/IconLabelBlock.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../design/void/native.tsx";
import shared from "../../design/shared.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import IconUploaderDefault from "IconUploader.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["error"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  wrapper: { alignItems: "center", paddingTop: 26, paddingBottom: 16 },
  error: null,
  label: null,
  iconUploaderWrapper: null,
  text: null,
};
createStyles = {
  fontSize: 12,
  textAlign: "center",
  alignSelf: "center",
  marginBottom: 10,
  color: nativeDefault.unsafe_rawColors.RED_400,
};
createStyles.error = createStyles;
createStyles.label = { fontSize: 12, marginTop: 20, color: nativeDefault.colors.TEXT_SUBTLE };
createStyles.iconUploaderWrapper = { alignSelf: "stretch", alignItems: "center" };
createStyles.text = { marginTop: 9 };
let closure_9 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class IconLabelBlock extends PureComponent {}
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
    const obj = {
      variant: "heading-md/medium",
      color: "text-default",
      style: null,
      accessibilityRole: null,
      children: null,
    };
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
    let obj = { style: tmp.iconUploaderWrapper, children: null };
    obj = {};
    const tmp11 = _objectWithoutProperties(iconProps, closure_3);
    const tmp12 = React6;
    const tmp13 = hasOwnProperty;
    const tmp14 = React5;
    const merged = Object.assign(tmp11);
    const items = [React5(IconUploaderDefault, obj)];
    let tmp14Result = null;
    if (null != error) {
      const obj1 = { style: null };
      const items1 = [tmp.error, tmp4];
      obj1.style = items1;
      const merged1 = Object.assign(errorProps);
      obj1.children = error;
      tmp14Result = tmp14(native.LegacyText, obj1);
    }
    items[1] = tmp14Result;
    obj.children = items;
    return tmp12(tmp13, obj);
  } else {
    if (null == source) {
      obj = shared;
      if (obj.isThemeLight(this.context.theme)) {
        darkSource = tmp2;
      }
      source = darkSource;
    }
    const obj2 = { source, style: tmp3, resizeMode: "contain" };
    return React5(timestampProducer, obj2);
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
IconLabelBlock.contextType = fn(4271).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/IconLabelBlock.tsx");

export default IconLabelBlock;
