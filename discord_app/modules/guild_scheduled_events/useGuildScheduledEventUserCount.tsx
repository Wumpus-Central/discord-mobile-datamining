// === Module 9270: useGuildScheduledEventUserCount ===

// Module 9270 (useGuildScheduledEventUserCount)
import react from "react" /* 19 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9271 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const useEffect = react.useEffect;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(9);
  const tmp = _require;
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
        let tmp9;
        let tmp10;
        if (cResult[6] === arg2) {
          tmp9 = cResult[7];
          tmp10 = cResult[8];
        }
        useEffect(tmp9, tmp10);
        return tmp8;
      }
    }
    const fn2 = function v() {
      const tmp2 = null != closure_0 && null != closure_1;
      if (tmp2) {
        let items1;
        const getGuildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts;
        GuildScheduledEventManagerDefault;
        if (null != closure_2) {
          const items = [tmp8];
          items1 = items;
        } else {
          items1 = [];
        }
        const guildEventUserCounts = getGuildEventUserCounts(closure_0, closure_1, items1);
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
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let items = [GuildScheduledEventStore];
  let items1 = [arg1, arg0, arg2];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getUserCount(closure_1, closure_2));
  let tmp2 = useEffect(() => {
    const tmp2 = null != closure_0 && null != closure_1;
    if (tmp2) {
      let items1;
      const getGuildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts;
      GuildScheduledEventManagerDefault;
      if (null != closure_2) {
        const items = [tmp8];
        items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = getGuildEventUserCounts(closure_0, closure_1, items1);
    }
  }, items1);
  return stateFromStores;
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default tmp2;