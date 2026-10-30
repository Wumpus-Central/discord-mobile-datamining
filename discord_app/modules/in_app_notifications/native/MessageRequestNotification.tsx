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
    numMutualGuilds(11005).clearNotification();
    const obj = numMutualGuilds(11005);
    const rootNavigationRef = author(5194).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = {
    icon: jsx(author(1188).Avatar, { user: author, size: author(1188).AvatarSizes.NORMAL, guildId: "r" }),
    header: memo,
    children: null,
    onPress: null,
    notification: null,
  };
  const obj3 = { text: null };
  let intl = author(1114).intl;
  obj3.text = intl.string(author(1114).t["Bx4/Lf"]);
  obj.children = jsx(author(11018).SystemMessageText, { text: null });
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(author(11057).NotificationPressable, {
    icon: jsx(author(1188).Avatar, { user: author, size: author(1188).AvatarSizes.NORMAL, guildId: "r" }),
    header: memo,
    children: null,
    onPress: null,
    notification: null,
  });
}
