// discord_app/modules/image/native/ImagePickerUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";

const result = set.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !isMetaQuest.isMetaQuest();
};
