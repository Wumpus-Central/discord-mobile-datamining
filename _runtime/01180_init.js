// === Module 1180: init ===

// Module 1180 (init)
import NativeModules from "NativeModules" /* 1001 */;
import closure_2 from "noop" /* 19 */;

require = arg1;
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
let obj = { enableNativeCrashHandling: true, enableNativeNagger: true, autoInitializeNativeSdk: true, enableAutoPerformanceTracing: true, enableWatchdogTerminationTracking: true, patchGlobalPromise: true, sendClientReports: true, maxQueueSize: require("makeNativeTransport").DEFAULT_BUFFER_SIZE, attachStacktrace: true, enableCaptureFailedRequests: false, enableNdk: true, enableAppStartTracking: true, enableNativeFramesTracking: true, enableStallTracking: true, enableUserInteractionTracing: false, propagateTraceparent: false };

export const init = function init(maxQueueSize) {
  obj = _require(url[2]);
  if (!obj.isRunningInMetroDevServer()) {
    maxQueueSize = maxQueueSize.maxQueueSize;
    if (null === maxQueueSize) {
      let transportOptions = maxQueueSize.transportOptions;
      let bufferSize;
      if (null !== transportOptions) {
        if (undefined !== transportOptions) {
          bufferSize = transportOptions.bufferSize;
        }
      }
      maxQueueSize = bufferSize;
    }
    if (null === maxQueueSize) {
      maxQueueSize = obj.maxQueueSize;
    }
    let isNativeAvailableResult = !tmp7;
    if (!(undefined !== maxQueueSize.enableNative && !maxQueueSize.enableNative)) {
      const NATIVE = tmp(tmp2[3]).NATIVE;
      isNativeAvailableResult = NATIVE.isNativeAvailable();
    }
    let tmpResult = tmp(tmp2[4]);
    const encodePolyfill = tmpResult.useEncodePolyfill();
    if (isNativeAvailableResult) {
      tmpResult = tmp(tmp2[5]);
      tmpResult.enableSyncToNative(tmp(tmp2[6]).getGlobalScope());
      const tmpResult1 = tmp(tmp2[6]);
      const tmpResult2 = tmp(tmp2[5]);
      tmpResult2.enableSyncToNative(tmp(tmp2[6]).getIsolationScope());
      const tmpResult3 = tmp(tmp2[6]);
    }
    _require = tmp(tmp2[7]).safeFactory(maxQueueSize.beforeBreadcrumb, { loggerMessage: "The beforeBreadcrumb threw an error" });
    const tmpResult4 = tmp(tmp2[7]);
    const devServer = tmp(tmp2[8]).getDevServer();
    url = undefined;
    if (null !== devServer) {
      if (undefined !== devServer) {
        url = devServer.url;
      }
    }
    const dsn = maxQueueSize.dsn;
    let combined;
    if (dsn) {
      url = tmp(tmp2[6]).makeDsn(dsn);
      if (url) {
        let str3 = "";
        if (url.port) {
          const _HermesInternal = HermesInternal;
          str3 = ":" + url.port;
        }
        const _HermesInternal2 = HermesInternal;
        combined = "" + url.protocol + "://" + url.host + str3;
      } else {
        const debug = tmp(tmp2[6]).debug;
        debug.error("Failed to extract url from DSN: ", dsn);
      }
      const tmpResult6 = tmp(tmp2[6]);
    }
    const _Object = Object;
    const _Object2 = Object;
    let release = maxQueueSize.release;
    const merged = Object.assign(Object.assign({}, obj), maxQueueSize);
    if (null === release) {
      release = tmp(tmp2[9]).getDefaultRelease();
      const tmpResult7 = tmp(tmp2[9]);
    }
    obj = { release: null, enableNative: null, enableNativeNagger: null, transport: null, transportOptions: null, maxQueueSize: null, integrations: null, stackParser: null, beforeBreadcrumb: null, initialScope: null };
    obj[0] = release;
    obj[1] = isNativeAvailableResult;
    const tmp20 = obj;
    const tmpResult5 = tmp(tmp2[8]);
    obj[2] = tmp(tmp2[10]).shouldEnableNativeNagger(maxQueueSize.enableNativeNagger);
    let makeFetchTransport = maxQueueSize.transport;
    if (!makeFetchTransport) {
      obj = { enableNative: null };
      obj[0] = isNativeAvailableResult;
      makeFetchTransport = tmp(tmp2[1]).makeNativeTransportFactory(obj);
      const tmpResult9 = tmp(tmp2[1]);
    }
    if (!makeFetchTransport) {
      makeFetchTransport = tmp(tmp2[11]).makeFetchTransport;
    }
    obj[3] = makeFetchTransport;
    const _Object3 = Object;
    transportOptions = maxQueueSize.transportOptions;
    const merged1 = Object.assign({}, tmp20.transportOptions);
    if (null === transportOptions) {
      transportOptions = {};
    }
    obj1 = { bufferSize: null };
    obj1[0] = maxQueueSize;
    obj[4] = Object.assign(Object.assign(merged1, transportOptions), obj1);
    obj[5] = maxQueueSize;
    obj[6] = [];
    const tmpResult8 = tmp(tmp2[10]);
    let defaultStackParser = maxQueueSize.stackParser;
    if (!defaultStackParser) {
      defaultStackParser = tmp(tmp2[11]).defaultStackParser;
    }
    obj[7] = tmp(tmp2[6]).stackParserFromStackParserOptions(defaultStackParser);
    obj[8] = function beforeBreadcrumb(arg0, arg1) {
      let tmpResult = arg0;
      if (closure_0) {
        tmpResult = tmp(arg0, arg1);
        if (null === tmpResult) {
          return null;
        }
      }
      const data = tmpResult.data;
      url = undefined;
      if (null !== data) {
        if (undefined !== data) {
          url = data.url;
        }
      }
      let str = "";
      if (typeof url === "string") {
        str = tmpResult.data.url;
      }
      if ("http" === tmp5) {
        if (!url) {
          if (combined) {
            let tmp8 = null;
          }
        } else {
          tmp8 = null;
        }
        return tmp8;
      }
      tmp8 = tmpResult;
    };
    const tmpResult10 = tmp(tmp2[6]);
    obj[9] = tmp(tmp2[7]).safeFactory(maxQueueSize.initialScope, { loggerMessage: "The initialScope threw an error" });
    const merged2 = Object.assign(merged, obj);
    if ("tracesSampler" in merged2) {
      merged2.tracesSampler = tmp(tmp2[7]).safeTracesSampler(merged2.tracesSampler);
      const tmpResult12 = tmp(tmp2[7]);
    }
    if (!("environment" in merged2)) {
      merged2.environment = tmp(tmp2[2]).getDefaultEnvironment();
      const tmpResult13 = tmp(tmp2[2]);
    }
    if (undefined === maxQueueSize.defaultIntegrations) {
      let defaultIntegrations = tmp(tmp2[12]).getDefaultIntegrations(merged2);
      const tmpResult14 = tmp(tmp2[12]);
    } else {
      defaultIntegrations = maxQueueSize.defaultIntegrations;
    }
    const tmpResult11 = tmp(tmp2[7]);
    const obj2 = { integrations: null, defaultIntegrations: null };
    const tmpResult15 = tmp(tmp2[6]);
    obj2[0] = tmp(tmp2[7]).safeFactory(maxQueueSize.integrations, { loggerMessage: "The integrations threw an error" });
    obj2[1] = defaultIntegrations;
    merged2.integrations = tmpResult15.getIntegrationsToSetup(obj2);
    const tmpResult16 = tmp(tmp2[7]);
    const andBind = tmp(tmp2[6]).initAndBind(tmp(tmp2[13]).ReactNativeClient, merged2);
    const tmpResult17 = tmp(tmp2[6]);
    if (tmpResult18.isExpoGo()) {
      const debug2 = tmp(tmp2[6]).debug;
      debug2.log("Offline caching, native errors features are not available in Expo Go.");
      const debug3 = tmp(tmp2[6]).debug;
      debug3.log("Use EAS Build / Native Release Build to test these features.");
    }
    tmpResult18 = tmp(tmp2[2]);
  }
};
export const wrap = function wrap(displayName, profilerProps) {
  const _require = displayName;
  dependencyMap = profilerProps;
  profilerProps = undefined;
  if (null != profilerProps) {
    profilerProps = profilerProps.profilerProps;
  }
  displayName = displayName.displayName;
  let str = "Root";
  let merged = Object.assign({}, profilerProps);
  if (null !== displayName) {
    str = "Root";
    if (undefined !== displayName) {
      str = displayName;
    }
  }
  closure_2 = Object.assign(merged, { name: str, updateProps: {} });
  if (obj.isWeb()) {
    let ReactNativeProfiler = tmp3(1135).Profiler;
  } else {
    ReactNativeProfiler = tmp3(1187).ReactNativeProfiler;
  }
  return (arg0) => {
    let prop;
    if (null != profilerProps) {
      prop = profilerProps.touchEventBoundaryProps;
    }
    if (null === prop) {
      prop = {};
    }
    const merged = Object.assign({}, prop);
    const merged1 = Object.assign({}, React);
    return React.createElement(displayName(profilerProps[15]).TouchEventBoundary, merged, <ReactNativeProfiler {......merged1}>{React.createElement(displayName(profilerProps[16]).FeedbackWidgetProvider, null, <displayName {......Object.assign({}, arg0)} />)}</ReactNativeProfiler>);
  };
};
export const nativeCrash = function nativeCrash() {
  const NATIVE = NativeModules.NATIVE;
  NATIVE.nativeCrash();
};
export const flush = function flush() {
  return fn(this, undefined, undefined, function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            c3 = 1;
            const client = closure_1_0(817).getClient();
            if (client) {
              dependencyMap = 2;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = client.flush();
              return obj1;
            } else {
              c3 = 0;
            }
            const obj6 = closure_1_0(817);
          }
        } else if (1 === tmp7) {
          c3 = 0;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          c3 = 0;
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        const debug = callback(817).debug;
        debug.error("Failed to flush the event queue.");
        c4 = 3;
      } catch (tmp13) {
        closure_2 = tmp13;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp13;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  });
};
export const close = function close() {
  return fn(this, undefined, undefined, function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            c3 = 1;
            obj1 = closure_1_0(817);
            const client = obj1.getClient();
            if (client) {
              dependencyMap = 2;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = client.close();
              return obj1;
            } else {
              c3 = 0;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          const debug = callback(817).debug;
          debug.error("Failed to close the SDK");
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c4 = 3;
      } catch (tmp15) {
        closure_2 = tmp15;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp15;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  });
};
export const withScope = function withScope(arg0) {
  const _require = arg0;
  return _require(817).withScope((arg0) => {
    try {
      return callback(arg0);
    } catch (tmp3) {
      const debug = callback(closure_1_1[6]).debug;
      debug.error("Error while running withScope callback", tmp3);
    }
  });
};
export const crashedLastRun = function crashedLastRun() {
  return fn(this, undefined, undefined, function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const NATIVE = v0(closure_1_1[3]).NATIVE;
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = NATIVE.crashedLastRun();
          return obj;
        }
      } catch (tmp6) {
        v0 = tmp;
        throw tmp6;
      }
    }
  });
};