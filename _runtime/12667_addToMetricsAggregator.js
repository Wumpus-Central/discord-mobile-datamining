// === Module 12667: addToMetricsAggregator ===

// Module 12667 (addToMetricsAggregator)
import errorCallback from "errorCallback" /* 12567 */;
import _mod12668 from "module_12668" /* 12668 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 12570 */;

function addToMetricsAggregator(arg0, SET_METRIC_TYPE, arg2, arg3, arg4) {
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = _require(12598).getClient();
    const obj2 = _require(12598);
  }
  if (client) {
    const activeSpan = _require(12576).getActiveSpan();
    let rootSpan;
    if (activeSpan) {
      let tmp3Result = tmp3(12576);
      rootSpan = tmp3Result.getRootSpan(activeSpan);
    }
    let description = rootSpan;
    if (rootSpan) {
      tmp3Result = tmp3(12576);
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
    if (_require(12599).DEBUG_BUILD) {
      const logger = tmp3(12571).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + arg3 + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const obj3 = _require(12576);
    const globalSingleton = _require(12572).getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    let value = globalSingleton.get(client);
    if (!value) {
      const tmp20 = new arg0(client);
      _require = tmp20;
      client.on("flush", () => closure_0.flush());
      client.on("close", () => closure_0.close());
      const result = globalSingleton.set(client, tmp20);
      value = tmp20;
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(tags);
    value.add(SET_METRIC_TYPE, arg2, arg3, unit, obj, timestamp);
    const tmp3Result1 = _require(12572);
  }
}
errorCallback;

export const metrics = {
  increment(arg0, arg1, joined) {
    let num = joined;
    if (joined === undefined) {
      num = 1;
    }
    let parsed = num;
    if (typeof num === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(num);
    }
    addToMetricsAggregator(arg0, _mod12668.COUNTER_METRIC_TYPE, arg1, parsed, arg3);
  },
  distribution(arg0, arg1, joined) {
    let parsed = joined;
    if (typeof joined === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(joined);
    }
    addToMetricsAggregator(arg0, _mod12668.DISTRIBUTION_METRIC_TYPE, arg1, parsed, arg3);
  },
  set(arg0, arg1, arg2, arg3) {
    addToMetricsAggregator(arg0, _mod12668.SET_METRIC_TYPE, arg1, arg2, arg3);
  },
  gauge(arg0, arg1, joined) {
    let parsed = joined;
    if (typeof joined === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(joined);
    }
    addToMetricsAggregator(arg0, _mod12668.GAUGE_METRIC_TYPE, arg1, parsed, arg3);
  },
  timing(arg0, arg1, fn) {
    const _require = arg0;
    dependencyMap = arg1;
    closure_2 = fn;
    let str = arg3;
    if (arg3 === undefined) {
      str = "second";
    }
    closure_3 = arg4;
    c4 = undefined;
    if (typeof fn === "function") {
      let obj = _require(12585);
      let timestampInSecondsResult = obj.timestampInSeconds();
      c4 = timestampInSecondsResult;
      obj = { op: "metrics.timing", name: null, startTime: null, onlyIfParent: true };
      obj[1] = arg1;
      obj[2] = timestampInSecondsResult;
      return _require(12605).startSpanManual(obj, (arg0) => {
        const callback = arg0;
        return callback(table[10]).handleCallbackErrors(() => callback(), () => {

        }, () => {
          let obj = lib(12585);
          const timestampInSecondsResult = obj.timestampInSeconds();
          const diff = timestampInSecondsResult - closure_1_4;
          obj = {};
          const merged = Object.assign(closure_1_3);
          obj.unit = "second";
          let parsed = diff;
          if (typeof diff === "string") {
            const _parseInt = parseInt;
            parsed = parseInt(diff);
          }
          closure_2(lib, lib(12668).DISTRIBUTION_METRIC_TYPE, closure_1_1, parsed, obj);
          lib.end(timestampInSecondsResult);
        });
      });
    } else {
      obj = {};
      let merged = Object.assign(arg4);
      obj.unit = str;
      const DISTRIBUTION_METRIC_TYPE = _require(12668).DISTRIBUTION_METRIC_TYPE;
      let parsed = fn;
      if (typeof fn === "string") {
        let _parseInt = parseInt;
        parsed = parseInt(fn);
      }
      closure_2(arg0, DISTRIBUTION_METRIC_TYPE, arg1, parsed, obj);
    }
  },
  getMetricsAggregatorForClient(on) {
    const globalSingleton = _require(12572).getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    const value = globalSingleton.get(on);
    if (value) {
      return value;
    } else {
      const tmp6 = new arg1(on);
      _require = tmp6;
      on.on("flush", () => closure_0.flush());
      on.on("close", () => closure_0.close());
      const result = globalSingleton.set(on, tmp6);
      return tmp6;
    }
    const obj = _require(12572);
  }
};