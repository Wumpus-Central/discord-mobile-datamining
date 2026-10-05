// === Module 579: LoggingUtils ===

// Module 579 (LoggingUtils)
import logger_Logger from "logger/Logger" /* 4 */;
import _mod580 from "module_580" /* 580 */;
import navigationStart from "navigationStart" /* 581 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const logger = new logger_Logger.Logger("Flux");
const EventEmitter = _mod580.EventEmitter;
class ActionLogger extends EventEmitter {
  constructor(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.persist;
    if (flag === undefined) {
      flag = false;
    }
    const tmp = new ActionLogger(new.target, this, flag);
    tmp.logs = [];
    tmp.persist = flag;
    return tmp;
  }
  log(action, fn) {
    const self = this;
    _require = action;
    const tmp = new ActionLog(action);
    let closure_0 = tmp;
    let _performance = require("navigationStart").performance;
    tmp.startTime = _performance.now();
    try {
      let tmp5 = fn((name, fn) => {
        const obj = { name, time: -1 };
        const _performance = navigationStart.performance;
        const nowResult = _performance.now();
        try {
          const tmp5 = fn();
          const _performance2 = navigationStart.performance;
          obj.time = _performance2.now() - nowResult;
          if (self.persist) {
            const traces = closure_0.traces;
            traces.push(obj);
          }
          self.emit("trace", action.type, name, obj.time);
          return tmp5;
        } catch (tmp12) {
          const _performance3 = navigationStart.performance;
          obj.time = _performance3.now() - nowResult;
          if (self.persist) {
            const traces1 = closure_0.traces;
            traces1.push(obj);
          }
          self.emit("trace", action.type, name, obj.time);
          throw tmp12;
        }
      });
      let _performance2 = tmp2(tmp3[2]).performance;
      tmp.totalTime = _performance2.now() - tmp.startTime;
      const persist = self.persist && tmp.totalTime > 0;
      if (persist) {
        const logs = self.logs;
        logs.push(tmp);
      }
      if (self.logs.length > 1000) {
        const logs1 = self.logs;
        logs1.shift();
      }
      self.emit("log", action);
      return tmp;
    } catch (tmp9) {
      let _performance3 = tmp2(tmp3[2]).performance;
      tmp.totalTime = _performance3.now() - tmp.startTime;
      const persist2 = self.persist && tmp.totalTime > 0;
      if (persist2) {
        const logs2 = self.logs;
        logs2.push(tmp);
      }
      if (self.logs.length > 1000) {
        const logs3 = self.logs;
        logs3.shift();
      }
      self.emit("log", action);
      throw tmp9;
    }
  }
  getSlowestActions(arg0) {
    let closure_0 = arg0;
    let num = arg1;
    if (arg1 === undefined) {
      num = 20;
    }
    let closure_1;
    let closure_2;
    let items = [];
    const iter = this.logs[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (null == arg0) {
        let traces = tmp2.traces;
        for (const item10021 of traces) {
          let items1 = [item10021.name, , ];
          items1[1] = tmp2.name;
          items1[2] = item10021.time;
          let arr = items.push(items1);
          continue;
        }
      } else {
        let tmp3 = nextResult;
      }
      continue;
    }
    const sorted = items.sort((arg0, arg1) => arg1[2] - arg0[2]);
    if (items.length > num) {
      items.length = num;
    }
    closure_1 = 0;
    closure_2 = 0;
    const mapped = items.map((item) => {
      let tmp;
      let tmp2;
      let tmp3;
      [tmp, tmp2, tmp3] = item;
      const combined = "" + tmp;
      let sum = combined;
      if (null == closure_0) {
        const _HermesInternal = HermesInternal;
        sum = combined + "<" + tmp2 + ">";
      }
      closure_1 = Math.max(sum.length, closure_1);
      const items = [sum, tmp3];
      return items;
    });
    const mapped1 = mapped.map((item) => {
      let obj;
      let tmp;
      [obj, tmp] = item;
      closure_2 = closure_2 + tmp;
      return "" + obj.padEnd(closure_1 + 1, " ") + " - " + tmp + "ms";
    });
    const joined = mapped1.join("\n");
    const tmp11 = 0 === items.length || items[0][2] < 10 || closure_2 < 20;
    if (!tmp11) {
      let _HermesInternal1;
      const log = logger.log;
      if (global != null) {
        _HermesInternal1 = global.HermesInternal;
      }
      log("Using Hermes:", undefined !== _HermesInternal1);
      let str3 = "";
      const log2 = logger.log;
      if (null != arg0) {
        let _HermesInternal = HermesInternal;
        str3 = "\n\n=== " + arg0 + " ===";
      }
      const _HermesInternal2 = HermesInternal;
      log2("" + str3 + "\n" + joined + "\n");
      const _HermesInternal3 = HermesInternal;
      logger.log("Total Time: " + closure_2 + "ms");
    }
    return items;
  }
  getLastActionMetrics(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 20;
    }
    let closure_0;
    let closure_1;
    const obj = {};
    const logs = this.logs;
    for (const item10009 of logs) {
      let traces = item10009.traces;
      for (const item10016 of traces) {
        let items = [item10016.name, tmp.name, item10016.time];
        obj[item10016.name] = items;
        continue;
      }
      continue;
    }
    const values = Object.values(obj);
    const sorted = values.sort((arg0, arg1) => arg1[2] - arg0[2]);
    if (values.length > num) {
      values.length = num;
    }
    closure_0 = 0;
    closure_1 = 0;
    const mapped = values.map((item) => {
      let arr;
      let tmp;
      [arr, , tmp] = item;
      closure_0 = Math.max(arr.length, closure_0);
      const items = [arr, tmp];
      return items;
    });
    const mapped1 = mapped.map((item) => {
      let obj;
      let tmp;
      [obj, tmp] = item;
      closure_1 = closure_1 + tmp;
      return "" + obj.padEnd(closure_0 + 1, " ") + " - " + tmp + "ms";
    });
    let tmp7 = 0 === values.length;
    const joined = mapped1.join("\n");
    if (!tmp7) {
      tmp7 = closure_1 < 8;
    }
    if (!tmp7) {
      let _HermesInternal1;
      const log = logger.log;
      if (global != null) {
        _HermesInternal1 = global.HermesInternal;
      }
      const _HermesInternal = HermesInternal;
      const _HermesInternal2 = HermesInternal;
      const combined = "\nUsing Hermes: " + undefined !== _HermesInternal1;
      const _HermesInternal3 = HermesInternal;
      const combined1 = "\n\n=== " + arg0 + " ===\n" + joined;
      log(combined, combined1, "\nTotal Time: " + closure_1 + "ms\n\n");
    }
    return values;
  }
}
const prototype = ActionLogger.prototype;
let closure_4 = 0;
class ActionLog {
  constructor(action) {
    const merged = Object.assign({ startTime: 0, totalTime: 0, traces: null });
    merged[2] = [];
    closure_4 = tmp2 + 1;
    merged.id = +closure_4;
    merged.action = action;
    merged.createdAt = new Date();
    new Date();
    return merged;
  }
  toJSON() {
    const self = this;
    if (null == this.createdAt) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
      throw error;
    } else {
      const obj = { actionType: self.action.type, created_at: null, totalTime: null, traces: null };
      ({ createdAt: obj.created_at, totalTime: obj.totalTime, traces: obj.traces } = self);
      return obj;
    }
  }
}
Object.defineProperty(ActionLog.prototype, "name", {
  get: function name() {
    return this.action.type;
  },
  set: undefined
});
const result = size.fileFinishedImporting("../discord_common/js/packages/flux/LoggingUtils.tsx");

export { ActionLogger };
export { ActionLog };