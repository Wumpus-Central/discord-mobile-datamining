// discord_app/modules/messages/shouldRemoveSelfMention.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MessageTypesSets = Constants.MessageTypesSets;
const result = size.fileFinishedImporting("modules/messages/shouldRemoveSelfMention.tsx");

export default function shouldRemoveSelfMention(type, arg1) {
  const SELF_MENTIONABLE_SYSTEM = MessageTypesSets.SELF_MENTIONABLE_SYSTEM;
  const hasItem = SELF_MENTIONABLE_SYSTEM.has(type.type);
  let tmp2 = !hasItem;
  if (!hasItem) {
    const author = type.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    tmp2 = id === arg1;
  }
  return tmp2;
}
