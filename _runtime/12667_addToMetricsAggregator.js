// _runtime/12667_addToMetricsAggregator.js
import errorCallback from "12567_errorCallback.js";
import _mod12668 from "metro/12668__.js";
import __SENTRY_DEBUG__ from "metro/12570___SENTRY_DEBUG__.js";
import { getGlobalSingleton } from "12572_getGlobalSingleton.js";
import { spanTimeInputToSeconds } from "12576_spanTimeInputToSeconds.js";
import { dateTimestampInSeconds } from "12585_dateTimestampInSeconds.js";
import { getClient } from "12598_getClient.js";

function addToMetricsAggregator(arg0, SET_METRIC_TYPE, arg2, arg3, arg4) {
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = require("12598_getClient.js").getClient();
    const obj2 = getClient;
  }
  if (client) {
    const activeSpan = require("12576_spanTimeInputToSeconds.js").getActiveSpan();
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
    if (require("metro/12599___SENTRY_DEBUG__.js").DEBUG_BUILD) {
      const logger = tmp3(12571).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + arg3 + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const obj3 = spanTimeInputToSeconds;
    const globalSingleton = require("12572_getGlobalSingleton.js").getGlobalSingleton(
      "globalMetricsAggregators",
      () => {
        const weakMap = new WeakMap();
        return weakMap;
      },
    );
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
    const tmp3Result1 = getGlobalSingleton;
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
      let obj = dateTimestampInSeconds;
      let timestampInSecondsResult = obj.timestampInSeconds();
      c4 = timestampInSecondsResult;
      obj = { op: "metrics.timing", name: null, startTime: null, onlyIfParent: true };
      obj[1] = arg1;
      obj[2] = timestampInSecondsResult;
      return require("12605_createChildOrRootSpan.js").startSpanManual(obj, (arg0) => {
        const callback = arg0;
        return callback(table[10]).handleCallbackErrors(
          () => callback(),
          () => {},
          () => {
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
          },
        );
      });
    } else {
      obj = {};
      let merged = Object.assign(arg4);
      obj.unit = str;
      const DISTRIBUTION_METRIC_TYPE = require("metro/12668__.js").DISTRIBUTION_METRIC_TYPE;
      let parsed = fn;
      if (typeof fn === "string") {
        let _parseInt = parseInt;
        parsed = parseInt(fn);
      }
      closure_2(arg0, DISTRIBUTION_METRIC_TYPE, arg1, parsed, obj);
    }
  },
  getMetricsAggregatorForClient(on) {
    const globalSingleton = require("12572_getGlobalSingleton.js").getGlobalSingleton(
      "globalMetricsAggregators",
      () => {
        const weakMap = new WeakMap();
        return weakMap;
      },
    );
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
    const obj = getGlobalSingleton;
  },
};
