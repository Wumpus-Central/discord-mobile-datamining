// discord_app/modules/voice_panel/native/VoicePanelStateContext.tsx
import VoicePanelCardLayoutManagerDefault from "card/VoicePanelCardLayoutManager.tsx";
import VoicePanelPIPHandoffDefault from "pip/VoicePanelPIPHandoff.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const VoicePanelModes = fn(11925).VoicePanelModes;
const VoicePanelControlsConstants = fn(11923);
({ CONTROLS_HEIGHT, VoicePanelControlsModes } = VoicePanelControlsConstants);
const obj = {
  channelId: "context-not-initialized",
  channelType: "e",
  connected: "",
  contentDimensions: null,
  controlsSpecs: null,
  committedMode: null,
  dismissPanel: null,
  dockContentSwap: null,
  dockEntryProgress: "r",
  dockHeight: false,
  dockJoinMorphOrigin: null,
  dockMinimizeProgress: false,
  dockPressProgress: null,
  dockPressed: null,
  dockPTTPortalHostName: null,
  dockPTTMeasureHostRef: null,
  dismissToPIPGestureRef: null,
  dragScrolling: null,
  focused: null,
  generateStateLocker: null,
  guildId: null,
  handleDockSheetLayout: null,
  hideControls: null,
  isCall: null,
  isDockConnected: null,
  isDockEnabled: null,
  isDockExpanding: null,
  isFocusedVideoZoomed: null,
  layoutManager: null,
  mode: null,
  morphablePanelMode: null,
  mountedCards: null,
  pipAvoidanceSpecs: null,
  preJoinContentSize: null,
  refreshIdleTimeout: null,
  safeArea: null,
  scrollPosition: null,
  setControlsMode: 1000,
  setFocused: 1000,
  setIsFocusedVideoZoomed: 20000,
  setMode: 20000,
  setShowFloatingCTA: false,
  sheetExitProgress: true,
  showControls: null,
  showFloatingCTA: null,
  streamOutputSinkStack: null,
  windowDimensions: 16,
  wrapperDimensions: 16,
  useReducedMotion: null,
  wrapperOffset: 20,
  pipHandoff: 0.1,
};
let ReanimatedHelperTypes = fn(7782);
obj.connected = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7782);
obj.contentDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 });
ReanimatedHelperTypes = fn(7782);
obj.controlsSpecs = ReanimatedHelperTypes.createFakeSharedValue({
  mode: VoicePanelControlsModes.FLOATING_DEFAULT,
  locked: false,
  height: CONTROLS_HEIGHT,
  pushToTalk: false,
});
ReanimatedHelperTypes = fn(7782);
obj.committedMode = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7782);
obj.dockContentSwap = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7782);
obj.dockEntryProgress = ReanimatedHelperTypes.createFakeSharedValue(1);
ReanimatedHelperTypes = fn(7782);
obj.dockHeight = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7782);
obj.dockJoinMorphOrigin = ReanimatedHelperTypes.createFakeSharedValue(null);
ReanimatedHelperTypes = fn(7782);
obj.dockMinimizeProgress = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7782);
obj.dockPressProgress = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7782);
obj.dockPressed = ReanimatedHelperTypes.createFakeSharedValue(false);
obj.dockPTTMeasureHostRef = { current: null };
obj.dismissToPIPGestureRef = { current: "Array" };
ReanimatedHelperTypes = fn(7782);
obj.dragScrolling = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7782);
obj.focused = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.generateStateLocker = function generateStateLocker() {
  const error = new Error("VoicePanelContextType.Provider.generateStateLocker: not called within a context provider");
  throw error;
};
obj.handleDockSheetLayout = function handleDockSheetLayout() {
  const error = new Error("VoicePanelContextType.Provider.handleDockSheetLayout: not called within a context provider");
  throw error;
};
obj.hideControls = function hideControls() {
  const error = new Error("VoicePanelContextType.Provider.hideControls: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7782);
obj.isDockConnected = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7782);
obj.isDockExpanding = ReanimatedHelperTypes.createFakeSharedValue(true);
ReanimatedHelperTypes = fn(7782);
obj.isFocusedVideoZoomed = ReanimatedHelperTypes.createFakeSharedValue(false);
obj.layoutManager = new VoicePanelCardLayoutManagerDefault("invalid");
ReanimatedHelperTypes = fn(7782);
obj.mode = ReanimatedHelperTypes.createFakeSharedValue(VoicePanelModes.PANEL);
ReanimatedHelperTypes = fn(7782);
obj.morphablePanelMode = ReanimatedHelperTypes.createFakeSharedValue(fn(11926).MorphablePanelModes.PANEL);
const obj2 = {
  mode: VoicePanelControlsModes.FLOATING_DEFAULT,
  locked: false,
  height: CONTROLS_HEIGHT,
  pushToTalk: false,
};
const tmp3 = new VoicePanelCardLayoutManagerDefault("invalid");
obj.mountedCards = new Set();
ReanimatedHelperTypes = fn(7782);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
ReanimatedHelperTypes = fn(7782);
obj.preJoinContentSize = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.refreshIdleTimeout = function refreshIdleTimeout() {
  const error = new Error("VoicePanelContextType.Provider.refreshIdleTimeout: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7782);
obj.safeArea = ReanimatedHelperTypes.createFakeSharedValue(fn(1629).EMPTY_SAFE_AREA_INSETS);
ReanimatedHelperTypes = fn(7782);
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
ReanimatedHelperTypes = fn(7782);
obj.sheetExitProgress = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.showControls = function showControls() {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7782);
obj.showFloatingCTA = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.streamOutputSinkStack = {};
ReanimatedHelperTypes = fn(7782);
obj.windowDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, landscape: false });
ReanimatedHelperTypes = fn(7782);
obj.wrapperDimensions = ReanimatedHelperTypes.createFakeSharedValue({
  drawerWidth: 0,
  drawerHeight: 0,
  drawerX: 0,
  drawerY: 0,
  pipX: 0,
  pipY: 0,
  animated: true,
  mode: VoicePanelModes.PANEL,
});
ReanimatedHelperTypes = fn(7782);
obj.useReducedMotion = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7782);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ gestureActive: false, x: 0, y: 0 });
const obj6 = {
  drawerWidth: 0,
  drawerHeight: 0,
  drawerX: 0,
  drawerY: 0,
  pipX: 0,
  pipY: 0,
  animated: true,
  mode: VoicePanelModes.PANEL,
};
const set = new Set();
obj.pipHandoff = new VoicePanelPIPHandoffDefault();
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelStateContext.tsx");

export default context;
