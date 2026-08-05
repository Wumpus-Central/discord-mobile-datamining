// discord_app/modules/image/native/ImagePickerUtils.tsx
const result = require("set").fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !require("../../device/MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !require("../../device/MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest();
};