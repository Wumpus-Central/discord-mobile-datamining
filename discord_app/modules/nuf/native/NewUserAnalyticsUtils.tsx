// discord_app/modules/nuf/native/NewUserAnalyticsUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";

const AnalyticEvents = ME.AnalyticEvents;
let c3 = 0;
let result = obj132.fileFinishedImporting("modules/nuf/native/NewUserAnalyticsUtils.tsx");

export const trackNUFStep = function trackNUFStep(STEP_GUILD_TEMPLATE, STEP_FRIEND_LIST, arg2) {
  const timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  const obj = {};
  const merged = Object.assign(arg2);
  obj.flow_type = "Mobile NUX Post Reg";
  obj.from_step = STEP_GUILD_TEMPLATE;
  obj.to_step = STEP_FRIEND_LIST;
  obj.seconds_on_from_step = result;
  obj.track(AnalyticEvents.NUO_TRANSITION, obj);
};