// _runtime/metro/07194__.js
import get_ActivityIndicator from "00017__.js";

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("RNCClipboard");
const RNCClipboard_TEXT_CHANGED = "RNCClipboard_TEXT_CHANGED";
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(enforcing);
const listenerCount = nativeEventEmitter.listenerCount;
let fn = listenerCount;
if (listenerCount) {
  const listenerCount2 = nativeEventEmitter.listenerCount;
  fn = listenerCount2.bind(nativeEventEmitter);
} else {
  fn = (arg0) => nativeEventEmitter.listeners(arg0).length;
}

export default enforcing;
export const addListener = (arg0) => {
  if (0 === fn(RNCClipboard_TEXT_CHANGED)) {
    enforcing.setListener();
  }
  const addListenerResult = nativeEventEmitter.addListener(RNCClipboard_TEXT_CHANGED, arg0);
  addListenerResult._remove = addListenerResult.remove;
  addListenerResult.remove = function () {
    this._remove();
    if (0 === fn(RNCClipboard_TEXT_CHANGED)) {
      enforcing.removeListener();
    }
  };
  return addListenerResult;
};
export const removeAllListeners = () => {
  nativeEventEmitter.removeAllListeners(RNCClipboard_TEXT_CHANGED);
  enforcing.removeListener();
};
