// === Module 11290: ReminderNotification ===

// Module 11290 (ReminderNotification)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ClockIcon from "ClockIcon" /* 5866 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10317 */;
import MessagePreviewTextDefault from "MessagePreviewText" /* 11178 */;
import MessageNotificationHeaderDefault from "MessageNotificationHeader" /* 11219 */;
import MediaPreviewRightAccessory from "MediaPreviewRightAccessory" /* 11221 */;
import showForLaterModal from "showForLaterModal" /* 11291 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import GuildStore from "GuildStore" /* 5013 */;

require = fn;
function NotificationAvatar(arg0) {
  ({ user, guildId } = arg0);
  const tmp = closure_13();
  const obj = { style: tmp.avatarContainer, children: null };
  items = [closure_1_10(native.Avatar, { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 }), ];
  obj3 = { style: tmp.cutoutIconContainer, children: null };
  const obj2 = { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 };
  obj3.children = closure_1_10(ClockIcon.ClockIcon, { size: "xs", color: nativeDefault.colors.ICON_SUBTLE });
  items[1] = closure_1_10(View, obj3);
  obj.children = items;
  return closure_1_11(View, obj);
}
function NotificationBody(channel) {
  channel = channel.channel;
  const message = channel.message;
  items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const obj = channel(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const obj2 = channel(504);
  const hasPreviewableMedia = channel(11161).useHasPreviewableMedia(message);
  const tmp6 = channel.type === channel(1093).ChannelTypes.DM;
  let num = 1;
  if (tmp6) {
    num = closure_8;
  }
  obj3 = channel(11161);
  let tmp10 = null;
  const messagePreviewTextVariant = channel(11161).getMessagePreviewTextVariant();
  if (!tmp6) {
    const obj4 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
    tmp10 = closure_10(MessageNotificationHeaderDefault, obj4);
  }
  const items2 = [tmp10, ];
  if (!hasPreviewableMedia) {
    if (null == message.poll) {
      const obj5 = { channel, message, color: "text-default", layout: tmp(5818).ChannelListLayoutTypes.COZY, variant: messagePreviewTextVariant, muted: false, lineClamp: num };
      let tmp14 = closure_10(tmp(11180).ChannelRowPreview, obj5);
    }
    const obj6 = { children: null };
    items2[1] = tmp14;
    obj6.children = items2;
    return closure_11(closure_12, obj6);
  }
  tmp14 = closure_10(MessagePreviewTextDefault, { message, lineClamp: num, showMessageAuthor: true, maxHeight });
  const obj7 = { message, lineClamp: num, showMessageAuthor: true, maxHeight };
  const tmpResult = channel(11161);
}
const View = fn(17).View;
const InAppNotificationConstants = fn(11162);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroImportDefault, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8, RIGHT_ACCESSORY_LEFT_MARGIN } = InAppNotificationConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5142);
let closure_13 = createStyles.createStyles({ cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 }, avatarContainer: { position: "relative" }, rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN } });
let obj3 = { direction: fn(1187).CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let closure_16 = noop.memo(function RightAccessory(message) {
  message = message.message;
  const tmp = closure_13();
  let tmp4 = null;
  if (obj.useHasPreviewableMedia(message)) {
    const obj2 = { style: tmp.rightAccessoryContainer, children: null };
    obj3 = { message };
    obj2.children = closure_1_10(MediaPreviewRightAccessory.MediaPreviewRightAccessory, obj3);
    tmp4 = closure_1_10(View, obj2);
  }
  return tmp4;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default noop.memo(function ReminderNotification(notification) {
  notification = notification.notification;
  let handleDismissNotification;
  const channel = notification.channel;
  const message = notification.savedMessage.message;
  handleDismissNotification(38)(null != message, "Message in a notification should not be null.");
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text: null };
    const intl = notification(1113).intl;
    obj.text = intl.string(notification(1113).t.Whs8tE);
    return obj;
  }, []);
  let obj = { user: notification.author, guildId: channel.guild_id };
  const tmp2 = closure_10(NotificationAvatar, { user: notification.author, guildId: channel.guild_id });
  handleDismissNotification = notification(11207).useInAppNotificationContext().handleDismissNotification;
  items = [handleDismissNotification, notification];
  const callback = noop.useCallback(() => {
    handleDismissNotification("click");
    ModalActionCreatorsDefault.popAll();
    showForLaterModal.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    ({ savedMessage, author } = notification);
    AnalyticsUtilsDefault.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" });
  }, items);
  let obj2 = notification(11207);
  return closure_10(notification(11217).NotificationPressable, { icon: tmp2, header: memo, onPress: callback, notification, rightAccessory: closure_10(closure_16, { message }), children: closure_10(NotificationBody, { channel, message }) });
});