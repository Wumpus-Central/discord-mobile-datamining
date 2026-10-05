// === Module 8413: useGameAnnouncements ===

// Module 8413 (useGameAnnouncements)
import react from "react" /* 19 */;
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 8414 */;
import GameProfileStore from "GameProfileStore" /* 8327 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const useEffect = react.useEffect;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, limit) => {
  let closure_0;
  let data;
  let first;
  let hasFetched;
  let tmp6;
  _require = arg0;
  dependencyMap = limit;
  let obj = require("react");
  const cResult = obj.c(16);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let result;
      let result1;
      let announcements;
      if (null != closure_0) {
        announcements = GameProfileStore.getAnnouncements(closure_0);
      }
      const obj = { data: announcements, hasFetched: result, isFetching: result1 };
      result = null != closure_0 && GameProfileStore.hasAnnouncementsBeenFetched(closure_0);
      result1 = null != closure_0 && GameProfileStore.isAnnouncementsFetching(closure_0);
      return obj;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6);
  ({ data, hasFetched } = stateFromStoresObject);
  const isFetching = stateFromStoresObject.isFetching;
  if (cResult[3] === arg0) {
    if (cResult[4] === hasFetched) {
      let tmp8;
      let tmp9;
      let tmp15;
      if (cResult[5] === limit) {
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      hasFetched(tmp8, tmp9);
      let messages;
      const tmp12 = cResult[8];
      if (data != null) {
        messages = data.messages;
      }
      if (tmp12 !== messages) {
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
        tmp15 = messages1;
      } else {
        tmp15 = cResult[9];
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
          if (cResult[12] === tmp15) {
            if (cResult[13] === channelId) {
              let tmp19;
              if (cResult[14] === guildId) {
                tmp19 = cResult[15];
              }
              return tmp19;
            }
          }
        }
      }
      let obj2 = { messages: tmp15, channelId, guildId, loading: isFetching, hasFetched };
      cResult[10] = hasFetched;
      cResult[11] = isFetching;
      cResult[12] = tmp15;
      cResult[13] = channelId;
      cResult[14] = guildId;
      cResult[15] = obj2;
      tmp19 = obj2;
    }
  }
  const fn2 = function h() {
    const result = null == closure_0 || hasFetched || GameProfileStore.isAnnouncementsFetching(closure_0);
    if (!result) {
      const obj2 = { limit };
      const obj = GameProfileHttpUtils;
      const gameAnnouncements = obj.getGameAnnouncements(closure_0, obj2);
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
}) : ((arg0, limit) => {
  let channelId;
  let closure_0;
  let data;
  let guildId;
  let hasFetched;
  _require = arg0;
  dependencyMap = limit;
  let obj = require("get initialized");
  const items = [GameProfileStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let result;
    let result1;
    let announcements;
    if (null != closure_0) {
      announcements = GameProfileStore.getAnnouncements(closure_0);
    }
    const obj = { data: announcements, hasFetched: result, isFetching: result1 };
    result = null != closure_0 && GameProfileStore.hasAnnouncementsBeenFetched(closure_0);
    result1 = null != closure_0 && GameProfileStore.isAnnouncementsFetching(closure_0);
    return obj;
  });
  ({ data, hasFetched } = stateFromStoresObject);
  const items1 = [arg0, hasFetched, limit];
  const isFetching = stateFromStoresObject.isFetching;
  hasFetched(() => {
    const result = null == closure_0 || hasFetched || GameProfileStore.isAnnouncementsFetching(closure_0);
    if (!result) {
      const obj2 = { limit };
      const obj = GameProfileHttpUtils;
      const gameAnnouncements = obj.getGameAnnouncements(closure_0, obj2);
    }
  }, items1);
  let messages;
  if (data != null) {
    messages = data.messages;
  }
  if (messages == null) {
    messages = [];
  }
  let obj2 = { messages, channelId, guildId, loading: isFetching, hasFetched };
  channelId = undefined;
  if (data != null) {
    channelId = data.channelId;
  }
  guildId = undefined;
  if (data != null) {
    guildId = data.guildId;
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameAnnouncements.tsx");

export default tmp2;