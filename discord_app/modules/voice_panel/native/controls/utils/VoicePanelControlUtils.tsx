// discord_app/modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import tDefault from "../../utils/roundToNearestPixel.tsx";

function getDrawerSpec(height, top) {
  const diff = height - top;
  return { minHeight: tDefault(0.65 * diff), maxHeight: diff };
}
getDrawerSpec.__closure = { roundToNearestPixel: tDefault };
getDrawerSpec.__workletHash = 3647675988513;
getDrawerSpec.__initData = { code: "function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){const{roundToNearestPixel}=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};}" };
const result = obj132.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");

export { getDrawerSpec };