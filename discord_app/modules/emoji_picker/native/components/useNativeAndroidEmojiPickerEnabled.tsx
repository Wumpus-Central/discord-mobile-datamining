import { set } from "../../../../utils/PlatformUtils.tsx";
import { databaseName } from "../../../app_database/system/DatabaseManager.tsx";
// discord_app/modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("databaseName").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = set /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != databaseName.database(id.getId());
    const obj2 = databaseName;
  }
  return isAndroidResult;
};