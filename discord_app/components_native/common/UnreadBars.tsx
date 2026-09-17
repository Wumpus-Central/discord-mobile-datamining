// === Module 16516: UnreadBars ===

// Module 16516 (UnreadBars)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import HapticUtils from "HapticUtils" /* 4608 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4609 */;
import TransitionGroup from "TransitionGroup" /* 12575 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4632 */;
import TextStyles from "TextStyles" /* 5612 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Animated: hasOwnProperty, TouchableWithoutFeedback: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { unreadText: null, unread: null, mention: null };
let merged = Object.assign(TextStyles(fn(1074).Fonts.DISPLAY_SEMIBOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj2.unreadText = {};
let obj4 = { margin: 8, height: 24, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md, backgroundColor: null };
let ColorUtils = fn(4489);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_400, 0.9);
obj2.unread = obj4;
const obj6 = { backgroundColor: null };
ColorUtils = fn(4489);
obj6.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_400, 0.9);
obj2.mention = obj6;
let closure_10 = createStyles.createLegacyClassComponentStyles(obj2);
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
  const obj = {};
  const merged = Object.assign(rect);
  obj.opacity = self.animation;
  if (props.useReducedMotion) {
    let tmp2 = obj;
  } else {
    const animation = self.animation;
    const obj2 = { inputRange: [0, 1], outputRange: null };
    let num5 = -72;
    if (bottom) {
      num5 = 72;
    }
    const items = [num5, ];
    let num6 = 0;
    if (this.state.active) {
      num6 = 1;
    }
    const obj3 = { translateY: null };
    items[1] = num6;
    obj2.outputRange = items;
    obj3.translateY = animation.interpolate(obj2);
    const items1 = [obj3];
    obj.transform = items1;
    tmp2 = obj;
  }
  return tmp2;
};
prototype["render"] = function render() {
  const tmp = closure_10(this.context);
  const props = this.props;
  ({ mention, section } = props.item);
  const obj = { accessibilityRole: "button", onPress: this.handlePress, onPressIn: this.handlePressIn, onPressOut: this.handlePressOut, testID: "unread-bar-touchable-" + mention + "-" + section, children: null };
  const obj2 = { style: this.getAnimatedStyle(), nativeID: "unread-bar-animated-view-" + mention + "-" + section, children: null };
  const items = [tmp.unread, ];
  let mention1;
  if (mention) {
    mention1 = tmp.mention;
  }
  const obj3 = { style: items, nativeID: "unread-bar-view-" + mention + "-" + section, children: null };
  items[1] = mention1;
  const obj4 = { style: tmp.unreadText, maxFontSizeMultiplier: 1.5, children: null };
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
  obj4.children = stringResult;
  obj3.children = React6(native.LegacyText, obj4);
  obj2.children = React6(React4, obj3);
  obj.children = React6(RN.View, obj2);
  return React6(timestampProducer, obj);
};
UnreadBar.defaultProps = { bottom: false };
UnreadBar.contextType = fn(4350).ThemeContext;
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
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = { component: noop.Fragment, children: null };
  let tmp3 = null;
  if (null != beforeItem) {
    const obj3 = { compact, item: beforeItem, onPress: handlePress, contentInset, useReducedMotion: stateFromStores };
    tmp3 = closure_8(UnreadBar, obj3, "BEFORE");
  }
  const items1 = [tmp3, ];
  let tmp6 = null;
  if (null != afterItem) {
    const obj4 = { compact, item: afterItem, onPress: handlePress, contentInset, bottom: true, useReducedMotion: stateFromStores };
    tmp6 = closure_8(UnreadBar, obj4, "AFTER");
  }
  items1[1] = tmp6;
  obj.children = items1;
  return closure_9(TransitionGroup.TransitionGroup, obj);
};