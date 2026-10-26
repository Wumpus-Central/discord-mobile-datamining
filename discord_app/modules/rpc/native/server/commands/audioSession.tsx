// discord_app/modules/rpc/native/server/commands/audioSession.tsx
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let Constants = fn(6378);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1087);
({ RPCCommands, RPCErrors: closure_4 } = Constants);
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15724);
let obj3 = {
  scope: null,
  handler(socket) {
    socket = socket.socket;
    const type = socket.args.type;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+352" };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              if (obj9.isIOS()) {
                const webViewProxy = tmp19(dependencyMap[7]).getWebViewProxy(tmp21(dependencyMap[6])(socket).iframeId);
                const _JSON = JSON;
                const _HermesInternal = HermesInternal;
                c1 = 1;
                v3 = 1;
                const obj4 = {
                  value: webViewProxy.injectJavaScript(
                    "try { if (navigator.audioSession != null) navigator.audioSession.type = " +
                      JSON.stringify(type) +
                      "; } catch (e) {} true;",
                  ),
                  done: false,
                };
                return obj4;
              } else {
                const obj5 = { errorCode: constants.INVALID_COMMAND };
                const tmp9 = new tmp21(dependencyMap[5])(obj5, "Audio session type is only supported on iOS");
                throw tmp9;
              }
              obj9 = v3(dependencyMap[4]);
              tmp19 = v3;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            v3 = 3;
            const obj = { value: { success: true }, done: true };
            return obj;
          }
        } catch (tmp14) {
          v3 = tmp;
          throw tmp14;
        }
      }
    })();
  },
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.SET_AUDIO_SESSION_TYPE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.SET_AUDIO_SESSION_TYPE,
  obj3,
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/audioSession.tsx");

export default obj;
