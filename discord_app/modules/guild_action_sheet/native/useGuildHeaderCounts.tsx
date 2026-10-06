// === Module 13804: useGuildHeaderCounts ===

// Module 13804 (useGuildHeaderCounts)
import _mod12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import react_mod from "react" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4786 */;
import GuildHeaderCountsStore from "GuildHeaderCountsStore" /* 13805 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((type, guildId, arg2) => {
  let closure_2;
  let closure_3;
  _require = type;
  dependencyMap = arg2;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === guildId) {
    let tmp4;
    let tmp7;
    let tmp6;
    if (cResult[1] === type) {
      tmp4 = cResult[2];
    }
    react = tmp4;
    if (cResult[3] !== tmp4) {
      const fn = function l() {
        return () => closure_1_3.cancel();
      };
      const items = [tmp4];
      cResult[3] = tmp4;
      cResult[4] = fn;
      cResult[5] = items;
      tmp7 = items;
      tmp6 = fn;
    } else {
      tmp6 = cResult[4];
      tmp7 = cResult[5];
    }
    const effect = react.useEffect(tmp6, tmp7);
    const obj3 = react;
    if (cResult[6] === tmp4) {
      let tmp9;
      let tmp10;
      if (cResult[7] === arg2) {
        tmp9 = cResult[8];
        tmp10 = cResult[9];
      }
      const effect1 = obj3.useEffect(tmp9, tmp10);
    }
    const fn2 = function _() {
      if (closure_2 > 0) {
        closure_3(tmp);
      }
    };
    const items1 = [tmp4, arg2];
    cResult[6] = tmp4;
    cResult[7] = arg2;
    cResult[8] = fn2;
    cResult[9] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  }
  const tmpResult = tmp(12);
  const throttleResult = tmpResult.throttle((count) => {
    const obj = DispatcherDefault;
    const obj2 = { type, count, guildId };
    obj.dispatch(obj2);
  }, 3000);
  cResult[0] = guildId;
  cResult[1] = type;
  cResult[2] = throttleResult;
  tmp4 = throttleResult;
}) : ((arg0, arg1, arg2) => {
  let memo;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const items = [arg0, arg1];
  memo = memo.useMemo(() => {
    let guildId;
    let type;
    let obj = _mod12;
    return obj.throttle((count) => {
      const obj = guildId(closure_2[6]);
      const obj2 = { type, count, guildId };
      obj.dispatch(obj2);
    }, 3000);
  }, items);
  const items1 = [memo];
  const effect = memo.useEffect(() => () => memo.cancel(), items1);
  const items2 = [memo, arg2];
  const effect1 = memo.useEffect(() => {
    if (closure_2 > 0) {
      memo(tmp);
    }
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let num = GuildMemberCountStore.getMemberCount(closure_0);
      if (num == null) {
        num = 0;
      }
      return num;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  closure_6("GUILD_HEADER_MEMBER_COUNT", arg0, tmpResult.useStateFromStores(first, tmp6));
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildHeaderCountsStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function _() {
      return GuildHeaderCountsStore.getMemberCount(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult2 = require("get initialized");
  return tmpResult2.useStateFromStores(tmp8, tmp10);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildMemberCountStore];
  const obj = require("get initialized");
  closure_6("GUILD_HEADER_MEMBER_COUNT", arg0, obj.useStateFromStores(items, () => {
    let num = GuildMemberCountStore.getMemberCount(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  }));
  const items1 = [GuildHeaderCountsStore];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items1, () => GuildHeaderCountsStore.getMemberCount(closure_0));
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let num = GuildMemberCountStore.getOnlineCount(closure_0);
      if (num == null) {
        num = 0;
      }
      return num;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  closure_6("GUILD_HEADER_ONLINE_COUNT", arg0, tmpResult.useStateFromStores(first, tmp6));
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildHeaderCountsStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function _() {
      return GuildHeaderCountsStore.getOnlineCount(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult2 = require("get initialized");
  return tmpResult2.useStateFromStores(tmp8, tmp10);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildMemberCountStore];
  const obj = require("get initialized");
  closure_6("GUILD_HEADER_ONLINE_COUNT", arg0, obj.useStateFromStores(items, () => {
    let num = GuildMemberCountStore.getOnlineCount(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  }));
  const items1 = [GuildHeaderCountsStore];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items1, () => GuildHeaderCountsStore.getOnlineCount(closure_0));
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(7);
  const tmp4 = closure_7(arg0);
  const tmp5 = closure_8(arg0);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildHeaderCountsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return GuildHeaderCountsStore.getActiveChannelsCount(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === tmp4) {
      let tmp10;
      if (cResult[5] === tmp5) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj2 = { memberCount: tmp4, onlineCount: tmp5, activeChannelsCount: stateFromStores };
  cResult[3] = stateFromStores;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = obj2;
  tmp10 = obj2;
}) : ((arg0) => {
  let closure_0;
  let items;
  let obj2;
  _require = arg0;
  const obj = { memberCount: closure_7(arg0), onlineCount: closure_8(arg0), activeChannelsCount: obj2.useStateFromStores(items, () => GuildHeaderCountsStore.getActiveChannelsCount(closure_0)) };
  items = [GuildHeaderCountsStore];
  obj2 = require("get initialized");
  return obj;
});
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/useGuildHeaderCounts.tsx");

export const useGuildHeaderCounts = tmp2;