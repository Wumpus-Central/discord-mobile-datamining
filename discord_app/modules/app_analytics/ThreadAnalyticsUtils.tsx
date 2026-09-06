// === Module 7774: ThreadAnalyticsUtils ===

// Module 7774 (ThreadAnalyticsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1100 */;
import ThreadMembersStore from "ThreadMembersStore" /* 7770 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7306 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
const THREAD_CHANNEL_TYPES = fn(1961).THREAD_CHANNEL_TYPES;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_analytics/ThreadAnalyticsUtils.tsx");

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
        let obj = router_utils;
        lastRouteChangeSource = obj.getLastRouteChangeSource();
      }
      obj = { location: lastRouteChangeSource, thread_approximate_member_count: ThreadMembersStore.getMemberCount(channel.id), thread_approximate_message_count: ThreadMessageStore.getCount(channel.id), thread_archived: null, thread_locked: null, thread_auto_archive_duration_minutes: null, thread_approximate_creation_date: null, can_send_message: null, parent_channel_type: null };
      const threadMetadata = channel.threadMetadata;
      let archived;
      if (threadMetadata != null) {
        archived = threadMetadata.archived;
      }
      obj.thread_archived = true === archived;
      const threadMetadata2 = channel.threadMetadata;
      let flag3;
      if (threadMetadata2 != null) {
        flag3 = threadMetadata2.locked;
      }
      if (flag3 == null) {
        flag3 = false;
      }
      obj.thread_locked = flag3;
      const threadMetadata3 = channel.threadMetadata;
      let num;
      if (threadMetadata3 != null) {
        num = threadMetadata3.autoArchiveDuration;
      }
      if (num == null) {
        num = 0;
      }
      obj.thread_auto_archive_duration_minutes = num;
      obj.thread_approximate_creation_date = SnowflakeUtilsDefault.extractTimestamp(channel.id);
      obj.can_send_message = PermissionStore.can(Permissions.SEND_MESSAGES, channel);
      obj.parent_channel_type = channel.parentChannelThreadType;
      tmp = obj;
    }
  }
  return tmp;
};