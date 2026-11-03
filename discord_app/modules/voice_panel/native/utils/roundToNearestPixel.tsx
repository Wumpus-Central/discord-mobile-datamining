// discord_app/modules/voice_panel/native/utils/roundToNearestPixel.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const items = [
  {
    code: "(function roundToNearestPixel_roundToNearestPixelTsx1(position){let[PIXEL_DENSITY]=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;})",
  },
];
const PixelRatio = _mod17.PixelRatio;
items[1] = PixelRatio.get();
let c0;
[tmp2, tmp3] = items;
function roundToNearestPixel(arg0) {
  return Math.round(arg0 * c0) / c0;
}
const items1 = [tmp3];
roundToNearestPixel.__closure = items1;
roundToNearestPixel.__workletHash = 12463827408720;
roundToNearestPixel.__initData = tmp2;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/roundToNearestPixel.tsx");

export default roundToNearestPixel;
