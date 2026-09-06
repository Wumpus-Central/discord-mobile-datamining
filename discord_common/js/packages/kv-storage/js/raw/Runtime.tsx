// discord_common/js/packages/kv-storage/js/raw/Runtime.tsx
import logger_Logger from "../../../logger/Logger.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c2 = 1000000;
let closure_3 = "1" === process.env.KV_STORAGE_LOGGING;
const logger = new logger_Logger.Logger("Runtime");
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
  const tag = type;
  closure_0 = arg1;
  this.initialize();
  return new Promise((resolve, reject) => {
    const nextIdResult = self.nextId();
    closure_0(nextIdResult);
    const pending = self.pending;
    const result = pending.set(nextIdResult, { id: nextIdResult, tag, started: performance.now(), resolve, reject });
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
  this.completionCallbacks = this.completionCallbacks.filter((item) => item !== closure_0);
};
prototype["removeDatabaseStateCallback"] = function removeDatabaseStateCallback(arg0) {
  closure_0 = arg0;
  this.dbStateCallbacks = this.dbStateCallbacks.filter((item) => item !== closure_0);
};
prototype["onResponse"] = function onResponse(id, arg1) {
  const self = this;
  const pending = this.pending;
  value = pending.get(id.id);
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
    ({ id: obj.id, tag: obj.tag } = value);
    ({ ok: obj.ok, data: obj.value } = timings);
    obj = {
      queue: timings.timings.queueTimeNanoseconds / c2,
      execution: timings.timings.executionTimeNanoseconds / c2,
      materialization: timings.timings.materializationTimeNanoseconds / c2,
      ccTotal: timings.timings.totalTimeNanoseconds / c2,
      jsTotal: nowResult - value.started,
    };
    obj.timings = obj;
    for (const item10005 of completionCallbacks) {
      let item10005Result = item10005(obj);
      continue;
    }
  }
};
prototype["initialize"] = function initialize() {
  const self = this;
  if (!this.initialized) {
    const KV_RAW = self(1988).KV_RAW;
    const obj = {
      status(handle) {
        return self.onStatus(handle);
      },
      response(arg0, arg1) {
        return self.onResponse(arg0, arg1);
      },
    };
    KV_RAW.setCallbacks(obj);
    if (closure_3) {
      const result = self.addCompletionCallback((ok) => {
        let str = "failed";
        if (ok.ok) {
          str = "completed";
        }
        const execution = ok.timings.execution;
        const items = ["" + execution.toFixed(3) + "ms execution", , ,];
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
let result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx");

export const Runtime = prototype;
