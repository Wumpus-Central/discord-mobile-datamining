// === Module 12211: useAvailableBoostCountForPowerup ===

// Module 12211 (useAvailableBoostCountForPowerup)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4773 */;

const require = globalThis.__r;

const require = fn;
const GuildPowerupsConstants = fn(4774);
({ GuildPowerupType: closure_7, POWERUPS_INCLUDED_IN_LEVEL: closure_8, LEVEL_SKU_ID_TO_BOOSTING_TIER: closure_9 } = GuildPowerupsConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, type) => {
  _require = arg0;
  const cResult = require("c").c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
    cResult[1] = arg0;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, S);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
    const items1 = [GuildPowerupsStore];
    cResult[3] = items1;
    const tmp8 = items1;
  } else {
    class S {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
    cResult[4] = arg0;
    cResult[5] = tmp10;
  } else {
    class S {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  if (null != type) {
    class S {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
    if (type.type === constants.LEVEL) {
      class S {
        constructor() {
          return closure_5.getGuild(closure_0);
        }
      }
      if (cResult[15] !== tmp13) {
        class S {
          constructor() {
            return closure_5.getGuild(closure_0);
          }
        }
        if (tmp13 != null) {
          class S {
            constructor() {
              return closure_5.getGuild(closure_0);
            }
          }
          const reduced = tmp13.reduce((acc, cost) => acc + cost.cost, 0);
        }
        cResult[15] = tmp13;
        cResult[16] = reduced;
      } else {
        class S {
          constructor() {
            return closure_5.getGuild(closure_0);
          }
        }
      }
      if (stateFromStores != null) {
        class S {
          constructor() {
            return closure_5.getGuild(closure_0);
          }
        }
      }
      if (undefined == null) {
        class S {
          constructor() {
            return closure_5.getGuild(closure_0);
          }
        }
      }
      const diff = tmp16 - tmp12;
      if (tmp14 == null) {
        class S {
          constructor() {
            return closure_5.getGuild(closure_0);
          }
        }
      }
      return Math.max(diff + tmp14, 0);
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
    cResult[6] = tmp13;
  } else {
    class S {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
  }
  const tmpResult2 = require("initialize");
}) : ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  let items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const obj = require("initialize");
  const items1 = [GuildPowerupsStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const items2 = [arg1, stateFromStores1];
  const memo = noop.useMemo(() => {
    if (null != closure_1) {
      if (closure_1.type === constants.LEVEL) {
        if (null != stateFromStores1) {
          closure_0 = tmp9;
          if (null == closure_1_9[closure_1.skuId]) {
            let items = [];
          } else {
            const _Object = Object;
            const entries = Object.entries(closure_1_8);
            const found = entries.filter((item) => {
              [tmp, tmp2] = item;
              let tmp3 = tmp2 === closure_0;
              if (tmp3) {
                tmp3 = null != stateFromStores1.unlockedPowerups[tmp];
              }
              return tmp3;
            });
            const mapped = found.map((item) => {
              [tmp] = item;
              return allPowerups.allPowerups[tmp];
            });
            items = mapped.filter(closure_0(stateFromStores1[9]).isNotNullish);
          }
          return items;
        }
      }
    }
    return [];
  }, items2);
  let num;
  if (memo != null) {
    num = memo.reduce((acc, cost) => acc + cost.cost, 0);
  }
  let num3;
  if (stateFromStores != null) {
    num3 = stateFromStores.premiumSubscriberCount;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const diff = num3 - require("useGuildPowerupsBoostCount")(arg0).spent;
  if (num == null) {
    num = 0;
  }
  return Math.max(diff + num, 0);
});