// discord_app/modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx
import set from "../../../../../_runtime/00002_set.js";
import MIN_PAN_GESTURE_MOVE from "MorphablePanelConstants.tsx";

const PIP_WINDOW_OFFSET = MIN_PAN_GESTURE_MOVE.PIP_WINDOW_OFFSET;
const fn = function _(arg0) {
  if ("panels" !== arg0) {
    if ("channel" !== arg0) {
      if ("notifications" !== arg0) {
        if ("main_tab" !== arg0) {
          if ("guilds" !== arg0) {
            return 0;
          }
        }
      }
      return 46 + PIP_WINDOW_OFFSET;
    }
  }
  return 60 + PIP_WINDOW_OFFSET;
};
fn.__closure = { DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, PIP_AVOIDANCE_TAB_BAR_HEIGHT: 46 };
fn.__workletHash = 11461742802267;
fn.__initData = { code: "function getPIPBottomOffsetForPIPMode_getPIPBottomOffsetForPIPModeTsx1(screenName){const{DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;switch(screenName){case'panels':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'channel':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'notifications':case'main_tab':case'guilds':return PIP_AVOIDANCE_TAB_BAR_HEIGHT+PIP_WINDOW_OFFSET;default:return 0;}}" };
const result = set.fileFinishedImporting("modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx");

export default fn;
export const PIP_AVOIDANCE_TAB_BAR_HEIGHT = 46;