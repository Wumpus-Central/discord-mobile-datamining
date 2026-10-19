// === Module 11632: ConjureAttachmentTypes ===

// Module 11632 (ConjureAttachmentTypes)
import size from "module_2" /* 2 */;

const set = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
let c1 = 5242880;
let c2 = 52428800;
const result = size.fileFinishedImporting("modules/conjure/chat/ConjureAttachmentTypes.tsx");

export const CONJURE_VIEWABLE_IMAGE_TYPES = set;
export const CONJURE_MAX_IMAGE_ATTACHMENT_BYTES = 5242880;
export const CONJURE_MAX_ATTACHMENT_BYTES = 52428800;
export const CONJURE_MAX_ATTACHMENTS_PER_MESSAGE = 10;
export const CONJURE_STAGED_ATTACHMENT_TTL_MS = 3600000;
export const conjureAttachmentLimit = function conjureAttachmentLimit(contentType) {
  return set.has(contentType) ? c1 : c2;
};
export const isConjureAttachmentWithinLimit = function isConjureAttachmentWithinLimit(size, contentType) {
  return size <= (set.has(contentType) ? c1 : c2);
};
export const formatConjureAttachmentLimit = function formatConjureAttachmentLimit(tmpResult2) {
  return "" + Math.round(tmpResult2 / 1048576) + " MB";
};