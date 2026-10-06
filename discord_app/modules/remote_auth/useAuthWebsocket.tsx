// === Module 15950: useAuthWebsocket ===

// Module 15950 (useAuthWebsocket)
import LoggerDefault from "Logger" /* 3 */;
import BackoffDefault from "Backoff" /* 569 */;
import useStableCallbackDefault from "useStableCallback" /* 6459 */;
import typing from "typing" /* 15949 */;
import RemoteAuthCryptoDefault from "RemoteAuthCrypto" /* 15951 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, closure_0, closure_1, closure_2, dependencyMap, fingerprint, importDefault, infoResult, nonce, tmp10, tmp7, tmp8, tmp9, user;

let metroImportDefault;
let metroRequire;
let react = react_mod;
({ ComponentActions: metroRequire, Endpoints: metroImportDefault } = Constants);
let tmp3 = new LoggerDefault("useAuthWebsocket");
let logger = tmp3;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0, arg1, arg2) {
  let closure_5;
  let first;
  let first1;
  let tmp12;
  let tmp19;
  _require = arg0;
  importDefault = arg1;
  let tmp2 = dependencyMap;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(25);
  dependencyMap = undefined !== arg2 && arg2;
  let obj2 = react;
  const tmp4 = first;
  let tmp5 = first(react.useState(0), 2);
  [r10019, _asyncToGenerator] = tmp5;
  let tmp6 = first(react.useState(false), 2);
  first = tmp6[0];
  react = tmp8;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { step: tmp(15949).RemoteAuthStep.INITIALIZING };
    cResult[0] = obj3;
    first1 = obj3;
  } else {
    first1 = cResult[0];
  }
  const tmp4Result = tmp4(obj2.useState(first1), 2);
  const first2 = tmp4Result[0];
  let closure_7 = tmp4Result[1];
  logger = obj2.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp13 = importDefault;
    let self = this;
    let num = 30000;
    let num2 = 1500;
    let self2 = this;
    let tmp14 = new BackoffDefault(1500, 30000);
    let tmp15 = tmp14;
    let num3 = 1;
    cResult[1] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[1];
  }
  const pending = tmp12;
  if (cResult[2] !== arg1) {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        tmp2 = closure_1;
        if (tmp2) {
          tmp7 = closure_3;
          tmp8 = closure_3(() => { /* body not rendered: F145414 */ });
        } else {
          tmp3 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp5 = closure_5;
          flag = true;
          tmp6 = closure_5(true);
        }
        return;
      }
    }
    cResult[2] = arg1;
    let num4 = 3;
    cResult[3] = R;
  } else {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        tmp2 = closure_1;
        if (tmp2) {
          tmp7 = closure_3;
          tmp8 = closure_3(() => { /* body not rendered: F145414 */ });
        } else {
          tmp3 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp5 = closure_5;
          flag = true;
          tmp6 = closure_5(true);
        }
        return;
      }
    }
  }
  const tmp17 = useStableCallbackDefault(R);
  let closure_10 = tmp17;
  if (cResult[4] !== tmp17) {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        tmp2 = closure_1;
        if (tmp2) {
          tmp7 = closure_3;
          tmp8 = closure_3(() => { /* body not rendered: F145414 */ });
        } else {
          tmp3 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp5 = closure_5;
          flag = true;
          tmp6 = closure_5(true);
        }
        return;
      }
    }
    let num5 = 4;
    cResult[4] = tmp17;
    let num6 = 5;
    cResult[5] = tmp19;
  } else {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        tmp2 = closure_1;
        if (tmp2) {
          tmp7 = closure_3;
          tmp8 = closure_3(() => { /* body not rendered: F145414 */ });
        } else {
          tmp3 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp5 = closure_5;
          flag = true;
          tmp6 = closure_5(true);
        }
        return;
      }
    }
  }
  let closure_11 = tmp19;
  if (cResult[6] === arg1) {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        tmp2 = closure_1;
        if (tmp2) {
          tmp7 = closure_3;
          tmp8 = closure_3(() => { /* body not rendered: F145414 */ });
        } else {
          tmp3 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp5 = closure_5;
          flag = true;
          tmp6 = closure_5(true);
        }
        return;
      }
    }
  }
  class G {
    constructor() {
      tmp = closure_1 && closure_4;
      if (tmp) {
        tmp2 = closure_6;
        tmp3 = closure_0;
        tmp4 = closure_2;
        tmp = closure_6.step === closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING;
      }
      if (tmp) {
        tmp5 = closure_8;
        str = "reconnecting, now that document is visible";
        infoResult = closure_8.info("reconnecting, now that document is visible");
        tmp7 = closure_5;
        flag = false;
        tmp8 = closure_5(false);
        tmp9 = closure_3;
        tmp10 = closure_3(() => { /* body not rendered: F145415 */ });
      }
      return;
    }
  }
  const items = [first2, arg1, first, tmp8];
  cResult[6] = arg1;
  cResult[7] = first;
  cResult[8] = first2;
  cResult[9] = G;
  cResult[10] = items;
}) : ((arg0, arg1) => {
  let closure_5;
  _require = arg0;
  importDefault = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let first1;
  react = undefined;
  let tmp = first1(react.useState(0), 2);
  let closure_3 = tmp[1];
  const first = tmp[0];
  const tmp3 = first1(react.useState(false), 2);
  first1 = tmp3[0];
  const tmp5 = tmp3[1];
  react = tmp5;
  let obj = { step: require("typing").RemoteAuthStep.INITIALIZING };
  const tmp6 = first1(react.useState(obj), 2);
  const state = tmp6[0];
  let closure_7 = tmp6[1];
  logger = react.useRef(null);
  const memo = react.useMemo(() => {
    const tmp = new closure_1(flag[8])(1500, 30000);
    return tmp;
  }, []);
  const cancel = require("useStableCallback")(() => {
    const obj = { step: typing.RemoteAuthStep.INITIALIZING };
    closure_7(obj);
    if (closure_1) {
      closure_3((arg0) => arg0 + 1);
    } else {
      logger.info("document is not visible, will defer reconnection when document becomes visible.");
      closure_5(true);
    }
  });
  const items = [cancel, memo];
  const callback = react.useCallback(() => {
    logger.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session.");
    const obj = { step: typing.RemoteAuthStep.INITIALIZING };
    closure_7(obj);
    if (!memo.pending) {
      memo.fail(cancel);
    }
  }, items);
  const items1 = [state, arg1, first1, tmp5];
  const effect = react.useEffect(() => {
    const tmp = closure_1 && first1 && state.step === typing.RemoteAuthStep.INITIALIZING;
    if (tmp) {
      logger.info("reconnecting, now that document is visible");
      closure_5(false);
      closure_3((arg0) => arg0 + 1);
    }
  }, items1);
  const items2 = [cancel, arg0, first, memo, callback, flag];
  const effect1 = react.useEffect(() => {
    function info(arg0) {
      return getKeyPair.info("[" + Date.now() - closure_0 + "ms" + "] " + arg0);
    }
    function getKeyPair() {
      if (null != c3) {
        return c3;
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("No key pair set");
        throw error;
      }
    }
    function doHeartbeat() {
      const tmp = c7;
      if (tmp) {
        c7 = false;
        const _JSON = JSON;
        obj2.send(JSON.stringify({ op: "heartbeat" }));
      } else {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        getKeyPair.info("[" + `${Date.now() - closure_0}ms` + "] " + "heartbeat timeout, reconnecting.");
        obj2.close();
        callback();
      }
    }
    function onmessage() {
      return obj(...arguments);
    }
    let obj = function _onmessage2() {
      let constants2;
      obj = _asyncToGenerator(async (arg0) => {
        let data = arg0;
        c3 = 0;
        c4 = 0;
        const iter = (async function(arg0) {
          let obj15;
          let obj17;
          let obj8;
          function warn(arg0) {
            return logger.warn("[" + Date.now() - data + "ms" + "] " + "received unsupported message");
          }
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let tmp;
              let encrypted_nonce;
              let ticket;
              let encrypted_user_payload;
              let heartbeat_interval;
              c4 = 2;
              const tmp4 = c3;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_2 = tmp4;
                  data = undefined;
                  data = data.data;
                  tmp = undefined;
                  encrypted_nonce = undefined;
                  nonce = undefined;
                  fingerprint = undefined;
                  ticket = undefined;
                  encrypted_user_payload = undefined;
                  user = undefined;
                  heartbeat_interval = undefined;
                  c3 = 1;
                  c4 = 1;
                  return { value: "Reflect", done: true };
                }
              } else if (1 === tmp4) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  let obj4 = { value, done: true };
                  return obj4;
                } else {
                  const _JSON2 = JSON;
                  tmp = JSON.parse(data);
                  const op = tmp.op;
                  if ("nonce_proof" === op) {
                    encrypted_nonce = tmp.encrypted_nonce;
                    c3 = 2;
                    c4 = 1;
                    let obj5 = { value: obj17.decryptNonce(closure_130_8(), encrypted_nonce), done: false };
                    obj17 = info(closure_2_2[11]);
                    return obj5;
                  } else if ("pending_remote_init" === op) {
                    closure_1_9.succeed();
                    const ComponentDispatch2 = closure_2_0(closure_2_2[12]).ComponentDispatch;
                    ComponentDispatch2.dispatch(constants.WAVE_EMPHASIZE);
                    c3 = 3;
                    c4 = 1;
                    let obj6 = { value: obj15.publicKeyFingerprint(closure_130_8()), done: false };
                    obj15 = info(closure_2_2[11]);
                    return obj6;
                  } else if ("pending_login" === op) {
                    ticket = tmp.ticket;
                    if (null == ticket) {
                      closure_1_11();
                    } else {
                      let obj7 = { step: closure_2_0(closure_2_2[7]).RemoteAuthStep.PENDING_LOGIN, ticket };
                      user(obj7);
                      const HTTP = closure_2_0(closure_2_2[13]).HTTP;
                      const request = { url: constants2.REMOTE_AUTH_LOGIN, body: obj8, oldFormErrors: true, rejectWithError: true };
                      obj8 = { ticket };
                      const postResult = HTTP.post(request);
                      const nextPromise = postResult.then((() => {
                        closure_0 = nonce(function*(arg0) {
                          let obj6;
                          let obj9;
                          closure_0 = arg0;
                          if (c4 === 2) {
                            c4 = 3;
                            throw new TypeError("Generator functions may not be called on executing generators");
                          } else if (tmp4 === 3) {
                            if (arg0 === 1) {
                              throw value;
                            } else if (arg0 === 2) {
                              obj2 = { value, done: true };
                              return obj2;
                            } else {
                              return { value: "IconComponent", done: null };
                            }
                          } else {
                            try {
                              c4 = 2;
                              if (0 === c3) {
                                if (arg0 === 1) {
                                  c4 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c4 = 3;
                                  const obj3 = { value, done: true };
                                  return obj3;
                                } else {
                                  closure_2 = tmp2;
                                  closure_0 = undefined;
                                  closure_1 = undefined;
                                  if (null != ref.current) {
                                    c3 = 1;
                                    c4 = 1;
                                    const obj4 = { value: obj9.decryptEncodedCiphertext(ref.current, tmp32.body.encrypted_token), done: false };
                                    obj9 = closure_2_1(closure_2_2[11]);
                                    return obj4;
                                  } else {
                                    closure_1_11();
                                  }
                                }
                              } else if (1 === c3) {
                                if (arg0 === 1) {
                                  c4 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c4 = 3;
                                  const obj5 = { value, done: true };
                                  return obj5;
                                } else {
                                  closure_0 = value;
                                  c3 = 2;
                                  c4 = 1;
                                  const obj7 = { value: obj6.publicKeyFingerprint(ref.current), done: false };
                                  obj6 = closure_2_1(closure_2_2[11]);
                                  return obj7;
                                }
                              } else if (2 === c3) {
                                if (arg0 === 1) {
                                  c4 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c4 = 3;
                                  const obj8 = { value, done: true };
                                  return obj8;
                                } else {
                                  closure_1 = value;
                                  const obj13 = closure_2_1(closure_2_2[14]);
                                  if (closure_2) {
                                    c3 = 4;
                                    c4 = 1;
                                    const obj10 = { value: obj13.switchAccountToken(closure_0), done: false };
                                    return obj10;
                                  } else {
                                    c3 = 3;
                                    c4 = 1;
                                    const obj11 = { value: obj13.loginToken(closure_0, false), done: false };
                                    return obj11;
                                  }
                                }
                              } else {
                                if (3 === c3) {
                                  if (arg0 === 1) {
                                    c4 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c4 = 3;
                                    const obj12 = { value, done: true };
                                    return obj12;
                                  }
                                } else if (arg0 === 1) {
                                  c4 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c4 = 3;
                                  obj = { value, done: true };
                                  return obj;
                                }
                                closure_0(closure_1);
                              }
                              c4 = 3;
                              return { value: "IconComponent", done: null };
                            } catch (tmp23) {
                              c4 = 3;
                              throw tmp23;
                            }
                          }
                        });
                        return function() {
                          return closure_0(...arguments);
                        };
                      })());
                      nextPromise.catch(() => closure_1_11());
                    }
                    c4 = 3;
                    let obj9 = { value: tmp70, done: true };
                    return obj9;
                  } else if ("pending_ticket" === op) {
                    const ComponentDispatch = closure_2_0(closure_2_2[12]).ComponentDispatch;
                    ComponentDispatch.dispatch(constants.WAVE_EMPHASIZE);
                    closure_130_1("remote auth handshake started, awaiting ticket/cancel.");
                    encrypted_user_payload = tmp.encrypted_user_payload;
                    let obj12 = closure_2_0(closure_2_2[15]);
                    c3 = 4;
                    c4 = 1;
                    let obj10 = { value: obj12.decodeEncodedUserRecord(closure_130_8(), encrypted_user_payload), done: false };
                    return obj10;
                  } else if ("cancel" === op) {
                    closure_130_1("remote auth handshake cancelled.");
                    closure_1_10();
                    c4 = 3;
                    let obj11 = { value: undefined, done: true };
                    return obj11;
                  } else if ("hello" === op) {
                    const _HermesInternal2 = HermesInternal;
                    closure_130_1("got hello, auth timeout=" + tmp.timeout_ms + "ms");
                    heartbeat_interval = tmp.heartbeat_interval;
                    const _setTimeout = setTimeout;
                    const _Math = Math;
                    const _Math2 = Math;
                    const timeout = setTimeout(() => {
                      c6 = null;
                      const tmp = c7;
                      if (tmp) {
                        c7 = false;
                        const _JSON = JSON;
                        closure_2.send(JSON.stringify({ op: "heartbeat" }));
                      } else {
                        const _Date = Date;
                        const _HermesInternal = HermesInternal;
                        logger.info("[" + `${Date.now() - closure_0}ms` + "] " + "heartbeat timeout, reconnecting.");
                        closure_2.close();
                        closure_1_11();
                      }
                      const interval = setInterval(closure_2_9, closure_1_8);
                    }, Math.floor(heartbeat_interval * Math.random()));
                    c4 = 3;
                    let obj13 = { value: undefined, done: true };
                    return obj13;
                  } else if ("heartbeat_ack" === op) {
                    user = true;
                    c4 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    !warn("received unsupported message");
                    c4 = 3;
                    return { value: "IconComponent", done: null };
                  }
                }
              } else if (2 === tmp4) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                } else {
                  nonce = value;
                  closure_130_1("computed nonce proof");
                  const tmp32 = globalThis;
                  let _JSON = JSON;
                  const obj16 = { op: "nonce_proof", nonce };
                  closure_130_2.send(JSON.stringify(obj16));
                  c4 = 3;
                  return { value: undefined, done: true };
                }
              } else if (3 === tmp4) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                } else {
                  fingerprint = value;
                  if (fingerprint !== tmp.fingerprint) {
                    const _Error = Error;
                    const tmp23 = fingerprint;
                    let _HermesInternal = HermesInternal;
                    const self = this;
                    const self2 = this;
                    const error = new Error("bad fingerprint " + fingerprint + " !== " + tmp.fingerprint);
                    throw error;
                  } else {
                    closure_130_1("handshake complete awaiting remote auth.");
                    const obj20 = { step: closure_2_0(closure_2_2[7]).RemoteAuthStep.PENDING_REMOTE_INIT, fingerprint };
                    user(obj20);
                    c4 = 3;
                    return { value: undefined, done: true };
                  }
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                user = value;
                obj = { step: closure_2_0(closure_2_2[7]).RemoteAuthStep.PENDING_TICKET, user };
                user(obj);
                c4 = 3;
                return { value: undefined, done: true };
              }
            } catch (tmp89) {
              c4 = 3;
              throw tmp89;
            }
          }
        })();
        iter.next();
        return iter;
      });
      return obj(...arguments);
    };
    function onopen() {
      return obj(...arguments);
    }
    obj = function _onopen2() {
      obj = _asyncToGenerator(async () => {
        let obj5;
        let obj8;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp3;
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj8.generateRsaKeyPair(), done: false };
                obj8 = info(closure_2_2[11]);
                return obj6;
              }
            } else {
              let current;
              if (1 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  current = value;
                  c2 = 2;
                  c3 = 1;
                  const obj9 = { value: obj5.serializePublicKey(current), done: false };
                  obj5 = info(closure_2_2[11]);
                  return obj9;
                }
              } else {
                let encoded_public_key;
                if (2 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj10 = { value, done: true };
                    return obj10;
                  } else {
                    encoded_public_key = value;
                    closure_0 = closure_129_1;
                    c2 = 3;
                    c3 = 1;
                    const obj11 = { value: obj2.publicKeyFingerprint(current), done: false };
                    obj2 = info(closure_2_2[11]);
                    return obj11;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  const _HermesInternal = HermesInternal;
                  closure_0("connected, handshaking with fingerprint: " + value);
                  const _JSON = JSON;
                  const obj12 = { op: "init", encoded_public_key };
                  closure_129_2.send(JSON.stringify(obj12));
                  getKeyPair.current = current;
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
            }
          } catch (tmp15) {
            c3 = 3;
            throw tmp15;
          }
        }
      });
      return obj(...arguments);
    };
    function onclose(event) {
      const combined = "disconnected, code: " + event.code + " " + event.reason;
      getKeyPair.info("[" + `${Date.now() - closure_0}ms` + "] " + combined);
      callback();
    }
    function onerror(event) {
      const combined = "disconnected, error: " + JSON.stringify(event);
      getKeyPair.info("[" + `${Date.now() - closure_0}ms` + "] " + combined);
      callback();
    }
    closure_0 = Date.now();
    let combined = "" + window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT + "/?v=2";
    let combined1 = combined;
    if (combined.startsWith("//")) {
      let _HermesInternal = HermesInternal;
      const str = "wss:";
      combined1 = "wss:" + combined;
    }
    let obj2 = closure_1(flag[10])(combined1);
    logger.info("[0ms] connecting to " + combined1);
    let c3 = null;
    let c4 = null;
    let c5 = null;
    let c6 = null;
    let c7 = true;
    const listener = obj2.addEventListener("open", onopen);
    const listener1 = obj2.addEventListener("message", onmessage);
    const listener2 = obj2.addEventListener("close", onclose);
    const listener3 = obj2.addEventListener("error", onerror);
    return () => {
      getKeyPair.info("[" + `${Date.now() - closure_0}ms` + "] " + "cleaning up");
      const removed = obj2.removeEventListener("open", onopen);
      const removed1 = obj2.removeEventListener("message", onmessage);
      const removed2 = obj2.removeEventListener("close", onclose);
      const removed3 = obj2.removeEventListener("error", onerror);
      obj2.close(1000);
      memo.cancel();
      obj = RemoteAuthCryptoDefault;
      obj.release();
      if (null != c6) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c6);
      }
      if (null != c5) {
        const _clearInterval = clearInterval;
        clearInterval(c5);
      }
    };
  }, items2);
  return { state, cancel };
});
const result = size.fileFinishedImporting("modules/remote_auth/useAuthWebsocket.tsx");

export const useAuthWebsocket = tmp4;