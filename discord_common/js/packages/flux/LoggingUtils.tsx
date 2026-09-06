// === Module 567: LoggingUtils ===

// Module 567 (LoggingUtils)
import logger_Logger from "logger/Logger" /* 4 */;
import _mod568 from "module_568" /* 568 */;
import u from "u" /* 569 */;
import size from "module_2" /* 2 */;

const logger = new logger_Logger.Logger("Flux");
const EventEmitter = _mod568.EventEmitter;
class ActionLogger extends EventEmitter {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    flag = obj.persist;
    if (flag === undefined) {
      flag = false;
    }
    tmp = new ActionLogger(new.target, new.target, flag);
    tmp.logs = [];
    tmp.persist = flag;
    return tmp;
  }
}
const prototype = ActionLogger.prototype;
prototype["log"] = function log(action, fn) {
  const self = this;
  _require = action;
  const tmp6 = new ActionLog(action);
  closure_0 = tmp6;
  let _performance = require("u").performance;
  tmp6.startTime = _performance.now();
  try {
    fn((name, fn) => {
      const obj = { name, time: -1 };
      const _performance = u.performance;
      try {
        const _performance2 = u.performance;
        obj.time = _performance2.now() - tmp9;
        if (self.persist) {
          const traces = closure_0.traces;
          traces.push(obj);
        }
        self.emit("trace", action.type, name, obj.time);
        return fn();
      } catch (tmp18) {
        const _performance3 = tmp4(tmp2[2]).performance;
        tmp.time = _performance3.now() - tmp3;
        if (self.persist) {
          const traces1 = closure_0.traces;
          traces1.push(tmp);
        }
        self.emit("trace", action.type, tmp5, tmp.time);
        throw tmp18;
      }
    });
    let _performance2 = require("u").performance;
    tmp6.totalTime = _performance2.now() - tmp6.startTime;
    let persist = self.persist;
    if (persist) {
      persist = tmp6.totalTime > 0;
    }
    if (persist) {
      const logs = self.logs;
      logs.push(tmp6);
    }
    if (self.logs.length > 1000) {
      const logs1 = self.logs;
      logs1.shift();
    }
    self.emit("log", action);
    return tmp6;
  } catch (tmp14) {
    let _performance3 = tmp2(tmp[2]).performance;
    tmp4.totalTime = _performance3.now() - tmp4.startTime;
    let persist2 = obj.persist;
    if (persist2) {
      persist2 = tmp4.totalTime > 0;
    }
    if (persist2) {
      const logs2 = obj.logs;
      logs2.push(tmp4);
    }
    if (obj.logs.length > 1000) {
      const logs3 = obj.logs;
      logs3.shift();
    }
    obj.emit("log", tmp3);
    throw tmp14;
  }
};
prototype["getSlowestActions"] = function getSlowestActions(arg0) {
  closure_0 = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 20;
  }
  closure_1 = undefined;
  closure_2 = undefined;
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
    [obj, tmp] = item;
    closure_2 = closure_2 + tmp;
    return "" + obj.padEnd(closure_1 + 1, " ") + " - " + tmp + "ms";
  });
  const joined = mapped1.join("\n");
  let tmp11 = 0 === items.length;
  if (!tmp11) {
    tmp11 = items[0][2] < 10;
  }
  if (!tmp11) {
    tmp11 = closure_2 < 20;
  }
  if (!tmp11) {
    let _HermesInternal;
    if (global != null) {
      _HermesInternal = global.HermesInternal;
    }
    logger.log("Using Hermes:", undefined !== _HermesInternal);
    let str3 = "";
    if (null != arg0) {
      _HermesInternal = HermesInternal;
      str3 = "\n\n=== " + arg0 + " ===";
    }
    const _HermesInternal2 = HermesInternal;
    logger.log("" + str3 + "\n" + joined + "\n");
    const _HermesInternal3 = HermesInternal;
    logger.log("Total Time: " + closure_2 + "ms");
  }
  return items;
};
prototype["getLastActionMetrics"] = function getLastActionMetrics(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 20;
  }
  closure_0 = undefined;
  closure_1 = undefined;
  const obj = {};
  for (const item10009 of tmp) {
    let traces = item10009.traces;
    for (const item10016 of traces) {
      let items = [item10016.name, tmp2.name, item10016.time];
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
    [arr, , tmp] = item;
    closure_0 = Math.max(arr.length, closure_0);
    const items = [arr, tmp];
    return items;
  });
  const mapped1 = mapped.map((item) => {
    [obj, tmp] = item;
    closure_1 = closure_1 + tmp;
    return "" + obj.padEnd(closure_0 + 1, " ") + " - " + tmp + "ms";
  });
  let tmp8 = 0 === values.length;
  const joined = mapped1.join("\n");
  if (!tmp8) {
    tmp8 = closure_1 < 8;
  }
  if (!tmp8) {
    let _HermesInternal;
    if (global != null) {
      _HermesInternal = global.HermesInternal;
    }
    _HermesInternal = HermesInternal;
    const _HermesInternal2 = HermesInternal;
    const combined = "\nUsing Hermes: " + undefined !== _HermesInternal;
    const _HermesInternal3 = HermesInternal;
    const combined1 = "\n\n=== " + arg0 + " ===\n" + joined;
    logger.log(combined, combined1, "\nTotal Time: " + closure_1 + "ms\n\n");
  }
  return values;
};
let closure_4 = 0;
class ActionLog {
  constructor(arg0) {
    merged = Object.assign({ startTime: 0, totalTime: 0, traces: null });
    merged[2] = [];
    tmp2 = +closure_4;
    closure_4 = tmp2 + 1;
    merged.id = tmp2;
    merged.action = global;
    date = new Date();
    merged.createdAt = date;
    return merged;
  }
}
const prototype2 = ActionLog.prototype;
Object.defineProperty(prototype2, "name", {
  get: function name() {
    return this.action.type;
  },
  set: undefined
});
prototype2["toJSON"] = function toJSON() {
  const self = this;
  if (null == this.createdAt) {
    const _Error = Error;
    const error = new Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
    throw error;
  } else {
    const obj = { actionType: self.action.type, created_at: null, totalTime: null, traces: null };
    ({ createdAt: obj.created_at, totalTime: obj.totalTime, traces: obj.traces } = self);
    return obj;
  }
};
const result = size.fileFinishedImporting("../discord_common/js/packages/flux/LoggingUtils.tsx");

export { ActionLogger };
export { ActionLog };