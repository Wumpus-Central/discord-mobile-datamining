// discord_common/js/packages/flux/LoggingUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import log from "../logger/Logger.tsx";
import EventEmitter2 from "../../../../_runtime/00652_EventEmitter.js";

const logger = new log.Logger("Flux");
const EventEmitter = EventEmitter2.EventEmitter;
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
    // ThrowIfThisInitialized (0x7c)
    tmp.logs = [];
    tmp.persist = flag;
    return tmp;
  }
}
const prototype = ActionLogger.prototype;
prototype["log"] = function log(action) {
  let self = this;
  self = this;
  const _require = action;
  const tmp6 = new ActionLog(action);
  closure_0 = tmp6;
  let _performance = _require(self[2]).performance;
  tmp6.startTime = _performance.now();
  try {
    arg1((name) => {
      const obj = { name, time: -1 };
      const _performance = action(self[2]).performance;
      try {
        const _performance2 = action(self[2]).performance;
        obj.time = _performance2.now() - tmp9;
        if (self.persist) {
          const traces = closure_0.traces;
          traces.push(obj);
        }
        self.emit("trace", action.type, name, obj.time);
        return arg1();
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
    let _performance2 = _require(self[2]).performance;
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
  const _global = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 20;
  }
  c1 = undefined;
  c2 = undefined;
  let items = [];
  const iter = this.logs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null == arg0) {
      let tmp4 = nextResult;
      let traces = tmp2.traces;
      let tmp5 = traces;
      let tmp6 = traces;
      for (const item10021 of traces) {
        let items1 = [item10021.name, , ];
        let tmp7 = nextResult;
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
  c1 = 0;
  c2 = 0;
  const mapped = items.map((arg0) => {
    [tmp, tmp2, tmp3] = arg0;
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
  const mapped1 = mapped.map((arg0) => {
    [obj, tmp] = arg0;
    closure_2 = closure_2 + tmp;
    return "" + obj.padEnd(c1 + 1, " ") + " - " + tmp + "ms";
  });
  const joined = mapped1.join("\n");
  let tmp11 = 0 === items.length;
  if (!tmp11) {
    tmp11 = items[0][2] < 10;
  }
  if (!tmp11) {
    tmp11 = c2 < 20;
  }
  if (!tmp11) {
    let _HermesInternal;
    if (_global != null) {
      _HermesInternal = _global.HermesInternal;
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
    logger.log("Total Time: " + c2 + "ms");
  }
  return items;
};
prototype["getLastActionMetrics"] = function getLastActionMetrics(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 20;
  }
  let _global;
  c1 = undefined;
  const obj = {};
  for (const item10009 of tmp) {
    let traces = item10009.traces;
    let tmp3 = traces;
    let tmp4 = traces;
    for (const item10016 of traces) {
      let items = [item10016.name, , ];
      let tmp5 = item10009;
      items[1] = tmp2.name;
      items[2] = item10016.time;
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
  _global = 0;
  c1 = 0;
  const mapped = values.map((arg0) => {
    [arr, , tmp] = arg0;
    closure_0 = Math.max(arr.length, closure_0);
    const items = [arr, tmp];
    return items;
  });
  const mapped1 = mapped.map((arg0) => {
    [obj, tmp] = arg0;
    closure_1 = closure_1 + tmp;
    return "" + obj.padEnd(c0 + 1, " ") + " - " + tmp + "ms";
  });
  let tmp8 = 0 === values.length;
  const joined = mapped1.join("\n");
  if (!tmp8) {
    tmp8 = c1 < 8;
  }
  if (!tmp8) {
    let _HermesInternal;
    if (_global != null) {
      _HermesInternal = _global.HermesInternal;
    }
    _HermesInternal = HermesInternal;
    const _HermesInternal2 = HermesInternal;
    const combined = "\nUsing Hermes: " + undefined !== _HermesInternal;
    const _HermesInternal3 = HermesInternal;
    const combined1 = "\n\n=== " + arg0 + " ===\n" + joined;
    logger.log(combined, combined1, "\nTotal Time: " + c1 + "ms\n\n");
  }
  return values;
};
let c4 = 0;
class ActionLog {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[2] = [];
    tmp2 = +closure_4;
    closure_4 = tmp2 + 1;
    obj.id = tmp2;
    obj.action = global;
    date = new Date();
    obj.createdAt = date;
    return obj;
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
    error = new Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
    throw error;
  } else {
    const obj = { actionType: null, created_at: null, totalTime: null, traces: null };
    obj[0] = self.action.type;
    ({ createdAt: obj[1], totalTime: obj[2], traces: obj[3] } = self);
    return obj;
  }
};
const result = set.fileFinishedImporting("../discord_common/js/packages/flux/LoggingUtils.tsx");

export { ActionLogger };
export { ActionLog };