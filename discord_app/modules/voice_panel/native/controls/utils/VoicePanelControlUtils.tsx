// === Module 17265: VoicePanelControlUtils ===

// Module 17265 (VoicePanelControlUtils)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11065 */;
import size from "module_2" /* 2 */;

function getDrawerSpec(height, top) {
  const diff = height - top;
  return { minHeight: roundToNearestPixelDefault(0.65 * diff), maxHeight: diff };
}
getDrawerSpec.__closure = { roundToNearestPixel: roundToNearestPixelDefault };
getDrawerSpec.__workletHash = 3647675988513;
getDrawerSpec.__initData = { code: "function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){const{roundToNearestPixel}=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");

export { getDrawerSpec };