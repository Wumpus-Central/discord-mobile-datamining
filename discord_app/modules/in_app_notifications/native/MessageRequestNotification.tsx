// === Module 10525: MessageRequestInAppNotification ===

// Module 10525 (MessageRequestInAppNotification)
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default function MessageRequestInAppNotification(notification) {
  notification = notification.notification;
  const author = notification.author;
  const numMutualGuilds = notification.numMutualGuilds;
  const items = [author.username, numMutualGuilds];
  const memo = React.useMemo(() => {
    const intl = author(dependencyMap[2]).intl;
    const obj = { name: author.username, count: numMutualGuilds };
    obj[1] = intl.formatToPlainString(author(dependencyMap[2]).t.LeYU4d, obj);
    return obj;
  }, items);
  const callback = React.useCallback(() => {
    numMutualGuilds(10031).clearNotification();
    const obj = numMutualGuilds(10031);
    const rootNavigationRef = author(4230).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = { user: author, size: author(1297).AvatarSizes.NORMAL, guildId: "Array" };
  obj[0] = jsx(author(1297).Avatar, { user: author, size: author(1297).AvatarSizes.NORMAL, guildId: "Array" });
  obj[1] = memo;
  obj = { text: null };
  let intl = author(1236).intl;
  obj[0] = intl.string(author(1236).t["Bx4/Lf"]);
  obj[2] = jsx(author(10048).SystemMessageText, { text: null });
  obj[3] = callback;
  obj[4] = notification;
  return jsx(author(10113).NotificationPressable, { text: null });
};