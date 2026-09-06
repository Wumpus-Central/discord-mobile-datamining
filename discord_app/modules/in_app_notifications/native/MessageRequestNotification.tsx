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
    let obj = { type: "simple", text: null };
    const intl = util.intl;
    obj = { name: author.username, count: numMutualGuilds };
    obj.text = intl.formatToPlainString(util.t.LeYU4d, obj);
    return obj;
  }, items);
  const callback = noop.useCallback(() => {
    numMutualGuilds(10096).clearNotification();
    const obj = numMutualGuilds(10096);
    const rootNavigationRef = author(4418).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = { icon: null, header: null, children: null, onPress: null, notification: null };
  obj = { user: author, size: author(1178).AvatarSizes.NORMAL, guildId: "Array" };
  obj.icon = jsx(author(1178).Avatar, { user: author, size: author(1178).AvatarSizes.NORMAL, guildId: "Array" });
  obj.header = memo;
  obj = { text: null };
  let intl = author(1114).intl;
  obj.text = intl.string(author(1114).t["Bx4/Lf"]);
  obj.children = jsx(author(10107).SystemMessageText, { text: null });
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(author(10170).NotificationPressable, { text: null });
}
