// === Module 14181: useGuildHeaderCounts ===

// Module 14181 (useGuildHeaderCounts)
import _mod12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import noop from "module_19" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5020 */;
import GuildHeaderCountsStore from "GuildHeaderCountsStore" /* 14182 */;

const require = globalThis.__r;

require = fn;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useThrottledDispatch(type, guildId, arg2) {
  _require = type;
  dependencyMap = arg2;
  const cResult = require("c").c(10);
  if (cResult[0] === guildId) {
    if (cResult[1] === type) {
      let tmp4 = cResult[2];
    }
    noop = tmp4;
    if (cResult[3] !== tmp4) {
      const fn = function l() {
        return () => closure_1_3.cancel();
      };
      const items = [tmp4];
      cResult[3] = tmp4;
      cResult[4] = fn;
      cResult[5] = items;
      let tmp7 = items;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[4];
      tmp7 = cResult[5];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    if (cResult[6] === tmp4) {
      if (cResult[7] === arg2) {
        let tmp9 = cResult[8];
        let tmp10 = cResult[9];
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
    obj3 = noop;
  }
  const obj = require("c");
  const throttleResult = require("module_12").throttle((count) => {
    DispatcherDefault.dispatch({ type, count, guildId });
  }, 3000);
  cResult[0] = guildId;
  cResult[1] = type;
  cResult[2] = throttleResult;
  tmp4 = throttleResult;
}) : (function useThrottledDispatch(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const items = [arg0, arg1];
  memo = memo.useMemo(() => _mod12.throttle((count) => {
    guildId(closure_2[6]).dispatch({ type, count, guildId });
  }, 3000), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => () => memo.cancel(), items1);
  const items2 = [memo, arg2];
  const effect1 = memo.useEffect(() => {
    if (closure_2 > 0) {
      memo(tmp);
    }
  }, items2);
});
ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMemberCount(arg0) {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let num = GuildMemberCountStore.getMemberCount(closure_0);
      if (num == null) {
        num = 0;
      }
      return num;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  closure_6("GUILD_HEADER_MEMBER_COUNT", arg0, require("initialize").useStateFromStores(first, tmp6));
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildHeaderCountsStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function _() {
      return GuildHeaderCountsStore.getMemberCount(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  return require("initialize").useStateFromStores(tmp8, tmp10);
}) : (function useMemberCount(arg0) {
  _require = arg0;
  const items = [GuildMemberCountStore];
  closure_6("GUILD_HEADER_MEMBER_COUNT", arg0, require("initialize").useStateFromStores(items, () => {
    let num = GuildMemberCountStore.getMemberCount(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  }));
  const obj = require("initialize");
  const items1 = [GuildHeaderCountsStore];
  return require("initialize").useStateFromStores(items1, () => GuildHeaderCountsStore.getMemberCount(closure_0));
});
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnlineCount(arg0) {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let num = GuildMemberCountStore.getOnlineCount(closure_0);
      if (num == null) {
        num = 0;
      }
      return num;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  closure_6("GUILD_HEADER_ONLINE_COUNT", arg0, require("initialize").useStateFromStores(first, tmp6));
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildHeaderCountsStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function _() {
      return GuildHeaderCountsStore.getOnlineCount(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  return require("initialize").useStateFromStores(tmp8, tmp10);
}) : (function useOnlineCount(arg0) {
  _require = arg0;
  const items = [GuildMemberCountStore];
  closure_6("GUILD_HEADER_ONLINE_COUNT", arg0, require("initialize").useStateFromStores(items, () => {
    let num = GuildMemberCountStore.getOnlineCount(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  }));
  const obj = require("initialize");
  const items1 = [GuildHeaderCountsStore];
  return require("initialize").useStateFromStores(items1, () => GuildHeaderCountsStore.getOnlineCount(closure_0));
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/useGuildHeaderCounts.tsx");

export const useGuildHeaderCounts = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildHeaderCounts(arg0) {
  _require = arg0;
  const cResult = require("c").c(7);
  const tmp4 = closure_7(arg0);
  const tmp5 = closure_8(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildHeaderCountsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return GuildHeaderCountsStore.getActiveChannelsCount(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp8);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === tmp4) {
      if (cResult[5] === tmp5) {
        let tmp10 = cResult[6];
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
  const tmpResult = require("initialize");
}) : (function useGuildHeaderCounts(arg0) {
  _require = arg0;
  const obj = { memberCount: closure_7(arg0), onlineCount: closure_8(arg0), activeChannelsCount: null };
  const items = [GuildHeaderCountsStore];
  obj.activeChannelsCount = require("initialize").useStateFromStores(items, () => GuildHeaderCountsStore.getActiveChannelsCount(closure_0));
  return obj;
});