// === Module 5386: shouldRemoveSelfMention ===

// Module 5386 (shouldRemoveSelfMention)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const MessageTypesSets = ME.MessageTypesSets;
const result = obj132.fileFinishedImporting("modules/messages/shouldRemoveSelfMention.tsx");

export default function shouldRemoveSelfMention(type) {
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
};