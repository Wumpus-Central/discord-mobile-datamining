// discord_app/modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleGameServerInstanceCreated" /* 4282 */;
import closure_4 from "calculateAppliedBoosts" /* 4261 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx");

export default function useFeaturedExpiringPowerup(arg0) {
  const _require = arg0;
  let items = [closure_4];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => closure_1_4.getStateForGuild(closure_0));
  let obj = _require(stateFromStores[3]);
  const items1 = [expiringPowerupCoachmarkEnabled];
  const stateFromStores1 = _require(stateFromStores[3]).useStateFromStores(items1, () => expiringPowerupCoachmarkEnabled.getStateForGuild(closure_0));
  const obj2 = _require(stateFromStores[3]);
  expiringPowerupCoachmarkEnabled = _require(stateFromStores[4]).useExpiringPowerupCoachmarkEnabled("useFeaturedExpiringPowerup");
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
        const obj = { name: null, daysUntilExpiry: null, numExpiringBoosts: null, isGameServer: null, skuId: null };
        obj[0] = title;
        const _Math = Math;
        const _Date = Date;
        const date = new Date(reduced.ends_at);
        obj[1] = Math.max(0, callback(stateFromStores[5]).getDaysRemaining(date));
        let metadata = reduced.metadata;
        let num3;
        if (metadata != null) {
          num3 = metadata.num_expiring_boosts;
        }
        if (num3 == null) {
          num3 = 0;
        }
        obj[2] = num3;
        obj[3] = null != game_server;
        obj[4] = reduced.sku_id;
        return obj;
      }
    }
  }, items2);
};