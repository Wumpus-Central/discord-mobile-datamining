// discord_app/modules/push_feedback/PushFeedbackActions.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  let obj = dispatcher;
  obj = { type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type };
  obj.dispatch(obj);
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  dispatcher.dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};