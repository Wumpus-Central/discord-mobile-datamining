// === Module 13925: useRequestGatewaySocket ===

// Module 13925 (useRequestGatewaySocket)
import _modDef10501 from "module_10501" /* 10501 */;
import noop from "noop" /* 19 */;

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