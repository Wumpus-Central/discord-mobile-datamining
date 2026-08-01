// === Module 11640: useAvailableBoostCountForPowerup ===

// Module 11640 (useAvailableBoostCountForPowerup)
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import BoostedGuildTiers from "BoostedGuildTiers";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ GuildPowerupType: closure_6, POWERUPS_INCLUDED_IN_LEVEL: error, LEVEL_SKU_ID_TO_BOOSTING_TIER: metroImportAll } = BoostedGuildTiers);
const result = require("calculateAppliedBoosts").fileFinishedImporting("modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx");

export default function useAvailableBoostCountForPowerup(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  let items = [createGuildRecordFromRust];
  const stateFromStores = _require(stateFromStores1[4]).useStateFromStores(items, () => outer1_4.getGuild(closure_0));
  const obj = _require(stateFromStores1[4]);
  const items1 = [calculateAppliedBoosts];
  stateFromStores1 = _require(stateFromStores1[4]).useStateFromStores(items1, () => outer1_5.getStateForGuild(closure_0));
  const items2 = [arg1, stateFromStores1];
  const memo = React.useMemo(() => {
    if (null != closure_1) {
      if (tmp.type === outer1_6.LEVEL) {
        if (null != stateFromStores1) {
          const callback = tmp9;
          if (null == outer1_8[tmp.skuId]) {
            let items = [];
          } else {
            const _Object = Object;
            const entries = Object.entries(outer1_7);
            const found = entries.filter((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              let tmp3 = tmp2 === closure_0;
              if (tmp3) {
                tmp3 = null != outer1_2.unlockedPowerups[tmp];
              }
              return tmp3;
            });
            const mapped = found.map((arg0) => {
              let tmp;
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