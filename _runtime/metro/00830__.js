// === Module 830: ? ===

// Module 830
import _mod724 from "module_724" /* 724 */;
import _INTERNAL_captureLog from "_INTERNAL_captureLog" /* 756 */;
import safeJoinConsoleArgs from "safeJoinConsoleArgs" /* 828 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

let closure_3 = ["type", "level", "message", "args", "tag", "date"];
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = ["trace", "debug", "info", "warn", "error", "fatal"];
let closure_5 = { silent: "trace", fatal: "fatal", error: "error", warn: "warn", log: "info", info: "info", success: "info", fail: "error", ready: "info", start: "info", box: "info", debug: "debug", trace: "trace", verbose: "debug", critical: "fatal", notice: "info" };
let closure_6 = { 0: "fatal", 1: "warn", 2: "info", 3: "info", 4: "debug", 5: "trace" };

export const createConsolaReporter = function createConsolaReporter() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _Set1;
  let client;
  let levels = obj.levels;
  const _Set = Set;
  if (levels == null) {
    levels = closure_4;
  }
  _Set1 = new _Set(levels);
  client = obj.client;
  let obj2 = {
    log(arg0) {
      let args;
      let date;
      let level;
      let message;
      let tag;
      let type;
      ({ type, level, message, args, tag, date } = arg0);
      const tmp = _objectWithoutProperties(arg0, closure_3);
      if (!client) {
        const obj2 = _mod724;
        client = obj2.getClient();
      }
      if (client) {
        let str = "debug";
        if ("verbose" !== type) {
          str = "trace";
          if ("silent" !== type) {
            if (!type) {
              str = "info";
              if (typeof level === "number") {
                str = "info";
                if (closure_6[level]) {
                  str = tmp19;
                }
              }
            }
          }
        }
        if (_Set1.has(str)) {
          const options = client.getOptions();
          const normalizeDepth = options.normalizeDepth;
          let num = 3;
          if (undefined !== normalizeDepth) {
            num = normalizeDepth;
          }
          const normalizeMaxBreadth = options.normalizeMaxBreadth;
          let num2 = 1000;
          if (undefined !== normalizeMaxBreadth) {
            num2 = normalizeMaxBreadth;
          }
          const items = [];
          if (message) {
            items.push(message);
          }
          const tmp8 = args && args.length > 0;
          if (tmp8) {
            const push = items.push;
            const obj3 = safeJoinConsoleArgs;
            push(obj3.formatConsoleArgs(args, num, num2));
          }
          tmp["sentry.origin"] = "auto.log.consola";
          const joined = items.join(" ");
          if (tag) {
            tmp["consola.tag"] = tag;
          }
          if (type) {
            tmp["consola.type"] = type;
          }
          const tmp14 = null != level && typeof level === "number";
          if (tmp14) {
            tmp["consola.level"] = level;
          }
          const obj = { level: str, message: joined, attributes: tmp };
          const obj4 = _INTERNAL_captureLog;
          obj4._INTERNAL_captureLog(obj);
        }
      }
    }
  };
  return obj2;
};