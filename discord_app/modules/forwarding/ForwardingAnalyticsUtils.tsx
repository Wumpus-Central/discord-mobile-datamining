// === Module 11307: ForwardingAnalyticsUtils ===

// Module 11307 (ForwardingAnalyticsUtils)
import _mod12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod12;
    const onceResult = tmpResult.once((channel_id, message_id, has_query) => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { channel_id, message_id, has_query };
      obj.track(constants.FORWARD_ADD_RECIPIENT, obj2);
    });
    cResult[0] = onceResult;
    first = onceResult;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useMemo(() => {
  let obj = _mod12;
  return obj.once((channel_id, message_id, has_query) => {
    const obj = closure_1_1(closure_1_2[3]);
    const obj2 = { channel_id, message_id, has_query };
    obj.track(constants.FORWARD_ADD_RECIPIENT, obj2);
  });
}, []));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod12;
    const onceResult = tmpResult.once((channel_id, message_id) => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { channel_id, message_id };
      obj.track(constants.FORWARD_EDIT_SEARCH, obj2);
    });
    cResult[0] = onceResult;
    first = onceResult;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useMemo(() => {
  let obj = _mod12;
  return obj.once((channel_id, message_id) => {
    const obj = closure_1_1(closure_1_2[3]);
    const obj2 = { channel_id, message_id };
    obj.track(constants.FORWARD_EDIT_SEARCH, obj2);
  });
}, []));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod12;
    const onceResult = tmpResult.once((channel_id, message_id) => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { channel_id, message_id };
      obj.track(constants.FORWARD_EDIT_CONTEXT_MESSAGE, obj2);
    });
    cResult[0] = onceResult;
    first = onceResult;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useMemo(() => {
  let obj = _mod12;
  return obj.once((channel_id, message_id) => {
    const obj = closure_1_1(closure_1_2[3]);
    const obj2 = { channel_id, message_id };
    obj.track(constants.FORWARD_EDIT_CONTEXT_MESSAGE, obj2);
  });
}, []));
const result = size.fileFinishedImporting("modules/forwarding/ForwardingAnalyticsUtils.tsx");

export const trackForwardStart = function trackForwardStart(channel_id, id, source) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { channel_id, message_id: id, source };
  obj.track(AnalyticEvents.FORWARD_MESSAGE_STARTED, obj2);
};
export const trackForwardCancel = function trackForwardCancel(arg0) {
  let channelId;
  let messageId;
  let numDestinationChanges;
  let numQueryChanges;
  ({ channelId, messageId, numDestinationChanges, numQueryChanges } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FORWARD_MESSAGE_CANCELLED, { channel_id: channelId, message_id: messageId, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges });
};
export const trackForwardSent = function trackForwardSent(arg0) {
  let anyDestinationHasSlowmode;
  let channelId;
  let hasContextMessage;
  let hasError;
  let messageId;
  let numDestinationChanges;
  let numDestinations;
  let numQueryChanges;
  let source;
  ({ channelId, messageId } = arg0);
  ({ hasError, hasContextMessage, numDestinations, numDestinationChanges, numQueryChanges, anyDestinationHasSlowmode, source } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FORWARD_MESSAGE_SENT, { channel_id: channelId, message_id: messageId, has_error: hasError, has_context_message: hasContextMessage, num_destinations: numDestinations, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges, any_destination_has_slowmode: anyDestinationHasSlowmode });
  if ("message-shortcut" === source) {
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { action: "forward", original_message_id: messageId };
    const track = AnalyticsUtilsDefault.track;
    const MESSAGE_SHORTCUT_ACTION_SENT = AnalyticEvents.MESSAGE_SHORTCUT_ACTION_SENT;
    AnalyticsUtilsDefault;
    let guild_id;
    const collectGuildAnalyticsMetadata = AppAnalyticsUtils.collectGuildAnalyticsMetadata;
    AppAnalyticsUtils;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const merged = Object.assign(collectGuildAnalyticsMetadata(guild_id));
    const tmp14Result = AppAnalyticsUtils;
    const merged1 = Object.assign(tmp14Result.collectChannelAnalyticsMetadata(channel));
    track(MESSAGE_SHORTCUT_ACTION_SENT, obj2);
  }
};
export const trackForwardCopyLink = function trackForwardCopyLink(channel_id, id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { channel_id, message_id: id };
  obj.track(AnalyticEvents.FORWARD_COPY_LINK, obj2);
};
export const useTrackForwardAddRecipientOnce = tmp2;
export const useTrackForwardEditSearchOnce = tmp3;
export const useTrackForwardEditContextMessageOnce = tmp4;