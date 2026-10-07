// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx
import c from "../../../../../../_runtime/00576_c.js";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PrivateChannelSortStore from "../../../../../stores/views/PrivateChannelSortStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          closure_0 = closure_5.isConnected();
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
          closure_5.addChangeListener(isGatewayConnectedListener);
          return () => {
            GatewayConnectionStore.removeChangeListener(isGatewayConnectedListener);
          };
        };
        let items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : () => {
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
        closure_0 = closure_5.isConnected();
        closure_5.addChangeListener(isGatewayConnectedListener);
        return () => {
          GatewayConnectionStore.removeChangeListener(isGatewayConnectedListener);
        };
      }, []);
    };
