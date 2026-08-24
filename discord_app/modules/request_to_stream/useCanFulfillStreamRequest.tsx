// === Module 10968: canFulfillStreamRequest ===

// Module 10968 (canFulfillStreamRequest)
import closure_2 from "initialize" /* 4508 */;
import closure_3 from "reset" /* 4658 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "getUncachedChannelPermissions" /* 4024 */;
import closure_8 from "sortActivity" /* 4564 */;
import closure_9 from "createRTCConnection" /* 4544 */;
import ME from "ME" /* 676 */;

const require = arg1;
function canFulfillStreamRequest(channel_id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  obj = arg2;
  if (arg2 === undefined) {
    obj = closure_3;
  }
  let obj2 = arg3;
  if (arg3 === undefined) {
    obj2 = closure_5;
  }
  let obj3 = arg4;
  if (arg4 === undefined) {
    obj3 = closure_8;
  }
  let obj4 = arg6;
  if (arg6 === undefined) {
    obj4 = closure_9;
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
const result = require("set").fileFinishedImporting("modules/request_to_stream/useCanFulfillStreamRequest.tsx");

export default function useCanFulfillStreamRequest(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [closure_3, closure_5, closure_8, closure_2, closure_9, closure_6, closure_7];
  return _require(flag[11]).useStateFromStores(items, () => closure_1_13(closure_0, flag, closure_1_3, closure_1_5, closure_1_8, closure_1_2, closure_1_9, closure_1_6, closure_1_7));
};
export const StreamRequestUnfulfillableReason = obj;
export { canFulfillStreamRequest };