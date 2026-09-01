// === Module 15640: useMessagesReconnectToCallsEffect ===

// Module 15640 (useMessagesReconnectToCallsEffect)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "_handleConnectionOpen" /* 5221 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "makeSortedChannel" /* 6065 */;

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx");

export default function useMessagesReconnectToCallsEffect() {
  const effect = React.useEffect(() => {
    function isGatewayConnectedListener() {
      const isConnectedResult = closure_1_4.isConnected();
      if (callback !== isConnectedResult) {
        callback = isConnectedResult;
        if (isConnectedResult) {
          [r10011, arr] = closure_1_2(closure_1_6.getSortedChannels(), 2);
          const items = [];
          const _Math = Math;
          let num3 = 0;
          if (0 < Math.min(20, arr.length)) {
            do {
              let tmp7 = closure_1_5;
              let channel = closure_1_5.getChannel(arr[num3].channelId);
              let isGroupDMResult = null != channel;
              let tmp9 = num3;
              if (isGroupDMResult) {
                isGroupDMResult = channel.isGroupDM();
              }
              if (isGroupDMResult) {
                arr = items.push(arr[num3].channelId);
              }
              num3 = num3 + 1;
              let _Math2 = Math;
            } while (num3 < Math.min(20, arr.length));
          }
          const tmp4 = closure_1_2(closure_1_6.getSortedChannels(), 2);
          const obj = { type: "CALL_CONNECT_MULTIPLE", channelIds: null };
          obj[1] = items;
          callback(isGatewayConnectedListener[5]).dispatch(obj);
          const obj2 = callback(isGatewayConnectedListener[5]);
        }
      }
    }
    closure_0 = closure_4.isConnected();
    closure_4.addChangeListener(isGatewayConnectedListener);
    return () => {
      closure_1_4.removeChangeListener(isGatewayConnectedListener);
    };
  }, []);
};