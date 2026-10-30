// === Module 10963: InappropriateConversationsActionCreators ===

// Module 10963 (InappropriateConversationsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx");

export function playVibingWumpusMusic() {
  DispatcherDefault.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
}
export function stopVibingWumpusMusic() {
  DispatcherDefault.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
}
export function pauseVibingWumpusMusic() {
  DispatcherDefault.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
}
export function deleteAllSafetyWarnings(arg0) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.DELETE_SAFETY_WARNINGS(arg0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.del(obj);
}
export function markAsInappropriateConversation(id, INAPPROPRIATE_CONVERSATION_TIER_1) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.ADD_SAFETY_WARNING(id), body: { safety_warning_type: INAPPROPRIATE_CONVERSATION_TIER_1 }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(request);
}