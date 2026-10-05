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
  let obj4;
  const obj = DispatcherDefault;
  const obj2 = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj2);
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId),
    body: { warning_ids: items },
    oldFormErrors: true,
    rejectWithError: obj4.rejectWithMigratedError(),
  };
  const post = HTTP.post;
  obj4 = HTTPUtils;
  return post(request);
};
export const setChannelSafetyWarningFeedback = function setChannelSafetyWarningFeedback(
  channelId,
  warningId,
  feedbackType,
) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType };
  obj.dispatch(obj2);
};
export const clearChannelSafetyWarnings = function clearChannelSafetyWarnings(channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId };
  obj.dispatch(obj2);
};
export const acknowledgeChannelSafetyWarningTooltip = function acknowledgeChannelSafetyWarningTooltip(channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId };
  obj.dispatch(obj2);
};
export const reportFalsePositive = function reportFalsePositive(channelId) {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  const post = HTTP.post;
  const obj = {
    url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(channelId),
    rejectWithError: obj2.rejectWithMigratedError(),
  };
  obj2 = HTTPUtils;
  return post(obj);
};
export const markAsStrangerDanger = function markAsStrangerDanger(id) {
  let obj;
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
  const post = HTTP.post;
  obj = { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER };
  obj3 = HTTPUtils;
  return post(request);
};
