// === Module 10886: VoiceChatHeaderIcon ===

// Module 10886 (VoiceChatHeaderIcon)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import native2 from "native" /* 4787 */;
import Pressables from "Pressables" /* 6189 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10793 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { headerButton: null, disabledOpacity: null, chatIconContainer: null, chatIcon: null, badge: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, alignSelf: "center", padding: 6, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj2.headerButton = size;
obj2.disabledOpacity = { opacity: 0.6 };
obj2.chatIconContainer = { marginRight: 12, height: fn(6261).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
obj2.chatIcon = { marginHorizontal: 0, width: 32, height: 32 };
let obj3 = { marginRight: 12, height: fn(6261).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
obj2.badge = { backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_8 = createStyles.createStyles(obj2);
fn(558);
const obj4 = { backgroundColor: nativeDefault.colors.ICON_STRONG };
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChatCallScreenHeaderIconInner(arg0) {
  const cResult = c.c(9);
  ({ children, source, onPress, accessibilityLabel } = arg0);
  const tmp3 = closure_8();
  if (onPress == null) {
    onPress = _modDef12.noop;
  }
  if (cResult[0] === accessibilityLabel) {
    if (cResult[1] === children) {
      if (cResult[2] === source) {
        if (cResult[3] === tmp3.chatIcon) {
          if (cResult[4] === onPress) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] === tmp3.chatIconContainer) {
            if (cResult[7] === tmp5) {
              let tmp7 = cResult[8];
            }
            return tmp7;
          }
          const obj2 = { style: tmp3.chatIconContainer, children: tmp5 };
          const tmp10 = timestampProducer(View, obj2);
          cResult[6] = tmp3.chatIconContainer;
          cResult[7] = tmp5;
          cResult[8] = tmp10;
          tmp7 = tmp10;
        }
      }
    }
  }
  const tmp6 = timestampProducer(ChannelCallNavigatorIconDefault, { containerStyle: tmp3.chatIcon, accessibilityLabel, source, onPress, children });
  cResult[0] = accessibilityLabel;
  cResult[1] = children;
  cResult[2] = source;
  cResult[3] = tmp3.chatIcon;
  cResult[4] = onPress;
  cResult[5] = tmp6;
  tmp5 = tmp6;
  const obj3 = { containerStyle: tmp3.chatIcon, accessibilityLabel, source, onPress, children };
}) : (function VoiceChatCallScreenHeaderIconInner(onPress) {
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = closure_8();
  const obj = { style: tmp.chatIconContainer, children: null };
  const obj2 = { containerStyle: tmp.chatIcon, accessibilityLabel, source, onPress: null, children: null };
  if (noop == null) {
    noop = _modDef12.noop;
  }
  obj2.onPress = noop;
  obj2.children = children;
  obj.children = timestampProducer(ChannelCallNavigatorIconDefault, obj2);
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceChatMentions(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return { unreadCount: ReadStateStore.getUnreadCount(closure_0), mentionCount: ReadStateStore.getMentionCount(closure_0) };
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp6, tmp7);
}) : (function useVoiceChatMentions(arg0) {
  _require = arg0;
  const items = [ReadStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => ({ unreadCount: ReadStateStore.getUnreadCount(closure_0), mentionCount: ReadStateStore.getMentionCount(closure_0) }), items1);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChatCallScreenHeaderIcon(arg0) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = { theme: ThemeTypes.DARK, children: null };
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj2.children = timestampProducer(closure_9, obj3);
    const tmp11 = timestampProducer(native2.ThemeContextProvider, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    let tmp4 = tmp11;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function VoiceChatCallScreenHeaderIcon(arg0) {
  const obj = { theme: ThemeTypes.DARK, children: null };
  const merged = Object.assign(arg0);
  obj.children = timestampProducer(closure_9, {});
  return timestampProducer(native2.ThemeContextProvider, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChatHeaderIcon(arg0) {
  const cResult = c.c(13);
  ({ accessibilityLabel, onPress, source, children, disabled } = arg0);
  const tmp4 = closure_8();
  let disabledOpacity = disabled;
  if (disabled) {
    disabledOpacity = tmp4.disabledOpacity;
  }
  if (cResult[0] === tmp4.headerButton) {
    if (cResult[1] === disabledOpacity) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === source) {
      if (cResult[4] === tmp4.badge.backgroundColor) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === accessibilityLabel) {
        if (cResult[7] === children) {
          if (cResult[8] === disabled) {
            if (cResult[9] === onPress) {
              if (cResult[10] === tmp5) {
                if (cResult[11] === tmp6) {
                  let tmp9 = cResult[12];
                }
                return tmp9;
              }
            }
          }
        }
      }
      const obj2 = { disabled, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel, onPress, style: tmp5, children: null };
      const items = [tmp6, children];
      obj2.children = items;
      const tmp11 = React5(Pressables.PressableOpacity, obj2);
      cResult[6] = accessibilityLabel;
      cResult[7] = children;
      cResult[8] = disabled;
      cResult[9] = onPress;
      cResult[10] = tmp5;
      cResult[11] = tmp6;
      cResult[12] = tmp11;
      tmp9 = tmp11;
    }
    const obj3 = { source, color: tmp4.badge.backgroundColor, size: native.Icon.Sizes.SMALL_20 };
    const tmp8 = timestampProducer(native.Icon, obj3);
    cResult[3] = source;
    cResult[4] = tmp4.badge.backgroundColor;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items1 = [tmp4.headerButton, disabledOpacity];
  cResult[0] = tmp4.headerButton;
  cResult[1] = disabledOpacity;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function VoiceChatHeaderIcon(disabled) {
  let disabledOpacity = disabled.disabled;
  ({ accessibilityLabel, onPress, source, children } = disabled);
  const tmp = closure_8();
  const obj = { disabled: disabledOpacity, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel, onPress, style: null, children: null };
  const items = [tmp.headerButton, ];
  if (disabledOpacity) {
    disabledOpacity = tmp.disabledOpacity;
  }
  items[1] = disabledOpacity;
  obj.style = items;
  const items1 = [timestampProducer(native.Icon, { source, color: tmp.badge.backgroundColor, size: native.Icon.Sizes.SMALL_20 }), children];
  obj.children = items1;
  return React5(Pressables.PressableOpacity, obj);
});
export const useVoiceChatMentions = tmp4;
export const VoiceChatCallScreenHeaderIcon = tmp5;