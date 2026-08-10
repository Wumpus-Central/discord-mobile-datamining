// discord_app/modules/in_app_notifications/native/ReminderNotification.tsx
import importAllResult from "module_38";
import { View } from "PreviewIcon";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import set from "set";
import { AnalyticEvents } from "ME";
import jsxProd from "module_4509";
import createCacheKey from "createCacheKey";
import set from "ensureGuildLoaded";
import { 00038__ } from "../../../../_runtime/metro/00038__.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { ClockIcon } from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import { Button } from "../../../design/void/native.tsx";
import { extractMetadataFromNotification } from "InAppNotificationUtils.tsx";
import { VideoBadge } from "MediaPreviewRightAccessory.tsx";
import { LocationText } from "MessageNotificationHeader.tsx";
import { NativeMessagePreviewContent } from "MessagePreviewText.tsx";

let RIGHT_ACCESSORY_LEFT_MARGIN;
let c10;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function NotificationAvatar(arg0) {
  let guildId;
  let user;
  ({ user, guildId } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.avatarContainer, children: null };
  obj = { user, guildId, size: null, cutout: null };
  obj[2] = Button.AvatarSizes.NORMAL;
  obj[3] = obj;
  const items = [callback(Button.Avatar, obj), ];
  obj = { style: tmp.cutoutIconContainer, children: null };
  const obj1 = { size: "xs", color: null };
  obj1[1] = Themes.colors.ICON_SUBTLE;
  obj[1] = callback(ClockIcon.ClockIcon, obj1);
  items[1] = callback(View, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function NotificationBody(channel) {
  channel = channel.channel;
  const message = channel.message;
  let obj = channel(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(channel.guild_id));
  let obj1 = channel(589);
  const items1 = [ensureGuildLoaded];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.getChannel(channel.parent_id));
  let obj2 = channel(9768);
  const hasPreviewableMedia = obj2.useHasPreviewableMedia(message);
  const tmp6 = channel.type === channel(692).ChannelTypes.DM;
  let num = 1;
  if (tmp6) {
    num = closure_8;
  }
  let tmp10 = null;
  const messagePreviewTextVariant = channel(9768).getMessagePreviewTextVariant();
  if (!tmp6) {
    obj = { channel: null, parentChannel: null, guild: null, author: null };
    obj[0] = channel;
    obj[1] = stateFromStores1;
    obj[2] = stateFromStores;
    tmp10 = callback(LocationText, obj);
  }
  const items2 = [tmp10, ];
  if (!hasPreviewableMedia) {
    if (null == message.poll) {
      obj = { channel: null, message: null, color: "text-default", layout: null, variant: null, muted: false, lineClamp: null };
      obj[0] = channel;
      obj[1] = message;
      obj[3] = tmp(3979).ChannelListLayoutTypes.COZY;
      obj[4] = messagePreviewTextVariant;
      obj[6] = num;
      let tmp14 = callback(tmp(9790).ChannelRowPreview, obj);
    }
    obj1 = { children: null };
    items2[1] = tmp14;
    obj1[0] = items2;
    return closure_11(closure_12, obj1);
  }
  obj2 = { message, lineClamp: num, showMessageAuthor: true, maxHeight: closure_7 };
  tmp14 = callback(NativeMessagePreviewContent, obj2);
}
let c3 = importAllResult;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: error, NOTIFICATION_PREVIEW_LINE_CLAMP: metroImportAll, RIGHT_ACCESSORY_LEFT_MARGIN } = set);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 }, avatarContainer: { position: "relative" }, rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN } });
let obj = { direction: require("Button").CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let closure_16 = importAllResult.memo((message) => {
  message = message.message;
  let obj = extractMetadataFromNotification;
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
  00038__(null != message, "Message in a notification should not be null.");
  let obj = { user: notification.author, guildId: channel.guild_id };
  const items = [notification];
  const memo = importAllResult.useMemo(() => {
    const obj = { type: "simple", text: null };
    const intl = notification(1236).intl;
    obj[1] = intl.string(notification(1236).t.Whs8tE);
    return obj;
  }, []);
  const callback = importAllResult.useCallback(() => {
    let author;
    let savedMessage;
    let obj = outer1_1(outer1_2[21]);
    obj.popAll();
    notification(outer1_2[22]).showForLaterModal(notification(outer1_2[23]).SavedMessageSortTypes.REMINDER);
    ({ savedMessage, author } = notification);
    const obj2 = notification(outer1_2[22]);
    obj = { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" };
    outer1_1(outer1_2[24]).track(outer1_9.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, obj);
  }, items);
  obj = { icon: callback(NotificationAvatar, obj), header: memo, onPress: callback, notification, rightAccessory: null, children: null };
  obj[4] = callback(closure_16, { message });
  obj[5] = callback(NotificationBody, { channel, message });
  return callback(notification(9852).NotificationPressable, obj);
});