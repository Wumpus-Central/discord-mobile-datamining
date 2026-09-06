// discord_app/modules/voice_calls/native/components/OngoingCallTimer.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import TimerDefault from "Timer.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CallStore from "../../../../stores/CallStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default function OnGoingCallTimer(style) {
  const channelId = style.channelId;
  const items = [CallStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(
    items,
    () => {
      const call = CallStore.getCall(channelId);
      let messageId;
      if (call != null) {
        messageId = call.messageId;
      }
      return messageId;
    },
    items1,
  );
  let timestamp = 0;
  if (null != stateFromStores) {
    timestamp = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
  }
  return jsx(TimerDefault, { style: style.style, timestamp });
}
