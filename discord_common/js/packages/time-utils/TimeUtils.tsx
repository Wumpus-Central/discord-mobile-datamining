// === Module 4553: sleep ===

// Module 4553 (sleep)
import u from "u" /* 653 */;
import findLastIndexDefault from "findLastIndex" /* 4555 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import tryCatch from "tryCatch" /* 4554 */;

require = arg1;
function sleep(num) {
  let asMillisecondsResult = num;
  if (typeof num !== "number") {
    asMillisecondsResult = num.asMilliseconds();
  }
  require = asMillisecondsResult;
  return new Promise((arg0) => {
    closure_0 = arg0;
    const timerId = setTimeout(() => callback(), closure_0);
  });
}
let c4 = 3600000;
function now() {
  const _performance = u.performance;
  return Math.floor(u.timeOrigin + _performance.now());
}
const fn = () => Object.create(new.target.prototype);
fn.prototype["now"] = function now() {
  if (typeof now !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const _performance = u.performance;
  return Math.floor(u.timeOrigin + _performance.now());
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
      return closure_1_12.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
    };
    obj.subtract = function subtract(milliseconds) {
      return closure_1_12.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
    };
    obj.subtractOrZero = function subtractOrZero(milliseconds) {
      return closure_1_12.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
    };
    if (!importAll) {
      num = 0;
    }
    num2 = importDefault;
    obj.milliseconds = obj.milliseconds + num;
    if (!importDefault) {
      num2 = 0;
    }
    num3 = arg1;
    obj.milliseconds = obj.milliseconds + 1000 * num2;
    if (!arg1) {
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
  if (typeof TimeSpan !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let num = timePassed;
  obj = Object.create(TimeSpan.prototype);
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
    return closure_1_12.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
  };
  obj.subtract = function subtract(milliseconds) {
    return closure_1_12.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
  };
  obj.subtractOrZero = function subtractOrZero(milliseconds) {
    return closure_1_12.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
  };
  if (!timePassed) {
    num = 0;
  }
  obj.milliseconds = obj.milliseconds + num;
  ({ milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds } = obj);
  obj.milliseconds = obj.milliseconds;
  return obj;
};
TimeSpan.fromSeconds = function fromSeconds(arg0) {
  if (typeof TimeSpan !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(TimeSpan.prototype);
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
    return closure_1_12.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
  };
  obj.subtract = function subtract(milliseconds) {
    return closure_1_12.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
  };
  obj.subtractOrZero = function subtractOrZero(milliseconds) {
    return closure_1_12.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
  };
  ({ milliseconds: tmp2.milliseconds, milliseconds } = obj);
  obj.milliseconds = obj.milliseconds;
  obj.milliseconds = obj.milliseconds;
  return obj;
};
TimeSpan.fromMinutes = function fromMinutes(arg0) {
  if (typeof TimeSpan !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let num = arg0;
  obj = Object.create(TimeSpan.prototype);
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
    return closure_1_12.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
  };
  obj.subtract = function subtract(milliseconds) {
    return closure_1_12.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
  };
  obj.subtractOrZero = function subtractOrZero(milliseconds) {
    return closure_1_12.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
  };
  ({ milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds, milliseconds } = obj);
  if (!arg0) {
    num = 0;
  }
  obj.milliseconds = milliseconds + 60000 * num;
  obj.milliseconds = obj.milliseconds;
  return obj;
};
TimeSpan.fromHours = function fromHours(arg0) {
  if (typeof TimeSpan !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let num = arg0;
  obj = Object.create(TimeSpan.prototype);
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
    return closure_1_12.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
  };
  obj.subtract = function subtract(milliseconds) {
    return closure_1_12.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
  };
  obj.subtractOrZero = function subtractOrZero(milliseconds) {
    return closure_1_12.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
  };
  ({ milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds, milliseconds } = obj);
  if (!arg0) {
    num = 0;
  }
  obj.milliseconds = milliseconds + num * c4;
  return obj;
};
let StopWatch;
class StopWatch {
  constructor() {
    tmp = global;
    if (global === undefined) {
      tmp = closure_6;
    }
    obj = Object.create(new.target.prototype);
    obj.timestampProducer = tmp;
    return obj;
  }
}
const prototype2 = StopWatch.prototype;
Object.defineProperty(prototype2, "lastElapsed", {
  get: function lastElapsed() {
    return this.timePassed;
  },
  set: undefined
});
Object.defineProperty(prototype2, "lastStartTime", {
  get: function lastStartTime() {
    return this.startTime;
  },
  set: undefined
});
prototype2["start"] = function start() {
  const self = this;
  if (null == this.startTime) {
    const timestampProducer = self.timestampProducer;
    self.startTime = timestampProducer.now();
  }
};
prototype2["restart"] = function restart() {
  const timestampProducer = this.timestampProducer;
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
    const timestampProducer = self.timestampProducer;
    return TimeSpan.fromMilliseconds(self.timePassed + (timestampProducer.now() - self.startTime));
  }
};
prototype2["isRunning"] = function isRunning() {
  return null != this.startTime;
};
StopWatch["startNew"] = function startNew() {
  if (typeof StopWatch !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(StopWatch.prototype);
  obj.timestampProducer = obj;
  obj.start();
  return obj;
};
let TimeOut;
class TimeOut {
  constructor(arg0) {
    tmp = StopWatch;
    if (typeof StopWatch !== "function") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj = Object.create(new.target.prototype);
    obj1 = Object.create(tmp.prototype);
    obj1.timestampProducer = closure_6;
    obj[0] = obj1;
    obj.timeout = global;
    return obj;
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
    error = new Error("`start` must be called before `hasTimedOut`");
    throw error;
  }
};
prototype3["start"] = function start() {
  const watch = this.watch;
  watch.start();
};
TimeOut["startNew"] = function startNew(timeout) {
  if (typeof TimeOut !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof StopWatch !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(TimeOut.prototype);
  obj = Object.create(StopWatch.prototype);
  obj.timestampProducer = obj;
  obj[0] = obj;
  obj.timeout = timeout;
  obj.start();
  return obj;
};
TimeOut["waitFor"] = function waitFor(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp2;
            sleep = tmp5;
            sleep = undefined;
            closure_1 = undefined;
            sleep = closure_1_7.fromMilliseconds(100);
            let tmp13 = closure_1_0;
            if (!(closure_1_0 instanceof closure_1_7)) {
              const timeout = tmp24.timeout;
              tmp13 = timeout;
              if (null != tmp24.sleep) {
                sleep = tmp24.sleep;
                tmp13 = timeout;
              }
            }
            closure_1 = closure_1_14.startNew(tmp13);
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else if (true === arg1) {
            c3 = 3;
            return { value: true, done: true };
          } else {
            c2 = 2;
            c3 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = closure_1_9(sleep);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else if (closure_1.hasTimedOut()) {
          c3 = 3;
          return { value: false, done: true };
        }
        c2 = 1;
        c3 = 1;
        const obj3 = { value: null, done: false };
        obj3[0] = closure_1_1();
        return obj3;
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  })();
};
obj = { NONE: "NONE", SECONDS: "SECONDS", MINUTES: "MINUTES", HOURS: "HOURS", DAYS: "DAYS", WEEKS: "WEEKS", MONTHS: "MONTHS", YEARS: "YEARS" };
obj = { unit: obj.NONE, max: 0 };
const items = [obj, { unit: obj.SECONDS, max: 1 }, { unit: obj.MINUTES, max: 60 }, { unit: obj.HOURS, max: 1440 }, { unit: obj.DAYS, max: 44640 }, { unit: obj.WEEKS, max: 40320 }, { unit: obj.MONTHS, max: 525600 }, { unit: obj.YEARS, max: Infinity }];
const result = require("set").fileFinishedImporting("../discord_common/js/packages/time-utils/TimeUtils.tsx");
class ControllableTimeStampProducer {
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
    tmp = arg1;
    if (arg1 === undefined) {
      tmp = closure_6;
    }
    tmp2 = StopWatch;
    if (typeof StopWatch !== "function") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    if (tmp === undefined) {
      tmp = closure_6;
    }
    obj = Object.create(new.target.prototype);
    obj1 = Object.create(tmp2.prototype);
    obj1.timestampProducer = tmp;
    obj.stopwatch = obj1;
    obj.state = global;
    stopwatch = obj.stopwatch;
    toggleResult = stopwatch.toggle(global);
    return obj;
  }
}
const prototype5 = DurationEnabled.prototype;
Object.defineProperty(prototype5, "value", {
  get: undefined,
  set: function value(state) {
    const stopwatch = this.stopwatch;
    stopwatch.toggle(state);
    this.state = state;
  }
});
Object.defineProperty(prototype5, "value", {
  get: function value() {
    return this.state;
  },
  set: undefined
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
  } else if (tmp.SECONDS === unit) {
    return 60 * arg0;
  } else if (tmp.MINUTES === unit) {
    return arg0;
  } else if (tmp.HOURS === unit) {
    return arg0 / 60;
  } else if (tmp.DAYS === unit) {
    return arg0 / 60 / 24;
  } else if (tmp.WEEKS === unit) {
    return arg0 / 60 / 24 / 7;
  } else if (tmp.MONTHS === unit) {
    return arg0 / 60 / 24 / 31;
  } else if (tmp.YEARS === unit) {
    return arg0 / 60 / 24 / 365;
  }
};
export const TimeUnitMax = items;
export const getTimeUnit = function getTimeUnit(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  const tmp2 = findLastIndexDefault(items, (unit) => f76149(unit.unit), items.findIndex((max) => {
    max = max.max;
    let tmp = max.unit === closure_1_10.NONE;
    if (tmp) {
      tmp = closure_0 === max;
    }
    if (!tmp) {
      tmp = closure_0 < max;
    }
    return tmp;
  }));
  if (null != tmp2) {
    return tmp2.unit;
  } else {
    const found = arr.find((unit) => f76149(unit.unit));
    let unit = null;
    if (null != found) {
      unit = found.unit;
    }
    return unit;
  }
  arr = items;
  const findIndexResult = items.findIndex((max) => {
    max = max.max;
    let tmp = max.unit === closure_1_10.NONE;
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
    obj[0] = obj.NONE;
    return obj;
  } else {
    closure_0 = rounded;
    const f76149 = (arg0) => closure_0.includes(arg0);
    const tmp12 = f76149(4555)(items, (unit) => f76149(unit.unit), items.findIndex((max) => {
      max = max.max;
      let tmp = max.unit === closure_1_10.NONE;
      if (tmp) {
        tmp = closure_0 === max;
      }
      if (!tmp) {
        tmp = closure_0 < max;
      }
      return tmp;
    }));
    if (null != tmp12) {
      let unit = tmp12.unit;
    } else {
      const found = arr.find((unit) => f76149(unit.unit));
      unit = null;
      if (null != found) {
        unit = found.unit;
      }
    }
    if (null == unit) {
      obj = { unit: null, time: null };
      obj[0] = unit;
      rounded = null;
      if (null != null) {
        const _Math = Math;
        rounded = Math.floor(null);
      }
      obj[1] = rounded;
      return obj;
    } else {
      let num = 0;
      if (obj.NONE !== unit) {
        if (tmp4.SECONDS === unit) {
          num = 60 * rounded;
        } else {
          num = rounded;
          if (tmp4.MINUTES !== unit) {
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
      }
    }
    arr = items;
    const findIndexResult = items.findIndex((max) => {
      max = max.max;
      let tmp = max.unit === closure_1_10.NONE;
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