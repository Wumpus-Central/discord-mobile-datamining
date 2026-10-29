// discord_app/modules/media_panel/native/MediaPlaybackPanelStateContext.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const obj = {
  mode: null,
  setMode: null,
  morphablePanelMode: null,
  wrapperDimensions: null,
  useReducedMotion: null,
  pipState: null,
  pipAvoidanceSpecs: null,
  dismissToPipGestureRef: null,
  dismissPanel: null,
  scrollPosition: null,
  canShowPIP: null,
  lockScrolling: null,
  wrapperOffset: null,
};
let ReanimatedHelperTypes = fn(7229);
obj.mode = ReanimatedHelperTypes.createFakeSharedValue(fn(16303).MediaPlaybackPanelModes.PIP);
obj.setMode = function setMode() {
  const error = new Error("MediaPlaybackPanelModes.Provider.setMode: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7229);
obj.morphablePanelMode = ReanimatedHelperTypes.createFakeSharedValue(fn(10975).MorphablePanelModes.PIP);
ReanimatedHelperTypes = fn(7229);
obj.wrapperDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 });
ReanimatedHelperTypes = fn(7229);
obj.useReducedMotion = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7229);
obj.pipState = ReanimatedHelperTypes.createFakeSharedValue({ x: -1, y: -1 });
ReanimatedHelperTypes = fn(7229);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
obj.dismissToPipGestureRef = { current: "r" };
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7229);
obj.scrollPosition = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7229);
obj.canShowPIP = ReanimatedHelperTypes.createFakeSharedValue(true);
ReanimatedHelperTypes = fn(7229);
obj.lockScrolling = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7229);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelStateContext.tsx");

export default context;
