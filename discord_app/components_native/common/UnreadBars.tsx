// === Module 16336: UnreadBars ===

// Module 16336 (UnreadBars)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4862 */;
import TransitionGroup from "TransitionGroup" /* 12080 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import TextStyles from "TextStyles" /* 5922 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Animated: hasOwnProperty, TouchableWithoutFeedback: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const BEFORE = "BEFORE";
const AFTER = "AFTER";
const createStyles = fn(4896);
let obj2 = { unreadText: null, unread: null, mention: null };
let merged = Object.assign(TextStyles(fn(1085).Fonts.DISPLAY_SEMIBOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj2.unreadText = {};
let obj4 = { margin: 8, height: 24, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md, backgroundColor: null };
let ColorUtils = fn(4733);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_400, 0.9);
obj2.unread = obj4;
const obj6 = { backgroundColor: null };
ColorUtils = fn(4733);
obj6.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_400, 0.9);
obj2.mention = obj6;
let closure_12 = createStyles.createLegacyClassComponentStyles(obj2);
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
  const tmp = closure_12(this.context);
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
  obj3.children = closure_1_8(native.LegacyText, obj4);
  obj2.children = closure_1_8(React4, obj3);
  obj.children = closure_1_8(RN.View, obj2);
  return closure_1_8(timestampProducer, obj);
};
UnreadBar.defaultProps = { bottom: false };
UnreadBar.contextType = fn(4595).ThemeContext;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/common/UnreadBars.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((scrollToLocation) => {
  const cResult = scrollToLocation(576).c(21);
  scrollToLocation = scrollToLocation.scrollToLocation;
  ({ beforeItem, afterItem, compact, contentInset } = scrollToLocation);
  if (cResult[0] !== contentInset) {
    let rect = contentInset;
    if (undefined === contentInset) {
      rect = { top: 0, left: 0, right: 0, bottom: 0 };
    }
    cResult[0] = contentInset;
    cResult[1] = rect;
    let tmp5 = rect;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class T {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[2] = items;
    cResult[3] = T;
    let tmp7 = T;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = scrollToLocation(576);
  const stateFromStores = scrollToLocation(504).useStateFromStores(tmp6, tmp7);
  if (cResult[4] !== scrollToLocation) {
    const fn = function _(section) {
      scrollToLocation({ section: section.section, item: section.row, animated: true });
    };
    cResult[4] = scrollToLocation;
    class T {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[5] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === beforeItem) {
    if (cResult[7] === tmp4) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === stateFromStores) {
            let tmp11 = cResult[11];
          }
          if (cResult[12] === afterItem) {
            if (cResult[13] === tmp4) {
              if (cResult[14] === tmp5) {
                if (cResult[15] === tmp10) {
                  if (cResult[16] === stateFromStores) {
                    let tmp16 = cResult[17];
                  }
                  if (cResult[18] === tmp11) {
                    if (cResult[19] === tmp16) {
                      let tmp18 = cResult[20];
                    }
                    return tmp18;
                  }
                  class T {
                    constructor() {
                      return closure_1_7.useReducedMotion;
                    }
                  }
                  tmp20[0] = noop.Fragment;
                  const items1 = [tmp11, tmp16];
                  tmp20[1] = items1;
                  const tmp22 = closure_9(tmp(12080).TransitionGroup, tmp20);
                  cResult[18] = tmp11;
                  cResult[19] = tmp16;
                  cResult[20] = tmp22;
                  tmp18 = tmp22;
                }
              }
            }
          }
          class T {
            constructor() {
              return closure_1_7.useReducedMotion;
            }
          }
          cResult[12] = afterItem;
          cResult[13] = tmp4;
          cResult[14] = tmp5;
          cResult[15] = tmp10;
          cResult[16] = stateFromStores;
          cResult[17] = null;
          tmp16 = tmp17;
        }
      }
    }
  }
  let tmp12 = null;
  if (null != beforeItem) {
    const obj2 = { compact: null, item: null, onPress: null, contentInset: null, useReducedMotion: null };
    class T {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    obj2.item = beforeItem;
    obj2.onPress = tmp10;
    obj2.contentInset = tmp5;
    obj2.useReducedMotion = stateFromStores;
    tmp12 = closure_8(UnreadBar, obj2, BEFORE);
  }
  cResult[6] = beforeItem;
  cResult[7] = undefined !== compact && compact;
  cResult[8] = tmp5;
  cResult[9] = tmp10;
  cResult[10] = stateFromStores;
  cResult[11] = tmp12;
  tmp11 = tmp12;
  const tmpResult = scrollToLocation(504);
}) : ((contentInset) => {
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
    tmp3 = closure_8(UnreadBar, obj3, BEFORE);
  }
  const items1 = [tmp3, ];
  let tmp7 = null;
  if (null != afterItem) {
    const obj4 = { compact, item: afterItem, onPress: handlePress, contentInset, bottom: true, useReducedMotion: stateFromStores };
    tmp7 = closure_8(UnreadBar, obj4, AFTER);
  }
  items1[1] = tmp7;
  obj.children = items1;
  return closure_9(TransitionGroup.TransitionGroup, obj);
});