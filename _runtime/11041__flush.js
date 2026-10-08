// _runtime/11041__flush.js
import _mod10993 from "metro/10993__.js";
import _mod10994 from "metro/10994__.js";
import _mod11004 from "metro/11004__.js";
import _mod11007 from "metro/11007__.js";
import _mod11016 from "metro/11016__.js";
import _mod11020 from "metro/11020__.js";
import _mod11021 from "metro/11021__.js";
import _mod11030 from "metro/11030__.js";
import _mod11042 from "metro/11042__.js";
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
        const client = require("metro/11020__.js").getClient();
        if (client) {
          client.flush(closure_0);
        } else {
          if (require("metro/11021__.js").DEBUG_BUILD) {
            const logger = require("metro/10993__.js").logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/11020__.js");
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
        const client = require("metro/11020__.js").getClient();
        if (client) {
          client.close(closure_0);
        } else {
          if (require("metro/11021__.js").DEBUG_BUILD) {
            const logger = require("metro/10993__.js").logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("metro/11020__.js");
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod11020.getIsolationScope();
  const currentScope = _mod11020.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    _mod11016.closeSession(tmp3);
    const tmpResult = _mod11016;
  }
  const isolationScope1 = _mod11020.getIsolationScope();
  const tmpResult4 = _mod11020;
  const currentScope1 = _mod11020.getCurrentScope();
  const tmpResult5 = _mod11020;
  const client = _mod11020.getClient();
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
  const tmpResult6 = _mod11020;
}

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = _mod11020.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  const currentScope = _mod11020.getCurrentScope();
  const client = _mod11020.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (_mod11021.DEBUG_BUILD) {
      const logger2 = _mod10993.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (_mod11021.DEBUG_BUILD) {
    const logger = _mod10993.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod11004.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = _mod11020.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, captureContext) {
  const currentScope = _mod11020.getCurrentScope();
  return currentScope.captureException(arg0, _mod11042.parseEventHintOrCaptureContext(captureContext));
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
  const currentScope = _mod11020.getCurrentScope();
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
    const isolationScope = _mod11020.getIsolationScope();
    const currentScope = _mod11020.getCurrentScope();
    const client = _mod11020.getClient();
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
  const client = _mod11020.getClient();
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
  return _mod11020.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = _mod11020.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = _mod11020.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = _mod11020.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = _mod11020.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = _mod11020.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = _mod11020.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = _mod11020.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  const client = _mod11020.getClient();
  const isolationScope = _mod11020.getIsolationScope();
  const currentScope = _mod11020.getCurrentScope();
  options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = _mod11030.DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod10994.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod10994.GLOBAL_OBJ.navigator || {};
  const obj2 = { release, environment, user: null };
  const tmpResult = _mod11016;
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
    _mod11016.updateSession(session1, { status: "exited" });
    const tmpResult2 = _mod11016;
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
      duration: _mod11007.timestampInSeconds() - closure_3,
    };
    const currentScope = _mod11020.getCurrentScope();
    const client = _mod11020.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (_mod11021.DEBUG_BUILD) {
        const logger2 = _mod10993.logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (_mod11021.DEBUG_BUILD) {
      const logger = _mod10993.logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod11004.uuid4();
    const tmpResult = _mod11004;
  }
  let currentScope = require("metro/11020__.js").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("metro/11020__.js");
  let client = require("metro/11020__.js").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(11021).DEBUG_BUILD) {
      let logger2 = tmp(10993).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    closure_3 = tmp(11007).timestampInSeconds();
    let tmpResult = tmp(11007);
    return tmp(11020).withIsolationScope(() => {
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
  } else if (tmp(11021).DEBUG_BUILD) {
    let logger = tmp(10993).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("metro/11020__.js");
  captureCheckInResult = require("metro/11004__.js").uuid4();
};
