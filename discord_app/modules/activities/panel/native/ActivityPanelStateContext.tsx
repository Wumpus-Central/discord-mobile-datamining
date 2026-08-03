// === Module 15927: useActivityWebViewLock ===

// Module 15927 (useActivityWebViewLock)
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import importAllResult from "noop";

const obj = {
  mode: require("ActivityPanelModes").ActivityPanelModes.PANEL,
  setMode() {
    const error = new Error("ActivityPanelStateContextType.Provider.setMode: not called within a context provider");
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
const context = require("noop").createContext(obj);
const result = require("createFakeSharedValue").fileFinishedImporting("modules/activities/panel/native/ActivityPanelStateContext.tsx");

export default context;
export const activityPanelStateContextDefault = obj;