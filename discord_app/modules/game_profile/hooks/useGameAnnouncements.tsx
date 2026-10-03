// === Module 8413: useGameAnnouncements ===

// Module 8413 (useGameAnnouncements)
import _mod19 from "module_19" /* 19 */;
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 8414 */;
import GameProfileStore from "GameProfileStore" /* 8327 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameAnnouncements.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, limit) => {
  _require = arg0;
  dependencyMap = limit;
  const cResult = require("c").c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp6);
  ({ data, hasFetched } = stateFromStoresObject);
  const isFetching = stateFromStoresObject.isFetching;
  if (cResult[3] === arg0) {
    if (cResult[4] === hasFetched) {
      if (cResult[5] === limit) {
        let tmp8 = cResult[6];
        let tmp9 = cResult[7];
      }
      hasFetched(tmp8, tmp9);
      let messages;
      if (data != null) {
        messages = data.messages;
      }
      if (cResult[8] !== messages) {
        let messages1;
        if (data != null) {
          messages1 = data.messages;
        }
        if (messages1 == null) {
          messages1 = [];
        }
        let messages2;
        if (data != null) {
          messages2 = data.messages;
        }
        cResult[8] = messages2;
        cResult[9] = messages1;
        let tmp14 = messages1;
      } else {
        tmp14 = cResult[9];
      }
      let channelId;
      if (data != null) {
        channelId = data.channelId;
      }
      let guildId;
      if (data != null) {
        guildId = data.guildId;
      }
      if (cResult[10] === hasFetched) {
        if (cResult[11] === isFetching) {
          if (cResult[12] === tmp14) {
            if (cResult[13] === channelId) {
              if (cResult[14] === guildId) {
                let tmp18 = cResult[15];
              }
              return tmp18;
            }
          }
        }
      }
      let obj2 = { messages: tmp14, channelId, guildId, loading: isFetching, hasFetched };
      cResult[10] = hasFetched;
      cResult[11] = isFetching;
      cResult[12] = tmp14;
      cResult[13] = channelId;
      cResult[14] = guildId;
      cResult[15] = obj2;
      tmp18 = obj2;
    }
  }
  const fn2 = function h() {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isAnnouncementsFetching(closure_0);
    }
    if (!result) {
      const obj2 = { limit };
      const gameAnnouncements = GameProfileHttpUtils.getGameAnnouncements(closure_0, obj2);
    }
  };
  const items1 = [arg0, hasFetched, limit];
  cResult[3] = arg0;
  cResult[4] = hasFetched;
  cResult[5] = limit;
  cResult[6] = fn2;
  cResult[7] = items1;
  tmp9 = items1;
  tmp8 = fn2;
  const tmpResult = require("initialize");
}) : ((arg0, limit) => {
  _require = arg0;
  dependencyMap = limit;
  const items = [GameProfileStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
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
      const obj2 = { limit };
      const gameAnnouncements = GameProfileHttpUtils.getGameAnnouncements(closure_0, obj2);
    }
  }, items1);
  let messages;
  if (data != null) {
    messages = data.messages;
  }
  if (messages == null) {
    messages = [];
  }
  let obj2 = { messages, channelId: null, guildId: null, loading: null, hasFetched: null };
  let channelId;
  if (data != null) {
    channelId = data.channelId;
  }
  obj2.channelId = channelId;
  let guildId;
  if (data != null) {
    guildId = data.guildId;
  }
  obj2.guildId = guildId;
  obj2.loading = stateFromStoresObject.isFetching;
  obj2.hasFetched = hasFetched;
  return obj2;
});