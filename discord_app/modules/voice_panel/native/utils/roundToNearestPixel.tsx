// discord_app/modules/voice_panel/native/utils/roundToNearestPixel.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import size from "../../../../../_runtime/metro/00002__.js";

const PixelRatio = react_native.PixelRatio;
const value = PixelRatio.get();
const _window = value;
const fn = function t(arg0) {
  return Math.round(arg0 * _window) / _window;
};
fn.__closure = { PIXEL_DENSITY: value };
fn.__workletHash = 8009828326153;
fn.__initData = {
  code: "function roundToNearestPixel_roundToNearestPixelTsx1(position){const{PIXEL_DENSITY}=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;}",
};
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/roundToNearestPixel.tsx");

export default fn;
