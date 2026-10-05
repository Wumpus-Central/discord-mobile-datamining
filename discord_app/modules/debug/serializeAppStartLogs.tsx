// === Module 12533: serializeAppStartLogs ===

// Module 12533 (serializeAppStartLogs)
import _modDef12 from "module_12" /* 12 */;
import ThreadUtils from "ThreadUtils" /* 7409 */;
import size from "module_2" /* 2 */;

let item, prefix, set;

function getDisplayName(tag) {
  let str3;
  if (null == tag.tag) {
    str3 = tag.label;
  } else {
    const _HermesInternal = HermesInternal;
    str3 = "" + tag.label + " " + tag.tag;
  }
  let str4 = str3;
  if (str3.includes("_START")) {
    str4 = `Start ${str3.replace("_START", "")}`;
  }
  let text = str4;
  if (str4.includes("_END")) {
    text = `Finish ${str4.replace("_END", "")}`;
  }
  return text;
}
let result = size.fileFinishedImporting("modules/debug/serializeAppStartLogs.tsx");

export default function serializeAppStartLogs(arg0) {
  let closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  const logGroups = flag(flag2[0]).logGroups;
  let mapped = logGroups.map((item) => {
    let index;
    let logs;
    let nativeLogs;
    let serverTrace;
    let timestamp;
    ({ index, timestamp, logs, nativeLogs, serverTrace } = item);
    let tmp = timestamp;
    if (0 === index) {
      let arr = _modDef12;
      const found = arr.find(logs, (log) => {
        log = log.log;
        return log.indexOf("Logger loaded") >= 0;
      });
      let tmp5 = null;
      let timestamp1;
      if (found != null) {
        timestamp1 = found.timestamp;
      }
      if (timestamp1 == null) {
        timestamp1 = closure_0;
      }
      tmp = timestamp1;
    }
    let closure_1 = flag;
    let closure_2 = flag2;
    const substr = logs.slice();
    set = new Set(nativeLogs.map(getDisplayName));
    let closure_4 = "";
    let closure_5 = [];
    item = nativeLogs.forEach((tag) => {
      let str3;
      let tmp13;
      if (null == tag.tag) {
        str3 = tag.label;
      } else {
        const _HermesInternal = HermesInternal;
        str3 = "" + tag.label + " " + tag.tag;
      }
      let str4 = str3;
      if (str3.includes("_START")) {
        str4 = `Start ${str3.replace("_START", "")}`;
      }
      let str7 = str4;
      if (str4.includes("_END")) {
        str7 = `Finish ${str4.replace("_END", "")}`;
      }
      let tmp5 = tmp2;
      let num = 0;
      const startsWithResult = str7.startsWith("Start ") && !str7.includes("RUN_JS_BUNDLE") && set.has(str7.replace("Start ", "Finish "));
      if (str7.startsWith("Finish ")) {
        tmp5 = tmp2;
        num = 0;
        if (!str7.includes("RUN_JS_BUNDLE")) {
          tmp5 = tmp2;
          num = 0;
          if (set.has(str7.replace("Finish ", "Start "))) {
            prefix = prefix.substring(2);
            const arr = closure_5.pop();
            tmp5 = tmp2;
            num = 0;
            if (null != arr) {
              const diff = tag.timestamp - arr.timestamp;
              let tmp11 = tmp2;
              if (!tmp11) {
                let tmp12 = diff > 5;
                if (tmp12) {
                  const items = ["GET_CONSTANTS", "CONVERT_CONSTANTS"];
                  tmp12 = !items.some((item) => str7.includes(item));
                }
                tmp11 = tmp12;
              }
              arr.shouldKeep = arr.shouldKeep || tmp11;
              tmp5 = tmp11;
              num = diff;
            }
          }
        }
      }
      const obj = { emoji: "\u2615", timestamp: tag.timestamp, delta: tmp13, prefix, log: str7, shouldKeep: tmp5 };
      tmp13 = undefined;
      if (num > 0) {
        tmp13 = num;
      }
      let num4 = 0;
      let num5 = 0;
      if (0 < substr.length) {
        while (true) {
          let timestamp = substr[num4].timestamp;
          if (null == timestamp) {
            num4 = num4 + 1;
            num5 = num4;
            if (num4 >= substr.length) {
              break;
            }
          } else {
            num5 = num4;
            if (timestamp > obj.timestamp) {
              break;
            }
          }
          break;
        }
      }
      substr.splice(num5, 0, obj);
      if (startsWithResult) {
        prefix = `${closure_4}| `;
        closure_5.push(obj);
      }
    });
    let closure_6 = false;
    const found1 = substr.filter((log) => {
      let tmp = !closure_6;
      if (closure_6) {
        log = log.log;
        tmp = !log.includes("\u21AA");
      }
      if (tmp) {
        closure_6 = tmp3;
        tmp = !tmp3;
      }
      return tmp;
    });
    timestamp1 = tmp;
    let num2;
    let num3;
    let items = [];
    let num = 0;
    if (0 < found1.length) {
      while (true) {
        let tmp9 = found1[num];
        let sum = num + 1;
        let tmp11 = found1[sum];
        let tmp12 = num;
        if (null != tmp11) {
          let str = tmp9.log;
          if (tmp11.log === str.replace("Start ", "Finish ")) {
            let str2 = tmp11.log;
            tmp11.log = str2.replace("Finish ", "");
            let arr2 = items.push(tmp11);
            tmp12 = sum;
            num = tmp12 + 1;
            if (num >= found1.length) {
              break;
            }
          }
        }
        let arr3 = items.push(tmp9);
      }
    }
    const mapped = items.map((timestamp) => {
      let str2;
      let str3;
      let str = "";
      if (null != timestamp.timestamp) {
        const result = (timestamp.timestamp - timestamp1) / 1000;
        str = result.toFixed(3);
      }
      const obj = { totalTime: str, deltaTime: str2, log: "" + str3 + timestamp.prefix + timestamp.log + "\n" };
      str2 = "";
      if (null != timestamp.delta) {
        const _String = String;
        const _Math = Math;
        str2 = String(Math.round(timestamp.delta));
      }
      str3 = "";
      if (timestamp.emoji.length > 0) {
        const _HermesInternal = HermesInternal;
        str3 = "" + timestamp.emoji + " ";
      }
      return obj;
    });
    let obj = _modDef12;
    num2 = obj.max(mapped.map((totalTime) => totalTime.totalTime.length));
    if (num2 == null) {
      num2 = 0;
    }
    let obj2 = _modDef12;
    num3 = obj2.max(mapped.map((deltaTime) => deltaTime.deltaTime.length));
    if (num3 == null) {
      num3 = 0;
    }
    const mapped1 = mapped.map((item) => {
      let deltaTime;
      let log;
      let totalTime;
      ({ totalTime, deltaTime, log } = item);
      const obj = flag(flag2[1]);
      const padStartResult = obj.padStart(totalTime, num2);
      const obj2 = flag(flag2[1]);
      return "" + padStartResult + " " + obj2.padStart(deltaTime, num3) + " " + log;
    });
    const sum1 = index + 1;
    const joined = mapped1.join("");
    const obj4 = ThreadUtils;
    const combined = "Trace #" + sum1 + " started " + obj4.getTimestampString(timestamp) + "\n" + joined;
    let sum2 = combined;
    if (null != serverTrace) {
      let _HermesInternal = HermesInternal;
      let str3 = "\n Server trace for trace #";
      sum2 = combined + "\n Server trace for trace #" + index + 1 + serverTrace;
    }
    return sum2;
  });
  return mapped.join("\n\n");
};