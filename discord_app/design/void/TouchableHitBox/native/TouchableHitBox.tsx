// === Module 9050: TouchableHitBox ===

// Module 9050 (TouchableHitBox)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Pressables from "Pressables" /* 5123 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { button: null, buttonText: null, buttonIcon: null, buttonSpinner: null, buttonDisabled: null };
createStyles = { flexGrow: 0, flexShrink: 1, justifyContent: "center", alignItems: "center", backgroundColor: "transparent", alignSelf: "flex-start", borderRadius: nativeDefault.radii.sm };
createStyles.button = createStyles;
createStyles.buttonText = { lineHeight: 24, margin: 10, maxWidth: 60, fontSize: 16 };
createStyles.buttonIcon = { margin: 10 };
createStyles.buttonSpinner = { margin: 12 };
createStyles.buttonDisabled = { opacity: 0.6 };
let closure_4 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class TouchableHitBox extends PureComponent {
}
TouchableHitBox.prototype["render"] = function render() {
  const tmp = closure_4(this.context);
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
    obj.style = items;
    obj.source = source;
    obj.color = color;
    obj.size = iconSize;
    obj.disableColor = tmp2;
    tmp8Result = jsx(native.Icon, { style: null, source: null, color: null, size: null, disableColor: null });
  }
  if (loading) {
    obj = { style: tmp.buttonSpinner, animating: true, color };
    tmp8Result = <ActivityIndicator style={tmp.buttonSpinner} animating color={color} />;
  } else if (null != text) {
    const items1 = [tmp.buttonText, , ];
    let buttonDisabled3 = disabled;
    if (disabled) {
      buttonDisabled3 = tmp.buttonDisabled;
    }
    obj = { numberOfLines: 1, style: null, children: null };
    items1[1] = buttonDisabled3;
    const obj1 = { color };
    items1[2] = obj1;
    obj.style = items1;
    obj.children = text;
    tmp8Result = jsx(native.LegacyText, { numberOfLines: 1, style: null, children: null });
  } else {
    if (null != IconComponent) {
      if (null != source) {
        const obj2 = { size: "sm", color, style: null };
        const items2 = [tmp.buttonIcon, , ];
        let buttonDisabled2 = disabled;
        if (disabled) {
          buttonDisabled2 = tmp.buttonDisabled;
        }
        items2[1] = buttonDisabled2;
        items2[2] = iconStyle;
        obj2.style = items2;
        tmp8Result = <IconComponent size="sm" color={color} style={null} />;
      }
    }
    if (null == source) {
      if (null != children) {
        tmp8Result = children;
      }
    }
  }
  const obj3 = { accessibilityRole, accessibilityLabel, accessibilityState, onPress, onLongPress, activeOpacity, style: null, disabled: null, children: null };
  const items3 = [tmp.button, style];
  obj3.style = items3;
  if (!disabled) {
    disabled = loading;
  }
  obj3.disabled = disabled;
  obj3.children = tmp8Result;
  return jsx(Pressables.PressableOpacity, { accessibilityRole, accessibilityLabel, accessibilityState, onPress, onLongPress, activeOpacity, style: null, disabled: null, children: null });
};
TouchableHitBox.contextType = fn(4271).ThemeContext;
TouchableHitBox.defaultProps = {
  onPress() {

  }
};
const size = fn(2);
const result = size.fileFinishedImporting("design/void/TouchableHitBox/native/TouchableHitBox.tsx");

export default TouchableHitBox;