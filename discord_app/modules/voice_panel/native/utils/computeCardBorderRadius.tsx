// discord_app/modules/voice_panel/native/utils/computeCardBorderRadius.tsx
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const DEFAULT_BORDER_RADIUS_PIP = VoicePanelConstants.DEFAULT_BORDER_RADIUS_PIP;
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
fn.__initData = {
  code: "function computeCardBorderRadius_computeCardBorderRadiusTsx1({id:id,mode:mode,focused:focused,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP}=this.__closure;if(mode===VoicePanelModes.PANEL){if(focused!=null){if(focused===id){return 0;}else if(isSelf){return DEFAULT_BORDER_RADIUS_PIP;}}return defaultBorderRadius;}if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return defaultBorderRadius;}",
};
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/computeCardBorderRadius.tsx");

export default fn;
