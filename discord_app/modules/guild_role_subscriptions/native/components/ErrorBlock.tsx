// === Module 11693: ErrorBlock ===

// Module 11693 (ErrorBlock)
import noopAll from "noop" /* 19 */;
import MessageBlock from "MessageBlock" /* 11694 */;
import MessageBlockDefault from "MessageBlock" /* 11694 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: MessageBlock.MessageBlockColors.RED, children: children.children };
  return jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children: children.children });
};