// === Module 16350: VoicePanelModes ===

// Module 16350 (VoicePanelModes)
import set from "set" /* 2 */;
import VoicePanelModes from "VoicePanelModes" /* 11440 */;

VoicePanelModes = VoicePanelModes.VoicePanelModes;
const DEFAULT_BORDER_RADIUS_PIP = VoicePanelModes.DEFAULT_BORDER_RADIUS_PIP;
const fn = function o(arg0) {
  ({ mode, focused, defaultBorderRadius } = arg0);
  if (mode === VoicePanelModes.PANEL) {
    if (null != focused) {
      if (focused === tmp) {
        return 0;
      } else if (tmp2) {
        return DEFAULT_BORDER_RADIUS_PIP;
      }
    }
    return defaultBorderRadius;
  } else {
    let tmp4 = defaultBorderRadius;
    if (mode === tmp3.PIP) {
      tmp4 = DEFAULT_BORDER_RADIUS_PIP;
    }
    return tmp4;
  }
};
fn.__closure = { VoicePanelModes, DEFAULT_BORDER_RADIUS_PIP };
fn.__workletHash = 10593808953118;
fn.__initData = { code: "function computeCardBorderRadius_computeCardBorderRadiusTsx1({id:id,mode:mode,focused:focused,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP}=this.__closure;if(mode===VoicePanelModes.PANEL){if(focused!=null){if(focused===id){return 0;}else if(isSelf){return DEFAULT_BORDER_RADIUS_PIP;}}return defaultBorderRadius;}if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return defaultBorderRadius;}" };
const result = set.fileFinishedImporting("modules/voice_panel/native/utils/computeCardBorderRadius.tsx");

export default fn;