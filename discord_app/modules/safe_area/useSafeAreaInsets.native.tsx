// discord_app/modules/safe_area/useSafeAreaInsets.native.tsx
import AppEntryKeyContext from "../window/native/AppEntryKeyContext.tsx";
import SafeAreaStoreDefault from "SafeAreaStore.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return SafeAreaStoreDefault((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
}
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return SafeAreaStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
