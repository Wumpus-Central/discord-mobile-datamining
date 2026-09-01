// discord_app/modules/screen/native/useFontScale.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";
import closure_3 from "DimensionsStore.android.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].fontScale;
};
export const useFontScale = function useFontScale() {
  appEntryKey = appEntryKey(1496).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
};
