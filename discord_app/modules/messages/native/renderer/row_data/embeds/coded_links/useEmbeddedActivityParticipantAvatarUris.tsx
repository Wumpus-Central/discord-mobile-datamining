// === Module 13447: useEmbeddedActivityParticipantAvatarUris ===

// Module 13447 (useEmbeddedActivityParticipantAvatarUris)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useEmbeddedActivityParticipantAvatarUris(arg0) {
  let mapped = dependencyMap;
  const cResult = guildId(576).c(11);
  ({ activity, guildId } = arg0);
  let userIds;
  if (activity != null) {
    userIds = activity.userIds;
  }
  if (cResult[0] !== userIds) {
    let userIds1;
    if (activity != null) {
      userIds1 = activity.userIds;
    }
    if (userIds1 == null) {
      userIds1 = [];
    }
    const arr = Array.from(userIds1);
    let userIds2;
    if (activity != null) {
      userIds2 = activity.userIds;
    }
    cResult[0] = userIds2;
    cResult[1] = arr;
    let tmp5 = arr;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const fn = function v() {
      return closure_1.map((item) => user.getUser(item));
    };
    const items1 = [tmp5];
    cResult[3] = tmp5;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp12 = items1;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const obj = guildId(576);
  const stateFromStoresArray = guildId(573).useStateFromStoresArray(tmp9, tmp11, tmp12);
  if (cResult[6] === guildId) {
    if (cResult[7] === stateFromStoresArray) {
      return cResult[8];
    }
  }
  if (cResult[9] !== guildId) {
    const fn2 = function y(getAvatarURL) {
      return "" + getAvatarURL.getAvatarURL(guildId, 64);
    };
    cResult[9] = guildId;
    cResult[10] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[10];
  }
  const found = stateFromStoresArray.filter(guildId(1388).isNotNullish);
  mapped = found.map(tmp13);
  cResult[6] = guildId;
  cResult[7] = stateFromStoresArray;
  cResult[8] = mapped;
  const tmpResult = guildId(573);
}) : (function useEmbeddedActivityParticipantAvatarUris(activity) {
  activity = activity.activity;
  const guildId = activity.guildId;
  let memo;
  const items = [activity];
  memo = memo.useMemo(() => {
    let userIds;
    if (activity != null) {
      userIds = activity.userIds;
    }
    if (userIds == null) {
      userIds = [];
    }
    return Array.from(userIds);
  }, items);
  const items1 = [UserStore];
  const items2 = [memo];
  const stateFromStoresArray = activity(guildId[6]).useStateFromStoresArray(items1, () => memo.map((item) => user.getUser(item)), items2);
  const items3 = [guildId, stateFromStoresArray];
  return memo.useMemo(() => {
    const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
    return found.map((getAvatarURL) => "" + getAvatarURL.getAvatarURL(guildId, 64));
  }, items3);
});
export const getEmbeddedActivityParticipantAvatarUris = function getEmbeddedActivityParticipantAvatarUris(arg0) {
  ({ guildId: require, applicationId: dependencyMap, activity } = arg0);
  if (null == activity) {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
    activity = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === dependencyMap);
  }
  let userIds;
  if (activity != null) {
    userIds = activity.userIds;
  }
  if (userIds == null) {
    userIds = [];
  }
  const mapped = Array.from(userIds).map((item) => {
    const user = UserStore.getUser(item);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(require, 64);
    }
    return "" + avatarURL;
  });
  return mapped.filter(GlobalUtils.isNotNullish);
};