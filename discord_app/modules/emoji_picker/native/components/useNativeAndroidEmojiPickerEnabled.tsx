// === Module 9145: useNativeAndroidEmojiPickerEnabled ===

// Module 9145 (useNativeAndroidEmojiPickerEnabled)
import set from "set" /* 1234 */;
import databaseNameDefault from "databaseName" /* 1972 */;
import closure_3 from "fetchFingerprint" /* 1215 */;

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