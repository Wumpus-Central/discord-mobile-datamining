// === Module 16994: ConjureChatRestore ===

// Module 16994 (ConjureChatRestore)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/history/ConjureChatRestore.tsx");

export const turnRestoreEntry = function turnRestoreEntry(message) {
  let tmp = null;
  if ("assistant" === message.role) {
    tmp = null;
    if (null != message.sourceSha) {
      const obj = { sha: message.sourceSha, authorName: "", authorEmail: "", authoredAt: null, subject: null };
      const _Date = Date;
      const date = new Date(message.created_at);
      obj.authoredAt = date.toISOString();
      obj.subject = message.content;
      tmp = obj;
    }
  }
  return tmp;
};
export const proposalRestoreEntry = function proposalRestoreEntry(sha) {
  return { sha: sha.sha, authorName: "", authorEmail: "", authoredAt: sha.authored_at, subject: sha.subject };
};