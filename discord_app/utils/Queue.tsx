// === Module 7474: Queue ===

// Module 7474 (Queue)
import LoggerDefault from "Logger" /* 3 */;
import DequeDefault from "Deque" /* 8 */;
import size from "module_2" /* 2 */;

let closure_2 = new LoggerDefault("Queue");
const tmp2 = new LoggerDefault("Queue");
const result = size.fileFinishedImporting("utils/Queue.tsx");
class Queue {
  constructor() {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = closure_2;
    }
    let num = arg1;
    if (arg1 === undefined) {
      num = 100;
    }
    const merged = Object.assign({ queue: null, timeout: null, draining: false, pendingRetryItem: null });
    merged[0] = new DequeDefault();
    merged.logger = tmp;
    merged.defaultRetryAfter = num;
    new DequeDefault();
    return merged;
  }
  enqueue(message, success, logId) {
    const queue = this.queue;
    const obj = { message, success, logId };
    queue.push(obj);
    this._drainIfNecessary();
  }
  _drainIfNecessary() {
    let logId;
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
          const message = pendingRetryItem.message;
          logger.log("Draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
          self.drain(message, (retryAfter, arg1) => {
            const logger = self.logger;
            logger.log("Finished draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
            self.draining = false;
            if (null == retryAfter) {
              const _setImmediate = setImmediate;
              setImmediate(() => self._drainIfNecessary());
              try {
                closure_2(arg1);
              } catch (tmp12) {
                const logger3 = self.logger;
                logger3.error("", tmp12);
              }
            } else {
              let defaultRetryAfter = retryAfter.retryAfter;
              if (defaultRetryAfter == null) {
                defaultRetryAfter = self.defaultRetryAfter;
              }
              const logger2 = self.logger;
              const _HermesInternal = HermesInternal;
              logger2.info("Rate limited. Delaying draining of queue for " + defaultRetryAfter + " ms. LogId:" + logId + " QueueLength: " + self.queue.length);
              self.pendingRetryItem = pendingRetryItem;
              const _setTimeout = setTimeout;
              self.timeout = setTimeout(() => {
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
  }
  clear() {
    const queue = this.queue;
    queue.clear();
    clearTimeout(this.timeout);
    this.timeout = null;
    this.draining = false;
    this.pendingRetryItem = null;
  }
  remove(fn) {
    const self = this;
    const items = [];
    if (this.queue.length > 0) {
      do {
        let queue = self.queue;
        let arr = queue.shift();
        if (!fn(arr.message)) {
          let arr2 = items.push(arr);
        }
      } while (self.queue.length > 0);
    }
    const queue1 = self.queue;
    const items1 = [...items];
    queue1.push.apply(items1);
    const tmp4 = null !== self.timeout && null !== self.pendingRetryItem && fn(self.pendingRetryItem.message);
    if (tmp4) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.timeout);
      self.timeout = null;
      self.pendingRetryItem = null;
      self._drainIfNecessary();
    }
  }
}
Object.defineProperty(Queue.prototype, "length", {
  get: function length() {
    return this.queue.length;
  },
  set: undefined
});

export default Queue;