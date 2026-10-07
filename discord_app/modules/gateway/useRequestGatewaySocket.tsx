// discord_app/modules/gateway/useRequestGatewaySocket.tsx
import RequestGatewaySocketAll from "RequestGatewaySocket.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      const obj = require("c");
      canUIRequestGatewaySocket = canUIRequestGatewaySocket(10028).useCanUIRequestGatewaySocket();
      if (cResult[0] === canUIRequestGatewaySocket) {
        if (cResult[1] === arg0) {
          let tmp3 = cResult[2];
          let tmp4 = cResult[3];
        }
        const effect = noop.useEffect(tmp3, tmp4);
      }
      const fn = function u() {
        if (canUIRequestGatewaySocket) {
          RequestGatewaySocketAll.setRequestedBy(closure_0);
          return () => {
            RequestGatewaySocketAll.stopRequest(closure_1_0);
          };
        }
      };
      const items = [arg0, canUIRequestGatewaySocket];
      cResult[0] = canUIRequestGatewaySocket;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items;
      tmp4 = items;
      tmp3 = fn;
      const obj2 = canUIRequestGatewaySocket(10028);
    }
  : (arg0) => {
      closure_0 = arg0;
      canUIRequestGatewaySocket = canUIRequestGatewaySocket(10028).useCanUIRequestGatewaySocket();
      const items = [arg0, canUIRequestGatewaySocket];
      const effect = noop.useEffect(() => {
        if (canUIRequestGatewaySocket) {
          RequestGatewaySocketAll.setRequestedBy(closure_0);
          return () => {
            RequestGatewaySocketAll.stopRequest(closure_1_0);
          };
        }
      }, items);
    };
