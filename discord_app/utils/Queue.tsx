// discord_app/utils/Queue.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import DequeDefault from "../../_runtime/00008_Deque.js";

let closure_2 = new LoggerDefault("Queue");
const size = fn(2);
const result = size.fileFinishedImporting("utils/Queue.tsx");
class Queue {
  constructor() {
    tmp = global;
    if (global === undefined) {
      tmp = closure_2;
    }
    num = fn;
    if (fn === undefined) {
      num = 100;
    }
    merged = Object.assign({ queue: null, timeout: null, draining: false, pendingRetryItem: null });
    tmp3 = new closure_0(closure_1[1])();
    merged[0] = tmp3;
    merged.logger = tmp;
    merged.defaultRetryAfter = num;
    return merged;
  }
}
const prototype = Queue.prototype;
prototype["enqueue"] = function enqueue(message, success, logId) {
  const queue = this.queue;
  queue.push({ message, success, logId });
  this._drainIfNecessary();
};
Object.defineProperty(prototype, "length", {
  get: function length() {
    return this.queue.length;
  },
  set: undefined,
});
prototype["_drainIfNecessary"] = function _drainIfNecessary() {
  const self = this;
  if (null === this.timeout) {
    if (0 !== self.queue.length) {
      if (true !== self.draining) {
        self.draining = true;
        let queue = self.queue;
        const pendingRetryItem = queue.shift();
        ({ success: closure_2, logId } = pendingRetryItem);
        let logger = self.logger;
        let _HermesInternal = HermesInternal;
        logger.log("Draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
        self.drain(pendingRetryItem.message, (retryAfter, arg1) => {
          const logger = self.logger;
          logger.log("Finished draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
          self.draining = false;
          if (null == retryAfter) {
            const _setImmediate = setImmediate;
            setImmediate(() => self._drainIfNecessary());
            try {
              closure_1_2(arg1);
            } catch (tmp13) {
              const logger3 = tmp.logger;
              logger3.error("", tmp13);
            }
          } else {
            let defaultRetryAfter = retryAfter.retryAfter;
            if (defaultRetryAfter == null) {
              defaultRetryAfter = tmp2.defaultRetryAfter;
            }
            const logger2 = tmp2.logger;
            const _HermesInternal = HermesInternal;
            logger2.info(
              "Rate limited. Delaying draining of queue for " +
                defaultRetryAfter +
                " ms. LogId:" +
                tmp3 +
                " QueueLength: " +
                tmp2.queue.length,
            );
            tmp2.pendingRetryItem = pendingRetryItem;
            const _setTimeout = setTimeout;
            tmp2.timeout = setTimeout(() => {
              self.pendingRetryItem = null;
              const queue = self.queue;
              queue.unshift(pendingRetryItem);
              self.timeout = null;
              self._drainIfNecessary();
            }, defaultRetryAfter);
          }
        });
      }
    }
  }
};
prototype["clear"] = function clear() {
  const queue = this.queue;
  queue.clear();
  clearTimeout(this.timeout);
  this.timeout = null;
  this.draining = false;
  this.pendingRetryItem = null;
};
prototype["remove"] = function remove(fn) {
  const self = this;
  const items = [];
  if (this.queue.length > 0) {
    do {
      let queue = self.queue;
      let arr = queue.shift();
      if (!fn(arr.message)) {
        arr = items.push(arr);
      }
    } while (self.queue.length > 0);
  }
  const queue1 = self.queue;
  const items1 = [...items];
  queue1.push.apply(items1);
  if (tmp4) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.timeout);
    self.timeout = null;
    self.pendingRetryItem = null;
    self._drainIfNecessary();
  }
};

export default Queue;
