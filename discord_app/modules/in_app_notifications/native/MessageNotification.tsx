// === Module 10009: ? ===

// Module 10009
import NativeMessagePreviewContentDefault from "NativeMessagePreviewContent" /* 10010 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import set from "set" /* 9992 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
let c3 = importAllResult;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: c5, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_6 } = set);
let closure_8 = createCacheKey.createStyles({ newContainerRoleDot: { paddingRight: 4, paddingTop: 0 } });
let closure_9 = importAllResult.memo((message) => jsx(NativeMessagePreviewContentDefault, { message: message.message, lineClamp: closure_6, maxHeight: closure_5 }));
const result = set.fileFinishedImporting("modules/in_app_notifications/native/MessageNotification.tsx");

export default importAllResult.memo(function MessageNotification(notification) {
  notification = notification.notification;
  let message;
  let channel;
  let parentChannel;
  let guild;
  let nullableMessageAuthor;
  let handleDismissNotification;
  message = notification.message;
  channel = notification.channel;
  parentChannel = notification.parentChannel;
  guild = notification.guild;
  let tmp2 = 0 === message.content.length;
  if (tmp2) {
    tmp2 = null !== message.interaction;
  }
  if (tmp2) {
    tmp2 = undefined !== message.interaction;
  }
  if (tmp2) {
    tmp2 = null !== message.activityInstance;
  }
  if (tmp2) {
    tmp2 = undefined !== message.activityInstance;
  }
  if (tmp2) {
    let intl = message(parentChannel[8]).intl;
    let obj = message(parentChannel[9]);
    const interaction = message.interaction;
    let user;
    if (interaction != null) {
      user = interaction.user;
    }
    obj = { username: null };
    obj[0] = obj.getUserAuthor(user, channel).nick;
    message.content = intl.formatToPlainString(message(parentChannel[8]).t["7eikg1"], obj);
  }
  let obj2 = message(parentChannel[9]);
  nullableMessageAuthor = obj2.useNullableMessageAuthor(message);
  const tmp = callback();
  const items = [nullableMessageAuthor];
  let colorString;
  const stateFromStores = message(parentChannel[6]).useStateFromStores(items, () => nullableMessageAuthor.roleStyle);
  if (nullableMessageAuthor != null) {
    colorString = nullableMessageAuthor.colorString;
  }
  let tmp15Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      obj = { color: null, colors: null, containerStyles: null };
      obj[0] = colorString;
      let colorStrings;
      if (nullableMessageAuthor != null) {
        colorStrings = nullableMessageAuthor.colorStrings;
      }
      obj[1] = colorStrings;
      obj[2] = tmp.newContainerRoleDot;
      tmp15Result = jsx(tmp9(tmp10[7]).RoleDot, { color: null, colors: null, containerStyles: null });
      const tmp15 = jsx;
    }
  }
  const obj4 = message(parentChannel[6]);
  handleDismissNotification = message(parentChannel[10]).useInAppNotificationContext().handleDismissNotification;
  const items1 = [nullableMessageAuthor.nick, channel.id, message.content];
  const effect = guild.useEffect(() => {
    const intl = message(parentChannel[8]).intl;
    const obj = { userName: nullableMessageAuthor.nick, message: channel(parentChannel[11]).unparse(message.content, channel.id, true) };
    const obj2 = channel(parentChannel[11]);
    const AccessibilityAnnouncer = message(parentChannel[12]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(message(parentChannel[8]).t.Hjp1LH, obj));
  }, items1);
  const items2 = [channel.id, message.id];
  const items3 = [channel.id];
  callback = guild.useCallback(() => {
    channel(parentChannel[13]).popAll();
    const obj = channel(parentChannel[13]);
    message(parentChannel[14]).transitionToMessage(channel.id, message.id, { navigationReplace: true });
  }, items2);
  const items4 = [channel, parentChannel, guild, nullableMessageAuthor, handleDismissNotification];
  const callback1 = guild.useCallback(() => {
    let obj = channel(parentChannel[13]);
    obj = { channelId: channel.id };
    return obj.pushLazy(message(parentChannel[16])(parentChannel[15], parentChannel.paths), obj, "in-app-notification-settings-modal");
  }, items3);
  const memo = guild.useMemo(() => ({ type: "message", channel, parentChannel, guild, author: nullableMessageAuthor, onDismiss: handleDismissNotification }), items4);
  obj1 = { user: message.author, guildId: null, size: null };
  const guild2 = notification.guild;
  let id;
  if (guild2 != null) {
    id = guild2.id;
  }
  obj2 = { icon: null, accessoryLabelNode: null, rightAccessory: null, children: null, header: null, notification: null, onPress: null, onSettingsPress: null };
  obj1[1] = id;
  obj1[2] = message(parentChannel[7]).AvatarSizes.NORMAL;
  obj2[0] = jsx(message(parentChannel[7]).Avatar, { user: message.author, guildId: null, size: null });
  obj2[1] = tmp15Result;
  obj2[2] = jsx(message(parentChannel[18]).MediaPreviewRightAccessory, { message });
  obj2[3] = <closure_9 message={message} />;
  obj2[4] = memo;
  obj2[5] = notification;
  obj2[6] = callback;
  obj2[7] = callback1;
  return jsx(message(parentChannel[17]).NotificationPressable, { icon: null, accessoryLabelNode: null, rightAccessory: null, children: null, header: null, notification: null, onPress: null, onSettingsPress: null });
});