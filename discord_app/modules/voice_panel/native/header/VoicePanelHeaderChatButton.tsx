// === Module 17129: VoicePanelHeaderChatButton ===

// Module 17129 (VoicePanelHeaderChatButton)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import util from "util" /* 1114 */;
import ChatIcon from "ChatIcon" /* 5071 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 17035 */;
import useChatBadgeDefault from "useChatBadge" /* 17130 */;
import noop from "module_19" /* 19 */;

require = fn;
const ComponentActions = fn(1074).ComponentActions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: null, notificationBadge: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
createStyles.badge = size;
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
createStyles.notificationBadge = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default function VoicePanelHeaderChatButton(channelId) {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp5 = useChatBadgeDefault(channelId.channelId);
  const tmp6 = timestampProducer;
  let obj = { icon: null, accessibilityLabel: null, onPress: null };
  const tmp7 = NativeViewDefault;
  obj = { color: nativeDefault.colors.WHITE, size: "sm" };
  obj.icon = hasOwnProperty(ChatIcon.ChatIcon, obj);
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["5KxXrK"]);
  obj.onPress = callback;
  const children = [hasOwnProperty(VoicePanelIconButtonDefault, obj), ];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    obj = { style: tmp.badgeContainer, children: null };
    const obj1 = { style: null };
    const items1 = [, ];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    obj1.style = items1;
    obj.children = tmp8(tmp3(5589), obj1);
    tmp8Result = tmp8(tmp3(5589), obj);
    const tmp3Result = tmp3(5589);
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
};