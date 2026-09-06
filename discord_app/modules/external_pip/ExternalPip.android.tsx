// === Module 9610: ExternalPip ===

// Module 9610 (ExternalPip)
import get_ActivityIndicator from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const NativeModules = get_ActivityIndicator.NativeModules;
const ExternalPip = NativeModules.ExternalPip;
class ExternalPip {
  constructor() {
    merged = Object.assign({ _enabled: false, _isInPipMode: false });
    tmp2 = new NativeEventEmitter(NativeModules.PipAndroid);
    merged.eventEmitter = tmp2;
    return merged;
  }
}
const prototype = ExternalPip.prototype;
prototype["addOnPipModeChangedListener"] = function addOnPipModeChangedListener(callback2) {
  const self = this;
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
let merged = Object.assign({ _enabled: false, _isInPipMode: false });
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PipAndroid);
merged.eventEmitter = nativeEventEmitter;
const result = size.fileFinishedImporting("modules/external_pip/ExternalPip.android.tsx");

export default merged;