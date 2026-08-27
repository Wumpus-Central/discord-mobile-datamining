// === Module 8054: didReplyMention ===

// Module 8054 (didReplyMention)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/replies/didReplyMention.tsx");

export default function didReplyMention(mentions, author) {
  let hasItem = null != author;
  if (hasItem) {
    mentions = mentions.mentions;
    hasItem = mentions.includes(author.author.id);
  }
  return hasItem;
};