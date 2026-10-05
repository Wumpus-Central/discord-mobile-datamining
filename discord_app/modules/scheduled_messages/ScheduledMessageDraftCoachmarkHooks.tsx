// discord_app/modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../dismissible_content/DismissibleContentUtils.tsx";
import DismissibleContentConstants from "../dismissible_content/DismissibleContentConstants.tsx";
import DismissibleContentUnsafeUtils from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import DraftStore from "../../stores/DraftStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channel, dependencyMap;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_7 = dismissible_content.DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let connected;
      let draftText;
      let first;
      let isEligible;
      let tmp10;
      let tmp9;
      let obj = channel(576);
      const cResult = obj.c(25);
      channel = channel.channel;
      ({ draftText, isEligible } = channel);
      let obj2 = channel(4698);
      let result = obj2.useIsDismissibleContentDismissed_UNSAFE(closure_7);
      dependencyMap = result;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DraftStore];
        cResult[0] = items;
        first = items;
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
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, C);
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
        tmp10 = E;
        tmp9 = items1;
      } else {
        class C {
          constructor() {
            return null != closure_5.getScheduledMessage(channel.id);
          }
        }
        tmp10 = cResult[4];
      }
      const tmpResult2 = channel(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
      if (cResult[5] === draftText) {
        class C {
          constructor() {
            return null != closure_5.getScheduledMessage(channel.id);
          }
        }
      }
      let tmp12 = isEligible;
      if (tmp12) {
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
    }
  : (channel) => {
      let c1;
      let draftText;
      let isEligible;
      channel = channel.channel;
      ({ draftText, isEligible } = channel);
      isEligible = undefined;
      let first;
      let connected;
      let isCoachmarkVisible;
      let obj = channel(4698);
      let result = obj.useIsDismissibleContentDismissed_UNSAFE(closure_7);
      dependencyMap = result;
      let obj2 = channel(504);
      const items = [isCoachmarkVisible];
      const stateFromStores = obj2.useStateFromStores(items, () => null != DraftStore.getScheduledMessage(channel.id));
      let obj3 = channel(504);
      const items1 = [connected];
      const stateFromStores1 = obj3.useStateFromStores(items1, () => connected.isConnected());
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
      isCoachmarkVisible = first && isEligible;
      const tmp4Result = isEligible(first.useState("0"), 2);
      if (tmp4Result[0] !== channel.id) {
        tmp10(channel.id);
        const tmp12 = isEligible && !result;
        tmp5[1](tmp12);
      }
      const items2 = [isEligible, result, first, draftText];
      const effect = obj4.useEffect(() => {
        let closure_0;
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
      const tmp15 = !isEligible && first;
      if (tmp15) {
        tmp5[1](false);
      }
      const items3 = [isCoachmarkVisible];
      const dismissCoachmark = obj4.useCallback((dismissAction) => {
        connected(false);
        const obj = DismissibleContentUnsafeUtils;
        const obj2 = { dismissAction };
        const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_7, obj2);
      }, []);
      const effect1 = obj4.useEffect(() => {
        if (isCoachmarkVisible) {
          const obj = DismissibleContentUtils;
          const result = obj.trackDismissibleContentShown(closure_7);
          const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
          const obj2 = DismissibleContentUnsafeUtils;
          const result1 = obj2.UNSAFE_markDismissibleContentAsDismissed(closure_7, obj3);
        }
      }, items3);
      return { isCoachmarkVisible, dismissCoachmark };
    };
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = tmp2;
