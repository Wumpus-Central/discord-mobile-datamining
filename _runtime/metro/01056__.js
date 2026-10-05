// _runtime/metro/01056__.js
import _mod690 from "00690__.js";
import _mod693 from "00693__.js";
import _mod877 from "00877__.js";
import _mod878 from "00878__.js";
import _mod882 from "00882__.js";
import init2 from "../01011_init.js";
import ReactNativeClient from "../01052_ReactNativeClient.js";
import DEFAULT_BUFFER_SIZE from "../01057_DEFAULT_BUFFER_SIZE.js";
import enableSyncToNative3 from "../01058_enableSyncToNative.js";
import safeFactory from "../01059_safeFactory.js";
import _mod1060 from "01060__.js";
import react_native from "../01061_react-native.js";
import _mod1062 from "01062__.js";
import TouchEventBoundary2 from "../01070_TouchEventBoundary.js";
import FeedbackWidgetProvider from "../01071_FeedbackWidgetProvider.js";
import react from "../00019_react.js";

const require = globalThis.__r;
let _require, c0, c1, c4, dependencyMap;

let closure_3 =
  (this && this.__awaiter) ||
  ((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
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
          fn(done.value);
        } else {
          let tmp1 = done.value;
          const value = tmp1;
          if (!(tmp1 instanceof Promise)) {
            const self = this;
            const self2 = this;
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      const tmp = iter;
      const apply = iter.apply;
      const tmp2 = closure_0;
      if (!closure_1) {
        items = [];
      }
      iter = apply(tmp2, items);
      const iter2 = iter.next();
      let value = iter2.value;
      if (iter2.done) {
        const tmp5 = fn(value);
      } else {
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          let self = this;
          let self2 = this;
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
    return _Promise1;
  });
let obj = {
  enableNativeCrashHandling: true,
  enableNativeNagger: true,
  autoInitializeNativeSdk: true,
  enableAutoPerformanceTracing: true,
  enableWatchdogTerminationTracking: true,
  patchGlobalPromise: true,
  sendClientReports: true,
  maxQueueSize: DEFAULT_BUFFER_SIZE.DEFAULT_BUFFER_SIZE,
  attachStacktrace: true,
  enableCaptureFailedRequests: false,
  enableNdk: true,
  enableAppStartTracking: true,
  enableNativeFramesTracking: true,
  enableStallTracking: true,
  enableUserInteractionTracing: false,
  propagateTraceparent: false,
};

export const init = function init(maxQueueSize) {
  let assign2;
  let assign3;
  let defaultStackParser;
  let makeFetchTransport;
  let merged1;
  let obj4;
  let stackParserFromStackParserOptions;
  let tmpResult28;
  let tmpResult31;
  let tmpResult36;
  let transportOptions1;
  obj = _mod878;
  if (!obj.isRunningInMetroDevServer()) {
    let defaultIntegrations;
    maxQueueSize = maxQueueSize.maxQueueSize;
    if (null === maxQueueSize) {
      const transportOptions = maxQueueSize.transportOptions;
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
    let isNativeAvailableResult = !(undefined !== maxQueueSize.enableNative && !maxQueueSize.enableNative);
    const tmp7 = undefined !== maxQueueSize.enableNative && !maxQueueSize.enableNative;
    if (isNativeAvailableResult) {
      const NATIVE = _mod877.NATIVE;
      isNativeAvailableResult = NATIVE.isNativeAvailable();
    }
    let tmpResult = _mod882;
    const encodePolyfill = tmpResult.useEncodePolyfill();
    if (isNativeAvailableResult) {
      const enableSyncToNative = enableSyncToNative3.enableSyncToNative;
      enableSyncToNative3;
      const tmpResult21 = _mod693;
      enableSyncToNative(tmpResult21.getGlobalScope());
      const enableSyncToNative2 = enableSyncToNative3.enableSyncToNative;
      enableSyncToNative3;
      const tmpResult23 = _mod693;
      enableSyncToNative2(tmpResult23.getIsolationScope());
    }
    const tmpResult24 = safeFactory;
    let closure_0 = tmpResult24.safeFactory(maxQueueSize.beforeBreadcrumb, {
      loggerMessage: "The beforeBreadcrumb threw an error",
    });
    const tmpResult25 = _mod690;
    const devServer = tmpResult25.getDevServer();
    let url1;
    if (null !== devServer) {
      if (undefined !== devServer) {
        url1 = devServer.url;
      }
    }
    const dsn = maxQueueSize.dsn;
    let combined;
    if (dsn) {
      const tmpResult26 = _mod693;
      let url = tmpResult26.makeDsn(dsn);
      if (url) {
        let str3 = "";
        if (url.port) {
          const _HermesInternal = HermesInternal;
          str3 = ":" + url.port;
        }
        const _HermesInternal2 = HermesInternal;
        combined = "" + url.protocol + "://" + url.host + str3;
      } else {
        const debug = _mod693.debug;
        const str = "Failed to extract url from DSN: ";
        debug.error("Failed to extract url from DSN: ", dsn);
      }
    }
    const _Object2 = Object;
    const _Object3 = Object;
    const _Object = Object;
    let release = maxQueueSize.release;
    const merged = Object.assign(Object.assign({}, obj), maxQueueSize);
    const tmp22 = obj;
    if (null === release) {
      const tmpResult27 = _mod1060;
      release = tmpResult27.getDefaultRelease();
    }
    const obj2 = {
      release,
      enableNative: isNativeAvailableResult,
      enableNativeNagger: tmpResult28.shouldEnableNativeNagger(maxQueueSize.enableNativeNagger),
      transport: makeFetchTransport,
      transportOptions: assign2(assign3(merged1, transportOptions1), obj4),
      maxQueueSize,
      integrations: [],
      stackParser: stackParserFromStackParserOptions(defaultStackParser),
      beforeBreadcrumb(arg0, arg1) {
        let tmpResult = arg0;
        if (closure_0) {
          tmpResult = tmp(arg0, arg1);
          if (null === tmpResult) {
            return null;
          }
        }
        const data = tmpResult.data;
        let url;
        const tmp5 = tmpResult.type || "";
        if (null !== data) {
          if (undefined !== data) {
            url = data.url;
          }
        }
        if ("http" === tmp5) {
          let tmp8;
          if (!url1) {
            if (combined) {
              tmp8 = null;
            }
          } else {
            tmp8 = null;
          }
          return tmp8;
        }
        tmp8 = tmpResult;
      },
      initialScope: tmpResult31.safeFactory(maxQueueSize.initialScope, {
        loggerMessage: "The initialScope threw an error",
      }),
    };
    makeFetchTransport = maxQueueSize.transport;
    tmpResult28 = react_native;
    if (!makeFetchTransport) {
      const obj3 = { enableNative: isNativeAvailableResult };
      const tmpResult29 = DEFAULT_BUFFER_SIZE;
      makeFetchTransport = tmpResult29.makeNativeTransportFactory(obj3);
    }
    if (!makeFetchTransport) {
      makeFetchTransport = init2.makeFetchTransport;
    }
    const _Object6 = Object;
    const _Object4 = Object;
    assign2 = Object.assign;
    const _Object5 = Object;
    assign3 = Object.assign;
    transportOptions1 = maxQueueSize.transportOptions;
    merged1 = Object.assign({}, tmp22.transportOptions);
    if (null === transportOptions1) {
      transportOptions1 = {};
    }
    defaultStackParser = maxQueueSize.stackParser;
    obj4 = { bufferSize: maxQueueSize };
    stackParserFromStackParserOptions = _mod693.stackParserFromStackParserOptions;
    _mod693;
    if (!defaultStackParser) {
      defaultStackParser = init2.defaultStackParser;
    }
    tmpResult31 = safeFactory;
    const obj5 = assign(merged, obj2);
    if ("tracesSampler" in obj5) {
      const tmpResult32 = safeFactory;
      obj5.tracesSampler = tmpResult32.safeTracesSampler(obj5.tracesSampler);
    }
    if (!("environment" in obj5)) {
      const tmpResult33 = _mod878;
      obj5.environment = tmpResult33.getDefaultEnvironment();
    }
    if (undefined === maxQueueSize.defaultIntegrations) {
      const tmpResult34 = _mod1062;
      defaultIntegrations = tmpResult34.getDefaultIntegrations(obj5);
    } else {
      defaultIntegrations = maxQueueSize.defaultIntegrations;
    }
    const obj6 = {
      integrations: tmpResult36.safeFactory(maxQueueSize.integrations, {
        loggerMessage: "The integrations threw an error",
      }),
      defaultIntegrations,
    };
    const getIntegrationsToSetup = _mod693.getIntegrationsToSetup;
    _mod693;
    tmpResult36 = safeFactory;
    obj5.integrations = getIntegrationsToSetup(obj6);
    const tmpResult37 = _mod693;
    const andBind = tmpResult37.initAndBind(ReactNativeClient.ReactNativeClient, obj5);
    const tmpResult38 = _mod878;
    if (tmpResult38.isExpoGo()) {
      const debug2 = _mod693.debug;
      debug2.log("Offline caching, native errors features are not available in Expo Go.");
      const debug3 = _mod693.debug;
      debug3.log("Use EAS Build / Native Release Build to test these features.");
    }
  }
};
export const wrap = function wrap(displayName, profilerProps) {
  _require = displayName;
  dependencyMap = profilerProps;
  profilerProps = undefined;
  let _Object = Object;
  const _Object2 = Object;
  const assign2 = Object.assign;
  if (null != profilerProps) {
    profilerProps = profilerProps.profilerProps;
  }
  displayName = displayName.displayName;
  let str = "Root";
  const assign2Result = assign2({}, profilerProps);
  if (null !== displayName) {
    str = "Root";
    if (undefined !== displayName) {
      str = displayName;
    }
  }
  let closure_2 = assign(assign2Result, { name: str, updateProps: {} });
  obj = require("00878__.js");
  if (obj.isWeb()) {
    let ReactNativeProfiler = tmp3(1011).Profiler;
  } else {
    ReactNativeProfiler = tmp3(1063).ReactNativeProfiler;
  }
  return (arg0) => {
    const createElement = react.createElement;
    let prop;
    const TouchEventBoundary = TouchEventBoundary2.TouchEventBoundary;
    const _Object = Object;
    if (null != profilerProps) {
      prop = profilerProps.touchEventBoundaryProps;
    }
    if (null === prop) {
      prop = {};
    }
    const createElement2 = react.createElement;
    const obj2 = assign({}, prop);
    const merged = Object.assign({}, closure_2);
    const createElement3 = react.createElement;
    return (
      <TouchEventBoundary {...obj2}>
        {createElement2(
          ReactNativeProfiler,
          merged,
          createElement3(
            FeedbackWidgetProvider.FeedbackWidgetProvider,
            null,
            <displayName {...Object.assign({}, arg0)} />,
          ),
        )}
      </TouchEventBoundary>
    );
  };
};
export const nativeCrash = function nativeCrash() {
  const NATIVE = _mod877.NATIVE;
  NATIVE.nativeCrash();
};
export const flush = function flush() {
  return closure_3(this, undefined, undefined, function* () {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            c3 = 1;
            const obj6 = require("00693__.js");
            const client = obj6.getClient();
            if (client) {
              c1 = 2;
              c4 = 1;
              const obj4 = { value: client.flush(), done: false };
              return obj4;
            } else {
              c3 = 0;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c3 = 0;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        const debug = closure_128_0(closure_128_1[6]).debug;
        debug.error("Failed to flush the event queue.");
        c4 = 3;
        return { value: false, done: true };
      } catch (tmp10) {
        let closure_2 = tmp10;
        if (0 === c3) {
          c4 = 3;
          throw tmp10;
        } else {
          c1 = 1;
        }
      }
    }
  });
};
export const close = function close() {
  return closure_3(this, undefined, undefined, function* () {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp;
            c3 = 1;
            const obj2 = require("00693__.js");
            const client = obj2.getClient();
            if (client) {
              c1 = 2;
              c4 = 1;
              const obj5 = { value: client.close(), done: false };
              return obj5;
            } else {
              c3 = 0;
            }
          }
        } else if (1 === tmp4) {
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
        return { value: "IconComponent", done: null };
      } catch (tmp12) {
        let closure_2 = tmp12;
        if (0 === c3) {
          c4 = 3;
          throw tmp12;
        } else {
          c1 = 1;
        }
      }
    }
  });
};
export const withScope = function withScope(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("00693__.js");
  return obj.withScope((arg0) => {
    try {
      return closure_0(arg0);
    } catch (tmp3) {
      const debug = _mod693.debug;
      debug.error("Error while running withScope callback", tmp3);
    }
  });
};
export const crashedLastRun = function crashedLastRun() {
  return closure_3(this, undefined, undefined, function* () {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const NATIVE = require("00877__.js").NATIVE;
          c0 = 3;
          obj = { value: NATIVE.crashedLastRun(), done: true };
          return obj;
        }
      } catch (tmp5) {
        c0 = 3;
        throw tmp5;
      }
    }
  });
};
