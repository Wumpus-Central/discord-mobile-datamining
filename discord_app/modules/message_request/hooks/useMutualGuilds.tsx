// discord_app/modules/message_request/hooks/useMutualGuilds.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let stateFromStoresArray;
      let tmp6;
      let tmp8;
      _require = arg0;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          return UserStore.getUser(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(stateFromStoresArray[5]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserProfileStore];
        cResult[3] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        class M {
          constructor() {
            const mutualGuilds = UserProfileStore.getMutualGuilds(closure_0);
            let mapped;
            if (mutualGuilds != null) {
              mapped = mutualGuilds.map((guild) => guild.guild);
            }
            if (mapped == null) {
              mapped = [];
            }
            return mapped;
          }
        }
        cResult[4] = arg0;
        cResult[5] = M;
      } else {
        class M {
          constructor() {
            const mutualGuilds = UserProfileStore.getMutualGuilds(closure_0);
            let mapped;
            if (mutualGuilds != null) {
              mapped = mutualGuilds.map((guild) => guild.guild);
            }
            if (mapped == null) {
              mapped = [];
            }
            return mapped;
          }
        }
      }
      const tmpResult2 = tmp(stateFromStoresArray[5]);
      stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp8, M);
      if (cResult[6] === stateFromStoresArray) {
        class M {
          constructor() {
            const mutualGuilds = UserProfileStore.getMutualGuilds(closure_0);
            let mapped;
            if (mutualGuilds != null) {
              mapped = mutualGuilds.map((guild) => guild.guild);
            }
            if (mapped == null) {
              mapped = [];
            }
            return mapped;
          }
        }
      }
      const fn2 = function _() {
        const tmp =
          0 === stateFromStoresArray.length &&
          null != stateFromStores &&
          null == UserProfileStore.getMutualGuilds(closure_0);
        if (tmp) {
          const obj = DispatcherDefault;
          obj.wait(() => stateFromStores(stateFromStoresArray[7])(closure_1_0, undefined, { withMutualGuilds: true }));
        }
      };
      const items2 = [stateFromStoresArray, stateFromStores, arg0];
      cResult[6] = stateFromStoresArray;
      cResult[7] = stateFromStores;
      cResult[8] = arg0;
      cResult[9] = fn2;
      cResult[10] = items2;
    }
  : (arg0) => {
      let closure_0;
      let stateFromStoresArray;
      _require = arg0;
      let obj = require("get initialized");
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(closure_0));
      const items1 = [UserProfileStore];
      const obj2 = require("get initialized");
      stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
        const mutualGuilds = UserProfileStore.getMutualGuilds(closure_0);
        let mapped;
        if (mutualGuilds != null) {
          mapped = mutualGuilds.map((guild) => guild.guild);
        }
        if (mapped == null) {
          mapped = [];
        }
        return mapped;
      });
      const items2 = [stateFromStoresArray, stateFromStores, arg0];
      const effect = react.useEffect(() => {
        const tmp =
          0 === stateFromStoresArray.length &&
          null != stateFromStores &&
          null == UserProfileStore.getMutualGuilds(closure_0);
        if (tmp) {
          const obj = DispatcherDefault;
          obj.wait(() => stateFromStores(stateFromStoresArray[7])(closure_1_0, undefined, { withMutualGuilds: true }));
        }
      }, items2);
      return stateFromStoresArray;
    };
const result = size.fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = tmp2;
