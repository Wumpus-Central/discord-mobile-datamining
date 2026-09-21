// discord_app/modules/in_app_notifications/native/MessageRequestNotification.tsx
import util from "../../../intl/index.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default function MessageRequestInAppNotification(notification) {
  notification = notification.notification;
  const author = notification.author;
  const numMutualGuilds = notification.numMutualGuilds;
  const items = [author.username, numMutualGuilds];
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text: null };
    const intl = util.intl;
    obj.text = intl.formatToPlainString(util.t.LeYU4d, { name: author.username, count: numMutualGuilds });
    return obj;
  }, items);
  const callback = noop.useCallback(() => {
    numMutualGuilds(10353).clearNotification();
    const obj = numMutualGuilds(10353);
    const rootNavigationRef = author(4614).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = {
    icon: jsx(author(1177).Avatar, { user: author, size: author(1177).AvatarSizes.NORMAL, guildId: "Array" }),
    header: memo,
    children: null,
    onPress: null,
    notification: null,
  };
  const obj3 = { text: null };
  let intl = author(1115).intl;
  obj3.text = intl.string(author(1115).t["Bx4/Lf"]);
  obj.children = jsx(author(10363).SystemMessageText, { text: null });
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(author(10427).NotificationPressable, {
    icon: jsx(author(1177).Avatar, { user: author, size: author(1177).AvatarSizes.NORMAL, guildId: "Array" }),
    header: memo,
    children: null,
    onPress: null,
    notification: null,
  });
}
