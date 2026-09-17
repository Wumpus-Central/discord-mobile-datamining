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
const createStyles = fn(4640);
const obj2 = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: null, notificationBadge: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
obj2.badge = size;
obj2.notificationBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default function VoicePanelHeaderChatButton(channelId) {
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
  const children = [hasOwnProperty(tmp9, obj)];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    const obj3 = { style: tmp.badgeContainer, children: null };
    const obj4 = { style: null };
    const items1 = [,];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    obj4.style = items1;
    obj3.children = hasOwnProperty(NativeViewDefault, obj4);
    tmp8Result = hasOwnProperty(NativeViewDefault, obj3);
    const tmp3Result = NativeViewDefault;
  }
  children[1] = tmp8Result;
  return timestampProducer(tmp7, { children });
}
