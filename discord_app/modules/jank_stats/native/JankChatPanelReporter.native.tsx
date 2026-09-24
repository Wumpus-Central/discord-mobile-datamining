// discord_app/modules/jank_stats/native/JankChatPanelReporter.native.tsx
import getJankScreenName from "getJankScreenName.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  const obj = {
    position: translateX,
    openAt: 0,
    closedAt: maxWidth,
    resolveOpenName: callback,
    resolveClosedName: channelId(16432).getPanelListScreenName,
  };
  return jsx(showCreateThread(16435), {
    position: translateX,
    openAt: 0,
    closedAt: maxWidth,
    resolveOpenName: callback,
    resolveClosedName: channelId(16432).getPanelListScreenName,
  });
}
