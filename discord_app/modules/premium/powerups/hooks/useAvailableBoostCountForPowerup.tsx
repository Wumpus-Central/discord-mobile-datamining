// === Module 12035: useAvailableBoostCountForPowerup ===

// Module 12035 (useAvailableBoostCountForPowerup)
import closure_3 from "noop" /* 19 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "calculateAppliedBoosts" /* 4332 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4333 */;

const require = arg1;
({ GuildPowerupType: closure_6, POWERUPS_INCLUDED_IN_LEVEL: error, LEVEL_SKU_ID_TO_BOOSTING_TIER: closure_8 } = BoostedGuildTiers);
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx");

export default function useAvailableBoostCountForPowerup(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  let items = [closure_4];
  const stateFromStores = _require(stateFromStores1[4]).useStateFromStores(items, () => closure_1_4.getGuild(closure_0));
  const obj = _require(stateFromStores1[4]);
  const items1 = [closure_5];
  stateFromStores1 = _require(stateFromStores1[4]).useStateFromStores(items1, () => closure_1_5.getStateForGuild(closure_0));
  const items2 = [arg1, stateFromStores1];
  const memo = React.useMemo(() => {
    if (null != closure_1) {
      if (tmp.type === closure_1_6.LEVEL) {
        if (null != stateFromStores1) {
          const callback = tmp9;
          if (null == closure_1_8[tmp.skuId]) {
            let items = [];
          } else {
            const _Object = Object;
            const entries = Object.entries(closure_1_7);
            const found = entries.filter((arg0) => {
              [tmp, tmp2] = arg0;
              let tmp3 = tmp2 === closure_0;
              if (tmp3) {
                tmp3 = null != closure_1_2.unlockedPowerups[tmp];
              }
              return tmp3;
            });
            const mapped = found.map((arg0) => {
              [tmp] = arg0;
              return allPowerups.allPowerups[tmp];
            });
            items = mapped.filter(callback(stateFromStores1[6]).isNotNullish);
          }
          return items;
        }
      }
    }
    return [];
  }, items2);
  let num;
  if (memo != null) {
    num = memo.reduce((arg0, cost) => arg0 + cost.cost, 0);
  }
  let num3;
  if (stateFromStores != null) {
    num3 = stateFromStores.premiumSubscriberCount;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const diff = num3 - importDefault(stateFromStores1[5])(arg0).spent;
  if (num == null) {
    num = 0;
  }
  return Math.max(diff + num, 0);
};