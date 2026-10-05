// discord_app/modules/rpc/helpers/activityInstanceConnectedParticipants.tsx
import transformUserDefault from "transformUser.tsx";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, user;

let items;
let obj = { [Constants.RPC_SCOPE_CONFIG.ANY]: items };
items = [Constants.RPC_AUTHENTICATED_SCOPE];
let obj2 = {
  scope: obj,
  handler() {
    return (arg0) => {
      let arr;
      let closure_0;
      let closure_1;
      let dispatch;
      let obj2;
      let prevState;
      let embeddedActivityLocationGuildId;
      let embeddedActivityLocationChannelId;
      ({ prevState, dispatch } = arg0);
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      if (null == currentEmbeddedActivity) {
        let obj = { participants: [] };
        obj2 = obj;
      } else {
        const obj4 = embeddedActivityLocationGuildId(closure_2[3]);
        embeddedActivityLocationGuildId = obj4.getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
        const obj5 = embeddedActivityLocationGuildId(closure_2[3]);
        embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
        obj2 = { participants: arr.filter(embeddedActivityLocationGuildId(closure_2[6]).isNotNullish) };
        const _Array = Array;
        arr = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          user = user.getUser(arg0);
          if (null != user) {
            const obj = require("NicknameUtils");
            const nickname = obj.getNickname(closure_0, closure_1, user);
            const obj2 = { nickname };
            const merged = Object.assign(transformUserDefault(user));
            return obj2;
          }
        });
      }
      const obj3 = embeddedActivityLocationChannelId(closure_2[7]);
      if (!obj3.isEqual(obj2, prevState)) {
        dispatch(obj2);
      }
      return obj2;
    };
  },
};
const result = size.fileFinishedImporting("modules/rpc/helpers/activityInstanceConnectedParticipants.tsx");

export const activityInstanceConnectedParticipants = function activityInstanceConnectedParticipants() {
  let arr;
  let closure_0;
  let closure_1;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null == currentEmbeddedActivity) {
    return { participants: [] };
  } else {
    const obj2 = require("embeddedActivityLocationUtils");
    _require = obj2.getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
    const obj3 = require("embeddedActivityLocationUtils");
    const embeddedActivityLocationChannelId = obj3.getEmbeddedActivityLocationChannelId(
      currentEmbeddedActivity.location,
    );
    const _Array = Array;
    const obj4 = { participants: arr.filter(require("GlobalUtils").isNotNullish) };
    arr = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
      user = user.getUser(arg0);
      if (null != user) {
        const obj = require("NicknameUtils");
        const nickname = obj.getNickname(closure_0, closure_1, user);
        const obj2 = { nickname };
        const merged = Object.assign(transformUserDefault(user));
        return obj2;
      }
    });
    return obj4;
  }
};
export const activityInstanceConnectedParticipantsScope = obj;
export const activityInstanceConnectedParticipantsUpdateEvent = obj2;
