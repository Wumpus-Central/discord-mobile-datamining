import { SafetyWarningTypes } from "handleConnectionOpen";
import { Endpoints } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export const dismissChannelSafetyWarnings = function dismissChannelSafetyWarnings(channelId, items) {
  let obj = importDefault(709);
  obj = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj);
  const HTTP = require(530) /* sendRequest */.HTTP;
  obj = { url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId), body: obj1, oldFormErrors: true, rejectWithError: null };
  obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};
export const setChannelSafetyWarningFeedback = function setChannelSafetyWarningFeedback(channelId, warningId, feedbackType) {
  let obj = importDefault(709);
  obj = { type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType };
  obj.dispatch(obj);
};
export const clearChannelSafetyWarnings = function clearChannelSafetyWarnings(channelId) {
  let obj = importDefault(709);
  obj = { type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId };
  obj.dispatch(obj);
};
export const acknowledgeChannelSafetyWarningTooltip = function acknowledgeChannelSafetyWarningTooltip(channelId) {
  let obj = importDefault(709);
  obj = { type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId };
  obj.dispatch(obj);
};
export const reportFalsePositive = function reportFalsePositive(arg0) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  const obj = { url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(arg0), rejectWithError: null };
  obj[1] = require(530) /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};
export const markAsStrangerDanger = function markAsStrangerDanger(id) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  obj = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj, rejectWithError: null };
  obj = { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER };
  obj[2] = require(530) /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};