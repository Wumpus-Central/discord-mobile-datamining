// discord_app/modules/app_analytics/ThreadAnalyticsUtils.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import transitionTo from "../routing/router_utils.tsx";
import updateFromGuild from "../threads/ThreadMembersStore.tsx";
import updateState from "../threads/ThreadMessageStore.tsx";
import { THREAD_CHANNEL_TYPES } from "../../records/ChannelRecord.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_analytics/ThreadAnalyticsUtils.tsx");

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
        let obj = transitionTo;
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
      obj[6] = DISCORD_EPOCHDefault.extractTimestamp(channel.id);
      obj[7] = closure_6.can(Permissions.SEND_MESSAGES, channel);
      obj[8] = channel.parentChannelThreadType;
      tmp = obj;
    }
  }
  return tmp;
};