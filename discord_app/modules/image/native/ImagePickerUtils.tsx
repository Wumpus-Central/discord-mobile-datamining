// === Module 5047: isActionPickSupported ===

// Module 5047 (isActionPickSupported)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = set.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !isMetaQuest.isMetaQuest();
};