// === Module 876: isErrorEvent ===

// Module 876 (isErrorEvent)
import "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import "_classCallCheck";
import _createClass from "_createClass" /* 42 */;

function isErrorEvent(type) {
  return undefined === type.type;
}
function isTransactionEvent(type) {
  return "transaction" === type.type;
}
function estimateMetricSizeInBytes(name) {
  let num = 0;
  if (name.name) {
    num = 2 * name.name.length;
  }
  const attributes = name.attributes;
  c0 = undefined;
  let num3 = 0;
  if (attributes) {
    c0 = 0;
    const _Object = Object;
    const values = Object.values(attributes);
    const item = values.forEach((item, index) => {
      if (Array.isArray(item)) {
        let first = item[0];
        if (typeof first === "string") {
          first = first.length;
          let num4 = 2 * first;
        } else {
          num4 = 8;
          if (typeof first !== "number") {
            let num7 = 0;
            if (typeof first === "boolean") {
              num7 = 4;
            }
            num4 = num7;
          }
        }
        closure_0 = closure_0 + item.length * num4;
      } else {
        if (obj.isPrimitive(item)) {
          if (typeof item === "string") {
            let num2 = 2 * item.length;
          } else {
            num2 = 8;
            if (typeof item !== "number") {
              let num6 = 0;
              if (typeof item === "boolean") {
                num6 = 4;
              }
              num2 = num6;
            }
          }
          closure_0 = tmp3 + num2;
        } else {
          closure_0 = tmp3 + 100;
        }
        obj = v0(closure_1_1[13]);
      }
    });
    num3 = c0;
  }
  return num + 8 + num3;
}
function estimateLogSizeInBytes(message) {
  let num = 0;
  if (message.message) {
    num = 2 * message.message.length;
  }
  const attributes = message.attributes;
  c0 = undefined;
  let num3 = 0;
  if (attributes) {
    c0 = 0;
    const _Object = Object;
    const values = Object.values(attributes);
    const item = values.forEach((item, index) => {
      if (Array.isArray(item)) {
        let first = item[0];
        if (typeof first === "string") {
          first = first.length;
          let num4 = 2 * first;
        } else {
          num4 = 8;
          if (typeof first !== "number") {
            let num7 = 0;
            if (typeof first === "boolean") {
              num7 = 4;
            }
            num4 = num7;
          }
        }
        closure_0 = closure_0 + item.length * num4;
      } else {
        if (obj.isPrimitive(item)) {
          if (typeof item === "string") {
            let num2 = 2 * item.length;
          } else {
            num2 = 8;
            if (typeof item !== "number") {
              let num6 = 0;
              if (typeof item === "boolean") {
                num6 = 4;
              }
              num2 = num6;
            }
          }
          closure_0 = tmp3 + num2;
        } else {
          closure_0 = tmp3 + 100;
        }
        obj = v0(closure_1_1[13]);
      }
    });
    num3 = c0;
  }
  return num + num3;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Client = "Not capturing exception because it's already been captured.";
let c5 = "Discarded session because of missing or non-string release";
let closure_6 = Symbol.for("SentryInternalError");
let closure_7 = Symbol.for("SentryDoNotSendEventError");
let closure_0;
let closure_1;
let _slicedToArray;
let _classCallCheck;
class Client {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, c4);
    this._options = global;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    tmp2 = closure_0;
    tmp3 = closure_1;
    obj = require("makePromiseBuffer");
    transportOptions = global.transportOptions;
    bufferSize = undefined;
    if (transportOptions != null) {
      bufferSize = transportOptions.bufferSize;
    }
    if (bufferSize == null) {
      bufferSize = require("createTransport").DEFAULT_TRANSPORT_BUFFER_SIZE;
    }
    self._promiseBuffer = obj.makePromiseBuffer(bufferSize);
    if (global.dsn) {
      tmp2Result = require("dsnFromString");
      self._dsn = tmp2Result.makeDsn(global.dsn);
    } else if (require("__SENTRY_DEBUG__").DEBUG_BUILD) {
      debug = require("consoleSandbox").debug;
      str = "No DSN provided, client will not send events.";
      warnResult = debug.warn("No DSN provided, client will not send events.");
    }
    if (self._dsn) {
      tmp2Result1 = require("getEnvelopeEndpointWithUrlEncodedAuth");
      sdk = undefined;
      if (global._metadata) {
        sdk = global._metadata.sdk;
      }
      obj = { tunnel: null, recordDroppedEvent: null };
      obj[0] = self._options.tunnel;
      recordDroppedEvent = self.recordDroppedEvent;
      envelopeEndpointWithUrlEncodedAuth = tmp2Result1.getEnvelopeEndpointWithUrlEncodedAuth(self._dsn, global.tunnel, sdk);
      obj[1] = recordDroppedEvent.bind(self);
      tmp8 = obj;
      merged = Object.assign(global.transportOptions);
      obj.url = envelopeEndpointWithUrlEncodedAuth;
      self._transport = global.transport(obj);
    }
    enableLogs = self._options.enableLogs;
    if (enableLogs == null) {
      _experiments = self._options._experiments;
      enableLogs = undefined;
      if (_experiments != null) {
        enableLogs = _experiments.enableLogs;
      }
    }
    self._options.enableLogs = enableLogs;
    if (self._options.enableLogs) {
      tmp11 = estimateLogSizeInBytes;
      closure_1 = estimateLogSizeInBytes;
      closure_2 = require("_INTERNAL_captureSerializedLog")._INTERNAL_flushLogsBuffer;
      c3 = undefined;
      c4 = 0;
      flag = false;
      c5 = false;
      str2 = "flushLogs";
      onResult = self.on("flushLogs", () => {
        c4 = 0;
        clearTimeout(c3);
        c5 = false;
      });
      str3 = "afterCaptureLog";
      onResult1 = self.on("afterCaptureLog", (arg0) => {
        const sum = c4 + callback(arg0);
        c4 = sum;
        if (sum >= 800000) {
          callback2(self);
        } else if (!c5) {
          c5 = true;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            callback(closure_0);
          }, 5000);
        }
      });
      str4 = "flush";
      onResult2 = self.on("flush", () => {
        callback2(self);
      });
    }
    flag2 = self._options.enableMetrics;
    if (flag2 == null) {
      _experiments2 = self._options._experiments;
      enableMetrics = undefined;
      if (_experiments2 != null) {
        enableMetrics = _experiments2.enableMetrics;
      }
      flag2 = enableMetrics;
    }
    if (flag2 == null) {
      flag2 = true;
    }
    if (flag2) {
      tmp16 = estimateMetricSizeInBytes;
      closure_1 = estimateMetricSizeInBytes;
      closure_2 = require("_INTERNAL_captureSerializedMetric")._INTERNAL_flushMetricsBuffer;
      c3 = undefined;
      c4 = 0;
      flag3 = false;
      c5 = false;
      str5 = "flushMetrics";
      onResult3 = self.on("flushMetrics", () => {
        c4 = 0;
        clearTimeout(c3);
        c5 = false;
      });
      str6 = "afterCaptureMetric";
      onResult4 = self.on("afterCaptureMetric", (arg0) => {
        const sum = c4 + callback(arg0);
        c4 = sum;
        if (sum >= 800000) {
          callback2(self);
        } else if (!c5) {
          c5 = true;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            callback(closure_0);
          }, 5000);
        }
      });
      str7 = "flush";
      onResult5 = self.on("flush", () => {
        callback2(self);
      });
    }
    return;
  }
}
let obj = {
  key: "captureException",
  value: function captureException(arg0, arg1, arg2) {
    const self = this;
    const dependencyMap = arg0;
    closure_2 = arg2;
    obj = obj(830);
    const uuid4Result = obj.uuid4();
    if (obj2.checkOrSetAlreadyCaught(arg0)) {
      if (tmp(823).DEBUG_BUILD) {
        const debug = tmp(824).debug;
        debug.log(Client);
      }
      return uuid4Result;
    } else {
      obj = { event_id: null };
      obj[0] = uuid4Result;
      const merged = Object.assign(arg1);
      self._process(() => {
        const eventFromExceptionResult = self.eventFromException(closure_1, obj);
        return self.eventFromException(closure_1, obj).then((result) => closure_3._captureEvent(result, closure_0, closure_2)).then((result) => result);
      }, "error");
      return obj.event_id;
    }
    obj2 = obj(830);
  }
};
let items = [
  obj,
  {
    key: "captureMessage",
    value: function captureMessage(arg0, arg1, arg2, arg3) {
      const self = this;
      const dependencyMap = arg3;
      const obj = { event_id: callback(830).uuid4() };
      const merged = Object.assign(arg2);
      const obj2 = callback(830);
      const tmp = callback;
      let StringResult = arg0;
      if (!obj3.isParameterizedString(arg0)) {
        const _String = String;
        StringResult = String(arg0);
      }
      obj3 = callback(827);
      const isPrimitiveResult = tmp(827).isPrimitive(arg0);
      if (isPrimitiveResult) {
        let eventFromMessageResult = self.eventFromMessage(StringResult, arg1, obj);
      } else {
        eventFromMessageResult = self.eventFromException(arg0, obj);
      }
      callback = eventFromMessageResult;
      let str = "error";
      if (isPrimitiveResult) {
        str = "unknown";
      }
      self._process(() => eventFromMessageResult.then((result) => closure_3._captureEvent(result, closure_2, closure_1)), str);
      return obj.event_id;
    }
  },
  {
    key: "captureEvent",
    value: function captureEvent(sdkProcessingMetadata, originalException) {
      const self = this;
      const dependencyMap = sdkProcessingMetadata;
      closure_2 = arg2;
      let obj = callback(830);
      const uuid4Result = obj.uuid4();
      originalException = undefined;
      if (originalException != null) {
        originalException = originalException.originalException;
      }
      if (originalException) {
        if (tmpResult.checkOrSetAlreadyCaught(originalException.originalException)) {
          if (callback(823).DEBUG_BUILD) {
            const debug = callback(824).debug;
            debug.log(Client);
          }
          return uuid4Result;
        }
        tmpResult = callback(830);
      }
      obj = { event_id: uuid4Result };
      const merged = Object.assign(originalException);
      ({ capturedSpanScope: Client, capturedSpanIsolationScope: closure_0 } = sdkProcessingMetadata.sdkProcessingMetadata || {});
      let str = sdkProcessingMetadata.type;
      let str2 = "replay";
      if ("replay_event" !== str) {
        if (!str) {
          str = "error";
        }
        str2 = str;
      }
      self._process(() => {
        let tmp4 = closure_4;
        if (!closure_4) {
          tmp4 = closure_2;
        }
        return self._captureEvent(closure_1, obj, tmp4, closure_0);
      }, str2);
      return obj.event_id;
    }
  },
  {
    key: "captureSession",
    value: function captureSession(arg0) {
      this.sendSession(arg0);
      callback(845).updateSession(arg0, { init: false });
    }
  },
  {
    key: "getDsn",
    value: function getDsn() {
      return this._dsn;
    }
  },
  {
    key: "getOptions",
    value: function getOptions() {
      return this._options;
    }
  },
  {
    key: "getSdkMetadata",
    value: function getSdkMetadata() {
      return this._options._metadata;
    }
  },
  {
    key: "getTransport",
    value: function getTransport() {
      return this._transport;
    }
  },
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,

];
obj = { key: "flush", value: null };
_classCallCheck = asyncGeneratorStep(function(arg0) {
  const self = this;
  closure_1 = arg0;
  c3 = 0;
  c4 = 0;
  return (function*(arg0) {
    closure_2 = tmp2;
    const _self = _transport;
    _transport = _self._transport;
    if (!_transport) {
      return true;
    }
    obj8.emit("flush");
    closure_2 = yield obj8._isClientDoneProcessing(tmp18);
    closure_3 = yield _transport.flush(_self);
    let tmp7 = closure_2;
    if (closure_2) {
      tmp7 = closure_3;
    }
    return tmp7;
  })();
});
obj[1] = function flush(arg0) {
  const self = this;
  const apply = _classCallCheck.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[8] = obj;
obj = { key: "close", value: null };
_slicedToArray = asyncGeneratorStep(function(arg0) {
  const self = this;
  closure_1 = arg0;
  c4 = 0;
  c5 = 0;
  return (function*(arg0) {
    closure_3 = _self;
    closure_2 = tmp2;
    _self = yield _self.flush(closure_1);
    closure_3.getOptions().enabled = false;
    closure_3.emit("close");
    return _self;
  })();
});
obj[1] = function close(arg0) {
  const self = this;
  const apply = _slicedToArray.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[9] = obj;
items[10] = {
  key: "getEventProcessors",
  value: function getEventProcessors() {
    return this._eventProcessors;
  }
};
items[11] = {
  key: "addEventProcessor",
  value: function addEventProcessor(arg0) {
    const _eventProcessors = this._eventProcessors;
    _eventProcessors.push(arg0);
  }
};
items[12] = {
  key: "init",
  value: function init() {
    const self = this;
    let _isEnabledResult = this._isEnabled();
    if (!_isEnabledResult) {
      const integrations = self._options.integrations;
      _isEnabledResult = integrations.some((item, index) => {
        const name = item.name;
        return name.startsWith("Spotlight");
      });
    }
    if (_isEnabledResult) {
      self._setupIntegrations();
    }
  }
};
items[13] = {
  key: "getIntegrationByName",
  value: function getIntegrationByName(arg0) {
    return this._integrations[arg0];
  }
};
items[14] = {
  key: "addIntegration",
  value: function addIntegration(arg0) {
    callback(887).setupIntegration(this, arg0, this._integrations);
    if (!this._integrations[arg0.name]) {
      const items = [arg0];
      const result = callback(887).afterSetupIntegrations(this, items);
      const tmpResult = callback(887);
    }
    const obj = callback(887);
  }
};
items[15] = {
  key: "sendEvent",
  value: function sendEvent(arg0) {
    const self = this;
    const callback = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    self.emit("beforeSendEvent", arg0, obj);
    let eventEnvelope = callback(self[16]).createEventEnvelope(arg0, self._dsn, self._options._metadata, self._options.tunnel);
    for (const item10025 of tmp3) {
      let obj3 = callback(self[17]);
      let obj4 = callback(self[17]);
      eventEnvelope = obj3.addItemToEnvelope(eventEnvelope, obj4.createAttachmentEnvelopeItem(item10025));
      continue;
    }
    const obj2 = callback(self[16]);
    const tmp3 = obj.attachments || [];
    self.sendEnvelope(eventEnvelope).then((result) => self.emit("afterSendEvent", closure_0, result));
  }
};
items[16] = {
  key: "sendSession",
  value: function sendSession(attrs) {
    const self = this;
    ({ release, environment } = this._options);
    if (undefined === environment) {
      environment = callback(858).DEFAULT_ENVIRONMENT;
    }
    if ("aggregates" in attrs) {
      const tmp7 = attrs.attrs || {};
      if (!tmp7.release) {
        if (!release) {
          if (callback(823).DEBUG_BUILD) {
            const debug2 = callback(824).debug;
            debug2.warn(c5);
          }
        }
      }
      tmp7.release = tmp7.release || release;
      tmp7.environment = tmp7.environment || environment;
      attrs.attrs = tmp7;
    } else {
      if (!attrs.release) {
        if (!release) {
          if (callback(823).DEBUG_BUILD) {
            const debug = callback(824).debug;
            debug.warn(c5);
          }
        }
      }
      attrs.release = attrs.release || release;
      attrs.environment = attrs.environment || environment;
    }
    self.emit("beforeSendSession", attrs);
    self.sendEnvelope(callback(863).createSessionEnvelope(attrs, self._dsn, self._options._metadata, self._options.tunnel));
    const obj = callback(863);
  }
};
items[17] = {
  key: "recordDroppedEvent",
  value: function recordDroppedEvent(arg0, arg1) {
    let num = arg2;
    if (arg2 === undefined) {
      num = 1;
    }
    const self = this;
    if (this._options.sendClientReports) {
      const _HermesInternal = HermesInternal;
      const combined = "" + arg0 + ":" + arg1;
      if (callback(823).DEBUG_BUILD) {
        const debug = callback(824).debug;
        let str3 = "";
        if (num > 1) {
          const _HermesInternal2 = HermesInternal;
          str3 = " (" + num + " times)";
        }
        const _HermesInternal3 = HermesInternal;
        debug.log("Recording outcome: \"" + combined + "\"" + str3);
      }
      let num3 = self._outcomes[combined];
      if (!num3) {
        num3 = 0;
      }
      self._outcomes[combined] = num3 + num;
    }
  }
};
items[18] = {
  key: "on",
  value: function on(arg0, arg1) {
    closure_0 = arg1;
    let set = this._hooks[arg0];
    if (!set) {
      const _Set = Set;
      set = new Set();
    }
    this._hooks[arg0] = set;
    function uniqueCallback() {
      return callback(...HermesBuiltin.copyRestArgs());
    }
    set.add(uniqueCallback);
    return () => {
      set.delete(uniqueCallback);
    };
  }
};
items[19] = {
  key: "emit",
  value: function emit(arg0) {
    closure_0 = [...arguments].slice();
    if (this._hooks[arg0]) {
      const item = arr.forEach((item, index) => item(...closure_0));
    }
  }
};
let obj1 = { key: "sendEnvelope", value: null };
closure_1 = asyncGeneratorStep(function(arg0) {
  const self = this;
  closure_1 = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (function*(arg0) {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp5;
            _self.emit("beforeEnvelope", dependencyMap);
            if (_self._isEnabled()) {
              if (tmp34._transport) {
                c5 = 1;
                const _transport = tmp34._transport;
                c6 = 2;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = _transport.send(dependencyMap);
                return obj1;
              }
            }
            if (self(823).DEBUG_BUILD) {
              const debug2 = self(824).debug;
              debug2.error("Transport disabled");
            }
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = {};
            return obj2;
          }
        } else if (1 === tmp8) {
          c5 = 0;
          _self = closure_4;
          if (self(823).DEBUG_BUILD) {
            const debug = self(824).debug;
            debug.error("Error while sending envelope:", self);
          }
          c7 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = {};
          return obj3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp26) {
        closure_4 = tmp26;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp26;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
});
obj1[1] = function sendEnvelope(arg0) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[20] = obj1;
items[21] = {
  key: "_setupIntegrations",
  value: function _setupIntegrations() {
    const integrations = this._options.integrations;
    this._integrations = callback(887).setupIntegrations(this, integrations);
    const obj = callback(887);
    const result = callback(887).afterSetupIntegrations(this, integrations);
  }
};
items[22] = {
  key: "_updateSessionFromEvent",
  value: function _updateSessionFromEvent(status, level) {
    let flag = "fatal" === level.level;
    const exception = level.exception;
    let values;
    if (exception != null) {
      values = exception.values;
    }
    let flag2 = false;
    if (values) {
      flag = false;
      const iter = values[Symbol.iterator]();
      flag2 = true;
      while (iter !== undefined) {
        let mechanism = iter.next().mechanism;
        let handled;
        if (mechanism != null) {
          handled = mechanism.handled;
        }
        if (false === handled) {
          flag = true;
          iter.return();
          flag2 = true;
          break;
        }
        break;
      }
    }
    let tmp7 = "ok" === status.status;
    let tmp8 = tmp7;
    if (tmp7) {
      tmp8 = 0 === status.errors;
    }
    if (!tmp8) {
      if (tmp7) {
        tmp7 = flag;
      }
      tmp8 = tmp7;
    }
    if (tmp8) {
      callback(845);
      let obj = flag;
      if (flag) {
        obj = { status: "crashed" };
      }
      obj = {};
      const merged = Object.assign(obj);
      let errors = status.errors;
      if (!errors) {
        if (!flag2) {
          flag2 = flag;
        }
        errors = Number(flag2);
      }
      const self = this;
      obj.errors = errors;
      obj.updateSession(status, obj);
      this.captureSession(status);
    }
  }
};
let obj2 = { key: "_isClientDoneProcessing", value: null };
closure_0 = asyncGeneratorStep(function(arg0) {
  const self = this;
  closure_1 = arg0;
  c4 = 0;
  c5 = 0;
  return (function*(arg0) {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const _numProcessing = closure_0;
            closure_2 = closure_0;
            closure_0 = closure_1;
            closure_1 = 0;
            if (closure_1) {
              if (closure_1 >= tmp24) {
                c5 = 3;
              }
            }
            const promise = new Promise((arg0) => setTimeout(arg0, 1));
            c4 = 1;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = promise;
            return obj1;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          if (_numProcessing._numProcessing) {
            closure_1 = closure_1 + 1;
          } else {
            c5 = 3;
            return { value: true, done: true };
          }
        }
        c5 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp17) {
        c5 = tmp;
        throw tmp17;
      }
    }
  })();
});
obj2[1] = function _isClientDoneProcessing(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[23] = obj2;
items[24] = {
  key: "_isEnabled",
  value: function _isEnabled() {
    let tmp = false !== this.getOptions().enabled;
    if (tmp) {
      tmp = undefined !== this._transport;
    }
    return tmp;
  }
};
items[25] = {
  key: "_prepareEvent",
  value: function _prepareEvent(type, integrations, arg2, setLastEventId) {
    const self = this;
    const dependencyMap = integrations;
    const callback = arg2;
    const options = this.getOptions();
    const keys = Object.keys(this._integrations);
    integrations = integrations.integrations;
    let tmp2 = !integrations;
    if (!integrations) {
      let length;
      if (keys != null) {
        length = keys.length;
      }
      tmp2 = length;
    }
    if (tmp2) {
      integrations.integrations = keys;
    }
    self.emit("preprocessEvent", type, integrations);
    if (!type.type) {
      let event_id = type.event_id;
      if (!event_id) {
        event_id = integrations.event_id;
      }
      setLastEventId.setLastEventId(event_id);
    }
    let obj = callback(870);
    return callback(870).prepareEvent(options, type, integrations, arg2, self, setLastEventId).then((result) => {
      if (null === result) {
        return result;
      } else {
        self.emit("postprocessEvent", result, integrations);
        let obj = { trace: null };
        obj[0] = callback(integrations[20]).getTraceContextFromScope(callback);
        const merged = Object.assign(result.contexts);
        result.contexts = obj;
        const obj2 = callback(integrations[20]);
        obj = { dynamicSamplingContext: null };
        obj[0] = callback(integrations[21]).getDynamicSamplingContextFromScope(self, callback);
        const merged1 = Object.assign(result.sdkProcessingMetadata);
        result.sdkProcessingMetadata = obj;
        return result;
      }
    });
  }
};
items[26] = {
  key: "_captureEvent",
  value: function _captureEvent(type) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let currentScope = arg2;
    if (arg2 === undefined) {
      currentScope = callback(848).getCurrentScope();
      const obj2 = callback(848);
    }
    let isolationScope = arg3;
    if (arg3 === undefined) {
      isolationScope = callback(848).getIsolationScope();
      const obj3 = callback(848);
    }
    if (tmp9) {
      let debug = callback(824).debug;
      const tmp7Result = callback(888);
      const _HermesInternal = HermesInternal;
      debug.log("Captured error event `" + callback(888).getPossibleEventMessages(type)[0] || "<unknown>" + "`");
      const tmp10 = callback(888).getPossibleEventMessages(type)[0] || "<unknown>";
    }
    tmp9 = callback(823).DEBUG_BUILD && undefined === type.type;
    return this._processEvent(type, obj, currentScope, isolationScope).then((result) => result.event_id, (message) => {
      if (callback(table[7]).DEBUG_BUILD) {
        let tmp4 = message && typeof message === "object";
        if (tmp4) {
          tmp4 = closure_7 in message;
        }
        if (tmp4) {
          const debug2 = callback(table[8]).debug;
          debug2.log(message.message);
        } else {
          let tmp6 = message && typeof message === "object";
          if (tmp6) {
            tmp6 = closure_6 in message;
          }
          const debug = callback(table[8]).debug;
          const warn = debug.warn;
          if (tmp6) {
            warn(message.message);
          } else {
            warn(message);
          }
        }
      }
    });
  }
};
items[27] = {
  key: "_processEvent",
  value: function _processEvent(type) {
    const self = this;
    const dependencyMap = type;
    closure_2 = arg1;
    closure_3 = arg2;
    closure_4 = arg3;
    const options = this.getOptions();
    const sampleRate = options.sampleRate;
    closure_6 = "transaction" === type.type;
    closure_7 = tmp2;
    closure_8 = "before send for type `" + type.type || "error" + "`";
    if (undefined !== sampleRate) {
      let obj = str2(836);
      const parseSampleRateResult = obj.parseSampleRate(sampleRate);
    }
    if (undefined === type.type) {
      if (typeof parseSampleRateResult === "number") {
        if (obj4.safeMathRandom() > parseSampleRateResult) {
          self.recordDroppedEvent("sample_rate", "error");
          let _HermesInternal = HermesInternal;
          obj = { message: null };
          obj[0] = "Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")";
          obj[closure_7] = true;
          return tmp9(873).rejectedSyncPromise(obj);
        }
        obj4 = str2(831);
        tmp9 = str2;
      }
    }
    let str = type.type;
    str2 = "replay";
    if ("replay_event" !== str) {
      if (!str) {
        str = "error";
      }
      str2 = str;
    }
    const _prepareEventResult = self._prepareEvent(type, arg1, arg2, arg3);
    let nextPromise = self._prepareEvent(type, arg1, arg2, arg3).then((result) => {
      if (null === result) {
        self.recordDroppedEvent("event_processor", closure_0);
        let obj = { message: "An event processor returned `null`, will not send event." };
        obj[closure_7] = true;
        throw obj;
      } else {
        if (data.data) {
          if (true === data.data.__sentry__) {
            return result;
          }
        }
        const promise = (function processBeforeSend(self, options, sdkProcessingMetadata, closure_2) {
          ({ beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options);
          if (callback2(sdkProcessingMetadata)) {
            if (beforeSend) {
              return beforeSend(sdkProcessingMetadata, closure_2);
            }
          }
          let tmp = sdkProcessingMetadata;
          if (callback3(sdkProcessingMetadata)) {
            if (beforeSendSpan) {
              let obj = callback(combined[27]);
              const result = obj.convertTransactionEventToSpanJson(sdkProcessingMetadata);
              let length;
              if (ignoreSpans != null) {
                length = ignoreSpans.length;
              }
              if (length) {
                let tmp4Result = callback(combined[28]);
                if (tmp4Result.shouldIgnoreSpan(result, ignoreSpans)) {
                  return null;
                }
              }
              let mergeResult = sdkProcessingMetadata;
              if (beforeSendSpan) {
                const beforeSendSpanResult = beforeSendSpan(result);
                if (beforeSendSpanResult) {
                  tmp4Result = callback(combined[30]);
                  mergeResult = tmp4Result.merge(sdkProcessingMetadata, callback(combined[27]).convertSpanJsonToTransactionEvent(beforeSendSpanResult));
                  const tmp4Result1 = callback(combined[27]);
                } else {
                  callback(combined[29]).showSpanDropWarning();
                  mergeResult = sdkProcessingMetadata;
                  const tmp4Result2 = callback(combined[29]);
                }
              }
              let tmp2 = mergeResult;
              if (mergeResult.spans) {
                const items = [];
                const spans = mergeResult.spans;
                for (const item10054 of spans) {
                  let length1;
                  if (ignoreSpans != null) {
                    length1 = ignoreSpans.length;
                  }
                  if (length1) {
                    let obj6 = callback(combined[28]);
                    if (obj6.shouldIgnoreSpan(item10054, ignoreSpans)) {
                      let tmp22Result = callback(combined[28]);
                      let reparentChildSpansResult = tmp22Result.reparentChildSpans(spans, item10054);
                      continue;
                    }
                  }
                  if (beforeSendSpan) {
                    let beforeSendSpanResult1 = beforeSendSpan(item10054);
                    if (beforeSendSpanResult1) {
                      let arr = items.push(tmp30);
                    } else {
                      let obj7 = callback(combined[29]);
                      let showSpanDropWarningResult1 = obj7.showSpanDropWarning();
                      arr = items.push(item10054);
                    }
                  } else {
                    let arr1 = items.push(item10054);
                  }
                }
                const diff = mergeResult.spans.length - items.length;
                if (diff) {
                  self.recordDroppedEvent("before_send", "span", diff);
                }
                mergeResult.spans = items;
                tmp2 = mergeResult;
              }
            } else {
              tmp2 = sdkProcessingMetadata;
            }
            tmp = tmp2;
            if (beforeSendTransaction) {
              if (tmp2.spans) {
                obj = {};
                const merged = Object.assign(sdkProcessingMetadata.sdkProcessingMetadata);
                obj.spanCountBeforeProcessing = tmp2.spans.length;
                tmp2.sdkProcessingMetadata = obj;
              }
              return beforeSendTransaction(tmp2, closure_2);
            }
          }
          return tmp;
        })(self, options, result, data);
        closure_0 = closure_8;
        const _HermesInternal = HermesInternal;
        const combined = "" + closure_8 + " must return `null` or a valid event.";
        obj = str2(type[13]);
        if (obj.isThenable(promise)) {
          let nextPromise = promise.then((result) => {
            let obj = callback(combined[13]);
            if (!obj.isPlainObject(result)) {
              if (null !== result) {
                obj = { message: null };
                obj[0] = combined;
                obj[closure_1_6] = true;
                throw obj;
              }
            }
            return result;
          }, (arg0) => {
            const obj = { message: "" + closure_0 + " rejected with " + arg0 };
            obj[closure_1_6] = true;
            throw obj;
          });
        } else {
          nextPromise = promise;
          if (!tmp8Result.isPlainObject(promise)) {
            nextPromise = promise;
            if (null !== promise) {
              obj = { message: null };
              obj[0] = combined;
              obj[closure_6] = true;
              throw obj;
            }
          }
          tmp8Result = tmp8(type[13]);
        }
        return nextPromise;
      }
    });
    return self._prepareEvent(type, arg1, arg2, arg3).then((result) => {
      if (null === result) {
        self.recordDroppedEvent("event_processor", closure_0);
        let obj = { message: "An event processor returned `null`, will not send event." };
        obj[closure_7] = true;
        throw obj;
      } else {
        if (data.data) {
          if (true === data.data.__sentry__) {
            return result;
          }
        }
        const promise = (function processBeforeSend(self, options, sdkProcessingMetadata, closure_2) {
          ({ beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options);
          if (callback2(sdkProcessingMetadata)) {
            if (beforeSend) {
              return beforeSend(sdkProcessingMetadata, closure_2);
            }
          }
          let tmp = sdkProcessingMetadata;
          if (callback3(sdkProcessingMetadata)) {
            if (beforeSendSpan) {
              let obj = callback(combined[27]);
              const result = obj.convertTransactionEventToSpanJson(sdkProcessingMetadata);
              let length;
              if (ignoreSpans != null) {
                length = ignoreSpans.length;
              }
              if (length) {
                let tmp4Result = callback(combined[28]);
                if (tmp4Result.shouldIgnoreSpan(result, ignoreSpans)) {
                  return null;
                }
              }
              let mergeResult = sdkProcessingMetadata;
              if (beforeSendSpan) {
                const beforeSendSpanResult = beforeSendSpan(result);
                if (beforeSendSpanResult) {
                  tmp4Result = callback(combined[30]);
                  mergeResult = tmp4Result.merge(sdkProcessingMetadata, callback(combined[27]).convertSpanJsonToTransactionEvent(beforeSendSpanResult));
                  const tmp4Result1 = callback(combined[27]);
                } else {
                  callback(combined[29]).showSpanDropWarning();
                  mergeResult = sdkProcessingMetadata;
                  const tmp4Result2 = callback(combined[29]);
                }
              }
              let tmp2 = mergeResult;
              if (mergeResult.spans) {
                const items = [];
                const spans = mergeResult.spans;
                for (const item10054 of spans) {
                  let length1;
                  if (ignoreSpans != null) {
                    length1 = ignoreSpans.length;
                  }
                  if (length1) {
                    let obj6 = callback(combined[28]);
                    if (obj6.shouldIgnoreSpan(item10054, ignoreSpans)) {
                      let tmp22Result = callback(combined[28]);
                      let reparentChildSpansResult = tmp22Result.reparentChildSpans(spans, item10054);
                      continue;
                    }
                  }
                  if (beforeSendSpan) {
                    let beforeSendSpanResult1 = beforeSendSpan(item10054);
                    if (beforeSendSpanResult1) {
                      let arr = items.push(tmp30);
                    } else {
                      let obj7 = callback(combined[29]);
                      let showSpanDropWarningResult1 = obj7.showSpanDropWarning();
                      arr = items.push(item10054);
                    }
                  } else {
                    let arr1 = items.push(item10054);
                  }
                }
                const diff = mergeResult.spans.length - items.length;
                if (diff) {
                  self.recordDroppedEvent("before_send", "span", diff);
                }
                mergeResult.spans = items;
                tmp2 = mergeResult;
              }
            } else {
              tmp2 = sdkProcessingMetadata;
            }
            tmp = tmp2;
            if (beforeSendTransaction) {
              if (tmp2.spans) {
                obj = {};
                const merged = Object.assign(sdkProcessingMetadata.sdkProcessingMetadata);
                obj.spanCountBeforeProcessing = tmp2.spans.length;
                tmp2.sdkProcessingMetadata = obj;
              }
              return beforeSendTransaction(tmp2, closure_2);
            }
          }
          return tmp;
        })(self, options, result, data);
        closure_0 = closure_8;
        const _HermesInternal = HermesInternal;
        const combined = "" + closure_8 + " must return `null` or a valid event.";
        obj = str2(type[13]);
        if (obj.isThenable(promise)) {
          let nextPromise = promise.then((result) => {
            let obj = callback(combined[13]);
            if (!obj.isPlainObject(result)) {
              if (null !== result) {
                obj = { message: null };
                obj[0] = combined;
                obj[closure_1_6] = true;
                throw obj;
              }
            }
            return result;
          }, (arg0) => {
            const obj = { message: "" + closure_0 + " rejected with " + arg0 };
            obj[closure_1_6] = true;
            throw obj;
          });
        } else {
          nextPromise = promise;
          if (!tmp8Result.isPlainObject(promise)) {
            nextPromise = promise;
            if (null !== promise) {
              obj = { message: null };
              obj[0] = combined;
              obj[closure_6] = true;
              throw obj;
            }
          }
          tmp8Result = tmp8(type[13]);
        }
        return nextPromise;
      }
    }).then((result) => {
      if (null === result) {
        self.recordDroppedEvent("before_send", str2);
        if (closure_6) {
          self.recordDroppedEvent("before_send", "span", 1 + type.spans || [].length);
        }
        const _HermesInternal = HermesInternal;
        let obj = { message: null };
        obj[0] = "" + closure_8 + " returned `null`, will not send event.";
        obj[closure_7] = true;
        throw obj;
      } else {
        session = session.getSession();
        if (!session) {
          session = session2.getSession();
        }
        let tmp3 = closure_7;
        if (closure_7) {
          tmp3 = session;
        }
        if (tmp3) {
          result = self._updateSessionFromEvent(session, result);
        }
        if (closure_6) {
          const sdkProcessingMetadata = result.sdkProcessingMetadata;
          let num;
          if (sdkProcessingMetadata != null) {
            num = sdkProcessingMetadata.spanCountBeforeProcessing;
          }
          if (!num) {
            num = 0;
          }
          let num3 = 0;
          if (result.spans) {
            num3 = result.spans.length;
          }
          const diff = num - num3;
          if (diff > 0) {
            self.recordDroppedEvent("before_send", "span", diff);
          }
        }
        const transaction_info = result.transaction_info;
        if (closure_6) {
          if (transaction_info) {
            if (result.transaction !== type.transaction) {
              obj = {};
              const merged = Object.assign(transaction_info);
              obj.source = "custom";
              result.transaction_info = obj;
            }
          }
        }
        self.sendEvent(result, closure_2);
        return result;
      }
    }).then(null, (obj) => {
      let tmp = obj && typeof obj === "object";
      if (tmp) {
        tmp = closure_7 in obj;
      }
      if (!tmp) {
        let tmp3 = obj && typeof obj === "object";
        if (tmp3) {
          tmp3 = closure_6 in obj;
        }
        if (!tmp3) {
          obj = { mechanism: null, data: null, originalException: null };
          obj[0] = { handled: false, type: "internal" };
          obj[1] = { __sentry__: true };
          obj[2] = obj;
          self.captureException(obj, obj);
          const _HermesInternal = HermesInternal;
          obj = { message: null };
          obj[0] = "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + obj;
          obj[closure_6] = true;
          throw obj;
        }
      }
      throw obj;
    });
  }
};
items[28] = {
  key: "_process",
  value: function _process(arg0, arg1) {
    const self = this;
    closure_0 = arg1;
    this._numProcessing = this._numProcessing + 1;
    const _promiseBuffer = this._promiseBuffer;
    _promiseBuffer.add(arg0).then((result) => {
      self._numProcessing = self._numProcessing - 1;
      return result;
    }, (arg0) => {
      self._numProcessing = self._numProcessing - 1;
      if (arg0 === callback(self[4]).SENTRY_BUFFER_FULL_ERROR) {
        self.recordDroppedEvent("queue_overflow", callback);
      }
      return arg0;
    });
  }
};
items[29] = {
  key: "_clearOutcomes",
  value: function _clearOutcomes() {
    this._outcomes = {};
    const entries = Object.entries(this._outcomes);
    return entries.map((item, index) => {
      [str, tmp] = item;
      const tmp2 = callback(str.split(":"), 2);
      return { reason: tmp2[0], category: tmp2[1], quantity: tmp };
    });
  }
};
items[30] = {
  key: "_flushOutcomes",
  value: function _flushOutcomes() {
    if (callback(823).DEBUG_BUILD) {
      const debug = callback(824).debug;
      debug.log("Flushing outcomes...");
    }
    const self = this;
    const _clearOutcomesResult = this._clearOutcomes();
    if (0 !== _clearOutcomesResult.length) {
      const DEBUG_BUILD = callback(823).DEBUG_BUILD;
      if (self._dsn) {
        if (DEBUG_BUILD) {
          const debug4 = callback(824).debug;
          debug4.log("Sending outcomes:", _clearOutcomesResult);
        }
        let tmpResult = callback(889);
        let tunnel = self._options.tunnel;
        if (tunnel) {
          tmpResult = callback(837);
          tunnel = tmpResult.dsnToString(self._dsn);
        }
        self.sendEnvelope(tmpResult.createClientReportEnvelope(_clearOutcomesResult, tunnel));
      } else if (DEBUG_BUILD) {
        const debug3 = callback(824).debug;
        debug3.log("No dsn provided, will not send outcomes");
      }
    } else if (callback(823).DEBUG_BUILD) {
      const debug2 = callback(824).debug;
      debug2.log("No outcomes to send");
    }
  }
};

export const Client = _createClass(Client, items);