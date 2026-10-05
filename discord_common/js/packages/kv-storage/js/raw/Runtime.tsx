// === Module 2088: Runtime ===

// Module 2088 (Runtime)
import logger_Logger from "logger/Logger" /* 4 */;
import size from "module_2" /* 2 */;

let c2 = 1000000;
let closure_3 = "1" === process.env.KV_STORAGE_LOGGING;
const logger = new logger_Logger.Logger("Runtime");
class Runtime {
  static nextId() {
    const sum = this.counter + 1;
    this.counter = sum;
    return sum;
  }
  static executeAsync(type, arg1) {
    const self = this;
    const tag = type;
    let closure_0 = arg1;
    this.initialize();
    const promise = new Promise((resolve, reject) => {
      const nextIdResult = self.nextId();
      closure_0(nextIdResult);
      const pending = self.pending;
      const obj = { id: nextIdResult, tag, started: performance.now(), resolve, reject };
      const result = pending.set(nextIdResult, obj);
    });
    return promise;
  }
  static addCompletionCallback(arg0) {
    const completionCallbacks = this.completionCallbacks;
    completionCallbacks.push(arg0);
    return arg0;
  }
  static addDatabaseStateCallback(arg0) {
    const dbStateCallbacks = this.dbStateCallbacks;
    dbStateCallbacks.push(arg0);
    return arg0;
  }
  static removeCompletionCallback(databaseStateCallback) {
    let closure_0 = databaseStateCallback;
    const completionCallbacks = this.completionCallbacks;
    this.completionCallbacks = completionCallbacks.filter((item) => item !== databaseStateCallback);
  }
  static removeDatabaseStateCallback(arg0) {
    let closure_0 = arg0;
    const dbStateCallbacks = this.dbStateCallbacks;
    this.dbStateCallbacks = dbStateCallbacks.filter((item) => item !== closure_0);
  }
  static onResponse(id, arg1) {
    const self = this;
    const pending = this.pending;
    const nowResult = performance.now();
    const value = pending.get(id.id);
    if (null != value) {
      let num = arg1;
      const pending2 = self.pending;
      pending2.delete(id.id);
      const timings = id.timings;
      if (arg1 == null) {
        num = 0;
      }
      timings.materializationTimeNanoseconds = num;
      self.completeOperation(value, id, nowResult);
      const operation = self.resolveOperation(value, id);
    }
  }
  static onStatus(handle) {
    const dbStateCallbacks = this.dbStateCallbacks;
    for (const item10007 of dbStateCallbacks) {
      let item10007Result = item10007(handle.handle, handle.state);
      continue;
    }
  }
  static resolveOperation(value, ok) {
    if (ok.ok) {
      value.resolve(ok.data);
    } else {
      let data;
      const reject = value.reject;
      if (typeof ok.data === "string") {
        const _Error = Error;
        const self = this;
        const self2 = this;
        data = new Error(ok.data);
      } else {
        data = ok.data;
      }
      reject(data);
    }
  }
  static completeOperation(value, timings, nowResult) {
    let obj2;
    if (this.completionCallbacks.length > 0) {
      const obj = { id: null, tag: null, ok: null, value: null, timings: obj2 };
      ({ id: obj.id, tag: obj.tag } = value);
      ({ ok: obj.ok, data: obj.value } = timings);
      obj2 = { queue: timings.timings.queueTimeNanoseconds / c2, execution: timings.timings.executionTimeNanoseconds / c2, materialization: timings.timings.materializationTimeNanoseconds / c2, ccTotal: timings.timings.totalTimeNanoseconds / c2, jsTotal: nowResult - value.started };
      for (const item10005 of completionCallbacks) {
        let item10005Result = item10005(obj);
        continue;
      }
    }
  }
  static initialize() {
    const self = this;
    if (!this.initialized) {
      const KV_RAW = self(2080).KV_RAW;
      const obj = {
        status(handle) {
            return self.onStatus(handle);
          },
        response(arg0, arg1) {
            return self.onResponse(arg0, arg1);
          }
      };
      KV_RAW.setCallbacks(obj);
      if (closure_3) {
        const result = self.addCompletionCallback((ok) => {
          let str = "failed";
          if (ok.ok) {
            str = "completed";
          }
          const execution = ok.timings.execution;
          const items = ["" + execution.toFixed(3) + "ms execution", , , ];
          const materialization = ok.timings.materialization;
          items[1] = "" + materialization.toFixed(3) + "ms js materialization";
          const ccTotal = ok.timings.ccTotal;
          items[2] = "" + ccTotal.toFixed(3) + "ms cc completion";
          const jsTotal = ok.timings.jsTotal;
          items[3] = "" + jsTotal.toFixed(3) + "ms js reception";
          const tag = ok.tag;
          const ccTotal2 = ok.timings.ccTotal;
          const joined = items.join(", ");
          logger.info("" + tag + " (#" + ok.id + ") " + str + " in " + ccTotal2.toFixed(3) + "ms (" + joined + ").");
        });
        const result1 = self.addDatabaseStateCallback((arg0, arg1) => logger.info("" + arg0 + " (state: " + arg1 + ")"));
      }
      self.initialized = true;
    }
  }
}
Runtime.counter = 0;
Runtime.pending = new Map();
Runtime.initialized = false;
Runtime.dbStateCallbacks = [];
Runtime.completionCallbacks = [];
new Map();
let result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx");

export { Runtime };