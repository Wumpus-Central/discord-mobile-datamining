// discord_app/modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import DatabaseManagerDefault from "../../../app_database/system/DatabaseManager.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx",
);

export default function useNativeAndroidEmojiPickerEnabled() {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (isAndroidResult) {
    const obj2 = DatabaseManagerDefault;
    isAndroidResult = null != obj2.database(AuthenticationStore.getId());
  }
  return isAndroidResult;
}
