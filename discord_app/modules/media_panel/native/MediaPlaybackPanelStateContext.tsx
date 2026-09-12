// === Module 17332: MediaPlaybackPanelStateContext ===

// Module 17332 (MediaPlaybackPanelStateContext)
import noop from "module_19" /* 19 */;

const obj = { mode: null, setMode: null, morphablePanelMode: null, wrapperDimensions: null, useReducedMotion: null, pipState: null, pipAvoidanceSpecs: null, dismissToPipGestureRef: null, dismissPanel: null, scrollPosition: null, canShowPIP: null, lockScrolling: null, wrapperOffset: null };
let ReanimatedHelperTypes = fn(7177);
obj.mode = ReanimatedHelperTypes.createFakeSharedValue(fn(14625).MediaPlaybackPanelModes.PIP);
obj.setMode = function setMode() {
  const error = new Error("MediaPlaybackPanelModes.Provider.setMode: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7177);
obj.morphablePanelMode = ReanimatedHelperTypes.createFakeSharedValue(fn(12403).MorphablePanelModes.PIP);
ReanimatedHelperTypes = fn(7177);
obj.wrapperDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 });
ReanimatedHelperTypes = fn(7177);
obj.useReducedMotion = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7177);
obj.pipState = ReanimatedHelperTypes.createFakeSharedValue({ x: -1, y: -1 });
ReanimatedHelperTypes = fn(7177);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
obj.dismissToPipGestureRef = { current: "r" };
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7177);
obj.scrollPosition = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7177);
obj.canShowPIP = ReanimatedHelperTypes.createFakeSharedValue(true);
ReanimatedHelperTypes = fn(7177);
obj.lockScrolling = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7177);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelStateContext.tsx");

export default context;