// === Module 9343: useNativeAndroidEmojiPickerEnabled ===

// Module 9343 (useNativeAndroidEmojiPickerEnabled)
import obj132 from "obj132" /* 500 */;
import databaseNameDefault from "databaseName" /* 1971 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = obj132.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != databaseNameDefault.database(id.getId());
  }
  return isAndroidResult;
};