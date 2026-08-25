// === Module 10361: MessageRequestInAppNotification ===

// Module 10361 (MessageRequestInAppNotification)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default function MessageRequestInAppNotification(notification) {
  notification = notification.notification;
  let author;
  let numMutualGuilds;
  author = notification.author;
  numMutualGuilds = notification.numMutualGuilds;
  const items = [author.username, numMutualGuilds];
  const memo = React.useMemo(() => {
    let obj = { type: "simple", text: null };
    const intl = author(closure_1_2[2]).intl;
    obj = { name: author.username, count: numMutualGuilds };
    obj[1] = intl.formatToPlainString(author(closure_1_2[2]).t.LeYU4d, obj);
    return obj;
  }, items);
  const callback = React.useCallback(() => {
    numMutualGuilds(9926).clearNotification();
    const obj = numMutualGuilds(9926);
    const rootNavigationRef = author(4235).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = { icon: null, header: null, children: null, onPress: null, notification: null };
  obj = { user: author, size: author(1297).AvatarSizes.NORMAL, guildId: "r" };
  obj[0] = jsx(author(1297).Avatar, { user: author, size: author(1297).AvatarSizes.NORMAL, guildId: "r" });
  obj[1] = memo;
  obj = { text: null };
  let intl = author(1236).intl;
  obj[0] = intl.string(author(1236).t["Bx4/Lf"]);
  obj[2] = jsx(author(9943).SystemMessageText, { text: null });
  obj[3] = callback;
  obj[4] = notification;
  return jsx(author(10002).NotificationPressable, { text: null });
};