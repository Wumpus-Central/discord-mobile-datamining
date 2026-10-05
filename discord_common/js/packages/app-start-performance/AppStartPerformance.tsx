// discord_common/js/packages/app-start-performance/AppStartPerformance.tsx
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let fn = globalThis.__getTotalRequireTime;
if (fn == null) {
  fn = () => 0;
}
let closure_2 = typeof performance !== "undefined";
class AppStartPerformance {
  constructor() {
    const merged = Object.assign({ isTracing_: true, endTime_: null, lastImportDuration: 0, logGroups: null });
    merged[1] = Date.now() + 15000;
    const items = [{ index: 0, timestamp: Date.now(), logs: [], nativeLogs: [] }];
    merged[3] = items;
    merged.logs = merged.logGroups[0].logs;
    merged.prefix = "";
    ({ index: 0, timestamp: Date.now(), logs: [], nativeLogs: [] });
    return merged;
  }
  resumeTracing() {
    const self = this;
    if (!this.isTracing) {
      const logGroups = self.logGroups;
      const _Date = Date;
      const unshift = logGroups.unshift;
      const obj = { index: self.logGroups.length, timestamp: Date.now(), logs: [], nativeLogs: [] };
      unshift(obj);
      self.logs = self.logGroups[0].logs;
    }
    self.endTime = Date.now() + 10000;
  }
  mark(emoji, log, delta) {
    const self = this;
    if (this.isTracing) {
      const logs = self.logs;
      const _HermesInternal = HermesInternal;
      const push = logs.push;
      const _Date = Date;
      const obj = { emoji, prefix: "" + self.prefix, log, delta, timestamp: Date.now() };
      push(obj);
      self.addImportLogDetail();
    }
  }
  markAndLog(log, emoji, log2, delta) {
    const self = this;
    log.log(log2);
    if (this.isTracing) {
      const logs = self.logs;
      const _Date = Date;
      const push = logs.push;
      const obj = { emoji, prefix: self.prefix, log: log2, delta, timestamp: Date.now() };
      push(obj);
      self.addImportLogDetail();
    }
  }
  addImportLogDetail() {
    const self = this;
    const tmp = fn();
    if (tmp - this.lastImportDuration > 25) {
      const _Math = Math;
      self.addDetail("JS Imports", `${Math.ceil(tmp)}ms`);
      self.lastImportDuration = tmp;
    }
  }
  markWithDelta(arg0, arg1) {
    let diff;
    const mark = this.mark;
    if (null != this.logs[this.logs.length - 1]) {
      if (null != this.logs[this.logs.length - 1].timestamp) {
        const _Date = Date;
        diff = Date.now() - tmp.timestamp;
      }
    }
    mark(arg0, arg1, diff);
  }
  markAt(emoji, app_opened, JSBundleLoadedTimestamp) {
    let str;
    const self = this;
    if (this.isTracing) {
      let num3 = 0;
      let num4 = 0;
      if (0 < self.logs.length) {
        while (true) {
          let timestamp = self.logs[num3].timestamp;
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
      const obj = { emoji, log: app_opened, timestamp: JSBundleLoadedTimestamp, prefix: str };
      str = undefined;
      const splice = logs.splice;
      if (self.logs[num4] != null) {
        str = tmp6.prefix;
      }
      if (str == null) {
        str = "";
      }
      splice(num4, 0, obj);
    }
  }
  addDetail(TTI, length) {
    const self = this;
    if (this.isTracing) {
      const logs = self.logs;
      const _HermesInternal = HermesInternal;
      const push = logs.push;
      const obj = {
        emoji: self.logs[self.logs.length - 1].emoji,
        prefix: self.prefix,
        log: "  \u21AA " + TTI + " " + length,
      };
      push(obj);
    }
  }
  time(arg0, arg1, fn) {
    let mark;
    let prefix;
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
      const tmp6 = fn();
      const diff = Date.now() - timestamp;
      self.mark(arg0, "Finish " + arg1, diff);
      return tmp6;
    } else {
      return fn();
    }
  }
  timeAsync(emoji, name, callback) {
    let closure_0 = emoji;
    let closure_1 = name;
    closure_2 = callback;
    const self = this;
    return (async () => {
      let c3;
      let v1;
      const value = tmp4;
      closure_0 = tmp;
      if (!self.isTracing) {
        return v1();
      }
      const _HermesInternal2 = HermesInternal;
      self.mark(closure_0, "Start " + value);
      const _Date2 = Date;
      closure_0 = Date.now();
      await v1();
      const _Date = Date;
      v1 = Date.now() - closure_0;
      const _HermesInternal = HermesInternal;
      closure_129_3.mark(closure_129_0, "Finish " + closure_129_1, v1);
      return value;
    })();
  }
  setServerTrace(connectionPath) {
    this.logGroups[0].serverTrace = connectionPath;
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
    if (tmp2) {
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
let merged = Object.assign({ isTracing_: true, endTime_: null, lastImportDuration: 0, logGroups: null });
merged[1] = Date.now() + 15000;
let obj = { index: 0, timestamp: Date.now(), logs: [], nativeLogs: [] };
let items = [obj];
merged[3] = items;
merged.logs = merged.logGroups[0].logs;
merged.prefix = "";
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx",
);

export default merged;
