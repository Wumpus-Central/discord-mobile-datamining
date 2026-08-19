// === Module 8424: didReplyMention ===

// Module 8424 (didReplyMention)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/replies/didReplyMention.tsx");

export default function didReplyMention(mentions, author) {
  let hasItem = null != author;
  if (hasItem) {
    mentions = mentions.mentions;
    hasItem = mentions.includes(author.author.id);
  }
  return hasItem;
};