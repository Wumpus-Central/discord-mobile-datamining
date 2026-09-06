// === Module 566: flux/Dispatcher ===

// Module 566 (flux/Dispatcher)
import logger_Logger from "logger/Logger" /* 4 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import _modDef38 from "module_38" /* 38 */;
import flux_EmitterDefault from "flux/Emitter" /* 508 */;
import LastFewActionsAll from "LastFewActions" /* 509 */;
import LoggingUtils from "LoggingUtils" /* 567 */;
import profiling from "profiling" /* 571 */;
import DepGraph from "DepGraph" /* 572 */;
import size from "module_2" /* 2 */;

function setDisplayName(arg0, displayName) {
  arg0.displayName = displayName;
}
let set = new Set(["APP_STATE_UPDATE", "CLEAR_CACHES", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_SOCKET", "SESSION_START", "UPLOAD_FAIL", "WRITE_CACHES"]);
const logger = new logger_Logger.Logger("Flux");
class ActionHandlersGraph {
  constructor() {
    merged = Object.assign({ _orderedActionHandlers: null, _orderedCallbackTokens: null, _lastID: 1, _dependencyGraph: null });
    merged[0] = {};
    depGraph = new closure_0(closure_3[7]).DepGraph();
    merged[3] = depGraph;
    return merged;
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
prototype["register"] = function register(name, obj, storeDidChange, band) {
  const self = this;
  if (token === undefined) {
    token = self.createToken();
  }
  let isIntegerResult = band >= 0;
  if (isIntegerResult) {
    const _Number = Number;
    isIntegerResult = Number.isInteger(band);
  }
  _modDef38(isIntegerResult, "band must be a non-negative integer.");
  obj = {};
  for (const key10024 in arg1) {
    closure_0 = arg1[key10024];
    function wrapper(arg0) {
      return closure_0(arg0);
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
    const obj = {
      name: combined,
      band,
      actionHandler: {},
      storeDidChange() {

        }
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
    if (null != tmp4) {
      let obj = { name: tmp2, actionHandler: tmp4, storeDidChange: tmp3 };
      let arr = items.push(obj);
    }
  }
  self._orderedActionHandlers[type] = items;
  return items;
};
prototype["_computeOrderedCallbackTokens"] = function _computeOrderedCallbackTokens() {
  const self = this;
  try {
    let _dependencyGraph = self._dependencyGraph;
    const overallOrderResult = _dependencyGraph.overallOrder();
    self._orderedCallbackTokens = overallOrderResult;
    return overallOrderResult;
  } catch (tmp2) {
    if (null != tmp2.cyclePath) {
      const cyclePath = tmp2.cyclePath;
      const mapped = cyclePath.map((item) => {
        const _dependencyGraph = self._dependencyGraph;
        return "" + _dependencyGraph.getNodeData(item).name + "(" + item + ")";
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
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/Dispatcher.tsx");
class Dispatcher {
  constructor() {
    num = global;
    if (global === undefined) {
      num = 0;
    }
    merged = Object.assign({ _interceptors: null, _subscriptions: null, _waitQueue: null, _processingWaitQueue: false, _currentDispatchActionType: null, _actionHandlers: null, _sentryUtils: "Array", functionCache: "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}" });
    merged[0] = [];
    merged[1] = {};
    merged[2] = [];
    if (typeof ActionHandlersGraph === "function") {
      actionLogger = require;
      tmp4 = importDefault;
      merged1 = Object.assign({ _orderedActionHandlers: null, _orderedCallbackTokens: null, _lastID: 1, _dependencyGraph: null });
      merged1[0] = {};
      tmp6 = closure_0;
      tmp7 = closure_3;
      tmp8 = new.target;
      tmp9 = new.target;
      depGraph = new closure_0(closure_3[7]).DepGraph();
      tmp11 = depGraph;
      merged1[3] = depGraph;
      merged[5] = merged1;
      merged[7] = {};
      merged._defaultBand = num;
      merged._sentryUtils = importDefault;
      tmp12 = null;
      if (null == require) {
        tmp13 = new.target;
        tmp14 = new.target;
        actionLogger = new tmp6(tmp7[1]).ActionLogger();
      }
      merged.actionLogger = actionLogger;
      actionLogger = merged.actionLogger;
      str = "trace";
      onResult = actionLogger.on("trace", (arg0, arg1, arg2) => {
        let isTracing = AppStartPerformanceDefault.isTracing;
        if (isTracing) {
          isTracing = arg2 >= 10;
        }
        if (isTracing) {
          AppStartPerformanceDefault.mark("\u{1F9A5}", arg1, arg2);
          const tmpResult = AppStartPerformanceDefault;
        }
      });
      return merged;
    } else {
      str2 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype2 = Dispatcher.prototype;
prototype2["isDispatching"] = function isDispatching() {
  return null != this._currentDispatchActionType;
};
prototype2["dispatch"] = function dispatch(arg0) {
  const self = this;
  closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    _self = arg1;
    const _waitQueue = _self._waitQueue;
    _waitQueue.push(() => {
      try {
        if (null == self.functionCache[closure_0.type]) {
          self.functionCache[closure_0.type] = (type) => closure_1_1._dispatchWithDevtools(type);
          setDisplayName(self.functionCache[closure_0.type], "dispatch_" + closure_0.type);
        }
        const functionCache = self.functionCache;
        functionCache[closure_0.type](closure_0);
        closure_0();
      } catch (tmp9) {
        closure_1(tmp9);
      }
    });
    _self.flushWaitQueue();
  });
};
prototype2["dispatchForStoreTest"] = function dispatchForStoreTest(type, arg1) {
  _modDef38(false, "dispatchForTest cannot be called in: production");
  for (const item10019 of orderedActionHandlers) {
    ({ actionHandler, storeDidChange } = item10019);
    let tmp3 = item10019.name === arg1;
    if (tmp3) {
      tmp3 = false !== actionHandler(arg0);
    }
    if (tmp3) {
      let storeDidChangeResult = storeDidChange(arg0);
    }
    continue;
  }
  const _actionHandlers = this._actionHandlers;
  const orderedActionHandlers = this._actionHandlers.getOrderedActionHandlers(type);
};
prototype2["flushWaitQueue"] = function flushWaitQueue() {
  const self = this;
  if (!this._processingWaitQueue) {
    try {
      self._processingWaitQueue = true;
      let tmp4 = importDefault;
      flux_EmitterDefault.isDispatching = true;
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
          tmp4 = importDefault;
          let obj = flux_EmitterDefault;
          let emitResult = obj.emit();
        }
        const serializer = LastFewActionsAll;
        const serializeResult = serializer.serialize();
        logger.error("LastFewActions", serializeResult);
        const _sentryUtils = self._sentryUtils;
        if (_sentryUtils != null) {
          obj = { message: "Dispatcher: Dispatch loop detected", data: null };
          obj = { lastFewActions: serializeResult };
          obj.data = obj;
          _sentryUtils.addBreadcrumb(obj);
        }
        const _Error = Error;
        throw Error("Dispatch loop detected, aborting");
      }
      self._processingWaitQueue = false;
      tmp4(508).isDispatching = false;
    } catch (tmp25) {
      tmp2._processingWaitQueue = false;
      flux_EmitterDefault.isDispatching = false;
      throw tmp25;
    }
  }
};
prototype2["_dispatchWithDevtools"] = function _dispatchWithDevtools(type) {
  this._dispatchWithLogging(type);
};
prototype2["_dispatchWithLogging"] = function _dispatchWithLogging(type) {
  const self = this;
  _modDef38(null == this._currentDispatchActionType, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: " + type.type + " Already dispatching: " + this._currentDispatchActionType);
  _modDef38(type.type, "Dispatch.dispatch(...) called without an action type");
  if (set.has(type.type)) {
    const _HermesInternal = HermesInternal;
    logger.log("Dispatching " + type.type);
  }
  const tmp3 = null == this._currentDispatchActionType;
  profiling.mark(type.type);
  LastFewActionsAll.add(type.type);
  const actionLogger = this.actionLogger;
  const logResult1 = actionLogger.log(type, (fn) => {
    try {
      self._currentDispatchActionType = type.type;
      self._dispatch(type, fn);
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
    profiling.measure("DISPATCH[" + type.type + "]", type.type);
    const tmp8Result = profiling;
  } catch (err) {
  }
};
prototype2["_dispatch"] = function _dispatch(type, fn) {
  let sum;
  const self = this;
  closure_0 = type;
  closure_1 = fn;
  for (const item10008 of tmp) {
    if (item10008(arg0)) {
      obj.return();
      let flag = false;
      return false;
    }
  }
  c3 = 0;
  const length = self._actionHandlers.getOrderedActionHandlers(type).length;
  let num = 0;
  if (0 < length) {
    do {
      let tmp3 = (function _loop() {
        if (false !== closure_1(orderedActionHandlers[c3].name, () => actionHandler(closure_0))) {
          obj.storeDidChange(actionHandler);
        }
      })();
      sum = num + 1;
      c3 = sum;
      num = sum;
    } while (sum < length);
  }
  closure_4 = tmp5;
  if (null != self._subscriptions[type.type]) {
    fn("__subscriptions", () => {
      const item = closure_4.forEach((fn) => fn(type));
    });
  }
  const _actionHandlers = self._actionHandlers;
  const orderedActionHandlers = self._actionHandlers.getOrderedActionHandlers(type);
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
    set = new Set();
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