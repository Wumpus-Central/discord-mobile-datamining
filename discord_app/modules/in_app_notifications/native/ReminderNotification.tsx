// discord_app/modules/in_app_notifications/native/ReminderNotification.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import isReactionMilestoneNotification from "InAppNotificationUtils.tsx";
import NativeMessagePreviewContentDefault from "MessagePreviewText.tsx";
import LocationTextDefault from "MessageNotificationHeader.tsx";
import VideoBadge from "MediaPreviewRightAccessory.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/ChannelStore.tsx";
import closure_6 from "../../../stores/GuildStore.tsx";
import set from "InAppNotificationConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function NotificationAvatar(arg0) {
  ({ user, guildId } = arg0);
  const tmp = callback3();
  obj = { style: tmp.avatarContainer, children: null };
  obj = { user, guildId, size: Button.AvatarSizes.NORMAL, cutout: obj };
  const items = [callback(Button.Avatar, obj)];
  obj = {
    style: tmp.cutoutIconContainer,
    children: callback(ClockIcon.ClockIcon, { size: "xs", color: ThemesDefault.colors.ICON_SUBTLE }),
  };
  items[1] = callback(View, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function NotificationBody(channel) {
  channel = channel.channel;
  const message = channel.message;
  obj = channel(586);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(channel.guild_id));
  obj1 = channel(586);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_5.getChannel(channel.parent_id));
  let obj2 = channel(10203);
  const hasPreviewableMedia = obj2.useHasPreviewableMedia(message);
  const tmp6 = channel.type === channel(689).ChannelTypes.DM;
  let num = 1;
  if (tmp6) {
    num = closure_8;
  }
  let tmp10 = null;
  const messagePreviewTextVariant = channel(10203).getMessagePreviewTextVariant();
  if (!tmp6) {
    obj = { channel: null, parentChannel: null, guild: null, author: null };
    obj[0] = channel;
    obj[1] = stateFromStores1;
    obj[2] = stateFromStores;
    tmp10 = callback(LocationTextDefault, obj);
  }
  const items2 = [tmp10];
  if (!hasPreviewableMedia) {
    if (null == message.poll) {
      obj = {
        channel: null,
        message: null,
        color: "text-default",
        layout: null,
        variant: null,
        muted: false,
        lineClamp: null,
      };
      obj[0] = channel;
      obj[1] = message;
      obj[3] = tmp(4171).ChannelListLayoutTypes.COZY;
      obj[4] = messagePreviewTextVariant;
      obj[6] = num;
      let tmp14 = callback(tmp(10218).ChannelRowPreview, obj);
    }
    obj1 = { children: null };
    items2[1] = tmp14;
    obj1[0] = items2;
    return closure_11(closure_12, obj1);
  }
  obj2 = { message, lineClamp: num, showMessageAuthor: true, maxHeight: closure_7 };
  tmp14 = callback(NativeMessagePreviewContentDefault, obj2);
}
let c3 = importAllResult;
({
  IN_APP_NOTIFICATION_MAX_HEIGHT: error,
  NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8,
  RIGHT_ACCESSORY_LEFT_MARGIN,
} = set);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({
  cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 },
  avatarContainer: { position: "relative" },
  rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN },
});
let obj = { direction: require("Button").CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let closure_16 = importAllResult.memo((message) => {
  message = message.message;
  obj = isReactionMilestoneNotification;
  let tmp4 = null;
  if (obj.useHasPreviewableMedia(message)) {
    obj = { style: null, children: null };
    obj[0] = tmp.rightAccessoryContainer;
    obj = { message: null };
    obj[0] = message;
    obj[1] = callback(VideoBadge.MediaPreviewRightAccessory, obj);
    tmp4 = callback(View, obj);
  }
  return tmp4;
});
const result = set.fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default importAllResult.memo(function ReminderNotification(notification) {
  notification = notification.notification;
  const channel = notification.channel;
  const message = notification.savedMessage.message;
  _modDef38(null != message, "Message in a notification should not be null.");
  obj = { user: notification.author, guildId: channel.guild_id };
  const items = [notification];
  const memo = importAllResult.useMemo(() => {
    obj = { type: "simple", text: null };
    const intl = notification(1233).intl;
    obj[1] = intl.string(notification(1233).t.Whs8tE);
    return obj;
  }, []);
  const callback = importAllResult.useCallback(() => {
    obj = closure_1_1(closure_1_2[21]);
    obj.popAll();
    notification(closure_1_2[22]).showForLaterModal(notification(closure_1_2[23]).SavedMessageSortTypes.REMINDER);
    ({ savedMessage, author } = notification);
    const obj2 = notification(closure_1_2[22]);
    obj = { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" };
    closure_1_1(closure_1_2[24]).track(closure_1_9.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, obj);
  }, items);
  obj = {
    icon: callback(NotificationAvatar, obj),
    header: memo,
    onPress: callback,
    notification,
    rightAccessory: callback(closure_16, { message }),
    children: callback(NotificationBody, { channel, message }),
  };
  return callback(notification(10281).NotificationPressable, obj);
});
