// === Module 15492: useStateFromStoresPerformanceDebugging ===

// Module 15492 (useStateFromStoresPerformanceDebugging)
import logger_Logger from "logger/Logger" /* 4 */;
import Storage2 from "Storage" /* 510 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function hasExceededThreshold(name) {
  let tmp = "anonymous" !== name.name;
  if (tmp) {
    let tmp3 = "" === c7 || name.name === c7;
    if (tmp3) {
      tmp3 = name.execCount > c6 || name.execTime > c5;
      const tmp6 = name.execCount > c6 || name.execTime > c5;
    }
    tmp = tmp3;
  }
  return tmp;
}
function flushViolators() {
  let tmp13;
  function hasViolator() {
    const obj = map[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      let first = tmp4[0];
      if (hasExceededThreshold(tmp4[1])) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
  function printViolators() {
    let obj;
    let tmp14;
    const num = 34;
    const num2 = 20;
    const num3 = 20;
    {
      const sum = num + num2 + num3 + 6;
    }
    logger.log(`${"|".padEnd(tmp, "-")}|`);
    logger.log(`${"| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(tmp, " ")}|`);
    logger.log(`${"|".padEnd(tmp, "-")}|`);
    const log = logger.log;
    const padEndResult = "Function/Component Name".padEnd(num, " ");
    const padEndResult1 = "Total Exec Time".padEnd(num2, " ");
    log("| " + padEndResult + "| " + padEndResult1 + "| " + "Total Exec Count".padEnd(num3, " ") + "|");
    logger.log(`${"|".padEnd(tmp, "-")}|`);
    const tmp10 = map[Symbol.iterator]();
    while (tmp10 !== undefined) {
      let tmp13 = _slicedToArray(tmp11, 2);
      [obj, tmp14] = tmp13;
      let tmp16 = "" !== closure_1_7 && obj === tmp15 || hasExceededThreshold(tmp14);
      if (tmp16) {
        let log2 = logger.log;
        let padEndResult2 = obj.padEnd(num, " ");
        let execTime = tmp14.execTime;
        let text = `${execTime.toFixed(2)}ms`;
        let str = tmp14.execCount;
        let padEndResult3 = `${execTime.toFixed(2)}ms`.padEnd(num2, " ");
        let str1 = str.toString();
        let _HermesInternal = HermesInternal;
        let str2 = "| ";
        let str3 = "| ";
        let str4 = "| ";
        let str5 = "|";
        let log2Result = log2("| " + padEndResult2 + "| " + padEndResult3 + "| " + str1.padEnd(num3, " ") + "|");
      }
      continue;
    }
    logger.log(`${"|".padEnd(tmp, "-")}|`);
  }
  if (!hasViolator()) {
    let str = "";
    if ("" === c7) {
      let str2 = "No violators found";
      logger.log("No violators found");
    }
    let tmp7 = map[Symbol.iterator]();
    let num = 2;
    let flag = false;
    let tmp10 = tmp7;
    while (tmp7 !== undefined) {
      let tmp12 = _slicedToArray(tmp9, 2);
      [r10022, tmp13] = tmp12;
      tmp13.warned = false;
      tmp13.execTime = 0;
      tmp13.execCount = 0;
      continue;
    }
  }
  let tmp4 = printViolators();
}
const logger = new logger_Logger.Logger("useStateFromStores");
let c4 = 60000;
let c5 = 10;
let c6 = 1000;
let c7 = "";
let c8 = false;
let c9;
const map = new Map();
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx");

export function getUseStateFromStoresExecutionWindowThresholdMs() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 60000;
  }
  return num;
}
export const setUseStateFromStoresExecutionWindowThresholdMs = function setUseStateFromStoresExecutionWindowThresholdMs(arg0) {
  let interval;
  c4 = arg0;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresExecutionWindowThresholdMs", arg0);
  clearInterval(interval);
  if (c8) {
    const _setInterval = setInterval;
    interval = setInterval(flushViolators, c4);
  }
};
export function getUseStateFromStoresExecutionTimeWarningThresholdMs() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 10;
  }
  return num;
}
export const setUseStateFromStoresExecutionTimeWarningThresholdMs = function setUseStateFromStoresExecutionTimeWarningThresholdMs(arg0) {
  c5 = arg0;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresExecutionTimeWarningThresholdMs", arg0);
};
export function getUseStateFromStoresExecutionCountWarningThreshold() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 1000;
  }
  return num;
}
export const setUseStateFromStoresExecutionCountWarningThreshold = function setUseStateFromStoresExecutionCountWarningThreshold(arg0) {
  c6 = arg0;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresExecutionCountWarningThreshold", arg0);
};
export const setUseStateFromStoresSpecificHookFilter = function setUseStateFromStoresSpecificHookFilter(first1) {
  c7 = first1;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresSpecificHookFilter", first1);
};
export function getUseStateFromStoresSpecificHookFilter() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "";
  }
  return str;
}
export function getUseStateFromStoresDebuggingEnabled() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  return flag;
}
export const setUseStateFromStoresDebuggingEnabled = function setUseStateFromStoresDebuggingEnabled(first1) {
  let interval;
  c8 = first1;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresDebuggingEnabled", first1);
  if (c8) {
    const _setInterval = setInterval;
    interval = setInterval(flushViolators, c4);
  } else {
    const _clearInterval = clearInterval;
    clearInterval(interval);
    interval = undefined;
  }
};
export const getUseStateFromStoresHookInfo = function getUseStateFromStoresHookInfo() {
  if (c8) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error();
    let parts;
    if (error.stack != null) {
      parts = str.split("\n");
    }
    if (null == parts) {
      parts = [];
    }
    let num = 3;
    let str8 = "unknown";
    if (3 < parts.length) {
      while (true) {
        let str9 = parts[num];
        let str10 = str9.trim();
        let tmp6 = str10.split(" ")[1];
        if ("useStateFromStores" !== tmp6) {
          if ("useStateFromStoresArray" !== tmp6) {
            str8 = tmp6;
            if ("useStateFromStoresObject" !== tmp6) {
              break;
            }
          }
          break;
        }
        let sum = num + 1;
        num = sum;
        str8 = "unknown";
        if (sum >= parts.length) {
          break;
        }
      }
    }
    let value = map.get(str8);
    if (value == null) {
      value = { name: str8, execCount: 0, execTime: 0, warned: false };
      const obj2 = { name: str8, execCount: 0, execTime: 0, warned: false };
    }
    const result = map.set(str8, value);
    return value;
  }
};
export const trackGetStateFromStoresPerformance = function trackGetStateFromStoresPerformance(execTime, fn) {
  if (c8) {
    if (null != execTime) {
      const _performance = performance;
      const _performance2 = performance;
      const nowResult = performance.now();
      const tmp15 = fn();
      execTime.execTime = execTime.execTime + (performance.now() - nowResult);
      execTime.execCount = execTime.execCount + 1;
      if (false === execTime.warned) {
        let tmp10 = "anonymous" !== execTime.name;
        if (tmp10) {
          let tmp5 = "" === c7 || execTime.name === c7;
          if (tmp5) {
            tmp5 = execTime.execCount > c6 || execTime.execTime > c5;
            const tmp8 = execTime.execCount > c6 || execTime.execTime > c5;
          }
          tmp10 = tmp5;
        }
        if (tmp10) {
          execTime.warned = true;
          const _HermesInternal = HermesInternal;
          logger.log("" + execTime.name + " cumulatively used " + execTime.execTime + "ms of execution time and ran " + execTime.execCount + " times.");
        }
      }
      return tmp15;
    }
  }
  return fn();
};