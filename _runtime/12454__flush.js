// === Module 12454: _flush ===

// Module 12454 (_flush)
import _mod12406 from "module_12406" /* 12406 */;
import _mod12407 from "module_12407" /* 12407 */;
import _mod12417 from "module_12417" /* 12417 */;
import _mod12420 from "module_12420" /* 12420 */;
import _mod12429 from "module_12429" /* 12429 */;
import _mod12433 from "module_12433" /* 12433 */;
import _mod12434 from "module_12434" /* 12434 */;
import _mod12443 from "module_12443" /* 12443 */;
import _mod12455 from "module_12455" /* 12455 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

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
        const obj = { value, done: true };
        return obj;
      } else {
        const client = require("module_12433").getClient();
        if (client) {
          client.flush(closure_0);
        } else {
          if (require("module_12434").DEBUG_BUILD) {
            const logger = require("module_12406").logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_12433");
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
        const obj = { value, done: true };
        return obj;
      } else {
        const client = require("module_12433").getClient();
        if (client) {
          client.close(closure_0);
        } else {
          if (require("module_12434").DEBUG_BUILD) {
            const logger = require("module_12406").logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_12433");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod12433.getIsolationScope();
  const currentScope = _mod12433.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    _mod12429.closeSession(tmp3);
    const tmpResult = _mod12429;
  }
  const isolationScope1 = _mod12433.getIsolationScope();
  const tmpResult4 = _mod12433;
  const currentScope1 = _mod12433.getCurrentScope();
  const tmpResult5 = _mod12433;
  const client = _mod12433.getClient();
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
  const tmpResult6 = _mod12433;
}

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = _mod12433.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  const currentScope = _mod12433.getCurrentScope();
  const client = _mod12433.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod12434.DEBUG_BUILD) {
      const logger2 = _mod12406.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod12434.DEBUG_BUILD) {
    const logger = _mod12406.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod12417.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = _mod12433.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, captureContext) {
  const currentScope = _mod12433.getCurrentScope();
  return currentScope.captureException(arg0, _mod12455.parseEventHintOrCaptureContext(captureContext));
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
  const currentScope = _mod12433.getCurrentScope();
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
    const isolationScope = _mod12433.getIsolationScope();
    const currentScope = _mod12433.getCurrentScope();
    const client = _mod12433.getClient();
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
  const client = _mod12433.getClient();
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
  return _mod12433.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = _mod12433.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = _mod12433.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = _mod12433.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = _mod12433.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = _mod12433.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = _mod12433.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = _mod12433.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  const client = _mod12433.getClient();
  const isolationScope = _mod12433.getIsolationScope();
  const currentScope = _mod12433.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = _mod12443.DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod12407.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod12407.GLOBAL_OBJ.navigator || {};
  const obj2 = { release, environment, user: null };
  const tmpResult = _mod12429;
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
    _mod12429.updateSession(session1, { status: "exited" });
    const tmpResult2 = _mod12429;
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
    const obj = { monitorSlug, status, checkInId: captureCheckInResult, duration: _mod12420.timestampInSeconds() - closure_3 };
    const currentScope = _mod12433.getCurrentScope();
    const client = _mod12433.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (_mod12434.DEBUG_BUILD) {
        const logger2 = _mod12406.logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (_mod12434.DEBUG_BUILD) {
      const logger = _mod12406.logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod12417.uuid4();
    const tmpResult = _mod12417;
  }
  let currentScope = require("module_12433").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("module_12433");
  let client = require("module_12433").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(12434).DEBUG_BUILD) {
      let logger2 = tmp(12406).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    closure_3 = tmp(12420).timestampInSeconds();
    let tmpResult = tmp(12420);
    return tmp(12433).withIsolationScope(() => {
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
  } else if (tmp(12434).DEBUG_BUILD) {
    let logger = tmp(12406).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("module_12433");
  captureCheckInResult = require("module_12417").uuid4();
};