// === Module 1052: ReactNativeClient ===

// Module 1052 (ReactNativeClient)
import react_native from "react-native" /* 17 */;
import _mod693 from "module_693" /* 693 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 873 */;
import _mod877 from "module_877" /* 877 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;
import defaultSdkInfo from "defaultSdkInfo" /* 988 */;
import react_native2 from "react-native" /* 1053 */;
import header from "header" /* 1054 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;
let _require, c0;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const Alert = react_native.Alert;
class ReactNativeClient {
  constructor(_metadata) {
    let constructResult;
    let enableLogs;
    let enableLogs2;
    let obj2;
    const self = this;
    _classCallCheck(this, ReactNativeClient);
    const ignoreRequireCycleLogs = react_native2.ignoreRequireCycleLogs;
    react_native2;
    const ReactNativeVersion = ReactNativeLibraries.ReactNativeLibraries.ReactNativeVersion;
    let version;
    if (null !== ReactNativeVersion) {
      if (undefined !== ReactNativeVersion) {
        version = ReactNativeVersion.version;
      }
    }
    let result = ignoreRequireCycleLogs(version);
    const _Object = Object;
    _metadata = _metadata._metadata;
    let sdk;
    const merged = Object.assign({}, _metadata._metadata);
    const _Object2 = Object;
    const assign2 = Object.assign;
    const _Object3 = Object;
    const assign3 = Object.assign;
    if (null !== _metadata) {
      if (undefined !== _metadata) {
        sdk = _metadata.sdk;
      }
    }
    if (!sdk) {
      sdk = defaultSdkInfo.defaultSdkInfo;
    }
    let str = "never";
    const _Object4 = Object;
    const assign4 = Object.assign;
    const assign3Result = assign3({}, sdk);
    if (_metadata.sendDefaultPii) {
      str = "auto";
    }
    const _metadata2 = _metadata._metadata;
    let sdk1;
    if (null !== _metadata2) {
      if (undefined !== _metadata2) {
        sdk1 = _metadata2.sdk;
      }
    }
    let settings;
    if (null !== sdk1) {
      if (undefined !== sdk1) {
        settings = sdk1.settings;
      }
    }
    let obj = { sdk: assign2(assign3Result, obj2) };
    obj2 = { settings: assign4({ infer_ip: str }, settings) };
    _metadata._metadata = assign(merged, obj);
    _metadata.parentSpanIsAlwaysRootSpan = undefined === _metadata.parentSpanIsAlwaysRootSpan || _metadata.parentSpanIsAlwaysRootSpan;
    ({ enableLogs: enableLogs2, enableLogs } = _metadata);
    if (enableLogs2) {
      enableLogs2 = "native" === _metadata.logsOrigin;
    }
    if (enableLogs2) {
      const debug = _mod693.debug;
      debug.log("disabling Sentry logs on JavaScript due to rule set by logsOrigin");
      _metadata.enableLogs = false;
    }
    const items = [_metadata];
    const obj3 = _getPrototypeOf(ReactNativeClient);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj3, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj3.apply(self, items);
    }
    const tmp15Result = c3(self, constructResult);
    let closure_0 = tmp15Result;
    tmp15Result._outcomesBuffer = [];
    if (true === _metadata.sendDefaultPii) {
      tmp15Result.on("beforeSendSession", _mod693.addAutoIpAddressToSession);
    }
    if (_metadata.enableLogs) {
      tmp15Result.on("flush", () => {
        const obj = ReactNativeClient(closure_2_1[10]);
        const result = obj._INTERNAL_flushLogsBuffer(_logFlushIdleTimeout);
      });
      tmp15Result.on("afterCaptureLog", () => {
        if (_logFlushIdleTimeout._logFlushIdleTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(_logFlushIdleTimeout._logFlushIdleTimeout);
        }
        _logFlushIdleTimeout._logFlushIdleTimeout = setTimeout(() => {
          const obj = closure_0(closure_2_1[10]);
          const result = obj._INTERNAL_flushLogsBuffer(closure_1_0);
        }, 5000);
      });
    }
    _metadata.enableLogs = enableLogs;
    return tmp15Result;
  }
}
_inherits(ReactNativeClient, _mod693.Client);
const entry = {
  key: "eventFromException",
  value: function eventFromException(arg0) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const obj2 = feedbackAsyncIntegration;
    return obj2.eventFromException(this._options.stackParser, arg0, obj, this._options.attachStacktrace);
  }
};
let items = [
  entry,
  {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0, arg1, arg2) {
      const obj = feedbackAsyncIntegration;
      return obj.eventFromMessage(this._options.stackParser, arg0, arg1, arg2, this._options.attachStacktrace);
    }
  },
  {
    key: "nativeCrash",
    value: function nativeCrash() {
      const NATIVE = _mod877.NATIVE;
      NATIVE.nativeCrash();
    }
  },
  {
    key: "close",
    value: function close() {
      const self = this;
      let fn = _get(_getPrototypeOf(ReactNativeClient.prototype), "close", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const fnResult = fn([]);
      return fnResult.then((result) => {
        let closure_0 = result;
        const NATIVE = ReactNativeClient(closure_1_1[12]).NATIVE;
        const closeNativeSdkResult = NATIVE.closeNativeSdk();
        return closeNativeSdkResult.then(() => closure_0);
      });
    }
  },
  {
    key: "captureUserFeedback",
    value: function captureUserFeedback(event_id) {
      const obj = header;
      const obj2 = { metadata: this._options._metadata, dsn: this.getDsn(), tunnel: "Array" };
      this.sendEnvelope(obj.createUserFeedbackEnvelope(event_id, obj2));
    }
  },
  {
    key: "sendEnvelope",
    value: function sendEnvelope(arg0) {
      const self = this;
      const _clearOutcomesResult = this._clearOutcomes();
      const obj = require("mergeOutcomes");
      this._outcomesBuffer = obj.mergeOutcomes(this._outcomesBuffer, _clearOutcomesResult);
      const tmp2 = _require;
      if (this._options.sendClientReports) {
        const result = self._attachClientReportTo(self._outcomesBuffer, arg0);
      }
      _require = true;
      if (self._isEnabled()) {
        if (self._transport) {
          if (self._dsn) {
            self.emit("beforeEnvelope", arg0);
            const _transport = self._transport;
            const sendResult = _transport.send(arg0);
            sendResult.then(null, (arg0) => {
              if (arg0 instanceof _mod693.SentryError) {
                c0 = false;
                const debug2 = _mod693.debug;
                debug2.error("SentryError while sending event, keeping outcomes buffer:", arg0);
              } else {
                const debug = _mod693.debug;
                debug.error("Error while sending event:", arg0);
              }
            });
          }
          const tmp9 = _require;
          if (tmp9) {
            self._outcomesBuffer = [];
          }
          return Promise.resolve({});
        }
      }
      let debug = tmp2(693).debug;
      debug.error("Transport disabled");
    }
  },
  {
    key: "init",
    value: function init() {
      const self = this;
      let fn = _get(_getPrototypeOf(ReactNativeClient.prototype), "init", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
      self._initNativeSdk();
    }
  },
  {
    key: "on",
    value: function on(arg0, arg1) {
      const self = this;
      let fn = _get(_getPrototypeOf(ReactNativeClient.prototype), "on", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1];
      return fn(items);
    }
  },
  {
    key: "emit",
    value: function emit(arg0) {
      const substr = [...arguments].slice();
      const self = this;
      let fn = _get(_getPrototypeOf(ReactNativeClient.prototype), "emit", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, ...substr];
      fn(items);
    }
  },
  {
    key: "_initNativeSdk",
    value: function _initNativeSdk() {
      let obj2;
      let options;
      let prop;
      let str;
      const self = this;
      let tmp = self;
      const NATIVE = self(877).NATIVE;
      const initNativeSdk = NATIVE.initNativeSdk;
      const _Object = Object;
      const obj = { defaultSidecarUrl: obj2.getDefaultSidecarUrl(), devServerUrl: str, mobileReplayOptions: options, androidProfilingOptions: prop };
      const merged = Object.assign({}, this._options);
      obj2 = self(1004);
      const obj3 = self(690);
      const devServer = obj3.getDevServer();
      str = undefined;
      if (null !== devServer) {
        if (undefined !== devServer) {
          str = devServer.url;
        }
      }
      if (!str) {
        str = "";
      }
      options = undefined;
      if (self._integrations[tmp(undefined, 1005).MOBILE_REPLAY_INTEGRATION_NAME]) {
        if ("options" in self._integrations[tmp(undefined, 1005).MOBILE_REPLAY_INTEGRATION_NAME]) {
          options = self._integrations[tmp(undefined, 1005).MOBILE_REPLAY_INTEGRATION_NAME].options;
        }
      }
      const _experiments = self._options._experiments;
      prop = undefined;
      if (null !== _experiments) {
        if (undefined !== _experiments) {
          prop = _experiments.androidProfilingOptions;
        }
      }
      const nativeSdk = initNativeSdk(assign(merged, obj));
      const nextPromise = nativeSdk.then((result) => result, () => {
        const result = self._showCannotConnectDialog();
        return false;
      });
      const nextPromise1 = nextPromise.then((didCallNativeInit) => {
        const _options = self._options;
        const onReady = _options.onReady;
        const tmp = null === onReady || undefined === onReady;
        if (!tmp) {
          const obj2 = { didCallNativeInit };
          onReady.call(_options, obj2);
        }
        self.emit("afterInit");
      });
      nextPromise1.then(undefined, (arg0) => {
        const debug = self(dependencyMap[10]).debug;
        debug.error("The OnReady callback threw an error: ", arg0);
      });
    }
  },
  {
    key: "_showCannotConnectDialog",
    value: function _showCannotConnectDialog() {

    }
  },
  {
    key: "_attachClientReportTo",
    value: function _attachClientReportTo(_outcomesBuffer, arg1) {
      let obj2;
      if (_outcomesBuffer.length > 0) {
        const items = [{ type: "client_report" }, ];
        const obj = { timestamp: obj2.dateTimestampInSeconds(), discarded_events: _outcomesBuffer };
        items[1] = obj;
        obj2 = _mod693;
        const arr2 = arg1[header.items];
        arr2.push(items);
      }
    }
  }
];
const ReactNativeClient_export = _createClass(ReactNativeClient, items);

export { ReactNativeClient_export as ReactNativeClient };