// === Module 16386: getDrawerSpec ===

// Module 16386 (getDrawerSpec)
import obj132 from "obj132" /* 2 */;
import tDefault from "t" /* 11259 */;

function getDrawerSpec(height, top) {
  const diff = height - top;
  return { minHeight: tDefault(0.65 * diff), maxHeight: diff };
}
getDrawerSpec.__closure = { roundToNearestPixel: tDefault };
getDrawerSpec.__workletHash = 3647675988513;
getDrawerSpec.__initData = { code: "function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){const{roundToNearestPixel}=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};}" };
const result = obj132.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");

export { getDrawerSpec };