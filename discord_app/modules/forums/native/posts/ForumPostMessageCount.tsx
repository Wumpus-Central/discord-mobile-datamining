// discord_app/modules/forums/native/posts/ForumPostMessageCount.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ChatIcon from "../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ForumHooks from "../../ForumHooks.tsx";
import AnimatedCounterDefault from "AnimatedCounter.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let obj2 = { tintColor: nativeDefault.colors.ICON_MUTED, marginEnd: 4, marginTop: null };
let PlatformUtils = fn(1364);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
let obj4 = { iconRead: obj2, iconUnread: null, messageUnreadCount: null, container: null };
obj2.marginTop = num;
let obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginEnd: 4, marginTop: null };
PlatformUtils = fn(1364);
let num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
obj5.marginTop = num2;
obj4.iconUnread = obj5;
obj4.messageUnreadCount = { marginStart: 4 };
obj4.container = { flexDirection: "row", alignItems: "center" };
let closure_6 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageCount.tsx");

export default function ForumPostMessageCount(hasUnreads) {
  hasUnreads = hasUnreads.hasUnreads;
  ({ thread, containerStyle } = hasUnreads);
  const tmp = closure_6();
  const messageCount1 = ForumHooks.useMessageCount(thread);
  ({ messageCountText, unreadCount } = messageCount1);
  let str = "text-muted";
  ({ isMaxMessageCount, messageCount } = messageCount1);
  if (hasUnreads) {
    str = "text-default";
  }
  const obj2 = { style: null, accessibilityLabel: null, children: null };
  const items = [tmp.container, containerStyle];
  obj2.style = items;
  const intl = util.intl;
  obj2.accessibilityLabel = intl.formatToPlainString(util.t["8M0DrB"], { count: messageCountText });
  const obj3 = { size: "xs", style: hasUnreads ? tmp.iconUnread : tmp.iconRead, color: null };
  let str2 = "icon-muted";
  if (hasUnreads) {
    str2 = "interactive-text-default";
  }
  obj3.color = str2;
  const items1 = [React4(ChatIcon.ChatIcon, obj3), ,];
  if (isMaxMessageCount) {
    const obj4 = { variant: "text-sm/semibold", color: str, children: messageCountText };
    let tmp7Result = React4(Text_Text.Text, obj4);
  } else {
    const obj5 = { count: messageCount, textVariant: "text-sm/semibold", textColor: str, animate: false };
    tmp7Result = React4(AnimatedCounterDefault, obj5);
  }
  items1[1] = tmp7Result;
  let tmp5Result = null != unreadCount;
  if (tmp5Result) {
    const obj6 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.messageUnreadCount, children: null };
    const intl2 = util.intl;
    const obj7 = { count: unreadCount };
    const items2 = ["(", intl2.format(util.t.z3PEth, obj7), ")"];
    obj6.children = items2;
    tmp5Result = hasOwnProperty(Text_Text.Text, obj6);
  }
  items1[2] = tmp5Result;
  obj2.children = items1;
  return hasOwnProperty(View, obj2);
}
