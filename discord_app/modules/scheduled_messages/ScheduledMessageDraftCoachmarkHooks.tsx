// === Module 12328: ScheduledMessageDraftCoachmarkHooks ===

// Module 12328 (ScheduledMessageDraftCoachmarkHooks)
import DismissibleContentUtils from "DismissibleContentUtils" /* 2030 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4649 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5582 */;
import DraftStore from "DraftStore" /* 5192 */;

require = fn;
const ContentDismissActionType = fn(2041).ContentDismissActionType;
let closure_7 = fn(2028).DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
const size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = function useScheduledMessageDraftCoachmarkState(channel) {
  channel = channel.channel;
  ({ draftText, isEligible } = channel);
  isEligible = undefined;
  let first;
  let connected;
  let isCoachmarkVisible;
  let result = channel(4649).useIsDismissibleContentDismissed_UNSAFE(closure_7);
  dependencyMap = result;
  let obj = channel(4649);
  const items = [isCoachmarkVisible];
  const stateFromStores = channel(504).useStateFromStores(items, () => null != DraftStore.getScheduledMessage(channel.id));
  let obj2 = channel(504);
  const items1 = [connected];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => connected.isConnected());
  if (isEligible) {
    isEligible = draftText.trim().length > 10;
  }
  if (isEligible) {
    isEligible = !stateFromStores;
  }
  if (isEligible) {
    isEligible = stateFromStores1;
  }
  const tmp5 = isEligible(first.useState(false), 2);
  first = tmp5[0];
  connected = tmp7;
  isCoachmarkVisible = first;
  if (first) {
    isCoachmarkVisible = isEligible;
  }
  let obj3 = channel(504);
  if (tmp4Result[0] !== channel.id) {
    tmp10(channel.id);
    let tmp12 = isEligible;
    if (isEligible) {
      tmp12 = !result;
    }
    tmp7(tmp12);
  }
  const items2 = [isEligible, result, first, draftText];
  const effect = obj4.useEffect(() => {
    if (isEligible) {
      if (!c1) {
        if (!first) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => connected(true), 60000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items2);
  let tmp15 = !isEligible;
  if (!isEligible) {
    tmp15 = first;
  }
  if (tmp15) {
    tmp7(false);
  }
  const items3 = [isCoachmarkVisible];
  const dismissCoachmark = obj4.useCallback((dismissAction) => {
    connected(false);
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_7, { dismissAction });
  }, []);
  const effect1 = obj4.useEffect(() => {
    if (isCoachmarkVisible) {
      const result = DismissibleContentUtils.trackDismissibleContentShown(closure_7);
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_7, obj3);
    }
  }, items3);
  return { isCoachmarkVisible, dismissCoachmark };
};