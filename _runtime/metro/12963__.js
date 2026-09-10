// === Module 12963: ? ===

// Module 12963
import errorCallback from "errorCallback" /* 12863 */;
import _mod12867 from "module_12867" /* 12867 */;
import _mod12868 from "module_12868" /* 12868 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12872 */;
import _mod12881 from "module_12881" /* 12881 */;
import _mod12894 from "module_12894" /* 12894 */;
import _mod12895 from "module_12895" /* 12895 */;
import COUNTER_METRIC_TYPE from "COUNTER_METRIC_TYPE" /* 12964 */;
import __SENTRY_DEBUG__ from "module_12866" /* 12866 */;

function addToMetricsAggregator(arg0, SET_METRIC_TYPE, arg2, parsed, arg4) {
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = _mod12894.getClient();
  }
  if (client) {
    const activeSpan = spanTimeInputToSeconds.getActiveSpan();
    let rootSpan;
    if (activeSpan) {
      let tmp3Result = spanTimeInputToSeconds;
      rootSpan = tmp3Result.getRootSpan(activeSpan);
    }
    let description = rootSpan;
    if (rootSpan) {
      tmp3Result = spanTimeInputToSeconds;
      description = tmp3Result.spanToJSON(rootSpan).description;
    }
    ({ unit, tags, timestamp } = obj);
    const options = client.getOptions();
    ({ release, environment } = options);
    obj = {};
    if (release) {
      obj.release = release;
    }
    if (environment) {
      obj.environment = environment;
    }
    if (description) {
      obj.transaction = description;
    }
    if (_mod12895.DEBUG_BUILD) {
      const logger = _mod12867.logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + parsed + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const globalSingleton = _mod12868.getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    value = globalSingleton.get(client);
    if (!value) {
      const tmp20 = new arg0(client);
      closure_0 = tmp20;
      client.on("flush", () => closure_0.flush());
      client.on("close", () => closure_0.close());
      const result = globalSingleton.set(client, tmp20);
      value = tmp20;
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(tags);
    value.add(SET_METRIC_TYPE, arg2, parsed, unit, obj, timestamp);
    const tmp3Result1 = _mod12868;
  }
}
errorCallback;

export const metrics = {
  increment(arg0, arg1) {
    let num = match;
    if (match === undefined) {
      num = 1;
    }
    let parsed = num;
    if (typeof num === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(num);
    }
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE.COUNTER_METRIC_TYPE, arg1, parsed, arg3);
  },
  distribution(arg0, arg1, match, arg3) {
    let parsed = match;
    if (typeof match === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(match);
    }
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE.DISTRIBUTION_METRIC_TYPE, arg1, parsed, arg3);
  },
  set(arg0, arg1, parsed, arg3) {
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE.SET_METRIC_TYPE, arg1, parsed, arg3);
  },
  gauge(arg0, arg1, match, arg3) {
    let parsed = match;
    if (typeof match === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(match);
    }
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE.GAUGE_METRIC_TYPE, arg1, parsed, arg3);
  },
  timing(arg0, name, fn) {
    _require = arg0;
    dependencyMap = name;
    addToMetricsAggregator = fn;
    let str = arg3;
    if (arg3 === undefined) {
      str = "second";
    }
    closure_3 = arg4;
    c4 = undefined;
    if (typeof fn === "function") {
      let obj = require("module_12881");
      let timestampInSecondsResult = obj.timestampInSeconds();
      c4 = timestampInSecondsResult;
      obj = { op: "metrics.timing", name, startTime: timestampInSecondsResult, onlyIfParent: true };
      return require("module_12901").startSpanManual(obj, (arg0) => {
        closure_0 = arg0;
        return closure_0(name[10]).handleCallbackErrors(() => fn(), () => {

        }, () => {
          let obj = _mod12881;
          const timestampInSecondsResult = obj.timestampInSeconds();
          const diff = timestampInSecondsResult - c4;
          obj = {};
          const merged = Object.assign(closure_3);
          obj.unit = "second";
          let parsed = diff;
          if (typeof diff === "string") {
            const _parseInt = parseInt;
            parsed = parseInt(diff);
          }
          addToMetricsAggregator(closure_0, COUNTER_METRIC_TYPE.DISTRIBUTION_METRIC_TYPE, closure_1, parsed, obj);
          closure_0.end(timestampInSecondsResult);
        });
      });
    } else {
      obj = {};
      let merged = Object.assign(arg4);
      obj.unit = str;
      const DISTRIBUTION_METRIC_TYPE = require("COUNTER_METRIC_TYPE").DISTRIBUTION_METRIC_TYPE;
      let parsed = fn;
      if (typeof fn === "string") {
        let _parseInt = parseInt;
        parsed = parseInt(fn);
      }
      addToMetricsAggregator(arg0, DISTRIBUTION_METRIC_TYPE, name, parsed, obj);
    }
  },
  getMetricsAggregatorForClient(on, arg1) {
    const globalSingleton = _mod12868.getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    value = globalSingleton.get(on);
    if (value) {
      return value;
    } else {
      const tmp6 = new arg1(on);
      closure_0 = tmp6;
      on.on("flush", () => closure_0.flush());
      on.on("close", () => closure_0.close());
      const result = globalSingleton.set(on, tmp6);
      return tmp6;
    }
  }
};