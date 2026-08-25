// === Module 8732: ConversationPreviewBlockedMessage ===

// Module 8732 (ConversationPreviewBlockedMessage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4376 */;
import Stack from "Stack" /* 4813 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  let obj = { direction: "horizontal", spacing: ThemesDefault.space.PX_8, align: "center", children: null };
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = tmp2(8733).DenyIcon;
  } else {
    EyeSlashIcon = tmp2(8650).EyeSlashIcon;
  }
  obj = { size: "sm", color: ThemesDefault.colors.TEXT_MUTED };
  const items = [closure_3(EyeSlashIcon, obj), ];
  const intl = tmp2(1236).intl;
  const t = tmp2(1236).t;
  obj = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp6 ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = closure_3(Text.Text, obj);
  obj[3] = items;
  return closure_4(Stack.Stack, obj);
};