// discord_common/js/packages/performance-utils/performance-polyfill.js
import size from "../../../../_runtime/metro/00002__.js";

let nowResult;
let _Date = Date;
if (Date.now) {
  nowResult = _Date.now();
} else {
  let self = this;
  let self2 = this;
  let _Date1 = new _Date();
  const tmp2 = _Date1;
  nowResult = +_Date1;
}
let _window = nowResult;
let tmp4 = global.performance || {};
let closure_1 = tmp4;
let closure_2 = [];
let closure_3 = {};
function u(arg0, arg1) {}
function f(arg0, arg1) {}
if (!tmp4.now) {
  tmp4.now =
    tmp4.webkitNow ||
    tmp4.mozNow ||
    tmp4.msNow ||
    function () {
      let _window;
      const _Date = Date;
      if (Date.now) {
        _window = _Date.now();
      } else {
        const self = this;
        const self2 = this;
        const _Date1 = new _Date();
        _window = +_Date1;
      }
      return _window - _window;
    };
}
if (!tmp4.mark) {
  tmp4.mark =
    tmp4.webkitMark ||
    ((name) => {
      const obj = { name, entryType: "mark", startTime: closure_1.now(), duration: 0 };
      closure_2.push(obj);
      closure_3[name] = obj;
    });
}
if (!tmp4.measure) {
  tmp4.measure =
    tmp4.webkitMeasure ||
    function (name, arg1, arg2) {
      let startTime;
      if (undefined !== arg2) {
        if (undefined === closure_3[arg2]) {
          const _SyntaxError2 = SyntaxError;
          const self3 = this;
          const self4 = this;
          const syntaxError = new SyntaxError(
            "Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.",
          );
          throw syntaxError;
        }
      }
      if (undefined !== arg1) {
        if (undefined === closure_3[arg1]) {
          const _SyntaxError = SyntaxError;
          const self = this;
          const self2 = this;
          const syntaxError1 = new SyntaxError(
            "Failed to execute 'measure' on 'Performance': The mark '" + arg1 + "' does not exist.",
          );
          throw syntaxError1;
        }
      }
      let num = 0;
      if (closure_3[arg1]) {
        num = closure_3[arg1].startTime;
      }
      if (closure_3[arg2]) {
        startTime = closure_3[arg2].startTime;
      } else {
        startTime = closure_1.now();
      }
      const obj = { name, entryType: "measure", startTime: num, duration: startTime - num };
      closure_2.push(obj);
    };
}
if (!tmp4.getEntriesByType) {
  tmp4.getEntriesByType =
    tmp4.webkitGetEntriesByType ||
    ((arg0) => {
      if (typeof u === "function") {
        let num;
        const items = [];
        for (let num = 0; num < closure_2.length; num = num + 1) {
          if (closure_2[num].entryType == arg0) {
            let arr = items.push(tmp2[num]);
          }
        }
        return items;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
}
if (!tmp4.getEntriesByName) {
  tmp4.getEntriesByName =
    tmp4.webkitGetEntriesByName ||
    ((arg0) => {
      if (typeof u === "function") {
        let num;
        const items = [];
        for (let num = 0; num < closure_2.length; num = num + 1) {
          if (closure_2[num].name == arg0) {
            let arr = items.push(tmp2[num]);
          }
        }
        return items;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
}
if (!tmp4.clearMarks) {
  tmp4.clearMarks =
    tmp4.webkitClearMarks ||
    ((arg0) => {
      let tmp10;
      if (typeof f === "function") {
        let diff = tmp2 - 1;
        const tmp4 = undefined !== arg0;
        if (+closure_2.length) {
          do {
            let tmp5 = closure_2[diff];
            let tmp6 = tmp5.entryType != "mark";
            if (!tmp6) {
              let tmp8 = tmp4 && tmp5.name != arg0;
              tmp6 = tmp8;
            }
            if (!tmp6) {
              let spliceResult = closure_2.splice(diff, 1);
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
if (!tmp4.clearMeasures) {
  tmp4.clearMeasures =
    tmp4.webkitClearMeasures ||
    ((arg0) => {
      let tmp10;
      if (typeof f === "function") {
        let diff = tmp2 - 1;
        const tmp4 = undefined !== arg0;
        if (+closure_2.length) {
          do {
            let tmp5 = closure_2[diff];
            let tmp6 = tmp5.entryType != "measure";
            if (!tmp6) {
              let tmp8 = tmp4 && tmp5.name != arg0;
              tmp6 = tmp8;
            }
            if (!tmp6) {
              let spliceResult = closure_2.splice(diff, 1);
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
global.performance = tmp4;
let tmp5 = typeof globalThis.define === "function";
if (typeof globalThis.define === "function") {
  const define3 = globalThis.define;
  let ajs = globalThis.define.amd;
  if (!ajs) {
    ajs = globalThis.define.ajs;
  }
  tmp5 = ajs;
}
if (tmp5) {
  const define2 = globalThis.define;
  globalThis.define("performance", [], () => closure_1);
}
const result = size.fileFinishedImporting("../discord_common/js/packages/performance-utils/performance-polyfill.js");
