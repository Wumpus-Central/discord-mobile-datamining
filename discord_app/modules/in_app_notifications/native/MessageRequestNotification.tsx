// === Module 11323: MessageRequestNotification ===

// Module 11323 (MessageRequestNotification)
import util from "util" /* 1113 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default function MessageRequestInAppNotification(notification) {
  notification = notification.notification;
  const author = notification.author;
  const numMutualGuilds = notification.numMutualGuilds;
  items = [author.username, numMutualGuilds];
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text: null };
    const intl = util.intl;
    obj.text = intl.formatToPlainString(util.t.LeYU4d, { name: author.username, count: numMutualGuilds });
    return obj;
  }, items);
  const callback = noop.useCallback(() => {
    numMutualGuilds(11154).clearNotification();
    const obj = numMutualGuilds(11154);
    const rootNavigationRef = author(5315).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = { icon: jsx(author(1187).Avatar, { user: author, size: author(1187).AvatarSizes.NORMAL, guildId: "r" }), header: memo, children: null, onPress: null, notification: null };
  const obj3 = { text: null };
  let intl = author(1113).intl;
  obj3.text = intl.string(author(1113).t["Bx4/Lf"]);
  obj.children = jsx(author(11169).SystemMessageText, { text: null });
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(author(11208).NotificationPressable, { icon: jsx(author(1187).Avatar, { user: author, size: author(1187).AvatarSizes.NORMAL, guildId: "r" }), header: memo, children: null, onPress: null, notification: null });
};