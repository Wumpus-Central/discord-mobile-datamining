// === Module 14819: useBountyRecurringSwipeUpNux ===

// Module 14819 (useBountyRecurringSwipeUpNux)
import react from "react" /* 576 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6891 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let isEligible;

let c3 = 86400000;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isEligible) => {
  let first;
  let tmp10;
  let tmp9;
  const obj = react;
  const cResult = obj.c(4);
  isEligible = isEligible.isEligible;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cooldownDurationMs };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent;
  useSelectedDismissibleContent;
  if (isEligible) {
    prop = dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  [tmp9, tmp10] = useSelectedTimeRecurringDismissibleContent(prop, first);
  _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, first), 2);
  const tmp11 = tmp9 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  if (cResult[1] === tmp10) {
    let tmp12;
    if (cResult[2] === tmp11) {
      tmp12 = cResult[3];
    }
    return tmp12;
  }
  const obj3 = { hasRecurringSwipeUpNux: tmp11, dismissRecurringSwipeUpNux: tmp10 };
  cResult[1] = tmp10;
  cResult[2] = tmp11;
  cResult[3] = obj3;
  tmp12 = obj3;
}) : ((isEligible) => {
  let tmp6;
  let tmp7;
  isEligible = isEligible.isEligible;
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent;
  useSelectedDismissibleContent;
  if (isEligible) {
    prop = dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  const obj = { cooldownDurationMs };
  const tmp5 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj), 2);
  const obj2 = { hasRecurringSwipeUpNux: tmp6 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX, dismissRecurringSwipeUpNux: tmp7 };
  [tmp6, tmp7] = tmp5;
  return obj2;
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyRecurringSwipeUpNux.tsx");

export const useBountyRecurringSwipeUpNux = tmp2;