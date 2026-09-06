// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx
import GlobalUtils from "../../../../../../../utils/GlobalUtils.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../../../../activities/EmbeddedActivitiesStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx",
);

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
  const items1 = [UserStore];
  const items2 = [memo];
  const stateFromStoresArray = activity(guildId[4]).useStateFromStoresArray(
    items1,
    () => memo.map((item) => user.getUser(item)),
    items2,
  );
  const items3 = [guildId, stateFromStoresArray];
  return memo.useMemo(() => {
    const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
    return found.map((getAvatarURL) => "" + getAvatarURL.getAvatarURL(guildId, 64));
  }, items3);
}
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
