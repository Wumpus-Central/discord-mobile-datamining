// === Module 10066: NativeEventEmitter ===

// Module 10066 (NativeEventEmitter)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const NativeModules = get_ActivityIndicator.NativeModules;
const ExternalPip = NativeModules.ExternalPip;
class ExternalPip {
  constructor() {
    obj = Object.create(new.target.prototype);
    tmp2 = new NativeEventEmitter(NativeModules.PipAndroid);
    obj.eventEmitter = tmp2;
    return obj;
  }
}
const prototype = ExternalPip.prototype;
prototype["addOnPipModeChangedListener"] = function addOnPipModeChangedListener(callback2) {
  const self = this;
  closure_0 = callback2;
  const eventEmitter = this.eventEmitter;
  return eventEmitter.addListener("onPipModeChanged", (isInPipMode) => {
    isInPipMode = isInPipMode.isInPipMode;
    self._isInPipMode = isInPipMode;
    callback2(isInPipMode);
  });
};
prototype["addOnPipModeWillChangeListener"] = function addOnPipModeWillChangeListener(arg0) {
  const eventEmitter = this.eventEmitter;
  return eventEmitter.addListener("onPipModeWillChange", arg0);
};
prototype["setSelectedStream"] = function setSelectedStream() {

};
prototype["setFocusedStream"] = function setFocusedStream() {

};
prototype["setMirrored"] = function setMirrored() {

};
prototype["setPipAspectRatio"] = function setPipAspectRatio(width, height) {
  ExternalPip.setPipAspectRatio(width, height);
};
prototype["refreshPipUi"] = function refreshPipUi() {
  ExternalPip.refreshPipUi();
};
prototype["updateSourceTrackingView"] = function updateSourceTrackingView() {

};
prototype["setEnabled"] = function setEnabled(_enabled) {
  this._enabled = _enabled;
  ExternalPip.setEnabled(this._enabled);
};
prototype["setActive"] = function setActive(arg0) {
  return ExternalPip.setActive(arg0);
};
prototype["isEnabled"] = function isEnabled() {
  return this._enabled;
};
prototype["isSupported"] = function isSupported() {
  return true === ExternalPip.isSupported;
};
prototype["isInPipMode"] = function isInPipMode() {
  return this._isInPipMode;
};
let obj = Object.create(ExternalPip.prototype);
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PipAndroid);
obj.eventEmitter = nativeEventEmitter;
const result = set.fileFinishedImporting("modules/external_pip/ExternalPip.android.tsx");

export default obj;