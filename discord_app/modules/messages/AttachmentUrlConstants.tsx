// === Module 4914: set ===

// Module 4914 (set)
import set from "set" /* 2 */;

let set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = set.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;