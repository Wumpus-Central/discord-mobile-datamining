// === Module 11507: ErrorBlock ===

// Module 11507 (ErrorBlock)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("MessageBlock").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: null, children: null };
  obj[0] = require(11508) /* MessageBlock */.MessageBlockColors.RED;
  obj[1] = children.children;
  return jsx(importDefault(11508), { color: null, children: null });
};