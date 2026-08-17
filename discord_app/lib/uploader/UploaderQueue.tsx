// discord_app/lib/uploader/UploaderQueue.tsx
import timestampDefault from "timestamp" /* 3 */;
import closure_0 from "asyncGeneratorStep" /* 5 */;
import set from "set" /* 2 */;

let closure_1 = new timestampDefault("UploaderQueue.tsx");
class UploaderQueue {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    return obj;
  }
}
const prototype = UploaderQueue.prototype;
prototype["enqueue"] = function enqueue(props) {
  const self = this;
  const queue = this.queue;
  queue.unshift(props);
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
            closure_1_0.drainingQueue = true;
            const _HermesInternal2 = HermesInternal;
            closure_1_1.log("drainQueue() - starting, queue length: " + closure_1_0.queue.length);
            const queue = closure_1_0.queue;
            const arr = queue.pop();
            if (null == arr) {
              closure_1_1.log("drainQueue() - No uploads left, setting drainingQueue to false");
              closure_1_0.drainingQueue = false;
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              c3 = 1;
              closure_1_1.log("drainQueue() - start uploader");
              closure_0 = arr();
              const promise = new Promise((arg0) => {
                const _aborted = arg0;
                if (tmp) {
                  arg0();
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
let set = Object.create(UploaderQueue.prototype);
set[0] = [];
const result = set.fileFinishedImporting("lib/uploader/UploaderQueue.tsx");

export default set;