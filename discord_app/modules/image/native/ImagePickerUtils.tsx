// discord_app/modules/image/native/ImagePickerUtils.tsx
import { isMetaQuest } from "../../device/MetaQuestUtils.android.tsx";
const result = require("set").fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !isMetaQuest /* isMetaQuest */.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !isMetaQuest /* isMetaQuest */.isMetaQuest();
};