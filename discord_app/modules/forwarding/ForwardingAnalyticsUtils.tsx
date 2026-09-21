// === Module 11933: ForwardingAnalyticsUtils ===

// Module 11933 (ForwardingAnalyticsUtils)
import _mod12 from "module_12" /* 12 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
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
export const useTrackForwardAddRecipientOnce = function useTrackForwardAddRecipientOnce() {
  return noop.useMemo(() => _mod12.once((channel_id, message_id, has_query) => {
    closure_1_1(closure_1_2[3]).track(constants.FORWARD_ADD_RECIPIENT, { channel_id, message_id, has_query });
  }), []);
};
export const useTrackForwardEditSearchOnce = function useTrackForwardEditSearchOnce() {
  return noop.useMemo(() => _mod12.once((channel_id, message_id) => {
    closure_1_1(closure_1_2[3]).track(constants.FORWARD_EDIT_SEARCH, { channel_id, message_id });
  }), []);
};
export const useTrackForwardEditContextMessageOnce = function useTrackForwardEditContextMessageOnce() {
  return noop.useMemo(() => _mod12.once((channel_id, message_id) => {
    closure_1_1(closure_1_2[3]).track(constants.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id, message_id });
  }), []);
};