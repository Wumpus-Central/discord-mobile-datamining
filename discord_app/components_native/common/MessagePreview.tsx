// discord_app/components_native/common/MessagePreview.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import util from "../../intl/index.native.tsx";
import ChatPreview from "ChatPreview.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import MessagePreviewStore from "../../stores/native/MessagePreviewStore.tsx";

require = fn;
const Constants = fn(1085);
({ AnalyticsSections, AnalyticsObjects } = Constants);
const jsx = fn(21).jsx;
const analyticsLocation = { section: AnalyticsSections.CHANNEL_SEARCH, object: AnalyticsObjects.CHANNEL_SEARCH };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/MessagePreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(12);
      ({ channelId, onBeforeJumpToMessage } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessagePreviewStore];
        const fn = function c() {
          return { messages: MessagePreviewStore.messages, jumpTargetId: MessagePreviewStore.jumpTargetId };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
      ({ messages, jumpTargetId } = stateFromStoresObject);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["+TSRGD"]);
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === jumpTargetId) {
        if (cResult[4] === onBeforeJumpToMessage) {
          let tmp10 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              return () => {
                closure_1_1(closure_1_2[8]).clearMessages();
              };
            }
          }
          const items1 = [];
          cResult[6] = C;
          cResult[7] = items1;
          let tmp12 = items1;
        } else {
          class C {
            constructor() {
              return () => {
                closure_1_1(closure_1_2[8]).clearMessages();
              };
            }
          }
          tmp12 = cResult[7];
        }
        const effect = noop.useEffect(C, tmp12);
        if (cResult[8] === channelId) {
          class C {
            constructor() {
              return () => {
                closure_1_1(closure_1_2[8]).clearMessages();
              };
            }
          }
        }
        const obj2 = { channelId, messages, jumpToChatProps: tmp10, analyticsLocation };
        const tmp18 = jsx(ChatPreview.ChatPreview, { channelId, messages, jumpToChatProps: tmp10, analyticsLocation });
        cResult[8] = channelId;
        cResult[9] = tmp10;
        cResult[10] = messages;
        cResult[11] = tmp18;
      }
      const obj3 = { jumpToChatText: tmp8, jumpTargetId, onBeforeJumpToMessage };
      cResult[3] = jumpTargetId;
      cResult[4] = onBeforeJumpToMessage;
      cResult[5] = obj3;
      tmp10 = obj3;
      const tmpResult = initialize;
    }
  : (channelId) => {
      const onBeforeJumpToMessage = channelId.onBeforeJumpToMessage;
      const items = [MessagePreviewStore];
      const stateFromStoresObject = onBeforeJumpToMessage(504).useStateFromStoresObject(items, () => ({
        messages: MessagePreviewStore.messages,
        jumpTargetId: MessagePreviewStore.jumpTargetId,
      }));
      const jumpTargetId = stateFromStoresObject.jumpTargetId;
      const items1 = [jumpTargetId, onBeforeJumpToMessage];
      const memo = noop.useMemo(() => {
        const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null };
        const intl = util.intl;
        obj.jumpToChatText = intl.string(util.t["+TSRGD"]);
        obj.jumpTargetId = jumpTargetId;
        obj.onBeforeJumpToMessage = onBeforeJumpToMessage;
        return obj;
      }, items1);
      const effect = noop.useEffect(
        () => () => {
          jumpTargetId(closure_1_2[8]).clearMessages();
        },
        [],
      );
      return jsx(onBeforeJumpToMessage(13112).ChatPreview, {
        channelId: channelId.channelId,
        messages: stateFromStoresObject.messages,
        jumpToChatProps: memo,
        analyticsLocation,
      });
    };
