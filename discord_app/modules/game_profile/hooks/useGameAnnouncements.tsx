// === Module 8759: useGameAnnouncements ===

// Module 8759 (useGameAnnouncements)
import _mod19 from "module_19" /* 19 */;
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 8760 */;
import GameProfileStore from "GameProfileStore" /* 8682 */;
import size from "module_2" /* 2 */;

const useEffect = _mod19.useEffect;
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameAnnouncements.tsx");

export default function useGameAnnouncements(arg0, limit) {
  _require = arg0;
  dependencyMap = limit;
  let obj = require("initialize");
  const items = [GameProfileStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let announcements;
    if (null != closure_0) {
      announcements = GameProfileStore.getAnnouncements(closure_0);
    }
    const obj = { data: announcements, hasFetched: null, isFetching: null };
    let result = null != closure_0;
    if (result) {
      result = GameProfileStore.hasAnnouncementsBeenFetched(closure_0);
    }
    obj.hasFetched = result;
    let result1 = null != closure_0;
    if (result1) {
      result1 = GameProfileStore.isAnnouncementsFetching(closure_0);
    }
    obj.isFetching = result1;
    return obj;
  });
  ({ data, hasFetched } = stateFromStoresObject);
  const items1 = [arg0, hasFetched, limit];
  hasFetched(() => {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isAnnouncementsFetching(closure_0);
    }
    if (!result) {
      const obj = { limit };
      const gameAnnouncements = obj.getGameAnnouncements(closure_0, obj);
    }
  }, items1);
  let messages;
  if (data != null) {
    messages = data.messages;
  }
  if (messages == null) {
    messages = [];
  }
  obj = { messages, channelId: null, guildId: null, loading: null };
  let channelId;
  if (data != null) {
    channelId = data.channelId;
  }
  obj.channelId = channelId;
  let guildId;
  if (data != null) {
    guildId = data.guildId;
  }
  obj.guildId = guildId;
  obj.loading = stateFromStoresObject.isFetching;
  return obj;
};