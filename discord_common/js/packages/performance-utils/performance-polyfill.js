// discord_common/js/packages/performance-utils/performance-polyfill.js
import size from "../../../../_runtime/metro/00002__.js";

let _Date = Date;
if (Date.now) {
  let nowResult = _Date.now();
} else {
  _Date = new _Date();
  nowResult = +_Date;
}
let tmp6 = global.performance || {};
let closure_1 = tmp6;
let closure_2 = [];
const dependencyMap = {};
function u(arg0, arg1) {}
function f(arg0, arg1) {}
if (!tmp6.now) {
  tmp6.now =
    tmp6.webkitNow ||
    tmp6.mozNow ||
    tmp6.msNow ||
    (() => {
      let _Date = Date;
      if (Date.now) {
        nowResult = _Date.now();
      } else {
        _Date = new _Date();
        nowResult = +_Date;
      }
      return nowResult - nowResult;
    });
}
if (!tmp6.mark) {
  tmp6.mark =
    tmp6.webkitMark ||
    ((name) => {
      const obj = { name, entryType: "mark", startTime: closure_1.now(), duration: 0 };
      closure_2.push(obj);
      closure_3[name] = obj;
    });
}
if (!tmp6.measure) {
  tmp6.measure =
    tmp6.webkitMeasure ||
    ((name, arg1, arg2) => {
      if (undefined !== arg2) {
        if (undefined === dependencyMap[arg2]) {
          const _SyntaxError2 = SyntaxError;
          const syntaxError = new SyntaxError(
            "Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.",
          );
          throw syntaxError;
        }
      }
      if (undefined !== arg1) {
        if (undefined === dependencyMap[arg1]) {
          const _SyntaxError = SyntaxError;
          const syntaxError1 = new SyntaxError(
            "Failed to execute 'measure' on 'Performance': The mark '" + arg1 + "' does not exist.",
          );
          throw syntaxError1;
        }
      }
      let num = 0;
      if (dependencyMap[arg1]) {
        num = tmp3[arg1].startTime;
      }
      if (dependencyMap[arg2]) {
        let startTime = tmp3[arg2].startTime;
      } else {
        startTime = closure_1.now();
      }
      closure_2.push({ name, entryType: "measure", startTime: num, duration: startTime - num });
    });
}
if (!tmp6.getEntriesByType) {
  tmp6.getEntriesByType =
    tmp6.webkitGetEntriesByType ||
    ((arg0) => {
      if (typeof u === "function") {
        const items = [];
        let num = 0;
        if (0 < closure_2.length) {
          do {
            if (closure_2[num].entryType == arg0) {
              let arr = items.push(tmp2[num]);
            }
            num = num + 1;
          } while (num < length);
        }
        return items;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
}
if (!tmp6.getEntriesByName) {
  tmp6.getEntriesByName =
    tmp6.webkitGetEntriesByName ||
    ((arg0) => {
      if (typeof u === "function") {
        const items = [];
        let num = 0;
        if (0 < closure_2.length) {
          do {
            if (closure_2[num].name == arg0) {
              let arr = items.push(tmp2[num]);
            }
            num = num + 1;
          } while (num < length);
        }
        return items;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
}
if (!tmp6.clearMarks) {
  tmp6.clearMarks =
    tmp6.webkitClearMarks ||
    ((arg0) => {
      let tmp10;
      if (typeof f === "function") {
        let diff = tmp2 - 1;
        if (+closure_2.length) {
          do {
            let arr = closure_2;
            let tmp5 = closure_2[diff];
            let tmp6 = tmp5.entryType != "mark";
            if (!tmp6) {
              let tmp8 = tmp4;
              if (tmp4) {
                tmp8 = tmp5.name != arg0;
              }
              tmp6 = tmp8;
            }
            if (!tmp6) {
              let spliceResult = arr.splice(diff, 1);
            }
            tmp10 = +diff;
            diff = tmp10 - 1;
          } while (tmp10);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
}
if (!tmp6.clearMeasures) {
  tmp6.clearMeasures =
    tmp6.webkitClearMeasures ||
    ((arg0) => {
      let tmp10;
      if (typeof f === "function") {
        let diff = tmp2 - 1;
        if (+closure_2.length) {
          do {
            let arr = closure_2;
            let tmp5 = closure_2[diff];
            let tmp6 = tmp5.entryType != "measure";
            if (!tmp6) {
              let tmp8 = tmp4;
              if (tmp4) {
                tmp8 = tmp5.name != arg0;
              }
              tmp6 = tmp8;
            }
            if (!tmp6) {
              let spliceResult = arr.splice(diff, 1);
            }
            tmp10 = +diff;
            diff = tmp10 - 1;
          } while (tmp10);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
}
global.performance = tmp6;
let tmp7 = typeof globalThis.define === "function";
if (typeof globalThis.define === "function") {
  let ajs = globalThis.define.amd;
  if (!ajs) {
    ajs = globalThis.define.ajs;
  }
  tmp7 = ajs;
}
if (tmp7) {
  globalThis.define("performance", [], () => closure_1);
}
const result = size.fileFinishedImporting("../discord_common/js/packages/performance-utils/performance-polyfill.js");
