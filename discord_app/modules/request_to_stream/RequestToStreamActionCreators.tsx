// discord_app/modules/request_to_stream/RequestToStreamActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import RequestToStreamConstants from "RequestToStreamConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
