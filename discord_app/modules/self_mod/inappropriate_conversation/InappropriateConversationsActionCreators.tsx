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
  DispatcherDefault.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
};
export const stopVibingWumpusMusic = function stopVibingWumpusMusic() {
  DispatcherDefault.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
};
export const pauseVibingWumpusMusic = function pauseVibingWumpusMusic() {
  DispatcherDefault.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
};
export const deleteAllSafetyWarnings = function deleteAllSafetyWarnings(arg0) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.DELETE_SAFETY_WARNINGS(arg0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.del(obj);
};
export const markAsInappropriateConversation = function markAsInappropriateConversation(
  id,
  INAPPROPRIATE_CONVERSATION_TIER_1,
) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.ADD_SAFETY_WARNING(id),
    body: { safety_warning_type: INAPPROPRIATE_CONVERSATION_TIER_1 },
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.post(request);
};
