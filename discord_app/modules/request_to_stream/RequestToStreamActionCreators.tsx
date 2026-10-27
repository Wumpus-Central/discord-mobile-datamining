// === Module 14342: RequestToStreamActionCreators ===

// Module 14342 (RequestToStreamActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import RequestToStreamConstants from "RequestToStreamConstants" /* 14343 */;
import size from "module_2" /* 2 */;

let closure_2 = RequestToStreamConstants.REQUEST_TO_STREAM_COOLDOWN_MS;
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamActionCreators.tsx");

export const startStreamRequestCooldown = function startStreamRequestCooldown(userId) {
  importDefault = userId;
  DispatcherDefault.dispatch({ type: "STREAM_REQUEST_COOLDOWN_START", userId });
  const timerId = setTimeout(() => {
    DispatcherDefault.dispatch({ type: "STREAM_REQUEST_COOLDOWN_END", userId });
  }, closure_2);
};
export const dismissStreamRequestReminder = function dismissStreamRequestReminder(messageId) {
  DispatcherDefault.dispatch({ type: "STREAM_REQUEST_REMINDER_DISMISS", messageId });
};