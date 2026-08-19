// discord_app/modules/guild_role_subscriptions/native/components/ErrorBlock.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import MessageBlock from "MessageBlock.tsx";
import MessageBlockDefault from "MessageBlock.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  return jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children: children.children });
};