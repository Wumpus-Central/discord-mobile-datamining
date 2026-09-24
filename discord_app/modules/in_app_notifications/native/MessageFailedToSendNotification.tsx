// discord_app/modules/in_app_notifications/native/MessageFailedToSendNotification.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Client from "../../../flow/Client.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj = { iconContainer: null };
let size = {
  width: 40,
  height: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
};
obj.iconContainer = size;
let closure_6 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default noop.memo(function MessageFailedToSendNotification(notification) {
  notification = notification.notification;
  let channelId;
  let obj = { type: "simple", text: null };
  const intl = channelId(1115).intl;
  obj.text = intl.string(channelId(1115).t.Q0x94X);
  channelId = notification.channelId;
  const messageId = notification.messageId;
  const items = [channelId, messageId];
  const callback = noop.useCallback(() => {
    const obj = transitionToChannel;
    obj.transitionToMessage(channelId, messageId, { jumpType: Client.JumpType.INSTANT });
  }, items);
  const obj2 = { icon: null, children: null, header: null, onPress: null, notification: null };
  const obj3 = { style: closure_6().iconContainer, children: null };
  const tmp = closure_6();
  obj3.children = jsx(channelId(10527).RetryIcon, { size: "md", color: messageId(576).colors.ICON_SUBTLE });
  obj2.icon = <View style={closure_6().iconContainer}>{null}</View>;
  const obj5 = { text: null };
  const intl2 = channelId(1115).intl;
  obj5.text = intl2.string(channelId(1115).t.xxRPOT);
  obj2.children = jsx(channelId(10453).SystemMessageText, { text: null });
  obj2.header = obj;
  obj2.onPress = callback;
  obj2.notification = notification;
  return jsx(channelId(10517).NotificationPressable, {
    icon: null,
    children: null,
    header: null,
    onPress: null,
    notification: null,
  });
});
