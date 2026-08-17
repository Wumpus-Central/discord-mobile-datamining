// discord_app/modules/forwarding/ForwardingAnalyticsUtils.tsx
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/forwarding/ForwardingAnalyticsUtils.tsx");

export const trackForwardStart = function trackForwardStart(channel_id, id, source) {
  let obj = expandEventPropertiesDefault;
  obj = { channel_id, message_id: id, source };
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
    const tmp13 = require;
    const tmpResult = expandEventPropertiesDefault;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guild_id));
    const obj5 = collectGuildAnalyticsMetadata;
    const merged1 = Object.assign(tmp13(5042).collectChannelAnalyticsMetadata(channel));
    tmpResult.track(AnalyticEvents.MESSAGE_SHORTCUT_ACTION_SENT, obj);
    const tmp13Result = tmp13(5042);
  }
};
export const trackForwardCopyLink = function trackForwardCopyLink(channel_id, id) {
  let obj = expandEventPropertiesDefault;
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