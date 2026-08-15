// _runtime/07171_addListener.js
import get_ActivityIndicator from "get ActivityIndicator";

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
  addListenerResult.remove = function() {
    this._remove();
    if (0 === callback(closure_1)) {
      closure_0.removeListener();
    }
  };
  return addListenerResult;
};
export const removeAllListeners = () => {
  nativeEventEmitter.removeAllListeners(RNCClipboard_TEXT_CHANGED);
  enforcing.removeListener();
};