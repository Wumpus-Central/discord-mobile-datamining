// discord_app/lib/uploader/UploaderQueue.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const logger = new LoggerDefault("UploaderQueue.tsx");
class UploaderQueue {
  constructor() {
    merged = Object.assign({ queue: null, drainingQueue: false });
    merged[0] = [];
    return merged;
  }
}
const prototype = UploaderQueue.prototype;
prototype["enqueue"] = function enqueue(_default) {
  const self = this;
  const queue = this.queue;
  queue.unshift(_default);
  let str = "no";
  if (this.drainingQueue) {
    str = "yes";
  }
  logger.log(`enqueue() - alreadying draining? ${str}`);
  if (!self.drainingQueue) {
    self.drainQueue();
  }
};
prototype["drainQueue"] = function drainQueue() {
  const self = this;
  return self(function* () {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const _aborted = tmp7;
            closure_128_0 = undefined;
            self.drainingQueue = true;
            const _HermesInternal2 = HermesInternal;
            tmp3.log("drainQueue() - starting, queue length: " + self.queue.length);
            const queue = self.queue;
            const arr = queue.pop();
            if (null == arr) {
              tmp3.log("drainQueue() - No uploads left, setting drainingQueue to false");
              self.drainingQueue = false;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c3 = 1;
              tmp3.log("drainQueue() - start uploader");
              closure_128_0 = arr();
              const promise = new Promise((fn) => {
                closure_0 = fn;
                if (tmp) {
                  fn();
                }
                _aborted.addListener("complete", () => closure_0());
                _aborted.addListener("error", () => closure_0());
                tmp = _aborted._aborted || _aborted._errored;
              });
              c4 = 2;
              c5 = 1;
              const obj1 = { value: promise, done: false };
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = closure_2;
            tmp3.error(closure_128_1);
            closure_129_0.drainQueue();
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const _HermesInternal = HermesInternal;
            tmp3.log("drainQueue() Uploader complete - " + closure_128_0.id);
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp32) {
        closure_2 = tmp32;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp32;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
let merged = Object.assign({ queue: null, drainingQueue: false });
merged[0] = [];
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/UploaderQueue.tsx");

export default merged;
