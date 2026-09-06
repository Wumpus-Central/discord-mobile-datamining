// discord_app/components_native/common/UnreadBars.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import HapticUtils from "../../modules/haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../modules/haptics/HapticFeedbackTypes.tsx";
import TransitionGroup from "../../../discord_common/js/packages/transition-group/TransitionGroup.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../modules/a11y/AccessibilityStore.tsx";
import TextStyles from "../../modules/rebrand/native/TextStyles.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Animated: hasOwnProperty, TouchableWithoutFeedback: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { unreadText: null, unread: null, mention: null };
createStyles = {};
let merged = Object.assign(
  TextStyles(fn(1074).Fonts.DISPLAY_SEMIBOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }),
);
createStyles.unreadText = createStyles;
let obj1 = {
  margin: 8,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
  backgroundColor: null,
};
let ColorUtils = fn(4409);
obj1.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_400, 0.9);
createStyles.unread = obj1;
const obj2 = { backgroundColor: null };
ColorUtils = fn(4409);
obj2.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_400, 0.9);
createStyles.mention = obj2;
let closure_10 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class UnreadBar extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { active: false };
    value = new Animated.Value(0);
    applyArgumentsResult.animation = value;
    applyArgumentsResult.handlePress = function handlePress() {
      ({ item, onPress } = applyArgumentsResult.props);
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      applyArgumentsResult.hide();
      onPress(item);
    };
    applyArgumentsResult.handlePressIn = function handlePressIn() {
      applyArgumentsResult.setState({ active: true });
    };
    applyArgumentsResult.handlePressOut = function handlePressOut() {
      applyArgumentsResult.setState({ active: false });
    };
    return applyArgumentsResult;
  }
}
const prototype = UnreadBar.prototype;
prototype["componentWillEnter"] = function componentWillEnter(arg0) {
  this.show(arg0);
};
prototype["componentWillLeave"] = function componentWillLeave(arg0) {
  this.hide(arg0);
};
prototype["show"] = function show(arg0) {
  RN.spring(this.animation, { toValue: 1, friction: 15, tension: 250, useNativeDriver: true }).start(arg0);
};
prototype["hide"] = function hide(arg0) {
  RN.spring(this.animation, { toValue: 0, friction: 15, tension: 250, useNativeDriver: true }).start(arg0);
};
prototype["getAnimatedStyle"] = function getAnimatedStyle() {
  const self = this;
  const props = this.props;
  ({ bottom, contentInset } = props);
  let num = contentInset.left;
  if (num == null) {
    num = 0;
  }
  const rect = { position: "absolute", left: num, right: null };
  let num2 = contentInset.right;
  if (num2 == null) {
    num2 = 0;
  }
  rect.right = num2;
  let str = "top";
  if (bottom) {
    str = "bottom";
  }
  if (bottom) {
    let num4 = contentInset.bottom;
    if (num4 == null) {
      num4 = 0;
    }
    let num3 = num4;
  } else {
    num3 = contentInset.top;
    if (num3 == null) {
      num3 = 0;
    }
  }
  rect[str] = num3;
  let obj = {};
  const merged = Object.assign(rect);
  obj.opacity = self.animation;
  if (props.useReducedMotion) {
    let tmp2 = obj;
  } else {
    const animation = self.animation;
    obj = { inputRange: [0, 1], outputRange: null };
    let num5 = -72;
    if (bottom) {
      num5 = 72;
    }
    const items = [num5];
    let num6 = 0;
    if (this.state.active) {
      num6 = 1;
    }
    const obj1 = { translateY: null };
    items[1] = num6;
    obj.outputRange = items;
    obj1.translateY = animation.interpolate(obj);
    const items1 = [obj1];
    obj.transform = items1;
    tmp2 = obj;
  }
  return tmp2;
};
prototype["render"] = function render() {
  const tmp = closure_10(this.context);
  const props = this.props;
  ({ mention, section } = props.item);
  let obj = {
    accessibilityRole: "button",
    onPress: this.handlePress,
    onPressIn: this.handlePressIn,
    onPressOut: this.handlePressOut,
    testID: "unread-bar-touchable-" + mention + "-" + section,
    children: null,
  };
  obj = {
    style: this.getAnimatedStyle(),
    nativeID: "unread-bar-animated-view-" + mention + "-" + section,
    children: null,
  };
  const items = [tmp.unread];
  mention = undefined;
  if (mention) {
    mention = tmp.mention;
  }
  obj = { style: items, nativeID: "unread-bar-view-" + mention + "-" + section, children: null };
  items[1] = mention;
  const obj1 = { style: tmp.unreadText, maxFontSizeMultiplier: 1.5, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (props.compact) {
    let stringResult = string(t.y2b7CA);
  } else if (mention) {
    stringResult = string(t["8zH0LJ"]);
  } else {
    stringResult = string(t.FCRiT3);
  }
  obj1.children = stringResult;
  obj.children = React6(native.LegacyText, obj1);
  obj.children = React6(React4, obj);
  obj.children = React6(RN.View, obj);
  return React6(timestampProducer, obj);
};
UnreadBar.defaultProps = { bottom: false };
UnreadBar.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/common/UnreadBars.tsx");

export default function UnreadBars(contentInset) {
  ({ scrollToLocation: require, beforeItem, afterItem, compact } = contentInset);
  if (compact === undefined) {
    compact = false;
  }
  contentInset = contentInset.contentInset;
  if (contentInset === undefined) {
    contentInset = { top: 0, left: 0, right: 0, bottom: 0 };
  }
  function handlePress(section) {
    require({ section: section.section, item: section.row, animated: true });
  }
  let obj1 = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = { component: noop.Fragment, children: null };
  let tmp3 = null;
  if (null != beforeItem) {
    obj = { compact, item: beforeItem, onPress: handlePress, contentInset, useReducedMotion: stateFromStores };
    tmp3 = closure_8(UnreadBar, obj, "BEFORE");
  }
  const items1 = [tmp3];
  let tmp6 = null;
  if (null != afterItem) {
    obj1 = {
      compact,
      item: afterItem,
      onPress: handlePress,
      contentInset,
      bottom: true,
      useReducedMotion: stateFromStores,
    };
    tmp6 = closure_8(UnreadBar, obj1, "AFTER");
  }
  items1[1] = tmp6;
  obj.children = items1;
  return closure_9(TransitionGroup.TransitionGroup, obj);
}
