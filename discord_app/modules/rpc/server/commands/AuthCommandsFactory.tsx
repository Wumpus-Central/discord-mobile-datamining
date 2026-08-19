// discord_app/modules/rpc/server/commands/AuthCommandsFactory.tsx
import obj132Default from "../../../../utils/Durations.tsx";
import prototypeDefault from "../../RPCError.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import addApplication from "../../../applications/ApplicationStore.tsx";
import createExecutable from "../../../../records/ApplicationRecord.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import RPC_SCOPE_CONFIG from "../../Constants.tsx";
import ME from "../../../../Constants.tsx";
import importDefaultResult from "../../../../../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx";

const require = fn;
function authorizeWithPrompt(arg0, socket, signal) {
  const self = this;
  const apply = _authorizeWithPrompt.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _authorizeWithPrompt() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c11 = 0;
    c12 = 0;
    c9 = 0;
    const iter = (function*(arg0, location) {
      if (c12 === 2) {
        c12 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp9 === 3) {
        if (arg0 === 1) {
          throw location;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = location;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw location;
            } else if (arg0 === 2) {
              c12 = 3;
              obj = { value: null, done: true };
              obj[0] = location;
              return obj;
            } else {
              let currentUser = tmp4;
              c7 = tmp10;
              let callback;
              response_type = undefined;
              let callback2;
              dependencyMap = undefined;
              createFromServer = undefined;
              closure_5 = undefined;
              let application;
              c7 = undefined;
              currentUser = undefined;
              c9 = undefined;
              c10 = undefined;
              c11 = undefined;
              c12 = undefined;
              c13 = undefined;
              c14 = undefined;
              c15 = undefined;
              c16 = undefined;
              let dependencyMap2;
              closure_18 = undefined;
              ({ client_id: c0, response_type } = callback);
              if (response_type === undefined) {
                response_type = "code";
              }
              ({ redirect_uri: c2, code_challenge: c3, code_challenge_method: createFromServer, state: closure_5, nonce: closure_6, scope: c7, permissions: c8, guild_id: c9, channel_id: c10, prompt: c11, disable_guild_select: c12, integration_type: c13, pid: c14, signal: c15, isSocketRpcPrivateScope: c16 } = callback);
              dependencyMap2 = response_type;
              closure_18 = callback2;
              let USER_INSTALL;
              closure_20 = undefined;
              let disclosures;
              let allAcked;
              closure_23 = undefined;
              let application2;
              closure_25 = undefined;
              let dependencyMap3;
              closure_27 = undefined;
              let body;
              body = undefined;
              let NONE;
              let map;
              c11 = 1;
              c12 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp10) {
              if (arg0 === 1) {
                c12 = 3;
                throw location;
              } else if (arg0 === 2) {
                c12 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = location;
                return obj1;
              } else {
                let aborted;
                if (c15 != null) {
                  aborted = c15.aborted;
                }
                if (aborted) {
                  const obj2 = { errorCode: null };
                  obj2[0] = c15.UNKNOWN_ERROR;
                  const tmp211 = new response_type(8752)(obj2, "Request aborted");
                  throw tmp211;
                } else if (null == callback) {
                  const obj3 = { errorCode: null };
                  obj3[0] = c15.OAUTH2_ERROR;
                  const tmp202 = new response_type(8752)(obj3, "No Client ID provided");
                  throw tmp202;
                } else {
                  if (!c16) {
                    if (null != callback2) {
                      const obj4 = { errorCode: null };
                      obj4[0] = c15.OAUTH2_ERROR;
                      const tmp146 = new response_type(8752)(obj4, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
                      throw tmp146;
                    }
                  }
                  closure_23 = [];
                  if (typeof c7 === "string") {
                    const parts = c7.split(" ");
                    closure_23 = parts.filter((item, index) => item.length > 0);
                  } else {
                    const _Array = Array;
                    if (Array.isArray(c7)) {
                      closure_23 = c7;
                    }
                  }
                  if (null == currentUser.getCurrentUser()) {
                    const obj5 = { errorCode: null };
                    obj5[0] = c15.OAUTH2_ERROR;
                    const tmp193 = new response_type(8752)(obj5, "Client is not logged in");
                    throw tmp193;
                  } else {
                    if (null != c13) {
                      const _Number = Number;
                      USER_INSTALL = Number(c13);
                    } else {
                      function isUserInstallable(closure_24) {
                        obj = _undefined(table[11]);
                        let hasApplicationFlagResult = obj.hasApplicationFlag(obj, constants.EMBEDDED);
                        if (hasApplicationFlagResult) {
                          let tmp5;
                          if (obj != null) {
                            const integrationTypesConfig = obj.integrationTypesConfig;
                            if (integrationTypesConfig != null) {
                              tmp5 = integrationTypesConfig[_undefined(undefined, table[12]).ApplicationIntegrationType.USER_INSTALL];
                            }
                          }
                          hasApplicationFlagResult = null != tmp5;
                        }
                        return hasApplicationFlagResult;
                      }
                      application2 = application.getApplication(callback);
                      if (!isUserInstallable(application2)) {
                        application = isUserInstallable;
                        closure_5 = c7;
                        createFromServer = c7.createFromServer;
                        let obj18 = callback(8736);
                        c11 = 3;
                        c12 = 1;
                        const obj6 = { value: null, done: false };
                        obj6[0] = obj18.fetchApplication(callback, c15);
                        return obj6;
                      }
                    }
                    c9 = 1;
                    const obj7 = { clientId: null, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, integrationType: null, signal: null };
                    obj7[0] = closure_0;
                    obj7[1] = closure_1_23;
                    obj7[2] = closure_1;
                    obj7[3] = closure_2;
                    obj7[4] = closure_1_3;
                    obj7[5] = closure_1_4;
                    obj7[6] = closure_1_5;
                    obj7[7] = closure_1_19;
                    obj7[8] = closure_1_15;
                    const items = [callback(9772).fetchAuthorization(obj7), ];
                    const obj21 = callback(9772);
                    items[1] = callback(9768).getDisclosures(closure_0);
                    Promise.all(items);
                    c11 = 4;
                    c12 = 1;
                    const obj23 = callback(9768);
                  }
                }
              }
            } else if (2 === tmp10) {
              c9 = 0;
              body = c10.body;
              const obj8 = { errorCode: null };
              obj8[0] = c15.OAUTH2_ERROR;
              let str3;
              let tmp128 = response_type(8752);
              if (body != null) {
                str3 = body.message;
              }
              if (!str3) {
                str3 = "Unknown Error";
              }
              const _HermesInternal2 = HermesInternal;
              tmp128 = new tmp128(obj8, "OAuth2 Authorization Error: " + str3);
              throw tmp128;
            } else if (3 === tmp10) {
              if (arg0 === 1) {
                c12 = 3;
                throw location;
              } else if (arg0 === 2) {
                c12 = 3;
                let obj9 = { value: null, done: true };
                obj9[0] = location;
                return obj9;
              } else {
                const tmp118 = createFromServer(location);
                application2 = tmp118;
                if (!application(tmp118)) {
                  USER_INSTALL = callback(8770).ApplicationIntegrationType.GUILD_INSTALL;
                }
              }
            } else {
              if (4 === tmp10) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw location;
                } else if (arg0 === 2) {
                  c9 = 0;
                  c12 = 3;
                  const obj10 = { value: null, done: true };
                  obj10[0] = location;
                  return obj10;
                } else {
                  closure_25 = location;
                  dependencyMap3 = createFromServer(closure_25, 2);
                  closure_20 = 32;
                  closure_27 = 5;
                  disclosures = closure_27.disclosures;
                  allAcked = closure_27.allAcked;
                  c9 = 0;
                  if (c11 === callback(9774).OAuth2Prompts.NONE) {
                    if (null != closure_20) {
                      if (closure_20.authorized) {
                        if (allAcked) {
                          c9 = 2;
                          let obj11 = callback(9772);
                          obj11 = { authorize: true, clientId: null, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, nonce: null, integrationType: null };
                          obj11[1] = callback;
                          obj11[2] = closure_23;
                          obj11[3] = response_type;
                          obj11[4] = callback2;
                          obj11[5] = dependencyMap;
                          obj11[6] = createFromServer;
                          obj11[7] = closure_5;
                          obj11[8] = application;
                          obj11[9] = USER_INSTALL;
                          c11 = 6;
                          c12 = 1;
                          const obj12 = { value: null, done: false };
                          obj12[0] = obj11.authorize(obj11);
                          return obj12;
                        }
                      }
                    }
                  }
                  if (closure_18 != null) {
                    tmp43(closure_20.application, c10, c14);
                  }
                  NONE = callback2(4026).NONE;
                  c9 = 3;
                  const deserializer = callback2(506);
                  dependencyMap = currentUser;
                  if (currentUser == null) {
                    dependencyMap = 0;
                  }
                  NONE = deserializer.deserialize(dependencyMap);
                  c9 = 0;
                }
              } else if (5 === tmp10) {
                c9 = 0;
                body = c10.body;
                const obj13 = { errorCode: null };
                obj13[0] = c15.OAUTH2_ERROR;
                let str2;
                let tmp29 = response_type(8752);
                if (body != null) {
                  str2 = body.message;
                }
                if (!str2) {
                  str2 = "Unknown Error";
                }
                const _HermesInternal = HermesInternal;
                tmp29 = new tmp29(obj13, "OAuth2 Authorize Error: " + str2);
                throw tmp29;
              } else if (6 === tmp10) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw location;
                } else if (arg0 === 2) {
                  c9 = 0;
                  c12 = 3;
                  const obj14 = { value: null, done: true };
                  obj14[0] = location;
                  return obj14;
                } else {
                  c9 = 0;
                  c12 = 3;
                  const obj15 = { value: null, done: true };
                  obj15[0] = location.location;
                  return obj15;
                }
              } else {
                if (7 === tmp10) {
                  c9 = 0;
                } else if (arg0 === 1) {
                  c12 = 3;
                  throw location;
                } else if (arg0 === 2) {
                  c12 = 3;
                  const obj16 = { value: null, done: true };
                  obj16[0] = location;
                  return obj16;
                } else {
                  let aborted1;
                  if (c15 != null) {
                    aborted1 = c15.aborted;
                  }
                  if (aborted1) {
                    obj = { errorCode: null };
                    obj[0] = c15.UNKNOWN_ERROR;
                    const tmp20 = new response_type(8752)(obj, "Request aborted");
                    throw tmp20;
                  }
                }
                const obj17 = { clientId: null, authorizations: null, scopes: null, parsedPermissions: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, guildId: null, channelId: null, prompt: null, disableGuildSelect: null, disclosures: null, integrationType: null, pid: null, signal: null };
                obj17[0] = callback;
                obj17[1] = map;
                obj17[2] = closure_23;
                obj17[3] = NONE;
                obj17[4] = response_type;
                obj17[5] = callback2;
                obj17[6] = dependencyMap;
                obj17[7] = createFromServer;
                obj17[8] = closure_5;
                obj17[9] = c9;
                obj17[10] = c10;
                obj17[11] = c11;
                obj17[12] = c12;
                obj17[13] = disclosures;
                obj17[14] = USER_INSTALL;
                obj17[15] = c14;
                obj17[16] = c15;
                c12 = 3;
                obj18 = { value: null, done: true };
                obj18[0] = dependencyMap2(obj17);
                return obj18;
              }
              map = undefined;
              let hasItem = null != closure_20.integration_type;
              if (hasItem) {
                const _Object = Object;
                const values = Object.values(callback(8770).ApplicationIntegrationType);
                hasItem = values.includes(closure_20.integration_type);
              }
              if (hasItem) {
                const _Map = Map;
                map = new Map();
                const result = map.set(closure_20.integration_type, closure_20);
              }
              if (null != dependencyMap2[closure_20.application.id]) {
                obj9 = dependencyMap2[closure_20.application.id];
                c11 = 8;
                c12 = 1;
                const obj19 = { value: null, done: false };
                obj19[0] = obj9.process();
                return obj19;
              }
            }
            USER_INSTALL = callback(8770).ApplicationIntegrationType.USER_INSTALL;
          }
        } catch (tmp215) {
          c10 = tmp215;
          if (tmp5 === c9) {
            c12 = tmp3;
            throw tmp215;
          } else if (tmp2 === tmp217) {
            c11 = tmp;
          } else if (tmp === tmp217) {
            c11 = tmp7;
          } else {
            c11 = tmp6;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function authenticate(authorization, accessToken) {
  const _require = authorization;
  importDefault = accessToken;
  if (authorization.authorization.accessToken) {
    obj = { errorCode: null };
    obj[0] = constants2.INVALID_COMMAND;
    const tmp19 = new prototypeDefault(obj, "Already authenticated");
    throw tmp19;
  } else if (authorization.authorization.authing) {
    obj = { errorCode: null };
    obj[0] = constants2.INVALID_COMMAND;
    const tmp11 = new prototypeDefault(obj, "Already authenticating");
    throw tmp11;
  } else {
    authorization.authorization.authing = true;
    const HTTP = require("../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: null, headers: null, oldFormErrors: true, rejectWithError: false };
    obj[0] = OAUTH2_CURRENT_AUTH.OAUTH2_CURRENT_AUTH;
    obj1 = { Authorization: null };
    const _HermesInternal = HermesInternal;
    obj1[0] = "Bearer " + accessToken;
    obj[1] = obj1;
    const value = HTTP.get(obj);
    return value.then((result) => {
      authorization.authorization.authing = false;
      const body = result.body;
      ({ user, scopes, expires } = body);
      if (authorization.application.id !== body.application.id) {
        obj = { errorCode: null };
        obj[0] = closure_1_15.INVALID_CLIENTID;
        const tmp16 = new callback(dependencyMap[10])(obj, "Application does not match the connection's");
        throw tmp16;
      } else {
        const currentUser = closure_1_8.getCurrentUser();
        if (null != currentUser) {
          if (user) {
            if (currentUser.id === user.id) {
              const items = [];
              items[HermesBuiltin.arraySpread(scopes, HermesBuiltin.arraySpread(authorization.authorization.scopes, 0))] = closure_1_10;
              authorization.authorization.scopes = items;
              authorization.authorization.accessToken = callback;
              const _Date = Date;
              const date = new Date(expires);
              authorization.authorization.expires = date;
              obj = { type: "RPC_APP_AUTHENTICATED", socketId: null, application: null };
              ({ id: obj4[1], application: obj4[2] } = authorization);
              callback(dependencyMap[20]).dispatch(obj);
              obj1 = {};
              const merged = Object.assign(result.body);
              obj1.access_token = callback;
              return obj1;
            }
          }
        }
        obj = { errorCode: null };
        obj[0] = closure_1_15.INVALID_TOKEN;
        const tmp8 = new callback(dependencyMap[10])(obj, "Token does not match current user");
        throw tmp8;
      }
    }, () => {
      let tmp = callback(dependencyMap[10]);
      tmp = new tmp({ errorCode: closure_1_15.INVALID_TOKEN }, "Invalid access token: " + callback);
      throw tmp;
    }).catch((error) => {
      authorization.authorization.authing = false;
      throw error;
    });
  }
}
({ TransportTypes: c9, RPC_AUTHENTICATED_SCOPE: c10, RPC_PRIVATE_SCOPE: unpackModuleId } = RPC_SCOPE_CONFIG);
({ ApplicationFlags: closure_12, Endpoints: map1, RPCCommands: closure_14, RPCErrors: closure_15 } = ME);
const CachedTokens = "CachedTokens";
let obj = { "1273616940451102832": null };
importDefaultResult = new importDefaultResult(2, obj132Default.Millis.MINUTE);
obj[0] = importDefaultResult;
let result = require("obj132").fileFinishedImporting("modules/rpc/server/commands/AuthCommandsFactory.tsx");

export default function createAuthCommandHandlers(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  obj = {
    handler(socket) {
      socket = socket.socket;
      const signal = socket.signal;
      const access_token = socket.args.access_token;
      let id;
      let IDENTIFY;
      let _authorize;
      if (null == access_token) {
        if (socket.transport === closure_1_9.IPC) {
          id = socket.application.id;
          if (null == id) {
            obj = { errorCode: null };
            obj[0] = closure_1_15.INVALID_COMMAND;
            const tmp29 = new callback2(dependencyMap[10])(obj, "No application.");
            throw tmp29;
          } else {
            IDENTIFY = callback(dependencyMap[22]).OAuth2Scopes.IDENTIFY;
            _authorize = function _authorize() {

            };
            let Storage2 = callback(dependencyMap[9]).Storage;
            const value = Storage2.get(CachedTokens);
            let accessToken;
            if (null != value) {
              if (null != value[id]) {
                if (value[id].scope === IDENTIFY) {
                  let _Date = Date;
                  if (tmp14.expires > Date.now()) {
                    accessToken = tmp14.accessToken;
                  }
                }
                delete tmp[tmp2];
                let Storage = callback(dependencyMap[9]).Storage;
                let result = Storage.set(CachedTokens, value);
              }
            }
            if (null != accessToken) {
              let catchPromise = authenticate(socket, accessToken).catch((error) => {
                let Storage = socket(dependencyMap[9]).Storage;
                obj = Storage.get(CachedTokens);
                if (obj == null) {
                  obj = {};
                }
                delete tmp2[tmp];
                let Storage2 = socket(dependencyMap[9]).Storage;
                let result = Storage2.set(CachedTokens, obj);
                if (typeof _authorize !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                obj = { client_id: id, scope: IDENTIFY, response_type: "token", signal, isSocketRpcPrivateScope: false };
                return authorizeWithPrompt(obj, socket, signal).then((result) => {
                  if (null == result) {
                    obj = { errorCode: null };
                    obj[0] = closure_2_15.UNKNOWN_ERROR;
                    const tmp22 = new signal(IDENTIFY[10])(obj, "Unknown error occurred");
                    throw tmp22;
                  } else {
                    const parts = result.split(/#|\?/);
                    const parsed = signal(IDENTIFY[23]).parse(parts[parts.length - 1]);
                    if (null != parsed.error) {
                      obj = { errorCode: null };
                      obj[0] = closure_2_15.OAUTH2_ERROR;
                      let str = parsed.error_description;
                      let tmp8 = signal(IDENTIFY[10]);
                      if (str == null) {
                        str = "unknown error";
                      }
                      const _HermesInternal = HermesInternal;
                      tmp8 = new tmp8(obj, "OAuth2 Error: " + parsed.error + ": " + str);
                      throw tmp8;
                    } else {
                      ({ access_token, scope, expires_in } = parsed);
                      const Storage2 = socket(IDENTIFY[9]).Storage;
                      obj1 = Storage2.get(closure_2_16);
                      if (obj1 == null) {
                        obj1 = {};
                      }
                      const obj2 = { accessToken: null, scope: null, expires: null };
                      obj2[0] = access_token;
                      obj2[1] = scope;
                      const _Date = Date;
                      obj2[2] = Date.now() + expires_in;
                      obj1[closure_2] = obj2;
                      const Storage = socket(IDENTIFY[9]).Storage;
                      result = Storage.set(closure_2_16, obj1);
                      return closure_2_20(closure_0, parsed.access_token);
                    }
                    const obj5 = signal(IDENTIFY[23]);
                  }
                });
              });
              const promise2 = authenticate(socket, accessToken);
            } else {
              obj = { client_id: null, scope: null, response_type: "token", signal: null, isSocketRpcPrivateScope: false };
              obj[0] = id;
              obj[1] = IDENTIFY;
              obj[3] = signal;
              catchPromise = authorizeWithPrompt(obj, socket, signal).then((result) => {
                if (null == result) {
                  obj = { errorCode: null };
                  obj[0] = closure_2_15.UNKNOWN_ERROR;
                  const tmp22 = new signal(IDENTIFY[10])(obj, "Unknown error occurred");
                  throw tmp22;
                } else {
                  const parts = result.split(/#|\?/);
                  const parsed = signal(IDENTIFY[23]).parse(parts[parts.length - 1]);
                  if (null != parsed.error) {
                    obj = { errorCode: null };
                    obj[0] = closure_2_15.OAUTH2_ERROR;
                    let str = parsed.error_description;
                    let tmp8 = signal(IDENTIFY[10]);
                    if (str == null) {
                      str = "unknown error";
                    }
                    const _HermesInternal = HermesInternal;
                    tmp8 = new tmp8(obj, "OAuth2 Error: " + parsed.error + ": " + str);
                    throw tmp8;
                  } else {
                    ({ access_token, scope, expires_in } = parsed);
                    const Storage2 = socket(IDENTIFY[9]).Storage;
                    obj1 = Storage2.get(closure_2_16);
                    if (obj1 == null) {
                      obj1 = {};
                    }
                    const obj2 = { accessToken: null, scope: null, expires: null };
                    obj2[0] = access_token;
                    obj2[1] = scope;
                    const _Date = Date;
                    obj2[2] = Date.now() + expires_in;
                    obj1[closure_2] = obj2;
                    const Storage = socket(IDENTIFY[9]).Storage;
                    result = Storage.set(closure_2_16, obj1);
                    return closure_2_20(closure_0, parsed.access_token);
                  }
                  const obj5 = signal(IDENTIFY[23]);
                }
              });
              const promise = authorizeWithPrompt(obj, socket, signal);
            }
            return catchPromise;
          }
        }
      }
      if (null == access_token) {
        obj = { errorCode: null };
        obj[0] = closure_1_15.INVALID_TOKEN;
        const tmp11 = new callback2(dependencyMap[10])(obj, "No access token provided");
        throw tmp11;
      } else {
        return authenticate(socket, access_token);
      }
    }
  };
  obj[constants.AUTHENTICATE] = require("../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx").createRPCCommand(constants.AUTHENTICATE, obj);
  obj[constants.AUTHORIZE] = {
    handler(socket) {
      socket = socket.socket;
      const args = socket.args;
      let hasItem;
      const client_id = args.client_id;
      if (client_id) {
        if (null != socket.authorization.accessToken) {
          obj = { errorCode: null };
          obj[0] = closure_1_15.INVALID_COMMAND;
          const tmp50 = new callback2(dependencyMap[10])(obj, "Already authenticated");
          throw tmp50;
        } else if (socket.authorization.authing) {
          obj = { errorCode: null };
          obj[0] = closure_1_15.INVALID_COMMAND;
          const tmp42 = new callback2(dependencyMap[10])(obj, "Already authing");
          throw tmp42;
        } else {
          socket.authorization.authing = true;
          if ("token" === args.response_type) {
            socket.authorization.authing = false;
            obj1 = { errorCode: null };
            obj1[0] = closure_1_15.INVALID_COMMAND;
            const tmp34 = new callback2(dependencyMap[10])(obj1, "Authorization response_type \"token\" is not supported");
            throw tmp34;
          } else {
            const scopes = socket.authorization.scopes;
            hasItem = scopes.includes(closure_1_11);
            if (!hasItem) {
              if (socket.application.id !== client_id) {
                socket.authorization.authing = false;
                let obj2 = { errorCode: null };
                obj2[0] = closure_1_15.INVALID_CLIENTID;
                const tmp19 = new callback2(dependencyMap[10])(obj2, "Application does not match the connection's");
                throw tmp19;
              }
            }
            delete tmp2[tmp];
            const obj3 = {};
            const merged = Object.assign(args);
            obj3.scope = args.scopes || args.scope;
            obj3.signal = tmp3;
            obj3.isSocketRpcPrivateScope = hasItem;
            const promise = authorizeWithPrompt(obj3, socket, hasItem);
            return authorizeWithPrompt(obj3, socket, hasItem).then((result) => {
              socket.authorization.authing = false;
              if (null == result) {
                obj = { errorCode: null };
                obj[0] = closure_1_15.UNKNOWN_ERROR;
                const tmp25 = new hasItem(closure_1_3[10])(obj, "Unknown error occurred");
                throw tmp25;
              } else {
                const _URL = URL;
                const uRL = new URL(result);
                const searchParams3 = uRL.searchParams;
                let value = searchParams3.get("code");
                if (hasItem) {
                  obj = { code: null, location: null };
                  obj[0] = value;
                  obj[1] = result;
                  return obj;
                } else {
                  const searchParams = uRL.searchParams;
                  value = searchParams.get("error");
                  if (null != value) {
                    if ("" !== value) {
                      const searchParams2 = uRL.searchParams;
                      let str5 = searchParams2.get("error_description");
                      if (str5 == null) {
                        str5 = "unknown error";
                      }
                      obj1 = { errorCode: null };
                      obj1[0] = closure_1_15.OAUTH2_ERROR;
                      const _HermesInternal = HermesInternal;
                      let tmp12 = hasItem(closure_1_3[10]);
                      tmp12 = new tmp12(obj1, "OAuth2 Error: " + value + ": " + str5);
                      throw tmp12;
                    }
                  }
                  if (null == value) {
                    const obj2 = { errorCode: null };
                    obj2[0] = closure_1_15.OAUTH2_ERROR;
                    const tmp8 = new hasItem(closure_1_3[10])(obj2, "OAuth2 Error: Unable to find auth code");
                    throw tmp8;
                  } else {
                    obj = { code: null };
                    obj[0] = value;
                    return obj;
                  }
                }
              }
            }).catch((error) => {
              socket.authorization.authing = false;
              throw error;
            });
          }
        }
      } else {
        obj = { errorCode: null };
        obj[0] = closure_1_15.INVALID_CLIENTID;
        const tmp10 = new callback2(dependencyMap[10])(obj, "No client id provided");
        throw tmp10;
      }
    }
  };
  return obj;
};
export const AUTHORIZE_PROMPT_THROTTLERS = obj;