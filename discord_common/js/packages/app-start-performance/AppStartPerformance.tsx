// discord_common/js/packages/app-start-performance/AppStartPerformance.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

fn = globalThis.__getTotalRequireTime;
if (fn == null) {
  fn = () => 0;
}
let closure_2 = typeof performance !== "undefined";
class AppStartPerformance {
  constructor() {
    merged = Object.assign({ isTracing_: true, endTime_: null, lastImportDuration: 0, logGroups: null });
    merged[1] = Date.now() + 15000;
    obj = { index: 0, timestamp: Date.now(), logs: [], nativeLogs: [] };
    items = [];
    items[0] = obj;
    merged[3] = items;
    merged.logs = merged.logGroups[0].logs;
    merged.prefix = "";
    return merged;
  }
}
const prototype = AppStartPerformance.prototype;
Object.defineProperty(prototype, "isTracing", {
  get: function isTracing() {
    const self = this;
    let tmp = !closure_2;
    if (closure_2) {
      tmp = !self.isTracing_;
    }
    let tmp2 = !tmp;
    if (!tmp) {
      const _Date = Date;
      let flag = Date.now() <= self.endTime_;
      if (!flag) {
        self.isTracing_ = false;
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  set: undefined,
});
Object.defineProperty(prototype, "endTime", {
  get: function endTime() {
    return this.endTime_;
  },
  set: undefined,
});
Object.defineProperty(prototype, "endTime", {
  get: undefined,
  set: function endTime(endTime_) {
    this.endTime_ = endTime_;
    this.isTracing_ = true;
  },
});
prototype["resumeTracing"] = function resumeTracing() {
  const self = this;
  if (!this.isTracing) {
    const logGroups = self.logGroups;
    const obj = { index: self.logGroups.length, timestamp: null, logs: null, nativeLogs: null };
    const _Date = Date;
    obj.timestamp = Date.now();
    obj.logs = [];
    obj.nativeLogs = [];
    logGroups.unshift(obj);
    self.logs = self.logGroups[0].logs;
  }
  self.endTime = Date.now() + 10000;
};
prototype["mark"] = function mark(emoji, log, delta) {
  const self = this;
  if (this.isTracing) {
    const logs = self.logs;
    const obj = { emoji, prefix: null, log: null, delta: null, timestamp: null };
    const _HermesInternal = HermesInternal;
    obj.prefix = "" + self.prefix;
    obj.log = log;
    obj.delta = delta;
    const _Date = Date;
    obj.timestamp = Date.now();
    logs.push(obj);
    self.addImportLogDetail();
  }
};
prototype["markAndLog"] = function markAndLog(log, emoji, log2, delta) {
  const self = this;
  log.log(log2);
  if (this.isTracing) {
    const logs = self.logs;
    const obj = { emoji, prefix: self.prefix, log: log2, delta, timestamp: null };
    const _Date = Date;
    obj.timestamp = Date.now();
    logs.push(obj);
    self.addImportLogDetail();
  }
};
prototype["addImportLogDetail"] = function addImportLogDetail() {
  const self = this;
  const tmp = fn();
  if (tmp - this.lastImportDuration > 25) {
    const _Math = Math;
    self.addDetail("JS Imports", `${Math.ceil(tmp)}ms`);
    self.lastImportDuration = tmp;
  }
};
prototype["markWithDelta"] = function markWithDelta(arg0, arg1) {
  let diff;
  if (null != this.logs[this.logs.length - 1]) {
    if (null != tmp.timestamp) {
      const _Date = Date;
      diff = Date.now() - tmp.timestamp;
    }
  }
  this.mark(arg0, arg1, diff);
};
prototype["markAt"] = function markAt(emoji, app_opened, timestamp) {
  const self = this;
  if (this.isTracing) {
    let num3 = 0;
    let num4 = 0;
    if (0 < self.logs.length) {
      while (true) {
        timestamp = self.logs[num3].timestamp;
        if (null == timestamp) {
          num3 = num3 + 1;
          num4 = num3;
          if (num3 >= self.logs.length) {
            break;
          }
        } else {
          num4 = num3;
          if (timestamp > timestamp) {
            break;
          }
        }
        break;
      }
    }
    const logs = self.logs;
    const obj = { emoji, log: app_opened, timestamp, prefix: null };
    let str;
    if (self.logs[num4] != null) {
      str = tmp6.prefix;
    }
    if (str == null) {
      str = "";
    }
    obj.prefix = str;
    logs.splice(num4, 0, obj);
  }
};
prototype["addDetail"] = function addDetail(TTI, length) {
  const self = this;
  if (this.isTracing) {
    const logs = self.logs;
    const obj = { emoji: self.logs[self.logs.length - 1].emoji, prefix: self.prefix, log: null };
    const _HermesInternal = HermesInternal;
    obj.log = "  \u21AA " + TTI + " " + length;
    logs.push(obj);
  }
};
prototype["time"] = function time(arg0, arg1, fn) {
  const self = this;
  if (this.isTracing) {
    const _HermesInternal = HermesInternal;
    ({ prefix, mark } = self);
    mark(arg0, "Start " + arg1);
    self.prefix = `${self.prefix}| `;
    const _Date = Date;
    const timestamp = Date.now();
    const _Date2 = Date;
    self.prefix = prefix;
    const _HermesInternal2 = HermesInternal;
    const diff = Date.now() - timestamp;
    self.mark(arg0, "Finish " + arg1, diff);
    return fn();
  } else {
    return fn();
  }
};
prototype["timeAsync"] = function timeAsync(emoji, name, callback) {
  closure_0 = emoji;
  closure_1 = name;
  closure_2 = callback;
  const self = this;
  return (async () => {
    closure_1 = tmp5;
    closure_0 = tmp2;
    if (!self.isTracing) {
      return v1();
    }
    const _HermesInternal2 = HermesInternal;
    self.mark(closure_0, "Start " + closure_1);
    const _Date2 = Date;
    closure_128_0 = Date.now();
    closure_128_1 = await v1();
    const _Date = Date;
    closure_128_2 = Date.now() - closure_128_0;
    const _HermesInternal = HermesInternal;
    closure_129_3.mark(closure_129_0, "Finish " + closure_129_1, closure_128_2);
    return closure_128_1;
  })();
};
prototype["setServerTrace"] = function setServerTrace(connectionPath) {
  this.logGroups[0].serverTrace = connectionPath;
};
let merged = Object.assign({ isTracing_: true, endTime_: null, lastImportDuration: 0, logGroups: null });
merged[1] = Date.now() + 15000;
let items = [{ index: 0, timestamp: Date.now(), logs: [], nativeLogs: [] }];
merged[3] = items;
merged.logs = merged.logGroups[0].logs;
merged.prefix = "";
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx",
);

export default merged;
