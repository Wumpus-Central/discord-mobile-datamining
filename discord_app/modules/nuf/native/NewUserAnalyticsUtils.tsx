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
  const obj = {};
  const merged = Object.assign(arg2);
  obj.flow_type = "Mobile NUX Post Reg";
  obj.from_step = STEP_GUILD_TEMPLATE;
  obj.to_step = STEP_FRIEND_LIST;
  obj.seconds_on_from_step = result;
  obj.track(AnalyticEvents.NUO_TRANSITION, obj);
};
