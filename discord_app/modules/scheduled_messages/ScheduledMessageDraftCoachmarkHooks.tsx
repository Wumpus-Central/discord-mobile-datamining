// discord_app/modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx
import c from "../../../_runtime/00576_c.js";
import useSelectedDismissibleContent from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

require = fn;
let closure_3 = fn(2049).DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = ReactCompilerGating.isReactCompilerEnabled()
  ? function useScheduledMessageDraftCoachmarkState(isEligible) {
      const cResult = c.c(5);
      isEligible = isEligible.isEligible;
      if (cResult[0] !== isEligible) {
        if (isEligible) {
          const items = [closure_3];
          let items1 = items;
        } else {
          items1 = [];
        }
        cResult[0] = isEligible;
        cResult[1] = items1;
      } else {
        const tmp7 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(cResult[1]), 2);
        if (cResult[2] === tmp7[1]) {
          if (cResult[3] === tmp10) {
            let tmp11 = cResult[4];
          }
          return tmp11;
        }
        const obj2 = { isCoachmarkVisible: tmp7[0] === closure_3, dismissCoachmark: tmp7[1] };
        cResult[2] = tmp7[1];
        cResult[3] = tmp7[0] === closure_3;
        cResult[4] = obj2;
        tmp11 = obj2;
        const tmpResult = useSelectedDismissibleContent;
      }
    }
  : function useScheduledMessageDraftCoachmarkState(isEligible) {
      if (isEligible.isEligible) {
        const items = [closure_3];
        let items1 = items;
      } else {
        items1 = [];
      }
      const tmp2 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items1), 2);
      return { isCoachmarkVisible: tmp2[0] === closure_3, dismissCoachmark: tmp2[1] };
    };
