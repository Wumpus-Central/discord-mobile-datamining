// === Module 19271: useVoiceChannelGames ===

// Module 19271 (useVoiceChannelGames)
import useGameProfileObscured from "useGameProfileObscured" /* 8682 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6570 */;
import UserStore from "UserStore" /* 1383 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default function useVoiceChannelGames(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [AuthenticationStore, SelfPresenceStore, PresenceStore];
  const items1 = [arg0, arg1];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const id = AuthenticationStore.getId();
    const tmp4 = dependencyMap[Symbol.iterator]();
    while (true) {
      if (tmp4 === undefined) {
        let _Array = Array;
        return Array.from(set);
      } else {
        let user = tmp6.user;
        if (user.id === id) {
          let activities = SelfPresenceStore.getActivities();
        } else {
          activities = PresenceStore.getActivities(tmp8.id, closure_1);
        }
        let tmp15 = activities[Symbol.iterator]();
      }
    }
    set = new Set();
  }, items1);
  const obj = require("initialize");
  getGamesForAppIds = require("useGetGameForAppId").useGetGamesForAppIds(stateFromStoresArray);
  let obj2 = require("useGetGameForAppId");
  const items2 = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items3 = [getGamesForAppIds, stateFromStores];
  return stateFromStores.useMemo(() => {
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