// discord_app/modules/image/native/ImagePickerUtils.tsx
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
