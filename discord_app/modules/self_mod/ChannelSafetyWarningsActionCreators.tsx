// === Module 10946: dismissChannelSafetyWarnings ===

// Module 10946 (dismissChannelSafetyWarnings)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import handleConnectionOpen from "handleConnectionOpen" /* 10591 */;

const SafetyWarningTypes = handleConnectionOpen.SafetyWarningTypes;
const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export const dismissChannelSafetyWarnings = function dismissChannelSafetyWarnings(channelId, items) {
  let obj = dispatcherDefault;
  obj = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj);
  const HTTP = sendRequest.HTTP;
  obj = { url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId), body: obj1, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const setChannelSafetyWarningFeedback = function setChannelSafetyWarningFeedback(channelId, warningId, feedbackType) {
  let obj = dispatcherDefault;
  obj = { type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType };
  obj.dispatch(obj);
};
export const clearChannelSafetyWarnings = function clearChannelSafetyWarnings(channelId) {
  let obj = dispatcherDefault;
  obj = { type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId };
  obj.dispatch(obj);
};
export const acknowledgeChannelSafetyWarningTooltip = function acknowledgeChannelSafetyWarningTooltip(channelId) {
  let obj = dispatcherDefault;
  obj = { type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId };
  obj.dispatch(obj);
};
export const reportFalsePositive = function reportFalsePositive(arg0) {
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(arg0), rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const markAsStrangerDanger = function markAsStrangerDanger(id) {
  const HTTP = sendRequest.HTTP;
  obj = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj, rejectWithError: null };
  obj = { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER };
  obj[2] = sendRequest.rejectWithMigratedError();
  return HTTP.post(obj);
};