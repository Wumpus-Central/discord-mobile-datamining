// discord_app/modules/game_profile/hooks/useGameAnnouncements.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import GameProfileHttpUtils from "../GameProfileHttpUtils.tsx";
import GameProfileStore from "../GameProfileStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      announcements = GameProfileStore.getAnnouncements(tmp);
    }
    const obj = { data: announcements, hasFetched: null, isFetching: null };
    let result = null != tmp;
    if (result) {
      result = GameProfileStore.hasAnnouncementsBeenFetched(tmp);
    }
    obj.hasFetched = result;
    let result1 = null != tmp;
    if (result1) {
      result1 = GameProfileStore.isAnnouncementsFetching(tmp);
    }
    obj.isFetching = result1;
    return obj;
  });
  ({ data, hasFetched } = stateFromStoresObject);
  const items1 = [arg0, hasFetched, limit];
  hasFetched(() => {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isAnnouncementsFetching(tmp);
    }
    if (!result) {
      const obj = { limit };
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
  obj.channelId = channelId;
  let guildId;
  if (data != null) {
    guildId = data.guildId;
  }
  obj.guildId = guildId;
  obj.loading = stateFromStoresObject.isFetching;
  return obj;
}
