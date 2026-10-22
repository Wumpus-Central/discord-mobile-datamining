// discord_app/modules/app_channels/native/openChannelSecondaryViewChat.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import MessageManagerDefault from "../../messages/MessageManager.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ME = fn(1087).ME;
const ReactCompilerGating = fn(558);
function getChannelSecondaryViewChatIndex(id) {
  _require = id;
  const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
  let num = -1;
  if (null != rootNavigationRef) {
    num = -1;
    if (rootNavigationRef.isReady()) {
      const routes = rootNavigationRef.getRootState().routes;
      num = routes.findIndex((item) => {
        const result = handleFrameDeepLinkQueued(dependencyMap[3]).coerceChannelSecondaryViewChatRoute(item);
        let channelId;
        if (result != null) {
          channelId = result.params.channelId;
        }
        return channelId === closure_0;
      });
    }
  }
  return num;
}
function presentChannelSecondaryViewChat(guildId, channelId) {
  _require = guildId;
  closure_1 = channelId;
  const result = require("RootNavigationRef").runWhenRootNavigationReady(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { guildId, channelId };
      rootNavigationRef.navigate("channel-secondary-view-chat", obj2, { pop: true });
    }
  });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_channels/native/openChannelSecondaryViewChat.tsx");

export default function openChannelSecondaryViewChat(guildId, channelId) {
  let tmp2 = null;
  if (guildId !== ME) {
    tmp2 = guildId;
  }
  const messages = MessageManagerDefault.fetchMessages({ guildId: tmp2, channelId });
  _require = guildId;
  importDefault = channelId;
  let obj2 = { guildId: tmp2, channelId };
  const result = require("RootNavigationRef").runWhenRootNavigationReady(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { guildId, channelId };
      rootNavigationRef.navigate("channel-secondary-view-chat", obj2, { pop: true });
    }
  });
  const obj3 = require("RootNavigationRef");
}
export { getChannelSecondaryViewChatIndex };
export { presentChannelSecondaryViewChat };
export const useDismissChannelSecondaryViewChatOnFrameDeepLink = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDismissChannelSecondaryViewChatOnFrameDeepLink(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] !== arg0) {
        const fn = function o() {
          if (null != handleFrameDeepLinkQueued) {
            handleFrameDeepLinkQueued = function handleFrameDeepLinkQueued(channelId) {
              if (channelId.channelId === handleFrameDeepLinkQueued) {
                const rootNavigationRef = handleFrameDeepLinkQueued(5137).getRootNavigationRef();
                handleFrameDeepLinkQueued = tmp;
                const obj2 = handleFrameDeepLinkQueued(5137);
                const tmp6 = handleFrameDeepLinkQueued;
                const rootNavigationRef1 = handleFrameDeepLinkQueued(5137).getRootNavigationRef();
                let num = -1;
                if (null != rootNavigationRef1) {
                  num = -1;
                  if (rootNavigationRef1.isReady()) {
                    const routes = rootNavigationRef1.getRootState().routes;
                    num = routes.findIndex((item) => {
                      const result = handleFrameDeepLinkQueued(dependencyMap[3]).coerceChannelSecondaryViewChatRoute(
                        item,
                      );
                      let channelId;
                      if (result != null) {
                        channelId = result.params.channelId;
                      }
                      return channelId === closure_0;
                    });
                  }
                }
                if (null != rootNavigationRef) {
                  if (-1 !== num) {
                    const rootState = rootNavigationRef.getRootState();
                    const obj = {};
                    const StackActions = tmp6(1506).StackActions;
                    const merged = Object.assign(StackActions.pop(rootState.routes.length - num));
                    obj.target = rootState.key;
                    rootNavigationRef.dispatch(obj);
                  }
                }
                const obj4 = handleFrameDeepLinkQueued(5137);
              }
            };
            const subscription = DispatcherDefault.subscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
            return () => {
              DispatcherDefault.unsubscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
            };
          }
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp3 = items;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : function useDismissChannelSecondaryViewChatOnFrameDeepLink(arg0) {
      closure_0 = arg0;
      const items = [arg0];
      const effect = noop.useEffect(() => {
        function handleFrameDeepLinkQueued(channelId) {
          if (channelId.channelId === handleFrameDeepLinkQueued) {
            const rootNavigationRef = handleFrameDeepLinkQueued(5137).getRootNavigationRef();
            handleFrameDeepLinkQueued = tmp;
            const obj2 = handleFrameDeepLinkQueued(5137);
            const tmp6 = handleFrameDeepLinkQueued;
            const rootNavigationRef1 = handleFrameDeepLinkQueued(5137).getRootNavigationRef();
            let num = -1;
            if (null != rootNavigationRef1) {
              num = -1;
              if (rootNavigationRef1.isReady()) {
                const routes = rootNavigationRef1.getRootState().routes;
                num = routes.findIndex((item) => {
                  const result = handleFrameDeepLinkQueued(dependencyMap[3]).coerceChannelSecondaryViewChatRoute(item);
                  let channelId;
                  if (result != null) {
                    channelId = result.params.channelId;
                  }
                  return channelId === closure_0;
                });
              }
            }
            if (null != rootNavigationRef) {
              if (-1 !== num) {
                const rootState = rootNavigationRef.getRootState();
                const obj = {};
                const StackActions = tmp6(1506).StackActions;
                const merged = Object.assign(StackActions.pop(rootState.routes.length - num));
                obj.target = rootState.key;
                rootNavigationRef.dispatch(obj);
              }
            }
            const obj4 = handleFrameDeepLinkQueued(5137);
          }
        }
        if (null != handleFrameDeepLinkQueued) {
          const subscription = DispatcherDefault.subscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
          return () => {
            DispatcherDefault.unsubscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
          };
        }
      }, items);
    };
