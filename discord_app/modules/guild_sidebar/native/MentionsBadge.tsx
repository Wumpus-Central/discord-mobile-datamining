// === Module 15490: MentionsBadge ===

// Module 15490 (MentionsBadge)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(Button.Badge, { value, isMentionLowImportance });
};