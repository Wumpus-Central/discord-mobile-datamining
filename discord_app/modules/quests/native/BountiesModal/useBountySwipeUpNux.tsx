// discord_app/modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import BountiesVerticalScrollExperiment2 from "../../experiments/BountiesVerticalScrollExperiment.tsx";
import bountiesSwipeUpNuxDevTools from "bountiesSwipeUpNuxDevTools.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx");

export const useBountySwipeUpNux = function useBountySwipeUpNux(location) {
  let isEligible = location.isEligible;
  const BountiesVerticalScrollExperiment = BountiesVerticalScrollExperiment2.BountiesVerticalScrollExperiment;
  const tmp3 =
    "none" === BountiesVerticalScrollExperiment.useConfig({ location: location.location }).scrollAffordanceVariant;
  let obj = bountiesSwipeUpNuxDevTools;
  const first = _slicedToArray(obj.useForceBountiesSwipeUpNux(), 1)[0];
  if (isEligible) {
    if (tmp3) {
      const items = [dismissible_content.DismissibleContent.BOUNTIES_SWIPE_UP_NUX];
    }
    let prop = null;
    if (isEligible) {
      prop = null;
      if (!tmp3) {
        prop = dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
      }
    }
    let tmpResult = useSelectedDismissibleContent;
    let tmp4Result = _slicedToArray(tmpResult.useSelectedDismissibleContent([]), 2);
    if (first) {
      let tmp11 = isEligible;
      if (isEligible) {
        tmp11 = tmp3;
      }
      let tmp10 = tmp11;
    } else {
      tmp10 = tmp9 === dismissible_content.DismissibleContent.BOUNTIES_SWIPE_UP_NUX;
    }
    tmpResult = useSelectedDismissibleContent;
    tmp4Result = _slicedToArray(
      tmpResult.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }),
      2,
    );
    obj = {
      hasSingleUseSwipeUpNux: tmp10,
      dismissSingleUseSwipeUpNux: tmp4Result[1],
      hasRecurringSwipeUpNux: null,
      dismissRecurringSwipeUpNux: null,
    };
    if (first) {
      if (isEligible) {
        isEligible = !tmp3;
      }
      let tmp14 = isEligible;
    } else {
      tmp14 = tmp13 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
    }
    obj.hasRecurringSwipeUpNux = tmp14;
    obj.dismissRecurringSwipeUpNux = tmp4Result[1];
    return obj;
  }
};
