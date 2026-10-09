// === Module 12198: useFeaturedExpiringPowerup ===

// Module 12198 (useFeaturedExpiringPowerup)
import CollectiblesUtils from "CollectiblesUtils" /* 7269 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 8012 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4968 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFeaturedExpiringPowerup(arg0) {
  _require = arg0;
  const cResult = require("c").c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GameServerStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function _() {
      return GameServerStore.getStateForGuild(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  const tmpResult4 = require("initialize");
  const expiringPowerupCoachmarkEnabled = require("ExpiringPowerupCoachmarkExperiment").useExpiringPowerupCoachmarkEnabled("useFeaturedExpiringPowerup");
  if (cResult[6] === expiringPowerupCoachmarkEnabled) {
    let entitlements;
    if (stateFromStores1 != null) {
      entitlements = stateFromStores1.entitlements;
    }
    if (cResult[7] === entitlements) {
      let allPowerups;
      if (stateFromStores != null) {
        allPowerups = stateFromStores.allPowerups;
      }
      if (cResult[8] === allPowerups) {
        let unlockedPowerups;
        if (stateFromStores != null) {
          unlockedPowerups = stateFromStores.unlockedPowerups;
        }
        if (cResult[9] === unlockedPowerups) {
          let tmp17 = cResult[10];
        }
        return tmp17;
      }
    }
  }
  if (expiringPowerupCoachmarkEnabled) {
    let unlockedPowerups1;
    if (stateFromStores != null) {
      unlockedPowerups1 = stateFromStores.unlockedPowerups;
    }
    if (unlockedPowerups1 == null) {
      unlockedPowerups1 = {};
    }
    const items2 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(Object.values(unlockedPowerups1), 0);
    let entitlements1;
    if (stateFromStores1 != null) {
      entitlements1 = stateFromStores1.entitlements;
    }
    if (entitlements1 == null) {
      entitlements1 = {};
    }
    HermesBuiltin.arraySpread(Object.values(entitlements1), arraySpreadResult);
    const found = items2.filter((ends_at) => {
      let tmp = null != ends_at.ends_at;
      if (tmp) {
        const metadata = ends_at.metadata;
        let num;
        if (metadata != null) {
          num = metadata.num_expiring_boosts;
        }
        if (num == null) {
          num = 0;
        }
        tmp = num > 0;
      }
      return tmp;
    });
    if (0 !== found.length) {
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0, arg1) {
            tmp = arg0;
            if (arg1.ends_at > arg0.ends_at) {
              tmp = arg1;
            }
            return tmp;
          }
        }
        cResult[11] = S;
      } else {
        class S {
          constructor(arg0, arg1) {
            tmp = arg0;
            if (arg1.ends_at > arg0.ends_at) {
              tmp = arg1;
            }
            return tmp;
          }
        }
      }
      const reduced = found.reduce(S);
      if (stateFromStores != null) {
        class S {
          constructor(arg0, arg1) {
            tmp = arg0;
            if (arg1.ends_at > arg0.ends_at) {
              tmp = arg1;
            }
            return tmp;
          }
        }
        if (tmp28 != null) {
          class S {
            constructor(arg0, arg1) {
              tmp = arg0;
              if (arg1.ends_at > arg0.ends_at) {
                tmp = arg1;
              }
              return tmp;
            }
          }
        }
      }
      if (undefined == null) {
        class S {
          constructor(arg0, arg1) {
            tmp = arg0;
            if (arg1.ends_at > arg0.ends_at) {
              tmp = arg1;
            }
            return tmp;
          }
        }
      }
      if (reduced.sku != null) {
        class S {
          constructor(arg0, arg1) {
            tmp = arg0;
            if (arg1.ends_at > arg0.ends_at) {
              tmp = arg1;
            }
            return tmp;
          }
        }
        if (tmp30 != null) {
          class S {
            constructor(arg0, arg1) {
              tmp = arg0;
              if (arg1.ends_at > arg0.ends_at) {
                tmp = arg1;
              }
              return tmp;
            }
          }
          if (tmp31 != null) {
            class S {
              constructor(arg0, arg1) {
                tmp = arg0;
                if (arg1.ends_at > arg0.ends_at) {
                  tmp = arg1;
                }
                return tmp;
              }
            }
          }
        }
      }
      if (null === undefined) {
        class S {
          constructor(arg0, arg1) {
            tmp = arg0;
            if (arg1.ends_at > arg0.ends_at) {
              tmp = arg1;
            }
            return tmp;
          }
        }
      }
      const _Math = Math;
      const _Date = Date;
      const date = new Date(reduced.ends_at);
      const bound = Math.max(0, tmp(7269).getDaysRemaining(date));
      if (reduced.metadata != null) {
        class S {
          constructor(arg0, arg1) {
            tmp = arg0;
            if (arg1.ends_at > arg0.ends_at) {
              tmp = arg1;
            }
            return tmp;
          }
        }
      }
      if (undefined == null) {
        class S {
          constructor(arg0, arg1) {
            tmp = arg0;
            if (arg1.ends_at > arg0.ends_at) {
              tmp = arg1;
            }
            return tmp;
          }
        }
      }
      if (cResult[12] === bound) {
        class S {
          constructor(arg0, arg1) {
            tmp = arg0;
            if (arg1.ends_at > arg0.ends_at) {
              tmp = arg1;
            }
            return tmp;
          }
        }
      }
      const obj2 = { name: undefined, daysUntilExpiry: bound, numExpiringBoosts: undefined, isGameServer: null != undefined, skuId: reduced.sku_id };
      cResult[12] = bound;
      cResult[13] = reduced;
      cResult[14] = null != undefined;
      cResult[15] = undefined;
      cResult[16] = undefined;
      cResult[17] = obj2;
      const tmpResult6 = tmp(7269);
    }
  }
  cResult[6] = expiringPowerupCoachmarkEnabled;
  if (stateFromStores1 != null) {
    class S {
      constructor(arg0, arg1) {
        tmp = arg0;
        if (arg1.ends_at > arg0.ends_at) {
          tmp = arg1;
        }
        return tmp;
      }
    }
  }
  cResult[7] = undefined;
  if (stateFromStores != null) {
    class S {
      constructor(arg0, arg1) {
        tmp = arg0;
        if (arg1.ends_at > arg0.ends_at) {
          tmp = arg1;
        }
        return tmp;
      }
    }
  }
  cResult[8] = undefined;
  if (stateFromStores != null) {
    class S {
      constructor(arg0, arg1) {
        tmp = arg0;
        if (arg1.ends_at > arg0.ends_at) {
          tmp = arg1;
        }
        return tmp;
      }
    }
  }
  cResult[9] = undefined;
  cResult[10] = undefined;
  tmp17 = tmp18;
  const tmpResult5 = require("ExpiringPowerupCoachmarkExperiment");
}) : (function useFeaturedExpiringPowerup(arg0) {
  _require = arg0;
  let items = [GuildPowerupsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let obj = require("initialize");
  const items1 = [expiringPowerupCoachmarkEnabled];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GameServerStore.getStateForGuild(closure_0));
  const obj2 = require("initialize");
  expiringPowerupCoachmarkEnabled = require("ExpiringPowerupCoachmarkExperiment").useExpiringPowerupCoachmarkEnabled("useFeaturedExpiringPowerup");
  const items2 = [stateFromStores, stateFromStores1, expiringPowerupCoachmarkEnabled];
  return stateFromStores1.useMemo(() => {
    if (expiringPowerupCoachmarkEnabled) {
      let unlockedPowerups;
      if (stateFromStores != null) {
        unlockedPowerups = stateFromStores.unlockedPowerups;
      }
      if (unlockedPowerups == null) {
        unlockedPowerups = {};
      }
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(Object.values(unlockedPowerups), 0);
      let entitlements;
      if (stateFromStores1 != null) {
        entitlements = stateFromStores1.entitlements;
      }
      if (entitlements == null) {
        entitlements = {};
      }
      HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
      const found = items.filter((ends_at) => {
        let tmp = null != ends_at.ends_at;
        if (tmp) {
          const metadata = ends_at.metadata;
          let num;
          if (metadata != null) {
            num = metadata.num_expiring_boosts;
          }
          if (num == null) {
            num = 0;
          }
          tmp = num > 0;
        }
        return tmp;
      });
      if (0 !== found.length) {
        const reduced = found.reduce((ends_at, ends_at2) => {
          let tmp = ends_at;
          if (ends_at2.ends_at > ends_at.ends_at) {
            tmp = ends_at2;
          }
          return tmp;
        });
        let title;
        if (stateFromStores != null) {
          if (stateFromStores.allPowerups[reduced.sku_id] != null) {
            title = tmp9.title;
          }
        }
        if (title == null) {
          title = null;
        }
        const sku = reduced.sku;
        let game_server;
        if (sku != null) {
          const tenant_metadata = sku.tenant_metadata;
          if (tenant_metadata != null) {
            const guild_monetization = tenant_metadata.guild_monetization;
            if (guild_monetization != null) {
              game_server = guild_monetization.game_server;
            }
          }
        }
        const obj = { name: title, daysUntilExpiry: null, numExpiringBoosts: null, isGameServer: null, skuId: null };
        const _Math = Math;
        const _Date = Date;
        const date = new Date(reduced.ends_at);
        obj.daysUntilExpiry = Math.max(0, CollectiblesUtils.getDaysRemaining(date));
        let metadata = reduced.metadata;
        let num3;
        if (metadata != null) {
          num3 = metadata.num_expiring_boosts;
        }
        if (num3 == null) {
          num3 = 0;
        }
        obj.numExpiringBoosts = num3;
        obj.isGameServer = null != game_server;
        obj.skuId = reduced.sku_id;
        return obj;
      }
    }
  }, items2);
});