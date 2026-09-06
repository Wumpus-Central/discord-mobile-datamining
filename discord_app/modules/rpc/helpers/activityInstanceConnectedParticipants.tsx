// === Module 14464: activityInstanceConnectedParticipants ===

// Module 14464 (activityInstanceConnectedParticipants)
import transformUserDefault from "transformUser" /* 9560 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const Constants = fn(4465);
let obj = { [Constants.RPC_SCOPE_CONFIG.ANY]: items };
items = [Constants.RPC_AUTHENTICATED_SCOPE];
obj = {
  scope: obj,
  handler() {
    return (arg0) => {
      let embeddedActivityLocationGuildId;
      let embeddedActivityLocationChannelId;
      ({ prevState, dispatch } = arg0);
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      if (null == currentEmbeddedActivity) {
        let obj = { participants: [] };
      } else {
        embeddedActivityLocationGuildId = embeddedActivityLocationGuildId(4189).getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
        const obj4 = embeddedActivityLocationGuildId(4189);
        embeddedActivityLocationChannelId = embeddedActivityLocationGuildId(4189).getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
        obj = { participants: null };
        const _Array = Array;
        const obj5 = embeddedActivityLocationGuildId(4189);
        obj.participants = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          user = user.getUser(arg0);
          if (null != user) {
            let obj = require("NicknameUtils");
            const nickname = obj.getNickname(closure_0, closure_1, user);
            obj = {};
            const merged = Object.assign(transformUserDefault(user));
            obj.nickname = nickname;
            return obj;
          }
        }).filter(embeddedActivityLocationGuildId(1369).isNotNullish);
        const arr = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          user = user.getUser(arg0);
          if (null != user) {
            let obj = require("NicknameUtils");
            const nickname = obj.getNickname(closure_0, closure_1, user);
            obj = {};
            const merged = Object.assign(transformUserDefault(user));
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/activityInstanceConnectedParticipants.tsx");

export const activityInstanceConnectedParticipants = function activityInstanceConnectedParticipants() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null == currentEmbeddedActivity) {
    let obj = { participants: [] };
    return obj;
  } else {
    _require = require("embeddedActivityLocationUtils").getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
    const obj2 = require("embeddedActivityLocationUtils");
    const embeddedActivityLocationChannelId = require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
    obj = { participants: null };
    const _Array = Array;
    const obj3 = require("embeddedActivityLocationUtils");
    obj.participants = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
      user = user.getUser(arg0);
      if (null != user) {
        let obj = require("NicknameUtils");
        const nickname = obj.getNickname(closure_0, closure_1, user);
        obj = {};
        const merged = Object.assign(transformUserDefault(user));
        obj.nickname = nickname;
        return obj;
      }
    }).filter(require("GlobalUtils").isNotNullish);
    return obj;
  }
};
export const activityInstanceConnectedParticipantsScope = obj;
export const activityInstanceConnectedParticipantsUpdateEvent = obj;