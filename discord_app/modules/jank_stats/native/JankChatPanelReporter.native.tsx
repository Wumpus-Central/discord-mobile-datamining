// === Module 16431: JankChatPanelReporter ===

// Module 16431 (JankChatPanelReporter)
import getJankScreenName from "getJankScreenName" /* 16432 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/jank_stats/native/JankChatPanelReporter.native.tsx");

export default function JankChatPanelReporter(channelId) {
  channelId = channelId.channelId;
  const showCreateThread = channelId.showCreateThread;
  ({ translateX, maxWidth } = channelId);
  dependencyMap = noop.useRef({ channelId, showCreateThread });
  const items = [channelId, showCreateThread];
  const effect = noop.useEffect(() => {
    closure_2.current = { channelId, showCreateThread };
  }, items);
  const callback = noop.useCallback(() => {
    ({ channelId, showCreateThread } = ref.current);
    return getJankScreenName.getChatPanelScreenName(channelId, showCreateThread);
  }, []);
  const obj = { position: translateX, openAt: 0, closedAt: maxWidth, resolveOpenName: callback, resolveClosedName: channelId(16432).getPanelListScreenName };
  return jsx(showCreateThread(16435), { position: translateX, openAt: 0, closedAt: maxWidth, resolveOpenName: callback, resolveClosedName: channelId(16432).getPanelListScreenName });
};