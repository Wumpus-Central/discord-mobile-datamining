// === Module 19627: computeCardBorderRadius ===

// Module 19627 (computeCardBorderRadius)
import VoicePanelConstants from "VoicePanelConstants" /* 11363 */;
import size from "module_2" /* 2 */;

const items = [{ code: "(function computeCardBorderRadius_computeCardBorderRadiusTsx1({id:id,mode:mode,focused:focused,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}){let[VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP]=this.__closure;if(mode===VoicePanelModes.PANEL){if(focused!=null){if(focused===id){return 0;}else if(isSelf){return DEFAULT_BORDER_RADIUS_PIP;}}return defaultBorderRadius;}if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return defaultBorderRadius;})" }, , ];
({ VoicePanelModes: arr[1], DEFAULT_BORDER_RADIUS_PIP: arr[2] } = VoicePanelConstants);
let c0;
let c1;
[tmp3, tmp4, tmp5] = items;
function computeCardBorderRadius(arg0) {
  ({ mode, focused, defaultBorderRadius } = arg0);
  if (mode === _undefined.PANEL) {
    if (null != focused) {
      if (focused === tmp) {
        return 0;
      } else if (tmp2) {
        return c1;
      }
    }
    return defaultBorderRadius;
  } else {
    let tmp4 = defaultBorderRadius;
    if (mode === tmp3.PIP) {
      tmp4 = c1;
    }
    return tmp4;
  }
}
const items1 = [tmp4, tmp5];
computeCardBorderRadius.__closure = items1;
computeCardBorderRadius.__workletHash = 13653753118375;
computeCardBorderRadius.__initData = tmp3;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/computeCardBorderRadius.tsx");

export default computeCardBorderRadius;