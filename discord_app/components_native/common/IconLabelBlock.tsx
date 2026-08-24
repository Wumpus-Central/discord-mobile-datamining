// === Module 16067: renderLabel ===

// Module 16067 (renderLabel)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import Text from "Text" /* 4734 */;
import IconUploaderDefault from "IconUploader" /* 9944 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_3 = ["error"];
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { wrapper: { alignItems: "center", paddingTop: 26, paddingBottom: 16 }, error: null, label: null, iconUploaderWrapper: null, text: null };
createCacheKey = { fontSize: 12, textAlign: "center", alignSelf: "center", marginBottom: 10, color: ThemesDefault.unsafe_rawColors.RED_400 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { fontSize: 12, marginTop: 20, color: ThemesDefault.colors.TEXT_SUBTLE };
createCacheKey[3] = { alignSelf: "stretch", alignItems: "center" };
createCacheKey[4] = { marginTop: 9 };
let closure_9 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class IconLabelBlock extends PureComponent {
}
const prototype = IconLabelBlock.prototype;
prototype["renderLabel"] = function renderLabel() {
  const label = this.props.label;
  let tmp3 = null;
  if (null != label) {
    const obj = { style: null, children: null };
    const items = [tmp.label, tmp2];
    obj[0] = items;
    obj[1] = label;
    tmp3 = callback2(Button.LegacyText, obj);
  }
  return tmp3;
};
prototype["renderText"] = function renderText() {
  const text = this.props.text;
  let tmp4 = null;
  if (null != text) {
    const obj = { variant: "heading-md/medium", color: "text-default", style: null, accessibilityRole: null, children: null };
    const items = [tmp.text, tmp2];
    obj[2] = items;
    obj[3] = tmp3;
    obj[4] = text;
    tmp4 = callback2(Text.Text, obj);
  }
  return tmp4;
};
prototype["renderIcon"] = function renderIcon() {
  const tmp = callback4(this.context);
  ({ iconProps, source, darkSource, errorProps } = this.props);
  if (null != iconProps) {
    error = iconProps.error;
    let obj = { style: null, children: null };
    obj[0] = tmp.iconUploaderWrapper;
    obj = {};
    const tmp11 = callback(iconProps, closure_3);
    const tmp12 = closure_8;
    const tmp13 = closure_5;
    const tmp14 = callback2;
    const merged = Object.assign(tmp11);
    const items = [callback2(IconUploaderDefault, obj), ];
    let tmp14Result = null;
    if (null != error) {
      obj1 = { style: null };
      const items1 = [tmp.error, tmp4];
      obj1[0] = items1;
      const merged1 = Object.assign(errorProps);
      obj1.children = error;
      tmp14Result = tmp14(Button.LegacyText, obj1);
    }
    items[1] = tmp14Result;
    obj[1] = items;
    return tmp12(tmp13, obj);
  } else {
    if (null == source) {
      obj = AccessibilityAnnouncer;
      if (obj.isThemeLight(this.context.theme)) {
        darkSource = tmp2;
      }
      source = darkSource;
    }
    const obj2 = { source: null, style: null, resizeMode: "contain" };
    obj2[0] = source;
    obj2[1] = tmp3;
    return callback2(closure_6, obj2);
  }
};
prototype["render"] = function render() {
  const obj = { style: null, children: null };
  const items = [callback4(this.context).wrapper, this.props.wrapperStyles];
  obj[0] = items;
  const items1 = [this.renderIcon(), this.props.children, this.renderLabel(), this.renderText()];
  obj[1] = items1;
  return callback3(closure_5, obj);
};
IconLabelBlock.contextType = require("ManaContext").ThemeContext;
let obj1 = { fontSize: 12, marginTop: 20, color: ThemesDefault.colors.TEXT_SUBTLE };
const result = require("set").fileFinishedImporting("components_native/common/IconLabelBlock.tsx");

export default IconLabelBlock;