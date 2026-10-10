// === Module 8527: useInterestedEventUsers ===

// Module 8527 (useInterestedEventUsers)
import _mod19 from "module_19" /* 19 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2071 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6054 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
let closure_4 = GuildScheduledEventsConstants.GuildScheduledEventUserResponses;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useInterestedEventUsers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useInterestedEventUsers(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildScheduledEventStore];
    cResult[4] = items2;
    let tmp8 = items2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === arg0) {
    if (cResult[6] === arg1) {
      let tmp10 = cResult[7];
      let tmp11 = cResult[8];
    }
    const stateFromStoresArray1 = tmp(504).useStateFromStoresArray(tmp8, tmp10, tmp11);
    if (cResult[9] !== stateFromStoresArray1) {
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(arg0, arg1) {
            arg0[arg1.user_id] = arg1;
            return arg0;
          }
        }
        cResult[11] = I;
      } else {
        class I {
          constructor(arg0, arg1) {
            arg0[arg1.user_id] = arg1;
            return arg0;
          }
        }
      }
      const reduced = stateFromStoresArray1.reduce(I, {});
      cResult[9] = stateFromStoresArray1;
      cResult[10] = reduced;
    } else {
      class I {
        constructor(arg0, arg1) {
          arg0[arg1.user_id] = arg1;
          return arg0;
        }
      }
      GuildScheduledEventStore = tmp12;
      if (cResult[12] === stateFromStoresArray) {
        class I {
          constructor(arg0, arg1) {
            arg0[arg1.user_id] = arg1;
            return arg0;
          }
        }
      }
      const found = stateFromStoresArray.filter((item) => {
        let tmp2 = null == tmp;
        if (!tmp2) {
          tmp2 = tmp.response === set.INTERESTED;
        }
        return tmp2;
      });
      const found1 = stateFromStoresArray1.filter((response) => response.response === set.INTERESTED);
      const _Set = Set;
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
      const set = new Set();
    }
    const tmpResult2 = tmp(504);
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
  const tmpResult = require("initialize");
}) : (function useInterestedEventUsers(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let items = [stateFromStoresArray1];
  const items1 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, null)), items1);
  const obj = require("initialize");
  const items2 = [stateFromStoresArray1];
  const items3 = [arg0, arg1];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items2, () => Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, closure_1)), items3);
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
    const found = stateFromStoresArray.filter((item) => {
      let tmp2 = null == tmp;
      if (!tmp2) {
        tmp2 = tmp.response === constants.INTERESTED;
      }
      return tmp2;
    });
    const found1 = stateFromStoresArray1.filter((response) => response.response === constants.INTERESTED);
    const set = new Set();
    const items = [];
    const item = found.forEach(addUserToAllInterested);
    const item1 = found1.forEach(addUserToAllInterested);
    return items;
  }, items4);
});