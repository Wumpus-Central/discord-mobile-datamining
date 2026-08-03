// === Module 12478: useEmbeddedActivityParticipantAvatarUris ===

// Module 12478 (useEmbeddedActivityParticipantAvatarUris)
import noop from "noop";
import participantFromServer from "participantFromServer";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx");

export default function useEmbeddedActivityParticipantAvatarUris(activity) {
  activity = activity.activity;
  const guildId = activity.guildId;
  let memo;
  let stateFromStoresArray;
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
  const items1 = [mergeGuildAvatar];
  const items2 = [memo];
  stateFromStoresArray = activity(guildId[4]).useStateFromStoresArray(items1, () => memo.map((arg0) => user.getUser(arg0)), items2);
  const items3 = [guildId, stateFromStoresArray];
  return memo.useMemo(() => {
    const found = stateFromStoresArray.filter(activity(guildId[3]).isNotNullish);
    return found.map((getAvatarURL) => "" + getAvatarURL.getAvatarURL(closure_1, 64));
  }, items3);
};
export const getEmbeddedActivityParticipantAvatarUris = function getEmbeddedActivityParticipantAvatarUris(arg0) {
  let activity;
  let dependencyMap;
  let require;
  ({ guildId: require, applicationId: dependencyMap, activity } = arg0);
  if (null == activity) {
    embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(tmp);
    activity = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_1);
  }
  let userIds;
  if (activity != null) {
    userIds = activity.userIds;
  }
  if (userIds == null) {
    userIds = [];
  }
  const mapped = Array.from(userIds).map((arg0) => {
    const user = outer1_4.getUser(arg0);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(closure_0, 64);
    }
    return "" + avatarURL;
  });
  return mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
};