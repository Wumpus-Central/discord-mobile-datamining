// === Module 951: createConsolaReporter ===

// Module 951 (createConsolaReporter)
import closure_2 from "_objectWithoutProperties" /* 109 */;

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
      const tmp = closure_1_2(arg0, closure_1_3);
      if (!client) {
        client = set(client[1]).getClient();
        const obj2 = set(client[1]);
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
                if (closure_1_6[level]) {
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
            items.push(set(client[2]).formatConsoleArgs(args, num, num2));
            const obj3 = set(client[2]);
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
          const obj = { level: null, message: null, attributes: null };
          obj[0] = str;
          obj[1] = joined;
          obj[2] = tmp;
          set(client[3])._INTERNAL_captureLog(obj);
          const obj4 = set(client[3]);
          tmp14 = null != level && typeof level === "number";
        }
      }
    }
  };
  return obj;
};