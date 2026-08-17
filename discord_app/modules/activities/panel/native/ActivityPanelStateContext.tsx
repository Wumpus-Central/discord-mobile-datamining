// discord_app/modules/activities/panel/native/ActivityPanelStateContext.tsx
import createFakeSharedValue from "../../../reanimated/ReanimatedHelperTypes.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

const obj = {
  mode: require("ActivityPanelModes").ActivityPanelModes.PANEL,
  setMode() {
    error = new Error("ActivityPanelStateContextType.Provider.setMode: not called within a context provider");
    throw error;
  },
  wrapperDimensions: { width: 9, height: 16, isLandscape: false, isWindowLandscape: false },
  pipState: null,
  pipAvoidanceSpecs: null,
  wrapperOffset: null,
  useActivityWebViewLock: null
};
obj[3] = createFakeSharedValue.createFakeSharedValue({ x: -1, y: -1 });
obj[4] = createFakeSharedValue.createFakeSharedValue({ top: 0, bottom: 0 });
obj[5] = createFakeSharedValue.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
obj[6] = function useActivityWebViewLock() {
  return true;
};
const context = importAllResult.createContext(obj);
const result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityPanelStateContext.tsx");

export default context;
export const activityPanelStateContextDefault = obj;