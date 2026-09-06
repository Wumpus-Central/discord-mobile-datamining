// discord_common/js/packages/time-utils/TimeUtils.tsx
import u from "../performance-utils/index.js";
import findLastIndexDefault from "../../../../_runtime/04591_findLastIndex.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function sleep(asMilliseconds) {
  let asMillisecondsResult = asMilliseconds;
  if (typeof asMilliseconds !== "number") {
    asMillisecondsResult = asMilliseconds.asMilliseconds();
  }
  require = asMillisecondsResult;
  return new Promise((arg0) => {
    closure_0 = arg0;
    const timerId = setTimeout(() => closure_0(), asMillisecondsResult);
  });
}
const tryCatch = fn(4590);
let c4 = 3600000;
function now() {
  const _performance = u.performance;
  return Math.floor(u.timeOrigin + _performance.now());
}
fn = () => Object.create(new.target.prototype);
fn.prototype["now"] = function now() {
  if (typeof now === "function") {
    const _Math = Math;
    const _performance = u.performance;
    return Math.floor(u.timeOrigin + _performance.now());
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let obj = Object.create(fn.prototype);
let TimeSpan;
class TimeSpan {
  constructor(arg0, arg1, arg2, arg3) {
    num = importAll;
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.milliseconds = 0;
    obj.asMilliseconds = function asMilliseconds() {
      return obj.milliseconds;
    };
    obj.asSeconds = function asSeconds() {
      return obj.milliseconds / 1000;
    };
    obj.asMinutes = function asMinutes() {
      return obj.milliseconds / 1000 / 60;
    };
    obj.asHours = function asHours() {
      return obj.milliseconds / 1000 / 60 / 60;
    };
    obj.add = function add(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
    };
    obj.subtract = function subtract(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
    };
    obj.subtractOrZero = function subtractOrZero(milliseconds) {
      return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
    };
    if (!importAll) {
      num = 0;
    }
    num2 = importDefault;
    obj.milliseconds = obj.milliseconds + num;
    if (!importDefault) {
      num2 = 0;
    }
    num3 = fn;
    obj.milliseconds = obj.milliseconds + 1000 * num2;
    if (!fn) {
      num3 = 0;
    }
    num4 = global;
    obj.milliseconds = obj.milliseconds + 60000 * num3;
    if (!global) {
      num4 = 0;
    }
    obj.milliseconds = obj.milliseconds + num4 * c4;
    return obj;
  }
}
const prototype = TimeSpan.prototype;
prototype["isGreaterThan"] = function isGreaterThan(milliseconds) {
  return this.milliseconds > milliseconds.milliseconds;
};
prototype["isGreaterOrEqualTo"] = function isGreaterOrEqualTo(timeout) {
  return this.milliseconds >= timeout.milliseconds;
};
TimeSpan.fromMilliseconds = function fromMilliseconds(timePassed) {
  if (typeof TimeSpan === "function") {
    let num = timePassed;
    obj = Object.create(tmp.prototype);
    obj.milliseconds = 0;
    obj.asMilliseconds = function asMilliseconds() {
      return obj.milliseconds;
    };
    obj.asSeconds = function asSeconds() {
      return obj.milliseconds / 1000;
    };
    obj.asMinutes = function asMinutes() {
      return obj.milliseconds / 1000 / 60;
    };
    obj.asHours = function asHours() {
      return obj.milliseconds / 1000 / 60 / 60;
    };
    obj.add = function add(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
    };
    obj.subtract = function subtract(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
    };
    obj.subtractOrZero = function subtractOrZero(milliseconds) {
      return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
    };
    if (!timePassed) {
      num = 0;
    }
    obj.milliseconds = obj.milliseconds + num;
    ({ milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds } = obj);
    obj.milliseconds = obj.milliseconds;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
TimeSpan.fromSeconds = function fromSeconds(arg0) {
  if (typeof TimeSpan === "function") {
    let num = arg0;
    obj = Object.create(tmp.prototype);
    obj.milliseconds = 0;
    obj.asMilliseconds = function asMilliseconds() {
      return obj.milliseconds;
    };
    obj.asSeconds = function asSeconds() {
      return obj.milliseconds / 1000;
    };
    obj.asMinutes = function asMinutes() {
      return obj.milliseconds / 1000 / 60;
    };
    obj.asHours = function asHours() {
      return obj.milliseconds / 1000 / 60 / 60;
    };
    obj.add = function add(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
    };
    obj.subtract = function subtract(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
    };
    obj.subtractOrZero = function subtractOrZero(milliseconds) {
      return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
    };
    ({ milliseconds: tmp2.milliseconds, milliseconds } = obj);
    if (!arg0) {
      num = 0;
    }
    obj.milliseconds = milliseconds + 1000 * num;
    obj.milliseconds = obj.milliseconds;
    obj.milliseconds = obj.milliseconds;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
TimeSpan.fromMinutes = function fromMinutes(arg0) {
  if (typeof TimeSpan === "function") {
    let num = arg0;
    obj = Object.create(tmp.prototype);
    obj.milliseconds = 0;
    obj.asMilliseconds = function asMilliseconds() {
      return obj.milliseconds;
    };
    obj.asSeconds = function asSeconds() {
      return obj.milliseconds / 1000;
    };
    obj.asMinutes = function asMinutes() {
      return obj.milliseconds / 1000 / 60;
    };
    obj.asHours = function asHours() {
      return obj.milliseconds / 1000 / 60 / 60;
    };
    obj.add = function add(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
    };
    obj.subtract = function subtract(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
    };
    obj.subtractOrZero = function subtractOrZero(milliseconds) {
      return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
    };
    ({ milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds, milliseconds } = obj);
    if (!arg0) {
      num = 0;
    }
    obj.milliseconds = milliseconds + 60000 * num;
    obj.milliseconds = obj.milliseconds;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
TimeSpan.fromHours = function fromHours(arg0) {
  if (typeof TimeSpan === "function") {
    let num = arg0;
    obj = Object.create(tmp.prototype);
    obj.milliseconds = 0;
    obj.asMilliseconds = function asMilliseconds() {
      return obj.milliseconds;
    };
    obj.asSeconds = function asSeconds() {
      return obj.milliseconds / 1000;
    };
    obj.asMinutes = function asMinutes() {
      return obj.milliseconds / 1000 / 60;
    };
    obj.asHours = function asHours() {
      return obj.milliseconds / 1000 / 60 / 60;
    };
    obj.add = function add(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
    };
    obj.subtract = function subtract(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
    };
    obj.subtractOrZero = function subtractOrZero(milliseconds) {
      return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
    };
    ({
      milliseconds: tmp2.milliseconds,
      milliseconds: tmp2.milliseconds,
      milliseconds: tmp2.milliseconds,
      milliseconds,
    } = obj);
    if (!arg0) {
      num = 0;
    }
    obj.milliseconds = milliseconds + num * c4;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let StopWatch;
class StopWatch {
  constructor() {
    tmp = global;
    if (global === undefined) {
      tmp = closure_6;
    }
    merged = Object.assign({ startTime: "ip", timePassed: false });
    merged.timestampProducer = tmp;
    return merged;
  }
}
const prototype2 = StopWatch.prototype;
Object.defineProperty(prototype2, "lastElapsed", {
  get: function lastElapsed() {
    return this.timePassed;
  },
  set: undefined,
});
Object.defineProperty(prototype2, "lastStartTime", {
  get: function lastStartTime() {
    return this.startTime;
  },
  set: undefined,
});
prototype2["start"] = function start() {
  const self = this;
  if (null == this.startTime) {
    timestampProducer = self.timestampProducer;
    self.startTime = timestampProducer.now();
  }
};
prototype2["restart"] = function restart() {
  timestampProducer = this.timestampProducer;
  this.startTime = timestampProducer.now();
};
prototype2["reset"] = function reset() {
  this.startTime = undefined;
  this.timePassed = 0;
};
prototype2["stop"] = function stop() {
  const self = this;
  if (null != this.startTime) {
    ({ timestampProducer, timePassed } = self);
    self.timePassed = timePassed + (timestampProducer.now() - self.startTime);
    self.startTime = undefined;
  }
};
prototype2["toggle"] = function toggle(arg0) {
  const self = this;
  if (arg0 !== this.isRunning()) {
    if (arg0) {
      self.start();
    } else {
      self.stop();
    }
  }
};
prototype2["elapsed"] = function elapsed() {
  const self = this;
  if (null == this.startTime) {
    return TimeSpan.fromMilliseconds(self.timePassed);
  } else {
    timestampProducer = self.timestampProducer;
    return TimeSpan.fromMilliseconds(self.timePassed + (timestampProducer.now() - self.startTime));
  }
};
prototype2["isRunning"] = function isRunning() {
  return null != this.startTime;
};
StopWatch["startNew"] = function startNew() {
  if (typeof StopWatch === "function") {
    const merged = Object.assign({ startTime: "ip", timePassed: false });
    merged.timestampProducer = obj;
    merged.start();
    return merged;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let TimeOut;
class TimeOut {
  constructor(arg0) {
    if (typeof StopWatch === "function") {
      tmp3 = global;
      merged = Object.assign({ watch: null });
      tmp5 = closure_6;
      merged1 = Object.assign({ startTime: "ip", timePassed: false });
      merged1.timestampProducer = closure_6;
      merged[0] = merged1;
      merged.timeout = global;
      return merged;
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype3 = TimeOut.prototype;
prototype3["hasTimedOut"] = function hasTimedOut() {
  const self = this;
  const watch = this.watch;
  if (watch.isRunning()) {
    const watch2 = self.watch;
    return watch2.elapsed().isGreaterOrEqualTo(self.timeout);
  } else {
    const _Error = Error;
    const error = new Error("`start` must be called before `hasTimedOut`");
    throw error;
  }
};
prototype3["start"] = function start() {
  const watch = this.watch;
  watch.start();
};
TimeOut["startNew"] = function startNew(timeout) {
  if (typeof TimeOut === "function") {
    if (typeof StopWatch === "function") {
      const merged = Object.assign({ watch: null });
      const merged1 = Object.assign({ startTime: "ip", timePassed: false });
      merged1.timestampProducer = obj;
      merged[0] = merged1;
      merged.timeout = timeout;
      merged.start();
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
TimeOut["waitFor"] = function waitFor(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            closure_0 = tmp5;
            sleep = undefined;
            closure_128_1 = undefined;
            sleep = TimeSpan.fromMilliseconds(100);
            let tmp13 = closure_0;
            if (!(closure_0 instanceof TimeSpan)) {
              const timeout = tmp23.timeout;
              tmp13 = timeout;
              if (null != tmp23.sleep) {
                sleep = tmp23.sleep;
                tmp13 = timeout;
              }
            }
            closure_128_1 = TimeOut.startNew(tmp13);
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else if (true === value) {
            c3 = 3;
            return { value: true, done: true };
          } else {
            c2 = 2;
            c3 = 1;
            const obj2 = { value: closure_1_9(sleep), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else if (closure_128_1.hasTimedOut()) {
          c3 = 3;
          return { value: false, done: true };
        }
        c2 = 1;
        c3 = 1;
        const obj3 = { value: closure_129_1(), done: false };
        return obj3;
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  })();
};
obj = {
  NONE: "NONE",
  SECONDS: "SECONDS",
  MINUTES: "MINUTES",
  HOURS: "HOURS",
  DAYS: "DAYS",
  WEEKS: "WEEKS",
  MONTHS: "MONTHS",
  YEARS: "YEARS",
};
obj = { unit: obj.NONE, max: 0 };
const items = [
  obj,
  { unit: obj.SECONDS, max: 1 },
  { unit: obj.MINUTES, max: 60 },
  { unit: obj.HOURS, max: 1440 },
  { unit: obj.DAYS, max: 44640 },
  { unit: obj.WEEKS, max: 40320 },
  { unit: obj.MONTHS, max: 525600 },
  { unit: obj.YEARS, max: Infinity },
];
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/time-utils/TimeUtils.tsx");
class ControllableTimeStampProducer {
  constructor() {
    return Object.assign({ time: 0 });
  }
}
const prototype4 = ControllableTimeStampProducer.prototype;
prototype4["now"] = function now() {
  return this.time;
};
prototype4["set"] = function set(time) {
  this.time = time;
};
prototype4["increase"] = function increase(arg0) {
  this.time = this.time + arg0;
};
prototype4["reset"] = function reset() {
  this.time = 0;
};
class DurationEnabled {
  constructor(arg0) {
    tmp = fn;
    if (fn === undefined) {
      tmp = closure_6;
    }
    if (typeof StopWatch === "function") {
      if (tmp === undefined) {
        tmp = closure_6;
      }
      tmp4 = global;
      obj = Object.create(tmp2);
      merged = Object.assign({ startTime: "ip", timePassed: false });
      merged.timestampProducer = tmp;
      obj.stopwatch = merged;
      obj.state = global;
      stopwatch = obj.stopwatch;
      toggleResult = stopwatch.toggle(global);
      return obj;
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype5 = DurationEnabled.prototype;
Object.defineProperty(prototype5, "value", {
  get: undefined,
  set: function value(state) {
    const stopwatch = this.stopwatch;
    stopwatch.toggle(state);
    this.state = state;
  },
});
Object.defineProperty(prototype5, "value", {
  get: function value() {
    return this.state;
  },
  set: undefined,
});
prototype5["reset"] = function reset() {
  const stopwatch = this.stopwatch;
  stopwatch.reset();
  const stopwatch2 = this.stopwatch;
  stopwatch2.toggle(this.state);
};
prototype5["totalDuration"] = function totalDuration() {
  const stopwatch = this.stopwatch;
  return stopwatch.elapsed().asMilliseconds();
};
prototype5["totalDurationSeconds"] = function totalDurationSeconds() {
  const stopwatch = this.stopwatch;
  return stopwatch.elapsed().asSeconds();
};

export const MS_PER_SECOND = 1000;
export const MS_PER_MINUTE = 60000;
export const MS_PER_HOUR = 3600000;
export const MS_PER_DAY = 86400000;
export const MS_PER_WEEK = 604800000;
export { now };
export { ControllableTimeStampProducer };
export const TimeStampProducer = obj;
export { TimeSpan };
export { StopWatch };
export { DurationEnabled };
export { TimeOut };
export { sleep };
export const TimeUnits = obj;
export const convertMinutesToGivenTimeUnit = function convertMinutesToGivenTimeUnit(arg0, unit) {
  if (obj.NONE === unit) {
    return 0;
  } else if (obj.SECONDS === unit) {
    return 60 * arg0;
  } else if (obj.MINUTES === unit) {
    return arg0;
  } else if (obj.HOURS === unit) {
    return arg0 / 60;
  } else if (obj.DAYS === unit) {
    return arg0 / 60 / 24;
  } else if (obj.WEEKS === unit) {
    return arg0 / 60 / 24 / 7;
  } else if (obj.MONTHS === unit) {
    return arg0 / 60 / 24 / 31;
  } else if (obj.YEARS === unit) {
    return arg0 / 60 / 24 / 365;
  }
};
export const TimeUnitMax = items;
export const getTimeUnit = function getTimeUnit(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  const tmp2 = findLastIndexDefault(
    items,
    (unit) => f78394(unit.unit),
    items.findIndex((max) => {
      max = max.max;
      let tmp = max.unit === obj.NONE;
      if (tmp) {
        tmp = closure_0 === max;
      }
      if (!tmp) {
        tmp = closure_0 < max;
      }
      return tmp;
    }),
  );
  if (null != tmp2) {
    return tmp2.unit;
  } else {
    const found = items.find((unit) => f78394(unit.unit));
    let unit = null;
    if (null != found) {
      unit = found.unit;
    }
    return unit;
  }
  const findIndexResult = items.findIndex((max) => {
    max = max.max;
    let tmp = max.unit === obj.NONE;
    if (tmp) {
      tmp = closure_0 === max;
    }
    if (!tmp) {
      tmp = closure_0 < max;
    }
    return tmp;
  });
};
export const getTimeAndUnit = function getTimeAndUnit(rounded, items) {
  closure_0 = items;
  if (null == rounded) {
    obj = { unit: null, time: 0 };
    obj.unit = obj.NONE;
    return obj;
  } else {
    closure_0 = rounded;
    const f78394 = (dependencyMap) => closure_0.includes(dependencyMap);
    const tmp12 = f78394(4591)(
      items,
      (unit) => f78394(unit.unit),
      items.findIndex((max) => {
        max = max.max;
        let tmp = max.unit === obj.NONE;
        if (tmp) {
          tmp = closure_0 === max;
        }
        if (!tmp) {
          tmp = closure_0 < max;
        }
        return tmp;
      }),
    );
    if (null != tmp12) {
      let unit = tmp12.unit;
    } else {
      const found = items.find((unit) => f78394(unit.unit));
      unit = null;
      if (null != found) {
        unit = found.unit;
      }
    }
    if (null == unit) {
      obj = { unit, time: null };
      rounded = null;
      if (null != null) {
        const _Math = Math;
        rounded = Math.floor(null);
      }
      obj.time = rounded;
      return obj;
    } else if (obj.NONE !== unit) {
      if (tmp4.SECONDS === unit) {
        let num = 60 * rounded;
      } else if (tmp4.MINUTES !== unit) {
        if (tmp4.HOURS === unit) {
          num = rounded / 60;
        } else if (tmp4.DAYS === unit) {
          num = rounded / 60 / 24;
        } else {
          if (tmp4.WEEKS === unit) {
            num = rounded / 60 / 24 / 7;
          } else if (tmp4.MONTHS !== unit) {
            if (tmp4.YEARS === unit) {
              num = rounded / 60 / 24 / 365;
            }
          }
          num = rounded / 60 / 24 / 31;
        }
      }
    }
    const findIndexResult = items.findIndex((max) => {
      max = max.max;
      let tmp = max.unit === obj.NONE;
      if (tmp) {
        tmp = closure_0 === max;
      }
      if (!tmp) {
        tmp = closure_0 < max;
      }
      return tmp;
    });
  }
};
