// === Module 9896: useNativeAndroidEmojiPickerEnabled ===

// Module 9896 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2095 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != DatabaseManagerDefault.database(AuthenticationStore.getId());
  }
  return isAndroidResult;
};