// === Module 14553: activityInstanceConnectedParticipants ===

// Module 14553 (activityInstanceConnectedParticipants)
import transformUserDefault from "transformUser" /* 9690 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(4541);
let obj = { [Constants.RPC_SCOPE_CONFIG.ANY]: items };
items = [Constants.RPC_AUTHENTICATED_SCOPE];
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/activityInstanceConnectedParticipants.tsx");

export const activityInstanceConnectedParticipants = function activityInstanceConnectedParticipants() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null == currentEmbeddedActivity) {
    const obj = { participants: [] };
    return obj;
  } else {
    _require = require("embeddedActivityLocationUtils").getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
    const obj2 = require("embeddedActivityLocationUtils");
    const embeddedActivityLocationChannelId = require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
    const obj4 = { participants: null };
    const _Array = Array;
    const obj3 = require("embeddedActivityLocationUtils");
    obj4.participants = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
      user = user.getUser(arg0);
      if (null != user) {
        const nickname = require("NicknameUtils").getNickname(closure_0, closure_1, user);
        const obj2 = {};
        const merged = Object.assign(transformUserDefault(user));
        obj2.nickname = nickname;
        return obj2;
      }
    }).filter(require("GlobalUtils").isNotNullish);
    return obj4;
  }
};
export const activityInstanceConnectedParticipantsScope = obj;
export const activityInstanceConnectedParticipantsUpdateEvent = {
  scope: obj,
  handler() {
    return (arg0) => {
      let embeddedActivityLocationGuildId;
      let embeddedActivityLocationChannelId;
      ({ prevState, dispatch } = arg0);
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      if (null == currentEmbeddedActivity) {
        const obj = { participants: [] };
        let obj2 = obj;
      } else {
        embeddedActivityLocationGuildId = embeddedActivityLocationGuildId(4265).getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
        const obj4 = embeddedActivityLocationGuildId(4265);
        embeddedActivityLocationChannelId = embeddedActivityLocationGuildId(4265).getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
        obj2 = { participants: null };
        const _Array = Array;
        const obj5 = embeddedActivityLocationGuildId(4265);
        obj2.participants = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          user = user.getUser(arg0);
          if (null != user) {
            const nickname = require("NicknameUtils").getNickname(closure_0, closure_1, user);
            const obj2 = {};
            const merged = Object.assign(transformUserDefault(user));
            obj2.nickname = nickname;
            return obj2;
          }
        }).filter(embeddedActivityLocationGuildId(1369).isNotNullish);
        const arr = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          user = user.getUser(arg0);
          if (null != user) {
            const nickname = require("NicknameUtils").getNickname(closure_0, closure_1, user);
            const obj2 = {};
            const merged = Object.assign(transformUserDefault(user));
            obj2.nickname = nickname;
            return obj2;
          }
        });
      }
      if (!obj3.isEqual(obj2, prevState)) {
        dispatch(obj2);
      }
      return obj2;
    };
  }
};