// discord_app/modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("databaseName").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = require("../../../../utils/PlatformUtils.tsx") /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != require("../../../app_database/system/DatabaseManager.tsx").database(id.getId());
    const obj2 = require("../../../app_database/system/DatabaseManager.tsx");
  }
  return isAndroidResult;
};