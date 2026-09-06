// discord_app/modules/in_app_notifications/native/MessageFailedToSendNotification.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Client from "../../../flow/Client.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
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
  const intl = channelId(1114).intl;
  obj.text = intl.string(channelId(1114).t.Q0x94X);
  channelId = notification.channelId;
  const messageId = notification.messageId;
  const items = [channelId, messageId];
  const callback = noop.useCallback(() => {
    const obj = { jumpType: Client.JumpType.INSTANT };
    obj.transitionToMessage(channelId, messageId, obj);
  }, items);
  obj = { icon: null, children: null, header: null, onPress: null, notification: null };
  obj = { style: closure_6().iconContainer, children: null };
  const tmp = closure_6();
  obj.children = jsx(channelId(10180).RetryIcon, { size: "md", color: messageId(576).colors.ICON_SUBTLE });
  obj.icon = <View style={closure_6().iconContainer}>{null}</View>;
  const obj2 = { text: null };
  const intl2 = channelId(1114).intl;
  obj2.text = intl2.string(channelId(1114).t.xxRPOT);
  obj.children = jsx(channelId(10107).SystemMessageText, { text: null });
  obj.header = obj;
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(channelId(10170).NotificationPressable, { style: closure_6().iconContainer, children: null });
});
