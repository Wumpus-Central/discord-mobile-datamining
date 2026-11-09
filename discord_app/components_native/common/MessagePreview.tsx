// === Module 19276: MessagePreview ===

// Module 19276 (MessagePreview)
import util from "util" /* 1113 */;
import noop from "module_19" /* 19 */;
import MessagePreviewStore from "MessagePreviewStore" /* 9009 */;

require = fn;
const Constants = fn(1072);
({ AnalyticsSections, AnalyticsObjects } = Constants);
const jsx = fn(21).jsx;
const analyticsLocation = { section: AnalyticsSections.CHANNEL_SEARCH, object: AnalyticsObjects.CHANNEL_SEARCH };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/MessagePreview.tsx");

export default function MessagePreview(channelId) {
  const onBeforeJumpToMessage = channelId.onBeforeJumpToMessage;
  items = [MessagePreviewStore];
  const stateFromStoresObject = onBeforeJumpToMessage(504).useStateFromStoresObject(items, () => ({ messages: MessagePreviewStore.messages, jumpTargetId: MessagePreviewStore.jumpTargetId }));
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
  const effect = noop.useEffect(() => () => {
    jumpTargetId(closure_1_2[6]).clearMessages();
  }, []);
  return jsx(onBeforeJumpToMessage(10013).ChatPreview, { channelId: channelId.channelId, messages: stateFromStoresObject.messages, jumpToChatProps: memo, analyticsLocation });
};