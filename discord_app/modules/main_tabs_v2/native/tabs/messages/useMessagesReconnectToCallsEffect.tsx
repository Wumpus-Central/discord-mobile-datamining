// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PrivateChannelSortStore from "../../../../../stores/views/PrivateChannelSortStore.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let channel;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let sortedChannels;
      let tmp2;
      let tmp3;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          let isConnectedResult;
          let closure_0 = closure_5.isConnected();
          function isGatewayConnectedListener() {
            let arr;
            let closure_0 = GatewayConnectionStore.isConnected();
            if (closure_0 !== closure_0) {
              if (closure_0) {
                [r10011, arr] = sortedChannels.getSortedChannels();
                const items = [];
                const _Math = Math;
                let num3 = 0;
                _slicedToArray(sortedChannels.getSortedChannels(), 2);
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
                const obj = { type: "CALL_CONNECT_MULTIPLE", channelIds: items };
                const obj2 = DispatcherDefault;
                obj2.dispatch(obj);
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
      const effect = react.useEffect(tmp2, tmp3);
    }
  : () => {
      let sortedChannels;
      const effect = react.useEffect(() => {
        let isConnectedResult;
        function isGatewayConnectedListener() {
          let arr;
          let closure_0 = GatewayConnectionStore.isConnected();
          if (closure_0 !== closure_0) {
            if (closure_0) {
              [r10011, arr] = sortedChannels.getSortedChannels();
              const items = [];
              const _Math = Math;
              let num3 = 0;
              _slicedToArray(sortedChannels.getSortedChannels(), 2);
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
              const obj = { type: "CALL_CONNECT_MULTIPLE", channelIds: items };
              const obj2 = DispatcherDefault;
              obj2.dispatch(obj);
            }
          }
        }
        let closure_0 = closure_5.isConnected();
        closure_5.addChangeListener(isGatewayConnectedListener);
        return () => {
          GatewayConnectionStore.removeChangeListener(isGatewayConnectedListener);
        };
      }, []);
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx",
);

export default tmp2;
