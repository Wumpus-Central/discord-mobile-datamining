// _runtime/00734_captureCheckIn.js
import _mod686 from "metro/00686__.js";
import addContextToFrame from "00695_addContextToFrame.js";
import getClient from "00713_getClient.js";
import applyClientOptions from "00735_applyClientOptions.js";
import closure_2 from "00005_asyncGeneratorStep.js";

function captureCheckIn(arg0, arg1) {
  const currentScope = getClient.getCurrentScope();
  const obj = getClient;
  const client = getClient.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (tmp(688).DEBUG_BUILD) {
      const debug2 = tmp(689).debug;
      debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (tmp(688).DEBUG_BUILD) {
    const debug = tmp(689).debug;
    debug.warn("Cannot capture check-in. No client defined.");
  }
  const obj2 = getClient;
  return addContextToFrame.uuid4();
}
function _flush() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c1 = 0;
    return (function* (arg0) {
      if (table === 2) {
        table = 3;
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
          table = 2;
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const client = callback(table[1]).getClient();
            if (client) {
              client.flush(tmp14);
            } else {
              if (tmp15(tmp16[3]).DEBUG_BUILD) {
                const debug = tmp15(tmp16[4]).debug;
                debug.warn("Cannot flush events. No client defined.");
              }
              const resolved = Promise.resolve(false);
            }
            table = 3;
            const obj3 = callback(table[1]);
            tmp14 = callback;
          }
        } catch (tmp8) {
          table = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _close() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c1 = 0;
    return (function* (arg0) {
      if (table === 2) {
        table = 3;
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
          table = 2;
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const client = callback(table[1]).getClient();
            if (client) {
              client.close(tmp14);
            } else {
              if (tmp15(tmp16[3]).DEBUG_BUILD) {
                const debug = tmp15(tmp16[4]).debug;
                debug.warn("Cannot flush events and disable SDK. No client defined.");
              }
              const resolved = Promise.resolve(false);
            }
            table = 3;
            const obj3 = callback(table[1]);
            tmp14 = callback;
          }
        } catch (tmp8) {
          table = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export { captureCheckIn };
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = getClient.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, arg1) {
  const currentScope = getClient.getCurrentScope();
  const obj = getClient;
  return currentScope.captureException(arg0, applyClientOptions.parseEventHintOrCaptureContext(arg1));
};
export const captureMessage = function captureMessage(arg0, str) {
  let tmp;
  if (typeof str === "string") {
    tmp = str;
  }
  let tmp2;
  if (typeof str !== "string") {
    let obj = { captureContext: null };
    obj[0] = str;
    tmp2 = obj;
  }
  obj = getClient;
  const currentScope = obj.getCurrentScope();
  return currentScope.captureMessage(arg0, tmp, tmp2);
};
export const captureSession = function captureSession() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const isolationScope = getClient.getIsolationScope();
  const obj3 = getClient;
  if (flag) {
    const currentScope = obj3.getCurrentScope();
    const tmp6 = currentScope.getSession() || isolationScope.getSession();
    if (tmp6) {
      let tmpResult = tmp(710);
      tmpResult.closeSession(tmp6);
    }
    tmpResult = tmp(713);
    const isolationScope1 = tmpResult.getIsolationScope();
    const client = tmp(713).getClient();
    const session = isolationScope1.getSession();
    let tmp9 = session;
    if (session) {
      tmp9 = client;
    }
    if (tmp9) {
      client.captureSession(session);
    }
    isolationScope.setSession();
    const tmpResult1 = tmp(713);
  } else {
    const client1 = obj3.getClient();
    const session1 = isolationScope.getSession();
    let tmp4 = session1;
    if (session1) {
      tmp4 = client1;
    }
    if (tmp4) {
      client1.captureSession(session1);
    }
  }
};
export const close = function close(arg0) {
  const self = this;
  const apply = _close.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endSession = function endSession() {
  const isolationScope = getClient.getIsolationScope();
  const obj = getClient;
  const currentScope = getClient.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    let tmpResult = tmp(710);
    tmpResult.closeSession(tmp3);
  }
  tmpResult = tmp(713);
  const isolationScope1 = tmpResult.getIsolationScope();
  const obj3 = getClient;
  const client = getClient.getClient();
  const session = isolationScope1.getSession();
  let tmp6 = session;
  if (session) {
    tmp6 = client;
  }
  if (tmp6) {
    client.captureSession(session);
  }
  isolationScope.setSession();
};
export const flush = function flush(arg0) {
  const self = this;
  const apply = _flush.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isEnabled = function isEnabled() {
  const client = getClient.getClient();
  let enabled;
  if (client != null) {
    enabled = client.getOptions().enabled;
  }
  let tmp2 = false !== enabled;
  if (tmp2) {
    let transport;
    if (client != null) {
      transport = client.getTransport();
    }
    tmp2 = transport;
  }
  return tmp2;
};
export const isInitialized = function isInitialized() {
  return getClient.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = getClient.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  let obj = getClient;
  const isolationScope = obj.getIsolationScope();
  const currentScope = getClient.getCurrentScope();
  const obj3 = getClient;
  const userAgent = _mod686.GLOBAL_OBJ.navigator || {}.userAgent;
  let tmpResult = tmp(710);
  const tmp3 = _mod686.GLOBAL_OBJ.navigator || {};
  obj = { user: currentScope.getUser() || isolationScope.getUser() };
  let tmp5 = userAgent;
  if (userAgent) {
    obj = { userAgent: null };
    obj[0] = userAgent;
    tmp5 = obj;
  }
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(arg0);
  const session = tmpResult.makeSession(obj);
  const session1 = isolationScope.getSession();
  let status;
  if (session1 != null) {
    status = session1.status;
  }
  if ("ok" === status) {
    tmpResult = tmp(710);
    tmpResult.updateSession(session1, { status: "exited" });
  }
  const tmp4 = currentScope.getUser() || isolationScope.getUser();
  const isolationScope1 = getClient.getIsolationScope();
  const tmpResult1 = getClient;
  const currentScope1 = getClient.getCurrentScope();
  const tmp12 = currentScope1.getSession() || isolationScope1.getSession();
  if (tmp12) {
    tmp(710).closeSession(tmp12);
    const tmpResult3 = tmp(710);
  }
  const tmpResult2 = getClient;
  const isolationScope2 = getClient.getIsolationScope();
  const tmpResult4 = getClient;
  const client = getClient.getClient();
  const session2 = isolationScope2.getSession();
  let tmp15 = session2;
  if (session2) {
    tmp15 = client;
  }
  if (tmp15) {
    client.captureSession(session2);
  }
  isolationScope1.setSession();
  isolationScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  function runCallback() {
    function finishCheckIn(ok) {
      const obj = {
        monitorSlug: callback,
        status: ok,
        checkInId: callback,
        duration: callback(703).timestampInSeconds() - dependencyMap,
      };
      const obj2 = callback(703);
      const currentScope = callback(713).getCurrentScope();
      const obj3 = callback(713);
      const client = callback(713).getClient();
      if (client) {
        if (client.captureCheckIn) {
          client.captureCheckIn(obj, undefined, currentScope);
        } else if (tmp(688).DEBUG_BUILD) {
          const debug2 = tmp(689).debug;
          debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
        }
      } else if (tmp(688).DEBUG_BUILD) {
        const debug = tmp(689).debug;
        debug.warn("Cannot capture check-in. No client defined.");
      }
      const obj4 = callback(713);
      callback(695).uuid4();
    }
    callback = runCallback({ monitorSlug: callback, status: "in_progress" }, finishCheckIn);
    dependencyMap = callback(703).timestampInSeconds();
    try {
      const promise = dependencyMap();
      if (tmp3Result.isThenable(promise)) {
        let nextPromise = promise.then(
          (arg0) => {
            finishCheckIn("ok");
            return arg0;
          },
          (arg0) => {
            finishCheckIn("error");
            throw arg0;
          },
        );
      } else {
        finishCheckIn("ok");
        nextPromise = promise;
      }
      return nextPromise;
    } catch (tmp10) {
      tmp("error");
      throw tmp10;
    }
  }
  return require("00713_getClient.js").withIsolationScope(() => {
    let isolateTrace;
    if (isolateTrace != null) {
      isolateTrace = isolateTrace.isolateTrace;
    }
    if (isolateTrace) {
      let startNewTraceResult = callback(731).startNewTrace(runCallback);
      const obj = callback(731);
    } else {
      startNewTraceResult = runCallback();
    }
    return startNewTraceResult;
  });
};
