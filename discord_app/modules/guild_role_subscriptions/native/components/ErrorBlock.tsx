// discord_app/modules/guild_role_subscriptions/native/components/ErrorBlock.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import MessageBlock from "MessageBlock.tsx";
import MessageBlockDefault from "MessageBlock.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: MessageBlock.MessageBlockColors.RED, children: children.children };
  return jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children: children.children });
};