// discord_app/modules/nuf/native/NewUserAnalyticsUtils.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
let c3 = 0;
let result = set.fileFinishedImporting("modules/nuf/native/NewUserAnalyticsUtils.tsx");

export const trackNUFStep = function trackNUFStep(STEP_GUILD_TEMPLATE, STEP_FRIEND_LIST, arg2) {
  const timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  let obj = expandEventPropertiesDefault;
  obj = {};
  const merged = Object.assign(arg2);
  obj.flow_type = "Mobile NUX Post Reg";
  obj.from_step = STEP_GUILD_TEMPLATE;
  obj.to_step = STEP_FRIEND_LIST;
  obj.seconds_on_from_step = result;
  obj.track(AnalyticEvents.NUO_TRANSITION, obj);
};