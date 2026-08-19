// === Module 16376: useVoiceChannelGames ===

// Module 16376 (useVoiceChannelGames)
import noop from "noop" /* 19 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import sortActivity from "sortActivity" /* 4559 */;
import filterPlayingActivities from "filterPlayingActivities" /* 7250 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default function useVoiceChannelGames(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  let items = [stateFromStores, closure_6, closure_5];
  const items1 = [arg0, arg1, arg2];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    if (closure_2) {
      const _Set = Set;
      const id = stateFromStores.getId();
      const set = new Set();
      const tmp10 = dependencyMap[Symbol.iterator]();
      while (true) {
        if (tmp10 === undefined) {
          let _Array = Array;
          return Array.from(set);
        } else {
          let user = tmp13.user;
          if (user.id === id) {
            let activities = closure_1_6.getActivities();
          } else {
            activities = closure_1_5.getActivities(tmp15.id, closure_1);
          }
          let tmp22 = activities[Symbol.iterator]();
        }
      }
    } else {
      return [];
    }
  }, items1);
  const obj = _require(589);
  const getGamesForAppIds = _require(9734).useGetGamesForAppIds(stateFromStoresArray);
  let obj2 = _require(9734);
  const items2 = [closure_7];
  stateFromStores = _require(589).useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items3 = [getGamesForAppIds, stateFromStores];
  return getGamesForAppIds.useMemo(() => {
    const items = [];
    const set = new Set();
    for (const item10013 of getGamesForAppIds) {
      let obj2 = dependencyMap(table[8]);
      let result = obj2.isGameProfileObscured(item10013, stateFromStores);
      if (!result) {
        result = set.has(item10013.id);
      }
      if (!result) {
        let addResult = set.add(item10013.id);
        let arr = items.push(item10013.id);
      }
      continue;
    }
    return items;
  }, items3);
};