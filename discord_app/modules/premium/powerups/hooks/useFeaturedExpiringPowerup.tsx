// discord_app/modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx
import CollectiblesUtils from "../../../collectibles/CollectiblesUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GameServerStore from "../../../game_server/GameServerStore.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let closure_0;
      let first;
      let tmp11;
      let tmp7;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(18);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildPowerupsStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return GuildPowerupsStore.getStateForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmp2Result = require("get initialized");
      const stateFromStores = tmp2Result.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GameServerStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function p() {
          return GameServerStore.getStateForGuild(closure_0);
        };
        cResult[4] = arg0;
        cResult[5] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmp2Result4 = require("get initialized");
      const stateFromStores1 = tmp2Result4.useStateFromStores(tmp9, tmp11);
      const tmp2Result5 = require("ExpiringPowerupCoachmarkExperiment");
      const expiringPowerupCoachmarkEnabled =
        tmp2Result5.useExpiringPowerupCoachmarkEnabled("useFeaturedExpiringPowerup");
      if (cResult[6] === expiringPowerupCoachmarkEnabled) {
        let entitlements;
        const tmp14 = cResult[7];
        if (stateFromStores1 != null) {
          entitlements = stateFromStores1.entitlements;
        }
        if (tmp14 === entitlements) {
          let allPowerups;
          const tmp17 = cResult[8];
          if (stateFromStores != null) {
            allPowerups = stateFromStores.allPowerups;
          }
          if (tmp17 === allPowerups) {
            let tmp21;
            let unlockedPowerups;
            const tmp19 = cResult[9];
            if (stateFromStores != null) {
              unlockedPowerups = stateFromStores.unlockedPowerups;
            }
            if (tmp19 === unlockedPowerups) {
              tmp21 = cResult[10];
            }
            return tmp21;
          }
        }
      }
      let tmp22;
      if (expiringPowerupCoachmarkEnabled) {
        let unlockedPowerups1;
        const _Object = Object;
        if (stateFromStores != null) {
          unlockedPowerups1 = stateFromStores.unlockedPowerups;
        }
        if (unlockedPowerups1 == null) {
          unlockedPowerups1 = {};
        }
        const items2 = [];
        let entitlements1;
        const _Object2 = Object;
        const values2 = Object.values;
        const arraySpreadResult = HermesBuiltin.arraySpread(items2, values(unlockedPowerups1), 0);
        if (stateFromStores1 != null) {
          entitlements1 = stateFromStores1.entitlements;
        }
        if (entitlements1 == null) {
          entitlements1 = {};
        }
        HermesBuiltin.arraySpread(items2, values2(entitlements1), arraySpreadResult);
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
          let tmp29;
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const fn3 = function x(ends_at, ends_at2) {
              let tmp = ends_at;
              if (ends_at2.ends_at > ends_at.ends_at) {
                tmp = ends_at2;
              }
              return tmp;
            };
            cResult[11] = fn3;
            tmp29 = fn3;
          } else {
            tmp29 = cResult[11];
          }
          const reduced = found.reduce(tmp29);
          let title;
          if (stateFromStores != null) {
            if (stateFromStores.allPowerups[reduced.sku_id] != null) {
              title = tmp32.title;
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
          if (null !== title) {
            const _Math = Math;
            const _Date = Date;
            const self = this;
            const self2 = this;
            const getDaysRemaining = require("CollectiblesUtils").getDaysRemaining;
            require("CollectiblesUtils");
            const date = new Date(reduced.ends_at);
            const maxResult = max(0, getDaysRemaining(date));
            let metadata = reduced.metadata;
            let num10;
            if (metadata != null) {
              num10 = metadata.num_expiring_boosts;
            }
            if (num10 == null) {
              num10 = 0;
            }
            if (cResult[12] === maxResult) {
              if (cResult[13] === reduced) {
                if ((cResult[14] === null) != game_server) {
                  if (cResult[15] === title) {
                    let tmp39;
                    if (cResult[16] === num10) {
                      tmp39 = cResult[17];
                    }
                    tmp22 = tmp39;
                  }
                }
              }
            }
            const obj2 = {
              name: title,
              daysUntilExpiry: maxResult,
              numExpiringBoosts: num10,
              isGameServer: null != game_server,
              skuId: reduced.sku_id,
            };
            cResult[12] = maxResult;
            cResult[13] = reduced;
            cResult[14] = null != game_server;
            cResult[15] = title;
            cResult[16] = num10;
            cResult[17] = obj2;
            tmp39 = obj2;
          }
        }
      }
      cResult[6] = expiringPowerupCoachmarkEnabled;
      let entitlements2;
      if (stateFromStores1 != null) {
        entitlements2 = stateFromStores1.entitlements;
      }
      cResult[7] = entitlements2;
      let allPowerups1;
      if (stateFromStores != null) {
        allPowerups1 = stateFromStores.allPowerups;
      }
      cResult[8] = allPowerups1;
      let unlockedPowerups2;
      if (stateFromStores != null) {
        unlockedPowerups2 = stateFromStores.unlockedPowerups;
      }
      cResult[9] = unlockedPowerups2;
      cResult[10] = tmp22;
      tmp21 = tmp22;
    }
  : (arg0) => {
      let closure_0;
      let expiringPowerupCoachmarkEnabled;
      let stateFromStores;
      _require = arg0;
      let obj = require("get initialized");
      let items = [GuildPowerupsStore];
      stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
      const items1 = [expiringPowerupCoachmarkEnabled];
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => GameServerStore.getStateForGuild(closure_0));
      const obj3 = require("ExpiringPowerupCoachmarkExperiment");
      expiringPowerupCoachmarkEnabled = obj3.useExpiringPowerupCoachmarkEnabled("useFeaturedExpiringPowerup");
      const items2 = [stateFromStores, stateFromStores1, expiringPowerupCoachmarkEnabled];
      return stateFromStores1.useMemo(function () {
        let date;
        let getDaysRemaining;
        let max;
        let num3;
        let tmp14;
        if (expiringPowerupCoachmarkEnabled) {
          let unlockedPowerups;
          const _Object = Object;
          if (stateFromStores != null) {
            unlockedPowerups = stateFromStores.unlockedPowerups;
          }
          if (unlockedPowerups == null) {
            unlockedPowerups = {};
          }
          const items = [];
          let num = 0;
          let entitlements;
          const _Object2 = Object;
          const values2 = Object.values;
          const arraySpreadResult = HermesBuiltin.arraySpread(items, values(unlockedPowerups), 0);
          if (stateFromStores1 != null) {
            entitlements = stateFromStores1.entitlements;
          }
          if (entitlements == null) {
            entitlements = {};
          }
          HermesBuiltin.arraySpread(items, values2(entitlements), arraySpreadResult);
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
                title = tmp11.title;
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
            const obj = {
              name: title,
              daysUntilExpiry: max(0, getDaysRemaining(date)),
              numExpiringBoosts: num3,
              isGameServer: tmp14,
              skuId: reduced.sku_id,
            };
            const _Math = Math;
            max = Math.max;
            const _Date = Date;
            const self = this;
            const self2 = this;
            tmp14 = null != game_server;
            getDaysRemaining = CollectiblesUtils.getDaysRemaining;
            CollectiblesUtils;
            let metadata = reduced.metadata;
            num3 = undefined;
            date = new Date(reduced.ends_at);
            if (metadata != null) {
              num3 = metadata.num_expiring_boosts;
            }
            if (num3 == null) {
              num3 = 0;
            }
            return obj;
          }
        }
      }, items2);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx");

export default tmp2;
