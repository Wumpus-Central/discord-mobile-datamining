// === Module 8214: ImagePickerUtils ===

// Module 8214 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export function isActionPickSupported() {
  return !MetaQuestUtils.isMetaQuest();
}
export function isImageCaptureIntentSupported() {
  return !MetaQuestUtils.isMetaQuest();
}