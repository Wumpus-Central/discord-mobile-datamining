let result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/ComponentDispatchUtils.tsx");
class ComponentDispatcher {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    obj = Object.create(new.target.prototype);
    eventEmitter = new require("EventEmitter").EventEmitter();
    obj[0] = eventEmitter;
    obj[1] = {};
    obj1 = { maxListeners: 100, enableDevtools: false };
    merged = Object.assign(obj);
    obj.options = obj1;
    num = obj.options.maxListeners;
    if (num == null) {
      num = 100;
    }
    emitter = obj.emitter;
    setMaxListenersResult = emitter.setMaxListeners(num);
    return obj;
  }
}
const prototype = ComponentDispatcher.prototype;
prototype["safeDispatch"] = function safeDispatch(MODAL_CLOSE) {
  const self = this;
  const substr = [...arguments].slice();
  if (this.hasSubscribers(MODAL_CLOSE)) {
    const dispatch = self.dispatch;
    const items = [MODAL_CLOSE];
    HermesBuiltin.arraySpread(substr, 1);
    return HermesBuiltin.apply(items, self);
  } else {
    let items1 = self._savedDispatches[MODAL_CLOSE];
    if (items1 == null) {
      items1 = [];
    }
    self._savedDispatches[MODAL_CLOSE] = items1;
    items1.push(substr[0]);
    return self;
  }
};
prototype["dispatch"] = function dispatch(arg0, arg1) {
  const self = this;
  try {
    const emitter = self.emitter;
    emitter.emit(arg0, arg1);
    let devtoolsReporter = self.options.enableDevtools;
    if (devtoolsReporter) {
      devtoolsReporter = self.options.devtoolsReporter;
    }
    if (devtoolsReporter) {
      const options = self.options;
      const _Date = Date;
      options.devtoolsReporter(arg0, arg1, Date.now() - tmp6);
    }
    return self;
  } catch (tmp9) {
    let devtoolsReporter2 = tmp2.options.enableDevtools;
    if (devtoolsReporter2) {
      devtoolsReporter2 = tmp2.options.devtoolsReporter;
    }
    if (devtoolsReporter2) {
      const options2 = tmp2.options;
      const _Date2 = tmp.Date;
      options2.devtoolsReporter(tmp4, tmp3, _Date2.now() - tmp5);
    }
    throw tmp9;
  }
};
prototype["dispatchToLastSubscribed"] = function dispatchToLastSubscribed(arg0, arg1) {
  const self = this;
  try {
    const emitter = self.emitter;
    const listenersResult = emitter.listeners(arg0);
    if (listenersResult.length > 0) {
      arr2[arr2.length - 1](arg1);
    }
    let devtoolsReporter = self.options.enableDevtools;
    if (devtoolsReporter) {
      devtoolsReporter = self.options.devtoolsReporter;
    }
    if (devtoolsReporter) {
      const options = self.options;
      const _Date = Date;
      options.devtoolsReporter(arg0, arg1, Date.now() - tmp6);
    }
    return self;
  } catch (tmp10) {
    let devtoolsReporter2 = tmp2.options.enableDevtools;
    if (devtoolsReporter2) {
      devtoolsReporter2 = tmp2.options.devtoolsReporter;
    }
    if (devtoolsReporter2) {
      const options2 = tmp2.options;
      const _Date2 = tmp.Date;
      options2.devtoolsReporter(tmp4, tmp3, _Date2.now() - tmp5);
    }
    throw tmp10;
  }
};
prototype["hasSubscribers"] = function hasSubscribers(MODAL_CLOSE) {
  const emitter = this.emitter;
  return emitter.listenerCount(MODAL_CLOSE) > 0;
};
prototype["_checkSavedDispatches"] = function _checkSavedDispatches(arg0) {
  const self = this;
  let closure_0 = arg0;
  if (null != this._savedDispatches[arg0]) {
    const item = arr.forEach((arg0) => {
      self.dispatch(closure_0, arg0);
    });
    tmp._savedDispatches[arg0] = undefined;
  }
};
prototype["subscribe"] = function subscribe(arg0, arg1) {
  const self = this;
  const emitter = this.emitter;
  if (listenersResult.indexOf(arg1) >= 0) {
    if (self.options.logger) {
      const logger = self.options.logger;
      logger.warn("ComponentDispatch.subscribe: Attempting to add a duplicate listener", arg0);
    }
  } else {
    const emitter2 = self.emitter;
    emitter2.on(arg0, arg1);
    const result = self._checkSavedDispatches(arg0);
  }
  return self;
};
prototype["subscribeOnce"] = function subscribeOnce(arg0, arg1) {
  const emitter = this.emitter;
  emitter.once(arg0, arg1);
  const result = this._checkSavedDispatches(arg0);
  return this;
};
prototype["resubscribe"] = function resubscribe(arg0, arg1) {
  const self = this;
  const emitter = this.emitter;
  if (listenersResult.includes(arg1)) {
    const emitter2 = self.emitter;
    emitter2.off(arg0, arg1);
    const emitter3 = self.emitter;
    emitter3.on(arg0, arg1);
  } else if (self.options.logger) {
    const logger = self.options.logger;
    logger.warn("ComponentDispatch.resubscribe: Resubscribe without existing subscription", arg0);
  }
  return self;
};
prototype["unsubscribe"] = function unsubscribe(arg0, arg1) {
  const emitter = this.emitter;
  emitter.removeListener(arg0, arg1);
  return this;
};
prototype["reset"] = function reset() {
  const emitter = this.emitter;
  emitter.removeAllListeners();
  return this;
};
prototype["dispatchKeyed"] = function dispatchKeyed(VOICE_MESSAGE_SEND, voiceMessageAnimationState, arg2) {
  const substr = [...arguments].slice();
  const items = ["" + VOICE_MESSAGE_SEND + "_" + voiceMessageAnimationState, ...substr];
  return this.dispatch.apply(items);
};
prototype["subscribeKeyed"] = function subscribeKeyed(VOICE_MESSAGE_SEND, sharedValue1, callback) {
  return this.subscribe("" + VOICE_MESSAGE_SEND + "_" + sharedValue1, callback);
};
prototype["unsubscribeKeyed"] = function unsubscribeKeyed(VOICE_MESSAGE_SEND, closure_1, closure_10) {
  return this.unsubscribe("" + VOICE_MESSAGE_SEND + "_" + closure_1, closure_10);
};

export { ComponentDispatcher };