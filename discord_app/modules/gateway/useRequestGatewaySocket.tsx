// discord_app/modules/gateway/useRequestGatewaySocket.tsx
import noop from "noop";
import { DiscordAppState.native } from "../app_state/DiscordAppState.native.tsx";

const result = require("setRequestedBy").fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  const importDefault = arg0;
  const canUIRequestGatewaySocket = DiscordAppState.native.useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = React.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      canUIRequestGatewaySocket(outer1_2[2]).setRequestedBy(closure_0);
      return () => {
        outer1_1(outer1_2[2]).stopRequest(closure_0);
      };
    }
  }, items);
};