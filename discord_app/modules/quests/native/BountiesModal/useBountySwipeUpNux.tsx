// discord_app/modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx
import DismissibleContent from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import apexExperiment from "../../experiments/BountiesVerticalScrollExperiment.tsx";
import FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY from "bountiesSwipeUpNuxDevTools.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx");

export const useBountySwipeUpNux = function useBountySwipeUpNux(location) {
  let isEligible = location.isEligible;
  const BountiesVerticalScrollExperiment = apexExperiment.BountiesVerticalScrollExperiment;
  const tmp3 = "none" === BountiesVerticalScrollExperiment.useConfig({ location: location.location }).scrollAffordanceVariant;
  let obj = FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY;
  const first = callback(obj.useForceBountiesSwipeUpNux(), 1)[0];
  if (isEligible) {
    if (tmp3) {
      const items = [DismissibleContent.DismissibleContent.BOUNTIES_SWIPE_UP_NUX];
    }
    let prop = null;
    if (isEligible) {
      prop = null;
      if (!tmp3) {
        prop = DismissibleContent.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
      }
    }
    let tmpResult = useSelectedDismissibleContent;
    let tmp4Result = callback(tmpResult.useSelectedDismissibleContent([]), 2);
    if (first) {
      let tmp11 = isEligible;
      if (isEligible) {
        tmp11 = tmp3;
      }
      let tmp10 = tmp11;
    } else {
      tmp10 = tmp9 === DismissibleContent.DismissibleContent.BOUNTIES_SWIPE_UP_NUX;
    }
    tmpResult = useSelectedDismissibleContent;
    tmp4Result = callback(tmpResult.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }), 2);
    obj = { hasSingleUseSwipeUpNux: null, dismissSingleUseSwipeUpNux: null, hasRecurringSwipeUpNux: null, dismissRecurringSwipeUpNux: null };
    obj[0] = tmp10;
    obj[1] = tmp4Result[1];
    if (first) {
      if (isEligible) {
        isEligible = !tmp3;
      }
      let tmp14 = isEligible;
    } else {
      tmp14 = tmp13 === DismissibleContent.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
    }
    obj[2] = tmp14;
    obj[3] = tmp4Result[1];
    return obj;
  }
};