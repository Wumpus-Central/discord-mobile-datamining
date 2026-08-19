// === Module 11439: dismissPanel ===

// Module 11439 (dismissPanel)
import getTargetCardSizeDefault from "getTargetCardSize" /* 11442 */;
import { VoicePanelModes } from "VoicePanelModes" /* 11440 */;
import VoicePanelControlsModes from "VoicePanelControlsModes" /* 11438 */;
import createFakeSharedValue from "createFakeSharedValue" /* 8126 */;
import importAllResult from "noop" /* 19 */;
import set from "set" /* 2 */;

({ CONTROLS_HEIGHT, VoicePanelControlsModes } = VoicePanelControlsModes);
let obj = { channelId: "context-not-initialized", channelType: "e", connected: "Array", contentDimensions: false, controlsSpecs: null, dismissPanel: null, dismissToPIPGestureRef: null, dragScrolling: null, focused: null, generateStateLocker: null, guildId: null, hideControls: null, isCall: null, isFocusedVideoZoomed: null, layoutManager: null, mode: null, morphablePanelMode: null, mountedCards: null, pipAvoidanceSpecs: null, preJoinContentSize: null, safeArea: null, scrollPosition: null, setControlsMode: null, setFocused: null, setIsFocusedVideoZoomed: null, setMode: null, setShowFloatingCTA: "M14 14H12V15H14V14Z", showControls: null, showFloatingCTA: "", streamOutputSinkStack: "", windowDimensions: null, wrapperDimensions: "default", useReducedMotion: false, wrapperOffset: false, panelCardStillInPIP: false };
obj[2] = createFakeSharedValue.createFakeSharedValue(false);
obj[3] = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0 });
obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false };
obj[4] = createFakeSharedValue.createFakeSharedValue(obj);
obj[5] = function dismissPanel() {
  error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
obj[6] = { current: "r" };
obj[7] = createFakeSharedValue.createFakeSharedValue(false);
obj[8] = createFakeSharedValue.createFakeSharedValue(null);
obj[9] = function generateStateLocker(closure_0) {
  error = new Error("VoicePanelContextType.Provider.generateStateLocker: not called within a context provider");
  throw error;
};
obj[11] = function hideControls() {
  error = new Error("VoicePanelContextType.Provider.hideControls: not called within a context provider");
  throw error;
};
obj[13] = createFakeSharedValue.createFakeSharedValue(false);
obj[14] = new getTargetCardSizeDefault("invalid");
obj[15] = createFakeSharedValue.createFakeSharedValue(VoicePanelModes.PANEL);
obj[16] = createFakeSharedValue.createFakeSharedValue(require("MIN_PAN_GESTURE_MOVE").MorphablePanelModes.PANEL);
let set = new Set();
obj[17] = set;
obj[18] = createFakeSharedValue.createFakeSharedValue({ top: 0, bottom: 0 });
obj[19] = require("module_0");
obj[20] = createFakeSharedValue.createFakeSharedValue(require("EMPTY_SAFE_AREA_INSETS").EMPTY_SAFE_AREA_INSETS);
obj[21] = require("module_0");
obj[22] = function setControlsMode() {
  error = new Error("VoicePanelContextType.Provider.setControlsMode: not called within a context provider");
  throw error;
};
obj[23] = function setFocused() {
  error = new Error("VoicePanelContextType.Provider.setFocused: not called within a context provider");
  throw error;
};
obj[24] = function setIsFocusedVideoZoomed(arg0) {
  error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
obj[25] = function setMode() {
  error = new Error("VoicePanelContextType.Provider.setMode: not called within a context provider");
  throw error;
};
obj[26] = function setShowFloatingCTA(BAD_CONNECTION) {
  error = new Error("VoicePanelContextType.Provider.showFloatingCTA: not called within a context provider");
  throw error;
};
obj[27] = function showControls() {
  error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
obj[28] = createFakeSharedValue.createFakeSharedValue(null);
obj[29] = {};
obj[30] = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0, landscape: false });
obj[31] = createFakeSharedValue.createFakeSharedValue({ drawerWidth: 0, drawerHeight: 0, drawerX: 0, drawerY: 0, pipX: 0, pipY: 0, animated: true, mode: VoicePanelModes.PANEL });
obj[32] = createFakeSharedValue.createFakeSharedValue(false);
obj[33] = createFakeSharedValue.createFakeSharedValue({ gestureActive: false, x: 0, y: 0 });
obj[34] = createFakeSharedValue.createFakeSharedValue(false);
const context = importAllResult.createContext(obj);
const result = set.fileFinishedImporting("modules/voice_panel/native/VoicePanelStateContext.tsx");

export default context;