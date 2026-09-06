// === Module 17223: MediaPlaybackPanelStateContext ===

// Module 17223 (MediaPlaybackPanelStateContext)
import noop from "module_19" /* 19 */;

const obj = { mode: null, setMode: null, morphablePanelMode: null, wrapperDimensions: null, useReducedMotion: null, pipState: null, pipAvoidanceSpecs: null, dismissToPipGestureRef: null, dismissPanel: null, scrollPosition: null, canShowPIP: null, lockScrolling: null, wrapperOffset: null };
let ReanimatedHelperTypes = fn(7074);
obj.mode = ReanimatedHelperTypes.createFakeSharedValue(fn(14537).MediaPlaybackPanelModes.PIP);
obj.setMode = function setMode() {
  const error = new Error("MediaPlaybackPanelModes.Provider.setMode: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7074);
obj.morphablePanelMode = ReanimatedHelperTypes.createFakeSharedValue(fn(12274).MorphablePanelModes.PIP);
ReanimatedHelperTypes = fn(7074);
obj.wrapperDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 });
ReanimatedHelperTypes = fn(7074);
obj.useReducedMotion = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7074);
obj.pipState = ReanimatedHelperTypes.createFakeSharedValue({ x: -1, y: -1 });
ReanimatedHelperTypes = fn(7074);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
obj.dismissToPipGestureRef = { current: "Array" };
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7074);
obj.scrollPosition = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7074);
obj.canShowPIP = ReanimatedHelperTypes.createFakeSharedValue(true);
ReanimatedHelperTypes = fn(7074);
obj.lockScrolling = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7074);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelStateContext.tsx");

export default context;