// === Module 8029: useGuildPowerupsBoostCount ===

// Module 8029 (useGuildPowerupsBoostCount)
import GameServerExperiment from "GameServerExperiment" /* 5026 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 8030 */;
import GuildStore from "GuildStore" /* 2087 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5007 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildAppliedBoostCount(arg0) {
  _require = arg0;
  const cResult = require("c").c(12);
  const obj = require("c");
  const items = [GuildStore];
  let num = require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  if (num == null) {
    num = 0;
  }
  const obj2 = require("initialize");
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(arg0, "GuildPowerupsBoostCount");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildPowerupsStore];
    cResult[0] = items1;
    let first = items1;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
      let appliedBoosts;
      if (stateForGuild != null) {
        appliedBoosts = stateForGuild.appliedBoosts;
      }
      return appliedBoosts;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = require("GameServerExperiment");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GameServerStore];
    cResult[3] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function b() {
      const stateForGuild = GameServerStore.getStateForGuild(closure_0);
      let appliedBoosts;
      if (stateForGuild != null) {
        appliedBoosts = stateForGuild.appliedBoosts;
      }
      return appliedBoosts;
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult3 = require("initialize");
  let num8 = require("initialize").useStateFromStores(tmp9, tmp11);
  if (null != stateFromStores) {
    if (num8 == null) {
      num8 = 0;
    }
    const sum = stateFromStores + num8;
    const _Math = Math;
    const bound = Math.max(0, num - sum);
    if (cResult[8] === num) {
      if (cResult[9] === sum) {
        if (cResult[10] === bound) {
          let tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
    const obj3 = { available: bound, spent: sum, total: num, isLoading: false };
    cResult[8] = num;
    cResult[9] = sum;
    cResult[10] = bound;
    cResult[11] = obj3;
    tmp14 = obj3;
  }
  if (cResult[6] !== num) {
    const obj4 = { available: 0, spent: 0, total: num, isLoading: true };
    cResult[6] = num;
    cResult[7] = obj4;
  }
  const tmpResult4 = require("initialize");
}) : (function useGuildAppliedBoostCount(arg0) {
  _require = arg0;
  const items = [stateFromStores1];
  num = require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  if (num == null) {
    num = 0;
  }
  let obj = require("initialize");
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(arg0, "GuildPowerupsBoostCount");
  const tmpResult = require("GameServerExperiment");
  const items1 = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
    let appliedBoosts;
    if (stateForGuild != null) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  const tmpResult3 = require("initialize");
  const items2 = [stateFromStores];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const stateForGuild = GameServerStore.getStateForGuild(closure_0);
    let appliedBoosts;
    if (stateForGuild != null) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  const items3 = [num, stateFromStores, stateFromStores1, gameServerEnabled];
  return gameServerEnabled.useMemo(() => {
    if (null != stateFromStores) {
      num = stateFromStores1;
      if (stateFromStores1 == null) {
        num = 0;
      }
      const sum = tmp + num;
      const obj = { available: null, spent: null, total: null, isLoading: false };
      const _Math = Math;
      obj.available = Math.max(0, num - sum);
      obj.spent = sum;
      obj.total = num;
      return obj;
    }
    return { available: 0, spent: 0, total: num, isLoading: true };
  }, items3);
});
export const getGuildPowerupsBoostCount = function getGuildPowerupsBoostCount(id) {
  guild = GuildStore.getGuild(id);
  let total;
  if (guild != null) {
    total = guild.premiumSubscriberCount;
  }
  if (total == null) {
    total = 0;
  }
  const gameServerEnabled = GameServerExperiment.getGameServerEnabled(id, "GuildPowerupsBoostCount");
  const stateForGuild = GuildPowerupsStore.getStateForGuild(id);
  let appliedBoosts;
  if (stateForGuild != null) {
    appliedBoosts = stateForGuild.appliedBoosts;
  }
  const stateForGuild1 = GameServerStore.getStateForGuild(id);
  if (stateForGuild1 != null) {
    let num2 = stateForGuild1.appliedBoosts;
  }
  if (null != appliedBoosts) {
    if (num2 == null) {
      num2 = 0;
    }
    const sum = appliedBoosts + num2;
    const obj2 = { available: null, spent: null, total: null };
    const _Math = Math;
    obj2.available = Math.max(0, total - sum);
    obj2.spent = sum;
    obj2.total = total;
    return obj2;
  }
  return { available: 0, spent: 0, total };
};