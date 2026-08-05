// discord_app/components_native/common/UnreadBars.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import importDefaultResult from "createTextStyle";

let c4;
let c5;
let c9;
let closure_6;
let metroImportAll;
let require = arg1;
let c3 = importAllResult;
({ View: c4, Animated: c5, TouchableWithoutFeedback: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { unreadText: null, unread: null, mention: null };
createCacheKey = {};
let merged = Object.assign(require("createTextStyle")(require("ME").Fonts.DISPLAY_SEMIBOLD, require("Themes").unsafe_rawColors.WHITE, 12, { uppercase: true }));
createCacheKey[0] = createCacheKey;
let obj1 = { margin: 8, height: 24, justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.md, backgroundColor: null };
obj1[5] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.PRIMARY_400, 0.9);
createCacheKey[1] = obj1;
const obj2 = { backgroundColor: null };
obj2[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.RED_400, 0.9);
createCacheKey[2] = obj2;
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class UnreadBar extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { active: false };
    value = new Animated.Value(0);
    applyArgumentsResult.animation = value;
    applyArgumentsResult.handlePress = function handlePress() {
      let item;
      let onPress;
      ({ item, onPress } = applyArgumentsResult.props);
      const result = applyArgumentsResult(outer1_2[10]).triggerHapticFeedback(outer1_1(outer1_2[11]).IMPACT_LIGHT);
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
  let bottom;
  let contentInset;
  const self = this;
  const props = this.props;
  ({ bottom, contentInset } = props);
  let num = contentInset.left;
  if (num == null) {
    num = 0;
  }
  let obj = { position: "absolute", left: num, right: null };
  let num2 = contentInset.right;
  if (num2 == null) {
    num2 = 0;
  }
  obj[2] = num2;
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
  obj[str] = num3;
  obj = {};
  const merged = Object.assign(obj);
  obj.opacity = self.animation;
  if (props.useReducedMotion) {
    let tmp2 = obj;
  } else {
    const animation = self.animation;
    obj = { inputRange: null, outputRange: null };
    obj[0] = [0, 1];
    let num5 = -72;
    if (bottom) {
      num5 = 72;
    }
    const items = [num5, ];
    let num6 = 0;
    if (this.state.active) {
      num6 = 1;
    }
    const obj1 = { translateY: null };
    items[1] = num6;
    obj[1] = items;
    obj1[0] = animation.interpolate(obj);
    const items1 = [obj1];
    obj.transform = items1;
    tmp2 = obj;
  }
  return tmp2;
};
prototype["render"] = function render() {
  let mention;
  let section;
  const tmp = createCacheKey(this.context);
  const props = this.props;
  ({ mention, section } = props.item);
  let obj = { accessibilityRole: "button", onPress: this.handlePress, onPressIn: this.handlePressIn, onPressOut: this.handlePressOut, testID: "unread-bar-touchable-" + mention + "-" + section, children: null };
  obj = { style: this.getAnimatedStyle(), nativeID: "unread-bar-animated-view-" + mention + "-" + section, children: null };
  const items = [tmp.unread, ];
  mention = undefined;
  if (mention) {
    mention = tmp.mention;
  }
  obj = { style: items, nativeID: "unread-bar-view-" + mention + "-" + section, children: null };
  items[1] = mention;
  const obj1 = { style: tmp.unreadText, maxFontSizeMultiplier: 1.5, children: null };
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require("../../intl/index.native.tsx") /* getSystemLocale */.t;
  if (props.compact) {
    let stringResult = string(t.y2b7CA);
  } else if (mention) {
    stringResult = string(t["8zH0LJ"]);
  } else {
    stringResult = string(t.FCRiT3);
  }
  obj1[2] = stringResult;
  obj[2] = closure_8(require("../../design/void/native.tsx") /* Button */.LegacyText, obj1);
  obj[2] = closure_8(closure_4, obj);
  obj[5] = closure_8(RN.View, obj);
  return closure_8(closure_6, obj);
};
UnreadBar.defaultProps = { bottom: false };
UnreadBar.contextType = require("ManaContext").ThemeContext;
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("components_native/common/UnreadBars.tsx");

export default function UnreadBars(contentInset) {
  let afterItem;
  let beforeItem;
  let compact;
  let require;
  ({ scrollToLocation: require, beforeItem, afterItem, compact } = contentInset);
  if (compact === undefined) {
    compact = false;
  }
  contentInset = contentInset.contentInset;
  if (contentInset === undefined) {
    contentInset = { top: 0, left: 0, right: 0, bottom: 0 };
  }
  function handlePress(section) {
    callback({ section: section.section, item: section.row, animated: true });
  }
  let obj1 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = { component: importAllResult.Fragment, children: null };
  let tmp3 = null;
  if (null != beforeItem) {
    obj = { compact: null, item: null, onPress: null, contentInset: null, useReducedMotion: null };
    obj[0] = compact;
    obj[1] = beforeItem;
    obj[2] = handlePress;
    obj[3] = contentInset;
    obj[4] = stateFromStores;
    tmp3 = callback(UnreadBar, obj, "BEFORE");
  }
  const items1 = [tmp3, ];
  let tmp6 = null;
  if (null != afterItem) {
    obj1 = { compact: null, item: null, onPress: null, contentInset: null, bottom: true, useReducedMotion: null };
    obj1[0] = compact;
    obj1[1] = afterItem;
    obj1[2] = handlePress;
    obj1[3] = contentInset;
    obj1[5] = stateFromStores;
    tmp6 = callback(UnreadBar, obj1, "AFTER");
  }
  items1[1] = tmp6;
  obj[1] = items1;
  return closure_9(require("../../../discord_common/js/packages/transition-group/TransitionGroup.tsx") /* _toPropertyKey */.TransitionGroup, obj);
};