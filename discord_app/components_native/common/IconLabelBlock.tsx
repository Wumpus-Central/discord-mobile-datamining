// discord_app/components_native/common/IconLabelBlock.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../design/void/native.tsx";
import native2 from "../../../discord_common/js/packages/design/native.tsx";
import shared from "../../design/shared.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import IconUploaderDefault from "IconUploader.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let closure_3 = ["error"];
({ View: hasOwnProperty, Image: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = {
  wrapper: { alignItems: "center", paddingTop: 26, paddingBottom: 16 },
  error: obj2,
  label: obj3,
  iconUploaderWrapper: { alignSelf: "stretch", alignItems: "center" },
  text: { marginTop: 9 },
};
obj2 = {
  fontSize: 12,
  textAlign: "center",
  alignSelf: "center",
  marginBottom: 10,
  color: nativeDefault.unsafe_rawColors.RED_400,
};
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { fontSize: 12, marginTop: 20, color: nativeDefault.colors.TEXT_SUBTLE };
const React4 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class IconLabelBlock extends PureComponent {
  renderLabel() {
    let items;
    const label = this.props.label;
    let tmp3 = null;
    if (null != label) {
      const obj = { style: items, children: label };
      items = [tmp.label, tmp2];
      tmp3 = metroImportDefault(native.LegacyText, obj);
    }
    return tmp3;
  }
  renderText() {
    let items;
    const text = this.props.text;
    let tmp4 = null;
    if (null != text) {
      const obj = {
        variant: "heading-md/medium",
        color: "text-default",
        style: items,
        accessibilityRole: tmp3,
        children: text,
      };
      items = [tmp.text, tmp2];
      tmp4 = metroImportDefault(Text_Text.Text, obj);
    }
    return tmp4;
  }
  renderIcon() {
    let darkSource;
    let errorProps;
    let iconProps;
    let items;
    let items1;
    let source;
    const tmp = closure_9(this.context);
    ({ iconProps, source, darkSource, errorProps } = this.props);
    if (null != iconProps) {
      const error = iconProps.error;
      const obj2 = { style: tmp.iconUploaderWrapper, children: items };
      const obj3 = {};
      const tmp11 = _objectWithoutProperties(iconProps, closure_3);
      const tmp17 = IconUploaderDefault;
      const merged = Object.assign(tmp11);
      items = [metroImportDefault(tmp17, obj3)];
      let tmp14Result = null;
      if (null != error) {
        const obj4 = { style: items1, children: error };
        items1 = [tmp.error, tmp4];
        const LegacyText = native.LegacyText;
        const merged1 = Object.assign(errorProps);
        tmp14Result = metroImportDefault(LegacyText, obj4);
      }
      items[1] = tmp14Result;
      return metroImportAll(hasOwnProperty, obj2);
    } else {
      if (null == source) {
        const obj = shared;
        if (obj.isThemeLight(this.context.theme)) {
          darkSource = tmp2;
        }
        source = darkSource;
      }
      const obj5 = { source, style: tmp3, resizeMode: "contain" };
      return metroImportDefault(metroRequire, obj5);
    }
  }
  render() {
    let items;
    let items1;
    const obj = { style: items, children: items1 };
    items = [closure_9(this.context).wrapper, this.props.wrapperStyles];
    items1 = [this.renderIcon(), this.props.children, this.renderLabel(), this.renderText()];
    return metroImportAll(hasOwnProperty, obj);
  }
}
const prototype = IconLabelBlock.prototype;
IconLabelBlock.contextType = native2.ThemeContext;
const result = size.fileFinishedImporting("components_native/common/IconLabelBlock.tsx");

export default IconLabelBlock;
