// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx
import GlobalUtils from "../../../../../../../utils/GlobalUtils.tsx";
import react from "../../../../../../../../_runtime/00019_react.js";
import EmbeddedActivitiesStore from "../../../../../../activities/EmbeddedActivitiesStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

let dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activity;
      let closure_1;
      let guildId;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp6;
      const obj = guildId(576);
      const cResult = obj.c(11);
      ({ activity, guildId } = arg0);
      let userIds;
      const first = cResult[0];
      if (activity != null) {
        userIds = activity.userIds;
      }
      if (first !== userIds) {
        let userIds1;
        const _Array = Array;
        if (activity != null) {
          userIds1 = activity.userIds;
        }
        if (userIds1 == null) {
          userIds1 = [];
        }
        const fromResult = from(userIds1);
        let userIds2;
        if (activity != null) {
          userIds2 = activity.userIds;
        }
        cResult[0] = userIds2;
        cResult[1] = fromResult;
        tmp6 = fromResult;
      } else {
        tmp6 = cResult[1];
      }
      dependencyMap = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[2] = items;
        tmp10 = items;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp6) {
        const fn = function v() {
          let user;
          return closure_1.map((item) => user.getUser(item));
        };
        const items1 = [tmp6];
        cResult[3] = tmp6;
        cResult[4] = fn;
        cResult[5] = items1;
        tmp13 = items1;
        tmp12 = fn;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const tmpResult = guildId(573);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp10, tmp12, tmp13);
      if (cResult[6] === guildId) {
        let tmp14;
        if (cResult[7] === stateFromStoresArray) {
          tmp14 = cResult[8];
        }
        return tmp14;
      }
      if (cResult[9] !== guildId) {
        const fn2 = function y(getAvatarURL) {
          return "" + getAvatarURL.getAvatarURL(guildId, 64);
        };
        cResult[9] = guildId;
        cResult[10] = fn2;
        tmp15 = fn2;
      } else {
        tmp15 = cResult[10];
      }
      const found = stateFromStoresArray.filter(guildId(1375).isNotNullish);
      const mapped = found.map(tmp15);
      cResult[6] = guildId;
      cResult[7] = stateFromStoresArray;
      cResult[8] = mapped;
      tmp14 = mapped;
    }
  : (activity) => {
      activity = activity.activity;
      const guildId = activity.guildId;
      let memo;
      const items = [activity];
      memo = memo.useMemo(() => {
        let userIds;
        const _Array = Array;
        if (activity != null) {
          userIds = activity.userIds;
        }
        if (userIds == null) {
          userIds = [];
        }
        return from(userIds);
      }, items);
      const items1 = [UserStore];
      const items2 = [memo];
      const obj = activity(guildId[6]);
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items1,
        () => {
          let user;
          return memo.map((item) => user.getUser(item));
        },
        items2,
      );
      const items3 = [guildId, stateFromStoresArray];
      return memo.useMemo(() => {
        const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
        return found.map((getAvatarURL) => "" + getAvatarURL.getAvatarURL(guildId, 64));
      }, items3);
    };
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx",
);

export default tmp2;
export const getEmbeddedActivityParticipantAvatarUris = function getEmbeddedActivityParticipantAvatarUris(arg0) {
  let activity;
  ({ guildId: require, applicationId: dependencyMap, activity } = arg0);
  if (null == activity) {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
    activity = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === dependencyMap);
  }
  let userIds;
  const _Array = Array;
  if (activity != null) {
    userIds = activity.userIds;
  }
  if (userIds == null) {
    userIds = [];
  }
  const fromResult = from(userIds);
  const mapped = fromResult.map((item) => {
    const user = UserStore.getUser(item);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(require, 64);
    }
    return "" + avatarURL;
  });
  return mapped.filter(GlobalUtils.isNotNullish);
};
