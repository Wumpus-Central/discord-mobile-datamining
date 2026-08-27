// === Module 16714: setMode ===

// Module 16714 (setMode)
import createFakeSharedValue from "createFakeSharedValue" /* 7730 */;
import importAllResult from "noop" /* 19 */;

const obj = { mode: null, setMode: null, morphablePanelMode: null, wrapperDimensions: null, useReducedMotion: null, pipState: null, pipAvoidanceSpecs: null, dismissToPipGestureRef: null, dismissPanel: null, scrollPosition: null, canShowPIP: null, lockScrolling: null, wrapperOffset: null };
obj[0] = createFakeSharedValue.createFakeSharedValue(require("MediaPlaybackPanelModes").MediaPlaybackPanelModes.PIP);
obj[1] = function setMode() {
  error = new Error("MediaPlaybackPanelModes.Provider.setMode: not called within a context provider");
  throw error;
};
obj[2] = createFakeSharedValue.createFakeSharedValue(require("MIN_PAN_GESTURE_MOVE").MorphablePanelModes.PIP);
obj[3] = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0 });
obj[4] = createFakeSharedValue.createFakeSharedValue(false);
obj[5] = createFakeSharedValue.createFakeSharedValue({ x: -1, y: -1 });
obj[6] = createFakeSharedValue.createFakeSharedValue({ top: 0, bottom: 0 });
obj[7] = { current: "r" };
obj[8] = function dismissPanel() {
  error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
obj[9] = require("module_0");
obj[10] = createFakeSharedValue.createFakeSharedValue(true);
obj[11] = createFakeSharedValue.createFakeSharedValue(false);
obj[12] = createFakeSharedValue.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
const context = importAllResult.createContext(obj);
const result = require("set").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelStateContext.tsx");

export default context;