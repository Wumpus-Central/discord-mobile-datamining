// === Module 17332: useVoiceChannelGames ===

// Module 17332 (useVoiceChannelGames)
import useGameProfileObscured from "useGameProfileObscured" /* 5903 */;
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9407 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5445 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, dependencyMap, set;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0, arg1, arg2) {
  let closure_0;
  let closure_2;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  const obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, SelfPresenceStore, PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg2) {
    if (cResult[2] === arg1) {
      let tmp10;
      let tmp11;
      let tmp17;
      let tmp16;
      if (cResult[3] === arg0) {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      let tmp13 = tmp3;
      const tmp2Result = require("get initialized");
      const stateFromStoresArray = tmp2Result.useStateFromStoresArray(first, tmp10, tmp11);
      const tmp2Result3 = require("useGetGameForAppId");
      const getGamesForAppIds = tmp2Result3.useGetGamesForAppIds(stateFromStoresArray);
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        class A {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let nsfwAllowed;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        cResult[6] = items1;
        cResult[7] = A;
        tmp17 = A;
        tmp16 = items1;
      } else {
        tmp16 = cResult[6];
        tmp17 = cResult[7];
      }
      const tmp2Result4 = require("get initialized");
      const stateFromStores = tmp2Result4.useStateFromStores(tmp16, tmp17);
      if (cResult[8] === getGamesForAppIds) {
        let tmp22;
        if (cResult[9] === stateFromStores) {
          tmp22 = cResult[10];
        }
        return tmp22;
      }
      const items2 = [];
      let _Set = Set;
      let self = this;
      let self2 = this;
      set = new Set();
      for (const item10077 of getGamesForAppIds) {
        class A {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let nsfwAllowed;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        let obj6 = require("useGameProfileObscured");
        let result = obj6.isGameProfileObscured(item10077, stateFromStores) || set.has(item10077.id);
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
    }
  }
  const fn = function v() {
    if (closure_2) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const id = AuthenticationStore.getId();
      set = new Set();
      const iter = closure_0[Symbol.iterator]();
      while (iter !== undefined) {
        let user = iter.next().user;
        if (user.id === id) {
          let activities = SelfPresenceStore.getActivities();
        } else {
          activities = PresenceStore.getActivities(tmp11.id, closure_1);
        }
        for (const item10035 of activities) {
          let tmp22 = isPlayingGameActivityDefault(item10035) && null != item10035.application_id;
          if (tmp22) {
            let addResult = set.add(item10035.application_id);
          }
          continue;
        }
        continue;
      }
      const _Array = Array;
      return Array.from(set);
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
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let items = [stateFromStores, SelfPresenceStore, PresenceStore];
  const items1 = [arg0, arg1, arg2];
  const obj = require("get initialized");
  const stateFromStoresArray = obj.useStateFromStoresArray(items, function() {
    if (closure_2) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const id = AuthenticationStore.getId();
      set = new Set();
      const iter = closure_0[Symbol.iterator]();
      while (iter !== undefined) {
        let user = iter.next().user;
        if (user.id === id) {
          let activities = SelfPresenceStore.getActivities();
        } else {
          activities = PresenceStore.getActivities(tmp11.id, closure_1);
        }
        for (const item10035 of activities) {
          let tmp22 = isPlayingGameActivityDefault(item10035) && null != item10035.application_id;
          if (tmp22) {
            let addResult = set.add(item10035.application_id);
          }
          continue;
        }
        continue;
      }
      const _Array = Array;
      return Array.from(set);
    } else {
      return [];
    }
  }, items1);
  let obj2 = require("useGetGameForAppId");
  const getGamesForAppIds = obj2.useGetGamesForAppIds(stateFromStoresArray);
  const items2 = [UserStore];
  const obj3 = require("get initialized");
  stateFromStores = obj3.useStateFromStores(items2, () => {
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
    set = new Set();
    for (const item10013 of getGamesForAppIds) {
      let obj2 = useGameProfileObscured;
      let result = obj2.isGameProfileObscured(item10013, stateFromStores) || set.has(item10013.id);
      if (!result) {
        let addResult = set.add(item10013.id);
        let arr = items.push(item10013.id);
      }
      continue;
    }
    return items;
  }, items3);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default tmp2;