// === Module 12260: ConjureAttachmentTypes ===

// Module 12260 (ConjureAttachmentTypes)
import FileSizeUtils from "FileSizeUtils" /* 6438 */;
import size from "module_2" /* 2 */;

const set = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
let c3 = 5242880;
let c4 = 52428800;
const result = size.fileFinishedImporting("modules/conjure/chat/ConjureAttachmentTypes.tsx");

export const CONJURE_VIEWABLE_IMAGE_TYPES = set;
export const CONJURE_MAX_IMAGE_ATTACHMENT_BYTES = 5242880;
export const CONJURE_MAX_ATTACHMENT_BYTES = 52428800;
export const CONJURE_MAX_ATTACHMENTS_PER_MESSAGE = 10;
export const CONJURE_STAGED_ATTACHMENT_TTL_MS = 3600000;
export function conjureAttachmentLimit(contentType) {
  return set.has(contentType) ? c3 : c4;
}
export function isConjureAttachmentWithinLimit(size, contentType) {
  return size <= (set.has(contentType) ? c3 : c4);
}
export function formatConjureAttachmentLimit(tmpResult2) {
  return FileSizeUtils.formatKbSize(tmpResult2, { useKibibytes: true, useSpace: true });
}