// === Module 40: MessageQueue ===

// Module 40 (MessageQueue)
import _createClassDefault from "_createClass" /* 42 */;
import isEnabled from "isEnabled" /* 46 */;
import _mod47 from "module_47" /* 47 */;
import closure_3 from "_classCallCheck" /* 41 */;

const MessageQueue = global;
require = arg1;
class MessageQueue {
  constructor() {
    tmp = closure_3(this, MessageQueue);
    this._lazyCallableModules = {};
    items = [, , , ];
    items[0] = [];
    items[1] = [];
    items[2] = [];
    items[3] = 0;
    this._queue = items;
    map = new Map();
    this._successCallbacks = map;
    map1 = new Map();
    this._failureCallbacks = map1;
    this._callID = 0;
    this._lastFlush = 0;
    this._eventLoopStartTime = Date.now();
    this._reactNativeMicrotasksCallback = null;
    callFunctionReturnFlushedQueue = this.callFunctionReturnFlushedQueue;
    this.callFunctionReturnFlushedQueue = callFunctionReturnFlushedQueue.bind(this);
    flushedQueue = this.flushedQueue;
    this.flushedQueue = flushedQueue.bind(this);
    invokeCallbackAndReturnFlushedQueue = this.invokeCallbackAndReturnFlushedQueue;
    this.invokeCallbackAndReturnFlushedQueue = invokeCallbackAndReturnFlushedQueue.bind(this);
    return;
  }
}
let obj = {
  key: "callFunctionReturnFlushedQueue",
  value: function callFunctionReturnFlushedQueue(arg0, arg1, arg2) {
    const self = this;
    closure_1 = arg0;
    closure_2 = arg1;
    closure_0 = arg2;
    this.__guard(() => {
      self.__callFunction(closure_1, closure_2, closure_0);
    });
    return this.flushedQueue();
  }
};
let items = [
  obj,
  {
    key: "invokeCallbackAndReturnFlushedQueue",
    value: function invokeCallbackAndReturnFlushedQueue(arg0, arg1) {
      const self = this;
      closure_1 = arg0;
      closure_0 = arg1;
      this.__guard(() => {
        self.__invokeCallback(closure_1, closure_0);
      });
      return this.flushedQueue();
    }
  },
  {
    key: "flushedQueue",
    value: function flushedQueue() {
      const self = this;
      this.__guard(() => {
        const result = self.__callReactNativeMicrotasks();
      });
      const _queue = this._queue;
      const items = [[], [], [], this._callID];
      this._queue = items;
      let tmp2 = null;
      if (_queue[0].length) {
        tmp2 = _queue;
      }
      return tmp2;
    }
  },
  {
    key: "getEventLoopRunningTime",
    value: function getEventLoopRunningTime() {
      return Date.now() - this._eventLoopStartTime;
    }
  },
  {
    key: "registerCallableModule",
    value: function registerCallableModule(ReactFabric, closure_5) {
      closure_0 = closure_5;
      this._lazyCallableModules[ReactFabric] = () => closure_0;
    }
  },
  {
    key: "registerLazyCallableModule",
    value: function registerLazyCallableModule(ReactFabric, fn) {
      closure_1 = fn;
      this._lazyCallableModules[ReactFabric] = () => {
        if (c1) {
          closure_0 = tmp();
          c1 = null;
        }
        return closure_0;
      };
    }
  },
  {
    key: "getCallableModule",
    value: function getCallableModule(closure_1) {
      let tmpResult = null;
      if (this._lazyCallableModules[closure_1]) {
        tmpResult = tmp();
      }
      return tmpResult;
    }
  },
  {
    key: "callNativeSyncHook",
    value: function callNativeSyncHook(closure_0, closure_1, substr, arg3, arg4) {
      this.processCallbacks(closure_0, closure_1, substr, arg3, arg4);
      return MessageQueue.nativeCallSyncHook(closure_0, closure_1, substr);
    }
  },
  {
    key: "processCallbacks",
    value: function processCallbacks(arg0, arg1, arr) {
      let tmp = arg3;
      if (!arg3) {
        tmp = arg4;
      }
      const self = this;
      if (tmp) {
        if (arg3) {
          arr.push(self._callID << 1);
        }
        if (arg4) {
          arr.push(self._callID << 1 | 1);
        }
        const result = self._successCallbacks.set(self._callID, arg4);
        const result1 = self._failureCallbacks.set(self._callID, arg3);
        const _failureCallbacks = self._failureCallbacks;
        const _successCallbacks = self._successCallbacks;
      }
      self._callID = self._callID + 1;
    }
  },
  {
    key: "enqueueNativeCall",
    value: function enqueueNativeCall(closure_0, closure_1, closure_02, arg3, arg4) {
      const self = this;
      this.processCallbacks(closure_0, closure_1, closure_02, arg3, arg4);
      const first = this._queue[0];
      first.push(closure_0);
      let arr1 = this._queue[1];
      arr1.push(closure_1);
      arr1 = this._queue[2].push(closure_02);
      const timestamp = Date.now();
      let obj = MessageQueue;
      if (MessageQueue.nativeFlushQueueImmediate) {
        if (timestamp - self._lastFlush >= 5) {
          const items = [[], [], [], self._callID];
          self._queue = items;
          self._lastFlush = timestamp;
          const result = obj.nativeFlushQueueImmediate(self._queue);
        }
      }
      isEnabled.counterEvent("pending_js_to_native_queue", self._queue[0].length);
      if (self.__spy) {
        obj = { type: 1, module: null, method: null, args: null };
        obj[1] = "" + closure_0;
        obj[2] = closure_1;
        obj[3] = closure_02;
        self.__spy(obj);
      }
    }
  },
  {
    key: "createDebugLookup",
    value: function createDebugLookup(arg0, arg1, arg2) {

    }
  },
  {
    key: "setReactNativeMicrotasksCallback",
    value: function setReactNativeMicrotasksCallback(callReactNativeMicrotasks) {
      this._reactNativeMicrotasksCallback = callReactNativeMicrotasks;
    }
  },
  {
    key: "__guard",
    value: function __guard(arg0) {
      if (this.__shouldPauseOnThrow()) {
        arg0();
      } else {
        try {
          arg0();
        } catch (tmp2) {
          _mod47.default.reportFatalError(tmp2);
          const _default = _mod47.default;
        }
      }
    }
  },
  {
    key: "__shouldPauseOnThrow",
    value: function __shouldPauseOnThrow() {
      let tmp = typeof globalThis.DebuggerInternal !== "undefined";
      if (typeof globalThis.DebuggerInternal !== "undefined") {
        tmp = true === globalThis.DebuggerInternal.shouldPauseOnThrow;
      }
      return tmp;
    }
  },
  {
    key: "__callReactNativeMicrotasks",
    value: function __callReactNativeMicrotasks() {
      isEnabled.beginEvent("JSTimers.callReactNativeMicrotasks()");
      try {
        const self = this;
        if (null != this._reactNativeMicrotasksCallback) {
          const result = self._reactNativeMicrotasksCallback();
        }
        isEnabled.endEvent();
      } catch (tmp10) {
        tmp3(tmp[2]).endEvent();
        throw tmp10;
      }
    }
  },
  {
    key: "__callFunction",
    value: function __callFunction(closure_1, closure_2, closure_0) {
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      const beginEvent = isEnabled.beginEvent;
      if (this.__spy) {
        const _HermesInternal2 = HermesInternal;
        beginEvent("" + closure_1 + "." + closure_2 + "(" + tmp4(48).default(closure_0) + ")");
        let tmp11 = tmp4;
        const tmp4Result = tmp4(48);
      } else {
        const _HermesInternal = HermesInternal;
        beginEvent("" + closure_1 + "." + closure_2 + "(...)");
        tmp11 = tmp4;
      }
      try {
        if (self.__spy) {
          const obj = { type: 0, module: null, method: null, args: null };
          obj[1] = closure_1;
          obj[2] = closure_2;
          obj[3] = closure_0;
          self.__spy(obj);
        }
        const callableModule = self.getCallableModule(closure_1);
        if (!callableModule) {
          const _Object = Object;
          const keys = Object.keys(self._lazyCallableModules);
          const joined = keys.join(", ");
          let str9 = "false";
          if (true === MessageQueue.RN$Bridgeless) {
            str9 = "true";
          }
          const _HermesInternal3 = HermesInternal;
          let tmp11Result = tmp11(38);
          tmp11Result(false, "Failed to call into JavaScript module method " + closure_1 + "." + closure_2 + "(). Module has not been registered as callable. Bridgeless Mode: " + str9 + ". Registered callable JavaScript modules (n = " + keys.length + "): " + joined + ".\n          A frequent cause of the error is that the application entry file path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.");
        }
        if (!callableModule[closure_2]) {
          const _HermesInternal4 = HermesInternal;
          tmp11Result = tmp11(38);
          tmp11Result(false, "Failed to call into JavaScript module method " + closure_1 + "." + closure_2 + "(). Module exists, but the method is undefined.");
        }
        callableModule[closure_2].apply(callableModule, closure_0);
        tmp11(46).endEvent();
      } catch (tmp35) {
        tmp2(tmp[2]).endEvent();
        throw tmp35;
      }
    }
  },
  {
    key: "__invokeCallback",
    value: function __invokeCallback(closure_1, closure_0) {
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      if (1 & closure_1) {
        let value = self._successCallbacks.get(tmp);
        const _successCallbacks = self._successCallbacks;
      } else {
        value = self._failureCallbacks.get(tmp);
        const _failureCallbacks = self._failureCallbacks;
      }
      if (value) {
        self._successCallbacks.delete(tmp);
        self._failureCallbacks.delete(tmp);
        const items = [];
        HermesBuiltin.arraySpread(closure_0, 0);
        HermesBuiltin.apply(items, undefined);
      }
    }
  }
];
obj = {
  key: "spy",
  value: function spy(arg0) {
    if (true === arg0) {
      let tmp = (type) => {
        let str = "JS->N";
        if (0 === type.type) {
          str = "N->JS";
        }
        let str2 = "";
        if (null != type.module) {
          str2 = `${type.module}.`;
        }
        const text = `${str} : ${"" + str2 + type.method}`;
        console.log(`${str} : ${"" + str2 + type.method}` + "(" + JSON.stringify(type.args) + ")");
      };
    } else {
      tmp = null;
      if (false !== arg0) {
        tmp = arg0;
      }
    }
    MessageQueue.prototype.__spy = tmp;
  }
};
const items1 = [obj];

export default _createClassDefault(MessageQueue, items, items1);