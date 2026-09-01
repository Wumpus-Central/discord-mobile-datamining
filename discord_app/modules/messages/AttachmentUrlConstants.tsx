// discord_app/modules/messages/AttachmentUrlConstants.tsx
import set from "../../../_runtime/00002_set.js";

let set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = set.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
