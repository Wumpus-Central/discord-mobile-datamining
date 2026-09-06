// === Module 11371: ChannelSafetyWarningsActionCreators ===

// Module 11371 (ChannelSafetyWarningsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10915 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export const dismissChannelSafetyWarnings = function dismissChannelSafetyWarnings(channelId, items) {
  const obj = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId), body: { warning_ids: items }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(request);
};
export const setChannelSafetyWarningFeedback = function setChannelSafetyWarningFeedback(channelId, warningId, feedbackType) {
  const obj = { type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType };
  obj.dispatch(obj);
};
export const clearChannelSafetyWarnings = function clearChannelSafetyWarnings(channelId) {
  const obj = { type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId };
  obj.dispatch(obj);
};
export const acknowledgeChannelSafetyWarningTooltip = function acknowledgeChannelSafetyWarningTooltip(channelId) {
  const obj = { type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId };
  obj.dispatch(obj);
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