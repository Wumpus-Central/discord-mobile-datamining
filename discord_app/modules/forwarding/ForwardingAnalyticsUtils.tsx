// === Module 11506: ForwardingAnalyticsUtils ===

// Module 11506 (ForwardingAnalyticsUtils)
import _mod12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5106 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackForwardAddRecipientOnce() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const onceResult = _mod12.once((channel_id, message_id, has_query) => {
      AnalyticsUtilsDefault.track(constants.FORWARD_ADD_RECIPIENT, { channel_id, message_id, has_query });
    });
    cResult[0] = onceResult;
    let first = onceResult;
    const tmpResult = _mod12;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useTrackForwardAddRecipientOnce() {
  return noop.useMemo(() => _mod12.once((channel_id, message_id, has_query) => {
    closure_1_1(closure_1_2[3]).track(constants.FORWARD_ADD_RECIPIENT, { channel_id, message_id, has_query });
  }), []);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackForwardEditSearchOnce() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const onceResult = _mod12.once((channel_id, message_id) => {
      AnalyticsUtilsDefault.track(constants.FORWARD_EDIT_SEARCH, { channel_id, message_id });
    });
    cResult[0] = onceResult;
    let first = onceResult;
    const tmpResult = _mod12;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useTrackForwardEditSearchOnce() {
  return noop.useMemo(() => _mod12.once((channel_id, message_id) => {
    closure_1_1(closure_1_2[3]).track(constants.FORWARD_EDIT_SEARCH, { channel_id, message_id });
  }), []);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/ForwardingAnalyticsUtils.tsx");

export const trackForwardStart = function trackForwardStart(channel_id, id, source) {
  AnalyticsUtilsDefault.track(AnalyticEvents.FORWARD_MESSAGE_STARTED, { channel_id, message_id: id, source });
};
export const trackForwardCancel = function trackForwardCancel(arg0) {
  ({ channelId, messageId, numDestinationChanges, numQueryChanges } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.FORWARD_MESSAGE_CANCELLED, { channel_id: channelId, message_id: messageId, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges });
};
export const trackForwardSent = function trackForwardSent(arg0) {
  ({ channelId, messageId } = arg0);
  ({ hasError, hasContextMessage, numDestinations, numDestinationChanges, numQueryChanges, anyDestinationHasSlowmode, source } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.FORWARD_MESSAGE_SENT, { channel_id: channelId, message_id: messageId, has_error: hasError, has_context_message: hasContextMessage, num_destinations: numDestinations, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges, any_destination_has_slowmode: anyDestinationHasSlowmode });
  if ("message-shortcut" === source) {
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { action: "forward", original_message_id: messageId };
    const tmpResult = AnalyticsUtilsDefault;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild_id));
    const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
    tmpResult.track(AnalyticEvents.MESSAGE_SHORTCUT_ACTION_SENT, obj2);
    const tmp13Result = AppAnalyticsUtils;
  }
};
export const trackForwardCopyLink = function trackForwardCopyLink(channel_id, id) {
  AnalyticsUtilsDefault.track(AnalyticEvents.FORWARD_COPY_LINK, { channel_id, message_id: id });
};
export const useTrackForwardAddRecipientOnce = tmp2;
export const useTrackForwardEditSearchOnce = tmp3;
export const useTrackForwardEditContextMessageOnce = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackForwardEditContextMessageOnce() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const onceResult = _mod12.once((channel_id, message_id) => {
      AnalyticsUtilsDefault.track(constants.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id, message_id });
    });
    cResult[0] = onceResult;
    let first = onceResult;
    const tmpResult = _mod12;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useTrackForwardEditContextMessageOnce() {
  return noop.useMemo(() => _mod12.once((channel_id, message_id) => {
    closure_1_1(closure_1_2[3]).track(constants.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id, message_id });
  }), []);
});