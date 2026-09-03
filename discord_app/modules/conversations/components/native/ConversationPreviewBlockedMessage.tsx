// === Module 7849: ConversationPreviewBlockedMessage ===

// Module 7849 (ConversationPreviewBlockedMessage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Text from "Text" /* 4474 */;
import Stack from "Stack" /* 4927 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  let obj = { direction: "horizontal", spacing: ThemesDefault.space.PX_8, align: "center", children: null };
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = tmp2(7850).DenyIcon;
  } else {
    EyeSlashIcon = tmp2(7753).EyeSlashIcon;
  }
  obj = { size: "sm", color: ThemesDefault.colors.TEXT_MUTED };
  const items = [closure_3(EyeSlashIcon, obj), ];
  const intl = tmp2(1233).intl;
  const t = tmp2(1233).t;
  obj = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp6 ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = closure_3(Text.Text, obj);
  obj[3] = items;
  return closure_4(Stack.Stack, obj);
};