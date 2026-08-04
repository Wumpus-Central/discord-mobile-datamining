// discord_app/modules/lurker_mode/LurkerPreviewAnalytics.tsx
import initialize from "initialize";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/lurker_mode/LurkerPreviewAnalytics.tsx");

export const trackLurkStarted = function trackLurkStarted(closure_0, joinSource, closure_13) {
  let tmp = joinSource;
  let obj = importDefault(698);
  obj = { guild_id: closure_0, num_lurked_guilds: initialize.lurkingGuildIds().length, join_source: null, location: null };
  if (joinSource == null) {
    tmp = null;
  }
  let tmp2 = closure_13;
  obj[2] = tmp;
  if (closure_13 == null) {
    tmp2 = null;
  }
  obj[3] = tmp2;
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_LURK_STARTED, obj);
};
export const trackJoinClicked = function trackJoinClicked(guild_id, LEAVE_PROMPT_LURKER, has_navigated_away) {
  let obj = importDefault(698);
  obj = { guild_id, num_lurked_guilds: initialize.lurkingGuildIds().length, join_source: LEAVE_PROMPT_LURKER, has_navigated_away };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_JOIN_CLICKED, obj);
};
export const trackLeavePromptLeaveClicked = function trackLeavePromptLeaveClicked(id) {
  let obj = importDefault(698);
  obj = { guild_id: id, num_lurked_guilds: initialize.lurkingGuildIds().length };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_LEAVE_PROMPT_LEAVE_CLICKED, obj);
};
export const trackGuildIconClicked = function trackGuildIconClicked(guild_id) {
  let obj = importDefault(698);
  obj = { guild_id, num_lurked_guilds: initialize.lurkingGuildIds().length };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_GUILD_ICON_CLICKED, obj);
};
export const trackLongPressLeaveClicked = function trackLongPressLeaveClicked(closure_0) {
  let obj = importDefault(698);
  obj = { guild_id: closure_0, num_lurked_guilds: initialize.lurkingGuildIds().length };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_LONG_PRESS_LEAVE_CLICKED, obj);
};