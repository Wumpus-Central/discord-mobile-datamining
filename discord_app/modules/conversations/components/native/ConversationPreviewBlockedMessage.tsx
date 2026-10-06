// === Module 7598: ConversationPreviewBlockedMessage ===

// Module 7598 (ConversationPreviewBlockedMessage)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 6463 */;
import DenyIcon from "DenyIcon" /* 7599 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let reason;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((reason) => {
  let items;
  let tmp10;
  let tmp4;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  reason = reason.reason;
  if (cResult[0] !== reason) {
    let EyeSlashIcon;
    if ("blocked" === reason) {
      EyeSlashIcon = DenyIcon.DenyIcon;
    } else {
      EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
    }
    const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
    const tmp5Result = _false(EyeSlashIcon, obj2);
    cResult[0] = reason;
    cResult[1] = tmp5Result;
    tmp4 = tmp5Result;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== reason) {
    let uxrh1O;
    const intl = intl2.intl;
    const string = intl.string;
    if ("blocked" === reason) {
      uxrh1O = intl2.t["WPe+xL"];
    } else {
      uxrh1O = intl2.t.uxrh1O;
    }
    const stringResult = string(uxrh1O);
    cResult[2] = reason;
    cResult[3] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp8) {
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp8 };
    const tmp12 = _false(Text_Text.Text, obj3);
    cResult[4] = tmp8;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === tmp4) {
    let tmp13;
    if (cResult[7] === tmp10) {
      tmp13 = cResult[8];
    }
    return tmp13;
  }
  const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: items };
  const Stack = Stack_Stack.Stack;
  items = [tmp4, tmp10];
  const tmp14 = React3(Stack, obj4);
  cResult[6] = tmp4;
  cResult[7] = tmp10;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : ((reason) => {
  let EyeSlashIcon;
  let items;
  reason = reason.reason;
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: items };
  const Stack = Stack_Stack.Stack;
  if ("blocked" === reason) {
    EyeSlashIcon = DenyIcon.DenyIcon;
  } else {
    EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
  }
  items = [, ];
  const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
  items[0] = _false(EyeSlashIcon, obj2);
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  const obj3 = { variant: "text-md/normal", color: "text-muted", children: string("blocked" === reason ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = _false(Text, obj3);
  return React3(Stack, obj);
});
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default tmp4;