// discord_app/modules/rpc/helpers/activityInstanceConnectedParticipants.tsx
import closure_3 from "../../activities/EmbeddedActivitiesStore.tsx";
import closure_4 from "../../../stores/UserStore.tsx";
import RPC_SCOPE_CONFIG from "../Constants.tsx";
import { getEmbeddedActivityLocationChannelId } from "../../activities/utils/embeddedActivityLocationUtils.tsx";

const require = arg1;
let obj = { [RPC_SCOPE_CONFIG.RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_SCOPE_CONFIG.RPC_AUTHENTICATED_SCOPE];
obj = {
  scope: obj,
  handler() {
    return (arg0) => {
      let callback;
      let callback2;
      ({ prevState, dispatch } = arg0);
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      if (null == currentEmbeddedActivity) {
        let obj = { participants: null };
        obj[0] = [];
      } else {
        callback = callback(4015).getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
        const obj4 = callback(4015);
        callback2 = callback(4015).getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
        obj = { participants: null };
        const _Array = Array;
        const obj5 = callback(4015);
        obj[0] = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          const user = closure_1_4.getUser(arg0);
          if (null != user) {
            let obj = callback(closure_1_2[4]);
            const nickname = obj.getNickname(callback, callback2, user);
            obj = {};
            const merged = Object.assign(callback2(closure_1_2[5])(user));
            obj.nickname = nickname;
            return obj;
          }
        }).filter(callback(1370).isNotNullish);
        const arr = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          const user = closure_1_4.getUser(arg0);
          if (null != user) {
            let obj = callback(closure_1_2[4]);
            const nickname = obj.getNickname(callback, callback2, user);
            obj = {};
            const merged = Object.assign(callback2(closure_1_2[5])(user));
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
const result = require("set").fileFinishedImporting("modules/rpc/helpers/activityInstanceConnectedParticipants.tsx");

export const activityInstanceConnectedParticipants = function activityInstanceConnectedParticipants() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null == currentEmbeddedActivity) {
    let obj = { participants: null };
    obj[0] = [];
    return obj;
  } else {
    _require = require("../../activities/utils/embeddedActivityLocationUtils.tsx").getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
    const obj2 = getEmbeddedActivityLocationChannelId;
    const embeddedActivityLocationChannelId = require("../../activities/utils/embeddedActivityLocationUtils.tsx").getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
    obj = { participants: null };
    const _Array = Array;
    const obj3 = getEmbeddedActivityLocationChannelId;
    obj[0] = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
      const user = closure_1_4.getUser(arg0);
      if (null != user) {
        let obj = callback(closure_1_2[4]);
        const nickname = obj.getNickname(callback, callback2, user);
        obj = {};
        const merged = Object.assign(callback2(closure_1_2[5])(user));
        obj.nickname = nickname;
        return obj;
      }
    }).filter(require("../../../utils/GlobalUtils.tsx").isNotNullish);
    return obj;
  }
};
export const activityInstanceConnectedParticipantsScope = obj;
export const activityInstanceConnectedParticipantsUpdateEvent = obj;