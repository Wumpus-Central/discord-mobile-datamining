// discord_app/modules/screen/native/useFontScale.tsx
import noop from "../../../../_runtime/00019_noop.js";
import getDimensionsStoreStateForEntry from "DimensionsStore.android.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].fontScale;
};
export const useFontScale = function useFontScale() {
  appEntryKey = appEntryKey(1497).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
};