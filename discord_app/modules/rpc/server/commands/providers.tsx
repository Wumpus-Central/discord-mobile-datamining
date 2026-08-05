import { createRpcJoiSchemaObject } from "../../helpers/createRpcJoiSchemaObject.tsx";
import { recurseReplaceContentTree } from "../../RPCHelpers.tsx";
// discord_app/modules/rpc/server/commands/providers.tsx
import importDefaultResult from "sum";
import closure_5 from "set";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import items3 from "items3";
import sum from "sum";
import set from "RPC_SCOPE_CONFIG";

let AM_HARMONY_PRD_APPLICATION_ID;
let AM_HARMONY_STG_APPLICATION_ID;
let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_SCOPE_CONFIG;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c4 = importDefaultResult;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ AnalyticsLocations: closure_6, ComponentActions: error, PlatformTypes: metroImportAll } = ME);
({ AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID } = items3);
({ RPCCommands, RPCErrors: c9 } = sum);
const items = [AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID];
let set = new Set(items);
obj = { [RPCCommands.GET_PROVIDER_ACCESS_TOKEN]: obj };
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let obj = createRpcJoiSchemaObject(string);
    obj = { provider: null, connection_redirect: null };
    const requiredResult = obj.required();
    obj[0] = string.string().required();
    obj[1] = string.string();
    return requiredResult.keys(obj);
  },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    const provider = args.provider;
    let _require = provider;
    const connection_redirect = args.connection_redirect;
    let dependencyMap;
    let obj = _recurseReplaceContentTree;
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = _recurseReplaceContentTree;
    const validateApplicationResult = obj1.validateApplication(socket.application);
    const value = connection_redirect(4966).get(provider);
    dependencyMap = value;
    if (null == value) {
      obj = { errorCode: null };
      obj[0] = constants2.INVALID_PROVIDER;
      const _HermesInternal = HermesInternal;
      let tmp4Result = tmp4(10543);
      tmp4Result = new tmp4Result(obj, "Platform not found for provider \"" + provider + "\"");
      throw tmp4Result;
    } else if (provider !== constants.AMAZON_MUSIC) {
      obj = { errorCode: null };
      obj[0] = constants2.UNAUTHORIZED_FOR_APPLICATION;
      const tmp22 = new tmp4(10543)(obj, "Command not available for this application");
      throw tmp22;
    } else if (set.has(validateApplicationResult)) {
      _require = undefined;
      _require = importDefaultResult((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let c6 = 0;
        let c7 = 0;
        let c5 = 0;
        return (function*(arg0, arg1) {
          if (c7 === 2) {
            c7 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c7 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let handleConnectionsUpdate = tmp3;
                  let closure_2 = tmp7;
                  closure_2 = undefined;
                  const account = outer2_5.getAccount(null, callback);
                  if (null == account) {
                    handleConnectionsUpdate = function handleConnectionsUpdate(accounts) {
                      if (null != closure_2) {
                        accounts = accounts.accounts;
                        if (accounts == null) {
                          accounts = [];
                        }
                        const found = accounts.find((type) => type.type === type.type);
                        if (null != found) {
                          const obj = { access_token: null };
                          obj[0] = found.access_token;
                          callback(obj);
                          callback2(outer2_2[10]).unsubscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
                          const ComponentDispatch = callback(outer2_2[11]).ComponentDispatch;
                          ComponentDispatch.unsubscribe(constants.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
                          const obj2 = callback2(outer2_2[10]);
                        }
                      }
                    };
                    function handleConnectionsCallbackError() {
                      let tmp = callback2(outer2_2[9]);
                      tmp = new tmp({ errorCode: outer2_9.OAUTH2_ERROR }, "OAuth2 setup for \"" + callback + "\" failed");
                      callback2(tmp);
                      callback2(outer2_2[10]).unsubscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
                      const ComponentDispatch = callback(outer2_2[11]).ComponentDispatch;
                      ComponentDispatch.unsubscribe(constants.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
                    }
                    const subscription = connection_redirect(709).subscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
                    let ComponentDispatch = callback(1231).ComponentDispatch;
                    const subscription1 = ComponentDispatch.subscribe(outer2_7.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
                    const obj1 = { platformType: null, location: null, successRedirect: null };
                    obj1[0] = outer1_2.type;
                    obj1[1] = outer2_6.ACTIVITY_RPC;
                    obj1[2] = callback2;
                    connection_redirect(10406)(obj1);
                    const obj6 = connection_redirect(709);
                  } else {
                    let c5 = 1;
                    let obj3 = connection_redirect(5090);
                    c6 = 2;
                    c7 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = obj3.refreshAccessToken(outer1_2.type, account.id);
                    return obj2;
                  }
                }
              } else {
                if (1 === tmp7) {
                  c5 = 0;
                  callback2(handleConnectionsCallbackError);
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  closure_2 = arg1;
                  if (null != closure_2) {
                    obj = { access_token: null };
                    obj[0] = closure_2;
                    callback(obj);
                    c5 = 0;
                  }
                }
                const obj4 = { errorCode: null };
                obj4[0] = outer2_9.OAUTH2_ERROR;
                const tmp19 = new connection_redirect(10543)(obj4, "Refreshing access token did not return a new access token");
                throw tmp19;
              }
              c7 = 3;
            } catch (tmp42) {
              handleConnectionsCallbackError = tmp42;
              if (tmp4 === c5) {
                c7 = tmp2;
                throw tmp42;
              } else {
                c6 = tmp;
              }
            }
          }
        })();
      });
      const promise = new Promise(function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      });
      return promise;
    } else {
      obj1 = { errorCode: null };
      obj1[0] = constants2.UNAUTHORIZED_FOR_APPLICATION;
      const tmp10 = new tmp4(10543)(obj1, "Command not available for this application");
      throw tmp10;
    }
    let obj3 = connection_redirect(4966);
  }
};
items1 = [RPC_AUTHENTICATED_SCOPE];
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  validation(string) {
    let obj = createRpcJoiSchemaObject(string);
    obj = { provider: null };
    const requiredResult = obj.required();
    obj[0] = string.string().required();
    return requiredResult.keys(obj);
  },
  handler: null
};
items2 = [RPC_AUTHENTICATED_SCOPE];
let closure_3 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (function*(arg0) {
    if (id === 2) {
      id = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        id = 2;
        if (0 === type) {
          if (arg0 === 1) {
            id = 3;
            throw arg1;
          } else if (arg0 === 2) {
            id = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let dependencyMap = tmp5;
            let provider = tmp2;
            let socket;
            provider = undefined;
            socket = socket.socket;
            provider = socket.args.provider;
            dependencyMap = undefined;
            type = undefined;
            id = undefined;
            let account;
            type = 1;
            id = 1;
            return { value: "ct", done: "Array" };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            id = 3;
            throw arg1;
          } else if (arg0 === 2) {
            id = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            const result = socket(10548).validatePostMessageTransport(socket.transport);
            const obj14 = socket(10548);
            dependencyMap = socket(10548).validateApplication(socket.application);
            const obj15 = socket(10548);
            type = provider(4966).get(provider);
            if (null == type) {
              const obj2 = { errorCode: null };
              obj2[0] = closure_9.INVALID_PROVIDER;
              const _HermesInternal = HermesInternal;
              let tmp59 = provider(10543);
              tmp59 = new tmp59(obj2, "Platform not found for provider \"" + provider + "\"");
              throw tmp59;
            } else if (provider !== constants.AMAZON_MUSIC) {
              const obj3 = { errorCode: null };
              obj3[0] = closure_9.UNAUTHORIZED_FOR_APPLICATION;
              const tmp53 = new provider(10543)(obj3, "Command not available for this application");
              throw tmp53;
            } else if (set.has(dependencyMap)) {
              id = account.getAccount(null, provider);
              if (null == id) {
                const obj4 = { errorCode: null };
                obj4[0] = closure_9.NO_CONNECTION_FOUND;
                const tmp44 = new provider(10543)(obj4, "No connection found");
                throw tmp44;
              } else {
                let obj5 = provider(5090);
                type = 2;
                id = 1;
                obj5 = { value: null, done: false };
                obj5[0] = obj5.refreshAccessToken(type.type, id.id);
                return obj5;
              }
            } else {
              const obj6 = { errorCode: null };
              obj6[0] = closure_9.UNAUTHORIZED_FOR_APPLICATION;
              const tmp24 = new provider(10543)(obj6, "Command not available for this application");
              throw tmp24;
            }
            const obj16 = provider(4966);
          }
        } else if (arg0 === 1) {
          id = 3;
          throw arg1;
        } else if (arg0 === 2) {
          id = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        } else {
          account = arg1;
          if (null == account) {
            const obj8 = { errorCode: null };
            obj8[0] = closure_9.OAUTH2_ERROR;
            const tmp15 = new provider(10543)(obj8, "Refreshing access token did not return a new access token");
            throw tmp15;
          } else {
            obj = { access_token: null };
            obj[0] = account;
            id = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = obj;
            return obj9;
          }
        }
      } catch (tmp69) {
        id = tmp;
        throw tmp69;
      }
    }
  })();
  iter.next();
  return iter;
});
obj[2] = function() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj[RPCCommands.MAYBE_GET_PROVIDER_ACCESS_TOKEN] = obj;
let result = set.fileFinishedImporting("modules/rpc/server/commands/providers.tsx");

export default obj;