// _runtime/12607__flush.js
import getGlobalSingleton from "12560_getGlobalSingleton.js";
import addContextToFrame from "12570_addContextToFrame.js";
import getClient from "12586_getClient.js";
import applyClientOptions from "12608_applyClientOptions.js";
import closure_2 from "00005_asyncGeneratorStep.js";
import { getClient } from "12586_getClient.js";

function _flush() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c1 = 0;
    return (function* (arg0) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          table = 2;
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const client = callback(table[1]).getClient();
            if (client) {
              client.flush(tmp14);
            } else {
              if (tmp15(tmp16[3]).DEBUG_BUILD) {
                const logger = tmp15(tmp16[4]).logger;
                logger.warn("Cannot flush events. No client defined.");
              }
              const resolved = Promise.resolve(false);
            }
            table = 3;
            const obj3 = callback(table[1]);
            tmp14 = callback;
          }
        } catch (tmp8) {
          table = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_3 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _close() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c1 = 0;
    return (function* (arg0) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          table = 2;
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const client = callback(table[1]).getClient();
            if (client) {
              client.close(tmp14);
            } else {
              if (tmp15(tmp16[3]).DEBUG_BUILD) {
                const logger = tmp15(tmp16[4]).logger;
                logger.warn("Cannot flush events and disable SDK. No client defined.");
              }
              const resolved = Promise.resolve(false);
            }
            table = 3;
            const obj3 = callback(table[1]);
            tmp14 = callback;
          }
        } catch (tmp8) {
          table = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function endSession() {
  const isolationScope = getClient.getIsolationScope();
  const obj = getClient;
  const currentScope = getClient.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    let tmpResult = tmp(12582);
    tmpResult.closeSession(tmp3);
  }
  tmpResult = tmp(12586);
  const isolationScope1 = tmpResult.getIsolationScope();
  const obj3 = getClient;
  const currentScope1 = getClient.getCurrentScope();
  const tmpResult1 = getClient;
  const client = getClient.getClient();
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
}

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  const currentScope = getClient.getCurrentScope();
  const obj = getClient;
  const client = getClient.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (tmp(12587).DEBUG_BUILD) {
      const logger2 = tmp(12559).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (tmp(12587).DEBUG_BUILD) {
    const logger = tmp(12559).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  const obj2 = getClient;
  return addContextToFrame.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = getClient.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, arg1) {
  const currentScope = getClient.getCurrentScope();
  const obj = getClient;
  return currentScope.captureException(arg0, applyClientOptions.parseEventHintOrCaptureContext(arg1));
};
export const captureMessage = function captureMessage(arg0, str) {
  let tmp;
  if (typeof str === "string") {
    tmp = str;
  }
  let tmp2;
  if (typeof str !== "string") {
    let obj = { captureContext: null };
    obj[0] = str;
    tmp2 = obj;
  }
  obj = getClient;
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
    const isolationScope = getClient.getIsolationScope();
    const obj = getClient;
    const currentScope = getClient.getCurrentScope();
    const obj3 = getClient;
    const client = getClient.getClient();
    const tmp3 = currentScope.getSession() || isolationScope.getSession();
    let tmp4 = tmp3;
    if (tmp3) {
      tmp4 = client;
    }
    if (tmp4) {
      client.captureSession(tmp3);
    }
    const obj5 = getClient;
  }
};
export const close = function close(arg0) {
  const self = this;
  const apply = _close.apply;
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
  const apply = _flush.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isEnabled = function isEnabled() {
  const client = getClient.getClient();
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
  return getClient.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = getClient.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = getClient.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  let obj = getClient;
  const client = obj.getClient();
  const isolationScope = getClient.getIsolationScope();
  const obj3 = getClient;
  const currentScope = getClient.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = tmp(12596).DEFAULT_ENVIRONMENT;
  }
  const obj5 = getClient;
  const userAgent = getGlobalSingleton.GLOBAL_OBJ.navigator || {}.userAgent;
  let tmpResult = tmp(12582);
  obj = { release, environment, user: null };
  const tmp3 = getGlobalSingleton.GLOBAL_OBJ.navigator || {};
  obj[2] = currentScope.getUser() || isolationScope.getUser();
  let tmp5 = userAgent;
  if (userAgent) {
    obj = { userAgent: null };
    obj[0] = userAgent;
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
    tmpResult = tmp(12582);
    tmpResult.updateSession(session1, { status: "exited" });
  }
  endSession();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug) {
  const _require = monitorSlug;
  dependencyMap = arg1;
  function finishCheckIn(status) {
    const obj = {
      monitorSlug,
      status,
      checkInId: closure_2,
      duration: monitorSlug(12573).timestampInSeconds() - closure_3,
    };
    const obj2 = monitorSlug(12573);
    const currentScope = monitorSlug(12586).getCurrentScope();
    const obj3 = monitorSlug(12586);
    const client = monitorSlug(12586).getClient();
    if (client) {
      if (client.captureCheckIn) {
        client.captureCheckIn(obj, undefined, currentScope);
      } else if (tmp(12587).DEBUG_BUILD) {
        const logger2 = tmp(12559).logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (tmp(12587).DEBUG_BUILD) {
      const logger = tmp(12559).logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    const obj4 = monitorSlug(12586);
    monitorSlug(12570).uuid4();
  }
  let currentScope = require("12586_getClient.js").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = getClient;
  let client = require("12586_getClient.js").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(12587).DEBUG_BUILD) {
      let logger2 = tmp(12559).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    closure_2 = captureCheckInResult;
    let tmpResult = tmp(12573);
    closure_3 = tmpResult.timestampInSeconds();
    tmpResult = tmp(12586);
    return tmpResult.withIsolationScope(() => {
      try {
        const tmp3 = dependencyMap();
        if (obj.isThenable(tmp3)) {
          const resolved = Promise.resolve(tmp3);
          resolved.then(
            () => {
              callback("ok");
            },
            (arg0) => {
              callback("error");
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
  } else if (tmp(12587).DEBUG_BUILD) {
    let logger = tmp(12559).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = getClient;
  captureCheckInResult = require("12570_addContextToFrame.js").uuid4();
};
