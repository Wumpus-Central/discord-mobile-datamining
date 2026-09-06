// discord_app/modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx
import closure_2 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../gateway/GatewayConnectionStore.tsx";
import closure_5 from "../../stores/DraftStore.tsx";
import { ContentDismissActionType } from "../dismissible_content/DismissibleContentConstants.tsx";

const require = arg1;
let closure_7 = require("DismissibleContent").DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
let result = require("set").fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = function useScheduledMessageDraftCoachmarkState(channel) {
  channel = channel.channel;
  ({ draftText, isEligible } = channel);
  dependencyMap = undefined;
  isEligible = undefined;
  let first;
  closure_4 = undefined;
  let isCoachmarkVisible;
  let result = channel(4380).useIsDismissibleContentDismissed_UNSAFE(closure_7);
  dependencyMap = result;
  let obj = channel(4380);
  const items = [isCoachmarkVisible];
  const stateFromStores = channel(504).useStateFromStores(
    items,
    () => null != isCoachmarkVisible.getScheduledMessage(channel.id),
  );
  let obj2 = channel(504);
  const items1 = [closure_4];
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
  closure_4 = tmp7;
  isCoachmarkVisible = first;
  if (first) {
    isCoachmarkVisible = isEligible;
  }
  const obj3 = channel(504);
  const tmp4 = isEligible;
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
          const timeout = setTimeout(() => callback(true), 60000);
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
    let obj = channel(_undefined[6]);
    obj = { dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_1_7, obj);
  }, []);
  const effect1 = obj4.useEffect(() => {
    if (isCoachmarkVisible) {
      let obj = channel(_undefined[8]);
      const result = obj.trackDismissibleContentShown(closure_1_7);
      obj = { dismissAction: null };
      obj[0] = closure_1_6.AUTO_DISMISS;
      const result1 = channel(_undefined[6]).UNSAFE_markDismissibleContentAsDismissed(closure_1_7, obj);
      const obj2 = channel(_undefined[6]);
    }
  }, items3);
  return { isCoachmarkVisible, dismissCoachmark };
};
