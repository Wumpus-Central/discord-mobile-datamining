// discord_app/modules/external_pip/ExternalPip.android.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import size from "../../../_runtime/metro/00002__.js";

let isInPipMode;

const NativeEventEmitter = react_native.NativeEventEmitter;
const NativeModules = react_native.NativeModules;
const ExternalPip2 = NativeModules.ExternalPip;
class ExternalPip {
  constructor() {
    const merged = Object.assign({ _enabled: false, _isInPipMode: false });
    merged.eventEmitter = new NativeEventEmitter(NativeModules.PipAndroid);
    new NativeEventEmitter(NativeModules.PipAndroid);
    return merged;
  }
  addOnPipModeChangedListener(callback2) {
    const self = this;
    const eventEmitter = this.eventEmitter;
    return eventEmitter.addListener("onPipModeChanged", (isInPipMode) => {
      isInPipMode = isInPipMode.isInPipMode;
      self._isInPipMode = isInPipMode;
      callback2(isInPipMode);
    });
  }
  addOnPipModeWillChangeListener(arg0) {
    const eventEmitter = this.eventEmitter;
    return eventEmitter.addListener("onPipModeWillChange", arg0);
  }
  setSelectedStream() {}
  setFocusedStream() {}
  setMirrored() {}
  setPipAspectRatio(width, height) {
    ExternalPip2.setPipAspectRatio(width, height);
  }
  refreshPipUi() {
    ExternalPip2.refreshPipUi();
  }
  updateSourceTrackingView() {}
  setEnabled(_enabled) {
    this._enabled = _enabled;
    ExternalPip2.setEnabled(this._enabled);
  }
  setActive(arg0) {
    return ExternalPip2.setActive(arg0);
  }
  isEnabled() {
    return this._enabled;
  }
  isSupported() {
    return true === ExternalPip2.isSupported;
  }
  isInPipMode() {
    return this._isInPipMode;
  }
}
const prototype = ExternalPip.prototype;
let merged = Object.assign({ _enabled: false, _isInPipMode: false });
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PipAndroid);
merged.eventEmitter = nativeEventEmitter;
const result = size.fileFinishedImporting("modules/external_pip/ExternalPip.android.tsx");

export default merged;
