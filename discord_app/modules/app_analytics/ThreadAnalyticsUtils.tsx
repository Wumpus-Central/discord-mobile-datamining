// discord_app/modules/app_analytics/ThreadAnalyticsUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import Constants from "../../Constants.tsx";
import router_utils from "../routing/router_utils.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ThreadMembersStore from "../threads/ThreadMembersStore.tsx";
import ThreadMessageStore from "../threads/ThreadMessageStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/app_analytics/ThreadAnalyticsUtils.tsx");

export const collectThreadMetadata = function collectThreadMetadata(channel, arg1) {
  let archived;
  let flag3;
  let num;
  let obj3;
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
        const obj = router_utils;
        lastRouteChangeSource = obj.getLastRouteChangeSource();
      }
      const threadMetadata = channel.threadMetadata;
      const obj2 = {
        location: lastRouteChangeSource,
        thread_approximate_member_count: ThreadMembersStore.getMemberCount(channel.id),
        thread_approximate_message_count: ThreadMessageStore.getCount(channel.id),
        thread_archived: true === archived,
        thread_locked: flag3,
        thread_auto_archive_duration_minutes: num,
        thread_approximate_creation_date: obj3.extractTimestamp(channel.id),
        can_send_message: PermissionStore.can(Permissions.SEND_MESSAGES, channel),
        parent_channel_type: channel.parentChannelThreadType,
      };
      archived = undefined;
      if (threadMetadata != null) {
        archived = threadMetadata.archived;
      }
      const threadMetadata2 = channel.threadMetadata;
      flag3 = undefined;
      if (threadMetadata2 != null) {
        flag3 = threadMetadata2.locked;
      }
      if (flag3 == null) {
        flag3 = false;
      }
      const threadMetadata3 = channel.threadMetadata;
      num = undefined;
      if (threadMetadata3 != null) {
        num = threadMetadata3.autoArchiveDuration;
      }
      if (num == null) {
        num = 0;
      }
      tmp = obj2;
      obj3 = SnowflakeUtilsDefault;
    }
  }
  return tmp;
};
