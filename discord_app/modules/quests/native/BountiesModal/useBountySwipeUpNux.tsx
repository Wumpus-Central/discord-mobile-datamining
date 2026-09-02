// === Module 14839: useBountySwipeUpNux ===

// Module 14839 (useBountySwipeUpNux)
import apexExperiment from "apexExperiment" /* 11340 */;
import FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY from "FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY" /* 14840 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx");

export const useBountySwipeUpNux = function useBountySwipeUpNux(location) {
  let isEligible = location.isEligible;
  const BountiesVerticalScrollExperiment = apexExperiment.BountiesVerticalScrollExperiment;
  const tmp3 = "none" === BountiesVerticalScrollExperiment.useConfig({ location: location.location }).scrollAffordanceVariant;
  let obj = FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY;
  const first = callback(obj.useForceBountiesSwipeUpNux(), 1)[0];
  if (isEligible) {
    if (tmp3) {
      const items = [tmp(1372).DismissibleContent.BOUNTIES_SWIPE_UP_NUX];
    }
    let prop = null;
    if (isEligible) {
      prop = null;
      if (!tmp3) {
        prop = tmp(1372).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
      }
    }
    let tmpResult = tmp(6260);
    let tmp4Result = tmp4(tmpResult.useSelectedDismissibleContent([]), 2);
    if (first) {
      let tmp11 = isEligible;
      if (isEligible) {
        tmp11 = tmp3;
      }
      let tmp10 = tmp11;
    } else {
      tmp10 = tmp9 === tmp(1372).DismissibleContent.BOUNTIES_SWIPE_UP_NUX;
    }
    tmpResult = tmp(6260);
    tmp4Result = tmp4(tmpResult.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }), 2);
    obj = { hasSingleUseSwipeUpNux: null, dismissSingleUseSwipeUpNux: null, hasRecurringSwipeUpNux: null, dismissRecurringSwipeUpNux: null };
    obj[0] = tmp10;
    obj[1] = tmp4Result[1];
    if (first) {
      if (isEligible) {
        isEligible = !tmp3;
      }
      let tmp14 = isEligible;
    } else {
      tmp14 = tmp13 === tmp(1372).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
    }
    obj[2] = tmp14;
    obj[3] = tmp4Result[1];
    return obj;
  }
};