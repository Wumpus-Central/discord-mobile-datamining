// discord_app/modules/guild_role_subscriptions/native/components/ErrorBlock.tsx
import MessageBlock from "MessageBlock.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const MessageBlockDefault = MessageBlock;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: MessageBlock.MessageBlockColors.RED, children: children.children };
  return jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children: children.children });
}
