// discord_app/modules/safe_area/useSafeAreaInsets.native.tsx
import { context } from "../window/native/AppEntryKeyContext.tsx";
import { SafeAreaStore.native } from "SafeAreaStore.native.tsx";
const result = require("set").fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _context.useAppEntryKey();
  return SafeAreaStore.native((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = context /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return SafeAreaStore.native.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};