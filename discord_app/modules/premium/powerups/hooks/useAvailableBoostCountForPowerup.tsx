// === Module 12537: useAvailableBoostCountForPowerup ===

// Module 12537 (useAvailableBoostCountForPowerup)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

const require = fn;
const GuildPowerupsConstants = fn(4450);
({ GuildPowerupType: metroRequire, POWERUPS_INCLUDED_IN_LEVEL: closure_7, LEVEL_SKU_ID_TO_BOOSTING_TIER: closure_8 } = GuildPowerupsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx");

export default function useAvailableBoostCountForPowerup(arg0, arg1) {
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
      if (tmp.type === constants.LEVEL) {
        if (null != stateFromStores1) {
          closure_0 = tmp9;
          if (null == closure_1_8[tmp.skuId]) {
            let items = [];
          } else {
            const _Object = Object;
            const entries = Object.entries(closure_1_7);
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
            items = mapped.filter(closure_0(stateFromStores1[6]).isNotNullish);
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
};