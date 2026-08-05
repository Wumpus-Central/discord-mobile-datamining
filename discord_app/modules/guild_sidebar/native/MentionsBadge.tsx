// discord_app/modules/guild_sidebar/native/MentionsBadge.tsx
import "noop";
import { jsx } from "jsxProd";
import { Button } from "../../../design/void/native.tsx";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  let isMentionLowImportance;
  let mentionsCount;
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(Button /* Button */.Badge, { value, isMentionLowImportance });
};