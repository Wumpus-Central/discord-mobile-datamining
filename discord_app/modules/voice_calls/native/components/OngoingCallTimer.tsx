// === Module 13624: OngoingCallTimer ===

// Module 13624 (OngoingCallTimer)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Fragment from "Fragment" /* 21 */;
import TimerDefault from "Timer" /* 13625 */;
import react from "react" /* 19 */;
import CallStore from "CallStore" /* 5444 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let first;
  let style;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = channelId(576);
  const cResult = obj.c(9);
  ({ style, channelId } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CallStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      const call = CallStore.getCall(channelId);
      let messageId;
      if (call != null) {
        messageId = call.messageId;
      }
      return messageId;
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    let num5 = 0;
    if (null != stateFromStores) {
      const obj3 = SnowflakeUtilsDefault;
      num5 = obj3.extractTimestamp(stateFromStores);
    }
    cResult[4] = stateFromStores;
    cResult[5] = num5;
    tmp9 = num5;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp9) {
    let tmp12;
    if (cResult[7] === style) {
      tmp12 = cResult[8];
    }
    return tmp12;
  }
  const tmp13 = jsx(TimerDefault, { style, timestamp: tmp9 });
  cResult[6] = tmp9;
  cResult[7] = style;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const style = channelId.style;
  const items = [CallStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = CallStore.getCall(channelId);
    let messageId;
    if (call != null) {
      messageId = call.messageId;
    }
    return messageId;
  }, items1);
  let timestamp = 0;
  if (null != stateFromStores) {
    const obj2 = SnowflakeUtilsDefault;
    timestamp = obj2.extractTimestamp(stateFromStores);
  }
  return jsx(TimerDefault, { style, timestamp });
});
const result = size.fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default tmp3;