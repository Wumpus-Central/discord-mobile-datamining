// === Module 11394: useCanFulfillStreamRequest ===

// Module 11394 (useCanFulfillStreamRequest)
import RunningGameStore from "RunningGameStore" /* 2018 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import PresenceStore from "PresenceStore" /* 5106 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;

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
  let DESKTOP;
  const channel = obj2.getChannel(channel_id.channel_id);
  if (null == channel) {
    const items = [false, obj.NOT_IN_VOICE_CHANNEL];
    return items;
  } else {
    const channelId = obj4.getChannelId();
    const tmp15 = null != obj.getCurrentUserActiveStream();
    const tmp16 = flag;
    const tmp17 = id;
    const application = channel_id.application;
    id = undefined;
    const videoPermission = flag(id[9]).getVideoPermission(channel);
    if (application != null) {
      id = application.id;
    }
    const obj6 = flag(id[9]);
    DESKTOP = tmp16(tmp17[10]).isAndroid() ? constants.ANDROID : constants.IOS;
    if (null == id) {
      const items1 = [false, obj.NOT_RUNNING_GAME];
      return items1;
    } else {
      const activities = obj3.getActivities(AuthenticationStore.getId(), channel.guild_id);
      if (tmp15) {
        const items2 = [false, obj.ALREADY_STREAMING];
        let items4 = items2;
      } else if (channelId === channel_id.channel_id) {
        const items3 = [, ];
        if (!videoPermission) {
          items3[0] = false;
          items3[1] = obj.NO_PERMISSION;
        }
        if (tmp21) {
          items3[0] = true;
          items3[1] = null;
        } else {
          items3[0] = false;
          items3[1] = obj.NOT_RUNNING_GAME;
        }
      } else {
        items4 = [false, obj.NOT_IN_VOICE_CHANNEL];
      }
      return items4;
    }
    const tmp16Result = tmp16(tmp17[10]);
  }
}
const Constants = fn(1085);
({ ActivityGamePlatforms: c10, ActivityTypes: closure_11 } = Constants);
const StreamRequestUnfulfillableReason = { NOT_IN_VOICE_CHANNEL: "NOT_IN_VOICE_CHANNEL", NOT_RUNNING_GAME: "NOT_RUNNING_GAME", ALREADY_STREAMING: "ALREADY_STREAMING", NO_PERMISSION: "NO_PERMISSION", PENDING_REQUEST: "PENDING_REQUEST", EXPIRED: "EXPIRED" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/useCanFulfillStreamRequest.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanFulfillStreamRequest(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(4);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined !== arg1 && arg1)) {
    if (cResult[2] === arg0) {
      let tmp13 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp13);
  }
  const fn = function o() {
    return canFulfillStreamRequest(closure_0, closure_1, ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore);
  };
  cResult[1] = undefined !== arg1 && arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp13 = fn;
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