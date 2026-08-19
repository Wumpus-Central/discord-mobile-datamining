// discord_app/modules/gateway/useRequestGatewaySocket.tsx
import _modDef10501 from "../app_state/DiscordAppState.native.tsx";
import noop from "../../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  importDefault = arg0;
  const canUIRequestGatewaySocket = _modDef10501.useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = React.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      canUIRequestGatewaySocket(dependencyMap[2]).setRequestedBy(closure_0);
      return () => {
        canUIRequestGatewaySocket(closure_1_2[2]).stopRequest(closure_0);
      };
    }
  }, items);
};