// === Module 16112: useActiveEventOrStageInstanceChannel ===

// Module 16112 (useActiveEventOrStageInstanceChannel)
import c from "c" /* 576 */;
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 9160 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 16111 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  let firstActiveEventChannel = useGuildScheduledEvents.useFirstActiveEventChannel(arg0);
  const tmp3 = useLiveStageChannelsDefault(arg0);
  const first = tmp3[0];
  let id;
  if (first != null) {
    id = first.id;
  }
  if (cResult[0] !== id) {
    const first1 = tmp3[0];
    let id1;
    if (first1 != null) {
      id1 = first1.id;
    }
    const channel = ChannelStore.getChannel(id1);
    const first2 = tmp3[0];
    let id2;
    if (first2 != null) {
      id2 = first2.id;
    }
    cResult[0] = id2;
    cResult[1] = channel;
    let tmp6 = channel;
  } else {
    tmp6 = cResult[1];
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = tmp6;
  }
  return firstActiveEventChannel;
}) : ((arg0) => {
  let firstActiveEventChannel = useGuildScheduledEvents.useFirstActiveEventChannel(arg0);
  const first = useLiveStageChannelsDefault(arg0)[0];
  if (first != null) {
    const id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = ChannelStore.getChannel(id);
  }
  return firstActiveEventChannel;
});