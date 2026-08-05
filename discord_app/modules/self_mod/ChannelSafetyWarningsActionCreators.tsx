// discord_app/modules/self_mod/ChannelSafetyWarningsActionCreators.tsx
import { SafetyWarningTypes } from "handleConnectionOpen";
import { Endpoints } from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

const result = require("dispatcher").fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export const dismissChannelSafetyWarnings = function dismissChannelSafetyWarnings(channelId, items) {
  let obj = dispatcher;
  obj = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj);
  const HTTP = sendRequest /* sendRequest */.HTTP;
  obj = { url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId), body: obj1, oldFormErrors: true, rejectWithError: null };
  obj[3] = sendRequest /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};
export const setChannelSafetyWarningFeedback = function setChannelSafetyWarningFeedback(channelId, warningId, feedbackType) {
  let obj = dispatcher;
  obj = { type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType };
  obj.dispatch(obj);
};
export const clearChannelSafetyWarnings = function clearChannelSafetyWarnings(channelId) {
  let obj = dispatcher;
  obj = { type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId };
  obj.dispatch(obj);
};
export const acknowledgeChannelSafetyWarningTooltip = function acknowledgeChannelSafetyWarningTooltip(channelId) {
  let obj = dispatcher;
  obj = { type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId };
  obj.dispatch(obj);
};
export const reportFalsePositive = function reportFalsePositive(arg0) {
  const HTTP = sendRequest /* sendRequest */.HTTP;
  const obj = { url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(arg0), rejectWithError: null };
  obj[1] = sendRequest /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};
export const markAsStrangerDanger = function markAsStrangerDanger(id) {
  const HTTP = sendRequest /* sendRequest */.HTTP;
  obj = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj, rejectWithError: null };
  obj = { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER };
  obj[2] = sendRequest /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};