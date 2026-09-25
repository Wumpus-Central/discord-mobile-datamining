// discord_app/modules/rpc/helpers/activityInstanceConnectedParticipants.tsx
import transformUserDefault from "transformUser.tsx";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const Constants = fn(4735);
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
    _require = require("embeddedActivityLocationUtils").getEmbeddedActivityLocationGuildId(
      currentEmbeddedActivity.location,
    );
    const obj2 = require("embeddedActivityLocationUtils");
    const embeddedActivityLocationChannelId =
      require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
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
        embeddedActivityLocationGuildId = embeddedActivityLocationGuildId(4455).getEmbeddedActivityLocationGuildId(
          currentEmbeddedActivity.location,
        );
        const obj4 = embeddedActivityLocationGuildId(4455);
        embeddedActivityLocationChannelId = embeddedActivityLocationGuildId(4455).getEmbeddedActivityLocationChannelId(
          currentEmbeddedActivity.location,
        );
        obj2 = { participants: null };
        const _Array = Array;
        const obj5 = embeddedActivityLocationGuildId(4455);
        obj2.participants = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          user = user.getUser(arg0);
          if (null != user) {
            const nickname = require("NicknameUtils").getNickname(closure_0, closure_1, user);
            const obj2 = {};
            const merged = Object.assign(transformUserDefault(user));
            obj2.nickname = nickname;
            return obj2;
          }
        }).filter(embeddedActivityLocationGuildId(1370).isNotNullish);
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
  },
};
