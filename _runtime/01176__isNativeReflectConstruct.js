// _runtime/01176__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";
import { Alert } from "mobileReplayIntegrationNoop";

let ReactNativeClient = arg1;
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
class ReactNativeClient {
  constructor(arg0) {
    self = this;
    tmp = apply;
    tmp2 = _isNativeReflectConstruct(this, apply);
    tmp3 = ReactNativeClient;
    tmp4 = closure_1;
    obj = require("ignoreRequireCycleLogs");
    ReactNativeVersion = require("TurboModuleRegistry").ReactNativeLibraries.ReactNativeVersion;
    version = undefined;
    if (null !== ReactNativeVersion) {
      if (undefined !== ReactNativeVersion) {
        version = ReactNativeVersion.version;
      }
    }
    result = obj.ignoreRequireCycleLogs(version);
    _metadata = global._metadata;
    sdk = undefined;
    merged = Object.assign({}, global._metadata);
    if (null !== _metadata) {
      if (undefined !== _metadata) {
        sdk = _metadata.sdk;
      }
    }
    if (!sdk) {
      sdk = require("items").defaultSdkInfo;
    }
    str = "never";
    merged1 = Object.assign({}, sdk);
    if (global.sendDefaultPii) {
      str = "auto";
    }
    _metadata2 = global._metadata;
    sdk1 = undefined;
    if (null !== _metadata2) {
      if (undefined !== _metadata2) {
        sdk1 = _metadata2.sdk;
      }
    }
    settings = undefined;
    if (null !== sdk1) {
      if (undefined !== sdk1) {
        settings = sdk1.settings;
      }
    }
    obj = { sdk: null };
    obj1 = { settings: Object.assign({ infer_ip: str }, settings) };
    obj[0] = Object.assign(merged1, obj1);
    global._metadata = Object.assign(merged, obj);
    global.parentSpanIsAlwaysRootSpan = undefined === global.parentSpanIsAlwaysRootSpan || global.parentSpanIsAlwaysRootSpan;
    ({ enableLogs: enableLogs2, enableLogs } = global);
    if (enableLogs2) {
      str2 = "native";
      enableLogs2 = "native" === global.logsOrigin;
    }
    if (enableLogs2) {
      debug = require("registerSpanErrorInstrumentation").debug;
      str3 = "disabling Sentry logs on JavaScript due to rule set by logsOrigin";
      logResult = debug.log("disabling Sentry logs on JavaScript due to rule set by logsOrigin");
      flag = false;
      global.enableLogs = false;
    }
    items = [];
    items[0] = global;
    tmp13 = __esModule;
    obj4 = __esModule(tmp);
    tmp14 = __esModule;
    if (_isNativeReflectConstruct()) {
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj4, items, tmp13(self).constructor);
    } else {
      constructResult = obj4.apply(self, items);
    }
    tmp14Result = tmp14(self, constructResult);
    apply = tmp14Result;
    tmp14Result._outcomesBuffer = [];
    if (true === global.sendDefaultPii) {
      str4 = "beforeSendSession";
      onResult = tmp14Result.on("beforeSendSession", require("registerSpanErrorInstrumentation").addAutoIpAddressToSession);
    }
    if (global.enableLogs) {
      str5 = "flush";
      onResult1 = tmp14Result.on("flush", () => {
        const result = tmp14Result(outer1_1[10])._INTERNAL_flushLogsBuffer(tmp14Result);
      });
      str6 = "afterCaptureLog";
      onResult2 = tmp14Result.on("afterCaptureLog", () => {
        if (tmp14Result._logFlushIdleTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp._logFlushIdleTimeout);
        }
        tmp14Result._logFlushIdleTimeout = setTimeout(() => {
          const result = outer1_0(outer1_1[10])._INTERNAL_flushLogsBuffer(closure_0);
        }, 5000);
      });
    }
    global.enableLogs = enableLogs;
    return tmp14Result;
  }
}
require("_inherits")(ReactNativeClient, require("registerSpanErrorInstrumentation").Client);
let items = [
  {
    key: "eventFromException",
    value: function eventFromException(arg0) {
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      return ReactNativeClient(1024).eventFromException(this._options.stackParser, arg0, obj, this._options.attachStacktrace);
    }
  },
  {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0, arg1, arg2) {
      return ReactNativeClient(1024).eventFromMessage(this._options.stackParser, arg0, arg1, arg2, this._options.attachStacktrace);
    }
  },
  {
    key: "nativeCrash",
    value: function nativeCrash() {
      const NATIVE = ReactNativeClient(1001).NATIVE;
      NATIVE.nativeCrash();
    }
  },
  {
    key: "close",
    value: function close() {
      const self = this;
      let fn = callback3(callback2(self.prototype), "close", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      return fn([]).then((arg0) => {
        const _self = arg0;
        const NATIVE = _self(fn[12]).NATIVE;
        return NATIVE.closeNativeSdk().then(() => closure_0);
      });
    }
  },
  {
    key: "captureUserFeedback",
    value: function captureUserFeedback(arg0) {
      let obj = ReactNativeClient(1178);
      obj = { metadata: this._options._metadata, dsn: this.getDsn(), tunnel: "disabled" };
      this.sendEnvelope(obj.createUserFeedbackEnvelope(arg0, obj));
    }
  },
  {
    key: "sendEnvelope",
    value: function sendEnvelope(arg0) {
      const self = this;
      const _clearOutcomesResult = this._clearOutcomes();
      const tmp2 = ReactNativeClient;
      this._outcomesBuffer = ReactNativeClient(1179).mergeOutcomes(this._outcomesBuffer, _clearOutcomesResult);
      if (this._options.sendClientReports) {
        const result = self._attachClientReportTo(self._outcomesBuffer, arg0);
      }
      ReactNativeClient = true;
      if (self._isEnabled()) {
        if (self._transport) {
          if (self._dsn) {
            self.emit("beforeEnvelope", arg0);
            const _transport = self._transport;
            _transport.send(arg0).then(null, (arg0) => {
              if (arg0 instanceof _true(outer1_1[10]).SentryError) {
                _true = false;
                const debug2 = tmp(tmp2[10]).debug;
                debug2.error("SentryError while sending event, keeping outcomes buffer:", arg0);
              } else {
                const debug = tmp(tmp2[10]).debug;
                debug.error("Error while sending event:", arg0);
              }
            });
            const sendResult = _transport.send(arg0);
          }
          if (ReactNativeClient) {
            self._outcomesBuffer = [];
          }
          return Promise.resolve({});
        }
      }
      let debug = tmp2(817).debug;
      debug.error("Transport disabled");
    }
  },
  {
    key: "init",
    value: function init() {
      let self = this;
      self = this;
      let fn = callback3(callback2(self.prototype), "init", this);
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
      let fn = callback3(callback2(self.prototype), "on", this);
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
      let fn;
      fn = callback3(callback2(self.prototype), "emit", this);
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
      let self = this;
      self = this;
      const NATIVE = self(1001).NATIVE;
      let obj = { defaultSidecarUrl: null, devServerUrl: null, mobileReplayOptions: null, androidProfilingOptions: null };
      const merged = Object.assign({}, this._options);
      obj[0] = self(1128).getDefaultSidecarUrl();
      const obj2 = self(1128);
      const devServer = self(814).getDevServer();
      let str;
      if (null !== devServer) {
        if (undefined !== devServer) {
          str = devServer.url;
        }
      }
      if (!str) {
        str = "";
      }
      obj[1] = str;
      let options;
      if (self._integrations[self(undefined, 1129).MOBILE_REPLAY_INTEGRATION_NAME]) {
        if ("options" in self._integrations[tmp(undefined, 1129).MOBILE_REPLAY_INTEGRATION_NAME]) {
          options = self._integrations[tmp(undefined, 1129).MOBILE_REPLAY_INTEGRATION_NAME].options;
        }
      }
      obj[2] = options;
      const _experiments = self._options._experiments;
      let prop;
      if (null !== _experiments) {
        if (undefined !== _experiments) {
          prop = _experiments.androidProfilingOptions;
        }
      }
      obj[3] = prop;
      const nativeSdk = NATIVE.initNativeSdk(Object.assign(merged, obj));
      const obj3 = self(814);
      const nextPromise = nativeSdk.then((arg0) => arg0, () => {
        const result = self._showCannotConnectDialog();
        return false;
      });
      nativeSdk.then((arg0) => arg0, () => {
        const result = self._showCannotConnectDialog();
        return false;
      }).then((arg0) => {
        let obj = self;
        const _options = self._options;
        const onReady = _options.onReady;
        let tmp = null === onReady;
        if (!tmp) {
          tmp = undefined === onReady;
        }
        if (!tmp) {
          const call = onReady.call;
          obj = { didCallNativeInit: null };
          obj[0] = arg0;
          if (typeof call === "unknown") {
            onReady(obj);
          } else {
            call(_options, obj);
          }
        }
        obj.emit("afterInit");
      }).then(undefined, (arg0) => {
        const debug = self(table[10]).debug;
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
      if (_outcomesBuffer.length > 0) {
        const items = [{ type: "client_report" }, ];
        const obj = { timestamp: null, discarded_events: null };
        obj[0] = ReactNativeClient(817).dateTimestampInSeconds();
        obj[1] = _outcomesBuffer;
        items[1] = obj;
        const obj2 = ReactNativeClient(817);
        arg1[ReactNativeClient(undefined, 1178).items].push(items);
        const arr2 = arg1[ReactNativeClient(undefined, 1178).items];
      }
    }
  }
];

export const ReactNativeClient = importDefaultResult(ReactNativeClient, items);