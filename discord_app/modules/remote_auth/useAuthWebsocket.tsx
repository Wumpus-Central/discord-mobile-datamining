// discord_app/modules/remote_auth/useAuthWebsocket.tsx
import LoggerDefault from "../debug/Logger.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import useStableCallbackDefault from "../../hooks/useStableCallback.tsx";
import typing from "typing.tsx";
import RemoteAuthCryptoDefault from "RemoteAuthCrypto.android.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ ComponentActions: metroRequire, Endpoints: closure_7 } = Constants);
let logger = new LoggerDefault("useAuthWebsocket");
const ReactCompilerGating = fn(558);
const tmp3 = new LoggerDefault("useAuthWebsocket");
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/useAuthWebsocket.tsx");

export const useAuthWebsocket = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(25);
  dependencyMap = undefined !== arg2 && arg2;
  let obj = require("c");
  let tmp = _require;
  const tmp4 = first;
  [r10019, asyncGeneratorStep] = first(noop.useState(0), 2);
  const tmp6 = first(noop.useState(false), 2);
  first = tmp6[0];
  noop = tmp8;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { step: tmp(15906).RemoteAuthStep.INITIALIZING };
    cResult[0] = obj3;
    let first1 = obj3;
  } else {
    first1 = cResult[0];
  }
  const tmp4Result = tmp4(noop.useState(first1), 2);
  const first2 = tmp4Result[0];
  closure_7 = tmp4Result[1];
  logger = obj2.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = new BackoffDefault(1500, 30000);
    cResult[1] = tmp16;
    let tmp12 = tmp16;
  } else {
    tmp12 = cResult[1];
  }
  const pending = tmp12;
  if (cResult[2] !== arg1) {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        if (closure_1) {
          tmp6 = closure_3;
          tmp7 = closure_3(() => { ... });
        } else {
          tmp2 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp4 = closure_5;
          flag = true;
          tmp5 = closure_5(true);
        }
        return;
      }
    }
    cResult[2] = arg1;
    cResult[3] = R;
  } else {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        if (closure_1) {
          tmp6 = closure_3;
          tmp7 = closure_3(() => { ... });
        } else {
          tmp2 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp4 = closure_5;
          flag = true;
          tmp5 = closure_5(true);
        }
        return;
      }
    }
  }
  const tmp19 = useStableCallbackDefault(R);
  closure_10 = tmp19;
  if (cResult[4] !== tmp19) {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        if (closure_1) {
          tmp6 = closure_3;
          tmp7 = closure_3(() => { ... });
        } else {
          tmp2 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp4 = closure_5;
          flag = true;
          tmp5 = closure_5(true);
        }
        return;
      }
    }
    cResult[4] = tmp19;
    cResult[5] = tmp21;
  } else {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        if (closure_1) {
          tmp6 = closure_3;
          tmp7 = closure_3(() => { ... });
        } else {
          tmp2 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp4 = closure_5;
          flag = true;
          tmp5 = closure_5(true);
        }
        return;
      }
    }
  }
  closure_11 = tmp21;
  if (cResult[6] === arg1) {
    class R {
      constructor() {
        obj = { step: closure_0(closure_2[7]).RemoteAuthStep.INITIALIZING };
        tmp = closure_7(obj);
        if (closure_1) {
          tmp6 = closure_3;
          tmp7 = closure_3(() => { ... });
        } else {
          tmp2 = closure_8;
          str = "document is not visible, will defer reconnection when document becomes visible.";
          infoResult = closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
          tmp4 = closure_5;
          flag = true;
          tmp5 = closure_5(true);
        }
        return;
      }
    }
  }
  class G {
    constructor() {
      tmp = closure_1;
      if (closure_1) {
        tmp = closure_4;
      }
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
        tmp10 = closure_3(() => { ... });
      }
      return;
    }
  }
  const items = [first2, arg1, first, tmp6[1]];
  cResult[6] = arg1;
  cResult[7] = first;
  cResult[8] = first2;
  cResult[9] = G;
  cResult[10] = items;
  const tmp5 = first(noop.useState(0), 2);
}) : ((arg0, arg1) => {
  _require = arg0;
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
  state = tmp5[0];
  closure_7 = tmp5[1];
  logger = noop.useRef(null);
  const memo = noop.useMemo(() => new closure_1(flag[8])(1500, 30000), []);
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
  const callback = noop.useCallback(() => {
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
  const items2 = [cancel, arg0, tmp[0], memo, callback, flag];
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
    closure_11 = async function _onmessage2(arg0) {
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
            obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
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
                let obj3 = { value, done: true };
                return obj3;
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
                return { value: "Reflect", done: true };
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj4 = { value, done: true };
                return obj4;
              } else {
                const _JSON2 = JSON;
                closure_129_1 = JSON.parse(data2);
                const op = closure_129_1.op;
                if ("nonce_proof" === op) {
                  encrypted_nonce = closure_129_1.encrypted_nonce;
                  c3 = 2;
                  c4 = 1;
                  let obj5 = { value: info(15908).decryptNonce(closure_130_8(), encrypted_nonce), done: false };
                  return obj5;
                } else if ("pending_remote_init" === op) {
                  closure_1_9.succeed();
                  const ComponentDispatch2 = closure_2_0(1121).ComponentDispatch;
                  ComponentDispatch2.dispatch(constants.WAVE_EMPHASIZE);
                  c3 = 3;
                  c4 = 1;
                  const obj6 = { value: info(15908).publicKeyFingerprint(closure_130_8()), done: false };
                  return obj6;
                } else if ("pending_login" === op) {
                  ticket = closure_129_1.ticket;
                  if (null == ticket) {
                    closure_1_11();
                  } else {
                    let obj7 = { step: closure_2_0(15906).RemoteAuthStep.PENDING_LOGIN, ticket };
                    c7(obj7);
                    const HTTP = closure_2_0(1282).HTTP;
                    const request = { url: constants2.REMOTE_AUTH_LOGIN, body: null, oldFormErrors: true, rejectWithError: true };
                    let obj8 = { ticket };
                    request.body = obj8;
                    const postResult = HTTP.post(request);
                    HTTP.post(request).then((() => {
                      closure_0 = closure_1_3(/* F155369 */ function() { ... });
                      return () => { ... };
                    })()).catch(() => closure_1_11());
                    const nextPromise = HTTP.post(request).then((() => {
                      closure_0 = closure_1_3(/* F155369 */ function() { ... });
                      return () => { ... };
                    })());
                  }
                  c4 = 3;
                } else if ("pending_ticket" === op) {
                  const ComponentDispatch = closure_2_0(1121).ComponentDispatch;
                  ComponentDispatch.dispatch(constants.WAVE_EMPHASIZE);
                  closure_130_1("remote auth handshake started, awaiting ticket/cancel.");
                  closure_129_6 = closure_129_1.encrypted_user_payload;
                  c3 = 4;
                  c4 = 1;
                  const obj9 = { value: closure_2_0(15910).decodeEncodedUserRecord(closure_130_8(), closure_129_6), done: false };
                  return obj9;
                } else if ("cancel" === op) {
                  closure_130_1("remote auth handshake cancelled.");
                  closure_1_10();
                  c4 = 3;
                  let obj10 = { value: undefined, done: true };
                  return obj10;
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
                  let obj11 = { value: undefined, done: true };
                  return obj11;
                } else if ("heartbeat_ack" === op) {
                  closure_130_7 = true;
                  c4 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                } else {
                  !(function warn(arg0) {
                    return logger.warn("[" + Date.now() - data + "ms" + "] " + "received unsupported message");
                  })("received unsupported message");
                  c4 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj13 = { value, done: true };
                return obj13;
              } else {
                closure_129_3 = value;
                closure_130_1("computed nonce proof");
                let _JSON = JSON;
                const obj15 = { op: "nonce_proof", nonce: closure_129_3 };
                closure_130_2.send(JSON.stringify(obj15));
                c4 = 3;
                const obj17 = { value: undefined, done: true };
                return obj17;
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj18 = { value, done: true };
                return obj18;
              } else {
                closure_129_4 = value;
                if (closure_129_4 !== closure_129_1.fingerprint) {
                  const _Error = Error;
                  let _HermesInternal = HermesInternal;
                  const error = new Error("bad fingerprint " + closure_129_4 + " !== " + closure_129_1.fingerprint);
                  throw error;
                } else {
                  closure_130_1("handshake complete awaiting remote auth.");
                  const obj19 = { step: closure_2_0(15906).RemoteAuthStep.PENDING_REMOTE_INIT, fingerprint: closure_129_4 };
                  c7(obj19);
                  c4 = 3;
                  const obj20 = { value: undefined, done: true };
                  return obj20;
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj21 = { value, done: true };
              return obj21;
            } else {
              closure_129_7 = value;
              let obj = { step: closure_2_0(15906).RemoteAuthStep.PENDING_TICKET, user: closure_129_7 };
              c7(obj);
              c4 = 3;
              const obj22 = { value: undefined, done: true };
              return obj22;
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
    closure_13 = async function _onopen2() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
              closure_1 = tmp4;
              c2 = 1;
              c3 = 1;
              const obj6 = { value: info(15908).generateRsaKeyPair(), done: false };
              return obj6;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_129_3 = value;
              c2 = 2;
              c3 = 1;
              const obj9 = { value: info(15908).serializePublicKey(closure_129_3), done: false };
              return obj9;
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              closure_129_4 = value;
              closure_0 = closure_129_1;
              c2 = 3;
              c3 = 1;
              const obj11 = { value: info(15908).publicKeyFingerprint(closure_129_3), done: false };
              return obj11;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const _HermesInternal = HermesInternal;
            closure_0("connected, handshaking with fingerprint: " + value);
            const _JSON = JSON;
            const obj12 = { op: "init", encoded_public_key: closure_129_4 };
            closure_129_2.send(JSON.stringify(obj12));
            getKeyPair.current = closure_129_3;
            c3 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
    let obj2 = closure_1(flag[10])(combined1);
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
});