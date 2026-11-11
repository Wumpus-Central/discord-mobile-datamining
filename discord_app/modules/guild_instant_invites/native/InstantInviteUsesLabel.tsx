// === Module 10873: InstantInviteUsesLabel ===

// Module 10873 (InstantInviteUsesLabel)
import Text_Text from "Text/Text" /* 5866 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxs = fn(21).jsxs;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default function InstantInviteUsesLabel(style) {
  ({ uses, maxUses } = style);
  let combined = uses;
  if (0 !== maxUses) {
    const _HermesInternal = HermesInternal;
    combined = "" + uses + "/" + maxUses;
  }
  const obj = { variant: "body-md/semibold", color: "text-default", style: style.style, children: null };
  items = ["Uses: ", combined];
  obj.children = items;
  return jsxs(Text_Text.Text, { variant: "body-md/semibold", color: "text-default", style: style.style, children: null });
};