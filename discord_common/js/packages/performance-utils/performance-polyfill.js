// discord_common/js/packages/performance-utils/performance-polyfill.js
import set from "../../../../_runtime/00002_set.js";

let _Date = Date;
if (Date.now) {
  let nowResult = _Date.now();
} else {
  _Date = new _Date();
  nowResult = +_Date;
}
let c0 = nowResult;
let tmp6 = global.performance || {};
let closure_1 = tmp6;
let closure_2 = [];
let closure_3 = {};
function u(arg0, arg1) {

}
function f(arg0, arg1) {

}
if (!tmp6.now) {
  tmp6.now = tmp6.webkitNow || tmp6.mozNow || tmp6.msNow || (() => {
    let _Date = Date;
    if (Date.now) {
      nowResult = _Date.now();
    } else {
      _Date = new _Date();
      nowResult = +_Date;
    }
    return nowResult - closure_0;
  });
}
if (!tmp6.mark) {
  tmp6.mark = tmp6.webkitMark || ((name) => {
    const obj = { name, entryType: "mark", startTime: closure_1.now(), duration: 0 };
    closure_3[name] = obj;
  });
}
if (!tmp6.measure) {
  tmp6.measure = tmp6.webkitMeasure || ((name) => {
    if (undefined !== arg2) {
      if (undefined === dependencyMap[arg2]) {
        const _SyntaxError2 = SyntaxError;
        const syntaxError = new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.");
        throw syntaxError;
      }
    }
    if (undefined !== arg1) {
      if (undefined === dependencyMap[arg1]) {
        const _SyntaxError = SyntaxError;
        const syntaxError1 = new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + arg1 + "' does not exist.");
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
  });
}
if (!tmp6.getEntriesByType) {
  tmp6.getEntriesByType = tmp6.webkitGetEntriesByType || ((arg0) => {
    if (typeof u !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const items = [];
    for (let num = 0; num < length; num = num + 1) {
      let tmp2 = num;
      if (arr[num].entryType == arg0) {
        arr = items.push(tmp[num]);
      }
    }
    return items;
  });
}
if (!tmp6.getEntriesByName) {
  tmp6.getEntriesByName = tmp6.webkitGetEntriesByName || ((arg0) => {
    if (typeof u !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const items = [];
    for (let num = 0; num < length; num = num + 1) {
      let tmp2 = num;
      if (arr[num].name == arg0) {
        arr = items.push(tmp[num]);
      }
    }
    return items;
  });
}
if (!tmp6.clearMarks) {
  tmp6.clearMarks = tmp6.webkitClearMarks || ((arg0) => {
    let tmp9;
    if (typeof f !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let diff = tmp - 1;
    if (+arr.length) {
      do {
        let tmp4 = arr[diff];
        let tmp5 = tmp4.entryType != "mark";
        let tmp6 = diff;
        if (!tmp5) {
          let tmp7 = tmp3;
          if (tmp3) {
            tmp7 = tmp4.name != arg0;
          }
          tmp5 = tmp7;
        }
        if (!tmp5) {
          let spliceResult = arr.splice(diff, 1);
        }
        tmp9 = +diff;
        diff = tmp9 - 1;
      } while (tmp9);
    }
  });
}
if (!tmp6.clearMeasures) {
  tmp6.clearMeasures = tmp6.webkitClearMeasures || ((arg0) => {
    let tmp9;
    if (typeof f !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let diff = tmp - 1;
    if (+arr.length) {
      do {
        let tmp4 = arr[diff];
        let tmp5 = tmp4.entryType != "measure";
        let tmp6 = diff;
        if (!tmp5) {
          let tmp7 = tmp3;
          if (tmp3) {
            tmp7 = tmp4.name != arg0;
          }
          tmp5 = tmp7;
        }
        if (!tmp5) {
          let spliceResult = arr.splice(diff, 1);
        }
        tmp9 = +diff;
        diff = tmp9 - 1;
      } while (tmp9);
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
const result = set.fileFinishedImporting("../discord_common/js/packages/performance-utils/performance-polyfill.js");