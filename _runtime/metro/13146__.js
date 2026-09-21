// === Module 13146: ? ===

// Module 13146
import errorCallback from "errorCallback" /* 13046 */;
import _mod13050 from "module_13050" /* 13050 */;
import _mod13051 from "module_13051" /* 13051 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13055 */;
import _mod13064 from "module_13064" /* 13064 */;
import _mod13077 from "module_13077" /* 13077 */;
import _mod13078 from "module_13078" /* 13078 */;
import COUNTER_METRIC_TYPE from "COUNTER_METRIC_TYPE" /* 13147 */;
import __SENTRY_DEBUG__ from "module_13049" /* 13049 */;

const require = globalThis.__r;

function addToMetricsAggregator(arg0, SET_METRIC_TYPE, arg2, parsed, arg4) {
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = _mod13077.getClient();
  }
  if (client) {
    const activeSpan = spanTimeInputToSeconds.getActiveSpan();
    let rootSpan;
    if (activeSpan) {
      rootSpan = spanTimeInputToSeconds.getRootSpan(activeSpan);
      const tmp3Result = spanTimeInputToSeconds;
    }
    let description = rootSpan;
    if (rootSpan) {
      description = spanTimeInputToSeconds.spanToJSON(rootSpan).description;
      const tmp3Result3 = spanTimeInputToSeconds;
    }
    ({ unit, tags, timestamp } = obj);
    const options = client.getOptions();
    ({ release, environment } = options);
    const obj4 = {};
    if (release) {
      obj4.release = release;
    }
    if (environment) {
      obj4.environment = environment;
    }
    if (description) {
      obj4.transaction = description;
    }
    if (_mod13078.DEBUG_BUILD) {
      const logger = _mod13050.logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + parsed + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const globalSingleton = _mod13051.getGlobalSingleton("globalMetricsAggregators", () => {
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
    const obj5 = {};
    const merged = Object.assign(obj4);
    const merged1 = Object.assign(tags);
    value.add(SET_METRIC_TYPE, arg2, parsed, unit, obj5, timestamp);
    const tmp3Result4 = _mod13051;
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
      let timestampInSecondsResult = require("module_13064").timestampInSeconds();
      c4 = timestampInSecondsResult;
      let obj = require("module_13064");
      const obj3 = { op: "metrics.timing", name, startTime: timestampInSecondsResult, onlyIfParent: true };
      return require("module_13084").startSpanManual(obj3, (arg0) => {
        closure_0 = arg0;
        return closure_0(name[10]).handleCallbackErrors(() => fn(), () => {

        }, () => {
          const timestampInSecondsResult = _mod13064.timestampInSeconds();
          const diff = timestampInSecondsResult - c4;
          const obj2 = {};
          const merged = Object.assign(closure_3);
          obj2.unit = "second";
          let parsed = diff;
          if (typeof diff === "string") {
            const _parseInt = parseInt;
            parsed = parseInt(diff);
          }
          addToMetricsAggregator(closure_0, COUNTER_METRIC_TYPE.DISTRIBUTION_METRIC_TYPE, closure_1, parsed, obj2);
          closure_0.end(timestampInSecondsResult);
        });
      });
    } else {
      const obj4 = {};
      let merged = Object.assign(arg4);
      obj4.unit = str;
      const DISTRIBUTION_METRIC_TYPE = require("COUNTER_METRIC_TYPE").DISTRIBUTION_METRIC_TYPE;
      let parsed = fn;
      if (typeof fn === "string") {
        let _parseInt = parseInt;
        parsed = parseInt(fn);
      }
      addToMetricsAggregator(arg0, DISTRIBUTION_METRIC_TYPE, name, parsed, obj4);
    }
  },
  getMetricsAggregatorForClient(on, arg1) {
    const globalSingleton = _mod13051.getGlobalSingleton("globalMetricsAggregators", () => {
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