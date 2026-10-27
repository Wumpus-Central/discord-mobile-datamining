// === Module 5825: ExternalPip ===

// Module 5825 (ExternalPip)
import getExternalPipTileNativeId from "getExternalPipTileNativeId" /* 5827 */;
import NativeExternalPipModule from "NativeExternalPipModule" /* 5826 */;

require = fn;
const isSupported = NativeExternalPipModule.getConstants().isSupported;
class ExternalPip {
  constructor() {
    return Object.assign({ _enabled: false, _isInPipMode: false });
  }
}
const prototype = ExternalPip.prototype;
prototype["addOnPipModeChangedListener"] = function addOnPipModeChangedListener(callback2) {
  const self = this;
  return NativeExternalPipModule.onPipModeChanged((_isInPipMode) => {
    self._isInPipMode = _isInPipMode;
    callback2(_isInPipMode);
  });
};
prototype["addOnPipModeWillChangeListener"] = function addOnPipModeWillChangeListener(arg0) {
  return NativeExternalPipModule.onPipModeWillChange(arg0);
};
prototype["setSelectedTile"] = function setSelectedTile(nativeId) {
  let surface;
  if (nativeId != null) {
    surface = nativeId.surface;
  }
  let externalPipTileNativeId = null;
  if (null != surface) {
    externalPipTileNativeId = getExternalPipTileNativeId.getExternalPipTileNativeId(nativeId.surface, nativeId.id);
  }
  const size = { nativeId: externalPipTileNativeId, width: null, height: null };
  let num;
  if (nativeId != null) {
    const pipDimensions = nativeId.pipDimensions;
    if (pipDimensions != null) {
      num = pipDimensions.width;
    }
  }
  if (num == null) {
    num = 0;
  }
  size.width = num;
  let num2;
  if (nativeId != null) {
    const pipDimensions2 = nativeId.pipDimensions;
    if (pipDimensions2 != null) {
      num2 = pipDimensions2.height;
    }
  }
  if (num2 == null) {
    num2 = 0;
  }
  const self = this;
  size.height = num2;
  let tmp5 = null != this._selectedTile;
  if (tmp5) {
    const _selectedTile = self._selectedTile;
    tmp5 = _selectedTile.nativeId === size.nativeId && _selectedTile.width === size.width && _selectedTile.height === size.height;
    const tmp6 = _selectedTile.nativeId === size.nativeId && _selectedTile.width === size.width && _selectedTile.height === size.height;
  }
  if (!tmp5) {
    self._selectedTile = size;
    NativeExternalPipModule.setSelectedTile(size.nativeId, size.width, size.height);
  }
};
prototype["setFocusedStream"] = function setFocusedStream() {

};
prototype["setMirrored"] = function setMirrored() {

};
prototype["refreshPipUi"] = function refreshPipUi() {
  NativeExternalPipModule.refreshPipUi();
};
prototype["setPipContentReady"] = function setPipContentReady() {
  NativeExternalPipModule.setPipContentReady();
};
prototype["updateSourceTrackingView"] = function updateSourceTrackingView() {

};
prototype["setEnabled"] = function setEnabled(_enabled) {
  this._enabled = _enabled;
  NativeExternalPipModule.setEnabled(this._enabled);
};
prototype["setAutoEnterEnabled"] = function setAutoEnterEnabled(arg0) {
  NativeExternalPipModule.setAutoEnterEnabled(arg0);
};
prototype["setActive"] = function setActive(arg0) {
  return NativeExternalPipModule.setActive(arg0);
};
prototype["isEnabled"] = function isEnabled() {
  return this._enabled;
};
prototype["isSupported"] = function isSupported() {
  return isSupported;
};
prototype["isInPipMode"] = function isInPipMode() {
  return this._isInPipMode;
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPip.android.tsx");

export default Object.assign({ _enabled: false, _isInPipMode: false });