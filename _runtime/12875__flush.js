// _runtime/12875__flush.js
import _mod12827 from "metro/12827__.js";
import _mod12828 from "metro/12828__.js";
import _mod12838 from "metro/12838__.js";
import _mod12841 from "metro/12841__.js";
import _mod12850 from "metro/12850__.js";
import _mod12854 from "metro/12854__.js";
import _mod12855 from "metro/12855__.js";
import _mod12864 from "metro/12864__.js";
import _mod12876 from "metro/12876__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

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
        const client = require("metro/12854__.js").getClient();
        if (client) {
          client.flush(closure_0);
        } else {
          if (require("metro/12855__.js").DEBUG_BUILD) {
            const logger = require("metro/12827__.js").logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/12854__.js");
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
        const client = require("metro/12854__.js").getClient();
        if (client) {
          client.close(closure_0);
        } else {
          if (require("metro/12855__.js").DEBUG_BUILD) {
            const logger = require("metro/12827__.js").logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/12854__.js");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod12854.getIsolationScope();
  const currentScope = _mod12854.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    let tmpResult = _mod12850;
    tmpResult.closeSession(tmp3);
  }
  tmpResult = _mod12854;
  const isolationScope1 = tmpResult.getIsolationScope();
  const currentScope1 = _mod12854.getCurrentScope();
  const tmpResult1 = _mod12854;
  const client = _mod12854.getClient();
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
  const tmpResult2 = _mod12854;
}

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = _mod12854.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  const currentScope = _mod12854.getCurrentScope();
  const client = _mod12854.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod12855.DEBUG_BUILD) {
      const logger2 = _mod12827.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod12855.DEBUG_BUILD) {
    const logger = _mod12827.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod12838.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = _mod12854.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, captureContext) {
  const currentScope = _mod12854.getCurrentScope();
  return currentScope.captureException(arg0, _mod12876.parseEventHintOrCaptureContext(captureContext));
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
  obj = _mod12854;
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
    const isolationScope = _mod12854.getIsolationScope();
    const currentScope = _mod12854.getCurrentScope();
    const client = _mod12854.getClient();
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
  const client = _mod12854.getClient();
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
  return _mod12854.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = _mod12854.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = _mod12854.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = _mod12854.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = _mod12854.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = _mod12854.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = _mod12854.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = _mod12854.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  let obj = _mod12854;
  const client = obj.getClient();
  const isolationScope = _mod12854.getIsolationScope();
  const currentScope = _mod12854.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = _mod12864.DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod12828.GLOBAL_OBJ.navigator || {}.userAgent;
  let tmpResult = _mod12850;
  obj = { release, environment, user: null };
  const tmp3 = _mod12828.GLOBAL_OBJ.navigator || {};
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
    tmpResult = _mod12850;
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
    const obj = {
      monitorSlug,
      status,
      checkInId: captureCheckInResult,
      duration: _mod12841.timestampInSeconds() - closure_3,
    };
    const currentScope = _mod12854.getCurrentScope();
    const client = _mod12854.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (_mod12855.DEBUG_BUILD) {
        const logger2 = _mod12827.logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (_mod12855.DEBUG_BUILD) {
      const logger = _mod12827.logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod12838.uuid4();
    const tmpResult = _mod12838;
  }
  let currentScope = require("metro/12854__.js").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("metro/12854__.js");
  let client = require("metro/12854__.js").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(12855).DEBUG_BUILD) {
      let logger2 = tmp(12827).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    let tmpResult = tmp(12841);
    closure_3 = tmpResult.timestampInSeconds();
    tmpResult = tmp(12854);
    return tmpResult.withIsolationScope(() => {
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
  } else if (tmp(12855).DEBUG_BUILD) {
    let logger = tmp(12827).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("metro/12854__.js");
  captureCheckInResult = require("metro/12838__.js").uuid4();
};
