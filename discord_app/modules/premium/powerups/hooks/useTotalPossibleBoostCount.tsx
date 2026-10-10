// === Module 16638: useTotalPossibleBoostCount ===

// Module 16638 (useTotalPossibleBoostCount)
import _mod19 from "module_19" /* 19 */;
import c from "c" /* 576 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5008 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
({ MULTIPLE_PURCHASEABLE_PREMIUM_FEATURES_BOOST_INFO: c3, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: closure_4 } = GuildPowerupsConstants);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: hasOwnProperty, BoostedGuildTiers: metroRequire, GuildFeatures: closure_7 } = Constants);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useTotalPossibleBoostCount.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTotalPossibleBoostCount(arg0) {
  let tmp = arg0;
  const id = arg0;
  const cResult = c.c(5);
  if (null == arg0) {
    return 0;
  } else {
    let features1;
    if (tmp != null) {
      features1 = tmp.features;
    }
    if (cResult[0] !== features1) {
      let hasItem;
      if (tmp != null) {
        const features = tmp.features;
        hasItem = features.has(React5.PREMIUM_TIER_3_OVERRIDE);
      }
      let features2;
      if (tmp != null) {
        features2 = tmp.features;
      }
      cResult[0] = features2;
      cResult[1] = hasItem;
      let tmp4 = hasItem;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] === tmp) {
      if (cResult[3] === tmp8) {
        closure_1 = cResult[4];
      }
    }
    let num2 = 0;
    if (true !== tmp4) {
      num2 = hasOwnProperty[TIER_3.TIER_3];
    }
    closure_1 = num2;
    const _Object = Object;
    const values = Object.values(React4);
    const _Object2 = Object;
    const combined = values.concat(Object.values(React3));
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
        closure_1 = closure_1 + includedInLevel.boostPrice;
      }
    });
    cResult[2] = tmp;
    cResult[3] = true === tmp4;
    tmp = closure_1;
    cResult[4] = closure_1;
  }
}) : (function useTotalPossibleBoostCount(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return useMemo(() => {
    if (null == id) {
      return 0;
    } else {
      let hasItem;
      if (tmp != null) {
        const features = tmp.features;
        hasItem = features.has(closure_1_7.PREMIUM_TIER_3_OVERRIDE);
      }
      let num = 0;
      if (true !== hasItem) {
        num = closure_1_5[TIER_3.TIER_3];
      }
      id = num;
      const _Object = Object;
      const values = Object.values(closure_1_4);
      const _Object2 = Object;
      const combined = values.concat(Object.values(closure_1_3));
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
});