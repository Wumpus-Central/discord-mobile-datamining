// === Module 19426: DeviceSilentModeManager ===

// Module 19426 (DeviceSilentModeManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import NativeDeviceSilentModeModuleDefault from "NativeDeviceSilentModeModule" /* 19427 */;
import FramesStore from "FramesStore" /* 6846 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;

function handleSilentModeChanged(muted) {
  DispatcherDefault.dispatch({ type: "FRAME_SET_DEVICE_MUTED", muted });
}
function updateObserving() {
  const allFrames = FramesStore.getAllFrames();
  let someResult = allFrames.some(isLaunched);
  if (someResult) {
    if (null == _null) {
      _null = NativeDeviceSilentModeModuleDefault.onSilentModeChanged(handleSilentModeChanged);
      NativeDeviceSilentModeModuleDefault.startObserving();
    }
  }
  if (!someResult) {
    someResult = null == _null;
  }
  if (!someResult) {
    NativeDeviceSilentModeModuleDefault.stopObserving();
    _null.remove();
    _null = null;
  }
}
const isLaunched = fn(6847).isLaunched;
let c4 = null;
class DeviceSilentModeManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { FRAME_LAUNCH: updateObserving };
    applyArgumentsResult.actions = obj;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_2, updateObserving);
    return applyArgumentsResult;
  }
}
const prototype = DeviceSilentModeManager.prototype;
prototype["_initialize"] = function _initialize() {
  const allFrames = FramesStore.getAllFrames();
  let someResult = allFrames.some(isLaunched);
  if (someResult) {
    if (null == _null) {
      _null = NativeDeviceSilentModeModuleDefault.onSilentModeChanged(handleSilentModeChanged);
      NativeDeviceSilentModeModuleDefault.startObserving();
    }
  }
  if (!someResult) {
    someResult = null == _null;
  }
  if (!someResult) {
    NativeDeviceSilentModeModuleDefault.stopObserving();
    _null.remove();
    _null = null;
  }
};
prototype["_terminate"] = function _terminate() {
  if (null != _null) {
    NativeDeviceSilentModeModuleDefault.stopObserving();
    _null.remove();
    _null = null;
  }
};
const deviceSilentModeManager = new DeviceSilentModeManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/DeviceSilentModeManager.tsx");

export default deviceSilentModeManager;