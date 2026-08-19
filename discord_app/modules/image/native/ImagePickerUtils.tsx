// discord_app/modules/image/native/ImagePickerUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";

const result = obj132.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !isMetaQuest.isMetaQuest();
};