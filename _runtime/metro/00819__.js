// _runtime/metro/00819__.js
import _mod713 from "00713__.js";
import _INTERNAL_captureSerializedLog from "../00745__INTERNAL_captureSerializedLog.js";
import safeJoinConsoleArgs from "../00817_safeJoinConsoleArgs.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";

let closure_3 = ["type", "level", "message", "args", "tag", "date"];
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = ["trace", "debug", "info", "warn", "error", "fatal"];
let closure_5 = {
  silent: "trace",
  fatal: "fatal",
  error: "error",
  warn: "warn",
  log: "info",
  info: "info",
  success: "info",
  fail: "error",
  ready: "info",
  start: "info",
  box: "info",
  debug: "debug",
  trace: "trace",
  verbose: "debug",
  critical: "fatal",
  notice: "info",
};
let closure_6 = { 0: "fatal", 1: "warn", 2: "info", 3: "info", 4: "debug", 5: "trace" };

export const createConsolaReporter = function createConsolaReporter() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let set;
  let client;
  let levels = obj.levels;
  if (levels == null) {
    levels = closure_4;
  }
  set = new Set(levels);
  client = obj.client;
  obj = {
    log(arg0) {
      ({ type, level, message, args, tag, date } = arg0);
      const tmp = _objectWithoutProperties(arg0, closure_3);
      if (!client) {
        client = _mod713.getClient();
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
        if (set.has(str)) {
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
          let tmp8 = args;
          if (args) {
            tmp8 = args.length > 0;
          }
          if (tmp8) {
            items.push(safeJoinConsoleArgs.formatConsoleArgs(args, num, num2));
          }
          tmp["sentry.origin"] = "auto.log.consola";
          const joined = items.join(" ");
          if (tag) {
            tmp["consola.tag"] = tag;
          }
          if (type) {
            tmp["consola.type"] = type;
          }
          if (tmp14) {
            tmp["consola.level"] = level;
          }
          const obj = { level: str, message: joined, attributes: tmp };
          _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj);
          tmp14 = null != level && typeof level === "number";
        }
      }
    },
  };
  return obj;
};
