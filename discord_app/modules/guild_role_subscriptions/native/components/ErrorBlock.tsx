// discord_app/modules/guild_role_subscriptions/native/components/ErrorBlock.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("MessageBlock").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: null, children: null };
  obj[0] = require("MessageBlock.tsx") /* MessageBlock */.MessageBlockColors.RED;
  obj[1] = children.children;
  return jsx(require("MessageBlock.tsx"), { color: null, children: null });
};