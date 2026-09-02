// === Module 8897: useGameAnnouncements ===

// Module 8897 (useGameAnnouncements)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_3 from "getSimilarGames" /* 8823 */;

const useEffect = noop.useEffect;
let result = set.fileFinishedImporting("modules/game_profile/hooks/useGameAnnouncements.tsx");

export default function useGameAnnouncements(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let obj = _require(586);
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let announcements;
    if (null != closure_0) {
      announcements = closure_1_3.getAnnouncements(tmp);
    }
    const obj = { data: announcements, hasFetched: null, isFetching: null };
    let result = null != tmp;
    if (result) {
      result = closure_1_3.hasAnnouncementsBeenFetched(tmp);
    }
    obj[1] = result;
    let result1 = null != tmp;
    if (result1) {
      result1 = closure_1_3.isAnnouncementsFetching(tmp);
    }
    obj[2] = result1;
    return obj;
  });
  ({ data, hasFetched } = stateFromStoresObject);
  const items1 = [arg0, hasFetched, arg1];
  hasFetched(() => {
    let result = null == callback || hasFetched;
    if (!result) {
      result = closure_1_3.isAnnouncementsFetching(tmp);
    }
    if (!result) {
      let obj = callback(table[3]);
      obj = { limit: null };
      obj[0] = table;
      const gameAnnouncements = obj.getGameAnnouncements(tmp, obj);
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
  obj[1] = channelId;
  let guildId;
  if (data != null) {
    guildId = data.guildId;
  }
  obj[2] = guildId;
  obj[3] = stateFromStoresObject.isFetching;
  return obj;
};