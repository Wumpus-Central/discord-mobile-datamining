// discord_app/modules/vibegrations/lib/VibegrationsChatRestore.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsChatRestore.tsx");

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
