// === Module 13136: useUserProfileActivityTabContent ===

// Module 13136 (useUserProfileActivityTabContent)
import LoggerDefault from "Logger" /* 3 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8406 */;
import maybeFetchContentInventoryOutboxDefault from "maybeFetchContentInventoryOutbox" /* 13137 */;
import noop from "module_19" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8862 */;
import PresenceStore from "PresenceStore" /* 4645 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5329 */;
import VoiceStateStore from "VoiceStateStore" /* 4624 */;
import UserProfileStore from "UserProfileStore" /* 7672 */;

require = fn;
const StatusTypes = fn(1074).StatusTypes;
let closure_10 = new LoggerDefault("useUserProfileActivityTabContent");
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivityTabContent.tsx");

export default function useUserProfileActivityTabContent(userId) {
  userId = userId.userId;
  recent = undefined;
  let voiceChannel;
  let voiceActivity;
  closure_4 = undefined;
  const items = [userId];
  ({ currentUserId, guildId } = userId);
  const effect = voiceActivity.useEffect(() => {
    const promise = maybeFetchContentInventoryOutboxDefault(userId);
    if (promise != null) {
      promise.catch((error) => {
        logger.log("Failed to fetch content inventory outbox for " + userId + ":", error);
      });
    }
  }, items);
  const tmp2 = recent(voiceChannel[9])(userId);
  ({ live, recent } = tmp2);
  const stream = tmp2.stream;
  const tmp3 = recent(voiceChannel[10])({ userId, guildId });
  voiceChannel = tmp3.voiceChannel;
  voiceActivity = tmp3.voiceActivity;
  const items1 = [recent];
  const memo = voiceActivity.useMemo(() => recent.filter(ContentInventoryTypes.isRecentActivityEntry), items1);
  let obj = userId(voiceChannel[12]);
  const items2 = [closure_4];
  closure_4 = tmp5;
  const stateFromStores = obj.useStateFromStores(items2, () => ContentInventoryOutboxStore.isFetchingUserOutbox(userId));
  const items3 = [SelfPresenceStore, PresenceStore];
  const stateFromStores1 = userId(voiceChannel[12]).useStateFromStores(items3, () => {
    if (closure_4) {
      let status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(userId);
    }
    return status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
  });
  const obj2 = userId(voiceChannel[12]);
  const items4 = [UserProfileStore];
  const stateFromStores2 = userId(voiceChannel[12]).useStateFromStores(items4, () => {
    const userProfile = UserProfileStore.getUserProfile(userId);
    let _private;
    if (userProfile != null) {
      _private = userProfile.private;
    }
    return true === _private;
  });
  const obj3 = userId(voiceChannel[12]);
  const items5 = [VoiceStateStore];
  let found = live;
  const stateFromStores3 = userId(voiceChannel[12]).useStateFromStores(items5, () => {
    let isInChannelResult = null != voiceChannel;
    if (isInChannelResult) {
      isInChannelResult = VoiceStateStore.isInChannel(tmp.id);
    }
    return isInChannelResult;
  });
  if (null != voiceActivity) {
    found = live.filter((item) => item !== voiceActivity);
  }
  let tmp9 = stateFromStores1;
  if (!stateFromStores1) {
    tmp9 = stateFromStores2;
  }
  if (tmp9) {
    tmp9 = null != voiceChannel;
  }
  if (tmp9) {
    tmp9 = stateFromStores3;
  }
  let tmp10 = !tmp9;
  if (!tmp9) {
    tmp10 = !stateFromStores1;
  }
  if (tmp10) {
    let tmp11 = found.length > 0;
    if (!tmp11) {
      let tmp12 = !stateFromStores2;
      if (!stateFromStores2) {
        tmp12 = null != voiceChannel;
      }
      tmp11 = tmp12;
    }
    if (!tmp11) {
      let tmp13 = !stateFromStores2;
      if (!stateFromStores2) {
        tmp13 = null != stream;
      }
      if (tmp13) {
        let id;
        if (voiceChannel != null) {
          id = voiceChannel.id;
        }
        tmp13 = stream.channelId !== id;
      }
      tmp11 = tmp13;
    }
    tmp10 = tmp11;
  }
  obj = { recent: memo, isFetching: stateFromStores, isCurrentUser: tmp5, hasCurrentActivity: tmp10, hasRecentActivity: memo.length > 0 };
  return obj;
};