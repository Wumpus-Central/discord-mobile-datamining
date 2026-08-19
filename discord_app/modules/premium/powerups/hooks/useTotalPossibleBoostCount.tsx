// === Module 15483: useTotalPossibleBoostCount ===

// Module 15483 (useTotalPossibleBoostCount)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4262 */;
import ME from "ME" /* 676 */;

let useMemo = noop.useMemo;
({ MULTIPLE_PURCHASEABLE_PREMIUM_FEATURES_BOOST_INFO: closure_1, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: obj1 } = BoostedGuildTiers);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: c3, BoostedGuildTiers: c4, GuildFeatures: c5 } = ME);
const result = obj132.fileFinishedImporting("modules/premium/powerups/hooks/useTotalPossibleBoostCount.tsx");

export default function useTotalPossibleBoostCount(arg0) {
  useMemo = arg0;
  const items = [arg0];
  return useMemo(() => {
    if (null == num) {
      return 0;
    } else {
      let hasItem;
      if (tmp != null) {
        const features = tmp.features;
        hasItem = features.has(closure_1_5.PREMIUM_TIER_3_OVERRIDE);
      }
      num = 0;
      if (true !== hasItem) {
        num = closure_1_3[closure_1_4.TIER_3];
      }
      const _Object = Object;
      const values = Object.values(closure_1_2);
      const _Object2 = Object;
      const combined = values.concat(Object.values(closure_1_1));
      const item = combined.forEach((item, index) => {
        let tmp = null == item.includedInLevel;
        if (tmp) {
          const isEnabled = item.isEnabled;
          num = undefined;
          if (isEnabled != null) {
            num = isEnabled(num.id);
          }
          if (num == null) {
            num = 1;
          }
          tmp = num;
        }
        if (tmp) {
          closure_0 = closure_0 + item.boostPrice;
        }
      });
      return num;
    }
  }, items);
};