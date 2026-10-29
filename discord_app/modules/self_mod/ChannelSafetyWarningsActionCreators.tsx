// discord_app/modules/self_mod/ChannelSafetyWarningsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export function dismissChannelSafetyWarnings(channelId, items) {
  DispatcherDefault.dispatch({ type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items });
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId),
    body: { warning_ids: items },
    oldFormErrors: true,
    rejectWithError: null,
  };
  const obj2 = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return HTTP.post(request);
}
export function setChannelSafetyWarningFeedback(channelId, warningId, feedbackType) {
  DispatcherDefault.dispatch({ type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType });
}
export function clearChannelSafetyWarnings(channelId) {
  DispatcherDefault.dispatch({ type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId });
}
export function acknowledgeChannelSafetyWarningTooltip(channelId) {
  DispatcherDefault.dispatch({ type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId });
}
export function reportFalsePositive(channelId) {
  const HTTP = HTTPUtils.HTTP;
  const obj = {
    url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(channelId),
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.post(obj);
}
export function markAsStrangerDanger(id) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.ADD_SAFETY_WARNING(id),
    body: { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER },
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.post(request);
}
