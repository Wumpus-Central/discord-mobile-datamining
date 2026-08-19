// === Module 5041: enqueue ===

// Module 5041 (enqueue)
import timestampDefault from "timestamp" /* 3 */;
import DequeDefault from "Deque" /* 8 */;

let closure_2 = new timestampDefault("Queue");
const tmp2 = new timestampDefault("Queue");
const result = require("set").fileFinishedImporting("utils/Queue.tsx");
class Queue {
  constructor() {
    tmp = global;
    if (global === undefined) {
      tmp = closure_2;
    }
    num = arg1;
    if (arg1 === undefined) {
      num = 100;
    }
    obj = Object.create(new.target.prototype);
    tmp3 = new require("Deque")();
    obj[0] = tmp3;
    obj.logger = tmp;
    obj.defaultRetryAfter = num;
    return obj;
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
  set: undefined
});
prototype["_drainIfNecessary"] = function _drainIfNecessary() {
  let self = this;
  self = this;
  if (null === this.timeout) {
    if (0 !== self.queue.length) {
      if (true !== self.draining) {
        self.draining = true;
        let queue = self.queue;
        const arr = queue.shift();
        ({ success: closure_2, logId } = arr);
        let logger = self.logger;
        let _HermesInternal = HermesInternal;
        logger.log("Draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
        self.drain(arr.message, (retryAfter) => {
          const logger = self.logger;
          logger.log("Finished draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
          self.draining = false;
          if (null == retryAfter) {
            const _setImmediate = setImmediate;
            setImmediate(() => closure_3._drainIfNecessary());
            try {
              callback(arg1);
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
            logger2.info("Rate limited. Delaying draining of queue for " + defaultRetryAfter + " ms. LogId:" + tmp3 + " QueueLength: " + tmp2.queue.length);
            tmp2.pendingRetryItem = arr;
            const _setTimeout = setTimeout;
            tmp2.timeout = setTimeout(() => {
              closure_3.pendingRetryItem = null;
              const queue = closure_3.queue;
              queue.unshift(closure_1);
              closure_3.timeout = null;
              closure_3._drainIfNecessary();
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
prototype["remove"] = function remove(arg0) {
  const self = this;
  const items = [];
  if (this.queue.length > 0) {
    do {
      let queue = self.queue;
      let arr = queue.shift();
      if (!arg0(arr.message)) {
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