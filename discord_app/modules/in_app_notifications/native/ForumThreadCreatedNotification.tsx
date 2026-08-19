// === Module 10125: ForumThreadCreatedNotification ===

// Module 10125 (ForumThreadCreatedNotification)
import noop from "noop" /* 19 */;
import { NOTIFICATION_PREVIEW_LINE_CLAMP as closure_4 } from "set" /* 10030 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx");

export default function ForumThreadCreatedNotification(notification) {
  notification = notification.notification;
  parentChannel = undefined;
  let userAuthor;
  const thread = notification.thread;
  ({ threadCreator, parentChannel } = notification);
  const guild = notification.guild;
  let stringResult = thread(parentChannel[3])(thread);
  if (stringResult == null) {
    const intl = notification(tmp[4]).intl;
    stringResult = intl.string(notification(tmp[4]).t["/YzI63"]);
  }
  const intl2 = notification(tmp[4]).intl;
  let obj = notification(tmp[5]);
  userAuthor = obj.getUserAuthor(threadCreator, thread);
  const items = [parentChannel, guild, userAuthor];
  const items1 = [thread];
  const memo = guild.useMemo(() => ({ type: "message", channel: parentChannel, parentChannel: null, guild, author: userAuthor }), items);
  const items2 = [notification.parentChannel.id];
  const callback = guild.useCallback(() => {
    notification(parentChannel[6]).transitionToThread(thread);
  }, items1);
  const callback1 = guild.useCallback(() => {
    thread(parentChannel[7]);
    const obj = { channelId: notification.parentChannel.id };
    return obj.pushLazy(notification(parentChannel[9])(parentChannel[8], parentChannel.paths), obj);
  }, items2);
  obj = { size: notification(tmp[11]).AvatarSizes.NORMAL, user: threadCreator, guildId: thread.guild_id };
  obj[0] = jsx(notification(parentChannel[11]).Avatar, { size: notification(tmp[11]).AvatarSizes.NORMAL, user: threadCreator, guildId: thread.guild_id });
  const formatToPlainStringResult = intl2.formatToPlainString(notification(parentChannel[4]).t.WUIDu9, { threadName: stringResult });
  obj[1] = jsx(notification(parentChannel[12]).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp: userAuthor, children: intl2.formatToPlainString(notification(parentChannel[4]).t.WUIDu9, { threadName: stringResult }) });
  obj[2] = memo;
  obj[3] = callback;
  obj[4] = callback1;
  obj[5] = notification;
  return jsx(notification(parentChannel[10]).NotificationPressable, { size: notification(tmp[11]).AvatarSizes.NORMAL, user: threadCreator, guildId: thread.guild_id });
};