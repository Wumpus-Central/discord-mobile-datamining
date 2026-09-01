// discord_app/modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import { jsxs } from "../../../../_runtime/react/00021_jsxProd.js";

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
}
