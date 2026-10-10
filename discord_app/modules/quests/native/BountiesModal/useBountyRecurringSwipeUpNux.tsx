// === Module 15268: useBountyRecurringSwipeUpNux ===

// Module 15268 (useBountyRecurringSwipeUpNux)
import c from "c" /* 576 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7099 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
let c3 = 86400000;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyRecurringSwipeUpNux.tsx");

export const useBountyRecurringSwipeUpNux = ReactCompilerGating.isReactCompilerEnabled() ? (function useBountyRecurringSwipeUpNux(isEligible) {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cooldownDurationMs };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let prop = null;
  if (isEligible.isEligible) {
    prop = dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  const tmpResult = useSelectedDismissibleContent;
  [tmp8, tmp9] = useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(prop, first);
  const tmp10 = tmp8 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  if (cResult[1] === tmp9) {
    if (cResult[2] === tmp10) {
      let tmp11 = cResult[3];
    }
    return tmp11;
  }
  const obj3 = { hasRecurringSwipeUpNux: tmp10, dismissRecurringSwipeUpNux: tmp9 };
  cResult[1] = tmp9;
  cResult[2] = tmp10;
  cResult[3] = obj3;
  tmp11 = obj3;
  const tmp7 = _slicedToArray(useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(prop, first), 2);
}) : (function useBountyRecurringSwipeUpNux(isEligible) {
  let prop = null;
  if (isEligible.isEligible) {
    prop = dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  const obj2 = { cooldownDurationMs };
  const tmp4 = _slicedToArray(useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs }), 2);
  [tmp5, tmp6] = tmp4;
  return { hasRecurringSwipeUpNux: tmp5 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX, dismissRecurringSwipeUpNux: tmp6 };
});