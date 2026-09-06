// === Module 15989: useAuthWebsocket ===

// Module 15989 (useAuthWebsocket)
import LoggerDefault from "Logger" /* 3 */;
import typing from "typing" /* 15988 */;
import RemoteAuthCryptoDefault from "RemoteAuthCrypto" /* 15990 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ ComponentActions: metroRequire, Endpoints: closure_7 } = Constants);
let closure_8 = new LoggerDefault("useAuthWebsocket");
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/useAuthWebsocket.tsx");

export const useAuthWebsocket = function useAuthWebsocket(callback, arg1) {
  _require = callback;
  importDefault = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let first;
  noop = undefined;
  let tmp = first(noop.useState(0), 2);
  closure_3 = tmp[1];
  const tmp2 = first(noop.useState(false), 2);
  first = tmp2[0];
  noop = tmp4;
  const tmp5 = first(noop.useState({ step: require("typing").RemoteAuthStep.INITIALIZING }), 2);
  const state = tmp5[0];
  closure_7 = tmp5[1];
  const logger = noop.useRef(null);
  const memo = noop.useMemo(() => new closure_1(flag[6])(1500, 30000), []);
  const cancel = require("useStableCallback")(() => {
    closure_7({ step: typing.RemoteAuthStep.INITIALIZING });
    if (closure_1) {
      closure_3((arg0) => arg0 + 1);
    } else {
      logger.info("document is not visible, will defer reconnection when document becomes visible.");
      closure_5(true);
    }
    const obj = { step: typing.RemoteAuthStep.INITIALIZING };
  });
  const items = [cancel, memo];
  callback = noop.useCallback(() => {
    logger.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session.");
    closure_7({ step: typing.RemoteAuthStep.INITIALIZING });
    if (!memo.pending) {
      memo.fail(cancel);
    }
    const obj = { step: typing.RemoteAuthStep.INITIALIZING };
  }, items);
  const items1 = [state, arg1, first, tmp2[1]];
  const effect = noop.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = first;
    }
    if (tmp) {
      tmp = state.step === typing.RemoteAuthStep.INITIALIZING;
    }
    if (tmp) {
      logger.info("reconnecting, now that document is visible");
      closure_5(false);
      closure_3((arg0) => arg0 + 1);
    }
  }, items1);
  const items2 = [cancel, callback, tmp[0], memo, callback, flag];
  const effect1 = noop.useEffect(() => {
    function info(arg0) {
      return getKeyPair.info("[" + Date.now() - closure_0 + "ms" + "] " + arg0);
    }
    function getKeyPair() {
      if (null != c3) {
        return c3;
      } else {
        const _Error = Error;
        const error = new Error("No key pair set");
        throw error;
      }
    }
    function doHeartbeat() {
      if (c7) {
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
      const self = this;
      const apply = closure_11.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_11 = async function _onmessage(arg0) {
      let data = arg0;
      c3 = 0;
      c4 = 0;
      let iter = (async (arg0) => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                obj = { value, done: true };
                return obj;
              } else {
                closure_2 = tmp5;
                closure_1 = tmp2;
                let data2;
                data2 = data.data;
                closure_129_1 = undefined;
                let encrypted_nonce;
                closure_129_3 = undefined;
                closure_129_4 = undefined;
                let ticket;
                closure_129_6 = undefined;
                closure_129_7 = undefined;
                let heartbeat_interval;
                c3 = 1;
                c4 = 1;
                return { value: "PX_16", done: true };
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj1 = { value, done: true };
                return obj1;
              } else {
                const _JSON2 = JSON;
                closure_129_1 = JSON.parse(data2);
                const op = closure_129_1.op;
                if ("nonce_proof" === op) {
                  encrypted_nonce = closure_129_1.encrypted_nonce;
                  let obj15 = info(15990);
                  c3 = 2;
                  c4 = 1;
                  obj2 = { value: obj15.decryptNonce(closure_130_8(), encrypted_nonce), done: false };
                  return obj2;
                } else if ("pending_remote_init" === op) {
                  closure_1_9.succeed();
                  const ComponentDispatch2 = closure_2_0(1109).ComponentDispatch;
                  ComponentDispatch2.dispatch(constants.WAVE_EMPHASIZE);
                  let obj13 = info(15990);
                  c3 = 3;
                  c4 = 1;
                  let obj3 = { value: obj13.publicKeyFingerprint(closure_130_8()), done: false };
                  return obj3;
                } else if ("pending_login" === op) {
                  ticket = closure_129_1.ticket;
                  if (null == ticket) {
                    closure_1_11();
                  } else {
                    let obj4 = { step: closure_2_0(15988).RemoteAuthStep.PENDING_LOGIN, ticket };
                    c7(obj4);
                    const HTTP = closure_2_0(1272).HTTP;
                    const request = { url: constants2.REMOTE_AUTH_LOGIN, body: null, oldFormErrors: true, rejectWithError: true };
                    let obj5 = { ticket };
                    request.body = obj5;
                    const postResult = HTTP.post(request);
                    HTTP.post(request).then((() => {
                      closure_0 = closure_1_3(/* F125921 */ function() { ... });
                      return () => { ... };
                    })()).catch(() => closure_1_11());
                    const nextPromise = HTTP.post(request).then((() => {
                      closure_0 = closure_1_3(/* F125921 */ function() { ... });
                      return () => { ... };
                    })());
                  }
                  c4 = 3;
                } else if ("pending_ticket" === op) {
                  const ComponentDispatch = closure_2_0(1109).ComponentDispatch;
                  ComponentDispatch.dispatch(constants.WAVE_EMPHASIZE);
                  closure_130_1("remote auth handshake started, awaiting ticket/cancel.");
                  closure_129_6 = closure_129_1.encrypted_user_payload;
                  let obj11 = closure_2_0(15992);
                  c3 = 4;
                  c4 = 1;
                  let obj6 = { value: obj11.decodeEncodedUserRecord(closure_130_8(), closure_129_6), done: false };
                  return obj6;
                } else if ("cancel" === op) {
                  closure_130_1("remote auth handshake cancelled.");
                  closure_1_10();
                  c4 = 3;
                  let obj7 = { value: undefined, done: true };
                  return obj7;
                } else if ("hello" === op) {
                  const _HermesInternal2 = HermesInternal;
                  closure_130_1("got hello, auth timeout=" + closure_129_1.timeout_ms + "ms");
                  heartbeat_interval = closure_129_1.heartbeat_interval;
                  const _setTimeout = setTimeout;
                  const _Math = Math;
                  const _Math2 = Math;
                  const timeout = setTimeout(() => {
                    c6 = null;
                    if (c7) {
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
                  const obj8 = { value: undefined, done: true };
                  return obj8;
                } else if ("heartbeat_ack" === op) {
                  closure_130_7 = true;
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  !(function warn(arg0) {
                    return logger.warn("[" + Date.now() - data + "ms" + "] " + "received unsupported message");
                  })("received unsupported message");
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                closure_129_3 = value;
                closure_130_1("computed nonce proof");
                let _JSON = JSON;
                const obj10 = { op: "nonce_proof", nonce: closure_129_3 };
                closure_130_2.send(JSON.stringify(obj10));
                c4 = 3;
                obj11 = { value: undefined, done: true };
                return obj11;
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                closure_129_4 = value;
                if (closure_129_4 !== closure_129_1.fingerprint) {
                  const _Error = Error;
                  let _HermesInternal = HermesInternal;
                  const error = new Error("bad fingerprint " + closure_129_4 + " !== " + closure_129_1.fingerprint);
                  throw error;
                } else {
                  closure_130_1("handshake complete awaiting remote auth.");
                  obj13 = { step: closure_2_0(15988).RemoteAuthStep.PENDING_REMOTE_INIT, fingerprint: closure_129_4 };
                  c7(obj13);
                  c4 = 3;
                  const obj14 = { value: undefined, done: true };
                  return obj14;
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj15 = { value, done: true };
              return obj15;
            } else {
              closure_129_7 = value;
              obj = { step: closure_2_0(15988).RemoteAuthStep.PENDING_TICKET, user: closure_129_7 };
              c7(obj);
              c4 = 3;
              const obj16 = { value: undefined, done: true };
              return obj16;
            }
          } catch (tmp91) {
            c4 = tmp;
            throw tmp91;
          }
        }
      })();
      iter.next();
      return iter;
    };
    function onopen() {
      const self = this;
      const apply = closure_13.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_13 = async function _onopen() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp4;
              c2 = 1;
              c3 = 1;
              let obj1 = { value: info(15990).generateRsaKeyPair(), done: false };
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj2 = { value, done: true };
              return obj2;
            } else {
              closure_129_3 = value;
              let obj4 = info(15990);
              c2 = 2;
              c3 = 1;
              const obj3 = { value: obj4.serializePublicKey(closure_129_3), done: false };
              return obj3;
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj4 = { value, done: true };
              return obj4;
            } else {
              closure_129_4 = value;
              closure_0 = closure_129_1;
              obj1 = info(15990);
              c2 = 3;
              c3 = 1;
              const obj5 = { value: obj1.publicKeyFingerprint(closure_129_3), done: false };
              return obj5;
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
            const obj6 = { op: "init", encoded_public_key: closure_129_4 };
            closure_129_2.send(JSON.stringify(obj6));
            getKeyPair.current = closure_129_3;
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c3 = tmp;
          throw tmp16;
        }
      }
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
      combined1 = "wss:" + combined;
    }
    let obj2 = closure_1(flag[8])(combined1);
    logger.info("[0ms] connecting to " + combined1);
    c3 = null;
    c4 = null;
    c5 = null;
    c6 = null;
    c7 = true;
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
      RemoteAuthCryptoDefault.release();
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
};