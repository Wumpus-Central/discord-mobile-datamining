// discord_app/modules/self_mod/ChannelSafetyWarningsActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../Constants.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import handleConnectionOpen from "ChannelSafetyWarningsStore.tsx";

const SafetyWarningTypes = handleConnectionOpen.SafetyWarningTypes;
const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export const dismissChannelSafetyWarnings = function dismissChannelSafetyWarnings(channelId, items) {
  let obj = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj);
  const HTTP = sendRequest.HTTP;
  obj = { url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId), body: obj1, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.post(obj);
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
export const reportFalsePositive = function reportFalsePositive(arg0) {
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(arg0), rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const markAsStrangerDanger = function markAsStrangerDanger(id) {
  const HTTP = sendRequest.HTTP;
  { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj, rejectWithError: null };
  obj = { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER };
  obj[2] = sendRequest.rejectWithMigratedError();
  return HTTP.post(obj);
};