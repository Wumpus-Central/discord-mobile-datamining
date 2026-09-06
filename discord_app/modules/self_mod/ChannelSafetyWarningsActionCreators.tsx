// discord_app/modules/self_mod/ChannelSafetyWarningsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export const dismissChannelSafetyWarnings = function dismissChannelSafetyWarnings(channelId, items) {
  const obj = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj);
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId),
    body: { warning_ids: items },
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.post(request);
};
export const setChannelSafetyWarningFeedback = function setChannelSafetyWarningFeedback(
  channelId,
  warningId,
  feedbackType,
) {
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
  const HTTP = HTTPUtils.HTTP;
  const obj = {
    url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(arg0),
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.post(obj);
};
export const markAsStrangerDanger = function markAsStrangerDanger(id) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.ADD_SAFETY_WARNING(id),
    body: { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER },
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.post(request);
};
