// discord_app/modules/activities/panel/native/ActivityPanelStateContext.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const obj = {
  mode: fn(9505).ActivityPanelModes.PANEL,
  setMode() {
    const error = new Error("ActivityPanelStateContextType.Provider.setMode: not called within a context provider");
    throw error;
  },
  wrapperDimensions: { width: 9, height: 16, isLandscape: false, isWindowLandscape: false },
  pipState: null,
  pipAvoidanceSpecs: null,
  wrapperOffset: null,
  useActivityWebViewLock: null,
};
let ReanimatedHelperTypes = fn(7074);
obj.pipState = ReanimatedHelperTypes.createFakeSharedValue({ x: -1, y: -1 });
ReanimatedHelperTypes = fn(7074);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
ReanimatedHelperTypes = fn(7074);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
obj.useActivityWebViewLock = function useActivityWebViewLock() {
  return true;
};
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelStateContext.tsx");

export default context;
export const activityPanelStateContextDefault = obj;
