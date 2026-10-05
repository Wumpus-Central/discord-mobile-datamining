// === Module 10725: roundToNearestPixel ===

// Module 10725 (roundToNearestPixel)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
const value = PixelRatio.get();
const _window = value;
const fn = function t(arg0) {
  return Math.round(arg0 * _window) / _window;
};
fn.__closure = { PIXEL_DENSITY: value };
fn.__workletHash = 8009828326153;
fn.__initData = { code: "function roundToNearestPixel_roundToNearestPixelTsx1(position){const{PIXEL_DENSITY}=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/roundToNearestPixel.tsx");

export default fn;