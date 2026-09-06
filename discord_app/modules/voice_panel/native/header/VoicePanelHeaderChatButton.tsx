// discord_app/modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import util from "../../../../intl/index.native.tsx";
import ChatIcon from "../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import VoicePanelIconButtonDefault from "../shared/VoicePanelIconButton.tsx";
import useChatBadgeDefault from "../hooks/useChatBadge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ComponentActions = fn(1074).ComponentActions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  badgeContainer: { position: "absolute", top: -2, right: -2 },
  badge: null,
  notificationBadge: null,
};
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
  const children = [hasOwnProperty(VoicePanelIconButtonDefault, obj)];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    obj = { style: tmp.badgeContainer, children: null };
    const obj1 = { style: null };
    const items1 = [,];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    obj1.style = items1;
    obj.children = tmp8(tmp3(5589), obj1);
    tmp8Result = tmp8(tmp3(5589), obj);
    const tmp3Result = tmp3(5589);
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
}
