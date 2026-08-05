import { DISCORD_EPOCH } from "../../../../utils/SnowflakeUtils.tsx";
import { componentDidMount } from "Timer.tsx";
// discord_app/modules/voice_calls/native/components/OngoingCallTimer.tsx
import "noop";
import callConnect from "callConnect";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default function OnGoingCallTimer(style) {
  const channelId = style.channelId;
  const items = [callConnect];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    const call = outer1_3.getCall(channelId);
    let messageId;
    if (call != null) {
      messageId = call.messageId;
    }
    return messageId;
  }, items1);
  let timestamp = 0;
  if (null != stateFromStores) {
    timestamp = DISCORD_EPOCH.extractTimestamp(stateFromStores);
    const obj2 = DISCORD_EPOCH;
  }
  return jsx(componentDidMount, { style: style.style, timestamp });
};