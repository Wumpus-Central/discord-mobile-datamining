// discord_app/modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx
import { Endpoints } from "ME";

const result = require("sendRequest").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx");

export const playVibingWumpusMusic = function playVibingWumpusMusic() {
  require("../../../Dispatcher.tsx").dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
};
export const stopVibingWumpusMusic = function stopVibingWumpusMusic() {
  require("../../../Dispatcher.tsx").dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
};
export const pauseVibingWumpusMusic = function pauseVibingWumpusMusic() {
  require("../../../Dispatcher.tsx").dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
};
export const deleteAllSafetyWarnings = function deleteAllSafetyWarnings(arg0) {
  const HTTP = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
  const obj = { url: Endpoints.DELETE_SAFETY_WARNINGS(arg0), rejectWithError: null };
  obj[1] = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.rejectWithMigratedError();
  return HTTP.del(obj);
};
export const markAsInappropriateConversation = function markAsInappropriateConversation(id, INAPPROPRIATE_CONVERSATION_TIER_1) {
  const HTTP = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
  obj = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj, rejectWithError: null };
  obj = { safety_warning_type: INAPPROPRIATE_CONVERSATION_TIER_1 };
  obj[2] = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};