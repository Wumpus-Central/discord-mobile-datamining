// discord_app/modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx
import DismissibleContentUtils from "../dismissible_content/DismissibleContentUtils.tsx";
import DismissibleContentUnsafeUtils from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import DraftStore from "../../stores/DraftStore.tsx";

require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let closure_7 = fn(1943).DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
const size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = function useScheduledMessageDraftCoachmarkState(channel) {
  channel = channel.channel;
  ({ draftText, isEligible } = channel);
  isEligible = undefined;
  let first;
  let connected;
  let isCoachmarkVisible;
  let result = channel(4380).useIsDismissibleContentDismissed_UNSAFE(closure_7);
  dependencyMap = result;
  let obj = channel(4380);
  const items = [isCoachmarkVisible];
  const stateFromStores = channel(504).useStateFromStores(
    items,
    () => null != DraftStore.getScheduledMessage(channel.id),
  );
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
  const obj3 = channel(504);
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
    const obj = { dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_7, obj);
  }, []);
  const effect1 = obj4.useEffect(() => {
    if (isCoachmarkVisible) {
      let obj = DismissibleContentUtils;
      const result = obj.trackDismissibleContentShown(closure_7);
      obj = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_7, obj);
    }
  }, items3);
  return { isCoachmarkVisible, dismissCoachmark };
};
