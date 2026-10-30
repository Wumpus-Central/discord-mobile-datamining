// === Module 13141: useCanFulfillStreamRequest ===

// Module 13141 (useCanFulfillStreamRequest)
import ActivityTypes from "ActivityTypes" /* 5757 */;
import RunningGameStore from "RunningGameStore" /* 2014 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import PresenceStore from "PresenceStore" /* 5756 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;

const require = globalThis.__r;

require = fn;
function canFulfillStreamRequest(channel_id) {
  if (flag === undefined) {
    flag = false;
  }
  let obj = ApplicationStreamingStore;
  if (ApplicationStreamingStore === undefined) {
    obj = ApplicationStreamingStore;
  }
  let obj2 = ChannelStore;
  if (ChannelStore === undefined) {
    obj2 = ChannelStore;
  }
  let obj3 = PresenceStore;
  if (PresenceStore === undefined) {
    obj3 = PresenceStore;
  }
  let obj4 = RTCConnectionStore;
  if (RTCConnectionStore === undefined) {
    obj4 = RTCConnectionStore;
  }
  let id;
  dependencyMap = undefined;
  const channel = obj2.getChannel(channel_id.channel_id);
  if (null == channel) {
    const items = [false, obj.NOT_IN_VOICE_CHANNEL];
    return items;
  } else {
    const channelId = obj4.getChannelId();
    const tmp18 = null != obj.getCurrentUserActiveStream();
    const application = channel_id.application;
    id = undefined;
    const videoPermission = flag(11876).getVideoPermission(channel);
    if (application != null) {
      id = application.id;
    }
    tmp19(9718).ActivityGamePlatforms.DESKTOP;
    const obj8 = flag(11876);
    const tmp19Result = flag(1376);
    const ActivityGamePlatforms = tmp19(9718).ActivityGamePlatforms;
    dependencyMap = flag(1376).isAndroid() ? ActivityGamePlatforms.ANDROID : ActivityGamePlatforms.IOS;
    const isAndroidResult = flag(1376).isAndroid();
    const obj5 = { guildId: channel.guild_id, location: "canFulfillStreamRequest" };
    const tmp5 = id(11644).getConfig(obj5).enabled && null == id;
    if (null == id) {
      if (!tmp5) {
        const items1 = [false, obj.NOT_RUNNING_GAME];
        return items1;
      }
    }
    const activities = obj3.getActivities(AuthenticationStore.getId(), channel.guild_id);
    if (tmp18) {
      const items2 = [false, obj.ALREADY_STREAMING];
      let items6 = items2;
    } else if (channelId === channel_id.channel_id) {
      if (!videoPermission) {
        const items3 = [false, obj.NO_PERMISSION];
      }
      if (!tmp9) {
        if (!tmp5) {
          let items4 = [false, obj.NOT_RUNNING_GAME];
        }
      }
      const items5 = [true, null];
      items4 = items5;
    } else {
      items6 = [false, obj.NOT_IN_VOICE_CHANNEL];
    }
    return items6;
  }
}
const StreamRequestUnfulfillableReason = { NOT_IN_VOICE_CHANNEL: "NOT_IN_VOICE_CHANNEL", NOT_RUNNING_GAME: "NOT_RUNNING_GAME", ALREADY_STREAMING: "ALREADY_STREAMING", NO_PERMISSION: "NO_PERMISSION", PENDING_REQUEST: "PENDING_REQUEST", EXPIRED: "EXPIRED" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/useCanFulfillStreamRequest.tsx");

export default function useCanFulfillStreamRequest(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => canFulfillStreamRequest(closure_0, flag, ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore));
};
export { StreamRequestUnfulfillableReason };
export { canFulfillStreamRequest };