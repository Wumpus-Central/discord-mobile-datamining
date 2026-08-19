// discord_app/modules/forwarding/ForwardingAnalyticsUtils.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import noop from "../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/forwarding/ForwardingAnalyticsUtils.tsx");

export const trackForwardStart = function trackForwardStart(channel_id, id, source) {
  const obj = { channel_id, message_id: id, source };
  obj.track(AnalyticEvents.FORWARD_MESSAGE_STARTED, obj);
};
export const trackForwardCancel = function trackForwardCancel(arg0) {
  ({ channelId, messageId, numDestinationChanges, numQueryChanges } = arg0);
  expandEventPropertiesDefault.track(AnalyticEvents.FORWARD_MESSAGE_CANCELLED, { channel_id: channelId, message_id: messageId, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges });
};
export const trackForwardSent = function trackForwardSent(arg0) {
  ({ channelId, messageId } = arg0);
  ({ hasError, hasContextMessage, numDestinations, numDestinationChanges, numQueryChanges, anyDestinationHasSlowmode, source } = arg0);
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.FORWARD_MESSAGE_SENT, { channel_id: channelId, message_id: messageId, has_error: hasError, has_context_message: hasContextMessage, num_destinations: numDestinations, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges, any_destination_has_slowmode: anyDestinationHasSlowmode });
  if ("message-shortcut" === source) {
    channel = channel.getChannel(channelId);
    obj = { action: "forward", original_message_id: null };
    obj[1] = messageId;
    const tmpResult = expandEventPropertiesDefault;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guild_id));
    const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(channel));
    tmpResult.track(AnalyticEvents.MESSAGE_SHORTCUT_ACTION_SENT, obj);
    const tmp13Result = collectGuildAnalyticsMetadata;
  }
};
export const trackForwardCopyLink = function trackForwardCopyLink(channel_id, id) {
  const obj = { channel_id, message_id: id };
  obj.track(AnalyticEvents.FORWARD_COPY_LINK, obj);
};
export const useTrackForwardAddRecipientOnce = function useTrackForwardAddRecipientOnce() {
  return React.useMemo(() => callback(table[5]).once((channel_id, message_id, has_query) => {
    callback(table[3]);
    const obj = { channel_id, message_id, has_query };
    obj.track(constants.FORWARD_ADD_RECIPIENT, obj);
  }), []);
};
export const useTrackForwardEditSearchOnce = function useTrackForwardEditSearchOnce() {
  return React.useMemo(() => callback(table[5]).once((channel_id, message_id) => {
    callback(table[3]);
    const obj = { channel_id, message_id };
    obj.track(constants.FORWARD_EDIT_SEARCH, obj);
  }), []);
};
export const useTrackForwardEditContextMessageOnce = function useTrackForwardEditContextMessageOnce() {
  return React.useMemo(() => callback(table[5]).once((channel_id, message_id) => {
    callback(table[3]);
    const obj = { channel_id, message_id };
    obj.track(constants.FORWARD_EDIT_CONTEXT_MESSAGE, obj);
  }), []);
};