// === Module 12974: _flush ===

// Module 12974 (_flush)
import _mod12926 from "module_12926" /* 12926 */;
import _mod12927 from "module_12927" /* 12927 */;
import _mod12937 from "module_12937" /* 12937 */;
import _mod12940 from "module_12940" /* 12940 */;
import _mod12949 from "module_12949" /* 12949 */;
import _mod12953 from "module_12953" /* 12953 */;
import _mod12954 from "module_12954" /* 12954 */;
import _mod12963 from "module_12963" /* 12963 */;
import _mod12975 from "module_12975" /* 12975 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = async function _flush(arg0) {
  if (c1 === 2) {
    c1 = 3;
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
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        const client = require("module_12953").getClient();
        if (client) {
          client.flush(closure_0);
        } else {
          if (require("module_12954").DEBUG_BUILD) {
            const logger = require("module_12926").logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_12953");
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
      let obj = { value, done: true };
      return obj;
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
        obj = { value, done: true };
        return obj;
      } else {
        const client = require("module_12953").getClient();
        if (client) {
          client.close(closure_0);
        } else {
          if (require("module_12954").DEBUG_BUILD) {
            const logger = require("module_12926").logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_12953");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod12953.getIsolationScope();
  const currentScope = _mod12953.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    let tmpResult = _mod12949;
    tmpResult.closeSession(tmp3);
  }
  tmpResult = _mod12953;
  const isolationScope1 = tmpResult.getIsolationScope();
  const currentScope1 = _mod12953.getCurrentScope();
  const tmpResult1 = _mod12953;
  const client = _mod12953.getClient();
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
  const tmpResult2 = _mod12953;
}

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = _mod12953.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  const currentScope = _mod12953.getCurrentScope();
  const client = _mod12953.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod12954.DEBUG_BUILD) {
      const logger2 = _mod12926.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod12954.DEBUG_BUILD) {
    const logger = _mod12926.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod12937.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = _mod12953.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, captureContext) {
  const currentScope = _mod12953.getCurrentScope();
  return currentScope.captureException(arg0, _mod12975.parseEventHintOrCaptureContext(captureContext));
};
export const captureMessage = function captureMessage(arg0, captureContext) {
  let tmp;
  if (typeof captureContext === "string") {
    tmp = captureContext;
  }
  let tmp2;
  if (typeof captureContext !== "string") {
    let obj = { captureContext };
    tmp2 = obj;
  }
  obj = _mod12953;
  const currentScope = obj.getCurrentScope();
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
    const isolationScope = _mod12953.getIsolationScope();
    const currentScope = _mod12953.getCurrentScope();
    const client = _mod12953.getClient();
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
  const client = _mod12953.getClient();
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
  return _mod12953.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = _mod12953.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = _mod12953.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = _mod12953.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = _mod12953.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = _mod12953.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = _mod12953.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = _mod12953.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  let obj = _mod12953;
  const client = obj.getClient();
  const isolationScope = _mod12953.getIsolationScope();
  const currentScope = _mod12953.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = _mod12963.DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod12927.GLOBAL_OBJ.navigator || {}.userAgent;
  let tmpResult = _mod12949;
  obj = { release, environment, user: null };
  const tmp3 = _mod12927.GLOBAL_OBJ.navigator || {};
  obj.user = currentScope.getUser() || isolationScope.getUser();
  let tmp5 = userAgent;
  if (userAgent) {
    obj = { userAgent };
    tmp5 = obj;
  }
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(arg0);
  const session = tmpResult.makeSession(obj);
  const session1 = isolationScope.getSession();
  let tmp10 = session1;
  if (session1) {
    tmp10 = "ok" === session1.status;
  }
  if (tmp10) {
    tmpResult = _mod12949;
    tmpResult.updateSession(session1, { status: "exited" });
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
    const obj = { monitorSlug, status, checkInId: captureCheckInResult, duration: _mod12940.timestampInSeconds() - closure_3 };
    const currentScope = _mod12953.getCurrentScope();
    const client = _mod12953.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (_mod12954.DEBUG_BUILD) {
        const logger2 = _mod12926.logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (_mod12954.DEBUG_BUILD) {
      const logger = _mod12926.logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod12937.uuid4();
    const tmpResult = _mod12937;
  }
  let currentScope = require("module_12953").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("module_12953");
  let client = require("module_12953").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(12954).DEBUG_BUILD) {
      let logger2 = tmp(12926).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    let tmpResult = tmp(12940);
    closure_3 = tmpResult.timestampInSeconds();
    tmpResult = tmp(12953);
    return tmpResult.withIsolationScope(() => {
      try {
        const tmp3 = closure_1();
        if (obj.isThenable(tmp3)) {
          const resolved = Promise.resolve(tmp3);
          resolved.then(() => {
            finishCheckIn("ok");
          }, (arg0) => {
            finishCheckIn("error");
            throw arg0;
          });
        } else {
          finishCheckIn("ok");
        }
        return tmp3;
      } catch (tmp12) {
        finishCheckIn("error");
        throw tmp12;
      }
    });
  } else if (tmp(12954).DEBUG_BUILD) {
    let logger = tmp(12926).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("module_12953");
  captureCheckInResult = require("module_12937").uuid4();
};