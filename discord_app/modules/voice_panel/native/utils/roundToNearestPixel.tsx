// === Module 10993: roundToNearestPixel ===

// Module 10993 (roundToNearestPixel)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const PixelRatio = _mod17.PixelRatio;
const value = PixelRatio.get();
const fn = function t(arg0) {
  return Math.round(arg0 * value) / value;
};
fn.__closure = { PIXEL_DENSITY: value };
fn.__workletHash = 8009828326153;
fn.__initData = { code: "function roundToNearestPixel_roundToNearestPixelTsx1(position){const{PIXEL_DENSITY}=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/roundToNearestPixel.tsx");

export default fn;