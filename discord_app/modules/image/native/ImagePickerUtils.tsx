// === Module 7743: ImagePickerUtils ===

// Module 7743 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !MetaQuestUtils.isMetaQuest();
};