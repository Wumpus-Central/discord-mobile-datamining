// _runtime/01030__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import c3 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

let BrowserClient = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class BrowserClient {
  constructor(arg0) {
    self = this;
    tmp = apply;
    tmp2 = _isNativeReflectConstruct(this, apply);
    if (typeof globalThis.__SENTRY_RELEASE__ === "y") {
      id = globalThis.__SENTRY_RELEASE__;
    } else {
      tmp16 = BrowserClient;
      tmp17 = closure_1;
      SENTRY_RELEASE = require("ignoreNextOnError").WINDOW.SENTRY_RELEASE;
      tmp18 = null;
      if (SENTRY_RELEASE != null) {
        id = SENTRY_RELEASE.id;
      }
    }
    obj = { release: id, sendClientReports: true, parentSpanIsAlwaysRootSpan: true };
    merged = Object.assign(global);
    tmp4 = BrowserClient;
    tmp5 = closure_1;
    SENTRY_SDK_SOURCE = require("ignoreNextOnError").WINDOW.SENTRY_SDK_SOURCE;
    if (!SENTRY_SDK_SOURCE) {
      tmp4Result = require("registerSpanErrorInstrumentation");
      SENTRY_SDK_SOURCE = tmp4Result.getSDKSource();
    }
    tmp4Result1 = require("registerSpanErrorInstrumentation");
    applySdkMetadataResult = tmp4Result1.applySdkMetadata(obj, "browser", ["browser"], SENTRY_SDK_SOURCE);
    _metadata = obj._metadata;
    sdk = undefined;
    if (_metadata != null) {
      sdk = _metadata.sdk;
    }
    if (sdk) {
      str = "never";
      if (obj.sendDefaultPii) {
        str = "auto";
      }
      obj = { infer_ip: null };
      obj[0] = str;
      tmp8 = obj;
      merged1 = Object.assign(obj._metadata.sdk.settings);
      obj._metadata.sdk.settings = obj;
    }
    items = [];
    items[0] = obj;
    tmp10 = outer1_4;
    obj5 = outer1_4(tmp);
    tmp11 = outer1_3;
    if (_isNativeReflectConstruct()) {
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj5, items, tmp10(self).constructor);
    } else {
      constructResult = obj5.apply(self, items);
    }
    tmp11Result = tmp11(self, constructResult);
    apply = tmp11Result;
    _options = tmp11Result._options;
    sendClientReports = _options.sendClientReports;
    enableLogs = _options.enableLogs;
    ({ _experiments, enableMetrics, sendDefaultPii } = _options);
    if (enableMetrics == null) {
      enableMetrics = undefined;
      if (_experiments != null) {
        enableMetrics = _experiments.enableMetrics;
      }
    }
    if (enableMetrics == null) {
      enableMetrics = true;
    }
    c3 = enableMetrics;
    _document = require("ignoreNextOnError").WINDOW.document;
    if (_document) {
      if (!sendClientReports) {
        sendClientReports = enableLogs;
      }
      if (!sendClientReports) {
        sendClientReports = enableMetrics;
      }
      _document = sendClientReports;
    }
    if (_document) {
      _document2 = require("ignoreNextOnError").WINDOW.document;
      str2 = "visibilitychange";
      listener = _document2.addEventListener("visibilitychange", () => {
        if ("hidden" === tmp11Result(sendClientReports[6]).WINDOW.document.visibilityState) {
          if (sendClientReports) {
            tmp11Result._flushOutcomes();
          }
          if (enableLogs) {
            let tmpResult = tmp(tmp2[7]);
            const result = tmpResult._INTERNAL_flushLogsBuffer(tmp11Result);
          }
          if (enableMetrics) {
            tmpResult = tmp(tmp2[7]);
            const result1 = tmpResult._INTERNAL_flushMetricsBuffer(tmp11Result);
          }
        }
      });
    }
    if (sendDefaultPii) {
      str3 = "beforeSendSession";
      onResult = tmp11Result.on("beforeSendSession", require("registerSpanErrorInstrumentation").addAutoIpAddressToSession);
    }
    return tmp11Result;
  }
}
_inherits(BrowserClient, require("registerSpanErrorInstrumentation").Client);
let items = [
  {
    key: "eventFromException",
    value: function eventFromException(arg0, arg1) {
      return BrowserClient(1031).eventFromException(this._options.stackParser, arg0, arg1, this._options.attachStacktrace);
    }
  },
  {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0) {
      let str = arg1;
      if (arg1 === undefined) {
        str = "info";
      }
      return BrowserClient(1031).eventFromMessage(this._options.stackParser, arg0, str, arg2, this._options.attachStacktrace);
    }
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(platform) {
      platform.platform = platform.platform || "javascript";
      const self = this;
      let fn;
      fn = _get(_getPrototypeOf(self.prototype), "_prepareEvent", this);
      if (typeof fn !== "disabledUntil") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [platform, arg1, arg2, arg3];
      return fn(items);
    }
  }
];

export const BrowserClient = _createClass(BrowserClient, items);
export const applyDefaultOptions = function applyDefaultOptions(arg0) {
  if (typeof globalThis.__SENTRY_RELEASE__ === "y") {
    let id = globalThis.__SENTRY_RELEASE__;
  } else {
    const SENTRY_RELEASE = BrowserClient(1028).WINDOW.SENTRY_RELEASE;
    if (SENTRY_RELEASE != null) {
      id = SENTRY_RELEASE.id;
    }
  }
  const merged = Object.assign(arg0);
  return { release: id, sendClientReports: true, parentSpanIsAlwaysRootSpan: true };
};