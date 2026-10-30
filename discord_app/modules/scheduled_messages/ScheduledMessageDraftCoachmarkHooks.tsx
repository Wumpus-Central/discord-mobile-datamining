// === Module 13702: ScheduledMessageDraftCoachmarkHooks ===

// Module 13702 (ScheduledMessageDraftCoachmarkHooks)
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7563 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
let closure_3 = fn(4842).DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export function useScheduledMessageDraftCoachmarkState(isEligible) {
  if (isEligible.isEligible) {
    const items = [closure_3];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp2 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items1), 2);
  return { isCoachmarkVisible: tmp2[0] === closure_3, dismissCoachmark: tmp2[1] };
}