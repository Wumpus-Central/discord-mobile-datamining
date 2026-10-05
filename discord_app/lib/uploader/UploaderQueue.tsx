// discord_app/lib/uploader/UploaderQueue.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5, closure_2, log;

new LoggerDefault("UploaderQueue.tsx");
class UploaderQueue {
  constructor() {
    const merged = Object.assign({ queue: null, drainingQueue: false });
    merged[0] = [];
    return merged;
  }
  enqueue(_default) {
    const self = this;
    const queue = this.queue;
    queue.unshift(_default);
    let str = "no";
    log = log.log;
    if (this.drainingQueue) {
      str = "yes";
    }
    log(`enqueue() - alreadying draining? ${str}`);
    if (!self.drainingQueue) {
      self.drainQueue();
    }
  }
  drainQueue() {
    let self = this;
    return self(function* () {
      let tmp;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let logger;
          let id;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              logger = tmp;
              id = undefined;
              self.drainingQueue = true;
              const _HermesInternal2 = HermesInternal;
              logger.log("drainQueue() - starting, queue length: " + self.queue.length);
              const queue = self.queue;
              const arr = queue.pop();
              if (null == arr) {
                logger.log("drainQueue() - No uploads left, setting drainingQueue to false");
                self.drainingQueue = false;
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else {
                c3 = 1;
                logger.log("drainQueue() - start uploader");
                id = arr();
                self = this;
                const self2 = this;
                const promise = new Promise((fn) => {
                  let closure_0 = fn;
                  const tmp = closure_1_0._aborted || closure_1_0._errored;
                  if (tmp) {
                    fn();
                  }
                  closure_1_0.addListener("complete", () => closure_0());
                  closure_1_0.addListener("error", () => closure_0());
                });
                c4 = 2;
                c5 = 1;
                const obj4 = { value: promise, done: false };
                return obj4;
              }
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              logger = closure_2;
              logger.error(logger);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const _HermesInternal = HermesInternal;
              logger.log("drainQueue() Uploader complete - " + id.id);
              c3 = 0;
            }
            closure_129_0.drainQueue();
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp27) {
          closure_2 = tmp27;
          if (0 === c3) {
            c5 = 3;
            throw tmp27;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
}
const prototype = UploaderQueue.prototype;
let merged = Object.assign({ queue: null, drainingQueue: false });
merged[0] = [];
const result = size.fileFinishedImporting("lib/uploader/UploaderQueue.tsx");

export default merged;
