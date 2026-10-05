// _runtime/00906_BrowserClient.js
import _mod693 from "metro/00693__.js";
import _mod904 from "metro/00904__.js";
import eventFromException2 from "00907_eventFromException.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _get from "metro/00096__get.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class BrowserClient {
  constructor(arg0) {
    let _experiments;
    let constructResult;
    let enableMetrics;
    let id;
    let sendDefaultPii;
    const self = this;
    _classCallCheck(this, BrowserClient);
    if (typeof globalThis.__SENTRY_RELEASE__ === "string") {
      id = globalThis.__SENTRY_RELEASE__;
    } else {
      const SENTRY_RELEASE = _mod904.WINDOW.SENTRY_RELEASE;
      if (SENTRY_RELEASE != null) {
        id = SENTRY_RELEASE.id;
      }
    }
    const obj = { release: id, sendClientReports: true, parentSpanIsAlwaysRootSpan: true };
    const merged = Object.assign(arg0);
    let SENTRY_SDK_SOURCE = _mod904.WINDOW.SENTRY_SDK_SOURCE;
    if (!SENTRY_SDK_SOURCE) {
      const tmp4Result = _mod693;
      SENTRY_SDK_SOURCE = tmp4Result.getSDKSource();
    }
    const tmp4Result2 = _mod693;
    tmp4Result2.applySdkMetadata(obj, "browser", ["browser"], SENTRY_SDK_SOURCE);
    const _metadata = obj._metadata;
    let sdk1;
    if (_metadata != null) {
      sdk1 = _metadata.sdk;
    }
    if (sdk1) {
      let str = "never";
      const sdk = obj._metadata.sdk;
      if (obj.sendDefaultPii) {
        str = "auto";
      }
      const obj2 = { infer_ip: str };
      const merged1 = Object.assign(obj._metadata.sdk.settings);
      sdk.settings = obj2;
    }
    const items = [obj];
    const obj5 = _getPrototypeOf(BrowserClient);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj5, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj5.apply(self, items);
    }
    const tmp11Result = c3(self, constructResult);
    let closure_0 = tmp11Result;
    const _options = tmp11Result._options;
    let sendClientReports = _options.sendClientReports;
    const enableLogs = _options.enableLogs;
    ({ _experiments, enableMetrics, sendDefaultPii } = _options);
    if (enableMetrics == null) {
      let enableMetrics1;
      if (_experiments != null) {
        enableMetrics1 = _experiments.enableMetrics;
      }
      enableMetrics = enableMetrics1;
    }
    if (enableMetrics == null) {
      enableMetrics = true;
    }
    let _document = _mod904.WINDOW.document;
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
      const _document2 = _mod904.WINDOW.document;
      const listener = _document2.addEventListener("visibilitychange", () => {
        if ("hidden" === BrowserClient(closure_2_1[6]).WINDOW.document.visibilityState) {
          if (sendClientReports) {
            closure_0._flushOutcomes();
          }
          if (enableLogs) {
            const tmpResult = BrowserClient(closure_2_1[7]);
            const result = tmpResult._INTERNAL_flushLogsBuffer(closure_0);
          }
          if (enableMetrics) {
            const tmpResult2 = BrowserClient(closure_2_1[7]);
            const result1 = tmpResult2._INTERNAL_flushMetricsBuffer(closure_0);
          }
        }
      });
    }
    if (sendDefaultPii) {
      tmp11Result.on("beforeSendSession", _mod693.addAutoIpAddressToSession);
    }
    return tmp11Result;
  }
}
_inherits(BrowserClient, _mod693.Client);
const entry = {
  key: "eventFromException",
  value: function eventFromException(arg0, syntheticException) {
    const obj = eventFromException2;
    return obj.eventFromException(this._options.stackParser, arg0, syntheticException, this._options.attachStacktrace);
  },
};
let items = [
  entry,
  {
    key: "eventFromMessage",
    value: function eventFromMessage(value) {
      let str = info;
      if (info === undefined) {
        str = "info";
      }
      const obj = eventFromException2;
      return obj.eventFromMessage(
        this._options.stackParser,
        value,
        str,
        syntheticException,
        this._options.attachStacktrace,
      );
    },
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(platform, arg1, arg2, arg3) {
      const tmp = platform.platform || "javascript";
      platform.platform = tmp;
      const self = this;
      let fn = _get(_getPrototypeOf(BrowserClient.prototype), "_prepareEvent", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [platform, arg1, arg2, arg3];
      return fn(items);
    },
  },
];
const BrowserClient_export = _createClass(BrowserClient, items);

export { BrowserClient_export as BrowserClient };
export const applyDefaultOptions = function applyDefaultOptions(arg0) {
  let id;
  if (typeof globalThis.__SENTRY_RELEASE__ === "string") {
    id = globalThis.__SENTRY_RELEASE__;
  } else {
    const SENTRY_RELEASE = _mod904.WINDOW.SENTRY_RELEASE;
    if (SENTRY_RELEASE != null) {
      id = SENTRY_RELEASE.id;
    }
  }
  const obj = { release: id, sendClientReports: true, parentSpanIsAlwaysRootSpan: true };
  const merged = Object.assign(arg0);
  return obj;
};
