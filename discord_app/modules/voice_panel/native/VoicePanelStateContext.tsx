// === Module 11740: VoicePanelStateContext ===

// Module 11740 (VoicePanelStateContext)
import VoicePanelCardLayoutManagerDefault from "VoicePanelCardLayoutManager" /* 11743 */;
import VoicePanelPIPHandoffDefault from "VoicePanelPIPHandoff" /* 11747 */;
import noop from "module_19" /* 19 */;

const VoicePanelModes = fn(11741).VoicePanelModes;
const VoicePanelControlsConstants = fn(11739);
({ CONTROLS_HEIGHT, VoicePanelControlsModes } = VoicePanelControlsConstants);
const obj = { channelId: "context-not-initialized", channelType: "e", connected: "Array", contentDimensions: false, controlsSpecs: null, dismissPanel: null, dismissToPIPGestureRef: null, dragScrolling: null, focused: null, generateStateLocker: null, guildId: null, hideControls: null, isCall: null, isFocusedVideoZoomed: null, layoutManager: null, mode: null, morphablePanelMode: null, mountedCards: null, pipAvoidanceSpecs: null, preJoinContentSize: null, refreshIdleTimeout: null, safeArea: null, scrollPosition: null, setControlsMode: null, setFocused: null, setIsFocusedVideoZoomed: null, setMode: null, setShowFloatingCTA: 1000, showControls: 1000, showFloatingCTA: 20000, streamOutputSinkStack: 20000, windowDimensions: false, wrapperDimensions: true, useReducedMotion: null, wrapperOffset: null, pipHandoff: null };
let ReanimatedHelperTypes = fn(6490);
obj.connected = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(6490);
obj.contentDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 });
ReanimatedHelperTypes = fn(6490);
obj.controlsSpecs = ReanimatedHelperTypes.createFakeSharedValue({ mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false });
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
obj.dismissToPIPGestureRef = { current: "r" };
ReanimatedHelperTypes = fn(6490);
obj.dragScrolling = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(6490);
obj.focused = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.generateStateLocker = function generateStateLocker() {
  const error = new Error("VoicePanelContextType.Provider.generateStateLocker: not called within a context provider");
  throw error;
};
obj.hideControls = function hideControls() {
  const error = new Error("VoicePanelContextType.Provider.hideControls: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(6490);
obj.isFocusedVideoZoomed = ReanimatedHelperTypes.createFakeSharedValue(false);
obj.layoutManager = new VoicePanelCardLayoutManagerDefault("invalid");
ReanimatedHelperTypes = fn(6490);
obj.mode = ReanimatedHelperTypes.createFakeSharedValue(VoicePanelModes.PANEL);
ReanimatedHelperTypes = fn(6490);
obj.morphablePanelMode = ReanimatedHelperTypes.createFakeSharedValue(fn(11742).MorphablePanelModes.PANEL);
const obj2 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false };
const tmp3 = new VoicePanelCardLayoutManagerDefault("invalid");
obj.mountedCards = new Set();
ReanimatedHelperTypes = fn(6490);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
ReanimatedHelperTypes = fn(6490);
obj.preJoinContentSize = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.refreshIdleTimeout = function refreshIdleTimeout() {
  const error = new Error("VoicePanelContextType.Provider.refreshIdleTimeout: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(6490);
obj.safeArea = ReanimatedHelperTypes.createFakeSharedValue(fn(1614).EMPTY_SAFE_AREA_INSETS);
ReanimatedHelperTypes = fn(6490);
obj.scrollPosition = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.setControlsMode = function setControlsMode() {
  const error = new Error("VoicePanelContextType.Provider.setControlsMode: not called within a context provider");
  throw error;
};
obj.setFocused = function setFocused() {
  const error = new Error("VoicePanelContextType.Provider.setFocused: not called within a context provider");
  throw error;
};
obj.setIsFocusedVideoZoomed = function setIsFocusedVideoZoomed() {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
obj.setMode = function setMode() {
  const error = new Error("VoicePanelContextType.Provider.setMode: not called within a context provider");
  throw error;
};
obj.setShowFloatingCTA = function setShowFloatingCTA() {
  const error = new Error("VoicePanelContextType.Provider.showFloatingCTA: not called within a context provider");
  throw error;
};
obj.showControls = function showControls() {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(6490);
obj.showFloatingCTA = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.streamOutputSinkStack = {};
ReanimatedHelperTypes = fn(6490);
obj.windowDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, landscape: false });
ReanimatedHelperTypes = fn(6490);
obj.wrapperDimensions = ReanimatedHelperTypes.createFakeSharedValue({ drawerWidth: 0, drawerHeight: 0, drawerX: 0, drawerY: 0, pipX: 0, pipY: 0, animated: true, mode: VoicePanelModes.PANEL });
ReanimatedHelperTypes = fn(6490);
obj.useReducedMotion = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(6490);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ gestureActive: false, x: 0, y: 0 });
const obj6 = { drawerWidth: 0, drawerHeight: 0, drawerX: 0, drawerY: 0, pipX: 0, pipY: 0, animated: true, mode: VoicePanelModes.PANEL };
const set = new Set();
obj.pipHandoff = new VoicePanelPIPHandoffDefault();
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelStateContext.tsx");

export default context;