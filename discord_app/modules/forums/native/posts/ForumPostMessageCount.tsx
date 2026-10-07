// === Module 11646: ForumPostMessageCount ===

// Module 11646 (ForumPostMessageCount)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import ChatIcon from "ChatIcon" /* 5862 */;
import ForumHooks from "ForumHooks" /* 7539 */;
import AnimatedCounterDefault from "AnimatedCounter" /* 11083 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { tintColor: nativeDefault.colors.ICON_MUTED, marginEnd: 4, marginTop: null };
let PlatformUtils = fn(1369);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
let obj4 = { iconRead: obj2, iconUnread: null, messageUnreadCount: null, container: null };
obj2.marginTop = num;
let obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginEnd: 4, marginTop: null };
PlatformUtils = fn(1369);
let num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
obj5.marginTop = num2;
obj4.iconUnread = obj5;
obj4.messageUnreadCount = { marginStart: 4 };
obj4.container = { flexDirection: "row", alignItems: "center" };
let closure_6 = createStyles.createStyles(obj4);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageCount.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  const cResult = c.c(22);
  ({ hasUnreads, containerStyle } = thread);
  const tmp4 = closure_6();
  const messageCount1 = ForumHooks.useMessageCount(thread.thread);
  ({ messageCountText, isMaxMessageCount, messageCount, unreadCount } = messageCount1);
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp4.container) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== messageCountText) {
      const intl = util.intl;
      const obj3 = { count: messageCountText };
      const formatToPlainStringResult = intl.formatToPlainString(util.t["8M0DrB"], obj3);
      cResult[3] = messageCountText;
      cResult[4] = formatToPlainStringResult;
      let tmp7 = formatToPlainStringResult;
    } else {
      tmp7 = cResult[4];
    }
    const tmp9 = hasUnreads ? tmp4.iconUnread : tmp4.iconRead;
    let str2 = "icon-muted";
    if (hasUnreads) {
      str2 = "interactive-text-default";
    }
    if (cResult[5] === tmp9) {
      if (cResult[6] === str2) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === str) {
        if (cResult[9] === isMaxMessageCount) {
          if (cResult[10] === messageCount) {
            if (cResult[11] === messageCountText) {
              if (cResult[13] === tmp4.messageUnreadCount) {
                if (cResult[14] === unreadCount) {
                  let tmp18 = cResult[15];
                }
                if (cResult[16] === tmp6) {
                  if (cResult[17] === tmp7) {
                    if (cResult[18] === tmp10) {
                      if (cResult[19] === tmp13) {
                        if (cResult[20] === tmp18) {
                          let tmp22 = cResult[21];
                        }
                        return tmp22;
                      }
                    }
                  }
                }
                const obj4 = { style: tmp6, accessibilityLabel: tmp7, children: null };
                const items = [tmp10, tmp13, tmp18];
                obj4.children = items;
                const tmp25 = hasOwnProperty(View, obj4);
                cResult[16] = tmp6;
                cResult[17] = tmp7;
                cResult[18] = tmp10;
                cResult[19] = tmp13;
                cResult[20] = tmp18;
                cResult[21] = tmp25;
                tmp22 = tmp25;
              }
              let tmp20 = null != unreadCount;
              if (tmp20) {
                const obj5 = { variant: "text-sm/semibold", color: "text-brand", style: tmp4.messageUnreadCount, children: null };
                const intl2 = util.intl;
                const obj6 = { count: unreadCount };
                const items1 = ["(", intl2.format(util.t.z3PEth, obj6), ")"];
                obj5.children = items1;
                tmp20 = hasOwnProperty(Text_Text.Text, obj5);
              }
              cResult[13] = tmp4.messageUnreadCount;
              cResult[14] = unreadCount;
              cResult[15] = tmp20;
              tmp18 = tmp20;
            }
          }
        }
      }
      if (isMaxMessageCount) {
        const obj7 = { variant: "text-sm/semibold", color: str, children: messageCountText };
        let tmp14Result = React4(Text_Text.Text, obj7);
      } else {
        const obj8 = { count: messageCount, textVariant: "text-sm/semibold", textColor: str, animate: false };
        tmp14Result = React4(AnimatedCounterDefault, obj8);
      }
      cResult[8] = str;
      cResult[9] = isMaxMessageCount;
      cResult[10] = messageCount;
      cResult[11] = messageCountText;
      cResult[12] = tmp14Result;
    }
    const obj9 = { size: "xs", style: tmp9, color: str2 };
    const tmp12 = React4(ChatIcon.ChatIcon, obj9);
    cResult[5] = tmp9;
    cResult[6] = str2;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  const items2 = [tmp4.container, containerStyle];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.container;
  cResult[2] = items2;
  tmp6 = items2;
}) : ((hasUnreads) => {
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
  const items1 = [React4(ChatIcon.ChatIcon, obj3), , ];
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
});