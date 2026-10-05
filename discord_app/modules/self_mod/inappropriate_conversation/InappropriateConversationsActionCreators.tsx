// discord_app/modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx",
);

export const playVibingWumpusMusic = function playVibingWumpusMusic() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
};
export const stopVibingWumpusMusic = function stopVibingWumpusMusic() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
};
export const pauseVibingWumpusMusic = function pauseVibingWumpusMusic() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
};
export const deleteAllSafetyWarnings = function deleteAllSafetyWarnings(arg0) {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  const del = HTTP.del;
  const obj = { url: Endpoints.DELETE_SAFETY_WARNINGS(arg0), rejectWithError: obj2.rejectWithMigratedError() };
  obj2 = HTTPUtils;
  return del(obj);
};
export const markAsInappropriateConversation = function markAsInappropriateConversation(
  id,
  INAPPROPRIATE_CONVERSATION_TIER_1,
) {
  let obj;
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
  const post = HTTP.post;
  obj = { safety_warning_type: INAPPROPRIATE_CONVERSATION_TIER_1 };
  obj3 = HTTPUtils;
  return post(request);
};
