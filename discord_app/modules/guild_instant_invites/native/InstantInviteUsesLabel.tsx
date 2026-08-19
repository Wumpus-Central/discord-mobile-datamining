// === Module 9972: InstantInviteUsesLabel ===

// Module 9972 (InstantInviteUsesLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4734 */;
import { jsxs } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

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