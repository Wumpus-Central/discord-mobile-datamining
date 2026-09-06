// === Module 16222: useTotalPossibleBoostCount ===

// Module 16222 (useTotalPossibleBoostCount)
import _mod19 from "module_19" /* 19 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4450 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let useMemo = _mod19.useMemo;
({ MULTIPLE_PURCHASEABLE_PREMIUM_FEATURES_BOOST_INFO: closure_1, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: c2 } = GuildPowerupsConstants);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: c3, BoostedGuildTiers: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useTotalPossibleBoostCount.tsx");

export default function useTotalPossibleBoostCount(arg0) {
  useMemo = arg0;
  const items = [arg0];
  return useMemo(() => {
    if (null == id) {
      return 0;
    } else {
      let hasItem;
      if (tmp != null) {
        const features = tmp.features;
        hasItem = features.has(closure_1_5.PREMIUM_TIER_3_OVERRIDE);
      }
      let num = 0;
      if (true !== hasItem) {
        num = closure_1_3[TIER_3.TIER_3];
      }
      id = num;
      const _Object = Object;
      const values = Object.values(closure_1_2);
      const _Object2 = Object;
      const combined = values.concat(Object.values(closure_1_1));
      const item = combined.forEach((includedInLevel) => {
        let tmp = null == includedInLevel.includedInLevel;
        if (tmp) {
          const isEnabled = includedInLevel.isEnabled;
          let num;
          if (isEnabled != null) {
            num = isEnabled(id.id);
          }
          if (num == null) {
            num = 1;
          }
          tmp = num;
        }
        if (tmp) {
          id = id + includedInLevel.boostPrice;
        }
      });
      return id;
    }
  }, items);
};