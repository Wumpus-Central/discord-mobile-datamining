// === Module 8139: ImagePickerUtils ===

// Module 8139 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export function isActionPickSupported() {
  return !MetaQuestUtils.isMetaQuest();
}
export function isImageCaptureIntentSupported() {
  return !MetaQuestUtils.isMetaQuest();
}