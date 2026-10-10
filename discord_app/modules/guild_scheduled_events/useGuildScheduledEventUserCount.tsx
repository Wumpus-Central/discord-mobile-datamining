// === Module 8516: useGuildScheduledEventUserCount ===

// Module 8516 (useGuildScheduledEventUserCount)
import _mod19 from "module_19" /* 19 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 8517 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6054 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildScheduledEventUserCount(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildScheduledEventStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    tmp(504);
    if (cResult[4] === arg1) {
      if (cResult[5] === arg0) {
        if (cResult[6] === arg2) {
          let tmp9 = cResult[7];
          let tmp10 = cResult[8];
        }
        useEffect(tmp9, tmp10);
        return tmp8;
      }
    }
    const fn2 = function f() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = null != closure_1;
      }
      if (tmp2) {
        if (null != closure_2) {
          const items = [tmp7];
          let items1 = items;
        } else {
          items1 = [];
        }
        const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(closure_0, closure_1, items1);
      }
    };
    let items1 = [arg1, arg0, arg2];
    cResult[4] = arg1;
    cResult[5] = arg0;
    cResult[6] = arg2;
    cResult[7] = fn2;
    cResult[8] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  }
  const fn = function c() {
    return GuildScheduledEventStore.getUserCount(closure_1, closure_2);
  };
  cResult[1] = arg1;
  cResult[2] = arg2;
  cResult[3] = fn;
  let obj = require("c");
  tmp = _require;
}) : (function useGuildScheduledEventUserCount(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  let items = [GuildScheduledEventStore];
  let items1 = [arg1, arg0, arg2];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildScheduledEventStore.getUserCount(closure_1, closure_2));
  useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != closure_1;
    }
    if (tmp2) {
      if (null != closure_2) {
        const items = [tmp7];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(closure_0, closure_1, items1);
    }
  }, items1);
  return stateFromStores;
});