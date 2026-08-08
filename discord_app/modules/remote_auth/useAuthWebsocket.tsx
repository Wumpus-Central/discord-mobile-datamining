// discord_app/modules/remote_auth/useAuthWebsocket.tsx
import RemoteAuthStep from "RemoteAuthStep";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import ME from "ME";

let closure_6;
let error;
const require = arg1;
({ ComponentActions: closure_6, Endpoints: error } = ME);
const metroImportAll = new require("ME")("useAuthWebsocket");
const tmp3 = new require("ME")("useAuthWebsocket");
const result = require("noop").fileFinishedImporting("modules/remote_auth/useAuthWebsocket.tsx");

export const useAuthWebsocket = function useAuthWebsocket(callback, arg1) {
  const _require = callback;
  const importDefault = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let RemoteAuthStep;
  let first;
  let React;
  let state;
  let closure_7;
  let closure_8;
  let memo;
  let cancel;
  callback = undefined;
  let tmp = first(React.useState(0), 2);
  RemoteAuthStep = tmp[1];
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp4;
  const tmp5 = first(React.useState({ step: _require(flag[5]).RemoteAuthStep.INITIALIZING }), 2);
  state = tmp5[0];
  closure_7 = tmp5[1];
  closure_8 = React.useRef(null);
  memo = React.useMemo(() => new callback2(flag[6])(1500, 30000), []);
  cancel = importDefault(flag[7])(() => {
    callback4({ step: callback(flag[5]).RemoteAuthStep.INITIALIZING });
    if (closure_1) {
      callback3((arg0) => arg0 + 1);
    } else {
      logger.info("document is not visible, will defer reconnection when document becomes visible.");
      _undefined(true);
    }
  });
  const items = [cancel, memo];
  callback = React.useCallback(() => {
    logger.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session.");
    callback4({ step: callback(flag[5]).RemoteAuthStep.INITIALIZING });
    if (!memo.pending) {
      memo.fail(cancel);
    }
  }, items);
  const items1 = [state, arg1, first, tmp2[1]];
  const effect = React.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = first;
    }
    if (tmp) {
      tmp = state.step === callback(flag[5]).RemoteAuthStep.INITIALIZING;
    }
    if (tmp) {
      logger.info("reconnecting, now that document is visible");
      _undefined(false);
      callback3((arg0) => arg0 + 1);
    }
  }, items1);
  const items2 = [cancel, callback, tmp[0], memo, callback, flag];
  const effect1 = React.useEffect(() => {
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
        _onmessage();
      }
    }
    function onmessage(arg0) {
      const self = this;
      const apply = _onmessage.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _onmessage() {
      let self = this;
      const tmp = _null((arg0) => {
        let closure_0 = arg0;
        let c3 = 0;
        let c4 = 0;
        const iter = (function*(arg0) {
          if (catchPromise === 2) {
            catchPromise = 3;
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
              catchPromise = 2;
              if (0 === RemoteAuthStep) {
                if (arg0 === 1) {
                  catchPromise = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  catchPromise = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let c2 = tmp5;
                  let c1 = tmp2;
                  let data;
                  data = data.data;
                  c1 = undefined;
                  c2 = undefined;
                  RemoteAuthStep = undefined;
                  catchPromise = undefined;
                  let c5;
                  let c6;
                  let closure_7;
                  let c8;
                  RemoteAuthStep = 1;
                  catchPromise = 1;
                  return { value: "ct", done: "Array" };
                }
              } else if (1 === tmp5) {
                if (arg0 === 1) {
                  catchPromise = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  catchPromise = 3;
                  let obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  catchPromise = c1;
                  catchPromise = globalThis;
                  const _JSON2 = JSON;
                  catchPromise = outer2_0;
                  const outer2_1 = JSON.parse(outer2_0);
                  catchPromise = outer2_1;
                  const op = outer2_1.op;
                  if ("nonce_proof" === op) {
                    const outer1_2 = outer1_1.encrypted_nonce;
                    let obj15 = outer2_1(outer2_2[9]);
                    RemoteAuthStep = 2;
                    catchPromise = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = obj15.decryptNonce(outer2_8(), outer1_2);
                    return obj2;
                  } else if ("pending_remote_init" === op) {
                    outer1_9.succeed();
                    const ComponentDispatch2 = outer2_0(outer2_2[10]).ComponentDispatch;
                    ComponentDispatch2.dispatch(outer2_6.WAVE_EMPHASIZE);
                    let obj13 = outer2_1(outer2_2[9]);
                    RemoteAuthStep = 3;
                    catchPromise = 1;
                    let obj3 = { value: null, done: false };
                    obj3[0] = obj13.publicKeyFingerprint(outer1_8());
                    return obj3;
                  } else if ("pending_login" === op) {
                    const outer1_5 = outer1_1.ticket;
                    if (null == outer1_5) {
                      outer1_11();
                    } else {
                      catchPromise = c1;
                      catchPromise = c2;
                      catchPromise = outer1_7;
                      let obj4 = { step: null, ticket: null };
                      catchPromise = outer2_0;
                      catchPromise = outer2_2;
                      obj4[0] = outer2_0(outer2_2[5]).RemoteAuthStep.PENDING_LOGIN;
                      catchPromise = outer1_5;
                      obj4[1] = outer1_5;
                      catchPromise = outer1_7(obj4);
                      catchPromise = outer2_0;
                      catchPromise = outer2_2;
                      const HTTP = outer2_0(outer2_2[11]).HTTP;
                      let obj5 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
                      catchPromise = outer2_7;
                      obj5[0] = outer2_7.REMOTE_AUTH_LOGIN;
                      let obj6 = { ticket: null };
                      catchPromise = outer1_5;
                      obj6[0] = outer1_5;
                      obj5[1] = obj6;
                      const postResult = HTTP.post(obj5);
                      catchPromise = HTTP.post(obj5).then((() => { ... })()).catch(() => { ... });
                      const nextPromise = HTTP.post(obj5).then((() => { ... })());
                    }
                    catchPromise = 3;
                  } else if ("pending_ticket" === op) {
                    const ComponentDispatch = outer2_0(outer2_2[10]).ComponentDispatch;
                    ComponentDispatch.dispatch(outer2_6.WAVE_EMPHASIZE);
                    outer1_1("remote auth handshake started, awaiting ticket/cancel.");
                    let outer1_6 = outer1_1.encrypted_user_payload;
                    let obj11 = outer2_0(outer2_2[13]);
                    RemoteAuthStep = 4;
                    catchPromise = 1;
                    let obj7 = { value: null, done: false };
                    obj7[0] = obj11.decodeEncodedUserRecord(outer1_8(), outer1_6);
                    return obj7;
                  } else if ("cancel" === op) {
                    outer1_1("remote auth handshake cancelled.");
                    outer1_10();
                    catchPromise = 3;
                    const obj8 = { value: null, done: true };
                    obj8[0] = undefined;
                    return obj8;
                  } else if ("hello" === op) {
                    const _HermesInternal2 = HermesInternal;
                    outer1_1("got hello, auth timeout=" + outer1_1.timeout_ms + "ms");
                    outer1_8 = outer1_1.heartbeat_interval;
                    const _setTimeout = setTimeout;
                    const _Math = Math;
                    const _Math2 = Math;
                    outer1_6 = setTimeout(() => { ... }, Math.floor(outer1_8 * Math.random()));
                    catchPromise = 3;
                    const obj9 = { value: null, done: true };
                    obj9[0] = undefined;
                    return obj9;
                  } else if ("heartbeat_ack" === op) {
                    outer1_7 = true;
                    catchPromise = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    !(function warn() { ... })("received unsupported message");
                    catchPromise = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
              } else if (2 === tmp5) {
                if (arg0 === 1) {
                  catchPromise = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  catchPromise = 3;
                  const obj10 = { value: null, done: true };
                  obj10[0] = arg1;
                  return obj10;
                } else {
                  RemoteAuthStep = arg1;
                  outer2_1("computed nonce proof");
                  let _JSON = JSON;
                  obj11 = { op: "nonce_proof", nonce: null };
                  obj11[1] = RemoteAuthStep;
                  outer2_2.send(JSON.stringify(obj11));
                  catchPromise = 3;
                  const obj12 = { value: null, done: true };
                  obj12[0] = undefined;
                  return obj12;
                }
              } else if (3 === tmp5) {
                if (arg0 === 1) {
                  catchPromise = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  catchPromise = 3;
                  obj13 = { value: null, done: true };
                  obj13[0] = arg1;
                  return obj13;
                } else {
                  const outer2_4 = arg1;
                  if (outer2_4 !== outer2_1.fingerprint) {
                    const _Error = Error;
                    let _HermesInternal = HermesInternal;
                    const error = new Error("bad fingerprint " + c4 + " !== " + outer1_1.fingerprint);
                    throw error;
                  } else {
                    outer2_1("handshake complete awaiting remote auth.");
                    const obj14 = { step: null, fingerprint: null };
                    obj14[0] = outer2_0(outer2_2[5]).RemoteAuthStep.PENDING_REMOTE_INIT;
                    obj14[1] = catchPromise;
                    outer1_7(obj14);
                    catchPromise = 3;
                    obj15 = { value: null, done: true };
                    obj15[0] = undefined;
                    return obj15;
                  }
                }
              } else if (arg0 === 1) {
                catchPromise = 3;
                throw arg1;
              } else if (arg0 === 2) {
                catchPromise = 3;
                const obj16 = { value: null, done: true };
                obj16[0] = arg1;
                return obj16;
              } else {
                closure_7 = arg1;
                obj = { step: null, user: null };
                obj[0] = outer2_0(outer2_2[5]).RemoteAuthStep.PENDING_TICKET;
                obj[1] = closure_7;
                outer1_7(obj);
                catchPromise = 3;
                const obj17 = { value: null, done: true };
                obj17[0] = undefined;
                return obj17;
              }
            } catch (tmp91) {
              throw tmp91;
            }
          }
        })();
        iter.next();
        return iter;
      });
      const _onmessage = tmp;
      let apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function onopen() {
      const self = this;
      const apply = _onopen.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _onopen() {
      const self = this;
      const tmp = _null(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp4;
                c2 = 1;
                c3 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = outer2_1(outer2_2[9]).generateRsaKeyPair();
                return obj1;
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                c3 = arg1;
                let obj4 = outer2_1(outer2_2[9]);
                c2 = 2;
                c3 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj4.serializePublicKey(c3);
                return obj3;
              }
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                let _slicedToArray = arg1;
                const callback = closure_1;
                obj1 = outer2_1(outer2_2[9]);
                c2 = 3;
                c3 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = obj1.publicKeyFingerprint(c3);
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const _HermesInternal = HermesInternal;
              callback("connected, handshaking with fingerprint: " + arg1);
              const _JSON = JSON;
              const obj6 = { op: "init", encoded_public_key: null };
              obj6[1] = _slicedToArray;
              c2.send(JSON.stringify(obj6));
              outer1_8.current = c3;
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp16) {
            c3 = tmp;
            throw tmp16;
          }
        }
      });
      const _onopen = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function onclose(code) {
      const combined = "disconnected, code: " + code.code + " " + code.reason;
      getKeyPair.info("[" + `${Date.now() - closure_0}ms` + "] " + combined);
      _onmessage();
    }
    function onerror(arg0) {
      const combined = "disconnected, error: " + JSON.stringify(arg0);
      getKeyPair.info("[" + `${Date.now() - closure_0}ms` + "] " + combined);
      _onmessage();
    }
    let closure_0 = Date.now();
    let combined = "" + window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT + "/?v=2";
    let combined1 = combined;
    if (combined.startsWith("//")) {
      let _HermesInternal = HermesInternal;
      combined1 = "wss:" + combined;
    }
    let obj2 = callback2(flag[8])(combined1);
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
      doHeartbeat.cancel();
      info(flag[9]).release();
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