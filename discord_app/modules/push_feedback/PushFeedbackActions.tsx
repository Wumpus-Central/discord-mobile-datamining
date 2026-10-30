// === Module 10139: PushFeedbackActions ===

// Module 10139 (PushFeedbackActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export function receivedNotification(messageId, channelId, tracking_type) {
  DispatcherDefault.dispatch({ type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type });
}
export function handleSurveyCleanup() {
  DispatcherDefault.dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
}