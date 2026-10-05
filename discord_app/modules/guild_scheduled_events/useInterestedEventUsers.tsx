// discord_app/modules/guild_scheduled_events/useInterestedEventUsers.tsx
import react from "../../../_runtime/00019_react.js";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import GuildScheduledEventStore from "GuildScheduledEventStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, set;

const useMemo = react.useMemo;
let closure_4 = GuildScheduledEventsConstants.GuildScheduledEventUserResponses;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0, arg1) {
      let closure_0;
      let closure_1;
      let first;
      let reduced;
      let tmp6;
      let tmp7;
      let tmp8;
      _require = arg0;
      dependencyMap = arg1;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [reduced];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, null));
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [reduced];
        cResult[4] = items2;
        tmp8 = items2;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === arg0) {
        let tmp10;
        let tmp11;
        if (cResult[6] === arg1) {
          tmp10 = cResult[7];
          tmp11 = cResult[8];
        }
        const tmpResult2 = tmp(504);
        const stateFromStoresArray1 = tmpResult2.useStateFromStoresArray(tmp8, tmp10, tmp11);
        if (cResult[9] !== stateFromStoresArray1) {
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor(arg0, user_id) {
                arg0[user_id.user_id] = user_id;
                return arg0;
              }
            }
            cResult[11] = T;
          } else {
            class T {
              constructor(arg0, user_id) {
                arg0[user_id.user_id] = user_id;
                return arg0;
              }
            }
          }
          reduced = stateFromStoresArray1.reduce(T, {});
          cResult[9] = stateFromStoresArray1;
          cResult[10] = reduced;
        } else {
          class T {
            constructor(arg0, user_id) {
              arg0[user_id.user_id] = user_id;
              return arg0;
            }
          }
        }
        reduced = tmp12;
        if (cResult[12] === stateFromStoresArray) {
          class T {
            constructor(arg0, user_id) {
              arg0[user_id.user_id] = user_id;
              return arg0;
            }
          }
        }
        const found = stateFromStoresArray.filter((item) => null == tmp || tmp.response === set.INTERESTED);
        const found1 = stateFromStoresArray1.filter((response) => response.response === set.INTERESTED);
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        const items3 = [];
        function addUserToAllInterested(user_id) {
          if (!set.has(user_id.user_id)) {
            items3.push(user_id);
            set.add(user_id.user_id);
          }
        }
        const item = found.forEach(addUserToAllInterested);
        const item1 = found1.forEach(addUserToAllInterested);
        cResult[12] = stateFromStoresArray;
        cResult[13] = stateFromStoresArray1;
        cResult[14] = tmp12;
        cResult[15] = items3;
      }
      const fn2 = function f() {
        return Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, closure_1));
      };
      const items4 = [arg0, arg1];
      cResult[5] = arg0;
      cResult[6] = arg1;
      cResult[7] = fn2;
      cResult[8] = items4;
      tmp11 = items4;
      tmp10 = fn2;
    }
  : (arg0, arg1) => {
      let closure_1;
      let stateFromStoresArray1;
      _require = arg0;
      dependencyMap = arg1;
      let items = [stateFromStoresArray1];
      const items1 = [arg0];
      const obj = require("get initialized");
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, null)),
        items1,
      );
      const items2 = [stateFromStoresArray1];
      const items3 = [arg0, arg1];
      const obj2 = require("get initialized");
      stateFromStoresArray1 = obj2.useStateFromStoresArray(
        items2,
        () => Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, closure_1)),
        items3,
      );
      const items4 = [stateFromStoresArray, stateFromStoresArray1];
      return stateFromStoresArray(() => {
        function addUserToAllInterested(user_id) {
          if (!set.has(user_id.user_id)) {
            items.push(user_id);
            set.add(user_id.user_id);
          }
        }
        closure_0 = stateFromStoresArray1.reduce((acc, user_id) => {
          acc[user_id.user_id] = user_id;
          return acc;
        }, {});
        const found = stateFromStoresArray.filter((item) => null == tmp || tmp.response === constants.INTERESTED);
        const found1 = stateFromStoresArray1.filter((response) => response.response === constants.INTERESTED);
        set = new Set();
        const items = [];
        const item = found.forEach(addUserToAllInterested);
        const item1 = found1.forEach(addUserToAllInterested);
        return items;
      }, items4);
    };
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useInterestedEventUsers.tsx");

export default tmp2;
