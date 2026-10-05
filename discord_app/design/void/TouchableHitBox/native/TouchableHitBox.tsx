// discord_app/design/void/TouchableHitBox/native/TouchableHitBox.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import native2 from "../../../../../discord_common/js/packages/design/native.tsx";
import Pressables from "../../Pressables/native/Pressables.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
const obj = {
  button: obj2,
  buttonText: { lineHeight: 24, margin: 10, maxWidth: 60, fontSize: 16 },
  buttonIcon: { margin: 10 },
  buttonSpinner: { margin: 12 },
  buttonDisabled: { opacity: 0.6 },
};
obj2 = {
  flexGrow: 0,
  flexShrink: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  alignSelf: "flex-start",
  borderRadius: nativeDefault.radii.sm,
};
const React3 = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class TouchableHitBox extends PureComponent {
  render() {
    let IconComponent;
    let accessibilityLabel;
    let accessibilityRole;
    let accessibilityState;
    let activeOpacity;
    let color;
    let disableColor;
    let disabled;
    let iconSize;
    let iconStyle;
    let loading;
    let onLongPress;
    let onPress;
    let source;
    let style;
    let text;
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
      const items = [tmp.buttonIcon, ,];
      let buttonDisabled = disabled;
      const Icon = native.Icon;
      if (disabled) {
        buttonDisabled = tmp.buttonDisabled;
      }
      items[1] = buttonDisabled;
      items[2] = iconStyle;
      tmp8Result = <Icon style={items} source={source} color={color} size={iconSize} disableColor={tmp2} />;
    }
    if (loading) {
      tmp8Result = <ActivityIndicator style={tmp.buttonSpinner} animating color={color} />;
    } else if (null != text) {
      const items1 = [tmp.buttonText, ,];
      let buttonDisabled3 = disabled;
      const LegacyText = native.LegacyText;
      if (disabled) {
        buttonDisabled3 = tmp.buttonDisabled;
      }
      items1[1] = buttonDisabled3;
      const obj4 = { color };
      items1[2] = obj4;
      tmp8Result = (
        <LegacyText numberOfLines={1} style={items1}>
          {text}
        </LegacyText>
      );
    } else {
      if (null != IconComponent) {
        if (null != source) {
          const items2 = [tmp.buttonIcon, ,];
          const buttonDisabled2 = disabled && tmp.buttonDisabled;
          items2[1] = buttonDisabled2;
          items2[2] = iconStyle;
          tmp8Result = <IconComponent size="sm" color={color} style={items2} />;
        }
      }
      if (null == source) {
        if (null != children) {
          tmp8Result = children;
        }
      }
    }
    const items3 = [tmp.button, style];
    const PressableOpacity = Pressables.PressableOpacity;
    if (!disabled) {
      disabled = loading;
    }
    return (
      <PressableOpacity
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
        accessibilityState={accessibilityState}
        onPress={onPress}
        onLongPress={onLongPress}
        activeOpacity={activeOpacity}
        style={items3}
        disabled={disabled}
      >
        {tmp8Result}
      </PressableOpacity>
    );
  }
}
const prototype = TouchableHitBox.prototype;
TouchableHitBox.contextType = native2.ThemeContext;
TouchableHitBox.defaultProps = {
  onPress() {},
};
const result = size.fileFinishedImporting("design/void/TouchableHitBox/native/TouchableHitBox.tsx");

export default TouchableHitBox;
