// === Module 15841: gameProfile ===

// Module 15841 (gameProfile)
import createSocketGateDefault from "createSocketGate" /* 15838 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const Constants = fn(1071);
({ RPCCommands, RPCErrors: closure_4 } = Constants);
let closure_5 = createSocketGateDefault({ cooldownMs: 1000 });
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15822);
obj[RPCCommands.OPEN_GAME_PROFILE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_GAME_PROFILE, {
  scope: fn(5766).RPC_EMBEDDED_APP_SCOPE,
  handler(arg0) {
    ({ socket: require, args } = arg0);
    ({ game_id: importDefault, application_id: dependencyMap } = args);
    return (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const iframeId = v1(dependencyMap[5])(require).iframeId;
              if (null == importDefault === (null == dependencyMap)) {
                const obj4 = { errorCode: constants.INVALID_COMMAND };
                const tmp11 = new tmp18(dependencyMap[6])(obj4, "Pass exactly one of game_id or application_id");
                throw tmp11;
              } else {
                v1 = 1;
                c0 = 1;
                const obj5 = {
                  value: closure_1_5.runExclusive(require, asyncGeneratorStep(async () => {
                              const gameId = tmp2;
                              closure_0 = tmp5;
                              await v1(15842)({ gameId, applicationId });
                              closure_128_0 = value;
                              if (null != closure_128_0) {
                                if (!obj10.isGameDisabled(closure_128_0)) {
                                  let appContextForIframeId = null;
                                  if (null != obj.tryValidateEmbeddedAppFrame(closure_0)) {
                                    appContextForIframeId = iframeId(15843).getAppContextForIframeId(closure_129_0);
                                    iframeId(15843);
                                  }
                                  closure_128_1 = appContextForIframeId;
                                  if (null != closure_128_1) {
                                    const obj9 = { gameId: closure_128_0.id, gameProfileModalChecks: null, source: null, appContext: null };
                                    obj9.gameProfileModalChecks = { shouldOpenGameProfile: true, gameId: closure_128_0.id };
                                    obj9.source = iframeId(8712).GameProfileSources.Frame;
                                    obj9.appContext = closure_128_1;
                                    v1(8707).openGameProfileModal(obj9);
                                    v1(8707);
                                  }
                                  c3 = 3;
                                  obj = iframeId(15815);
                                }
                                obj10 = iframeId(8704);
                              }
                              return { opened: false };
                            }), { opened: false }),
                  done: false
                };
                return obj5;
              }
              tmp18 = v1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c0 = 3;
            let obj = { value, done: true };
            return obj;
          }
        } catch (tmp13) {
          c0 = tmp;
          throw tmp13;
        }
      }
    })();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/gameProfile.tsx");

export default obj;