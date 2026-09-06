// === Module 16230: MentionsBadge ===

// Module 16230 (MentionsBadge)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1178 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(Button.Badge, { value, isMentionLowImportance });
};