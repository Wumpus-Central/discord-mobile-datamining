// === Module 14147: useRequestGatewaySocket ===

// Module 14147 (useRequestGatewaySocket)
import _modDef10875 from "module_10875" /* 10875 */;
import closure_3 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  importDefault = arg0;
  const canUIRequestGatewaySocket = _modDef10875.useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = React.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      canUIRequestGatewaySocket(closure_1_2[2]).setRequestedBy(closure_0);
      return () => {
        closure_1_1(closure_1_2[2]).stopRequest(closure_0);
      };
    }
  }, items);
};