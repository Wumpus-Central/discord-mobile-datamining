// === Module 1123: utils/ComponentDispatchUtils ===

// Module 1123 (utils/ComponentDispatchUtils)
import _mod580 from "module_580" /* 580 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("../discord_common/js/shared/utils/ComponentDispatchUtils.tsx");
class ComponentDispatcher {
  constructor(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const merged = Object.assign({ emitter: null, _savedDispatches: null });
    const eventEmitter = new _mod580.EventEmitter();
    merged[0] = eventEmitter;
    merged[1] = {};
    const obj2 = { maxListeners: 100, enableDevtools: false };
    const merged1 = Object.assign(obj);
    merged.options = obj2;
    let num = merged.options.maxListeners;
    if (num == null) {
      num = 100;
    }
    const emitter = merged.emitter;
    emitter.setMaxListeners(num);
    return merged;
  }
  safeDispatch(MODAL_CLOSE) {
    const self = this;
    const substr = [...arguments].slice();
    if (this.hasSubscribers(MODAL_CLOSE)) {
      const dispatch = self.dispatch;
      const items = [MODAL_CLOSE];
      HermesBuiltin.arraySpread(items, substr, 1);
      return HermesBuiltin.apply(dispatch, items, self);
    } else {
      let items1 = self._savedDispatches[MODAL_CLOSE];
      const first = substr[0];
      const _savedDispatches = self._savedDispatches;
      if (items1 == null) {
        items1 = [];
      }
      _savedDispatches[MODAL_CLOSE] = items1;
      items1.push(first);
      return self;
    }
  }
  dispatch(arg0, arg1) {
    const self = this;
    const timestamp = Date.now();
    try {
      const emitter = self.emitter;
      emitter.emit(arg0, arg1);
      const devtoolsReporter = self.options.enableDevtools && self.options.devtoolsReporter;
      if (devtoolsReporter) {
        const options = self.options;
        const _Date = Date;
        options.devtoolsReporter(arg0, arg1, Date.now() - timestamp);
      }
      return self;
    } catch (tmp4) {
      const devtoolsReporter2 = self.options.enableDevtools && self.options.devtoolsReporter;
      if (devtoolsReporter2) {
        const options2 = self.options;
        const _Date2 = Date;
        options2.devtoolsReporter(arg0, arg1, Date.now() - timestamp);
      }
      throw tmp4;
    }
  }
  dispatchToLastSubscribed(arg0, arg1) {
    const self = this;
    const timestamp = Date.now();
    try {
      const emitter = self.emitter;
      const listenersResult = emitter.listeners(arg0);
      if (listenersResult.length > 0) {
        listenersResult[listenersResult.length - 1](arg1);
      }
      const devtoolsReporter = self.options.enableDevtools && self.options.devtoolsReporter;
      if (devtoolsReporter) {
        const options = self.options;
        const _Date = Date;
        options.devtoolsReporter(arg0, arg1, Date.now() - timestamp);
      }
      return self;
    } catch (tmp5) {
      const devtoolsReporter2 = self.options.enableDevtools && self.options.devtoolsReporter;
      if (devtoolsReporter2) {
        const options2 = self.options;
        const _Date2 = Date;
        options2.devtoolsReporter(arg0, arg1, Date.now() - timestamp);
      }
      throw tmp5;
    }
  }
  hasSubscribers(MODAL_CLOSE) {
    const emitter = this.emitter;
    return emitter.listenerCount(MODAL_CLOSE) > 0;
  }
  _checkSavedDispatches(arg0) {
    const self = this;
    let closure_0 = arg0;
    if (null != this._savedDispatches[arg0]) {
      const item = arr.forEach((item) => {
        self.dispatch(closure_0, item);
      });
      tmp._savedDispatches[arg0] = undefined;
    }
  }
  subscribe(arg0, arg1) {
    const self = this;
    const emitter = this.emitter;
    const listenersResult = emitter.listeners(arg0);
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
  }
  subscribeOnce(arg0, arg1) {
    const emitter = this.emitter;
    emitter.once(arg0, arg1);
    const result = this._checkSavedDispatches(arg0);
    return this;
  }
  resubscribe(arg0, arg1) {
    const self = this;
    const emitter = this.emitter;
    const listenersResult = emitter.listeners(arg0);
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
  }
  unsubscribe(arg0, arg1) {
    const emitter = this.emitter;
    emitter.removeListener(arg0, arg1);
    return this;
  }
  reset() {
    const emitter = this.emitter;
    emitter.removeAllListeners();
    return this;
  }
  dispatchKeyed(VOICE_MESSAGE_SEND, channelId) {
    const substr = [...arguments].slice();
    const dispatch = this.dispatch;
    const items = ["" + VOICE_MESSAGE_SEND + "_" + channelId, ...substr];
    return dispatch.apply(items);
  }
  subscribeKeyed(VOICE_MESSAGE_SEND, channelId, callback) {
    return this.subscribe("" + VOICE_MESSAGE_SEND + "_" + channelId, callback);
  }
  unsubscribeKeyed(VOICE_MESSAGE_SEND, channelId, callback) {
    return this.unsubscribe("" + VOICE_MESSAGE_SEND + "_" + channelId, callback);
  }
}
const prototype = ComponentDispatcher.prototype;

export { ComponentDispatcher };