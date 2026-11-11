// _runtime/09779__flush.js
import _mod9731 from "metro/09731__.js";
import _mod9732 from "metro/09732__.js";
import _mod9742 from "metro/09742__.js";
import _mod9745 from "metro/09745__.js";
import _mod9754 from "metro/09754__.js";
import _mod9758 from "metro/09758__.js";
import _mod9759 from "metro/09759__.js";
import _mod9768 from "metro/09768__.js";
import _mod9780 from "metro/09780__.js";
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
        const client = require("metro/09758__.js").getClient();
        if (client) {
          client.flush(closure_0);
        } else {
          if (require("metro/09759__.js").DEBUG_BUILD) {
            const logger = require("metro/09731__.js").logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/09758__.js");
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
        const client = require("metro/09758__.js").getClient();
        if (client) {
          client.close(closure_0);
        } else {
          if (require("metro/09759__.js").DEBUG_BUILD) {
            const logger = require("metro/09731__.js").logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/09758__.js");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod9758.getIsolationScope();
  const currentScope = _mod9758.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    _mod9754.closeSession(tmp3);
    const tmpResult = _mod9754;
  }
  const isolationScope1 = _mod9758.getIsolationScope();
  const tmpResult4 = _mod9758;
  const currentScope1 = _mod9758.getCurrentScope();
  const tmpResult5 = _mod9758;
  const client = _mod9758.getClient();
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
  const tmpResult6 = _mod9758;
}

export function addEventProcessor(arg0) {
  const isolationScope = _mod9758.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
}
export function captureCheckIn(arg0, arg1) {
  const currentScope = _mod9758.getCurrentScope();
  const client = _mod9758.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod9759.DEBUG_BUILD) {
      const logger2 = _mod9731.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod9759.DEBUG_BUILD) {
    const logger = _mod9731.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod9742.uuid4();
}
export function captureEvent(arg0, arg1) {
  const currentScope = _mod9758.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
}
export function captureException(arg0, captureContext) {
  const currentScope = _mod9758.getCurrentScope();
  return currentScope.captureException(arg0, _mod9780.parseEventHintOrCaptureContext(captureContext));
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
  const currentScope = _mod9758.getCurrentScope();
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
    const isolationScope = _mod9758.getIsolationScope();
    const currentScope = _mod9758.getCurrentScope();
    const client = _mod9758.getClient();
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
  const client = _mod9758.getClient();
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
  return _mod9758.getClient();
}
export function lastEventId() {
  const isolationScope = _mod9758.getIsolationScope();
  return isolationScope.lastEventId();
}
export function setContext(arg0, arg1) {
  const isolationScope = _mod9758.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
}
export function setExtra(arg0, arg1) {
  const isolationScope = _mod9758.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
}
export function setExtras(arg0) {
  const isolationScope = _mod9758.getIsolationScope();
  isolationScope.setExtras(arg0);
}
export function setTag(arg0, arg1) {
  const isolationScope = _mod9758.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
}
export function setTags(arg0) {
  const isolationScope = _mod9758.getIsolationScope();
  isolationScope.setTags(arg0);
}
export function setUser(arg0) {
  const isolationScope = _mod9758.getIsolationScope();
  isolationScope.setUser(arg0);
}
export function startSession(arg0) {
  const client = _mod9758.getClient();
  const isolationScope = _mod9758.getIsolationScope();
  const currentScope = _mod9758.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = _mod9768.DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod9732.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod9732.GLOBAL_OBJ.navigator || {};
  const obj2 = { release, environment, user: null };
  const tmpResult = _mod9754;
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
    _mod9754.updateSession(session1, { status: "exited" });
    const tmpResult2 = _mod9754;
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
    const obj = {
      monitorSlug,
      status,
      checkInId: captureCheckInResult,
      duration: _mod9745.timestampInSeconds() - closure_3,
    };
    const currentScope = _mod9758.getCurrentScope();
    const client = _mod9758.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (_mod9759.DEBUG_BUILD) {
        const logger2 = _mod9731.logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (_mod9759.DEBUG_BUILD) {
      const logger = _mod9731.logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod9742.uuid4();
    const tmpResult = _mod9742;
  }
  let currentScope = require("metro/09758__.js").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("metro/09758__.js");
  let client = require("metro/09758__.js").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(9759).DEBUG_BUILD) {
      let logger2 = tmp(9731).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    closure_3 = tmp(9745).timestampInSeconds();
    let tmpResult = tmp(9745);
    return tmp(9758).withIsolationScope(() => {
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
  } else if (tmp(9759).DEBUG_BUILD) {
    let logger = tmp(9731).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("metro/09758__.js");
  captureCheckInResult = require("metro/09742__.js").uuid4();
}
