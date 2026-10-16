// === Module 9694: useNativeAndroidEmojiPickerEnabled ===

// Module 9694 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2111 */;
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