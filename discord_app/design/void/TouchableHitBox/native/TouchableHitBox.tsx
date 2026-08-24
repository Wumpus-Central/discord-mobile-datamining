// === Module 8910: render ===

// Module 8910 (render)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import PressableBase from "PressableBase" /* 5433 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
createCacheKey = { button: null, buttonText: null, buttonIcon: null, buttonSpinner: null, buttonDisabled: null };
createCacheKey = { flexGrow: 0, flexShrink: 1, justifyContent: "center", alignItems: "center", backgroundColor: "transparent", alignSelf: "flex-start", borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { lineHeight: 24, margin: 10, maxWidth: 60, fontSize: 16 };
createCacheKey[2] = { margin: 10 };
createCacheKey[3] = { margin: 12 };
createCacheKey[4] = { opacity: 0.6 };
let closure_4 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class TouchableHitBox extends PureComponent {
}
TouchableHitBox.prototype["render"] = function render() {
  const tmp = callback(this.context);
  const props = this.props;
  ({ disabled, source, text, loading, IconComponent, iconStyle, color, disableColor } = props);
  let tmp2 = undefined !== disableColor;
  ({ activeOpacity, onPress, onLongPress, style, iconSize } = props);
  if (tmp2) {
    tmp2 = disableColor;
  }
  const children = props.children;
  let tmp8Result;
  ({ accessibilityLabel, accessibilityRole, accessibilityState } = props);
  if (null != source) {
    const items = [tmp.buttonIcon, , ];
    let buttonDisabled = disabled;
    if (disabled) {
      buttonDisabled = tmp.buttonDisabled;
    }
    let obj = { style: null, source: null, color: null, size: null, disableColor: null };
    items[1] = buttonDisabled;
    items[2] = iconStyle;
    obj[0] = items;
    obj[1] = source;
    obj[2] = color;
    obj[3] = iconSize;
    obj[4] = tmp2;
    tmp8Result = jsx(Button.Icon, { style: null, source: null, color: null, size: null, disableColor: null });
    const tmp4 = jsx;
  }
  if (loading) {
    obj = { style: null, animating: true, color: null };
    obj[0] = tmp.buttonSpinner;
    obj[2] = color;
    tmp8Result = <ActivityIndicator style={null} animating color={null} />;
  } else if (null != text) {
    const items1 = [tmp.buttonText, , ];
    let buttonDisabled3 = disabled;
    if (disabled) {
      buttonDisabled3 = tmp.buttonDisabled;
    }
    obj = { numberOfLines: 1, style: null, children: null };
    items1[1] = buttonDisabled3;
    obj1 = { color: null };
    obj1[0] = color;
    items1[2] = obj1;
    obj[1] = items1;
    obj[2] = text;
    tmp8Result = jsx(Button.LegacyText, { numberOfLines: 1, style: null, children: null });
    const tmp8 = jsx;
  } else {
    if (null != IconComponent) {
      if (null != source) {
        const obj2 = { size: "sm", color: null, style: null };
        obj2[1] = color;
        const items2 = [tmp.buttonIcon, , ];
        let buttonDisabled2 = disabled;
        if (disabled) {
          buttonDisabled2 = tmp.buttonDisabled;
        }
        items2[1] = buttonDisabled2;
        items2[2] = iconStyle;
        obj2[2] = items2;
        tmp8Result = <IconComponent size="sm" color={null} style={null} />;
        const tmp7 = jsx;
      }
    }
    if (null == source) {
      if (null != children) {
        tmp8Result = children;
      }
    }
  }
  const obj3 = { accessibilityRole, accessibilityLabel, accessibilityState, onPress, onLongPress, activeOpacity, style: items3, disabled: null, children: null };
  items3 = [tmp.button, style];
  if (!disabled) {
    disabled = loading;
  }
  obj3[7] = disabled;
  obj3[8] = tmp8Result;
  return jsx(PressableBase.PressableOpacity, { accessibilityRole, accessibilityLabel, accessibilityState, onPress, onLongPress, activeOpacity, style: items3, disabled: null, children: null });
};
TouchableHitBox.contextType = require("ManaContext").ThemeContext;
TouchableHitBox.defaultProps = {
  onPress() {

  }
};
const result = require("set").fileFinishedImporting("design/void/TouchableHitBox/native/TouchableHitBox.tsx");

export default TouchableHitBox;