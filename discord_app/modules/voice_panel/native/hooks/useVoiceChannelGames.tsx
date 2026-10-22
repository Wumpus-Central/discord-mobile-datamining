// discord_app/modules/voice_panel/native/hooks/useVoiceChannelGames.tsx
import useGameProfileObscured from "../../../game_profile/hooks/useGameProfileObscured.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";
import SelfPresenceStore from "../../../../stores/SelfPresenceStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useVoiceChannelGames(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore, SelfPresenceStore, PresenceStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp10 = cResult[3];
          let tmp11 = cResult[4];
        }
        const stateFromStoresArray = tmp2(504).useStateFromStoresArray(first, tmp10, tmp11);
        const tmp2Result = tmp2(504);
        const getGamesForAppIds = tmp2(9193).useGetGamesForAppIds(stateFromStoresArray);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [UserStore];
          const fn2 = function _() {
            currentUser = currentUser.getCurrentUser();
            let nsfwAllowed;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          };
          cResult[5] = items1;
          cResult[6] = fn2;
          let tmp17 = fn2;
          let tmp16 = items1;
        } else {
          tmp16 = cResult[5];
          tmp17 = cResult[6];
        }
        const tmp2Result3 = tmp2(9193);
        const stateFromStores = tmp2(504).useStateFromStores(tmp16, tmp17);
        if (cResult[7] === getGamesForAppIds) {
          if (cResult[8] === stateFromStores) {
            let tmp22 = cResult[9];
          }
          return tmp22;
        }
        const items2 = [];
        const _Set = Set;
        let set = new Set();
        for (const item10074 of getGamesForAppIds) {
          let obj6 = require("useGameProfileObscured");
          let result = obj6.isGameProfileObscured(item10074, stateFromStores);
          if (!result) {
            result = set.has(item10074.id);
          }
          if (!result) {
            let addResult = set.add(item10074.id);
            let arr = items2.push(item10074.id);
          }
          continue;
        }
        cResult[7] = getGamesForAppIds;
        cResult[8] = stateFromStores;
        cResult[9] = items2;
        tmp22 = items2;
        const tmp2Result4 = tmp2(504);
      }
      const fn = function f() {
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
      };
      const items3 = [arg0, arg1];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items3;
      tmp11 = items3;
      tmp10 = fn;
      const obj = require("c");
    }
  : function useVoiceChannelGames(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      let items = [AuthenticationStore, SelfPresenceStore, PresenceStore];
      const items1 = [arg0, arg1];
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items,
        () => {
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
        },
        items1,
      );
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
