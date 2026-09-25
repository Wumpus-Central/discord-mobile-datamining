// _runtime/12343__flush.js
import _mod12295 from "metro/12295__.js";
import _mod12296 from "metro/12296__.js";
import _mod12306 from "metro/12306__.js";
import _mod12309 from "metro/12309__.js";
import _mod12318 from "metro/12318__.js";
import _mod12322 from "metro/12322__.js";
import _mod12323 from "metro/12323__.js";
import _mod12332 from "metro/12332__.js";
import _mod12344 from "metro/12344__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

const require = globalThis.__r;

let closure_3 = async function _flush(arg0) {
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
      return { value: "HermesInternal", done: null };
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
        const client = require("metro/12322__.js").getClient();
        if (client) {
          client.flush(closure_0);
        } else {
          if (require("metro/12323__.js").DEBUG_BUILD) {
            const logger = require("metro/12295__.js").logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/12322__.js");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
let closure_4 = async function _close(arg0) {
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
      return { value: "HermesInternal", done: null };
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
        const client = require("metro/12322__.js").getClient();
        if (client) {
          client.close(closure_0);
        } else {
          if (require("metro/12323__.js").DEBUG_BUILD) {
            const logger = require("metro/12295__.js").logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/12322__.js");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod12322.getIsolationScope();
  const currentScope = _mod12322.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    _mod12318.closeSession(tmp3);
    const tmpResult = _mod12318;
  }
  const isolationScope1 = _mod12322.getIsolationScope();
  const tmpResult4 = _mod12322;
  const currentScope1 = _mod12322.getCurrentScope();
  const tmpResult5 = _mod12322;
  const client = _mod12322.getClient();
  const tmp5 = currentScope1.getSession() || isolationScope1.getSession();
  let tmp6 = tmp5;
  if (tmp5) {
    tmp6 = client;
  }
  if (tmp6) {
    client.captureSession(tmp5);
  }
  isolationScope.setSession();
  currentScope.setSession();
  const tmpResult6 = _mod12322;
}

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = _mod12322.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  const currentScope = _mod12322.getCurrentScope();
  const client = _mod12322.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod12323.DEBUG_BUILD) {
      const logger2 = _mod12295.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod12323.DEBUG_BUILD) {
    const logger = _mod12295.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod12306.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = _mod12322.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, captureContext) {
  const currentScope = _mod12322.getCurrentScope();
  return currentScope.captureException(arg0, _mod12344.parseEventHintOrCaptureContext(captureContext));
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
  const currentScope = _mod12322.getCurrentScope();
  return currentScope.captureMessage(arg0, tmp, tmp2);
};
export const captureSession = function captureSession() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag) {
    endSession();
  } else {
    const isolationScope = _mod12322.getIsolationScope();
    const currentScope = _mod12322.getCurrentScope();
    const client = _mod12322.getClient();
    const tmp3 = currentScope.getSession() || isolationScope.getSession();
    let tmp4 = tmp3;
    if (tmp3) {
      tmp4 = client;
    }
    if (tmp4) {
      client.captureSession(tmp3);
    }
  }
};
export const close = function close(arg0) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { endSession };
export const flush = function flush(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isEnabled = function isEnabled() {
  const client = _mod12322.getClient();
  let transport = client;
  if (transport) {
    transport = false !== client.getOptions().enabled;
  }
  if (transport) {
    transport = client.getTransport();
  }
  return transport;
};
export const isInitialized = function isInitialized() {
  return _mod12322.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = _mod12322.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = _mod12322.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = _mod12322.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = _mod12322.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = _mod12322.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = _mod12322.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = _mod12322.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  const client = _mod12322.getClient();
  const isolationScope = _mod12322.getIsolationScope();
  const currentScope = _mod12322.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = _mod12332.DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod12296.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod12296.GLOBAL_OBJ.navigator || {};
  const obj2 = { release, environment, user: null };
  const tmpResult = _mod12318;
  obj2.user = currentScope.getUser() || isolationScope.getUser();
  let tmp5 = userAgent;
  if (userAgent) {
    const obj4 = { userAgent };
    tmp5 = obj4;
  }
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(arg0);
  const session = tmpResult.makeSession(obj2);
  const session1 = isolationScope.getSession();
  let tmp10 = session1;
  if (session1) {
    tmp10 = "ok" === session1.status;
  }
  if (tmp10) {
    _mod12318.updateSession(session1, { status: "exited" });
    const tmpResult2 = _mod12318;
  }
  endSession();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug, arg1, arg2) {
  _require = monitorSlug;
  dependencyMap = arg1;
  function finishCheckIn(status) {
    const obj = {
      monitorSlug,
      status,
      checkInId: captureCheckInResult,
      duration: _mod12309.timestampInSeconds() - closure_3,
    };
    const currentScope = _mod12322.getCurrentScope();
    const client = _mod12322.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (_mod12323.DEBUG_BUILD) {
        const logger2 = _mod12295.logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (_mod12323.DEBUG_BUILD) {
      const logger = _mod12295.logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod12306.uuid4();
    const tmpResult = _mod12306;
  }
  let currentScope = require("metro/12322__.js").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("metro/12322__.js");
  let client = require("metro/12322__.js").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(12323).DEBUG_BUILD) {
      let logger2 = tmp(12295).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    closure_3 = tmp(12309).timestampInSeconds();
    let tmpResult = tmp(12309);
    return tmp(12322).withIsolationScope(() => {
      try {
        const tmp3 = closure_1();
        if (obj.isThenable(tmp3)) {
          const resolved = Promise.resolve(tmp3);
          resolved.then(
            () => {
              finishCheckIn("ok");
            },
            (arg0) => {
              finishCheckIn("error");
              throw arg0;
            },
          );
        } else {
          finishCheckIn("ok");
        }
        return tmp3;
      } catch (tmp12) {
        finishCheckIn("error");
        throw tmp12;
      }
    });
  } else if (tmp(12323).DEBUG_BUILD) {
    let logger = tmp(12295).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("metro/12322__.js");
  captureCheckInResult = require("metro/12306__.js").uuid4();
};
