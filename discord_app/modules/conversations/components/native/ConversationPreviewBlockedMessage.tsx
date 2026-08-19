// === Module 12693: ConversationPreviewBlockedMessage ===

// Module 12693 (ConversationPreviewBlockedMessage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 8605 */;
import DenyIcon from "DenyIcon" /* 10598 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  let obj = { direction: "horizontal", spacing: ThemesDefault.space.PX_8, align: "center", children: null };
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = DenyIcon.DenyIcon;
  } else {
    EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
  }
  obj = { size: "sm", color: ThemesDefault.colors.TEXT_MUTED };
  const items = [callback(EyeSlashIcon, obj), ];
  const intl = getSystemLocale.intl;
  const t = getSystemLocale.t;
  obj = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp6 ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = callback(Text.Text, obj);
  obj[3] = items;
  return callback2(Stack.Stack, obj);
};