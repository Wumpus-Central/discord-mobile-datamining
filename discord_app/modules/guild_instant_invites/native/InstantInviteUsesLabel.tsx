// === Module 10948: InstantInviteUsesLabel ===

// Module 10948 (InstantInviteUsesLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4556 */;
import { jsxs } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default function InstantInviteUsesLabel(style) {
  ({ uses, maxUses } = style);
  let combined = uses;
  if (0 !== maxUses) {
    const _HermesInternal = HermesInternal;
    combined = "" + uses + "/" + maxUses;
  }
  const children = ["Uses: ", combined];
  return jsxs(Text.Text, { variant: "text-md/semibold", color: "text-default", style: style.style, children });
};