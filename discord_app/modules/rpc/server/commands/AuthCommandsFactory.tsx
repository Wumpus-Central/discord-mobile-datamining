// === Module 14515: authorizeWithPrompt ===

// Module 14515 (authorizeWithPrompt)
import setDefault from "set" /* 1090 */;
import prototypeDefault from "prototype" /* 9554 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "addApplication" /* 4788 */;
import closure_7 from "createExecutable" /* 1918 */;
import closure_8 from "mergeGuildAvatar" /* 1371 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4465 */;
import ME from "ME" /* 1074 */;
import importDefaultResult from "_processQueue" /* 9561 */;

const require = arg1;
function authorizeWithPrompt() {
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
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = location;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp8;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp9 === 3) {
          if (arg0 === 1) {
            throw location;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = location;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                throwTypeErrorResult = callback;
                ({ client_id: c0, response_type } = callback);
                if (response_type === undefined) {
                  response_type = "code";
                }
                ({ redirect_uri: c2, code_challenge: c3, code_challenge_method: createFromServer, state: closure_5, nonce: closure_6, scope: c7, permissions: c8, guild_id: c9, channel_id: c10, prompt: c11, disable_guild_select: c12, integration_type: c13, pid: c14, signal: c15, isSocketRpcPrivateScope: c16 } = throwTypeErrorResult);
                throwTypeErrorResult = response_type;
                dependencyMap2 = response_type;
                throwTypeErrorResult = callback2;
                closure_18 = callback2;
                let USER_INSTALL;
                closure_20 = undefined;
                let disclosures;
                let allAcked;
                closure_23 = undefined;
                throwTypeErrorResult = undefined;
                closure_25 = undefined;
                let dependencyMap3;
                closure_27 = undefined;
                let body;
                body = undefined;
                let NONE;
                let map;
                c11 = 1;
                c12 = 1;
                return { value: "PX_16", done: true };
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
                  throwTypeErrorResult = c7;
                  throwTypeErrorResult = undefined;
                  if (c15 != null) {
                    throwTypeErrorResult = c15.aborted;
                  }
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = currentUser;
                    throwTypeErrorResult = response_type;
                    throwTypeErrorResult = dependencyMap;
                    const obj2 = { errorCode: null };
                    throwTypeErrorResult = c15;
                    obj2[0] = c15.UNKNOWN_ERROR;
                    throwTypeErrorResult = new.target;
                    throwTypeErrorResult = new.target;
                    throwTypeErrorResult = obj2;
                    throwTypeErrorResult = new response_type(9554)(obj2, "Request aborted");
                    throw throwTypeErrorResult;
                  } else {
                    throwTypeErrorResult = c7;
                    throwTypeErrorResult = callback;
                    if (null == callback) {
                      throwTypeErrorResult = currentUser;
                      throwTypeErrorResult = response_type;
                      throwTypeErrorResult = dependencyMap;
                      const obj3 = { errorCode: null };
                      throwTypeErrorResult = c15;
                      obj3[0] = c15.OAUTH2_ERROR;
                      throwTypeErrorResult = new.target;
                      throwTypeErrorResult = new.target;
                      throwTypeErrorResult = obj3;
                      throwTypeErrorResult = new response_type(9554)(obj3, "No Client ID provided");
                      throw throwTypeErrorResult;
                    } else {
                      throwTypeErrorResult = c7;
                      throwTypeErrorResult = c16;
                      if (!c16) {
                        throwTypeErrorResult = callback2;
                        if (null != callback2) {
                          throwTypeErrorResult = currentUser;
                          throwTypeErrorResult = response_type;
                          throwTypeErrorResult = dependencyMap;
                          const obj4 = { errorCode: null };
                          throwTypeErrorResult = c15;
                          obj4[0] = c15.OAUTH2_ERROR;
                          throwTypeErrorResult = new.target;
                          throwTypeErrorResult = new.target;
                          throwTypeErrorResult = obj4;
                          throwTypeErrorResult = new response_type(9554)(obj4, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
                          throw throwTypeErrorResult;
                        }
                      }
                      throwTypeErrorResult = c7;
                      closure_23 = [];
                      throwTypeErrorResult = c7;
                      if (typeof c7 === "string") {
                        throwTypeErrorResult = c7;
                        const parts = c7.split(" ");
                        closure_23 = parts.filter((arg0) => arg0.length > 0);
                      } else {
                        const _Array = Array;
                        throwTypeErrorResult = c7;
                        if (Array.isArray(c7)) {
                          throwTypeErrorResult = c7;
                          throwTypeErrorResult = c7;
                          closure_23 = c7;
                        }
                      }
                      throwTypeErrorResult = currentUser;
                      throwTypeErrorResult = currentUser;
                      if (null == currentUser.getCurrentUser()) {
                        throwTypeErrorResult = currentUser;
                        throwTypeErrorResult = response_type;
                        throwTypeErrorResult = dependencyMap;
                        let obj5 = { errorCode: null };
                        throwTypeErrorResult = c15;
                        obj5[0] = c15.OAUTH2_ERROR;
                        throwTypeErrorResult = new.target;
                        throwTypeErrorResult = new.target;
                        throwTypeErrorResult = obj5;
                        throwTypeErrorResult = new response_type(9554)(obj5, "Client is not logged in");
                        throw throwTypeErrorResult;
                      } else {
                        throwTypeErrorResult = c7;
                        throwTypeErrorResult = c13;
                        if (null != c13) {
                          throwTypeErrorResult = c7;
                          const _Number = Number;
                          throwTypeErrorResult = c13;
                          USER_INSTALL = Number(c13);
                        } else {
                          throwTypeErrorResult = c7;
                          throwTypeErrorResult = currentUser;
                          function isUserInstallable(throwTypeErrorResult) {
                            let hasApplicationFlagResult = _undefined(table[11]).hasApplicationFlag(throwTypeErrorResult, constants.EMBEDDED);
                            if (hasApplicationFlagResult) {
                              let tmp5;
                              if (throwTypeErrorResult != null) {
                                const integrationTypesConfig = throwTypeErrorResult.integrationTypesConfig;
                                if (integrationTypesConfig != null) {
                                  tmp5 = integrationTypesConfig[tmp(undefined, tmp2[12]).ApplicationIntegrationType.USER_INSTALL];
                                }
                              }
                              hasApplicationFlagResult = null != tmp5;
                            }
                            return hasApplicationFlagResult;
                          }
                          throwTypeErrorResult = application;
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = application.getApplication(callback);
                          throwTypeErrorResult = isUserInstallable;
                          if (!isUserInstallable(throwTypeErrorResult)) {
                            throwTypeErrorResult = c7;
                            throwTypeErrorResult = currentUser;
                            throwTypeErrorResult = isUserInstallable;
                            application = isUserInstallable;
                            throwTypeErrorResult = c7;
                            closure_5 = c7;
                            createFromServer = c7.createFromServer;
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = dependencyMap;
                            let obj19 = callback(9538);
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = c15;
                            c11 = 3;
                            c12 = 1;
                            const obj6 = { value: null, done: false };
                            obj6[0] = obj19.fetchApplication(callback, c15);
                            return obj6;
                          }
                        }
                        throwTypeErrorResult = c7;
                        throwTypeErrorResult = currentUser;
                        c9 = 1;
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = dependencyMap;
                        const obj7 = { clientId: null, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, integrationType: null, signal: null };
                        throwTypeErrorResult = closure_0;
                        obj7[0] = closure_0;
                        throwTypeErrorResult = closure_1_23;
                        obj7[1] = closure_1_23;
                        throwTypeErrorResult = closure_1;
                        obj7[2] = closure_1;
                        throwTypeErrorResult = closure_2;
                        obj7[3] = closure_2;
                        throwTypeErrorResult = closure_1_3;
                        obj7[4] = closure_1_3;
                        throwTypeErrorResult = closure_1_4;
                        obj7[5] = closure_1_4;
                        throwTypeErrorResult = closure_1_5;
                        obj7[6] = closure_1_5;
                        throwTypeErrorResult = closure_1_19;
                        obj7[7] = closure_1_19;
                        throwTypeErrorResult = closure_1_15;
                        obj7[8] = closure_1_15;
                        const items = [callback(9244).fetchAuthorization(obj7), ];
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = dependencyMap;
                        const obj22 = callback(9244);
                        throwTypeErrorResult = closure_0;
                        items[1] = callback(9240).getDisclosures(closure_0);
                        throwTypeErrorResult = Promise.all(items);
                        c11 = 4;
                        c12 = 1;
                        const obj24 = callback(9240);
                      }
                    }
                  }
                }
              } else if (2 === tmp10) {
                throwTypeErrorResult = c7;
                throwTypeErrorResult = currentUser;
                throwTypeErrorResult = c10;
                throwTypeErrorResult = c10;
                c9 = 0;
                body = c10.body;
                throwTypeErrorResult = response_type;
                throwTypeErrorResult = dependencyMap;
                const obj8 = { errorCode: null };
                throwTypeErrorResult = c15;
                obj8[0] = c15.OAUTH2_ERROR;
                let str3;
                throwTypeErrorResult = response_type(9554);
                if (body != null) {
                  str3 = body.message;
                }
                if (!str3) {
                  str3 = "Unknown Error";
                }
                const _HermesInternal2 = HermesInternal;
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = obj8;
                throwTypeErrorResult = new throwTypeErrorResult(obj8, "OAuth2 Authorization Error: " + str3);
                throw throwTypeErrorResult;
              } else if (3 === tmp10) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw location;
                } else if (arg0 === 2) {
                  c12 = 3;
                  const obj9 = { value: null, done: true };
                  obj9[0] = location;
                  return obj9;
                } else {
                  throwTypeErrorResult = createFromServer;
                  throwTypeErrorResult = closure_5;
                  throwTypeErrorResult = application;
                  throwTypeErrorResult = c7;
                  throwTypeErrorResult = createFromServer(location);
                  if (!application(throwTypeErrorResult)) {
                    throwTypeErrorResult = currentUser;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = dependencyMap;
                    USER_INSTALL = callback(9245).ApplicationIntegrationType.GUILD_INSTALL;
                  }
                  throwTypeErrorResult = c7;
                }
              } else {
                if (4 === tmp10) {
                  if (arg0 === 1) {
                    c12 = 3;
                    throw location;
                  } else if (arg0 === 2) {
                    c9 = 0;
                    c12 = 3;
                    let obj10 = { value: null, done: true };
                    obj10[0] = location;
                    return obj10;
                  } else {
                    throwTypeErrorResult = c7;
                    throwTypeErrorResult = currentUser;
                    closure_25 = location;
                    throwTypeErrorResult = createFromServer;
                    throwTypeErrorResult = closure_25;
                    dependencyMap3 = createFromServer(closure_25, 2);
                    throwTypeErrorResult = dependencyMap3;
                    closure_20 = 32;
                    throwTypeErrorResult = dependencyMap3;
                    closure_27 = 5;
                    throwTypeErrorResult = closure_27;
                    disclosures = closure_27.disclosures;
                    throwTypeErrorResult = closure_27;
                    allAcked = closure_27.allAcked;
                    c9 = 0;
                    throwTypeErrorResult = c7;
                    throwTypeErrorResult = currentUser;
                    throwTypeErrorResult = c11;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = dependencyMap;
                    if (c11 === callback(9247).OAuth2Prompts.NONE) {
                      if (null != closure_20) {
                        if (closure_20.authorized) {
                          if (allAcked) {
                            throwTypeErrorResult = currentUser;
                            c9 = 2;
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = dependencyMap;
                            let obj12 = callback(9244);
                            const obj11 = { authorize: true, clientId: null, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, nonce: null, integrationType: null };
                            throwTypeErrorResult = callback;
                            obj11[1] = callback;
                            throwTypeErrorResult = closure_23;
                            obj11[2] = closure_23;
                            throwTypeErrorResult = response_type;
                            obj11[3] = response_type;
                            throwTypeErrorResult = callback2;
                            obj11[4] = callback2;
                            throwTypeErrorResult = dependencyMap;
                            obj11[5] = dependencyMap;
                            throwTypeErrorResult = createFromServer;
                            obj11[6] = createFromServer;
                            throwTypeErrorResult = closure_5;
                            obj11[7] = closure_5;
                            throwTypeErrorResult = application;
                            obj11[8] = application;
                            throwTypeErrorResult = USER_INSTALL;
                            obj11[9] = USER_INSTALL;
                            c11 = 6;
                            c12 = 1;
                            obj12 = { value: null, done: false };
                            obj12[0] = obj12.authorize(obj11);
                            return obj12;
                          }
                        }
                      }
                    }
                    if (closure_18 != null) {
                      tmp43(closure_20.application, c10, c14);
                    }
                    NONE = callback2(4204).NONE;
                    c9 = 3;
                    obj5 = callback2(1086);
                    dependencyMap = currentUser;
                    if (currentUser == null) {
                      dependencyMap = 0;
                    }
                    NONE = obj5.deserialize(dependencyMap);
                    c9 = 0;
                  }
                } else if (5 === tmp10) {
                  c9 = 0;
                  body = c10.body;
                  const obj13 = { errorCode: null };
                  obj13[0] = c15.OAUTH2_ERROR;
                  let str2;
                  let tmp29 = response_type(9554);
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
                    let aborted;
                    if (c15 != null) {
                      aborted = c15.aborted;
                    }
                    if (aborted) {
                      obj = { errorCode: null };
                      obj[0] = c15.UNKNOWN_ERROR;
                      const tmp20 = new response_type(9554)(obj, "Request aborted");
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
                  const obj18 = { value: null, done: true };
                  obj18[0] = dependencyMap2(obj17);
                  return obj18;
                }
                map = undefined;
                let hasItem = null != closure_20.integration_type;
                if (hasItem) {
                  const _Object = Object;
                  const values = Object.values(callback(9245).ApplicationIntegrationType);
                  hasItem = values.includes(closure_20.integration_type);
                }
                if (hasItem) {
                  const _Map = Map;
                  map = new Map();
                  const result = map.set(closure_20.integration_type, closure_20);
                }
                if (null != dependencyMap2[closure_20.application.id]) {
                  throwTypeErrorResult = dependencyMap2;
                  throwTypeErrorResult = closure_20;
                  obj10 = dependencyMap2[closure_20.application.id];
                  c11 = 8;
                  c12 = 1;
                  obj19 = { value: null, done: false };
                  obj19[0] = obj10.process();
                  return obj19;
                }
              }
              throwTypeErrorResult = currentUser;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = dependencyMap;
              USER_INSTALL = callback(9245).ApplicationIntegrationType.USER_INSTALL;
            }
          } catch (throwTypeErrorResult) {
            c10 = throwTypeErrorResult;
            throwTypeErrorResult = c9;
            if (tmp5 === c9) {
              throwTypeErrorResult = tmp3;
              c12 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c11 = throwTypeErrorResult;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c11 = tmp7;
            } else {
              c11 = tmp6;
            }
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
function authenticate(authorization) {
  const _require = authorization;
  importDefault = arg1;
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
    const HTTP = _require(1272).HTTP;
    obj = { url: null, headers: null, oldFormErrors: true, rejectWithError: false };
    obj[0] = OAUTH2_CURRENT_AUTH.OAUTH2_CURRENT_AUTH;
    obj1 = { Authorization: null };
    const _HermesInternal = HermesInternal;
    obj1[0] = "Bearer " + arg1;
    obj[1] = obj1;
    const value = HTTP.get(obj);
    return value.then((body) => {
      authorization.authorization.authing = false;
      body = body.body;
      ({ user, scopes, expires } = body);
      if (authorization.application.id !== body.application.id) {
        obj = { errorCode: null };
        obj[0] = closure_1_15.INVALID_CLIENTID;
        const tmp16 = new callback(closure_1_3[10])(obj, "Application does not match the connection's");
        throw tmp16;
      } else {
        const currentUser = closure_1_8.getCurrentUser();
        if (null != currentUser) {
          if (user) {
            if (currentUser.id === user.id) {
              const items = [];
              items[HermesBuiltin.arraySpread(scopes, HermesBuiltin.arraySpread(tmp.authorization.scopes, 0))] = closure_1_10;
              tmp.authorization.scopes = items;
              tmp.authorization.accessToken = callback;
              const _Date = Date;
              const date = new Date(expires);
              tmp.authorization.expires = date;
              obj = { type: "RPC_APP_AUTHENTICATED", socketId: null, application: null };
              ({ id: obj4[1], application: obj4[2] } = tmp);
              callback(closure_1_3[20]).dispatch(obj);
              obj1 = {};
              const merged = Object.assign(body.body);
              obj1.access_token = callback;
              return obj1;
            }
          }
        }
        obj = { errorCode: null };
        obj[0] = closure_1_15.INVALID_TOKEN;
        const tmp8 = new callback(closure_1_3[10])(obj, "Token does not match current user");
        throw tmp8;
      }
    }, () => {
      let tmp = callback(closure_1_3[10]);
      tmp = new tmp({ errorCode: closure_1_15.INVALID_TOKEN }, "Invalid access token: " + callback);
      throw tmp;
    }).catch((arg0) => {
      authorization.authorization.authing = false;
      throw arg0;
    });
  }
}
({ TransportTypes: c9, RPC_AUTHENTICATED_SCOPE: c10, RPC_PRIVATE_SCOPE: unpackModuleId } = RPC_SCOPE_CONFIG);
({ ApplicationFlags: closure_12, Endpoints: map1, RPCCommands: closure_14, RPCErrors: closure_15 } = ME);
const CachedTokens = "CachedTokens";
let obj = { "1273616940451102832": null };
importDefaultResult = new importDefaultResult(2, setDefault.Millis.MINUTE);
obj[0] = importDefaultResult;
let result = require("set").fileFinishedImporting("modules/rpc/server/commands/AuthCommandsFactory.tsx");

export default function createAuthCommandHandlers(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  obj = {};
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
            const tmp29 = new callback2(closure_1_3[10])(obj, "No application.");
            throw tmp29;
          } else {
            IDENTIFY = callback(closure_1_3[22]).OAuth2Scopes.IDENTIFY;
            _authorize = function _authorize() {

            };
            let Storage2 = callback(closure_1_3[9]).Storage;
            const value = Storage2.get(closure_1_16);
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
                let Storage = callback(closure_1_3[9]).Storage;
                let result = Storage.set(closure_1_16, value);
              }
            }
            if (null != accessToken) {
              let catchPromise = closure_1_20(socket, accessToken).catch(() => {
                let Storage = socket(closure_2_3[9]).Storage;
                obj = Storage.get(closure_2_16);
                if (obj == null) {
                  obj = {};
                }
                delete tmp2[tmp];
                let Storage2 = socket(closure_2_3[9]).Storage;
                let result = Storage2.set(closure_2_16, obj);
                if (typeof _authorize !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                obj = { client_id: id, scope: IDENTIFY, response_type: "token", signal, isSocketRpcPrivateScope: false };
                return closure_2_18(obj, socket, signal).then((str) => {
                  if (null == str) {
                    obj = { errorCode: null };
                    obj[0] = closure_2_15.UNKNOWN_ERROR;
                    const tmp22 = new signal(IDENTIFY[10])(obj, "Unknown error occurred");
                    throw tmp22;
                  } else {
                    const parts = str.split(/#|\?/);
                    const parsed = signal(IDENTIFY[23]).parse(parts[parts.length - 1]);
                    if (null != parsed.error) {
                      obj = { errorCode: null };
                      obj[0] = closure_2_15.OAUTH2_ERROR;
                      str = parsed.error_description;
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
                      const result = Storage.set(closure_2_16, obj1);
                      return closure_2_20(closure_0, parsed.access_token);
                    }
                    const obj5 = signal(IDENTIFY[23]);
                  }
                });
              });
              const promise2 = closure_1_20(socket, accessToken);
            } else {
              obj = { client_id: null, scope: null, response_type: "token", signal: null, isSocketRpcPrivateScope: false };
              obj[0] = id;
              obj[1] = IDENTIFY;
              obj[3] = signal;
              catchPromise = closure_1_18(obj, socket, signal).then((str) => {
                if (null == str) {
                  obj = { errorCode: null };
                  obj[0] = closure_2_15.UNKNOWN_ERROR;
                  const tmp22 = new signal(IDENTIFY[10])(obj, "Unknown error occurred");
                  throw tmp22;
                } else {
                  const parts = str.split(/#|\?/);
                  const parsed = signal(IDENTIFY[23]).parse(parts[parts.length - 1]);
                  if (null != parsed.error) {
                    obj = { errorCode: null };
                    obj[0] = closure_2_15.OAUTH2_ERROR;
                    str = parsed.error_description;
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
                    const result = Storage.set(closure_2_16, obj1);
                    return closure_2_20(closure_0, parsed.access_token);
                  }
                  const obj5 = signal(IDENTIFY[23]);
                }
              });
              const promise = closure_1_18(obj, socket, signal);
            }
            return catchPromise;
          }
        }
      }
      if (null == access_token) {
        obj = { errorCode: null };
        obj[0] = closure_1_15.INVALID_TOKEN;
        const tmp11 = new callback2(closure_1_3[10])(obj, "No access token provided");
        throw tmp11;
      } else {
        return closure_1_20(socket, access_token);
      }
    }
  };
  obj[constants.AUTHENTICATE] = _require(14476).createRPCCommand(constants.AUTHENTICATE, obj);
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
          const tmp50 = new callback2(closure_1_3[10])(obj, "Already authenticated");
          throw tmp50;
        } else if (socket.authorization.authing) {
          obj = { errorCode: null };
          obj[0] = closure_1_15.INVALID_COMMAND;
          const tmp42 = new callback2(closure_1_3[10])(obj, "Already authing");
          throw tmp42;
        } else {
          socket.authorization.authing = true;
          if ("token" === args.response_type) {
            socket.authorization.authing = false;
            obj1 = { errorCode: null };
            obj1[0] = closure_1_15.INVALID_COMMAND;
            const tmp34 = new callback2(closure_1_3[10])(obj1, "Authorization response_type \"token\" is not supported");
            throw tmp34;
          } else {
            const scopes = socket.authorization.scopes;
            hasItem = scopes.includes(closure_1_11);
            if (!hasItem) {
              if (socket.application.id !== client_id) {
                socket.authorization.authing = false;
                let obj2 = { errorCode: null };
                obj2[0] = closure_1_15.INVALID_CLIENTID;
                const tmp19 = new callback2(closure_1_3[10])(obj2, "Application does not match the connection's");
                throw tmp19;
              }
            }
            delete tmp2[tmp];
            const obj3 = {};
            const merged = Object.assign(args);
            obj3.scope = args.scopes || args.scope;
            obj3.signal = tmp3;
            obj3.isSocketRpcPrivateScope = hasItem;
            const promise = closure_1_18(obj3, socket, hasItem);
            const tmp21 = args.scopes || args.scope;
            return closure_1_18(obj3, socket, hasItem).then((arg0) => {
              socket.authorization.authing = false;
              if (null == arg0) {
                obj = { errorCode: null };
                obj[0] = closure_1_15.UNKNOWN_ERROR;
                const tmp25 = new hasItem(closure_1_3[10])(obj, "Unknown error occurred");
                throw tmp25;
              } else {
                const _URL = URL;
                const uRL = new URL(arg0);
                const searchParams3 = uRL.searchParams;
                let value = searchParams3.get("code");
                if (hasItem) {
                  obj = { code: null, location: null };
                  obj[0] = value;
                  obj[1] = arg0;
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
            }).catch((arg0) => {
              socket.authorization.authing = false;
              throw arg0;
            });
          }
        }
      } else {
        obj = { errorCode: null };
        obj[0] = closure_1_15.INVALID_CLIENTID;
        const tmp10 = new callback2(closure_1_3[10])(obj, "No client id provided");
        throw tmp10;
      }
    }
  };
  return obj;
};
export const AUTHORIZE_PROMPT_THROTTLERS = obj;