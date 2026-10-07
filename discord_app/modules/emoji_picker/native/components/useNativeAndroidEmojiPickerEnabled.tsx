// discord_app/modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import DatabaseManagerDefault from "../../../app_database/system/DatabaseManager.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx",
);

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != DatabaseManagerDefault.database(AuthenticationStore.getId());
  }
  return isAndroidResult;
}
