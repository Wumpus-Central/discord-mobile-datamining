// === Module 13238: _flush ===

// Module 13238 (_flush)
import _mod13190 from "module_13190" /* 13190 */;
import _mod13191 from "module_13191" /* 13191 */;
import _mod13201 from "module_13201" /* 13201 */;
import _mod13204 from "module_13204" /* 13204 */;
import _mod13213 from "module_13213" /* 13213 */;
import _mod13217 from "module_13217" /* 13217 */;
import _mod13218 from "module_13218" /* 13218 */;
import _mod13227 from "module_13227" /* 13227 */;
import _mod13239 from "module_13239" /* 13239 */;
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
        const client = require("module_13217").getClient();
        if (client) {
          client.flush(closure_0);
        } else {
          if (require("module_13218").DEBUG_BUILD) {
            const logger = require("module_13190").logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_13217");
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
        const client = require("module_13217").getClient();
        if (client) {
          client.close(closure_0);
        } else {
          if (require("module_13218").DEBUG_BUILD) {
            const logger = require("module_13190").logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_13217");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod13217.getIsolationScope();
  const currentScope = _mod13217.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    _mod13213.closeSession(tmp3);
    const tmpResult = _mod13213;
  }
  const isolationScope1 = _mod13217.getIsolationScope();
  const tmpResult4 = _mod13217;
  const currentScope1 = _mod13217.getCurrentScope();
  const tmpResult5 = _mod13217;
  const client = _mod13217.getClient();
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
  const tmpResult6 = _mod13217;
}

export function addEventProcessor(arg0) {
  const isolationScope = _mod13217.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
}
export function captureCheckIn(arg0, arg1) {
  const currentScope = _mod13217.getCurrentScope();
  const client = _mod13217.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod13218.DEBUG_BUILD) {
      const logger2 = _mod13190.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod13218.DEBUG_BUILD) {
    const logger = _mod13190.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod13201.uuid4();
}
export function captureEvent(arg0, arg1) {
  const currentScope = _mod13217.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
}
export function captureException(arg0, captureContext) {
  const currentScope = _mod13217.getCurrentScope();
  return currentScope.captureException(arg0, _mod13239.parseEventHintOrCaptureContext(captureContext));
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
  const currentScope = _mod13217.getCurrentScope();
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
    const isolationScope = _mod13217.getIsolationScope();
    const currentScope = _mod13217.getCurrentScope();
    const client = _mod13217.getClient();
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
  const client = _mod13217.getClient();
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
  return _mod13217.getClient();
}
export function lastEventId() {
  const isolationScope = _mod13217.getIsolationScope();
  return isolationScope.lastEventId();
}
export function setContext(arg0, arg1) {
  const isolationScope = _mod13217.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
}
export function setExtra(arg0, arg1) {
  const isolationScope = _mod13217.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
}
export function setExtras(arg0) {
  const isolationScope = _mod13217.getIsolationScope();
  isolationScope.setExtras(arg0);
}
export function setTag(arg0, arg1) {
  const isolationScope = _mod13217.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
}
export function setTags(arg0) {
  const isolationScope = _mod13217.getIsolationScope();
  isolationScope.setTags(arg0);
}
export function setUser(arg0) {
  const isolationScope = _mod13217.getIsolationScope();
  isolationScope.setUser(arg0);
}
export function startSession(arg0) {
  const client = _mod13217.getClient();
  const isolationScope = _mod13217.getIsolationScope();
  const currentScope = _mod13217.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = _mod13227.DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod13191.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod13191.GLOBAL_OBJ.navigator || {};
  const obj2 = { release, environment, user: null };
  const tmpResult = _mod13213;
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
    _mod13213.updateSession(session1, { status: "exited" });
    const tmpResult2 = _mod13213;
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
    const obj = { monitorSlug, status, checkInId: captureCheckInResult, duration: _mod13204.timestampInSeconds() - closure_3 };
    const currentScope = _mod13217.getCurrentScope();
    const client = _mod13217.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (_mod13218.DEBUG_BUILD) {
        const logger2 = _mod13190.logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (_mod13218.DEBUG_BUILD) {
      const logger = _mod13190.logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod13201.uuid4();
    const tmpResult = _mod13201;
  }
  let currentScope = require("module_13217").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("module_13217");
  let client = require("module_13217").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(13218).DEBUG_BUILD) {
      let logger2 = tmp(13190).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    closure_3 = tmp(13204).timestampInSeconds();
    let tmpResult = tmp(13204);
    return tmp(13217).withIsolationScope(() => {
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
  } else if (tmp(13218).DEBUG_BUILD) {
    let logger = tmp(13190).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("module_13217");
  captureCheckInResult = require("module_13201").uuid4();
}