// === Module 745: ? ===

// Module 745
import _mod697 from "module_697" /* 697 */;
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import uuid4 from "uuid4" /* 706 */;
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 714 */;
import closeSession from "closeSession" /* 721 */;
import _mod724 from "module_724" /* 724 */;
import continueTrace from "continueTrace" /* 742 */;
import applyClientOptions from "applyClientOptions" /* 746 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let _require, c1, closure_1, dependencyMap;

function captureCheckIn(arg0, arg1) {
  obj = _mod724;
  const currentScope = obj.getCurrentScope();
  const obj2 = _mod724;
  const client = obj2.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod699.DEBUG_BUILD) {
      const debug2 = CONSOLE_LEVELS.debug;
      debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod699.DEBUG_BUILD) {
    const debug = CONSOLE_LEVELS.debug;
    debug.warn("Cannot capture check-in. No client defined.");
  }
  const tmpResult = uuid4;
  return tmpResult.uuid4();
}
let obj = function _flush() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let flushResult;
          const obj4 = require("module_724");
          const client = obj4.getClient();
          if (client) {
            flushResult = client.flush(closure_0);
          } else {
            if (require("module_699").DEBUG_BUILD) {
              const debug = require("CONSOLE_LEVELS").debug;
              debug.warn("Cannot flush events. No client defined.");
            }
            flushResult = Promise.resolve(false);
          }
          c1 = 3;
          obj = { value: flushResult, done: true };
          return obj;
        }
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
obj = function _close() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let closeResult;
          const obj4 = require("module_724");
          const client = obj4.getClient();
          if (client) {
            closeResult = client.close(closure_0);
          } else {
            if (require("module_699").DEBUG_BUILD) {
              const debug = require("CONSOLE_LEVELS").debug;
              debug.warn("Cannot flush events and disable SDK. No client defined.");
            }
            closeResult = Promise.resolve(false);
          }
          c1 = 3;
          obj = { value: closeResult, done: true };
          return obj;
        }
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addEventProcessor = function addEventProcessor(arg0) {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export { captureCheckIn };
export const captureEvent = function captureEvent(arg0, arg1) {
  obj = _mod724;
  const currentScope = obj.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(error, captureContext) {
  obj = _mod724;
  const currentScope = obj.getCurrentScope();
  const captureException = currentScope.captureException;
  const obj2 = applyClientOptions;
  return captureException(error, obj2.parseEventHintOrCaptureContext(captureContext));
};
export const captureMessage = function captureMessage(arg0, captureContext) {
  let tmp;
  if (typeof captureContext === "string") {
    tmp = captureContext;
  }
  let tmp2;
  if (typeof captureContext !== "string") {
    tmp2 = { captureContext };
    const obj2 = { captureContext };
  }
  obj = _mod724;
  const currentScope = obj.getCurrentScope();
  return currentScope.captureMessage(arg0, tmp, tmp2);
};
export const captureSession = function captureSession() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  const obj3 = _mod724;
  if (flag) {
    const currentScope = obj3.getCurrentScope();
    const tmp6 = currentScope.getSession() || isolationScope.getSession();
    if (tmp6) {
      const tmpResult = closeSession;
      tmpResult.closeSession(tmp6);
    }
    const tmpResult3 = _mod724;
    const isolationScope1 = tmpResult3.getIsolationScope();
    const tmpResult4 = _mod724;
    const client = tmpResult4.getClient();
    const session = isolationScope1.getSession();
    const tmp9 = session && client;
    if (tmp9) {
      client.captureSession(session);
    }
    isolationScope.setSession();
  } else {
    const client1 = obj3.getClient();
    const session1 = isolationScope.getSession();
    const tmp4 = session1 && client1;
    if (tmp4) {
      client1.captureSession(session1);
    }
  }
};
export const close = function close(arg0) {
  return obj(...arguments);
};
export const endSession = function endSession() {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  const obj3 = _mod724;
  const currentScope = obj3.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    const tmpResult = closeSession;
    tmpResult.closeSession(tmp3);
  }
  const tmpResult3 = _mod724;
  const isolationScope1 = tmpResult3.getIsolationScope();
  const tmpResult4 = _mod724;
  const client = tmpResult4.getClient();
  const session = isolationScope1.getSession();
  const tmp6 = session && client;
  if (tmp6) {
    client.captureSession(session);
  }
  isolationScope.setSession();
};
export const flush = function flush(arg0) {
  return obj(...arguments);
};
export const isEnabled = function isEnabled() {
  obj = _mod724;
  const client = obj.getClient();
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
  obj = _mod724;
  return obj.getClient();
};
export const lastEventId = function lastEventId() {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  obj = _mod724;
  const isolationScope = obj.getIsolationScope();
  const obj3 = _mod724;
  const currentScope = obj3.getCurrentScope();
  const userAgent = (_mod697.GLOBAL_OBJ.navigator || {}).userAgent;
  _mod697.GLOBAL_OBJ.navigator || {};
  const makeSession = closeSession.makeSession;
  closeSession;
  let tmp6 = userAgent;
  const obj2 = { user: currentScope.getUser() || isolationScope.getUser() };
  if (tmp6) {
    tmp6 = { userAgent };
    const obj4 = { userAgent };
  }
  const merged = Object.assign(tmp6);
  const merged1 = Object.assign(arg0);
  const session = makeSession(obj2);
  const session1 = isolationScope.getSession();
  let status;
  if (session1 != null) {
    status = session1.status;
  }
  if ("ok" === status) {
    const tmpResult7 = closeSession;
    tmpResult7.updateSession(session1, { status: "exited" });
  }
  const tmpResult8 = _mod724;
  const isolationScope1 = tmpResult8.getIsolationScope();
  const tmpResult9 = _mod724;
  const currentScope1 = tmpResult9.getCurrentScope();
  const tmp13 = currentScope1.getSession() || isolationScope1.getSession();
  if (tmp13) {
    const tmpResult10 = closeSession;
    tmpResult10.closeSession(tmp13);
  }
  const tmpResult11 = _mod724;
  const isolationScope2 = tmpResult11.getIsolationScope();
  const tmpResult12 = _mod724;
  const client = tmpResult12.getClient();
  const session2 = isolationScope2.getSession();
  const tmp16 = session2 && client;
  if (tmp16) {
    client.captureSession(session2);
  }
  isolationScope1.setSession();
  isolationScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug, arg1, arg2) {
  _require = monitorSlug;
  dependencyMap = arg1;
  let isolateTrace = arg2;
  function runCallback() {
    let closure_0;
    function finishCheckIn(error) {
      let obj2;
      obj = { monitorSlug: checkInId, status: error, checkInId, duration: obj2.timestampInSeconds() - closure_1 };
      obj2 = browserPerformanceTimeOrigin;
      const obj3 = _mod724;
      const currentScope = obj3.getCurrentScope();
      const obj4 = _mod724;
      const client = obj4.getClient();
      if (client) {
        if (client.captureCheckIn) {
          client.captureCheckIn(obj, undefined, currentScope);
        } else if (_mod699.DEBUG_BUILD) {
          const debug2 = CONSOLE_LEVELS.debug;
          debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
        }
      } else if (_mod699.DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS.debug;
        debug.warn("Cannot capture check-in. No client defined.");
      }
      const tmpResult = uuid4;
      tmpResult.uuid4();
    }
    obj = { monitorSlug, status: "in_progress" };
    monitorSlug = runCallback(obj, finishCheckIn);
    let obj2 = monitorSlug(closure_1[6]);
    const tmp2 = closure_1;
    closure_1 = obj2.timestampInSeconds();
    const tmp = monitorSlug;
    try {
      let nextPromise;
      const promise = closure_1();
      let tmpResult = tmp(tmp2[7]);
      if (tmpResult.isThenable(promise)) {
        nextPromise = promise.then((result) => {
          finishCheckIn("ok");
          return result;
        }, (arg0) => {
          finishCheckIn("error");
          throw arg0;
        });
      } else {
        finishCheckIn("ok");
        nextPromise = promise;
      }
      return nextPromise;
    } catch (tmp8) {
      finishCheckIn("error");
      throw tmp8;
    }
  }
  obj = require("module_724");
  return obj.withIsolationScope(() => {
    let startNewTraceResult;
    isolateTrace = undefined;
    if (isolateTrace != null) {
      isolateTrace = isolateTrace.isolateTrace;
    }
    if (isolateTrace) {
      obj = continueTrace;
      startNewTraceResult = obj.startNewTrace(runCallback);
    } else {
      startNewTraceResult = runCallback();
    }
    return startNewTraceResult;
  });
};