// === Module 9179: TouchableHitBox ===

// Module 9179 (TouchableHitBox)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1176 */;
import Pressables from "Pressables" /* 5204 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj2 = { button: { flexGrow: 0, flexShrink: 1, justifyContent: "center", alignItems: "center", backgroundColor: "transparent", alignSelf: "flex-start", borderRadius: nativeDefault.radii.sm }, buttonText: { lineHeight: 24, margin: 10, maxWidth: 60, fontSize: 16 }, buttonIcon: { margin: 10 }, buttonSpinner: { margin: 12 }, buttonDisabled: { opacity: 0.6 } };
let closure_4 = createStyles.createLegacyClassComponentStyles(obj2);
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
    const obj = { style: null, source: null, color: null, size: null, disableColor: null };
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
    const obj2 = { style: tmp.buttonSpinner, animating: true, color };
    tmp8Result = <ActivityIndicator style={tmp.buttonSpinner} animating color={color} />;
  } else if (null != text) {
    const items1 = [tmp.buttonText, , ];
    let buttonDisabled3 = disabled;
    if (disabled) {
      buttonDisabled3 = tmp.buttonDisabled;
    }
    const obj3 = { numberOfLines: 1, style: null, children: null };
    items1[1] = buttonDisabled3;
    const obj4 = { color };
    items1[2] = obj4;
    obj3.style = items1;
    obj3.children = text;
    tmp8Result = jsx(native.LegacyText, { numberOfLines: 1, style: null, children: null });
  } else {
    if (null != IconComponent) {
      if (null != source) {
        const obj5 = { size: "sm", color, style: null };
        const items2 = [tmp.buttonIcon, , ];
        let buttonDisabled2 = disabled;
        if (disabled) {
          buttonDisabled2 = tmp.buttonDisabled;
        }
        items2[1] = buttonDisabled2;
        items2[2] = iconStyle;
        obj5.style = items2;
        tmp8Result = <IconComponent size="sm" color={color} style={null} />;
      }
    }
    if (null == source) {
      if (null != children) {
        tmp8Result = children;
      }
    }
  }
  const obj6 = { accessibilityRole, accessibilityLabel, accessibilityState, onPress, onLongPress, activeOpacity, style: null, disabled: null, children: null };
  const items3 = [tmp.button, style];
  obj6.style = items3;
  if (!disabled) {
    disabled = loading;
  }
  obj6.disabled = disabled;
  obj6.children = tmp8Result;
  return jsx(Pressables.PressableOpacity, { accessibilityRole, accessibilityLabel, accessibilityState, onPress, onLongPress, activeOpacity, style: null, disabled: null, children: null });
};
TouchableHitBox.contextType = fn(4347).ThemeContext;
TouchableHitBox.defaultProps = {
  onPress() {

  }
};
const size = fn(2);
const result = size.fileFinishedImporting("design/void/TouchableHitBox/native/TouchableHitBox.tsx");

export default TouchableHitBox;