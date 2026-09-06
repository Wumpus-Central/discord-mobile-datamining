// _runtime/metro/01041__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

let ReactNativeClient = fn;
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
  } catch (err) {}
}
const Alert = fn(17).Alert;
class ReactNativeClient {
  constructor(arg0) {
    self = this;
    tmp = ReactNativeClient;
    tmp2 = c2(this, ReactNativeClient);
    tmp3 = closure_0;
    tmp4 = closure_1;
    obj = closure_0(closure_1[7]);
    ReactNativeVersion = closure_0(closure_1[8]).ReactNativeLibraries.ReactNativeVersion;
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
      sdk = tmp3(tmp4[9]).defaultSdkInfo;
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
    obj.sdk = Object.assign(merged1, obj1);
    global._metadata = Object.assign(merged, obj);
    global.parentSpanIsAlwaysRootSpan =
      undefined === global.parentSpanIsAlwaysRootSpan || global.parentSpanIsAlwaysRootSpan;
    ({ enableLogs: enableLogs2, enableLogs } = global);
    if (enableLogs2) {
      str2 = "native";
      enableLogs2 = "native" === global.logsOrigin;
    }
    if (enableLogs2) {
      debug = tmp3(tmp4[10]).debug;
      str3 = "disabling Sentry logs on JavaScript due to rule set by logsOrigin";
      logResult = debug.log("disabling Sentry logs on JavaScript due to rule set by logsOrigin");
      flag = false;
      global.enableLogs = false;
    }
    items = [];
    items[0] = global;
    tmp13 = closure_4;
    obj4 = closure_4(tmp);
    tmp14 = closure_3;
    if (metroRequire()) {
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj4, items, tmp13(self).constructor);
    } else {
      constructResult = obj4.apply(self, items);
    }
    tmp14Result = tmp14(self, constructResult);
    closure_0 = tmp14Result;
    tmp14Result._outcomesBuffer = [];
    if (true === global.sendDefaultPii) {
      str4 = "beforeSendSession";
      onResult = tmp14Result.on("beforeSendSession", tmp3(tmp4[10]).addAutoIpAddressToSession);
    }
    if (global.enableLogs) {
      str5 = "flush";
      onResult1 = tmp14Result.on("flush", () => {
        const result = ReactNativeClient(682)._INTERNAL_flushLogsBuffer(closure_0);
      });
      str6 = "afterCaptureLog";
      onResult2 = tmp14Result.on("afterCaptureLog", () => {
        if (_logFlushIdleTimeout._logFlushIdleTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(_logFlushIdleTimeout._logFlushIdleTimeout);
        }
        _logFlushIdleTimeout._logFlushIdleTimeout = setTimeout(() => {
          const result = closure_0(dependencyMap[10])._INTERNAL_flushLogsBuffer(_logFlushIdleTimeout);
        }, 5000);
      });
    }
    global.enableLogs = enableLogs;
    return tmp14Result;
  }
}
_inherits(ReactNativeClient, fn(682).Client);
const entry = {
  key: "eventFromException",
  value: function eventFromException(arg0) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    return ReactNativeClient(889).eventFromException(
      this._options.stackParser,
      arg0,
      obj,
      this._options.attachStacktrace,
    );
  },
};
let items = [
  entry,
  {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0, arg1, arg2) {
      return ReactNativeClient(889).eventFromMessage(
        this._options.stackParser,
        arg0,
        arg1,
        arg2,
        this._options.attachStacktrace,
      );
    },
  },
  {
    key: "nativeCrash",
    value: function nativeCrash() {
      const NATIVE = ReactNativeClient(866).NATIVE;
      NATIVE.nativeCrash();
    },
  },
  {
    key: "close",
    value: function close() {
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(ReactNativeClient.prototype), "close", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      return fn([]).then((result) => {
        closure_0 = result;
        const NATIVE = self(fn[12]).NATIVE;
        return NATIVE.closeNativeSdk().then(() => closure_0);
      });
    },
  },
  {
    key: "captureUserFeedback",
    value: function captureUserFeedback(arg0) {
      ReactNativeClient(1043);
      const obj = { metadata: this._options._metadata, dsn: this.getDsn(), tunnel: "Array" };
      this.sendEnvelope(obj.createUserFeedbackEnvelope(arg0, obj));
    },
  },
  {
    key: "sendEnvelope",
    value: function sendEnvelope(arg0) {
      const self = this;
      const _clearOutcomesResult = this._clearOutcomes();
      const tmp2 = ReactNativeClient;
      this._outcomesBuffer = ReactNativeClient(1044).mergeOutcomes(this._outcomesBuffer, _clearOutcomesResult);
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
              if (arg0 instanceof ReactNativeClient(682).SentryError) {
                c0 = false;
                const debug2 = ReactNativeClient(682).debug;
                debug2.error("SentryError while sending event, keeping outcomes buffer:", arg0);
              } else {
                const debug = ReactNativeClient(682).debug;
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
      let debug = tmp2(682).debug;
      debug.error("Transport disabled");
      const obj = ReactNativeClient(1044);
    },
  },
  {
    key: "init",
    value: function init() {
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(ReactNativeClient.prototype), "init", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
      self._initNativeSdk();
    },
  },
  {
    key: "on",
    value: function on(arg0, arg1) {
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(ReactNativeClient.prototype), "on", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1];
      return fn(items);
    },
  },
  {
    key: "emit",
    value: function emit(arg0) {
      const substr = [...arguments].slice();
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(ReactNativeClient.prototype), "emit", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, ...substr];
      fn(items);
    },
  },
  {
    key: "_initNativeSdk",
    value: function _initNativeSdk() {
      const self = this;
      const NATIVE = self(866).NATIVE;
      let obj = {
        defaultSidecarUrl: null,
        devServerUrl: null,
        mobileReplayOptions: null,
        androidProfilingOptions: null,
      };
      const merged = Object.assign({}, this._options);
      obj.defaultSidecarUrl = self(993).getDefaultSidecarUrl();
      const obj2 = self(993);
      const devServer = self(679).getDevServer();
      let str;
      if (null !== devServer) {
        if (undefined !== devServer) {
          str = devServer.url;
        }
      }
      if (!str) {
        str = "";
      }
      obj.devServerUrl = str;
      let options;
      if (self._integrations[self(undefined, 994).MOBILE_REPLAY_INTEGRATION_NAME]) {
        if ("options" in self._integrations[tmp(undefined, 994).MOBILE_REPLAY_INTEGRATION_NAME]) {
          options = self._integrations[tmp(undefined, 994).MOBILE_REPLAY_INTEGRATION_NAME].options;
        }
      }
      obj.mobileReplayOptions = options;
      const _experiments = self._options._experiments;
      let prop;
      if (null !== _experiments) {
        if (undefined !== _experiments) {
          prop = _experiments.androidProfilingOptions;
        }
      }
      obj.androidProfilingOptions = prop;
      const nativeSdk = NATIVE.initNativeSdk(Object.assign(merged, obj));
      const obj3 = self(679);
      const nextPromise = nativeSdk.then(
        (result) => result,
        () => {
          const result = self._showCannotConnectDialog();
          return false;
        },
      );
      nativeSdk
        .then(
          (result) => result,
          () => {
            const result = self._showCannotConnectDialog();
            return false;
          },
        )
        .then((didCallNativeInit) => {
          let obj = self;
          const _options = self._options;
          const onReady = _options.onReady;
          let tmp = null === onReady;
          if (!tmp) {
            tmp = undefined === onReady;
          }
          if (!tmp) {
            const call = onReady.call;
            obj = { didCallNativeInit };
            if (typeof call === "unknown") {
              onReady(obj);
            } else {
              call(_options, obj);
            }
          }
          obj.emit("afterInit");
        })
        .then(undefined, (arg0) => {
          const debug = self(dependencyMap[10]).debug;
          debug.error("The OnReady callback threw an error: ", arg0);
        });
      const nextPromise1 = nativeSdk
        .then(
          (result) => result,
          () => {
            const result = self._showCannotConnectDialog();
            return false;
          },
        )
        .then((didCallNativeInit) => {
          let obj = self;
          const _options = self._options;
          const onReady = _options.onReady;
          let tmp = null === onReady;
          if (!tmp) {
            tmp = undefined === onReady;
          }
          if (!tmp) {
            const call = onReady.call;
            obj = { didCallNativeInit };
            if (typeof call === "unknown") {
              onReady(obj);
            } else {
              call(_options, obj);
            }
          }
          obj.emit("afterInit");
        });
    },
  },
  {
    key: "_showCannotConnectDialog",
    value: function _showCannotConnectDialog() {},
  },
  {
    key: "_attachClientReportTo",
    value: function _attachClientReportTo(_outcomesBuffer, arg1) {
      if (_outcomesBuffer.length > 0) {
        const items = [{ type: "client_report" }];
        const obj = { timestamp: ReactNativeClient(682).dateTimestampInSeconds(), discarded_events: _outcomesBuffer };
        items[1] = obj;
        const obj2 = ReactNativeClient(682);
        arg1[ReactNativeClient(undefined, 1043).items].push(items);
        const arr2 = arg1[ReactNativeClient(undefined, 1043).items];
      }
    },
  },
];

export const ReactNativeClient = _createClass(ReactNativeClient, items);
