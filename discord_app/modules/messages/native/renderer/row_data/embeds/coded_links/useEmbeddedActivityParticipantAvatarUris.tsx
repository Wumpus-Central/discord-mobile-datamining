// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx
import isDiscordFrontendDevelopment from "../../../../../../../utils/GlobalUtils.tsx";
import noop from "../../../../../../../../_runtime/00019_noop.js";
import participantFromServer from "../../../../../../activities/EmbeddedActivitiesStore.tsx";
import mergeGuildAvatar from "../../../../../../../stores/UserStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx");

export default function useEmbeddedActivityParticipantAvatarUris(activity) {
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
  const items1 = [closure_4];
  const items2 = [memo];
  const stateFromStoresArray = activity(guildId[4]).useStateFromStoresArray(items1, () => memo.map((item, index) => user.getUser(item)), items2);
  const items3 = [guildId, stateFromStoresArray];
  return memo.useMemo(() => {
    const found = stateFromStoresArray.filter(activity(guildId[3]).isNotNullish);
    return found.map((item, index) => "" + item.getAvatarURL(closure_1, 64));
  }, items3);
};
export const getEmbeddedActivityParticipantAvatarUris = function getEmbeddedActivityParticipantAvatarUris(arg0) {
  ({ guildId: require, applicationId: dependencyMap, activity } = arg0);
  if (null == activity) {
    embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(tmp);
    activity = embeddedActivitiesForChannel.find((item, index) => item.applicationId === closure_1);
  }
  let userIds;
  if (activity != null) {
    userIds = activity.userIds;
  }
  if (userIds == null) {
    userIds = [];
  }
  const mapped = Array.from(userIds).map((item, index) => {
    const user = closure_1_4.getUser(item);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(closure_0, 64);
    }
    return "" + avatarURL;
  });
  return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
};