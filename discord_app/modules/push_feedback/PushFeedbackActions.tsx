// discord_app/modules/push_feedback/PushFeedbackActions.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type };
  obj.dispatch(obj2);
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};
