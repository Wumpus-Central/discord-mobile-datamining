// === Module 16364: MessagePreview ===

// Module 16364 (MessagePreview)
import closure_3 from "noop" /* 19 */;
import closure_4 from "messages" /* 8599 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ AnalyticsSections, AnalyticsObjects } = ME);
let closure_6 = { section: AnalyticsSections.CHANNEL_SEARCH, object: AnalyticsObjects.CHANNEL_SEARCH };
const result = require("set").fileFinishedImporting("components_native/common/MessagePreview.tsx");

export default function MessagePreview(channelId) {
  const onBeforeJumpToMessage = channelId.onBeforeJumpToMessage;
  let jumpTargetId;
  let obj = onBeforeJumpToMessage(589);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ messages: closure_4.messages, jumpTargetId: closure_4.jumpTargetId }));
  jumpTargetId = stateFromStoresObject.jumpTargetId;
  const items1 = [jumpTargetId, onBeforeJumpToMessage];
  const memo = React.useMemo(() => {
    const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null };
    const intl = onBeforeJumpToMessage(closure_1_2[5]).intl;
    obj[0] = intl.string(onBeforeJumpToMessage(closure_1_2[5]).t["+TSRGD"]);
    obj[1] = jumpTargetId;
    obj[2] = onBeforeJumpToMessage;
    return obj;
  }, items1);
  const effect = React.useEffect(() => () => {
    callback(table[6]).clearMessages();
  }, []);
  obj = { channelId: channelId.channelId, messages: stateFromStoresObject.messages, jumpToChatProps: memo, analyticsLocation: closure_6 };
  return jsx(onBeforeJumpToMessage(12885).ChatPreview, { channelId: channelId.channelId, messages: stateFromStoresObject.messages, jumpToChatProps: memo, analyticsLocation: closure_6 });
};