// discord_app/modules/voice_panel/native/VoicePanelStateContext.tsx
import VoicePanelCardLayoutManagerDefault from "card/VoicePanelCardLayoutManager.tsx";
import VoicePanelPIPHandoffDefault from "pip/VoicePanelPIPHandoff.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const VoicePanelModes = fn(11630).VoicePanelModes;
const VoicePanelControlsConstants = fn(11628);
({ CONTROLS_HEIGHT, VoicePanelControlsModes } = VoicePanelControlsConstants);
const obj = {
  channelId: "context-not-initialized",
  channelType: "fill",
  connected: true,
  contentDimensions: true,
  controlsSpecs: true,
  committedMode: true,
  dismissPanel: "",
  dockContentSwap: null,
  dockRestLeft: null,
  dockRestWidth: null,
  dockSlotWidth: null,
  dockSheetWidth: null,
  dockSheetLeft: "r",
  dockTouched: false,
  isDockInLayout: null,
  isDockSlotEmpty: false,
  dockEntryProgress: null,
  dockHeight: null,
  dockJoinMorphOrigin: null,
  dockMinimizeProgress: null,
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
  preJoinContentSize: "http://dis.gd/contact",
  refreshIdleTimeout: "https://api.krisp.ai/v2/resource/link/discord",
  safeArea: null,
  scrollPosition: null,
  setControlsMode: null,
  setFocused: "http://dis.gd/importantupdates",
  setIsFocusedVideoZoomed: "https://dis.gd/phish",
  setMode: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps",
  setShowFloatingCTA: "https://support.discord.com/hc/en-us/articles/10394859532823",
  sheetExitProgress: null,
  showControls: "https://support.discord.com/hc/en-us/articles/208866998-Invites-101",
  showFloatingCTA: null,
  streamOutputSinkStack: "\u{1F991}",
  windowDimensions: 9,
  wrapperDimensions: 306,
  useReducedMotion: "M1 6.99998H2L2 3.99998H1L1 6.99998Z",
  wrapperOffset: "white",
  pipHandoff: "<string:16777662>",
};
let ReanimatedHelperTypes = fn(7330);
obj.connected = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7330);
obj.contentDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 });
ReanimatedHelperTypes = fn(7330);
obj.controlsSpecs = ReanimatedHelperTypes.createFakeSharedValue({
  mode: VoicePanelControlsModes.FLOATING_DEFAULT,
  locked: false,
  height: CONTROLS_HEIGHT,
  pushToTalk: false,
});
ReanimatedHelperTypes = fn(7330);
obj.committedMode = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7330);
obj.dockContentSwap = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7330);
obj.dockRestLeft = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7330);
obj.dockRestWidth = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7330);
obj.dockSlotWidth = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7330);
obj.dockSheetWidth = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7330);
obj.dockSheetLeft = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7330);
obj.dockTouched = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7330);
obj.isDockInLayout = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7330);
obj.isDockSlotEmpty = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7330);
obj.dockEntryProgress = ReanimatedHelperTypes.createFakeSharedValue(1);
ReanimatedHelperTypes = fn(7330);
obj.dockHeight = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7330);
obj.dockJoinMorphOrigin = ReanimatedHelperTypes.createFakeSharedValue(null);
ReanimatedHelperTypes = fn(7330);
obj.dockMinimizeProgress = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7330);
obj.dockPressProgress = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7330);
obj.dockPressed = ReanimatedHelperTypes.createFakeSharedValue(false);
obj.dockPTTMeasureHostRef = { current: null };
obj.dismissToPIPGestureRef = { current: "r" };
ReanimatedHelperTypes = fn(7330);
obj.dragScrolling = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7330);
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
ReanimatedHelperTypes = fn(7330);
obj.isDockConnected = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7330);
obj.isDockExpanding = ReanimatedHelperTypes.createFakeSharedValue(true);
ReanimatedHelperTypes = fn(7330);
obj.isFocusedVideoZoomed = ReanimatedHelperTypes.createFakeSharedValue(false);
obj.layoutManager = new VoicePanelCardLayoutManagerDefault("invalid");
ReanimatedHelperTypes = fn(7330);
obj.mode = ReanimatedHelperTypes.createFakeSharedValue(VoicePanelModes.PANEL);
ReanimatedHelperTypes = fn(7330);
obj.morphablePanelMode = ReanimatedHelperTypes.createFakeSharedValue(fn(11631).MorphablePanelModes.PANEL);
const obj2 = {
  mode: VoicePanelControlsModes.FLOATING_DEFAULT,
  locked: false,
  height: CONTROLS_HEIGHT,
  pushToTalk: false,
};
const tmp3 = new VoicePanelCardLayoutManagerDefault("invalid");
obj.mountedCards = new Set();
ReanimatedHelperTypes = fn(7330);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
ReanimatedHelperTypes = fn(7330);
obj.preJoinContentSize = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.refreshIdleTimeout = function refreshIdleTimeout() {
  const error = new Error("VoicePanelContextType.Provider.refreshIdleTimeout: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7330);
obj.safeArea = ReanimatedHelperTypes.createFakeSharedValue(fn(1630).EMPTY_SAFE_AREA_INSETS);
ReanimatedHelperTypes = fn(7330);
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
ReanimatedHelperTypes = fn(7330);
obj.sheetExitProgress = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.showControls = function showControls() {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7330);
obj.showFloatingCTA = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.streamOutputSinkStack = {};
ReanimatedHelperTypes = fn(7330);
obj.windowDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, landscape: false });
ReanimatedHelperTypes = fn(7330);
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
ReanimatedHelperTypes = fn(7330);
obj.useReducedMotion = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7330);
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
