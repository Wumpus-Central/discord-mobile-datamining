// discord_app/modules/safe_area/useSafeAreaInsets.native.tsx
const result = require("set").fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require("../window/native/AppEntryKeyContext.tsx").useAppEntryKey();
  return require("SafeAreaStore.native.tsx")((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require("../window/native/AppEntryKeyContext.tsx") /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return require("SafeAreaStore.native.tsx").getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};