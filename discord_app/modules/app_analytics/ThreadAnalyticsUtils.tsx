// === Module 6089: collectThreadMetadata ===

// Module 6089 (collectThreadMetadata)
import updateFromGuild from "updateFromGuild";
import updateState from "updateState";
import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const result = require("createChannelRecord").fileFinishedImporting("modules/app_analytics/ThreadAnalyticsUtils.tsx");

export const collectThreadMetadata = function collectThreadMetadata(channel, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = null;
  if (null != channel) {
    tmp = null;
    if (THREAD_CHANNEL_TYPES.has(channel.type)) {
      let lastRouteChangeSource;
      if (flag) {
        let obj = require(1222) /* transitionTo */;
        lastRouteChangeSource = obj.getLastRouteChangeSource();
      }
      obj = { location: null, thread_approximate_member_count: null, thread_approximate_message_count: null, thread_archived: null, thread_locked: null, thread_auto_archive_duration_minutes: null, thread_approximate_creation_date: null, can_send_message: null, parent_channel_type: null };
      obj[0] = lastRouteChangeSource;
      obj[1] = memberCount.getMemberCount(channel.id);
      obj[2] = count.getCount(channel.id);
      const threadMetadata = channel.threadMetadata;
      let archived;
      if (threadMetadata != null) {
        archived = threadMetadata.archived;
      }
      obj[3] = true === archived;
      const threadMetadata2 = channel.threadMetadata;
      let flag3;
      if (threadMetadata2 != null) {
        flag3 = threadMetadata2.locked;
      }
      if (flag3 == null) {
        flag3 = false;
      }
      obj[4] = flag3;
      const threadMetadata3 = channel.threadMetadata;
      let num;
      if (threadMetadata3 != null) {
        num = threadMetadata3.autoArchiveDuration;
      }
      if (num == null) {
        num = 0;
      }
      obj[5] = num;
      obj[6] = importDefault(11).extractTimestamp(channel.id);
      obj[7] = getUncachedChannelPermissions.can(Permissions.SEND_MESSAGES, channel);
      obj[8] = channel.parentChannelThreadType;
      tmp = obj;
      const obj3 = importDefault(11);
    }
  }
  return tmp;
};