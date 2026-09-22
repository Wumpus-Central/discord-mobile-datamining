// === Module 11638: ChannelSafetyWarningsActionCreators ===

// Module 11638 (ChannelSafetyWarningsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11185 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export const dismissChannelSafetyWarnings = function dismissChannelSafetyWarnings(channelId, items) {
  DispatcherDefault.dispatch({ type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId), body: { warning_ids: items }, oldFormErrors: true, rejectWithError: null };
  const obj2 = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return HTTP.post(request);
};
export const setChannelSafetyWarningFeedback = function setChannelSafetyWarningFeedback(channelId, warningId, feedbackType) {
  DispatcherDefault.dispatch({ type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType });
};
export const clearChannelSafetyWarnings = function clearChannelSafetyWarnings(channelId) {
  DispatcherDefault.dispatch({ type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId });
};
export const acknowledgeChannelSafetyWarningTooltip = function acknowledgeChannelSafetyWarningTooltip(channelId) {
  DispatcherDefault.dispatch({ type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId });
};
export const reportFalsePositive = function reportFalsePositive(channelId) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(channelId), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const markAsStrangerDanger = function markAsStrangerDanger(id) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.ADD_SAFETY_WARNING(id), body: { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(request);
};