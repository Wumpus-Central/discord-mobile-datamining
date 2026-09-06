// === Module 12506: useFeaturedExpiringPowerup ===

// Module 12506 (useFeaturedExpiringPowerup)
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4470 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx");

export default function useFeaturedExpiringPowerup(arg0) {
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
        unlockedPowerups = tmp2.unlockedPowerups;
      }
      if (unlockedPowerups == null) {
        unlockedPowerups = {};
      }
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(Object.values(unlockedPowerups), 0);
      let entitlements;
      if (stateFromStores1 != null) {
        entitlements = stateFromStores1.entitlements;
      }
      if (entitlements == null) {
        entitlements = {};
      }
      arraySpreadResult = HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
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
        if (tmp2 != null) {
          if (tmp2.allPowerups[reduced.sku_id] != null) {
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
};