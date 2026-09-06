// discord_app/modules/gateway/useRequestGatewaySocket.tsx
import RequestGatewaySocketAll from "RequestGatewaySocket.tsx";
import DiscordAppStateDefault from "../app_state/DiscordAppState.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  importDefault = arg0;
  const canUIRequestGatewaySocket = DiscordAppStateDefault.useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = noop.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      RequestGatewaySocketAll.setRequestedBy(closure_0);
      return () => {
        canUIRequestGatewaySocket(dependencyMap[2]).stopRequest(closure_1_0);
      };
    }
  }, items);
};
