// discord_app/modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx
import "noop";
import { jsxs } from "jsxProd";
import { Text } from "../../../design/components/Text/native/Text.tsx";

const require = arg1;
const result = require("Text").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default function InstantInviteUsesLabel(style) {
  let maxUses;
  let uses;
  ({ uses, maxUses } = style);
  let combined = uses;
  if (0 !== maxUses) {
    const _HermesInternal = HermesInternal;
    combined = "" + uses + "/" + maxUses;
  }
  const children = ["Uses: ", combined];
  return jsxs(Text /* Text */.Text, { variant: "text-md/semibold", color: "text-default", style: style.style, children });
};