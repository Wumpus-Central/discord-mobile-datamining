// _runtime/00745_captureCheckIn.js
import _mod697 from "metro/00697__.js";
import _mod699 from "metro/00699__.js";
import consoleSandbox from "00700_consoleSandbox.js";
import uuid4 from "00706_uuid4.js";
import dateTimestampInSeconds from "00714_dateTimestampInSeconds.js";
import closeSession from "00721_closeSession.js";
import _mod724 from "metro/00724__.js";
import _mod742 from "metro/00742__.js";
import applyClientOptions from "00746_applyClientOptions.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

const require = globalThis.__r;

function captureCheckIn(arg0, arg1) {
  const currentScope = _mod724.getCurrentScope();
  const client = _mod724.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod699.DEBUG_BUILD) {
      const debug2 = consoleSandbox.debug;
      debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod699.DEBUG_BUILD) {
    const debug = consoleSandbox.debug;
    debug.warn("Cannot capture check-in. No client defined.");
  }
  return uuid4.uuid4();
}
let closure_4 = async function _flush(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const client = require("metro/00724__.js").getClient();
        if (client) {
          client.flush(closure_0);
        } else {
          if (require("metro/00699__.js").DEBUG_BUILD) {
            const debug = require("consoleSandbox").debug;
            debug.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/00724__.js");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
let closure_5 = async function _close(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const client = require("metro/00724__.js").getClient();
        if (client) {
          client.close(closure_0);
        } else {
          if (require("metro/00699__.js").DEBUG_BUILD) {
            const debug = require("consoleSandbox").debug;
            debug.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/00724__.js");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = _mod724.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export { captureCheckIn };
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = _mod724.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(error, captureContext) {
  const currentScope = _mod724.getCurrentScope();
  return currentScope.captureException(error, applyClientOptions.parseEventHintOrCaptureContext(captureContext));
};
export const captureMessage = function captureMessage(arg0, captureContext) {
  let tmp;
  if (typeof captureContext === "string") {
    tmp = captureContext;
  }
  let tmp2;
  if (typeof captureContext !== "string") {
    const obj2 = { captureContext };
    tmp2 = obj2;
  }
  const currentScope = _mod724.getCurrentScope();
  return currentScope.captureMessage(arg0, tmp, tmp2);
};
export const captureSession = function captureSession() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const isolationScope = _mod724.getIsolationScope();
  const obj3 = _mod724;
  if (flag) {
    const currentScope = obj3.getCurrentScope();
    const tmp6 = currentScope.getSession() || isolationScope.getSession();
    if (tmp6) {
      closeSession.closeSession(tmp6);
      const tmpResult = closeSession;
    }
    const isolationScope1 = _mod724.getIsolationScope();
    const tmpResult3 = _mod724;
    const client = _mod724.getClient();
    const session = isolationScope1.getSession();
    let tmp9 = session;
    if (session) {
      tmp9 = client;
    }
    if (tmp9) {
      client.captureSession(session);
    }
    isolationScope.setSession();
    const tmpResult4 = _mod724;
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
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endSession = function endSession() {
  const isolationScope = _mod724.getIsolationScope();
  const currentScope = _mod724.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    closeSession.closeSession(tmp3);
    const tmpResult = closeSession;
  }
  const isolationScope1 = _mod724.getIsolationScope();
  const tmpResult3 = _mod724;
  const client = _mod724.getClient();
  const session = isolationScope1.getSession();
  let tmp6 = session;
  if (session) {
    tmp6 = client;
  }
  if (tmp6) {
    client.captureSession(session);
  }
  isolationScope.setSession();
  const tmpResult4 = _mod724;
};
export const flush = function flush(arg0) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isEnabled = function isEnabled() {
  const client = _mod724.getClient();
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
  return _mod724.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = _mod724.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = _mod724.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = _mod724.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = _mod724.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = _mod724.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = _mod724.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = _mod724.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  const isolationScope = _mod724.getIsolationScope();
  const currentScope = _mod724.getCurrentScope();
  const userAgent = _mod697.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod697.GLOBAL_OBJ.navigator || {};
  const tmpResult = closeSession;
  const tmp4 = currentScope.getUser() || isolationScope.getUser();
  let tmp5 = userAgent;
  if (userAgent) {
    const obj4 = { userAgent };
    tmp5 = obj4;
  }
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(arg0);
  const session = tmpResult.makeSession({ user: currentScope.getUser() || isolationScope.getUser() });
  const session1 = isolationScope.getSession();
  let status;
  if (session1 != null) {
    status = session1.status;
  }
  if ("ok" === status) {
    closeSession.updateSession(session1, { status: "exited" });
    const tmpResult7 = closeSession;
  }
  const obj2 = { user: currentScope.getUser() || isolationScope.getUser() };
  const isolationScope1 = _mod724.getIsolationScope();
  const tmpResult8 = _mod724;
  const currentScope1 = _mod724.getCurrentScope();
  const tmp12 = currentScope1.getSession() || isolationScope1.getSession();
  if (tmp12) {
    closeSession.closeSession(tmp12);
    const tmpResult10 = closeSession;
  }
  const tmpResult9 = _mod724;
  const isolationScope2 = _mod724.getIsolationScope();
  const tmpResult11 = _mod724;
  const client = _mod724.getClient();
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
export const withMonitor = function withMonitor(monitorSlug, arg1, arg2) {
  _require = monitorSlug;
  dependencyMap = arg1;
  let isolateTrace = arg2;
  function runCallback() {
    function finishCheckIn(ok) {
      const obj = {
        monitorSlug: checkInId,
        status: ok,
        checkInId,
        duration: dateTimestampInSeconds.timestampInSeconds() - closure_1,
      };
      const currentScope = _mod724.getCurrentScope();
      const client = _mod724.getClient();
      if (client) {
        if (client.captureCheckIn) {
          client.captureCheckIn(obj, undefined, currentScope);
        } else if (_mod699.DEBUG_BUILD) {
          const debug2 = consoleSandbox.debug;
          debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
        }
      } else if (_mod699.DEBUG_BUILD) {
        const debug = consoleSandbox.debug;
        debug.warn("Cannot capture check-in. No client defined.");
      }
      uuid4.uuid4();
      const tmpResult = uuid4;
    }
    monitorSlug = runCallback({ monitorSlug, status: "in_progress" }, finishCheckIn);
    dependencyMap = monitorSlug(714).timestampInSeconds();
    try {
      const promise = dependencyMap();
      if (tmp3Result.isThenable(promise)) {
        let nextPromise = promise.then(
          (result) => {
            finishCheckIn("ok");
            return result;
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
  return require("metro/00724__.js").withIsolationScope(() => {
    isolateTrace = undefined;
    if (isolateTrace != null) {
      isolateTrace = isolateTrace.isolateTrace;
    }
    if (isolateTrace) {
      let startNewTraceResult = _mod742.startNewTrace(runCallback);
    } else {
      startNewTraceResult = runCallback();
    }
    return startNewTraceResult;
  });
};
