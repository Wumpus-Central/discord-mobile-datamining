// === Module 12018: ForumPostMessageCount ===

// Module 12018 (ForumPostMessageCount)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ChatIcon from "ChatIcon" /* 5071 */;
import ForumHooks from "ForumHooks" /* 7885 */;
import AnimatedCounterDefault from "AnimatedCounter" /* 11316 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { tintColor: nativeDefault.colors.ICON_MUTED, marginEnd: 4, marginTop: null };
let PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
createStyles = { iconRead: createStyles, iconUnread: null, messageUnreadCount: null, container: null, marginTop: num };
let obj1 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginEnd: 4, marginTop: null };
PlatformUtils = fn(1115);
let num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
obj1.marginTop = num2;
createStyles.iconUnread = obj1;
createStyles.messageUnreadCount = { marginStart: 4 };
createStyles.container = { flexDirection: "row", alignItems: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageCount.tsx");

export default function ForumPostMessageCount(hasUnreads) {
  hasUnreads = hasUnreads.hasUnreads;
  ({ thread, containerStyle } = hasUnreads);
  const tmp = closure_6();
  let obj = ForumHooks;
  messageCount = obj.useMessageCount(thread);
  ({ messageCountText, unreadCount } = messageCount);
  let str = "text-muted";
  ({ isMaxMessageCount, messageCount } = messageCount);
  if (hasUnreads) {
    str = "text-default";
  }
  obj = { style: null, accessibilityLabel: null, children: null };
  const items = [tmp.container, containerStyle];
  obj.style = items;
  const intl = tmp2(1114).intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t["8M0DrB"], { count: messageCountText });
  obj = { size: "xs", style: hasUnreads ? tmp.iconUnread : tmp.iconRead, color: null };
  let str2 = "icon-muted";
  if (hasUnreads) {
    str2 = "interactive-text-default";
  }
  obj.color = str2;
  const items1 = [React4(ChatIcon.ChatIcon, obj), , ];
  if (isMaxMessageCount) {
    const obj1 = { variant: "text-sm/semibold", color: str, children: messageCountText };
    let tmp7Result = tmp7(tmp2(4556).Text, obj1);
  } else {
    const obj2 = { count: messageCount, textVariant: "text-sm/semibold", textColor: str, animate: false };
    tmp7Result = tmp7(AnimatedCounterDefault, obj2);
  }
  items1[1] = tmp7Result;
  let tmp5Result = null != unreadCount;
  if (tmp5Result) {
    const obj3 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.messageUnreadCount, children: null };
    const intl2 = tmp2(1114).intl;
    const obj4 = { count: unreadCount };
    const items2 = ["(", intl2.format(tmp2(1114).t.z3PEth, obj4), ")"];
    obj3.children = items2;
    tmp5Result = tmp5(tmp2(4556).Text, obj3);
  }
  items1[2] = tmp5Result;
  obj.children = items1;
  return hasOwnProperty(View, obj);
};