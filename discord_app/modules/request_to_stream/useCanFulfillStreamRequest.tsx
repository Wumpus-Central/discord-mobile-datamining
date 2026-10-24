// === Module 12710: useCanFulfillStreamRequest ===

// Module 12710 (useCanFulfillStreamRequest)
import RunningGameStore from "RunningGameStore" /* 2021 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6642 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import GuildStore from "GuildStore" /* 4845 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import PresenceStore from "PresenceStore" /* 5712 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;

const require = globalThis.__r;

const require = fn;
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
    const tmp19 = flag;
    const application = channel_id.application;
    id = undefined;
    const videoPermission = flag(11585).getVideoPermission(channel);
    if (application != null) {
      id = application.id;
    }
    const obj8 = flag(11585);
    dependencyMap = tmp19(1384).isAndroid() ? constants.ANDROID : constants.IOS;
    const tmp19Result = tmp19(1384);
    const obj5 = { guildId: channel.guild_id, location: "canFulfillStreamRequest" };
    const tmp5 = id(11345).getConfig(obj5).enabled && null == id;
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
const Constants = fn(1087);
({ ActivityGamePlatforms: closure_11, ActivityTypes: closure_12 } = Constants);
const StreamRequestUnfulfillableReason = { NOT_IN_VOICE_CHANNEL: "NOT_IN_VOICE_CHANNEL", NOT_RUNNING_GAME: "NOT_RUNNING_GAME", ALREADY_STREAMING: "ALREADY_STREAMING", NO_PERMISSION: "NO_PERMISSION", PENDING_REQUEST: "PENDING_REQUEST", EXPIRED: "EXPIRED" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/useCanFulfillStreamRequest.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanFulfillStreamRequest(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(4);
  closure_1 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore];
    cResult[0] = items;
    class R {
      constructor() {
        return canFulfillStreamRequest(closure_0, closure_1, closure_4, closure_6, closure_9, closure_3, closure_10, closure_7, closure_8);
      }
    }
  } else {
    const first = cResult[0];
  }
  if (cResult[1] === (undefined !== arg1 && arg1)) {
    if (cResult[2] === arg0) {
      let tmp13 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp13);
  }
  class R {
    constructor() {
      return canFulfillStreamRequest(closure_0, closure_1, closure_4, closure_6, closure_9, closure_3, closure_10, closure_7, closure_8);
    }
  }
  cResult[1] = undefined !== arg1 && arg1;
  cResult[2] = arg0;
  cResult[3] = R;
  tmp13 = R;
  const obj = require("c");
  tmp = _require;
}) : (function useCanFulfillStreamRequest(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => canFulfillStreamRequest(closure_0, flag, ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore));
});
export { StreamRequestUnfulfillableReason };
export { canFulfillStreamRequest };