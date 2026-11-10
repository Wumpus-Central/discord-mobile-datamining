// === Module 13340: _flush ===

// Module 13340 (_flush)
import _mod13292 from "module_13292" /* 13292 */;
import _mod13293 from "module_13293" /* 13293 */;
import _mod13303 from "module_13303" /* 13303 */;
import _mod13306 from "module_13306" /* 13306 */;
import _mod13315 from "module_13315" /* 13315 */;
import _mod13319 from "module_13319" /* 13319 */;
import _mod13320 from "module_13320" /* 13320 */;
import _mod13329 from "module_13329" /* 13329 */;
import _mod13341 from "module_13341" /* 13341 */;
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
        const client = require("module_13319").getClient();
        if (client) {
          client.flush(closure_0);
        } else {
          if (require("module_13320").DEBUG_BUILD) {
            const logger = require("module_13292").logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_13319");
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
        const client = require("module_13319").getClient();
        if (client) {
          client.close(closure_0);
        } else {
          if (require("module_13320").DEBUG_BUILD) {
            const logger = require("module_13292").logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_13319");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod13319.getIsolationScope();
  const currentScope = _mod13319.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    _mod13315.closeSession(tmp3);
    const tmpResult = _mod13315;
  }
  const isolationScope1 = _mod13319.getIsolationScope();
  const tmpResult4 = _mod13319;
  const currentScope1 = _mod13319.getCurrentScope();
  const tmpResult5 = _mod13319;
  const client = _mod13319.getClient();
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
  const tmpResult6 = _mod13319;
}

export function addEventProcessor(arg0) {
  const isolationScope = _mod13319.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
}
export function captureCheckIn(arg0, arg1) {
  const currentScope = _mod13319.getCurrentScope();
  const client = _mod13319.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod13320.DEBUG_BUILD) {
      const logger2 = _mod13292.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod13320.DEBUG_BUILD) {
    const logger = _mod13292.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod13303.uuid4();
}
export function captureEvent(arg0, arg1) {
  const currentScope = _mod13319.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
}
export function captureException(arg0, captureContext) {
  const currentScope = _mod13319.getCurrentScope();
  return currentScope.captureException(arg0, _mod13341.parseEventHintOrCaptureContext(captureContext));
}
export function captureMessage(arg0, captureContext) {
  let tmp;
  if (typeof captureContext === "string") {
    tmp = captureContext;
  }
  let tmp2;
  if (typeof captureContext !== "string") {
    const obj2 = { captureContext };
    tmp2 = obj2;
  }
  const currentScope = _mod13319.getCurrentScope();
  return currentScope.captureMessage(arg0, tmp, tmp2);
}
export function captureSession() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag) {
    endSession();
  } else {
    const isolationScope = _mod13319.getIsolationScope();
    const currentScope = _mod13319.getCurrentScope();
    const client = _mod13319.getClient();
    const tmp3 = currentScope.getSession() || isolationScope.getSession();
    let tmp4 = tmp3;
    if (tmp3) {
      tmp4 = client;
    }
    if (tmp4) {
      client.captureSession(tmp3);
    }
  }
}
export function close(arg0) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { endSession };
export function flush(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function isEnabled() {
  const client = _mod13319.getClient();
  let transport = client;
  if (transport) {
    transport = false !== client.getOptions().enabled;
  }
  if (transport) {
    transport = client.getTransport();
  }
  return transport;
}
export function isInitialized() {
  return _mod13319.getClient();
}
export function lastEventId() {
  const isolationScope = _mod13319.getIsolationScope();
  return isolationScope.lastEventId();
}
export function setContext(arg0, arg1) {
  const isolationScope = _mod13319.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
}
export function setExtra(arg0, arg1) {
  const isolationScope = _mod13319.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
}
export function setExtras(arg0) {
  const isolationScope = _mod13319.getIsolationScope();
  isolationScope.setExtras(arg0);
}
export function setTag(arg0, arg1) {
  const isolationScope = _mod13319.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
}
export function setTags(arg0) {
  const isolationScope = _mod13319.getIsolationScope();
  isolationScope.setTags(arg0);
}
export function setUser(arg0) {
  const isolationScope = _mod13319.getIsolationScope();
  isolationScope.setUser(arg0);
}
export function startSession(arg0) {
  const client = _mod13319.getClient();
  const isolationScope = _mod13319.getIsolationScope();
  const currentScope = _mod13319.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = _mod13329.DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod13293.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod13293.GLOBAL_OBJ.navigator || {};
  const obj2 = { release, environment, user: null };
  const tmpResult = _mod13315;
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
    _mod13315.updateSession(session1, { status: "exited" });
    const tmpResult2 = _mod13315;
  }
  endSession();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
}
export function withMonitor(monitorSlug, arg1, arg2) {
  _require = monitorSlug;
  dependencyMap = arg1;
  function finishCheckIn(status) {
    const obj = { monitorSlug, status, checkInId: captureCheckInResult, duration: _mod13306.timestampInSeconds() - closure_3 };
    const currentScope = _mod13319.getCurrentScope();
    const client = _mod13319.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (_mod13320.DEBUG_BUILD) {
        const logger2 = _mod13292.logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (_mod13320.DEBUG_BUILD) {
      const logger = _mod13292.logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod13303.uuid4();
    const tmpResult = _mod13303;
  }
  let currentScope = require("module_13319").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("module_13319");
  let client = require("module_13319").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(13320).DEBUG_BUILD) {
      let logger2 = tmp(13292).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    closure_3 = tmp(13306).timestampInSeconds();
    let tmpResult = tmp(13306);
    return tmp(13319).withIsolationScope(() => {
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
  } else if (tmp(13320).DEBUG_BUILD) {
    let logger = tmp(13292).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("module_13319");
  captureCheckInResult = require("module_13303").uuid4();
}