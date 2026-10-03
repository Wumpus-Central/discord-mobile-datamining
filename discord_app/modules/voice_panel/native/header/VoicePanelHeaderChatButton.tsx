// === Module 17244: VoicePanelHeaderChatButton ===

// Module 17244 (VoicePanelHeaderChatButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import util from "util" /* 1126 */;
import ChatIcon from "ChatIcon" /* 5855 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 17164 */;
import useChatBadgeDefault from "useChatBadge" /* 17245 */;
import noop from "module_19" /* 19 */;

require = fn;
const ComponentActions = fn(1085).ComponentActions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: null, notificationBadge: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
obj2.badge = size;
obj2.notificationBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = c.c(7);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = useChatBadgeDefault(channelId.channelId);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { icon: null, accessibilityLabel: null, onPress: null };
    const obj3 = { color: nativeDefault.colors.WHITE, size: "sm" };
    obj2.icon = hasOwnProperty(ChatIcon.ChatIcon, obj3);
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["5KxXrK"]);
    obj2.onPress = first;
    const tmp11 = hasOwnProperty(VoicePanelIconButtonDefault, obj2);
    cResult[1] = tmp11;
    let tmp8 = tmp11;
    const tmp6Result = VoicePanelIconButtonDefault;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp7) {
    if (cResult[3] === tmp4) {
      let tmp12 = cResult[4];
    }
    if (cResult[5] !== tmp12) {
      const obj4 = { children: null };
      const items = [tmp8, tmp12];
      obj4.children = items;
      const tmp18 = timestampProducer(NativeViewDefault, obj4);
      cResult[5] = tmp12;
      cResult[6] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[6];
    }
    return tmp16;
  }
  let tmp13 = null != tmp7;
  if (tmp13) {
    const obj5 = { style: tmp4.badgeContainer, children: null };
    const obj6 = { style: null };
    const items1 = [, ];
    ({ badge: arr[0], notificationBadge: arr[1] } = tmp4);
    obj6.style = items1;
    obj5.children = hasOwnProperty(NativeViewDefault, obj6);
    tmp13 = hasOwnProperty(NativeViewDefault, obj5);
    const tmp6Result2 = NativeViewDefault;
  }
  cResult[2] = tmp7;
  cResult[3] = tmp4;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : ((channelId) => {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp5 = useChatBadgeDefault(channelId.channelId);
  const obj = { icon: null, accessibilityLabel: null, onPress: null };
  const tmp7 = NativeViewDefault;
  const tmp9 = VoicePanelIconButtonDefault;
  obj.icon = hasOwnProperty(ChatIcon.ChatIcon, { color: nativeDefault.colors.WHITE, size: "sm" });
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["5KxXrK"]);
  obj.onPress = callback;
  const children = [hasOwnProperty(tmp9, obj), ];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    const obj3 = { style: tmp.badgeContainer, children: null };
    const obj4 = { style: null };
    const items1 = [, ];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    obj4.style = items1;
    obj3.children = hasOwnProperty(NativeViewDefault, obj4);
    tmp8Result = hasOwnProperty(NativeViewDefault, obj3);
    const tmp3Result = NativeViewDefault;
  }
  children[1] = tmp8Result;
  return timestampProducer(tmp7, { children });
});