// === Module 16452: useMessagesReconnectToCallsEffect ===

// Module 16452 (useMessagesReconnectToCallsEffect)
import DispatcherDefault from "Dispatcher" /* 573 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5580 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7549 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx");

export default function useMessagesReconnectToCallsEffect() {
  const effect = noop.useEffect(() => {
    function isGatewayConnectedListener() {
      isConnectedResult = GatewayConnectionStore.isConnected();
      if (isConnectedResult !== isConnectedResult) {
        if (isConnectedResult) {
          [r10011, arr] = sortedChannels.getSortedChannels();
          const items = [];
          const _Math = Math;
          let num3 = 0;
          if (0 < Math.min(20, arr.length)) {
            do {
              channel = channel.getChannel(arr[num3].channelId);
              let isGroupDMResult = null != channel;
              if (isGroupDMResult) {
                isGroupDMResult = channel.isGroupDM();
              }
              if (isGroupDMResult) {
                let arr2 = items.push(arr[num3].channelId);
              }
              num3 = num3 + 1;
              let _Math2 = Math;
            } while (num3 < Math.min(20, arr.length));
          }
          const tmp4 = _slicedToArray(sortedChannels.getSortedChannels(), 2);
          const obj = { type: "CALL_CONNECT_MULTIPLE", channelIds: items };
          DispatcherDefault.dispatch(obj);
        }
      }
    }
    closure_0 = closure_4.isConnected();
    closure_4.addChangeListener(isGatewayConnectedListener);
    return () => {
      GatewayConnectionStore.removeChangeListener(isGatewayConnectedListener);
    };
  }, []);
};