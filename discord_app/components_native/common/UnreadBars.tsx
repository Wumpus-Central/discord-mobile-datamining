// discord_app/components_native/common/UnreadBars.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../Constants.tsx";
import intl2 from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import native2 from "../../../discord_common/js/packages/design/native.tsx";
import HapticUtils from "../../modules/haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../modules/haptics/HapticFeedbackTypes.tsx";
import TransitionGroup2 from "../../../discord_common/js/packages/transition-group/TransitionGroup.tsx";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../modules/a11y/AccessibilityStore.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../modules/rebrand/native/TextStyles.tsx";
import ColorUtils_mod from "../../utils/ColorUtils.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let scrollToLocation;

let ColorUtils;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: closure_4, Animated: hasOwnProperty, TouchableWithoutFeedback: metroRequire } = react_native);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const BEFORE = "BEFORE";
const AFTER = "AFTER";
let obj = { unreadText: obj2, unread: obj3, mention: obj4 };
obj2 = {};
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
const DISPLAY_SEMIBOLD = Fonts.DISPLAY_SEMIBOLD;
let merged = Object.assign(TextStyles(DISPLAY_SEMIBOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj3 = {
  margin: 8,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
  backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_400, 0.9),
};
ColorUtils = ColorUtils_mod;
obj4 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_400, 0.9) };
ColorUtils = ColorUtils_mod;
let closure_12 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class UnreadBar extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.state = { active: false };
    const value = new RN.Value(0);
    applyArgumentsResult.animation = value;
    applyArgumentsResult.handlePress = function handlePress() {
      let item;
      let onPress;
      ({ item, onPress } = require.props);
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      require.hide();
      onPress(item);
    };
    applyArgumentsResult.handlePressIn = function handlePressIn() {
      require.setState({ active: true });
    };
    applyArgumentsResult.handlePressOut = function handlePressOut() {
      require.setState({ active: false });
    };
    return applyArgumentsResult;
  }
  componentWillEnter(arg0) {
    this.show(arg0);
  }
  componentWillLeave(arg0) {
    this.hide(arg0);
  }
  show(arg0) {
    const springResult = hasOwnProperty.spring(this.animation, {
      toValue: 1,
      friction: 15,
      tension: 250,
      useNativeDriver: true,
    });
    springResult.start(arg0);
  }
  hide(arg0) {
    const springResult = hasOwnProperty.spring(this.animation, {
      toValue: 0,
      friction: 15,
      tension: 250,
      useNativeDriver: true,
    });
    springResult.start(arg0);
  }
  getAnimatedStyle() {
    let bottom;
    let contentInset;
    let items;
    let num2;
    let num3;
    let tmp2;
    const self = this;
    const props = this.props;
    ({ bottom, contentInset } = props);
    let num = contentInset.left;
    const useReducedMotion = props.useReducedMotion;
    const active = this.state.active;
    if (num == null) {
      num = 0;
    }
    const rect = { position: "absolute", left: num, right: num2 };
    num2 = contentInset.right;
    if (num2 == null) {
      num2 = 0;
    }
    let str = "top";
    if (bottom) {
      str = "bottom";
    }
    if (bottom) {
      let num4 = contentInset.bottom;
      if (num4 == null) {
        num4 = 0;
      }
      num3 = num4;
    } else {
      num3 = contentInset.top;
      if (num3 == null) {
        num3 = 0;
      }
    }
    rect[str] = num3;
    const obj = { opacity: self.animation };
    const merged = Object.assign(rect);
    if (useReducedMotion) {
      tmp2 = obj;
    } else {
      const animation = self.animation;
      let num5 = -72;
      const interpolate = animation.interpolate;
      const obj2 = { inputRange: [0, 1], outputRange: items };
      if (bottom) {
        num5 = 72;
      }
      items = [num5];
      let num6 = 0;
      if (active) {
        num6 = 1;
      }
      items[1] = num6;
      const items1 = [{ translateY: interpolate(obj2) }];
      obj.transform = items1;
      tmp2 = obj;
      const obj3 = { translateY: interpolate(obj2) };
    }
    return tmp2;
  }
  render() {
    let LegacyText;
    let View;
    let mention;
    let obj2;
    let obj3;
    let obj4;
    let section;
    let stringResult;
    const tmp = closure_12(this.context);
    const props = this.props;
    ({ mention, section } = props.item);
    const compact = props.compact;
    const obj = {
      accessibilityRole: "button",
      onPress: this.handlePress,
      onPressIn: this.handlePressIn,
      onPressOut: this.handlePressOut,
      testID: "unread-bar-touchable-" + mention + "-" + section,
      children: metroImportAll(View, obj2),
    };
    View = hasOwnProperty.View;
    const items = [tmp.unread];
    let mention1;
    obj2 = {
      style: this.getAnimatedStyle(),
      nativeID: "unread-bar-animated-view-" + mention + "-" + section,
      children: metroImportAll(React3, obj3),
    };
    if (mention) {
      mention1 = tmp.mention;
    }
    items[1] = mention1;
    obj3 = {
      style: items,
      nativeID: "unread-bar-view-" + mention + "-" + section,
      children: metroImportAll(LegacyText, obj4),
    };
    obj4 = { style: tmp.unreadText, maxFontSizeMultiplier: 1.5, children: stringResult };
    LegacyText = native.LegacyText;
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (compact) {
      stringResult = string(t.y2b7CA);
    } else if (mention) {
      stringResult = string(t["8zH0LJ"]);
    } else {
      stringResult = string(t.FCRiT3);
    }
    return metroImportAll(metroRequire, obj);
  }
}
const prototype = UnreadBar.prototype;
UnreadBar.defaultProps = { bottom: false };
UnreadBar.contextType = native2.ThemeContext;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scrollToLocation) => {
      let afterItem;
      let beforeItem;
      let compact;
      let contentInset;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp7;
      let useReducedMotion;
      let obj = scrollToLocation(576);
      const cResult = obj.c(21);
      scrollToLocation = scrollToLocation.scrollToLocation;
      ({ beforeItem, afterItem, compact, contentInset } = scrollToLocation);
      if (cResult[0] !== contentInset) {
        let rect = contentInset;
        if (undefined === contentInset) {
          rect = { top: 0, left: 0, right: 0, bottom: 0 };
        }
        cResult[0] = contentInset;
        cResult[1] = rect;
        tmp5 = rect;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        class T {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        cResult[2] = items;
        cResult[3] = T;
        tmp7 = T;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = scrollToLocation(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      if (cResult[4] !== scrollToLocation) {
        const fn = function _(section) {
          const obj = { section: section.section, item: section.row, animated: true };
          scrollToLocation(obj);
        };
        cResult[4] = scrollToLocation;
        class T {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        cResult[5] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === beforeItem) {
        if (cResult[7] === (undefined !== compact && compact)) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp10) {
              let tmp11;
              if (cResult[10] === stateFromStores) {
                tmp11 = cResult[11];
              }
              if (cResult[12] === afterItem) {
                if (cResult[13] === (undefined !== compact && compact)) {
                  if (cResult[14] === tmp5) {
                    if (cResult[15] === tmp10) {
                      let tmp16;
                      if (cResult[16] === stateFromStores) {
                        tmp16 = cResult[17];
                      }
                      if (cResult[18] === tmp11) {
                        let tmp18;
                        if (cResult[19] === tmp16) {
                          tmp18 = cResult[20];
                        }
                        return tmp18;
                      }
                      class T {
                        constructor() {
                          return useReducedMotion.useReducedMotion;
                        }
                      }
                      tmp20[0] = react.Fragment;
                      const items1 = [tmp11, tmp16];
                      tmp20[1] = items1;
                      const tmp22 = closure_9(scrollToLocation(12080).TransitionGroup, tmp20);
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
                  return useReducedMotion.useReducedMotion;
                }
              }
              cResult[12] = afterItem;
              cResult[13] = undefined !== compact && compact;
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
        const obj2 = {
          compact: null,
          item: beforeItem,
          onPress: tmp10,
          contentInset: tmp5,
          useReducedMotion: stateFromStores,
        };
        class T {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        tmp12 = closure_8(UnreadBar, obj2, BEFORE);
      }
      cResult[6] = beforeItem;
      cResult[7] = undefined !== compact && compact;
      cResult[8] = tmp5;
      cResult[9] = tmp10;
      cResult[10] = stateFromStores;
      cResult[11] = tmp12;
      tmp11 = tmp12;
    }
  : (contentInset) => {
      let afterItem;
      let beforeItem;
      let compact;
      let items1;
      let useReducedMotion;
      ({ scrollToLocation: require, beforeItem, afterItem, compact } = contentInset);
      if (compact === undefined) {
        compact = false;
      }
      contentInset = contentInset.contentInset;
      if (contentInset === undefined) {
        contentInset = { top: 0, left: 0, right: 0, bottom: 0 };
      }
      function handlePress(section) {
        const obj = { section: section.section, item: section.row, animated: true };
        require(obj);
      }
      const items = [AccessibilityStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let obj = { component: react.Fragment, children: items1 };
      let tmp3 = null;
      const TransitionGroup = TransitionGroup2.TransitionGroup;
      if (null != beforeItem) {
        const obj3 = {
          compact,
          item: beforeItem,
          onPress: handlePress,
          contentInset,
          useReducedMotion: stateFromStores,
        };
        tmp3 = closure_8(UnreadBar, obj3, BEFORE);
      }
      items1 = [tmp3];
      let tmp7 = null;
      if (null != afterItem) {
        const obj4 = {
          compact,
          item: afterItem,
          onPress: handlePress,
          contentInset,
          bottom: true,
          useReducedMotion: stateFromStores,
        };
        tmp7 = closure_8(UnreadBar, obj4, AFTER);
      }
      items1[1] = tmp7;
      return closure_9(TransitionGroup, obj);
    };
let result = size.fileFinishedImporting("components_native/common/UnreadBars.tsx");

export default tmp8;
