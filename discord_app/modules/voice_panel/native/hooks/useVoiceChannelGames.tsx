// === Module 17304: useVoiceChannelGames ===

// Module 17304 (useVoiceChannelGames)
import useGameProfileObscured from "useGameProfileObscured" /* 5896 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, SelfPresenceStore, PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg2) {
    if (cResult[2] === arg1) {
      if (cResult[3] === arg0) {
        let tmp10 = cResult[4];
        let tmp11 = cResult[5];
      }
      const stateFromStoresArray = tmp2(504).useStateFromStoresArray(first, tmp10, tmp11);
      const tmp2Result = tmp2(504);
      const getGamesForAppIds = tmp2(9394).useGetGamesForAppIds(stateFromStoresArray);
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        class A {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            nsfwAllowed = undefined;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        cResult[6] = items1;
        cResult[7] = A;
        let tmp17 = A;
        let tmp16 = items1;
      } else {
        tmp16 = cResult[6];
        tmp17 = cResult[7];
      }
      const tmp2Result3 = tmp2(9394);
      const stateFromStores = tmp2(504).useStateFromStores(tmp16, tmp17);
      if (cResult[8] === getGamesForAppIds) {
        if (cResult[9] === stateFromStores) {
          let tmp22 = cResult[10];
        }
        return tmp22;
      }
      const items2 = [];
      let _Set = Set;
      let set = new Set();
      for (const item10077 of getGamesForAppIds) {
        class A {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            nsfwAllowed = undefined;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        let obj6 = require("useGameProfileObscured");
        let result = obj6.isGameProfileObscured(item10077, stateFromStores);
        if (!result) {
          result = set.has(item10077.id);
        }
        if (!result) {
          let addResult = set.add(item10077.id);
          let arr = items2.push(item10077.id);
        }
        continue;
      }
      cResult[8] = getGamesForAppIds;
      cResult[9] = stateFromStores;
      cResult[10] = items2;
      tmp22 = items2;
      const tmp2Result4 = tmp2(504);
    }
  }
  const fn = function v() {
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
  };
  const items3 = [arg0, arg1, arg2];
  cResult[1] = arg2;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  cResult[5] = items3;
  tmp11 = items3;
  tmp10 = fn;
  const obj = require("c");
}) : ((arg0, arg1, arg2) => {
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
});