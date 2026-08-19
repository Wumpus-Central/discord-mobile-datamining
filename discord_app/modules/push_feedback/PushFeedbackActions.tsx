// === Module 10812: receivedNotification ===

// Module 10812 (receivedNotification)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  const obj = { type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type };
  obj.dispatch(obj);
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  dispatcherDefault.dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};