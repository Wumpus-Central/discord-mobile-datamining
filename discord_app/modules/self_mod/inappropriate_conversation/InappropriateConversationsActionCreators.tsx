import { sendRequest } from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
// discord_app/modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx
import { Endpoints } from "ME";

const result = require("sendRequest").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx");

export const playVibingWumpusMusic = function playVibingWumpusMusic() {
  dispatcher.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
};
export const stopVibingWumpusMusic = function stopVibingWumpusMusic() {
  dispatcher.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
};
export const pauseVibingWumpusMusic = function pauseVibingWumpusMusic() {
  dispatcher.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
};
export const deleteAllSafetyWarnings = function deleteAllSafetyWarnings(arg0) {
  const HTTP = sendRequest /* sendRequest */.HTTP;
  const obj = { url: Endpoints.DELETE_SAFETY_WARNINGS(arg0), rejectWithError: null };
  obj[1] = sendRequest /* sendRequest */.rejectWithMigratedError();
  return HTTP.del(obj);
};
export const markAsInappropriateConversation = function markAsInappropriateConversation(id, INAPPROPRIATE_CONVERSATION_TIER_1) {
  const HTTP = sendRequest /* sendRequest */.HTTP;
  obj = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj, rejectWithError: null };
  obj = { safety_warning_type: INAPPROPRIATE_CONVERSATION_TIER_1 };
  obj[2] = sendRequest /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};