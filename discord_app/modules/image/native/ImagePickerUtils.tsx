// === Module 4852: isActionPickSupported ===

// Module 4852 (isActionPickSupported)
import obj132 from "obj132" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = obj132.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !isMetaQuest.isMetaQuest();
};