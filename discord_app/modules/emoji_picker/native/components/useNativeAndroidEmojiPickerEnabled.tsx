// discord_app/modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx
import obj132 from "../../../../utils/PlatformUtils.tsx";
import databaseNameDefault from "../../../app_database/system/DatabaseManager.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = obj132.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != databaseNameDefault.database(id.getId());
  }
  return isAndroidResult;
};