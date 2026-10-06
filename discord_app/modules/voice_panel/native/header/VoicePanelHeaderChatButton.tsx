// === Module 17297: VoicePanelHeaderChatButton ===

// Module 17297 (VoicePanelHeaderChatButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import intl2 from "intl" /* 1126 */;
import ChatIcon2 from "ChatIcon" /* 5862 */;
import NativeViewDefault from "NativeView" /* 5983 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 17217 */;
import useChatBadgeDefault from "useChatBadge" /* 17298 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let channelId;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const ComponentActions = Constants.ComponentActions;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: size, notificationBadge: obj2 };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let ChatIcon;
  let first;
  let intl;
  let items;
  let items1;
  let obj3;
  let obj6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  channelId = channelId.channelId;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = useChatBadgeDefault(channelId);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { icon: hasOwnProperty(ChatIcon, obj3), accessibilityLabel: intl.string(intl2.t["5KxXrK"]), onPress: first };
    obj3 = { color: nativeDefault.colors.WHITE, size: "sm" };
    const tmp6Result = VoicePanelIconButtonDefault;
    ChatIcon = ChatIcon2.ChatIcon;
    intl = intl2.intl;
    const tmp11 = hasOwnProperty(tmp6Result, obj2);
    cResult[1] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp7) {
    let tmp12;
    let tmp16;
    if (cResult[3] === tmp4) {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== tmp12) {
      const obj4 = { children: items };
      items = [tmp8, tmp12];
      const tmp18 = metroRequire(NativeViewDefault, obj4);
      cResult[5] = tmp12;
      cResult[6] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[6];
    }
    return tmp16;
  }
  let tmp13 = null != tmp7;
  if (tmp13) {
    const obj5 = { style: tmp4.badgeContainer, children: hasOwnProperty(NativeViewDefault, obj6) };
    obj6 = { style: items1 };
    items1 = [, ];
    ({ badge: arr[0], notificationBadge: arr[1] } = tmp4);
    const tmp6Result2 = NativeViewDefault;
    tmp13 = hasOwnProperty(tmp6Result2, obj5);
  }
  cResult[2] = tmp7;
  cResult[3] = tmp4;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : ((channelId) => {
  let ChatIcon;
  let intl;
  let items1;
  let obj2;
  let obj4;
  channelId = channelId.channelId;
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp5 = useChatBadgeDefault(channelId);
  const obj = { icon: hasOwnProperty(ChatIcon, obj2), accessibilityLabel: intl.string(intl2.t["5KxXrK"]), onPress: callback };
  const tmp7 = NativeViewDefault;
  obj2 = { color: nativeDefault.colors.WHITE, size: "sm" };
  const tmp9 = VoicePanelIconButtonDefault;
  ChatIcon = ChatIcon2.ChatIcon;
  intl = intl2.intl;
  const children = [hasOwnProperty(tmp9, obj), ];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    const obj3 = { style: tmp.badgeContainer, children: hasOwnProperty(NativeViewDefault, obj4) };
    obj4 = { style: items1 };
    items1 = [, ];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    const tmp3Result = NativeViewDefault;
    tmp8Result = hasOwnProperty(tmp3Result, obj3);
  }
  children[1] = tmp8Result;
  return metroRequire(tmp7, { children });
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default tmp4;