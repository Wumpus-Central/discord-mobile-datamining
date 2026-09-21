// === Module 8186: ConversationPreviewBlockedMessage ===

// Module 8186 (ConversationPreviewBlockedMessage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import Stack_Stack from "Stack/Stack" /* 5184 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 7211 */;
import DenyIcon from "DenyIcon" /* 8187 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: null };
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = DenyIcon.DenyIcon;
  } else {
    EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
  }
  const items = [React3(EyeSlashIcon, { size: "sm", color: nativeDefault.colors.TEXT_MUTED }), ];
  const intl = util.intl;
  const t = util.t;
  const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
  items[1] = React3(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: intl.string("blocked" === reason.reason ? t["WPe+xL"] : t.uxrh1O) });
  obj.children = items;
  return React4(Stack_Stack.Stack, obj);
};