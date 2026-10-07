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
  const obj2 = {};
  const merged = Object.assign(arg2);
  obj2.flow_type = "Mobile NUX Post Reg";
  obj2.from_step = STEP_GUILD_TEMPLATE;
  obj2.to_step = STEP_FRIEND_LIST;
  obj2.seconds_on_from_step = result;
  AnalyticsUtilsDefault.track(AnalyticEvents.NUO_TRANSITION, obj2);
};
