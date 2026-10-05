// discord_app/modules/conjure/history/ConjureChatRestore.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/history/ConjureChatRestore.tsx");

export const turnRestoreEntry = function turnRestoreEntry(message) {
  let date;
  let tmp = null;
  if ("assistant" === message.role) {
    tmp = null;
    if (null != message.sourceSha) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const obj = {
        sha: message.sourceSha,
        authorName: "",
        authorEmail: "",
        authoredAt: date.toISOString(),
        subject: message.content,
      };
      tmp = obj;
      date = new Date(message.created_at);
    }
  }
  return tmp;
};
export const proposalRestoreEntry = function proposalRestoreEntry(sha) {
  return { sha: sha.sha, authorName: "", authorEmail: "", authoredAt: sha.authored_at, subject: sha.subject };
};
