// === Module 10106: MessageNotification ===

// Module 10106 (MessageNotification)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import MessageParserDefault from "MessageParser" /* 7682 */;
import MessagePreviewTextDefault from "MessagePreviewText" /* 10107 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const InAppNotificationConstants = fn(10095);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: hasOwnProperty, NOTIFICATION_PREVIEW_LINE_CLAMP: metroRequire } = InAppNotificationConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ newContainerRoleDot: { paddingRight: 4, paddingTop: 0 } });
let closure_9 = noop.memo((message) => jsx(MessagePreviewTextDefault, { message: message.message, lineClamp, maxHeight }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotification.tsx");

export default noop.memo(function MessageNotification(notification) {
  notification = notification.notification;
  let nullableMessageAuthor;
  let handleDismissNotification;
  const message = notification.message;
  const channel = notification.channel;
  const parentChannel = notification.parentChannel;
  const guild = notification.guild;
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
    obj.username = obj.getUserAuthor(user, channel).nick;
    message.content = intl.formatToPlainString(message(parentChannel[8]).t["7eikg1"], obj);
  }
  let obj2 = message(parentChannel[9]);
  nullableMessageAuthor = obj2.useNullableMessageAuthor(message);
  const tmp = closure_8();
  const items = [nullableMessageAuthor];
  let colorString;
  const stateFromStores = message(parentChannel[6]).useStateFromStores(items, () => nullableMessageAuthor.roleStyle);
  if (nullableMessageAuthor != null) {
    colorString = nullableMessageAuthor.colorString;
  }
  let tmp15Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      obj = { color: colorString, colors: null, containerStyles: null };
      let colorStrings;
      if (nullableMessageAuthor != null) {
        colorStrings = nullableMessageAuthor.colorStrings;
      }
      obj.colors = colorStrings;
      obj.containerStyles = tmp.newContainerRoleDot;
      tmp15Result = jsx(tmp9(tmp10[7]).RoleDot, { color: colorString, colors: null, containerStyles: null });
    }
  }
  const obj4 = message(parentChannel[6]);
  handleDismissNotification = message(parentChannel[10]).useInAppNotificationContext().handleDismissNotification;
  const items1 = [nullableMessageAuthor.nick, channel.id, message.content];
  const effect = guild.useEffect(() => {
    const intl = util.intl;
    const obj = { userName: nullableMessageAuthor.nick, message: MessageParserDefault.unparse(message.content, channel.id, true) };
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.Hjp1LH, obj));
  }, items1);
  const items2 = [channel.id, message.id];
  const items3 = [channel.id];
  const callback = guild.useCallback(() => {
    ModalActionCreatorsDefault.popAll();
    transitionToChannel.transitionToMessage(channel.id, message.id, { navigationReplace: true });
  }, items2);
  const items4 = [channel, parentChannel, guild, nullableMessageAuthor, handleDismissNotification];
  const callback1 = guild.useCallback(() => {
    const obj = { channelId: channel.id };
    return obj.pushLazy(asyncRequireImpl(10142, dependencyMap.paths), obj, "in-app-notification-settings-modal");
  }, items3);
  const memo = guild.useMemo(() => ({ type: "message", channel, parentChannel, guild, author: nullableMessageAuthor, onDismiss: handleDismissNotification }), items4);
  const obj1 = { user: message.author, guildId: null, size: null };
  const guild2 = notification.guild;
  let id;
  if (guild2 != null) {
    id = guild2.id;
  }
  obj2 = { icon: null, accessoryLabelNode: null, rightAccessory: null, children: null, header: null, notification: null, onPress: null, onSettingsPress: null };
  obj1.guildId = id;
  obj1.size = message(parentChannel[7]).AvatarSizes.NORMAL;
  obj2.icon = jsx(message(parentChannel[7]).Avatar, { user: message.author, guildId: null, size: null });
  obj2.accessoryLabelNode = tmp15Result;
  obj2.rightAccessory = jsx(message(parentChannel[18]).MediaPreviewRightAccessory, { message });
  obj2.children = <closure_9 message={message} />;
  obj2.header = memo;
  obj2.notification = notification;
  obj2.onPress = callback;
  obj2.onSettingsPress = callback1;
  return jsx(message(parentChannel[17]).NotificationPressable, { icon: null, accessoryLabelNode: null, rightAccessory: null, children: null, header: null, notification: null, onPress: null, onSettingsPress: null });
});