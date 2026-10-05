// discord_app/modules/gateway/useRequestGatewaySocket.tsx
import RequestGatewaySocketAll from "RequestGatewaySocket.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let canUIRequestGatewaySocket;
      let closure_0;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      const obj2 = canUIRequestGatewaySocket(10015);
      canUIRequestGatewaySocket = obj2.useCanUIRequestGatewaySocket();
      if (cResult[0] === canUIRequestGatewaySocket) {
        let tmp3;
        let tmp4;
        if (cResult[1] === arg0) {
          tmp3 = cResult[2];
          tmp4 = cResult[3];
        }
        const effect = react.useEffect(tmp3, tmp4);
      }
      const fn = function u() {
        if (canUIRequestGatewaySocket) {
          let obj = RequestGatewaySocketAll;
          obj.setRequestedBy(closure_0);
          return () => {
            const obj = RequestGatewaySocketAll;
            obj.stopRequest(closure_1_0);
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
    }
  : (arg0) => {
      let canUIRequestGatewaySocket;
      let closure_0 = arg0;
      let obj = canUIRequestGatewaySocket(10015);
      canUIRequestGatewaySocket = obj.useCanUIRequestGatewaySocket();
      const items = [arg0, canUIRequestGatewaySocket];
      const effect = react.useEffect(() => {
        if (canUIRequestGatewaySocket) {
          let obj = RequestGatewaySocketAll;
          obj.setRequestedBy(closure_0);
          return () => {
            const obj = RequestGatewaySocketAll;
            obj.stopRequest(closure_1_0);
          };
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = tmp2;
