// discord_app/modules/nuf/native/NewUserAnalyticsUtils.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
let timestamp = 0;
let result = size.fileFinishedImporting("modules/nuf/native/NewUserAnalyticsUtils.tsx");

export const trackNUFStep = function trackNUFStep(STEP_GUILD_TEMPLATE, STEP_FRIEND_LIST, arg2) {
  timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  const obj = {
    flow_type: "Mobile NUX Post Reg",
    from_step: STEP_GUILD_TEMPLATE,
    to_step: STEP_FRIEND_LIST,
    seconds_on_from_step: result,
  };
  const track = AnalyticsUtilsDefault.track;
  const NUO_TRANSITION = AnalyticEvents.NUO_TRANSITION;
  AnalyticsUtilsDefault;
  const merged = Object.assign(arg2);
  track(NUO_TRANSITION, obj);
};
