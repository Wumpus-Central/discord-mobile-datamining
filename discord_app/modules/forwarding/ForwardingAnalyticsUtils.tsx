// discord_app/modules/forwarding/ForwardingAnalyticsUtils.tsx
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/forwarding/ForwardingAnalyticsUtils.tsx");

export const trackForwardStart = function trackForwardStart(channel_id, id, source) {
  let obj = expandEventProperties;
  obj = { channel_id, message_id: id, source };
  obj.track(AnalyticEvents.FORWARD_MESSAGE_STARTED, obj);
};
export const trackForwardCancel = function trackForwardCancel(arg0) {
  let channelId;
  let messageId;
  let numDestinationChanges;
  let numQueryChanges;
  ({ channelId, messageId, numDestinationChanges, numQueryChanges } = arg0);
  expandEventProperties.track(AnalyticEvents.FORWARD_MESSAGE_CANCELLED, { channel_id: channelId, message_id: messageId, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges });
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
  let obj = expandEventProperties;
  obj.track(AnalyticEvents.FORWARD_MESSAGE_SENT, { channel_id: channelId, message_id: messageId, has_error: hasError, has_context_message: hasContextMessage, num_destinations: numDestinations, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges, any_destination_has_slowmode: anyDestinationHasSlowmode });
  if ("message-shortcut" === source) {
    channel = channel.getChannel(channelId);
    obj = { action: "forward", original_message_id: null };
    obj[1] = messageId;
    const tmp13 = require;
    const tmpResult = expandEventProperties;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guild_id));
    const obj5 = collectGuildAnalyticsMetadata;
    const merged1 = Object.assign(tmp13(4539).collectChannelAnalyticsMetadata(channel));
    tmpResult.track(AnalyticEvents.MESSAGE_SHORTCUT_ACTION_SENT, obj);
    const tmp13Result = tmp13(4539);
  }
};
export const trackForwardCopyLink = function trackForwardCopyLink(channel_id, id) {
  let obj = expandEventProperties;
  obj = { channel_id, message_id: id };
  obj.track(AnalyticEvents.FORWARD_COPY_LINK, obj);
};
export const useTrackForwardAddRecipientOnce = function useTrackForwardAddRecipientOnce() {
  return React.useMemo(() => callback(table[5]).once((channel_id, message_id, has_query) => {
    let obj = callback(table[3]);
    obj = { channel_id, message_id, has_query };
    obj.track(constants.FORWARD_ADD_RECIPIENT, obj);
  }), []);
};
export const useTrackForwardEditSearchOnce = function useTrackForwardEditSearchOnce() {
  return React.useMemo(() => callback(table[5]).once((channel_id, message_id) => {
    let obj = callback(table[3]);
    obj = { channel_id, message_id };
    obj.track(constants.FORWARD_EDIT_SEARCH, obj);
  }), []);
};
export const useTrackForwardEditContextMessageOnce = function useTrackForwardEditContextMessageOnce() {
  return React.useMemo(() => callback(table[5]).once((channel_id, message_id) => {
    let obj = callback(table[3]);
    obj = { channel_id, message_id };
    obj.track(constants.FORWARD_EDIT_CONTEXT_MESSAGE, obj);
  }), []);
};