// === Module 19311: getPIPBottomOffsetForPIPMode ===

// Module 19311 (getPIPBottomOffsetForPIPMode)
import MorphablePanelConstants from "MorphablePanelConstants" /* 11420 */;
import size from "module_2" /* 2 */;

const items = [{ code: "(function getPIPBottomOffsetForPIPMode_getPIPBottomOffsetForPIPModeTsx1(screenName){let[DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,PIP_AVOIDANCE_TAB_BAR_HEIGHT]=this.__closure;switch(screenName){case'panels':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'channel':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'notifications':case'main_tab':case'guilds':return PIP_AVOIDANCE_TAB_BAR_HEIGHT+PIP_WINDOW_OFFSET;default:return 0;}})" }, 60, MorphablePanelConstants.PIP_WINDOW_OFFSET, 46];
let c0;
let c1;
let c2;
[tmp2, tmp3, tmp4, tmp5] = items;
function getPIPBottomOffsetForPIPMode(arg0) {
  if ("panels" !== arg0) {
    if ("channel" !== arg0) {
      if ("notifications" !== arg0) {
        if ("main_tab" !== arg0) {
          if ("guilds" !== arg0) {
            return 0;
          }
        }
      }
      return c2 + c1;
    }
  }
  return c0 + c1;
}
const items1 = [tmp3, tmp4, tmp5];
getPIPBottomOffsetForPIPMode.__closure = items1;
getPIPBottomOffsetForPIPMode.__workletHash = 9505843948738;
getPIPBottomOffsetForPIPMode.__initData = tmp2;
const result = size.fileFinishedImporting("modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx");

export default getPIPBottomOffsetForPIPMode;
export const PIP_AVOIDANCE_TAB_BAR_HEIGHT = 46;