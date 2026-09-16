// discord_app/modules/in_app_notifications/native/ReminderNotification.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import showForLaterModal from "../../saved_messages/native/showForLaterModal.tsx";
import SavedMessagesTypes from "../../saved_messages/SavedMessagesTypes.tsx";
import MessagePreviewTextDefault from "MessagePreviewText.tsx";
import MessageNotificationHeaderDefault from "MessageNotificationHeader.tsx";
import MediaPreviewRightAccessory from "MediaPreviewRightAccessory.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function NotificationAvatar(arg0) {
  ({ user, guildId } = arg0);
  const tmp = closure_13();
  const obj = { style: tmp.avatarContainer, children: null };
  const items = [closure_1_10(native.Avatar, { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 })];
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
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const obj = channel(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const obj2 = channel(504);
  const hasPreviewableMedia = channel(10233).useHasPreviewableMedia(message);
  const tmp6 = channel.type === channel(1095).ChannelTypes.DM;
  let num = 1;
  if (tmp6) {
    num = closure_8;
  }
  obj3 = channel(10233);
  let tmp10 = null;
  const messagePreviewTextVariant = channel(10233).getMessagePreviewTextVariant();
  if (!tmp6) {
    const obj4 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
    tmp10 = closure_10(MessageNotificationHeaderDefault, obj4);
  }
  const items2 = [tmp10];
  if (!hasPreviewableMedia) {
    if (null == message.poll) {
      const obj5 = {
        channel,
        message,
        color: "text-default",
        layout: tmp(7995).ChannelListLayoutTypes.COZY,
        variant: messagePreviewTextVariant,
        muted: false,
        lineClamp: num,
      };
      let tmp14 = closure_10(tmp(10247).ChannelRowPreview, obj5);
    }
    const obj6 = { children: null };
    items2[1] = tmp14;
    obj6.children = items2;
    return closure_11(closure_12, obj6);
  }
  tmp14 = closure_10(MessagePreviewTextDefault, { message, lineClamp: num, showMessageAuthor: true, maxHeight });
  const obj7 = { message, lineClamp: num, showMessageAuthor: true, maxHeight };
  const tmpResult = channel(10233);
}
const View = fn(17).View;
const InAppNotificationConstants = fn(10234);
({
  IN_APP_NOTIFICATION_MAX_HEIGHT: closure_7,
  NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8,
  RIGHT_ACCESSORY_LEFT_MARGIN,
} = InAppNotificationConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4638);
let closure_13 = createStyles.createStyles({
  cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 },
  avatarContainer: { position: "relative" },
  rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN },
});
let obj3 = { direction: fn(1177).CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let closure_16 = noop.memo((message) => {
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
  const channel = notification.channel;
  const message = notification.savedMessage.message;
  _modDef38(null != message, "Message in a notification should not be null.");
  const items = [notification];
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text: null };
    const intl = notification(1115).intl;
    obj.text = intl.string(notification(1115).t.Whs8tE);
    return obj;
  }, []);
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.popAll();
    showForLaterModal.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    ({ savedMessage, author } = notification);
    AnalyticsUtilsDefault.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, {
      message_id: savedMessage.saveData.messageId,
      message_author_id: author.id,
      notification_type: "IN_APP",
    });
  }, items);
  let obj = { user: notification.author, guildId: channel.guild_id };
  const tmp2 = closure_10(NotificationAvatar, { user: notification.author, guildId: channel.guild_id });
  return closure_10(notification(10308).NotificationPressable, {
    icon: closure_10(NotificationAvatar, { user: notification.author, guildId: channel.guild_id }),
    header: memo,
    onPress: callback,
    notification,
    rightAccessory: closure_10(closure_16, { message }),
    children: closure_10(NotificationBody, { channel, message }),
  });
});
