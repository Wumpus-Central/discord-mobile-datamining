// === Module 11646: ForumPostMessageCount ===

// Module 11646 (ForumPostMessageCount)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import ChatIcon2 from "ChatIcon" /* 5862 */;
import ForumHooks from "ForumHooks" /* 7539 */;
import AnimatedCounterDefault from "AnimatedCounter" /* 11083 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let num;
let num2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { tintColor: nativeDefault.colors.ICON_MUTED, marginEnd: 4, marginTop: num };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
let obj2 = { iconRead: obj, iconUnread: obj3, messageUnreadCount: { marginStart: 4 }, container: { flexDirection: "row", alignItems: "center" } };
obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginEnd: 4, marginTop: num2 };
PlatformUtils = PlatformUtils_mod;
num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
let closure_6 = createStyles(obj2);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  let containerStyle;
  let hasUnreads;
  let isMaxMessageCount;
  let items;
  let items1;
  let messageCount;
  let messageCountText;
  let unreadCount;
  const obj = react2;
  const cResult = obj.c(22);
  ({ hasUnreads, containerStyle } = thread);
  thread = thread.thread;
  const tmp4 = closure_6();
  const obj2 = ForumHooks;
  const messageCount1 = obj2.useMessageCount(thread);
  ({ messageCountText, isMaxMessageCount, messageCount, unreadCount } = messageCount1);
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  if (cResult[0] === containerStyle) {
    let tmp6;
    let tmp7;
    if (cResult[1] === tmp4.container) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== messageCountText) {
      const intl = intl3.intl;
      const obj3 = { count: messageCountText };
      const formatToPlainStringResult = intl.formatToPlainString(intl3.t["8M0DrB"], obj3);
      cResult[3] = messageCountText;
      cResult[4] = formatToPlainStringResult;
      tmp7 = formatToPlainStringResult;
    } else {
      tmp7 = cResult[4];
    }
    const tmp9 = hasUnreads ? tmp4.iconUnread : tmp4.iconRead;
    let str2 = "icon-muted";
    if (hasUnreads) {
      str2 = "interactive-text-default";
    }
    if (cResult[5] === tmp9) {
      let tmp10;
      let tmp14Result;
      if (cResult[6] === str2) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === str) {
        if (cResult[9] === isMaxMessageCount) {
          if (cResult[10] === messageCount) {
            let tmp13;
            if (cResult[11] === messageCountText) {
              tmp13 = cResult[12];
            }
            if (cResult[13] === tmp4.messageUnreadCount) {
              let tmp17;
              if (cResult[14] === unreadCount) {
                tmp17 = cResult[15];
              }
              if (cResult[16] === tmp6) {
                if (cResult[17] === tmp7) {
                  if (cResult[18] === tmp10) {
                    if (cResult[19] === tmp13) {
                      let tmp21;
                      if (cResult[20] === tmp17) {
                        tmp21 = cResult[21];
                      }
                      return tmp21;
                    }
                  }
                }
              }
              const obj4 = { style: tmp6, accessibilityLabel: tmp7, children: items };
              items = [tmp10, tmp13, tmp17];
              const tmp24 = hasOwnProperty(View, obj4);
              cResult[16] = tmp6;
              cResult[17] = tmp7;
              cResult[18] = tmp10;
              cResult[19] = tmp13;
              cResult[20] = tmp17;
              cResult[21] = tmp24;
              tmp21 = tmp24;
            }
            let tmp19 = null != unreadCount;
            if (tmp19) {
              const obj5 = { variant: "text-sm/semibold", color: "text-brand", style: tmp4.messageUnreadCount, children: items1 };
              const Text = Text_Text.Text;
              const intl2 = intl3.intl;
              const obj6 = { count: unreadCount };
              items1 = ["(", intl2.format(intl3.t.z3PEth, obj6), ")"];
              tmp19 = hasOwnProperty(Text, obj5);
            }
            cResult[13] = tmp4.messageUnreadCount;
            cResult[14] = unreadCount;
            cResult[15] = tmp19;
            tmp17 = tmp19;
          }
        }
      }
      if (isMaxMessageCount) {
        const obj7 = { variant: "text-sm/semibold", color: str, children: messageCountText };
        tmp14Result = React3(Text_Text.Text, obj7);
      } else {
        const obj8 = { count: messageCount, textVariant: "text-sm/semibold", textColor: str, animate: false };
        tmp14Result = React3(AnimatedCounterDefault, obj8);
      }
      cResult[8] = str;
      cResult[9] = isMaxMessageCount;
      cResult[10] = messageCount;
      cResult[11] = messageCountText;
      cResult[12] = tmp14Result;
      tmp13 = tmp14Result;
    }
    const obj9 = { size: "xs", style: tmp9, color: str2 };
    const tmp12 = React3(ChatIcon2.ChatIcon, obj9);
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
  let containerStyle;
  let intl;
  let isMaxMessageCount;
  let items;
  let items1;
  let items2;
  let messageCount;
  let messageCountText;
  let str2;
  let thread;
  let tmp7Result;
  let unreadCount;
  hasUnreads = hasUnreads.hasUnreads;
  ({ thread, containerStyle } = hasUnreads);
  const tmp = closure_6();
  const obj = ForumHooks;
  const messageCount1 = obj.useMessageCount(thread);
  ({ messageCountText, unreadCount } = messageCount1);
  let str = "text-muted";
  ({ isMaxMessageCount, messageCount } = messageCount1);
  if (hasUnreads) {
    str = "text-default";
  }
  const obj2 = { style: items, accessibilityLabel: intl.formatToPlainString(intl3.t["8M0DrB"], { count: messageCountText }), children: items1 };
  items = [tmp.container, containerStyle];
  intl = intl3.intl;
  const obj3 = { size: "xs", style: hasUnreads ? tmp.iconUnread : tmp.iconRead, color: str2 };
  str2 = "icon-muted";
  const ChatIcon = ChatIcon2.ChatIcon;
  if (hasUnreads) {
    str2 = "interactive-text-default";
  }
  items1 = [React3(ChatIcon, obj3), , ];
  if (isMaxMessageCount) {
    const obj4 = { variant: "text-sm/semibold", color: str, children: messageCountText };
    tmp7Result = React3(Text_Text.Text, obj4);
  } else {
    const obj5 = { count: messageCount, textVariant: "text-sm/semibold", textColor: str, animate: false };
    tmp7Result = React3(AnimatedCounterDefault, obj5);
  }
  items1[1] = tmp7Result;
  let tmp5Result = null != unreadCount;
  if (tmp5Result) {
    const obj6 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.messageUnreadCount, children: items2 };
    const Text = Text_Text.Text;
    const intl2 = intl3.intl;
    const obj7 = { count: unreadCount };
    items2 = ["(", intl2.format(intl3.t.z3PEth, obj7), ")"];
    tmp5Result = hasOwnProperty(Text, obj6);
  }
  items1[2] = tmp5Result;
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageCount.tsx");

export default tmp5;