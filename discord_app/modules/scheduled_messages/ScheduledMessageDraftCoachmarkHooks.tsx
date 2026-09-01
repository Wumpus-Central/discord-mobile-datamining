// === Module 11558: useScheduledMessageDraftCoachmarkState ===

// Module 11558 (useScheduledMessageDraftCoachmarkState)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleChanged" /* 4854 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;

const require = arg1;
let closure_6 = require("DismissibleContent").DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
let result = require("set").fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = function useScheduledMessageDraftCoachmarkState(channel) {
  channel = channel.channel;
  ({ draftText, isEligible } = channel);
  dependencyMap = undefined;
  isEligible = undefined;
  let first;
  closure_4 = undefined;
  let isCoachmarkVisible;
  let result = channel(4298).useIsDismissibleContentDismissed_UNSAFE(closure_6);
  dependencyMap = result;
  let obj = channel(4298);
  const items = [closure_4];
  const stateFromStores = channel(589).useStateFromStores(items, () => null != scheduledMessage.getScheduledMessage(channel.id));
  if (isEligible) {
    isEligible = draftText.trim().length > 10;
  }
  if (isEligible) {
    isEligible = !stateFromStores;
  }
  const tmp4 = isEligible(first.useState(false), 2);
  first = tmp4[0];
  closure_4 = tmp6;
  isCoachmarkVisible = first;
  if (first) {
    isCoachmarkVisible = isEligible;
  }
  let obj2 = channel(589);
  const tmp3 = isEligible;
  if (tmp3Result[0] !== channel.id) {
    tmp9(channel.id);
    let tmp11 = isEligible;
    if (isEligible) {
      tmp11 = !result;
    }
    tmp6(tmp11);
  }
  const items1 = [isEligible, result, first, draftText];
  const effect = obj3.useEffect(() => {
    if (isEligible) {
      if (!c1) {
        if (!first) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => callback(true), 60000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items1);
  const items2 = [isCoachmarkVisible];
  const dismissCoachmark = obj3.useCallback((dismissAction) => {
    scheduledMessage(false);
    let obj = channel(_undefined[5]);
    obj = { dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_1_6, obj);
  }, []);
  const effect1 = obj3.useEffect(() => {
    if (isCoachmarkVisible) {
      let obj = channel(_undefined[7]);
      const result = obj.trackDismissibleContentShown(closure_1_6);
      obj = { dismissAction: null };
      obj[0] = isCoachmarkVisible.AUTO_DISMISS;
      const result1 = channel(_undefined[5]).UNSAFE_markDismissibleContentAsDismissed(closure_1_6, obj);
      const obj2 = channel(_undefined[5]);
    }
  }, items2);
  return { isCoachmarkVisible, dismissCoachmark };
};