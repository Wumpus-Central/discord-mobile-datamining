// === Module 11384: ErrorBlock ===

// Module 11384 (ErrorBlock)
import noopAll from "noop" /* 19 */;
import MessageBlock from "MessageBlock" /* 11385 */;
import MessageBlockDefault from "MessageBlock" /* 11385 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  return jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children: children.children });
};