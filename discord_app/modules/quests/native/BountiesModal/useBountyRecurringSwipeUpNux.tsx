// discord_app/modules/quests/native/BountiesModal/useBountyRecurringSwipeUpNux.tsx
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyRecurringSwipeUpNux.tsx");

export const useBountyRecurringSwipeUpNux = function useBountyRecurringSwipeUpNux(isEligible) {
  let obj = useSelectedDismissibleContent;
  let prop = null;
  if (isEligible.isEligible) {
    prop = dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  obj = {
    hasRecurringSwipeUpNux: tmp5 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX,
    dismissRecurringSwipeUpNux: tmp6,
  };
  [tmp5, tmp6] = _slicedToArray(
    obj.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }),
    2,
  );
  return obj;
};
