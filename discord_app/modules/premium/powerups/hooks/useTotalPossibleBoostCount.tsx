// === Module 15189: useTotalPossibleBoostCount ===

// Module 15189 (useTotalPossibleBoostCount)
import { useMemo } from "noop";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";

let c3;
let c4;
let c5;
let closure_1;
let obj1;
({ MULTIPLE_PURCHASEABLE_PREMIUM_FEATURES_BOOST_INFO: closure_1, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: obj1 } = BoostedGuildTiers);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: c3, BoostedGuildTiers: c4, GuildFeatures: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/premium/powerups/hooks/useTotalPossibleBoostCount.tsx");

export default function useTotalPossibleBoostCount(arg0) {
  const useMemo = arg0;
  const items = [arg0];
  return useMemo(() => {
    if (null == num) {
      return 0;
    } else {
      let hasItem;
      if (tmp != null) {
        const features = tmp.features;
        hasItem = features.has(outer1_5.PREMIUM_TIER_3_OVERRIDE);
      }
      num = 0;
      if (true !== hasItem) {
        num = outer1_3[outer1_4.TIER_3];
      }
      const _Object = Object;
      const values = Object.values(outer1_2);
      const _Object2 = Object;
      const combined = values.concat(Object.values(outer1_1));
      const item = combined.forEach((includedInLevel) => {
        let tmp = null == includedInLevel.includedInLevel;
        if (tmp) {
          const isEnabled = includedInLevel.isEnabled;
          let num;
          if (isEnabled != null) {
            num = isEnabled(num.id);
          }
          if (num == null) {
            num = 1;
          }
          tmp = num;
        }
        if (tmp) {
          closure_0 = closure_0 + includedInLevel.boostPrice;
        }
      });
      return num;
    }
  }, items);
};