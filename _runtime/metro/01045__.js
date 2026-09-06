// _runtime/metro/01045__.js
import symbolicateStackTrace from "../00679_symbolicateStackTrace.js";
import _mod682 from "00682__.js";
import NativeModules from "../00866_NativeModules.js";
import _mod867 from "00867__.js";
import globalEncodeFactory from "../00871_globalEncodeFactory.js";
import init from "../01000_init.js";
import _mod1041 from "01041__.js";
import _mod1046 from "01046__.js";
import _mod1047 from "01047__.js";
import safeFactory from "../01048_safeFactory.js";
import _mod1049 from "01049__.js";
import _mod1050 from "01050__.js";
import _mod1051 from "01051__.js";
import _mod1059 from "01059__.js";
import _mod1060 from "01060__.js";
import noop from "00019__.js";

require = fn;
fn = this;
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
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
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
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
let obj = { enableNativeCrashHandling: true, enableNativeNagger: true, autoInitializeNativeSdk: true, enableAutoPerformanceTracing: true, enableWatchdogTerminationTracking: true, patchGlobalPromise: true, sendClientReports: true, maxQueueSize: fn(1046).DEFAULT_BUFFER_SIZE, attachStacktrace: true, enableCaptureFailedRequests: false, enableNdk: true, enableAppStartTracking: true, enableNativeFramesTracking: true, enableStallTracking: true, enableUserInteractionTracing: false, propagateTraceparent: false };

export const init = function init(maxQueueSize) {
  obj = _mod867;
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
      const NATIVE = NativeModules.NATIVE;
      isNativeAvailableResult = NATIVE.isNativeAvailable();
    }
    let tmpResult = globalEncodeFactory;
    const encodePolyfill = tmpResult.useEncodePolyfill();
    if (isNativeAvailableResult) {
      tmpResult = _mod1047;
      tmpResult.enableSyncToNative(_mod682.getGlobalScope());
      const tmpResult1 = _mod682;
      const tmpResult2 = _mod1047;
      tmpResult2.enableSyncToNative(_mod682.getIsolationScope());
      const tmpResult3 = _mod682;
    }
    closure_0 = safeFactory.safeFactory(maxQueueSize.beforeBreadcrumb, { loggerMessage: "The beforeBreadcrumb threw an error" });
    const tmpResult4 = safeFactory;
    const devServer = symbolicateStackTrace.getDevServer();
    let url;
    if (null !== devServer) {
      if (undefined !== devServer) {
        url = devServer.url;
      }
    }
    const dsn = maxQueueSize.dsn;
    let combined;
    if (dsn) {
      url = _mod682.makeDsn(dsn);
      if (url) {
        let str3 = "";
        if (url.port) {
          const _HermesInternal = HermesInternal;
          str3 = ":" + url.port;
        }
        const _HermesInternal2 = HermesInternal;
        combined = "" + url.protocol + "://" + url.host + str3;
      } else {
        const debug = _mod682.debug;
        debug.error("Failed to extract url from DSN: ", dsn);
      }
      const tmpResult6 = _mod682;
    }
    const _Object = Object;
    const _Object2 = Object;
    let release = maxQueueSize.release;
    const merged = Object.assign(Object.assign({}, obj), maxQueueSize);
    if (null === release) {
      release = _mod1049.getDefaultRelease();
      const tmpResult7 = _mod1049;
    }
    obj = { release, enableNative: isNativeAvailableResult, enableNativeNagger: null, transport: null, transportOptions: null, maxQueueSize: null, integrations: null, stackParser: null, beforeBreadcrumb: null, initialScope: null };
    const tmp20 = obj;
    const tmpResult5 = symbolicateStackTrace;
    obj.enableNativeNagger = _mod1050.shouldEnableNativeNagger(maxQueueSize.enableNativeNagger);
    let makeFetchTransport = maxQueueSize.transport;
    if (!makeFetchTransport) {
      obj = { enableNative: isNativeAvailableResult };
      makeFetchTransport = _mod1046.makeNativeTransportFactory(obj);
      const tmpResult9 = _mod1046;
    }
    if (!makeFetchTransport) {
      makeFetchTransport = init.makeFetchTransport;
    }
    obj.transport = makeFetchTransport;
    const _Object3 = Object;
    transportOptions = maxQueueSize.transportOptions;
    const merged1 = Object.assign({}, tmp20.transportOptions);
    if (null === transportOptions) {
      transportOptions = {};
    }
    const obj1 = { bufferSize: maxQueueSize };
    obj.transportOptions = Object.assign(Object.assign(merged1, transportOptions), obj1);
    obj.maxQueueSize = maxQueueSize;
    obj.integrations = [];
    const tmpResult8 = _mod1050;
    let defaultStackParser = maxQueueSize.stackParser;
    if (!defaultStackParser) {
      defaultStackParser = init.defaultStackParser;
    }
    obj.stackParser = _mod682.stackParserFromStackParserOptions(defaultStackParser);
    obj.beforeBreadcrumb = function beforeBreadcrumb(arg0, arg1) {
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
      const str = "";
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
    const tmpResult10 = _mod682;
    obj.initialScope = safeFactory.safeFactory(maxQueueSize.initialScope, { loggerMessage: "The initialScope threw an error" });
    const merged2 = Object.assign(merged, obj);
    if ("tracesSampler" in merged2) {
      merged2.tracesSampler = safeFactory.safeTracesSampler(merged2.tracesSampler);
      const tmpResult12 = safeFactory;
    }
    if (!("environment" in merged2)) {
      merged2.environment = _mod867.getDefaultEnvironment();
      const tmpResult13 = _mod867;
    }
    if (undefined === maxQueueSize.defaultIntegrations) {
      let defaultIntegrations = _mod1051.getDefaultIntegrations(merged2);
      const tmpResult14 = _mod1051;
    } else {
      defaultIntegrations = maxQueueSize.defaultIntegrations;
    }
    const tmpResult11 = safeFactory;
    const obj2 = { integrations: null, defaultIntegrations: null };
    const tmpResult15 = _mod682;
    obj2.integrations = safeFactory.safeFactory(maxQueueSize.integrations, { loggerMessage: "The integrations threw an error" });
    obj2.defaultIntegrations = defaultIntegrations;
    merged2.integrations = tmpResult15.getIntegrationsToSetup(obj2);
    const tmpResult16 = safeFactory;
    const andBind = _mod682.initAndBind(_mod1041.ReactNativeClient, merged2);
    const tmpResult17 = _mod682;
    if (tmpResult18.isExpoGo()) {
      const debug2 = _mod682.debug;
      debug2.log("Offline caching, native errors features are not available in Expo Go.");
      const debug3 = _mod682.debug;
      debug3.log("Use EAS Build / Native Release Build to test these features.");
    }
    tmpResult18 = _mod867;
  }
};
export const wrap = function wrap(displayName, profilerProps) {
  _require = displayName;
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
    let ReactNativeProfiler = tmp3(1000).Profiler;
  } else {
    ReactNativeProfiler = tmp3(1052).ReactNativeProfiler;
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
    const merged1 = Object.assign({}, closure_2);
    return noop.createElement(_mod1059.TouchEventBoundary, merged, <ReactNativeProfiler {......merged1}>{noop.createElement(_mod1060.FeedbackWidgetProvider, null, <closure_0 {......Object.assign({}, arg0)} />)}</ReactNativeProfiler>);
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
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            const client = require("00682__.js").getClient();
            if (client) {
              c1 = 2;
              c4 = 1;
              const obj1 = { value: client.flush(), done: false };
              return obj1;
            } else {
              c3 = 0;
            }
            const obj6 = require("00682__.js");
          }
        } else if (1 === tmp7) {
          c3 = 0;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c3 = 0;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        const debug = closure_128_0(closure_128_1[6]).debug;
        debug.error("Failed to flush the event queue.");
        c4 = 3;
      } catch (tmp13) {
        closure_2 = tmp13;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp13;
        } else {
          c1 = tmp;
        }
      }
    }
  });
};
export const close = function close() {
  return fn(this, undefined, undefined, function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            let obj1 = require("00682__.js");
            const client = obj1.getClient();
            if (client) {
              c1 = 2;
              c4 = 1;
              obj1 = { value: client.close(), done: false };
              return obj1;
            } else {
              c3 = 0;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          const debug = closure_128_0(closure_128_1[6]).debug;
          debug.error("Failed to close the SDK");
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      } catch (tmp15) {
        closure_2 = tmp15;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp15;
        } else {
          c1 = tmp;
        }
      }
    }
  });
};
export const withScope = function withScope(arg0) {
  _require = arg0;
  return require("00682__.js").withScope((arg0) => {
    try {
      return closure_0(arg0);
    } catch (tmp3) {
      const debug = _mod682.debug;
      debug.error("Error while running withScope callback", tmp3);
    }
  });
};
export const crashedLastRun = function crashedLastRun() {
  return fn(this, undefined, undefined, function*() {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const NATIVE = require("NativeModules").NATIVE;
          c0 = 3;
          obj = { value: NATIVE.crashedLastRun(), done: true };
          return obj;
        }
      } catch (tmp6) {
        c0 = tmp;
        throw tmp6;
      }
    }
  });
};