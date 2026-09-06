// === Module 17162: useVoiceChannelGames ===

// Module 17162 (useVoiceChannelGames)
import useGameProfileObscured from "useGameProfileObscured" /* 5111 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default function useVoiceChannelGames(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  let items = [stateFromStores, SelfPresenceStore, PresenceStore];
  const items1 = [arg0, arg1, arg2];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    if (closure_2) {
      const _Set = Set;
      const id = AuthenticationStore.getId();
      const set = new Set();
      const tmp10 = dependencyMap[Symbol.iterator]();
      while (true) {
        if (tmp10 === undefined) {
          let _Array = Array;
          return Array.from(set);
        } else {
          let user = tmp13.user;
          if (user.id === id) {
            let activities = SelfPresenceStore.getActivities();
          } else {
            activities = PresenceStore.getActivities(tmp15.id, closure_1);
          }
          let tmp22 = activities[Symbol.iterator]();
        }
      }
    } else {
      return [];
    }
  }, items1);
  const obj = require("initialize");
  const getGamesForAppIds = require("useGetGameForAppId").useGetGamesForAppIds(stateFromStoresArray);
  let obj2 = require("useGetGameForAppId");
  const items2 = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items2, () => {
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
      let obj2 = useGameProfileObscured;
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