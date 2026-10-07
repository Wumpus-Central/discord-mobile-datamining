// === Module 11614: ScheduledMessageDraftCoachmarkHooks ===

// Module 11614 (ScheduledMessageDraftCoachmarkHooks)
import DismissibleContentUtils from "DismissibleContentUtils" /* 2037 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4704 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5443 */;
import DraftStore from "DraftStore" /* 7044 */;

require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
let closure_7 = fn(2036).DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(25);
  channel = channel.channel;
  ({ draftText, isEligible } = channel);
  let obj = channel(576);
  let result = channel(4704).useIsDismissibleContentDismissed_UNSAFE(closure_7);
  dependencyMap = result;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DraftStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
    cResult[1] = channel.id;
    cResult[2] = C;
  } else {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
  }
  let obj2 = channel(4704);
  const stateFromStores = channel(504).useStateFromStores(first, C);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
    const items1 = [GatewayConnectionStore];
    class E {
      constructor() {
        return closure_4.isConnected();
      }
    }
    cResult[3] = items1;
    cResult[4] = E;
    let tmp10 = E;
    const tmp9 = items1;
  } else {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
    tmp10 = cResult[4];
  }
  const tmpResult = channel(504);
  const stateFromStores1 = channel(504).useStateFromStores(tmp9, tmp10);
  if (cResult[5] === draftText) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
  }
  let tmp12 = isEligible;
  if (isEligible) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
    tmp12 = draftText.trim().length > 10;
  }
  if (tmp12) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
  }
  if (tmp12) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
  }
  cResult[5] = draftText;
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = isEligible;
  cResult[9] = tmp12;
  const tmpResult2 = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  ({ draftText, isEligible } = channel);
  isEligible = undefined;
  let first;
  let connected;
  let isCoachmarkVisible;
  let result = channel(4704).useIsDismissibleContentDismissed_UNSAFE(closure_7);
  dependencyMap = result;
  let obj = channel(4704);
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
});