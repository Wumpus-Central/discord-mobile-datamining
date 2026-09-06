// discord_app/components_native/common/MessagePreview.tsx
import util from "../../intl/index.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import MessagePreviewStore from "../../stores/native/MessagePreviewStore.tsx";

require = fn;
const Constants = fn(1074);
({ AnalyticsSections, AnalyticsObjects } = Constants);
const jsx = fn(21).jsx;
const analyticsLocation = { section: AnalyticsSections.CHANNEL_SEARCH, object: AnalyticsObjects.CHANNEL_SEARCH };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/MessagePreview.tsx");

export default function MessagePreview(channelId) {
  const onBeforeJumpToMessage = channelId.onBeforeJumpToMessage;
  let obj = onBeforeJumpToMessage(504);
  const items = [MessagePreviewStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
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
      jumpTargetId(closure_1_2[6]).clearMessages();
    },
    [],
  );
  obj = {
    channelId: channelId.channelId,
    messages: stateFromStoresObject.messages,
    jumpToChatProps: memo,
    analyticsLocation,
  };
  return jsx(onBeforeJumpToMessage(13252).ChatPreview, {
    channelId: channelId.channelId,
    messages: stateFromStoresObject.messages,
    jumpToChatProps: memo,
    analyticsLocation,
  });
}
