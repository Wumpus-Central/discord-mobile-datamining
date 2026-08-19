// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import _handleConnectionOpen from "../../../../gateway/GatewayConnectionStore.tsx";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import makeSortedChannel from "../../../../../stores/views/PrivateChannelSortStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx");

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
              let channel = closure_1_5.getChannel(arr[num3].channelId);
              let isGroupDMResult = null != channel;
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