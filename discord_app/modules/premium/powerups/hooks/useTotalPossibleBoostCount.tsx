// === Module 16153: useTotalPossibleBoostCount ===

// Module 16153 (useTotalPossibleBoostCount)
import react from "react" /* 19 */;
import react2 from "react" /* 576 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const useMemo = react.useMemo;
({ MULTIPLE_PURCHASEABLE_PREMIUM_FEATURES_BOOST_INFO: c3, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: closure_4 } = GuildPowerupsConstants);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: hasOwnProperty, BoostedGuildTiers: metroRequire, GuildFeatures: metroImportDefault } = Constants);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((features) => {
  let closure_0 = features;
  const obj = react2;
  const cResult = obj.c(5);
  let num = 0;
  if (null != features) {
    let tmp4;
    let closure_1;
    let features1;
    const first = cResult[0];
    if (features != null) {
      features1 = features.features;
    }
    if (first !== features1) {
      let hasItem;
      if (features != null) {
        features = features.features;
        hasItem = features.has(metroImportDefault.PREMIUM_TIER_3_OVERRIDE);
      }
      let features2;
      if (features != null) {
        features2 = features.features;
      }
      cResult[0] = features2;
      cResult[1] = hasItem;
      tmp4 = hasItem;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] === features) {
      if (cResult[3] === true === tmp4) {
        closure_1 = cResult[4];
      }
      num = closure_1;
    }
    let num3 = 0;
    if (true !== tmp4) {
      num3 = hasOwnProperty[metroRequire.TIER_3];
    }
    closure_1 = num3;
    const _Object = Object;
    const values = Object.values(React3);
    const _Object2 = Object;
    const combined = values.concat(Object.values(_false));
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
    cResult[2] = features;
    cResult[3] = true === tmp4;
    cResult[4] = closure_1;
  }
  return num;
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return useMemo(() => {
    let id;
    let tmp = id;
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
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useTotalPossibleBoostCount.tsx");

export default tmp4;