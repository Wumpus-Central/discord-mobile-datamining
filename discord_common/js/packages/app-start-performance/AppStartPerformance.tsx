// discord_common/js/packages/app-start-performance/AppStartPerformance.tsx
import closure_0 from "../../../../_runtime/00005_asyncGeneratorStep.js";

let fn = globalThis.__getTotalRequireTime;
if (fn == null) {
  fn = () => 0;
}
let closure_2 = typeof performance !== "undefined";
class AppStartPerformance {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[1] = Date.now() + 15000;
    obj = { index: 0, timestamp: Date.now(), logs: [], nativeLogs: [] };
    items = [];
    items[0] = obj;
    obj[3] = items;
    obj.logs = obj.logGroups[0].logs;
    obj.prefix = "";
    return obj;
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
    const obj = { index: null, timestamp: null, logs: null, nativeLogs: null };
    obj[0] = self.logGroups.length;
    const _Date = Date;
    obj[1] = Date.now();
    obj[2] = [];
    obj[3] = [];
    logGroups.unshift(obj);
    self.logs = self.logGroups[0].logs;
  }
  self.endTime = Date.now() + 10000;
};
prototype["mark"] = function mark(arg0, arg1, arg2) {
  const self = this;
  if (this.isTracing) {
    const logs = self.logs;
    const obj = { emoji: null, prefix: null, log: null, delta: null, timestamp: null };
    obj[0] = arg0;
    const _HermesInternal = HermesInternal;
    obj[1] = "" + self.prefix;
    obj[2] = arg1;
    obj[3] = arg2;
    const _Date = Date;
    obj[4] = Date.now();
    logs.push(obj);
    self.addImportLogDetail();
  }
};
prototype["markAndLog"] = function markAndLog(closure_20, arg1, arg2) {
  const self = this;
  closure_20.log(arg2);
  if (this.isTracing) {
    const logs = self.logs;
    const obj = { emoji: null, prefix: null, log: null, delta: null, timestamp: null };
    obj[0] = arg1;
    obj[1] = self.prefix;
    obj[2] = arg2;
    obj[3] = arg3;
    const _Date = Date;
    obj[4] = Date.now();
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
prototype["markAt"] = function markAt(arg0, app_opened, JSBundleLoadedTimestamp) {
  const self = this;
  if (this.isTracing) {
    let num3 = 0;
    let num4 = 0;
    if (0 < self.logs.length) {
      while (true) {
        let timestamp = self.logs[num3].timestamp;
        let tmp3 = num3;
        if (null == timestamp) {
          num3 = num3 + 1;
          num4 = num3;
          if (num3 >= self.logs.length) {
            break;
          }
        } else {
          num4 = num3;
          if (timestamp > JSBundleLoadedTimestamp) {
            break;
          }
        }
        break;
      }
    }
    const logs = self.logs;
    const obj = { emoji: null, log: null, timestamp: null, prefix: null };
    obj[0] = arg0;
    obj[1] = app_opened;
    obj[2] = JSBundleLoadedTimestamp;
    let str;
    if (self.logs[num4] != null) {
      str = tmp6.prefix;
    }
    if (str == null) {
      str = "";
    }
    obj[3] = str;
    logs.splice(num4, 0, obj);
  }
};
prototype["addDetail"] = function addDetail(TTI, closure_5) {
  const self = this;
  if (this.isTracing) {
    const logs = self.logs;
    const obj = { emoji: null, prefix: null, log: null };
    obj[0] = self.logs[self.logs.length - 1].emoji;
    obj[1] = self.prefix;
    const _HermesInternal = HermesInternal;
    obj[2] = "  \u21AA " + TTI + " " + closure_5;
    logs.push(obj);
  }
};
prototype["time"] = function time(arg0, arg1, arg2) {
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
    return arg2();
  } else {
    return arg2();
  }
};
prototype["timeAsync"] = function timeAsync(emoji, name, closure_1_0) {
  const callback = emoji;
  closure_1 = name;
  closure_2 = closure_1_0;
  const self = this;
  return callback(function* () {
    closure_1 = tmp5;
    closure_0 = tmp2;
    if (!c3.isTracing) {
      return v0();
    }
    const _HermesInternal2 = HermesInternal;
    c3.mark(closure_1_0, "Start " + closure_1_1);
    const _Date2 = Date;
    closure_0 = Date.now();
    closure_1 = yield v0();
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    c3.mark(closure_0, "Finish " + closure_1, closure_2);
    return closure_1;
  })();
};
prototype["setServerTrace"] = function setServerTrace(connectionPath) {
  this.logGroups[0].serverTrace = connectionPath;
};
let obj = Object.create(AppStartPerformance.prototype);
obj[1] = Date.now() + 15000;
obj = { index: 0, timestamp: Date.now(), logs: [], nativeLogs: [] };
let items = [obj];
obj[3] = items;
obj.logs = obj.logGroups[0].logs;
obj.prefix = "";
const result = require("set").fileFinishedImporting(
  "../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx",
);

export default obj;
