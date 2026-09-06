// discord_app/modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(10095).NOTIFICATION_PREVIEW_LINE_CLAMP;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx");

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
  const memo = guild.useMemo(
    () => ({ type: "message", channel: parentChannel, parentChannel: null, guild, author: userAuthor }),
    items,
  );
  const items2 = [notification.parentChannel.id];
  const callback = guild.useCallback(() => {
    transitionToChannel.transitionToThread(thread);
  }, items1);
  const callback1 = guild.useCallback(() => {
    const obj = { channelId: notification.parentChannel.id };
    return obj.pushLazy(asyncRequireImpl(10142, dependencyMap.paths), obj);
  }, items2);
  obj = { icon: null, children: null, header: null, onPress: null, onSettingsPress: null, notification: null };
  obj = { size: notification(tmp[11]).AvatarSizes.NORMAL, user: threadCreator, guildId: thread.guild_id };
  obj.icon = jsx(notification(parentChannel[11]).Avatar, {
    size: notification(tmp[11]).AvatarSizes.NORMAL,
    user: threadCreator,
    guildId: thread.guild_id,
  });
  const formatToPlainStringResult = intl2.formatToPlainString(notification(parentChannel[4]).t.WUIDu9, {
    threadName: stringResult,
  });
  obj.children = jsx(notification(parentChannel[12]).Text, {
    variant: "redesign/message-preview/medium",
    color: "text-subtle",
    lineClamp: userAuthor,
    children: intl2.formatToPlainString(notification(parentChannel[4]).t.WUIDu9, { threadName: stringResult }),
  });
  obj.header = memo;
  obj.onPress = callback;
  obj.onSettingsPress = callback1;
  obj.notification = notification;
  return jsx(notification(parentChannel[10]).NotificationPressable, {
    size: notification(tmp[11]).AvatarSizes.NORMAL,
    user: threadCreator,
    guildId: thread.guild_id,
  });
}
