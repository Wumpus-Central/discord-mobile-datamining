// === Module 12628: ? ===

// Module 12628
import _mod12580 from "module_12580" /* 12580 */;
import _mod12581 from "module_12581" /* 12581 */;
import _mod12587 from "module_12587" /* 12587 */;
import _mod12591 from "module_12591" /* 12591 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12594 */;
import _mod12603 from "module_12603" /* 12603 */;
import _mod12607 from "module_12607" /* 12607 */;
import _mod12608 from "module_12608" /* 12608 */;
import _mod12617 from "module_12617" /* 12617 */;
import _mod12629 from "module_12629" /* 12629 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let _require, c1, dependencyMap;

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
          const obj4 = require("module_12607");
          const client = obj4.getClient();
          if (client) {
            flushResult = client.flush(closure_0);
          } else {
            if (require("module_12608").DEBUG_BUILD) {
              const logger = require("module_12580").logger;
              logger.warn("Cannot flush events. No client defined.");
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
          const obj4 = require("module_12607");
          const client = obj4.getClient();
          if (client) {
            closeResult = client.close(closure_0);
          } else {
            if (require("module_12608").DEBUG_BUILD) {
              const logger = require("module_12580").logger;
              logger.warn("Cannot flush events and disable SDK. No client defined.");
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
function endSession() {
  obj = _mod12607;
  const isolationScope = obj.getIsolationScope();
  const obj3 = _mod12607;
  const currentScope = obj3.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    const tmpResult = _mod12603;
    tmpResult.closeSession(tmp3);
  }
  const tmpResult4 = _mod12607;
  const isolationScope1 = tmpResult4.getIsolationScope();
  const tmpResult5 = _mod12607;
  const currentScope1 = tmpResult5.getCurrentScope();
  const tmpResult6 = _mod12607;
  const client = tmpResult6.getClient();
  const tmp5 = currentScope1.getSession() || isolationScope1.getSession();
  const tmp6 = tmp5 && client;
  if (tmp6) {
    client.captureSession(tmp5);
  }
  isolationScope.setSession();
  currentScope.setSession();
}
let _asyncToGenerator = _asyncToGenerator_mod;

export const addEventProcessor = function addEventProcessor(arg0) {
  obj = _mod12607;
  const isolationScope = obj.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  obj = _mod12607;
  const currentScope = obj.getCurrentScope();
  const obj2 = _mod12607;
  const client = obj2.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod12608.DEBUG_BUILD) {
      const logger2 = _mod12580.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod12608.DEBUG_BUILD) {
    const logger = _mod12580.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  const tmpResult = _mod12591;
  return tmpResult.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  obj = _mod12607;
  const currentScope = obj.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, captureContext) {
  obj = _mod12607;
  const currentScope = obj.getCurrentScope();
  const captureException = currentScope.captureException;
  const obj2 = _mod12629;
  return captureException(arg0, obj2.parseEventHintOrCaptureContext(captureContext));
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
  obj = _mod12607;
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
    obj = _mod12607;
    const isolationScope = obj.getIsolationScope();
    const obj3 = _mod12607;
    const currentScope = obj3.getCurrentScope();
    const obj5 = _mod12607;
    const client = obj5.getClient();
    const tmp3 = currentScope.getSession() || isolationScope.getSession();
    const tmp4 = tmp3 && client;
    if (tmp4) {
      client.captureSession(tmp3);
    }
  }
};
export const close = function close(arg0) {
  return obj(...arguments);
};
export { endSession };
export const flush = function flush(arg0) {
  return obj(...arguments);
};
export const isEnabled = function isEnabled() {
  obj = _mod12607;
  const client = obj.getClient();
  const transport = client && false !== client.getOptions().enabled && client.getTransport();
  return transport;
};
export const isInitialized = function isInitialized() {
  obj = _mod12607;
  return obj.getClient();
};
export const lastEventId = function lastEventId() {
  obj = _mod12607;
  const isolationScope = obj.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  obj = _mod12607;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  obj = _mod12607;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  obj = _mod12607;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  obj = _mod12607;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  obj = _mod12607;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  obj = _mod12607;
  const isolationScope = obj.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  let environment;
  let release;
  obj = _mod12607;
  const client = obj.getClient();
  const obj3 = _mod12607;
  const isolationScope = obj3.getIsolationScope();
  const obj5 = _mod12607;
  const currentScope = obj5.getCurrentScope();
  ({ environment, release } = client && client.getOptions() || {});
  client && client.getOptions() || {};
  if (undefined === environment) {
    environment = _mod12617.DEFAULT_ENVIRONMENT;
  }
  const userAgent = (_mod12581.GLOBAL_OBJ.navigator || {}).userAgent;
  _mod12581.GLOBAL_OBJ.navigator || {};
  const obj2 = { release, environment, user: currentScope.getUser() || isolationScope.getUser() };
  const makeSession = _mod12603.makeSession;
  _mod12603;
  let tmp7 = userAgent;
  currentScope.getUser() || isolationScope.getUser();
  if (tmp7) {
    tmp7 = { userAgent };
    const obj4 = { userAgent };
  }
  const merged = Object.assign(tmp7);
  const merged1 = Object.assign(arg0);
  const session = makeSession(obj2);
  const session1 = isolationScope.getSession();
  const tmp12 = session1 && "ok" === session1.status;
  if (tmp12) {
    const tmpResult2 = _mod12603;
    tmpResult2.updateSession(session1, { status: "exited" });
  }
  endSession();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug, arg1, arg2) {
  let closure_1;
  _require = monitorSlug;
  dependencyMap = arg1;
  function finishCheckIn(status) {
    let obj2;
    obj = { monitorSlug, status, checkInId: _asyncToGenerator, duration: obj2.timestampInSeconds() - closure_3 };
    obj2 = _browserPerformanceTimeOriginMode;
    const obj3 = _mod12607;
    const currentScope = obj3.getCurrentScope();
    const obj4 = _mod12607;
    const client = obj4.getClient();
    if (client) {
      if (client.captureCheckIn) {
        _asyncToGenerator = client.captureCheckIn(obj, undefined, currentScope);
      } else if (_mod12608.DEBUG_BUILD) {
        const logger2 = _mod12580.logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (_mod12608.DEBUG_BUILD) {
      const logger = _mod12580.logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    const tmpResult = _mod12591;
    tmpResult.uuid4();
  }
  obj = { monitorSlug, status: "in_progress" };
  let tmp2 = dependencyMap;
  let obj2 = require("module_12607");
  let currentScope = obj2.getCurrentScope();
  let obj3 = require("module_12607");
  let client = obj3.getClient();
  if (client) {
    let captureCheckInResult;
    if (client.captureCheckIn) {
      captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (require("module_12608").DEBUG_BUILD) {
      let logger2 = tmp(12580).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    _asyncToGenerator = captureCheckInResult;
    let tmpResult = tmp(12594);
    let closure_3 = tmpResult.timestampInSeconds();
    const tmpResult3 = require("module_12607");
    return tmpResult3.withIsolationScope(() => {
      try {
        const tmp2 = closure_1();
        obj = _mod12587;
        if (obj.isThenable(tmp2)) {
          const resolved = Promise.resolve(tmp2);
          resolved.then(() => {
            finishCheckIn("ok");
          }, (arg0) => {
            finishCheckIn("error");
            throw arg0;
          });
        } else {
          finishCheckIn("ok");
        }
        return tmp2;
      } catch (tmp11) {
        finishCheckIn("error");
        throw tmp11;
      }
    });
  } else if (require("module_12608").DEBUG_BUILD) {
    let logger = tmp(12580).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  const tmpResult4 = require("module_12591");
  captureCheckInResult = tmpResult4.uuid4();
};