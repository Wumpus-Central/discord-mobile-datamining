// discord_app/modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx
import set from "../../../../utils/PlatformUtils.tsx";
import databaseNameDefault from "../../../app_database/system/DatabaseManager.tsx";
import closure_3 from "../../../../stores/AuthenticationStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = set.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != databaseNameDefault.database(id.getId());
    const obj2 = databaseNameDefault;
  }
  return isAndroidResult;
};