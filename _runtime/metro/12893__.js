// _runtime/metro/12893__.js
import errorCallback from "../12793_errorCallback.js";
import _mod12798 from "12798__.js";
import spanTimeInputToSeconds from "../12802_spanTimeInputToSeconds.js";
import _mod12811 from "12811__.js";
import _mod12824 from "12824__.js";
import _mod12825 from "12825__.js";
import COUNTER_METRIC_TYPE from "../12894_COUNTER_METRIC_TYPE.js";
import __SENTRY_DEBUG__ from "12796__.js";

function addToMetricsAggregator(arg0, SET_METRIC_TYPE, arg2, arg3, arg4) {
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = _mod12824.getClient();
  }
  if (client) {
    const activeSpan = spanTimeInputToSeconds.getActiveSpan();
    let rootSpan;
    if (activeSpan) {
      let tmp3Result = tmp3(12802);
      rootSpan = tmp3Result.getRootSpan(activeSpan);
    }
    let description = rootSpan;
    if (rootSpan) {
      tmp3Result = tmp3(12802);
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
    if (_mod12825.DEBUG_BUILD) {
      const logger = tmp3(12797).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + arg3 + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const globalSingleton = _mod12798.getGlobalSingleton("globalMetricsAggregators", () => {
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
    value.add(SET_METRIC_TYPE, arg2, arg3, unit, obj, timestamp);
    const tmp3Result1 = _mod12798;
  }
}
errorCallback;

export const metrics = {
  increment(arg0, arg1, match) {
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
  set(arg0, arg1, arg2, arg3) {
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE.SET_METRIC_TYPE, arg1, arg2, arg3);
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
      let obj = require("12811__.js");
      let timestampInSecondsResult = obj.timestampInSeconds();
      c4 = timestampInSecondsResult;
      obj = { op: "metrics.timing", name, startTime: timestampInSecondsResult, onlyIfParent: true };
      return require("12831__.js").startSpanManual(obj, (arg0) => {
        closure_0 = arg0;
        return closure_0(name[10]).handleCallbackErrors(
          () => fn(),
          () => {},
          () => {
            let obj = _mod12811;
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
          },
        );
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
    const globalSingleton = _mod12798.getGlobalSingleton("globalMetricsAggregators", () => {
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
  },
};
