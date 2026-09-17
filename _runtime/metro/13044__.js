// _runtime/metro/13044__.js
import errorCallback from "../12944_errorCallback.js";
import _mod12948 from "12948__.js";
import _mod12949 from "12949__.js";
import spanTimeInputToSeconds from "../12953_spanTimeInputToSeconds.js";
import _mod12962 from "12962__.js";
import _mod12975 from "12975__.js";
import _mod12976 from "12976__.js";
import COUNTER_METRIC_TYPE from "../13045_COUNTER_METRIC_TYPE.js";
import __SENTRY_DEBUG__ from "12947__.js";

const require = globalThis.__r;

function addToMetricsAggregator(arg0, SET_METRIC_TYPE, arg2, parsed, arg4) {
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = _mod12975.getClient();
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
    if (_mod12976.DEBUG_BUILD) {
      const logger = _mod12948.logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + parsed + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const globalSingleton = _mod12949.getGlobalSingleton("globalMetricsAggregators", () => {
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
    const tmp3Result4 = _mod12949;
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
      let timestampInSecondsResult = require("12962__.js").timestampInSeconds();
      c4 = timestampInSecondsResult;
      let obj = require("12962__.js");
      const obj3 = { op: "metrics.timing", name, startTime: timestampInSecondsResult, onlyIfParent: true };
      return require("12982__.js").startSpanManual(obj3, (arg0) => {
        closure_0 = arg0;
        return closure_0(name[10]).handleCallbackErrors(
          () => fn(),
          () => {},
          () => {
            const timestampInSecondsResult = _mod12962.timestampInSeconds();
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
          },
        );
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
    const globalSingleton = _mod12949.getGlobalSingleton("globalMetricsAggregators", () => {
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
