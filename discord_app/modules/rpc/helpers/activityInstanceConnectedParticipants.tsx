// === Module 13834: activityInstanceConnectedParticipants ===

// Module 13834 (activityInstanceConnectedParticipants)
import participantFromServer from "participantFromServer" /* 1390 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4277 */;

const require = fn;
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
        callback = callback(4011).getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
        const obj4 = callback(4011);
        callback2 = callback(4011).getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
        obj = { participants: null };
        const _Array = Array;
        const obj5 = callback(4011);
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
const result = require("obj132").fileFinishedImporting("modules/rpc/helpers/activityInstanceConnectedParticipants.tsx");

export const activityInstanceConnectedParticipants = function activityInstanceConnectedParticipants() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null == currentEmbeddedActivity) {
    let obj = { participants: null };
    obj[0] = [];
    return obj;
  } else {
    _require = _require(4011).getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
    const obj2 = _require(4011);
    const embeddedActivityLocationChannelId = _require(4011).getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
    obj = { participants: null };
    const _Array = Array;
    const obj3 = _require(4011);
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
    }).filter(_require(1370).isNotNullish);
    return obj;
  }
};
export const activityInstanceConnectedParticipantsScope = obj;
export const activityInstanceConnectedParticipantsUpdateEvent = obj;