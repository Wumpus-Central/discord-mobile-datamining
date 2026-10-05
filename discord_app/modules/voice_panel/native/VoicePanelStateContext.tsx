// discord_app/modules/voice_panel/native/VoicePanelStateContext.tsx
import SafeAreaConstants from "../../safe_area/SafeAreaConstants.native.tsx";
import VoicePanelConstants from "../VoicePanelConstants.tsx";
import MorphablePanelConstants from "../../panels/morphable/native/MorphablePanelConstants.tsx";
import VoicePanelCardLayoutManagerDefault from "card/VoicePanelCardLayoutManager.tsx";
import VoicePanelPIPHandoffDefault from "pip/VoicePanelPIPHandoff.tsx";
import react from "../../../../_runtime/00019_react.js";
import VoicePanelControlsConstants from "controls/VoicePanelControlsConstants.tsx";
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "../../reanimated/ReanimatedHelperTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let CONTROLS_HEIGHT;
let MorphablePanelModes;
let ReanimatedHelperTypes;
let VoicePanelControlsModes;
let obj2;
let obj3;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ CONTROLS_HEIGHT, VoicePanelControlsModes } = VoicePanelControlsConstants);
const obj = {
  channelId: "context-not-initialized",
  channelType: "e",
  connected: ReanimatedHelperTypes.createFakeSharedValue(false),
  contentDimensions: ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 }),
  controlsSpecs: ReanimatedHelperTypes.createFakeSharedValue(obj2),
  dismissPanel() {
    const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
    throw error;
  },
  dismissToPIPGestureRef: { current: "r" },
  dragScrolling: ReanimatedHelperTypes.createFakeSharedValue(false),
  focused: ReanimatedHelperTypes.createFakeSharedValue(null),
  generateStateLocker() {
    const error = new Error("VoicePanelContextType.Provider.generateStateLocker: not called within a context provider");
    throw error;
  },
  guildId: null,
  hideControls() {
    const error = new Error("VoicePanelContextType.Provider.hideControls: not called within a context provider");
    throw error;
  },
  isCall: null,
  isFocusedVideoZoomed: ReanimatedHelperTypes.createFakeSharedValue(false),
  layoutManager: new VoicePanelCardLayoutManagerDefault("invalid"),
  mode: ReanimatedHelperTypes.createFakeSharedValue(VoicePanelModes.PANEL),
  morphablePanelMode: ReanimatedHelperTypes.createFakeSharedValue(MorphablePanelModes.PANEL),
  mountedCards: new Set(),
  pipAvoidanceSpecs: ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 }),
  preJoinContentSize: ReanimatedHelperTypes.createFakeSharedValue(0),
  refreshIdleTimeout() {
    const error = new Error("VoicePanelContextType.Provider.refreshIdleTimeout: not called within a context provider");
    throw error;
  },
  safeArea: ReanimatedHelperTypes.createFakeSharedValue(SafeAreaConstants.EMPTY_SAFE_AREA_INSETS),
  scrollPosition: ReanimatedHelperTypes.createFakeSharedValue(0),
  setControlsMode() {
    const error = new Error("VoicePanelContextType.Provider.setControlsMode: not called within a context provider");
    throw error;
  },
  setFocused() {
    const error = new Error("VoicePanelContextType.Provider.setFocused: not called within a context provider");
    throw error;
  },
  setIsFocusedVideoZoomed() {
    const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
    throw error;
  },
  setMode() {
    const error = new Error("VoicePanelContextType.Provider.setMode: not called within a context provider");
    throw error;
  },
  setShowFloatingCTA() {
    const error = new Error("VoicePanelContextType.Provider.showFloatingCTA: not called within a context provider");
    throw error;
  },
  showControls() {
    const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
    throw error;
  },
  showFloatingCTA: ReanimatedHelperTypes.createFakeSharedValue(null),
  streamOutputSinkStack: {},
  windowDimensions: ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, landscape: false }),
  wrapperDimensions: ReanimatedHelperTypes.createFakeSharedValue(obj3),
  useReducedMotion: ReanimatedHelperTypes.createFakeSharedValue(false),
  wrapperOffset: ReanimatedHelperTypes.createFakeSharedValue({ gestureActive: false, x: 0, y: 0 }),
  pipHandoff: new VoicePanelPIPHandoffDefault(),
};
MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const createContext = react.createContext;
obj2 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false };
new VoicePanelCardLayoutManagerDefault("invalid");
new Set();
obj3 = {
  drawerWidth: 0,
  drawerHeight: 0,
  drawerX: 0,
  drawerY: 0,
  pipX: 0,
  pipY: 0,
  animated: true,
  mode: VoicePanelModes.PANEL,
};
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
new VoicePanelPIPHandoffDefault();
const context = createContext(obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelStateContext.tsx");

export default context;
