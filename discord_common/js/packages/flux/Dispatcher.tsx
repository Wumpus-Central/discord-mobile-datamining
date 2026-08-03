import set from "isTracing";

function setDisplayName(arg0, displayName) {
  arg0.displayName = displayName;
}
let set = new Set(["APP_STATE_UPDATE", "CLEAR_CACHES", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_SOCKET", "SESSION_START", "UPLOAD_FAIL", "WRITE_CACHES"]);
const logger = new require("logger").Logger("Flux");
class ActionHandlersGraph {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = {};
    depGraph = new require("DepGraph").DepGraph();
    obj[3] = depGraph;
    return obj;
  }
}
const prototype = ActionHandlersGraph.prototype;
prototype["getOrderedActionHandlers"] = function getOrderedActionHandlers(type) {
  const self = this;
  let result = this._orderedActionHandlers[type.type];
  if (result == null) {
    result = self._computeOrderedActionHandlers(type.type);
  }
  return result;
};
prototype["register"] = function register(name, obj, storeDidChange, band, token) {
  const self = this;
  if (token === undefined) {
    token = self.createToken();
  }
  let isIntegerResult = band >= 0;
  if (isIntegerResult) {
    const _Number = Number;
    isIntegerResult = Number.isInteger(band);
  }
  importDefault(38)(isIntegerResult, "band must be a non-negative integer.");
  obj = {};
  for (const key10024 in arg1) {
    let tmp9 = key10024;
    let require = arg1[key10024];
    function wrapper(arg0) {
      return callback(arg0);
    }
    let _HermesInternal = HermesInternal;
    wrapper.displayName = "" + arg0 + "_" + key10024;
    obj[key10024] = wrapper;
    continue;
  }
  const _dependencyGraph = self._dependencyGraph;
  obj = { name, band, actionHandler: obj, storeDidChange };
  _dependencyGraph.addNode(token, obj);
  self._addToBand(token, band);
  self._invalidateCaches();
  return token;
};
prototype["createToken"] = function createToken() {
  this._lastID = +this._lastID + 1;
  return "ID_" + +this._lastID;
};
prototype["addDependencies"] = function addDependencies(arg0, arg1) {
  const self = this;
  const result = this._validateDependencies(arg0, arg1);
  while (tmp2 !== undefined) {
    let _dependencyGraph = self._dependencyGraph;
    let addDependencyResult = _dependencyGraph.addDependency(arg0, tmp3);
    continue;
  }
  self._invalidateCaches();
};
prototype["_validateDependencies"] = function _validateDependencies(arg0, arg1) {

};
prototype["_invalidateCaches"] = function _invalidateCaches() {
  this._orderedCallbackTokens = null;
  this._orderedActionHandlers = {};
};
prototype["_bandToken"] = function _bandToken(band) {
  const self = this;
  const combined = "band." + band;
  const _dependencyGraph = this._dependencyGraph;
  if (!_dependencyGraph.hasNode(combined)) {
    const _dependencyGraph2 = self._dependencyGraph;
    const obj = { name: null, band: null, actionHandler: null, storeDidChange: null };
    obj[0] = combined;
    obj[1] = band;
    obj[2] = {};
    obj[3] = function storeDidChange(actionHandler) {

    };
    _dependencyGraph2.addNode(combined, obj);
    if (band > 0) {
      const _dependencyGraph3 = self._dependencyGraph;
      _dependencyGraph3.addDependency(combined, self._bandToken(band - 1));
    }
  }
  return combined;
};
prototype["_addToBand"] = function _addToBand(token, band) {
  const self = this;
  const _dependencyGraph = this._dependencyGraph;
  _dependencyGraph.addDependency(this._bandToken(band), token);
  if (band > 0) {
    const _dependencyGraph2 = self._dependencyGraph;
    _dependencyGraph2.addDependency(token, self._bandToken(band - 1));
  }
};
prototype["_computeOrderedActionHandlers"] = function _computeOrderedActionHandlers(type) {
  const self = this;
  let prop = this._orderedCallbackTokens;
  if (prop == null) {
    prop = self._computeOrderedCallbackTokens();
  }
  const items = [];
  for (let num = 0; num < length; num = num + 1) {
    let _dependencyGraph = self._dependencyGraph;
    let nodeData = _dependencyGraph.getNodeData(prop[num]);
    let tmp4 = nodeData.actionHandler[type];
    let tmp5 = num;
    if (null != tmp4) {
      let obj = { name: null, actionHandler: null, storeDidChange: null };
      obj[0] = tmp2;
      obj[1] = tmp4;
      obj[2] = tmp3;
      let arr = items.push(obj);
    }
  }
  self._orderedActionHandlers[type] = items;
  return items;
};
prototype["_computeOrderedCallbackTokens"] = function _computeOrderedCallbackTokens() {
  let self = this;
  self = this;
  try {
    let _dependencyGraph = self._dependencyGraph;
    const overallOrderResult = _dependencyGraph.overallOrder();
    self._orderedCallbackTokens = overallOrderResult;
    return overallOrderResult;
  } catch (tmp2) {
    if (null != tmp2.cyclePath) {
      const cyclePath = tmp2.cyclePath;
      const mapped = cyclePath.map((arg0) => {
        const _dependencyGraph = self._dependencyGraph;
        return "" + _dependencyGraph.getNodeData(arg0).name + "(" + arg0 + ")";
      });
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Dependency Cycle Found: " + mapped.join(" -> "));
      throw error;
    } else {
      throw tmp2;
    }
  }
};
let result = set.fileFinishedImporting("../discord_common/js/packages/flux/Dispatcher.tsx");
class Dispatcher {
  constructor() {
    num = global;
    if (global === undefined) {
      num = 0;
    }
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    obj[1] = {};
    obj[2] = [];
    tmp2 = ActionHandlersGraph;
    if (typeof ActionHandlersGraph !== "fileFinishedImporting") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    actionLogger = require;
    obj1 = Object.create(tmp2.prototype);
    obj1[0] = {};
    tmp5 = closure_0;
    tmp6 = closure_3;
    depGraph = new require("DepGraph").DepGraph();
    obj1[3] = depGraph;
    obj[5] = obj1;
    obj[7] = {};
    obj._defaultBand = num;
    obj._sentryUtils = importDefault;
    if (null == require) {
      tmp8 = new.target;
      tmp9 = new.target;
      actionLogger = new require("logger").ActionLogger();
    }
    obj.actionLogger = actionLogger;
    actionLogger = obj.actionLogger;
    onResult = actionLogger.on("trace", (arg0, arg1, arg2) => {
      let isTracing = callback(table[2]).isTracing;
      if (isTracing) {
        isTracing = arg2 >= 10;
      }
      if (isTracing) {
        callback(table[2]).mark("\u{1F9A5}", arg1, arg2);
        const tmpResult = callback(table[2]);
      }
    });
    return obj;
  }
}
const prototype2 = Dispatcher.prototype;
prototype2["isDispatching"] = function isDispatching() {
  return null != this._currentDispatchActionType;
};
prototype2["dispatch"] = function dispatch(arg0) {
  const self = this;
  let closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    const _self = arg1;
    const _waitQueue = _self._waitQueue;
    _waitQueue.push(() => {
      try {
        if (null == lib2.functionCache[lib.type]) {
          tmp.functionCache[tmp2.type] = (type) => closure_1._dispatchWithDevtools(type);
          outer2_7(tmp.functionCache[tmp2.type], "dispatch_" + tmp2.type);
        }
        const functionCache = tmp.functionCache;
        functionCache[lib.type](lib);
        lib();
      } catch (tmp9) {
        lib2(tmp9);
      }
    });
    _self.flushWaitQueue();
  });
};
prototype2["dispatchForStoreTest"] = function dispatchForStoreTest(type) {
  let actionHandler;
  let storeDidChange;
  importDefault(38)(false, "dispatchForTest cannot be called in: production");
  for (const item10019 of orderedActionHandlers) {
    ({ actionHandler, storeDidChange } = item10019);
    let tmp3 = item10019.name === arg1;
    if (tmp3) {
      let tmp4 = actionHandler;
      tmp3 = false !== actionHandler(arg0);
    }
    if (tmp3) {
      let tmp5 = storeDidChange;
      let storeDidChangeResult = storeDidChange(arg0);
    }
    continue;
  }
};
prototype2["flushWaitQueue"] = function flushWaitQueue() {
  const self = this;
  if (!this._processingWaitQueue) {
    try {
      self._processingWaitQueue = true;
      let tmp4 = importDefault;
      let tmp6 = dependencyMap;
      importDefault(593).isDispatching = true;
      let num2 = 0;
      if (self._waitQueue.length > 0) {
        const sum = num2 + 1;
        num2 = sum;
        while (100 >= sum) {
          if (self._waitQueue.length > 0) {
            do {
              let _waitQueue = self._waitQueue;
              let tmp9 = _waitQueue.shift()();
              length = self._waitQueue.length;
            } while (length > 0);
          }
          let tmp10 = importDefault;
          tmp4 = importDefault;
          let tmp11 = dependencyMap;
          tmp6 = dependencyMap;
          let obj = importDefault(593);
          let emitResult = obj.emit();
        }
        const serializeResult = importAll(594).serialize();
        logger.error("LastFewActions", serializeResult);
        const _sentryUtils = self._sentryUtils;
        if (_sentryUtils != null) {
          obj = { message: "Dispatcher: Dispatch loop detected", data: null };
          obj = { lastFewActions: null };
          obj[0] = serializeResult;
          obj[1] = obj;
          _sentryUtils.addBreadcrumb(obj);
        }
        const _Error = Error;
        throw Error("Dispatch loop detected, aborting");
      }
      self._processingWaitQueue = false;
      tmp4(593).isDispatching = false;
    } catch (tmp25) {
      tmp2._processingWaitQueue = false;
      importDefault(593).isDispatching = false;
      throw tmp25;
    }
  }
};
prototype2["_dispatchWithDevtools"] = function _dispatchWithDevtools(type) {
  this._dispatchWithLogging(type);
};
prototype2["_dispatchWithLogging"] = function _dispatchWithLogging(type) {
  const self = this;
  const _require = type;
  self(38)(null == this._currentDispatchActionType, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: " + type.type + " Already dispatching: " + this._currentDispatchActionType);
  self(38)(type.type, "Dispatch.dispatch(...) called without an action type");
  if (set.has(type.type)) {
    const _HermesInternal = HermesInternal;
    logger.log("Dispatching " + type.type);
  }
  const tmp2 = self(38);
  const tmp3 = null == this._currentDispatchActionType;
  const tmp8 = _require;
  _require(655).mark(type.type);
  const obj = _require(655);
  importAll(594).add(type.type);
  const actionLogger = this.actionLogger;
  const logResult1 = actionLogger.log(type, (arg0) => {
    try {
      self._currentDispatchActionType = type.type;
      self._dispatch(type, arg0);
      self._currentDispatchActionType = null;
    } catch (tmp8) {
      self._currentDispatchActionType = null;
      throw tmp8;
    }
  });
  if (logResult1.totalTime > 100) {
    const _HermesInternal2 = HermesInternal;
    logger.verbose("Slow dispatch on " + type.type + ": " + logResult1.totalTime + "ms");
  }
  try {
    const _HermesInternal3 = HermesInternal;
    tmp8(655).measure("DISPATCH[" + type.type + "]", type.type);
  } catch (err) {
  }
};
prototype2["_dispatch"] = function _dispatch(closure_0, arg1) {
  let sum;
  const self = this;
  let closure_1 = arg1;
  for (const item10008 of tmp) {
    if (item10008(arg0)) {
      let tmp2 = obj;
      obj.return();
      let flag = false;
      return false;
    }
  }
  const orderedActionHandlers = self._actionHandlers.getOrderedActionHandlers(closure_0);
  let c3 = 0;
  let num = 0;
  if (0 < orderedActionHandlers.length) {
    do {
      let tmp3 = (function _loop() {
        if (false !== callback(orderedActionHandlers[c3].name, () => actionHandler(actionHandler))) {
          obj.storeDidChange(actionHandler);
        }
      })();
      sum = num + 1;
      c3 = sum;
      num = sum;
    } while (sum < length);
  }
  if (null != self._subscriptions[closure_0.type]) {
    arg1("__subscriptions", () => {
      const item = tmp5.forEach((arg0) => arg0(closure_0));
    });
  }
};
prototype2["addInterceptor"] = function addInterceptor(handleAction) {
  const _interceptors = this._interceptors;
  _interceptors.push(handleAction);
};
prototype2["wait"] = function wait(arg0) {
  const _waitQueue = this._waitQueue;
  _waitQueue.push(arg0);
  this.flushWaitQueue();
};
prototype2["subscribe"] = function subscribe(arg0, arg1) {
  let obj = this._subscriptions[arg0];
  if (null == obj) {
    const _Set = Set;
    const set = new Set();
    this._subscriptions[arg0] = set;
    obj = set;
  }
  obj.add(arg1);
};
prototype2["unsubscribe"] = function unsubscribe(arg0, arg1) {
  if (null != this._subscriptions[arg0]) {
    obj.delete(arg1);
    if (0 === obj.size) {
      const _subscriptions = tmp3._subscriptions;
      delete tmp[tmp2];
    }
  }
};
prototype2["register"] = function register(arg0, arg1, arg2, arg3, arg4) {
  let _defaultBand = arg3;
  if (arg3 == null) {
    _defaultBand = this._defaultBand;
  }
  return this._actionHandlers.register(arg0, arg1, arg2, _defaultBand, arg4);
};
prototype2["createToken"] = function createToken() {
  return this._actionHandlers.createToken();
};
prototype2["addDependencies"] = function addDependencies(arg0, arg1) {
  this._actionHandlers.addDependencies(arg0, arg1);
};

export { Dispatcher };