// === Module 895: ? ===

// Module 895
import _mod682 from "module_682" /* 682 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class BrowserClient {
  constructor(arg0) {
    self = this;
    tmp = BrowserClient;
    tmp2 = c2(this, BrowserClient);
    if (typeof globalThis.__SENTRY_RELEASE__ === "string") {
      id = globalThis.__SENTRY_RELEASE__;
    } else {
      tmp16 = closure_0;
      tmp17 = closure_1;
      SENTRY_RELEASE = closure_0(closure_1[6]).WINDOW.SENTRY_RELEASE;
      tmp18 = null;
      if (SENTRY_RELEASE != null) {
        id = SENTRY_RELEASE.id;
      }
    }
    obj = { release: id, sendClientReports: true, parentSpanIsAlwaysRootSpan: true };
    merged = Object.assign(global);
    tmp4 = closure_0;
    tmp5 = closure_1;
    SENTRY_SDK_SOURCE = closure_0(closure_1[6]).WINDOW.SENTRY_SDK_SOURCE;
    if (!SENTRY_SDK_SOURCE) {
      tmp4Result = tmp4(tmp5[7]);
      SENTRY_SDK_SOURCE = tmp4Result.getSDKSource();
    }
    tmp4Result1 = tmp4(tmp5[7]);
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
      obj.infer_ip = str;
      tmp8 = obj;
      merged1 = Object.assign(obj._metadata.sdk.settings);
      obj._metadata.sdk.settings = obj;
    }
    items = [];
    items[0] = obj;
    tmp10 = closure_4;
    obj5 = closure_4(tmp);
    tmp11 = closure_3;
    if (metroRequire()) {
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj5, items, tmp10(self).constructor);
    } else {
      constructResult = obj5.apply(self, items);
    }
    tmp11Result = tmp11(self, constructResult);
    closure_0 = tmp11Result;
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
    _document = tmp4(tmp5[6]).WINDOW.document;
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
      _document2 = tmp4(tmp5[6]).WINDOW.document;
      str2 = "visibilitychange";
      listener = _document2.addEventListener("visibilitychange", () => {
        if ("hidden" === BrowserClient(893).WINDOW.document.visibilityState) {
          if (sendClientReports) {
            closure_0._flushOutcomes();
          }
          if (enableLogs) {
            let tmpResult = BrowserClient(682);
            const result = tmpResult._INTERNAL_flushLogsBuffer(closure_0);
          }
          if (enableMetrics) {
            tmpResult = BrowserClient(682);
            const result1 = tmpResult._INTERNAL_flushMetricsBuffer(closure_0);
          }
        }
      });
    }
    if (sendDefaultPii) {
      str3 = "beforeSendSession";
      onResult = tmp11Result.on("beforeSendSession", tmp4(tmp5[7]).addAutoIpAddressToSession);
    }
    return tmp11Result;
  }
}
_inherits(BrowserClient, _mod682.Client);
const entry = {
  key: "eventFromException",
  value: function eventFromException(arg0, arg1) {
    return BrowserClient(896).eventFromException(this._options.stackParser, arg0, arg1, this._options.attachStacktrace);
  }
};
let items = [
  entry,
  {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0) {
      let str = arg1;
      if (arg1 === undefined) {
        str = "info";
      }
      return BrowserClient(896).eventFromMessage(this._options.stackParser, arg0, str, arg2, this._options.attachStacktrace);
    }
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(platform, arg1, arg2, arg3) {
      platform.platform = platform.platform || "javascript";
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(BrowserClient.prototype), "_prepareEvent", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [platform, arg1, arg2, arg3];
      return fn(items);
    }
  }
];

export const BrowserClient = _createClass(BrowserClient, items);
export const applyDefaultOptions = function applyDefaultOptions(arg0) {
  if (typeof globalThis.__SENTRY_RELEASE__ === "string") {
    let id = globalThis.__SENTRY_RELEASE__;
  } else {
    const SENTRY_RELEASE = BrowserClient(893).WINDOW.SENTRY_RELEASE;
    if (SENTRY_RELEASE != null) {
      id = SENTRY_RELEASE.id;
    }
  }
  const merged = Object.assign(arg0);
  return { release: id, sendClientReports: true, parentSpanIsAlwaysRootSpan: true };
};