// discord_app/modules/voice_calls/native/components/OngoingCallTimer.tsx
import DISCORD_EPOCHDefault from "../../../../utils/SnowflakeUtils.tsx";
import noopAll from "../../../../../_runtime/00019_noop.js";
import componentDidMountDefault from "Timer.tsx";
import closure_3 from "../../../../stores/CallStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default function OnGoingCallTimer(style) {
  const channelId = style.channelId;
  const items = [closure_3];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(
    items,
    () => {
      const call = closure_1_3.getCall(channelId);
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
    timestamp = DISCORD_EPOCHDefault.extractTimestamp(stateFromStores);
    const obj2 = DISCORD_EPOCHDefault;
  }
  return jsx(componentDidMountDefault, { style: style.style, timestamp });
}
