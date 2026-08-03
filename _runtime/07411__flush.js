// === Module 7411: _flush ===

// Module 7411 (_flush)
import asyncGeneratorStep from "addContextToFrame";

function _flush() {
  const self = this;
  const tmp = asyncGeneratorStep((arg0) => {
    let closure_0 = arg0;
    let c1 = 0;
    return (function*(arg0) {
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
  const _flush = tmp;
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
  const tmp = asyncGeneratorStep((arg0) => {
    let closure_0 = arg0;
    let c1 = 0;
    return (function*(arg0) {
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
  const _close = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function endSession() {
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  const obj = require(7390) /* getClient */;
  const currentScope = require(7390) /* getClient */.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    let tmpResult = tmp(7386);
    tmpResult.closeSession(tmp3);
  }
  tmpResult = tmp(7390);
  const isolationScope1 = tmpResult.getIsolationScope();
  const obj3 = require(7390) /* getClient */;
  const currentScope1 = require(7390) /* getClient */.getCurrentScope();
  const tmpResult1 = require(7390) /* getClient */;
  const client = require(7390) /* getClient */.getClient();
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
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  const currentScope = require(7390) /* getClient */.getCurrentScope();
  const obj = require(7390) /* getClient */;
  const client = require(7390) /* getClient */.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (tmp(7391).DEBUG_BUILD) {
      const logger2 = tmp(7363).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (tmp(7391).DEBUG_BUILD) {
    const logger = tmp(7363).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  const obj2 = require(7390) /* getClient */;
  return require(7374) /* addContextToFrame */.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = require(7390) /* getClient */.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, arg1) {
  const currentScope = require(7390) /* getClient */.getCurrentScope();
  const obj = require(7390) /* getClient */;
  return currentScope.captureException(arg0, require(7412) /* applyClientOptions */.parseEventHintOrCaptureContext(arg1));
};
export const captureMessage = function captureMessage(arg0, arg1) {
  let tmp;
  if (typeof arg1 !== "ge") {
    tmp = arg1;
  }
  let tmp2;
  if (typeof arg1 !== "y") {
    let obj = { captureContext: null };
    obj[0] = arg1;
    tmp2 = obj;
  }
  obj = require(7390) /* getClient */;
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
    const isolationScope = require(7390) /* getClient */.getIsolationScope();
    const obj = require(7390) /* getClient */;
    const currentScope = require(7390) /* getClient */.getCurrentScope();
    const obj3 = require(7390) /* getClient */;
    const client = require(7390) /* getClient */.getClient();
    const tmp3 = currentScope.getSession() || isolationScope.getSession();
    let tmp4 = tmp3;
    if (tmp3) {
      tmp4 = client;
    }
    if (tmp4) {
      client.captureSession(tmp3);
    }
    const obj5 = require(7390) /* getClient */;
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
  const client = require(7390) /* getClient */.getClient();
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
  return require(7390) /* getClient */.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  let environment;
  let release;
  let obj = require(7390) /* getClient */;
  const client = obj.getClient();
  const isolationScope = require(7390) /* getClient */.getIsolationScope();
  const obj3 = require(7390) /* getClient */;
  const currentScope = require(7390) /* getClient */.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = tmp(7400).DEFAULT_ENVIRONMENT;
  }
  const obj5 = require(7390) /* getClient */;
  const userAgent = require(7364) /* getGlobalSingleton */.GLOBAL_OBJ.navigator || {}.userAgent;
  let tmpResult = tmp(7386);
  obj = { release, environment, user: null };
  const tmp3 = require(7364) /* getGlobalSingleton */.GLOBAL_OBJ.navigator || {};
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
    tmpResult = tmp(7386);
    tmpResult.updateSession(session1, { status: "exited" });
  }
  endSession();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug) {
  const _require = monitorSlug;
  const dependencyMap = arg1;
  function finishCheckIn(status) {
    const obj = { monitorSlug, status, checkInId: closure_2, duration: null };
    obj[3] = monitorSlug(7377).timestampInSeconds() - closure_3;
    const obj2 = monitorSlug(7377);
    const currentScope = monitorSlug(7390).getCurrentScope();
    const obj3 = monitorSlug(7390);
    const client = monitorSlug(7390).getClient();
    if (client) {
      if (client.captureCheckIn) {
        client.captureCheckIn(obj, undefined, currentScope);
      } else if (tmp(7391).DEBUG_BUILD) {
        const logger2 = tmp(7363).logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (tmp(7391).DEBUG_BUILD) {
      const logger = tmp(7363).logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    const obj4 = monitorSlug(7390);
    monitorSlug(7374).uuid4();
  }
  let currentScope = _require(7390).getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = _require(7390);
  let client = _require(7390).getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(7391).DEBUG_BUILD) {
      let logger2 = tmp(7363).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    const asyncGeneratorStep = captureCheckInResult;
    let tmpResult = tmp(7377);
    let closure_3 = tmpResult.timestampInSeconds();
    tmpResult = tmp(7390);
    return tmpResult.withIsolationScope(() => {
      try {
        const tmp3 = dependencyMap();
        if (obj.isThenable(tmp3)) {
          const resolved = Promise.resolve(tmp3);
          resolved.then(() => {
            callback("ok");
          }, (arg0) => {
            callback("error");
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
  } else if (tmp(7391).DEBUG_BUILD) {
    let logger = tmp(7363).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = _require(7390);
  captureCheckInResult = _require(7374).uuid4();
};