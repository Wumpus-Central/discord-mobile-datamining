// === Module 9684: VoiceChatHeaderIcon ===

// Module 9684 (VoiceChatHeaderIcon)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import native2 from "native" /* 4589 */;
import Pressables from "Pressables" /* 5909 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9587 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerButton: size, disabledOpacity: { opacity: 0.6 }, chatIconContainer: obj2, chatIcon: { marginHorizontal: 0, width: 32, height: 32 }, badge: obj3 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, alignSelf: "center", padding: 6, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { marginRight: 12, height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
obj3 = { backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const obj = { unreadCount: ReadStateStore.getUnreadCount(closure_0), mentionCount: ReadStateStore.getMentionCount(closure_0) };
      return obj;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { unreadCount: ReadStateStore.getUnreadCount(closure_0), mentionCount: ReadStateStore.getMentionCount(closure_0) };
    return obj;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let children;
  let onPress;
  let source;
  const obj = react2;
  const cResult = obj.c(9);
  ({ children, source, onPress, accessibilityLabel } = arg0);
  const tmp3 = closure_8();
  if (onPress == null) {
    onPress = _modDef12.noop;
  }
  if (cResult[0] === accessibilityLabel) {
    if (cResult[1] === children) {
      if (cResult[2] === source) {
        if (cResult[3] === tmp3.chatIcon) {
          let tmp5;
          if (cResult[4] === onPress) {
            tmp5 = cResult[5];
          }
          if (cResult[6] === tmp3.chatIconContainer) {
            let tmp7;
            if (cResult[7] === tmp5) {
              tmp7 = cResult[8];
            }
            return tmp7;
          }
          const obj2 = { style: tmp3.chatIconContainer, children: tmp5 };
          const tmp10 = metroRequire(View, obj2);
          cResult[6] = tmp3.chatIconContainer;
          cResult[7] = tmp5;
          cResult[8] = tmp10;
          tmp7 = tmp10;
        }
      }
    }
  }
  const obj3 = { containerStyle: tmp3.chatIcon, accessibilityLabel, source, onPress, children };
  const tmp6 = metroRequire(ChannelCallNavigatorIconDefault, obj3);
  cResult[0] = accessibilityLabel;
  cResult[1] = children;
  cResult[2] = source;
  cResult[3] = tmp3.chatIcon;
  cResult[4] = onPress;
  cResult[5] = tmp6;
  tmp5 = tmp6;
}) : ((onPress) => {
  let accessibilityLabel;
  let children;
  let obj2;
  let source;
  let tmp6;
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = closure_8();
  const obj = { style: tmp.chatIconContainer, children: metroRequire(tmp6, obj2) };
  obj2 = { containerStyle: tmp.chatIcon, accessibilityLabel, source, onPress: noop, children };
  tmp6 = ChannelCallNavigatorIconDefault;
  if (noop == null) {
    noop = _modDef12.noop;
  }
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = { theme: ThemeTypes.DARK, children: metroRequire(closure_9, obj3) };
    obj3 = {};
    const ThemeContextProvider = native2.ThemeContextProvider;
    const merged = Object.assign(arg0);
    const tmp11 = metroRequire(ThemeContextProvider, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    tmp4 = tmp11;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  let obj2;
  const obj = { theme: ThemeTypes.DARK, children: metroRequire(closure_9, obj2) };
  obj2 = {};
  const ThemeContextProvider = native2.ThemeContextProvider;
  const merged = Object.assign(arg0);
  return metroRequire(ThemeContextProvider, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let children;
  let disabled;
  let items;
  let onPress;
  let source;
  const obj = react2;
  const cResult = obj.c(13);
  ({ accessibilityLabel, onPress, source, children, disabled } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === tmp4.headerButton) {
    let tmp6;
    if (cResult[1] === (disabled && tmp4.disabledOpacity)) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === source) {
      let tmp7;
      if (cResult[4] === tmp4.badge.backgroundColor) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === accessibilityLabel) {
        if (cResult[7] === children) {
          if (cResult[8] === disabled) {
            if (cResult[9] === onPress) {
              if (cResult[10] === tmp6) {
                let tmp10;
                if (cResult[11] === tmp7) {
                  tmp10 = cResult[12];
                }
                return tmp10;
              }
            }
          }
        }
      }
      const obj2 = { disabled, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel, onPress, style: tmp6, children: items };
      items = [tmp7, children];
      const tmp12 = metroImportDefault(Pressables.PressableOpacity, obj2);
      cResult[6] = accessibilityLabel;
      cResult[7] = children;
      cResult[8] = disabled;
      cResult[9] = onPress;
      cResult[10] = tmp6;
      cResult[11] = tmp7;
      cResult[12] = tmp12;
      tmp10 = tmp12;
    }
    const obj3 = { source, color: tmp4.badge.backgroundColor, size: native.Icon.Sizes.SMALL_20 };
    const Icon = native.Icon;
    const tmp9 = metroRequire(Icon, obj3);
    cResult[3] = source;
    cResult[4] = tmp4.badge.backgroundColor;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const items1 = [tmp4.headerButton, disabled && tmp4.disabledOpacity];
  cResult[0] = tmp4.headerButton;
  cResult[1] = disabled && tmp4.disabledOpacity;
  cResult[2] = items1;
  tmp6 = items1;
}) : ((disabled) => {
  let accessibilityLabel;
  let children;
  let items;
  let items1;
  let onPress;
  let source;
  let disabledOpacity = disabled.disabled;
  ({ accessibilityLabel, onPress, source, children } = disabled);
  const tmp = closure_8();
  const obj = { disabled: disabledOpacity, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel, onPress, style: items, children: items1 };
  items = [tmp.headerButton, ];
  const PressableOpacity = Pressables.PressableOpacity;
  if (disabledOpacity) {
    disabledOpacity = tmp.disabledOpacity;
  }
  items[1] = disabledOpacity;
  const obj2 = { source, color: tmp.badge.backgroundColor, size: native.Icon.Sizes.SMALL_20 };
  const Icon = native.Icon;
  items1 = [metroRequire(Icon, obj2), children];
  return metroImportDefault(PressableOpacity, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

export default tmp7;
export const useVoiceChatMentions = tmp5;
export const VoiceChatCallScreenHeaderIcon = tmp6;