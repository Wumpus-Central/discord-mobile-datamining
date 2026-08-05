import { isDiscordFrontendDevelopment } from "../../../utils/GlobalUtils.tsx";
import { getEmbeddedActivityLocationChannelId } from "../../activities/utils/embeddedActivityLocationUtils.tsx";
// discord_app/modules/rpc/helpers/activityInstanceConnectedParticipants.tsx
import participantFromServer from "participantFromServer";
import mergeGuildAvatar from "mergeGuildAvatar";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";

const require = arg1;
let obj = { [RPC_SCOPE_CONFIG.RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_SCOPE_CONFIG.RPC_AUTHENTICATED_SCOPE];
obj = {
  scope: obj,
  handler() {
    return (arg0) => {
      let dispatch;
      let prevState;
      let callback;
      let callback2;
      ({ prevState, dispatch } = arg0);
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      if (null == currentEmbeddedActivity) {
        let obj = { participants: null };
        obj[0] = [];
      } else {
        callback = callback(3903).getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
        const obj4 = callback(3903);
        callback2 = callback(3903).getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
        obj = { participants: null };
        const _Array = Array;
        const obj5 = callback(3903);
        obj[0] = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          const user = outer1_4.getUser(arg0);
          if (null != user) {
            let obj = callback(outer1_2[4]);
            const nickname = obj.getNickname(callback, callback2, user);
            obj = {};
            const merged = Object.assign(callback2(outer1_2[5])(user));
            obj.nickname = nickname;
            return obj;
          }
        }).filter(callback(1351).isNotNullish);
        const arr = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          const user = outer1_4.getUser(arg0);
          if (null != user) {
            let obj = callback(outer1_2[4]);
            const nickname = obj.getNickname(callback, callback2, user);
            obj = {};
            const merged = Object.assign(callback2(outer1_2[5])(user));
            obj.nickname = nickname;
            return obj;
          }
        });
      }
      if (!obj3.isEqual(obj, prevState)) {
        dispatch(obj);
      }
      return obj;
    };
  }
};
const result = require("RPC_SCOPE_CONFIG").fileFinishedImporting("modules/rpc/helpers/activityInstanceConnectedParticipants.tsx");

export const activityInstanceConnectedParticipants = function activityInstanceConnectedParticipants() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null == currentEmbeddedActivity) {
    let obj = { participants: null };
    obj[0] = [];
    return obj;
  } else {
    _require = _getEmbeddedActivityLocationChannelId.getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
    const obj2 = _getEmbeddedActivityLocationChannelId;
    const embeddedActivityLocationChannelId = _getEmbeddedActivityLocationChannelId.getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
    obj = { participants: null };
    const _Array = Array;
    const obj3 = _getEmbeddedActivityLocationChannelId;
    obj[0] = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
      const user = outer1_4.getUser(arg0);
      if (null != user) {
        let obj = callback(outer1_2[4]);
        const nickname = obj.getNickname(callback, callback2, user);
        obj = {};
        const merged = Object.assign(callback2(outer1_2[5])(user));
        obj.nickname = nickname;
        return obj;
      }
    }).filter(_isDiscordFrontendDevelopment.isNotNullish);
    return obj;
  }
};
export const activityInstanceConnectedParticipantsScope = obj;
export const activityInstanceConnectedParticipantsUpdateEvent = obj;