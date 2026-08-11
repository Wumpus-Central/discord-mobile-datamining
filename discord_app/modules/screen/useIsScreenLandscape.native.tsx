// discord_app/modules/screen/useIsScreenLandscape.native.tsx
import noop from "noop";
import getDimensionsStoreStateForEntry from "getDimensionsStoreStateForEntry";

const require = arg1;
const result = require("context").fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = function useIsScreenLandscape() {
  appEntryKey = appEntryKey(1496).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
};