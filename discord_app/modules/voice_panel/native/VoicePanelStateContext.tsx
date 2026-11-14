// === Module 11984: VoicePanelStateContext ===

// Module 11984 (VoicePanelStateContext)
import VoicePanelCardLayoutManagerDefault from "VoicePanelCardLayoutManager" /* 11987 */;
import VoicePanelPIPHandoffDefault from "VoicePanelPIPHandoff" /* 11993 */;
import noop from "module_19" /* 19 */;

const VoicePanelModes = fn(11985).VoicePanelModes;
const VoicePanelControlsConstants = fn(11983);
({ CONTROLS_HEIGHT, VoicePanelControlsModes } = VoicePanelControlsConstants);
const obj = { channelId: "context-not-initialized", channelType: "fileBytes", connected: true, contentDimensions: "", controlsSpecs: null, committedMode: null, dismissPanel: null, dockContentSwap: null, dockRestWidth: null, dockSheetWidth: "r", dockTouched: false, isDockInLayout: null, isDockSlotEmpty: false, dockEntryProgress: null, dockHeight: null, dockJoinMorphOrigin: null, dockMinimizeProgress: null, dockPressProgress: null, dockPressed: null, dockPTTPortalHostName: null, dockPTTMeasureHostRef: null, dismissToPIPGestureRef: null, dragScrolling: null, focused: null, generateStateLocker: null, guildId: null, handleDockSheetLayout: null, hideControls: null, isCall: null, isDockConnected: null, isDockEnabled: null, isDockExpanding: null, isFocusedVideoZoomed: null, layoutManager: null, mode: null, morphablePanelMode: null, mountedCards: null, pipAvoidanceSpecs: null, preJoinContentSize: "http://dis.gd/contact", refreshIdleTimeout: "https://api.krisp.ai/v2/resource/link/discord", safeArea: null, scrollPosition: null, setControlsMode: null, setFocused: "http://dis.gd/importantupdates", setIsFocusedVideoZoomed: "https://dis.gd/phish", setMode: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps", setShowFloatingCTA: "https://support.discord.com/hc/en-us/articles/10394859532823", sheetExitProgress: null, showControls: "https://support.discord.com/hc/en-us/articles/208866998-Invites-101", showFloatingCTA: null, streamOutputSinkStack: "\u{1F423}", windowDimensions: 6, wrapperDimensions: 272, useReducedMotion: "/developers", wrapperOffset: null, pipHandoff: "/developers/teams" };
let ReanimatedHelperTypes = fn(7848);
obj.connected = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7848);
obj.contentDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 });
ReanimatedHelperTypes = fn(7848);
obj.controlsSpecs = ReanimatedHelperTypes.createFakeSharedValue({ mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false });
ReanimatedHelperTypes = fn(7848);
obj.committedMode = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7848);
obj.dockContentSwap = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7848);
obj.dockRestWidth = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7848);
obj.dockSheetWidth = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7848);
obj.dockTouched = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7848);
obj.isDockInLayout = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7848);
obj.isDockSlotEmpty = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7848);
obj.dockEntryProgress = ReanimatedHelperTypes.createFakeSharedValue(1);
ReanimatedHelperTypes = fn(7848);
obj.dockHeight = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7848);
obj.dockJoinMorphOrigin = ReanimatedHelperTypes.createFakeSharedValue(null);
ReanimatedHelperTypes = fn(7848);
obj.dockMinimizeProgress = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7848);
obj.dockPressProgress = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7848);
obj.dockPressed = ReanimatedHelperTypes.createFakeSharedValue(false);
obj.dockPTTMeasureHostRef = { current: null };
obj.dismissToPIPGestureRef = { current: "r" };
ReanimatedHelperTypes = fn(7848);
obj.dragScrolling = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7848);
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
ReanimatedHelperTypes = fn(7848);
obj.isDockConnected = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7848);
obj.isDockExpanding = ReanimatedHelperTypes.createFakeSharedValue(true);
ReanimatedHelperTypes = fn(7848);
obj.isFocusedVideoZoomed = ReanimatedHelperTypes.createFakeSharedValue(false);
obj.layoutManager = new VoicePanelCardLayoutManagerDefault("invalid");
ReanimatedHelperTypes = fn(7848);
obj.mode = ReanimatedHelperTypes.createFakeSharedValue(VoicePanelModes.PANEL);
ReanimatedHelperTypes = fn(7848);
obj.morphablePanelMode = ReanimatedHelperTypes.createFakeSharedValue(fn(11986).MorphablePanelModes.PANEL);
const obj2 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false };
const tmp3 = new VoicePanelCardLayoutManagerDefault("invalid");
obj.mountedCards = new Set();
ReanimatedHelperTypes = fn(7848);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
ReanimatedHelperTypes = fn(7848);
obj.preJoinContentSize = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.refreshIdleTimeout = function refreshIdleTimeout() {
  const error = new Error("VoicePanelContextType.Provider.refreshIdleTimeout: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7848);
obj.safeArea = ReanimatedHelperTypes.createFakeSharedValue(fn(1632).EMPTY_SAFE_AREA_INSETS);
ReanimatedHelperTypes = fn(7848);
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
ReanimatedHelperTypes = fn(7848);
obj.sheetExitProgress = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.showControls = function showControls() {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7848);
obj.showFloatingCTA = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.streamOutputSinkStack = {};
ReanimatedHelperTypes = fn(7848);
obj.windowDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, landscape: false });
ReanimatedHelperTypes = fn(7848);
obj.wrapperDimensions = ReanimatedHelperTypes.createFakeSharedValue({ drawerWidth: 0, drawerHeight: 0, drawerX: 0, drawerY: 0, pipX: 0, pipY: 0, animated: true, mode: VoicePanelModes.PANEL });
ReanimatedHelperTypes = fn(7848);
obj.useReducedMotion = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7848);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ gestureActive: false, x: 0, y: 0 });
const obj6 = { drawerWidth: 0, drawerHeight: 0, drawerX: 0, drawerY: 0, pipX: 0, pipY: 0, animated: true, mode: VoicePanelModes.PANEL };
const set = new Set();
obj.pipHandoff = new VoicePanelPIPHandoffDefault();
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelStateContext.tsx");

export default context;