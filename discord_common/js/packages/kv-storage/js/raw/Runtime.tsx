// === Module 1967: logger ===

// Module 1967 (logger)
import set from "set" /* 2 */;
import log from "log" /* 4 */;

let c2 = 1000000;
let closure_3 = "1" === process.env.KV_STORAGE_LOGGING;
const logger = new log.Logger("Runtime");
const prototype = function Runtime() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["nextId"] = function nextId() {
  const sum = this.counter + 1;
  this.counter = sum;
  return sum;
};
prototype["executeAsync"] = function executeAsync(type, arg1) {
  const self = this;
  closure_1 = type;
  closure_0 = arg1;
  this.initialize();
  return new Promise((resolve, reject) => {
    const nextIdResult = self.nextId();
    callback(nextIdResult);
    const pending = self.pending;
    const result = pending.set(nextIdResult, { id: nextIdResult, tag: closure_1, started: performance.now(), resolve, reject });
  });
};
prototype["addCompletionCallback"] = function addCompletionCallback(arg0) {
  this.completionCallbacks.push(arg0);
  return arg0;
};
prototype["addDatabaseStateCallback"] = function addDatabaseStateCallback(arg0) {
  this.dbStateCallbacks.push(arg0);
  return arg0;
};
prototype["removeCompletionCallback"] = function removeCompletionCallback(databaseStateCallback) {
  closure_0 = databaseStateCallback;
  this.completionCallbacks = this.completionCallbacks.filter((arg0) => arg0 !== closure_0);
};
prototype["removeDatabaseStateCallback"] = function removeDatabaseStateCallback(arg0) {
  closure_0 = arg0;
  this.dbStateCallbacks = this.dbStateCallbacks.filter((arg0) => arg0 !== closure_0);
};
prototype["onResponse"] = function onResponse(id) {
  const self = this;
  const pending = this.pending;
  const value = pending.get(id.id);
  if (null != value) {
    let num = arg1;
    const pending2 = self.pending;
    pending2.delete(id.id);
    if (arg1 == null) {
      num = 0;
    }
    id.timings.materializationTimeNanoseconds = num;
    self.completeOperation(value, id, nowResult);
    const operation = self.resolveOperation(value, id);
  }
};
prototype["onStatus"] = function onStatus(handle) {
  for (const item10007 of tmp) {
    let item10007Result = item10007(arg0.handle, arg0.state);
    continue;
  }
};
prototype["resolveOperation"] = function resolveOperation(value, ok) {
  if (ok.ok) {
    value.resolve(ok.data);
  } else {
    if (typeof ok.data === "string") {
      const _Error = Error;
      let data = new Error(ok.data);
    } else {
      data = ok.data;
    }
    value.reject(data);
  }
};
prototype["completeOperation"] = function completeOperation(value, timings, nowResult) {
  if (this.completionCallbacks.length > 0) {
    let obj = { id: null, tag: null, ok: null, value: null, timings: null };
    ({ id: obj[0], tag: obj[1] } = value);
    ({ ok: obj[2], data: obj[3] } = timings);
    obj = { queue: null, execution: null, materialization: null, ccTotal: null, jsTotal: null };
    obj[0] = timings.timings.queueTimeNanoseconds / c2;
    obj[1] = timings.timings.executionTimeNanoseconds / c2;
    obj[2] = timings.timings.materializationTimeNanoseconds / c2;
    obj[3] = timings.timings.totalTimeNanoseconds / c2;
    obj[4] = nowResult - value.started;
    obj[4] = obj;
    for (const item10005 of completionCallbacks) {
      let item10005Result = item10005(obj);
      continue;
    }
  }
};
prototype["initialize"] = function initialize() {
  let self = this;
  self = this;
  if (!this.initialized) {
    const KV_RAW = self(1959).KV_RAW;
    const obj = { status: null, response: null };
    obj[0] = function status(handle) {
      return self.onStatus(handle);
    };
    obj[1] = function response(arg0, arg1) {
      return self.onResponse(arg0, arg1);
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
        const ccTotal2 = ok.timings.ccTotal;
        const joined = items.join(", ");
        logger.info("" + ok.tag + " (#" + ok.id + ") " + str + " in " + ccTotal2.toFixed(3) + "ms (" + joined + ").");
      });
      const result1 = self.addDatabaseStateCallback((arg0, arg1) => logger.info("" + arg0 + " (state: " + arg1 + ")"));
    }
    self.initialized = true;
  }
};
prototype.counter = 0;
prototype.pending = new Map();
prototype.initialized = false;
prototype.dbStateCallbacks = [];
prototype.completionCallbacks = [];
const map = new Map();
let result = set.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx");

export const Runtime = prototype;