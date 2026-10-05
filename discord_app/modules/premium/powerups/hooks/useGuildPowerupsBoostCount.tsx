// === Module 7671: useGuildPowerupsBoostCount ===

// Module 7671 (useGuildPowerupsBoostCount)
import GameServerExperiment from "GameServerExperiment" /* 4786 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 7672 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4767 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(12);
  const items = [GuildStore];
  const obj2 = require("get initialized");
  let num = obj2.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  if (num == null) {
    num = 0;
  }
  const tmpResult = require("GameServerExperiment");
  const gameServerEnabled = tmpResult.useGameServerEnabled(arg0, "GuildPowerupsBoostCount");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildPowerupsStore];
    cResult[0] = items1;
    first = items1;
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult3 = require("get initialized");
  const stateFromStores = tmpResult3.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GameServerStore];
    cResult[3] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class G {
      constructor() {
        const stateForGuild = GameServerStore.getStateForGuild(closure_0);
        let appliedBoosts;
        if (stateForGuild != null) {
          appliedBoosts = stateForGuild.appliedBoosts;
        }
        return appliedBoosts;
      }
    }
    cResult[4] = arg0;
    cResult[5] = G;
  } else {
    class G {
      constructor() {
        const stateForGuild = GameServerStore.getStateForGuild(closure_0);
        let appliedBoosts;
        if (stateForGuild != null) {
          appliedBoosts = stateForGuild.appliedBoosts;
        }
        return appliedBoosts;
      }
    }
  }
  const tmpResult4 = require("get initialized");
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, G);
  if (null != stateFromStores) {
    class G {
      constructor() {
        const stateForGuild = GameServerStore.getStateForGuild(closure_0);
        let appliedBoosts;
        if (stateForGuild != null) {
          appliedBoosts = stateForGuild.appliedBoosts;
        }
        return appliedBoosts;
      }
    }
    if (stateFromStores1 == null) {
      class G {
        constructor() {
          const stateForGuild = GameServerStore.getStateForGuild(closure_0);
          let appliedBoosts;
          if (stateForGuild != null) {
            appliedBoosts = stateForGuild.appliedBoosts;
          }
          return appliedBoosts;
        }
      }
    }
    const sum = stateFromStores + stateFromStores1;
    const _Math = Math;
    const bound = Math.max(0, num - sum);
    if (cResult[8] === num) {
      class G {
        constructor() {
          const stateForGuild = GameServerStore.getStateForGuild(closure_0);
          let appliedBoosts;
          if (stateForGuild != null) {
            appliedBoosts = stateForGuild.appliedBoosts;
          }
          return appliedBoosts;
        }
      }
    }
    const obj3 = { available: bound, spent: sum, total: num, isLoading: false };
    cResult[8] = num;
    cResult[9] = sum;
    cResult[10] = bound;
    cResult[11] = obj3;
  }
  if (cResult[6] !== num) {
    class G {
      constructor() {
        const stateForGuild = GameServerStore.getStateForGuild(closure_0);
        let appliedBoosts;
        if (stateForGuild != null) {
          appliedBoosts = stateForGuild.appliedBoosts;
        }
        return appliedBoosts;
      }
    }
    tmp17[2] = num;
    cResult[6] = num;
    cResult[7] = tmp17;
  } else {
    class G {
      constructor() {
        const stateForGuild = GameServerStore.getStateForGuild(closure_0);
        let appliedBoosts;
        if (stateForGuild != null) {
          appliedBoosts = stateForGuild.appliedBoosts;
        }
        return appliedBoosts;
      }
    }
  }
}) : ((arg0) => {
  let closure_0;
  let num;
  let stateFromStores1;
  _require = arg0;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [stateFromStores1];
  num = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  if (num == null) {
    num = 0;
  }
  const tmpResult = tmp(num[4]);
  const gameServerEnabled = tmpResult.useGameServerEnabled(arg0, "GuildPowerupsBoostCount");
  const items1 = [GuildPowerupsStore];
  const tmpResult3 = tmp(num[7]);
  const stateFromStores = tmpResult3.useStateFromStores(items1, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
    let appliedBoosts;
    if (stateForGuild != null) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  const items2 = [stateFromStores];
  const tmpResult4 = tmp(num[7]);
  stateFromStores1 = tmpResult4.useStateFromStores(items2, () => {
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
      const _Math = Math;
      const obj = { available: Math.max(0, num - sum), spent: sum, total: num, isLoading: false };
      return obj;
    }
    return { available: 0, spent: 0, total: num, isLoading: true };
  }, items3);
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx");

export default tmp2;
export const getGuildPowerupsBoostCount = function getGuildPowerupsBoostCount(id) {
  let num2;
  const guild = GuildStore.getGuild(id);
  let total;
  if (guild != null) {
    total = guild.premiumSubscriberCount;
  }
  if (total == null) {
    total = 0;
  }
  const obj = GameServerExperiment;
  const gameServerEnabled = obj.getGameServerEnabled(id, "GuildPowerupsBoostCount");
  const stateForGuild = GuildPowerupsStore.getStateForGuild(id);
  let appliedBoosts;
  if (stateForGuild != null) {
    appliedBoosts = stateForGuild.appliedBoosts;
  }
  const stateForGuild1 = GameServerStore.getStateForGuild(id);
  if (stateForGuild1 != null) {
    num2 = stateForGuild1.appliedBoosts;
  }
  if (null != appliedBoosts) {
    if (num2 == null) {
      num2 = 0;
    }
    const sum = appliedBoosts + num2;
    const _Math = Math;
    const obj2 = { available: Math.max(0, total - sum), spent: sum, total };
    return obj2;
  }
  return { available: 0, spent: 0, total };
};