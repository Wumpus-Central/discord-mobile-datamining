// === Module 10973: canFulfillStreamRequest ===

// Module 10973 (canFulfillStreamRequest)
import initialize from "initialize";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import sortActivity from "sortActivity";
import createRTCConnection from "createRTCConnection";
import ME from "ME";

let c10;
let unpackModuleId;
const require = arg1;
function canFulfillStreamRequest(channel_id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = arg2;
  if (arg2 === undefined) {
    obj = reset;
  }
  let obj2 = arg3;
  if (arg3 === undefined) {
    obj2 = ensureGuildLoaded;
  }
  let obj3 = arg4;
  if (arg4 === undefined) {
    obj3 = sortActivity;
  }
  let obj4 = arg6;
  if (arg6 === undefined) {
    obj4 = createRTCConnection;
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
    DESKTOP = constants.DESKTOP;
    const obj6 = flag(id[9]);
    DESKTOP = tmp16(tmp17[10]).isAndroid() ? tmp3.ANDROID : tmp3.IOS;
    if (null == id) {
      const items1 = [false, obj.NOT_RUNNING_GAME];
      return items1;
    } else {
      const activities = obj3.getActivities(id.getId(), channel.guild_id);
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
          let tmp8 = items3;
        } else {
          items3[0] = false;
          items3[1] = obj.NOT_RUNNING_GAME;
          tmp8 = items3;
        }
      } else {
        items4 = [false, obj.NOT_IN_VOICE_CHANNEL];
      }
      return items4;
    }
    const tmp16Result = tmp16(tmp17[10]);
  }
}
({ ActivityGamePlatforms: c10, ActivityTypes: unpackModuleId } = ME);
let obj = { NOT_IN_VOICE_CHANNEL: "NOT_IN_VOICE_CHANNEL", NOT_RUNNING_GAME: "NOT_RUNNING_GAME", ALREADY_STREAMING: "ALREADY_STREAMING", NO_PERMISSION: "NO_PERMISSION", PENDING_REQUEST: "PENDING_REQUEST", EXPIRED: "EXPIRED" };
const result = require("fetchFingerprint").fileFinishedImporting("modules/request_to_stream/useCanFulfillStreamRequest.tsx");

export default function useCanFulfillStreamRequest(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [reset, ensureGuildLoaded, sortActivity, initialize, createRTCConnection, createGuildRecordFromRust, getUncachedChannelPermissions];
  return _require(flag[11]).useStateFromStores(items, () => outer1_13(closure_0, flag, outer1_3, outer1_5, outer1_8, outer1_2, outer1_9, outer1_6, outer1_7));
};
export const StreamRequestUnfulfillableReason = obj;
export { canFulfillStreamRequest };