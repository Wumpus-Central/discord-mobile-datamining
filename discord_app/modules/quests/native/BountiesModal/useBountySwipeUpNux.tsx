// === Module 15010: useBountySwipeUpNux ===

// Module 15010 (useBountySwipeUpNux)
import BountiesVerticalScrollExperiment2 from "BountiesVerticalScrollExperiment" /* 11521 */;
import bountiesSwipeUpNuxDevTools from "bountiesSwipeUpNuxDevTools" /* 15011 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx");

export const useBountySwipeUpNux = function useBountySwipeUpNux(location) {
  let isEligible = location.isEligible;
  const BountiesVerticalScrollExperiment = BountiesVerticalScrollExperiment2.BountiesVerticalScrollExperiment;
  const tmp3 = "none" === BountiesVerticalScrollExperiment.useConfig({ location: location.location }).scrollAffordanceVariant;
  let obj = bountiesSwipeUpNuxDevTools;
  const first = _slicedToArray(obj.useForceBountiesSwipeUpNux(), 1)[0];
  if (isEligible) {
    if (tmp3) {
      const items = [tmp(1943).DismissibleContent.BOUNTIES_SWIPE_UP_NUX];
    }
    let prop = null;
    if (isEligible) {
      prop = null;
      if (!tmp3) {
        prop = tmp(1943).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
      }
    }
    let tmpResult = tmp(7388);
    let tmp4Result = tmp4(tmpResult.useSelectedDismissibleContent([]), 2);
    if (first) {
      let tmp11 = isEligible;
      if (isEligible) {
        tmp11 = tmp3;
      }
      let tmp10 = tmp11;
    } else {
      tmp10 = tmp9 === tmp(1943).DismissibleContent.BOUNTIES_SWIPE_UP_NUX;
    }
    tmpResult = tmp(7388);
    tmp4Result = tmp4(tmpResult.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }), 2);
    obj = { hasSingleUseSwipeUpNux: tmp10, dismissSingleUseSwipeUpNux: tmp4Result[1], hasRecurringSwipeUpNux: null, dismissRecurringSwipeUpNux: null };
    if (first) {
      if (isEligible) {
        isEligible = !tmp3;
      }
      let tmp14 = isEligible;
    } else {
      tmp14 = tmp13 === tmp(1943).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
    }
    obj.hasRecurringSwipeUpNux = tmp14;
    obj.dismissRecurringSwipeUpNux = tmp4Result[1];
    return obj;
  }
};