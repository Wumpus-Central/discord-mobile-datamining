// === Module 15805: useRequestGatewaySocket ===

// Module 15805 (useRequestGatewaySocket)
import DiscordAppStateDefault from "DiscordAppState" /* 6651 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 8453 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export function useRequestGatewaySocket(arg0) {
  importDefault = arg0;
  const canUIRequestGatewaySocket = DiscordAppStateDefault.useCanUIRequestGatewaySocket();
  items = [arg0, canUIRequestGatewaySocket];
  const effect = noop.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      RequestGatewaySocketAll.setRequestedBy(closure_0);
      return () => {
        canUIRequestGatewaySocket(dependencyMap[2]).stopRequest(closure_1_0);
      };
    }
  }, items);
}