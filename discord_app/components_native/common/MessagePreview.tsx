// === Module 16997: MessagePreview ===

// Module 16997 (MessagePreview)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import ChatPreview from "ChatPreview" /* 13093 */;
import react from "react" /* 19 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8037 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let AnalyticsObjects;
let AnalyticsSections;
({ AnalyticsSections, AnalyticsObjects } = Constants);
const jsx = Fragment.jsx;
const analyticsLocation = { section: AnalyticsSections.CHANNEL_SEARCH, object: AnalyticsObjects.CHANNEL_SEARCH };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let jumpTargetId;
  let messages;
  let onBeforeJumpToMessage;
  let tmp4;
  let tmp5;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(12);
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
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  ({ messages, jumpTargetId } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t["+TSRGD"]);
    cResult[2] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === jumpTargetId) {
    let tmp10;
    let tmp12;
    if (cResult[4] === onBeforeJumpToMessage) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          return () => {
            const obj = closure_1_1(closure_1_2[8]);
            obj.clearMessages();
          };
        }
      }
      const items1 = [];
      cResult[6] = C;
      cResult[7] = items1;
      tmp12 = items1;
    } else {
      class C {
        constructor() {
          return () => {
            const obj = closure_1_1(closure_1_2[8]);
            obj.clearMessages();
          };
        }
      }
      tmp12 = cResult[7];
    }
    const effect = react.useEffect(C, tmp12);
    if (cResult[8] === channelId) {
      class C {
        constructor() {
          return () => {
            const obj = closure_1_1(closure_1_2[8]);
            obj.clearMessages();
          };
        }
      }
    }
    cResult[8] = channelId;
    cResult[9] = tmp10;
    cResult[10] = messages;
    cResult[11] = jsx(ChatPreview.ChatPreview, { channelId, messages, jumpToChatProps: tmp10, analyticsLocation });
    const tmp18 = jsx(ChatPreview.ChatPreview, { channelId, messages, jumpToChatProps: tmp10, analyticsLocation });
  }
  const obj3 = { jumpToChatText: tmp8, jumpTargetId, onBeforeJumpToMessage };
  cResult[3] = jumpTargetId;
  cResult[4] = onBeforeJumpToMessage;
  cResult[5] = obj3;
  tmp10 = obj3;
}) : ((onBeforeJumpToMessage) => {
  onBeforeJumpToMessage = onBeforeJumpToMessage.onBeforeJumpToMessage;
  const channelId = onBeforeJumpToMessage.channelId;
  let obj = onBeforeJumpToMessage(504);
  const items = [MessagePreviewStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ messages: MessagePreviewStore.messages, jumpTargetId: MessagePreviewStore.jumpTargetId }));
  const jumpTargetId = stateFromStoresObject.jumpTargetId;
  const items1 = [jumpTargetId, onBeforeJumpToMessage];
  const messages = stateFromStoresObject.messages;
  const memo = react.useMemo(() => {
    let intl;
    const obj = { jumpToChatText: intl.string(intl2.t["+TSRGD"]), jumpTargetId, onBeforeJumpToMessage };
    intl = intl2.intl;
    return obj;
  }, items1);
  const effect = react.useEffect(() => () => {
    const obj = jumpTargetId(closure_1_2[8]);
    obj.clearMessages();
  }, []);
  return jsx(onBeforeJumpToMessage(13093).ChatPreview, { channelId, messages, jumpToChatProps: memo, analyticsLocation });
});
const result = size.fileFinishedImporting("components_native/common/MessagePreview.tsx");

export default tmp3;