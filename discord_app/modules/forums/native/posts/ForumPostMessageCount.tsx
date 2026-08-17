// discord_app/modules/forums/native/posts/ForumPostMessageCount.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ChatIcon from "ChatIcon" /* 6867 */;
import useLoadForumUnreadCounts from "useLoadForumUnreadCounts" /* 8513 */;
import AnimatedCountDefault from "AnimatedCount" /* 10519 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import set from "set" /* 500 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { tintColor: ThemesDefault.colors.ICON_MUTED, marginEnd: 4, marginTop: null };
let num = 0;
if (set.isAndroid()) {
  num = 2;
}
createCacheKey = { iconRead: createCacheKey, iconUnread: null, messageUnreadCount: num, container: null };
let obj1 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginEnd: 4, marginTop: null };
let num2 = 0;
if (set.isAndroid()) {
  num2 = 2;
}
obj1[2] = num2;
createCacheKey[1] = obj1;
createCacheKey[2] = { marginStart: 4 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageCount.tsx");

export default function ForumPostMessageCount(hasUnreads) {
  hasUnreads = hasUnreads.hasUnreads;
  ({ thread, containerStyle } = hasUnreads);
  const tmp = callback();
  let obj = useLoadForumUnreadCounts;
  messageCount = obj.useMessageCount(thread);
  ({ messageCountText, unreadCount } = messageCount);
  let str = "text-muted";
  ({ isMaxMessageCount, messageCount } = messageCount);
  if (hasUnreads) {
    str = "text-default";
  }
  obj = { style: items, accessibilityLabel: null, children: null };
  items = [tmp.container, containerStyle];
  const intl = tmp2(1236).intl;
  obj[1] = intl.formatToPlainString(getSystemLocale.t["8M0DrB"], { count: messageCountText });
  obj = { size: "xs", style: hasUnreads ? tmp.iconUnread : tmp.iconRead, color: null };
  let str2 = "icon-muted";
  if (hasUnreads) {
    str2 = "interactive-text-default";
  }
  obj[2] = str2;
  const items1 = [closure_4(ChatIcon.ChatIcon, obj), , ];
  if (isMaxMessageCount) {
    obj1 = { variant: "text-sm/semibold", color: null, children: null };
    obj1[1] = str;
    obj1[2] = messageCountText;
    let tmp7Result = tmp7(tmp2(4734).Text, obj1);
  } else {
    const obj2 = { count: null, textVariant: "text-sm/semibold", textColor: null, animate: false };
    obj2[0] = messageCount;
    obj2[2] = str;
    tmp7Result = tmp7(AnimatedCountDefault, obj2);
  }
  items1[1] = tmp7Result;
  let tmp5Result = null != unreadCount;
  if (tmp5Result) {
    const obj3 = { variant: "text-sm/semibold", color: "text-brand", style: null, children: null };
    obj3[2] = tmp.messageUnreadCount;
    const intl2 = tmp2(1236).intl;
    const obj4 = { count: null };
    obj4[0] = unreadCount;
    const items2 = ["(", intl2.format(tmp2(1236).t.z3PEth, obj4), ")"];
    obj3[3] = items2;
    tmp5Result = tmp5(tmp2(4734).Text, obj3);
  }
  items1[2] = tmp5Result;
  obj[2] = items1;
  return closure_5(View, obj);
};