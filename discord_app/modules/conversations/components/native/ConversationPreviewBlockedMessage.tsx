// === Module 7928: ConversationPreviewBlockedMessage ===

// Module 7928 (ConversationPreviewBlockedMessage)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  let obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: null };
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = tmp2(7929).DenyIcon;
  } else {
    EyeSlashIcon = tmp2(6968).EyeSlashIcon;
  }
  obj = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
  const items = [React3(EyeSlashIcon, obj), ];
  const intl = tmp2(1114).intl;
  const t = tmp2(1114).t;
  obj = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp6 ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = React3(Text_Text.Text, obj);
  obj.children = items;
  return React4(Stack_Stack.Stack, obj);
};