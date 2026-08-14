// _runtime/07616_addToMetricsAggregator.js
import "errorCallback";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import { getGlobalSingleton } from "07521_getGlobalSingleton.js";
import { spanTimeInputToSeconds } from "07525_spanTimeInputToSeconds.js";
import { dateTimestampInSeconds } from "07534_dateTimestampInSeconds.js";
import { getClient } from "07547_getClient.js";
import { createChildOrRootSpan } from "07554_createChildOrRootSpan.js";
import { __SENTRY_DEBUG__ } from "metro/07548___SENTRY_DEBUG__.js";
import { 07617__ } from "metro/07617__.js";

function addToMetricsAggregator(arg0, SET_METRIC_TYPE, arg2, arg3, arg4) {
  let environment;
  let release;
  let tags;
  let timestamp;
  let unit;
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = getClient.getClient();
    const obj2 = getClient;
  }
  if (client) {
    const activeSpan = spanTimeInputToSeconds.getActiveSpan();
    let rootSpan;
    if (activeSpan) {
      let tmp3Result = tmp3(7525);
      rootSpan = tmp3Result.getRootSpan(activeSpan);
    }
    let description = rootSpan;
    if (rootSpan) {
      tmp3Result = tmp3(7525);
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
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = tmp3(7520).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + arg3 + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const obj3 = spanTimeInputToSeconds;
    const globalSingleton = getGlobalSingleton.getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    let value = globalSingleton.get(client);
    if (!value) {
      const tmp20 = new arg0(client);
      require = tmp20;
      client.on("flush", () => tmp20.flush());
      client.on("close", () => tmp20.close());
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
    addToMetricsAggregator(arg0, 07617__.COUNTER_METRIC_TYPE, arg1, parsed, arg3);
  },
  distribution(arg0, arg1, joined) {
    let parsed = joined;
    if (typeof joined === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(joined);
    }
    addToMetricsAggregator(arg0, 07617__.DISTRIBUTION_METRIC_TYPE, arg1, parsed, arg3);
  },
  set(arg0, arg1, arg2, arg3) {
    addToMetricsAggregator(arg0, 07617__.SET_METRIC_TYPE, arg1, arg2, arg3);
  },
  gauge(arg0, arg1, joined) {
    let parsed = joined;
    if (typeof joined === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(joined);
    }
    addToMetricsAggregator(arg0, 07617__.GAUGE_METRIC_TYPE, arg1, parsed, arg3);
  },
  timing(arg0, arg1, fn) {
    const _require = arg0;
    const dependencyMap = arg1;
    let closure_2 = fn;
    let str = arg3;
    if (arg3 === undefined) {
      str = "second";
    }
    let closure_3 = arg4;
    let c4;
    if (typeof fn === "function") {
      let obj = _dateTimestampInSeconds;
      let timestampInSecondsResult = obj.timestampInSeconds();
      c4 = timestampInSecondsResult;
      obj = { op: "metrics.timing", name: null, startTime: null, onlyIfParent: true };
      obj[1] = arg1;
      obj[2] = timestampInSecondsResult;
      return _createChildOrRootSpan.startSpanManual(obj, (arg0) => {
        const callback = arg0;
        return callback(table[10]).handleCallbackErrors(() => callback(), () => {

        }, () => {
          let obj = lib(7534);
          const timestampInSecondsResult = obj.timestampInSeconds();
          const diff = timestampInSecondsResult - outer1_4;
          obj = {};
          const merged = Object.assign(outer1_3);
          obj.unit = "second";
          let parsed = diff;
          if (typeof diff === "string") {
            const _parseInt = parseInt;
            parsed = parseInt(diff);
          }
          closure_2(lib, lib(7617).DISTRIBUTION_METRIC_TYPE, outer1_1, parsed, obj);
          lib.end(timestampInSecondsResult);
        });
      });
    } else {
      obj = {};
      let merged = Object.assign(arg4);
      obj.unit = str;
      const DISTRIBUTION_METRIC_TYPE = _07617__.DISTRIBUTION_METRIC_TYPE;
      let parsed = fn;
      if (typeof fn === "string") {
        let _parseInt = parseInt;
        parsed = parseInt(fn);
      }
      closure_2(arg0, DISTRIBUTION_METRIC_TYPE, arg1, parsed, obj);
    }
  },
  getMetricsAggregatorForClient(on) {
    const globalSingleton = getGlobalSingleton.getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    const value = globalSingleton.get(on);
    if (value) {
      return value;
    } else {
      const tmp6 = new arg1(on);
      require = tmp6;
      on.on("flush", () => tmp20.flush());
      on.on("close", () => tmp20.close());
      const result = globalSingleton.set(on, tmp6);
      return tmp6;
    }
    const obj = getGlobalSingleton;
  }
};