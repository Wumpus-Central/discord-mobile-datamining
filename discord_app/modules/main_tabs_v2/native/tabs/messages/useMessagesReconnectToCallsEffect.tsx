// === Module 15046: useMessagesReconnectToCallsEffect ===

// Module 15046 (useMessagesReconnectToCallsEffect)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import _handleConnectionOpen from "_handleConnectionOpen";
import ensureGuildLoaded from "ensureGuildLoaded";
import makeSortedChannel from "makeSortedChannel";

const result = require("_handleConnectionOpen").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx");

export default function useMessagesReconnectToCallsEffect() {
  const effect = React.useEffect(() => {
    function isGatewayConnectedListener() {
      let arr;
      const isConnectedResult = outer1_4.isConnected();
      if (callback !== isConnectedResult) {
        callback = isConnectedResult;
        if (isConnectedResult) {
          [r10011, arr] = outer1_2(outer1_6.getSortedChannels(), 2);
          const items = [];
          const _Math = Math;
          let num3 = 0;
          if (0 < Math.min(20, arr.length)) {
            do {
              let tmp7 = outer1_5;
              let channel = outer1_5.getChannel(arr[num3].channelId);
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
          const tmp4 = outer1_2(outer1_6.getSortedChannels(), 2);
          const obj = { type: "CALL_CONNECT_MULTIPLE", channelIds: null };
          obj[1] = items;
          callback(isGatewayConnectedListener[5]).dispatch(obj);
          const obj2 = callback(isGatewayConnectedListener[5]);
        }
      }
    }
    let closure_0 = _handleConnectionOpen.isConnected();
    _handleConnectionOpen.addChangeListener(isGatewayConnectedListener);
    return () => {
      outer1_4.removeChangeListener(isGatewayConnectedListener);
    };
  }, []);
};