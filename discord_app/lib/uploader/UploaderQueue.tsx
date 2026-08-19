// === Module 7585: enqueue ===

// Module 7585 (enqueue)
import timestampDefault from "timestamp" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import obj132 from "obj132" /* 2 */;

let closure_1 = new timestampDefault("UploaderQueue.tsx");
class UploaderQueue {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    return obj;
  }
}
const prototype = UploaderQueue.prototype;
prototype["enqueue"] = function enqueue(headerResult) {
  const self = this;
  const queue = this.queue;
  queue.unshift(headerResult);
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
  return self(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            self.drainingQueue = true;
            const _HermesInternal2 = HermesInternal;
            closure_1_1.log("drainQueue() - starting, queue length: " + self.queue.length);
            const queue = self.queue;
            const arr = queue.pop();
            if (null == arr) {
              closure_1_1.log("drainQueue() - No uploads left, setting drainingQueue to false");
              self.drainingQueue = false;
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              c3 = 1;
              closure_1_1.log("drainQueue() - start uploader");
              closure_0 = arr();
              const promise = new Promise((fn) => {
                const _aborted = fn;
                if (tmp) {
                  fn();
                }
                _aborted.addListener("complete", () => callback());
                _aborted.addListener("error", () => callback());
              });
              c4 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = promise;
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_1 = closure_2;
            closure_1_1.error(closure_1);
            closure_0.drainQueue();
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const _HermesInternal = HermesInternal;
            closure_1_1.log("drainQueue() Uploader complete - " + closure_0.id);
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
let obj132 = Object.create(UploaderQueue.prototype);
obj132[0] = [];
const result = obj132.fileFinishedImporting("lib/uploader/UploaderQueue.tsx");

export default obj132;