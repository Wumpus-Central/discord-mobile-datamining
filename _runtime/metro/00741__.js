// _runtime/metro/00741__.js
import "module_32";
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";
import "_classCallCheck";
import _createClass from "00042__createClass.js";

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
    const item = values.forEach((item) => {
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
      } else if (obj.isPrimitive(item)) {
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
  closure_0 = undefined;
  let num3 = 0;
  if (attributes) {
    closure_0 = 0;
    const _Object = Object;
    const values = Object.values(attributes);
    const item = values.forEach((item) => {
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
      } else if (obj.isPrimitive(item)) {
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
    });
    num3 = closure_0;
  }
  return num + num3;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Client = "Not capturing exception because it's already been captured.";
let c5 = "Discarded session because of missing or non-string release";
let closure_6 = Symbol.for("SentryInternalError");
let closure_7 = Symbol.for("SentryDoNotSendEventError");
let React;
let dependencyMap;
let _slicedToArray;
let _classCallCheck;
class Client {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, Client);
    this._options = global;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    tmp2 = closure_0;
    tmp3 = closure_1;
    obj = closure_0(closure_1[4]);
    transportOptions = global.transportOptions;
    bufferSize = undefined;
    if (transportOptions != null) {
      bufferSize = transportOptions.bufferSize;
    }
    if (bufferSize == null) {
      bufferSize = tmp2(tmp3[5]).DEFAULT_TRANSPORT_BUFFER_SIZE;
    }
    self._promiseBuffer = obj.makePromiseBuffer(bufferSize);
    if (global.dsn) {
      tmp2Result = tmp2(tmp3[6]);
      self._dsn = tmp2Result.makeDsn(global.dsn);
    } else if (tmp2(tmp3[7]).DEBUG_BUILD) {
      debug = tmp2(tmp3[8]).debug;
      str = "No DSN provided, client will not send events.";
      warnResult = debug.warn("No DSN provided, client will not send events.");
    }
    if (self._dsn) {
      tmp2Result1 = tmp2(tmp3[9]);
      sdk = undefined;
      if (global._metadata) {
        sdk = global._metadata.sdk;
      }
      obj = { tunnel: null, recordDroppedEvent: null };
      obj.tunnel = self._options.tunnel;
      recordDroppedEvent = self.recordDroppedEvent;
      envelopeEndpointWithUrlEncodedAuth = tmp2Result1.getEnvelopeEndpointWithUrlEncodedAuth(
        self._dsn,
        global.tunnel,
        sdk,
      );
      obj.recordDroppedEvent = recordDroppedEvent.bind(self);
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
      tmp11 = closure_11;
      closure_1 = closure_11;
      closure_2 = tmp2(tmp3[10])._INTERNAL_flushLogsBuffer;
      c3 = undefined;
      c4 = 0;
      flag = false;
      c5 = false;
      str2 = "flushLogs";
      onResult = self.on("flushLogs", () => {
        c4 = 0;
        clearTimeout(closure_3);
        c5 = false;
      });
      str3 = "afterCaptureLog";
      onResult1 = self.on("afterCaptureLog", (arg0) => {
        const sum = c4 + closure_1(arg0);
        c4 = sum;
        if (sum >= 800000) {
          closure_2(self);
        } else if (!c5) {
          c5 = true;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            closure_1_2(self);
          }, 5000);
        }
      });
      str4 = "flush";
      onResult2 = self.on("flush", () => {
        closure_2(self);
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
      tmp16 = c10;
      closure_1 = c10;
      closure_2 = tmp2(tmp3[11])._INTERNAL_flushMetricsBuffer;
      c3 = undefined;
      c4 = 0;
      flag3 = false;
      c5 = false;
      str5 = "flushMetrics";
      onResult3 = self.on("flushMetrics", () => {
        c4 = 0;
        clearTimeout(closure_3);
        c5 = false;
      });
      str6 = "afterCaptureMetric";
      onResult4 = self.on("afterCaptureMetric", (arg0) => {
        const sum = c4 + closure_1(arg0);
        c4 = sum;
        if (sum >= 800000) {
          closure_2(self);
        } else if (!c5) {
          c5 = true;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            closure_1_2(self);
          }, 5000);
        }
      });
      str7 = "flush";
      onResult5 = self.on("flush", () => {
        closure_2(self);
      });
    }
    return;
  }
}
const entry = {
  key: "captureException",
  value: function captureException(arg0, arg1, arg2) {
    const self = this;
    dependencyMap = arg0;
    closure_2 = arg2;
    let obj = closure_0(695);
    const uuid4Result = obj.uuid4();
    if (obj2.checkOrSetAlreadyCaught(arg0)) {
      if (tmp(688).DEBUG_BUILD) {
        const debug = tmp(689).debug;
        debug.log(Client);
      }
      return uuid4Result;
    } else {
      obj = { event_id: uuid4Result };
      const merged = Object.assign(arg1);
      self._process(() => {
        const eventFromExceptionResult = self.eventFromException(closure_1, obj);
        return self
          .eventFromException(closure_1, obj)
          .then((result) => self._captureEvent(result, obj, closure_1_2))
          .then((result) => result);
      }, "error");
      return obj.event_id;
    }
    obj2 = closure_0(695);
  },
};
let items = [
  entry,
  {
    key: "captureMessage",
    value: function captureMessage(arg0, arg1, arg2, arg3) {
      const self = this;
      dependencyMap = arg3;
      const obj = { event_id: closure_0(695).uuid4() };
      const merged = Object.assign(arg2);
      const obj2 = closure_0(695);
      const tmp = closure_0;
      let StringResult = arg0;
      if (!obj3.isParameterizedString(arg0)) {
        const _String = String;
        StringResult = String(arg0);
      }
      obj3 = closure_0(692);
      const isPrimitiveResult = tmp(692).isPrimitive(arg0);
      if (isPrimitiveResult) {
        let eventFromMessageResult = self.eventFromMessage(StringResult, arg1, obj);
      } else {
        eventFromMessageResult = self.eventFromException(arg0, obj);
      }
      let str = "error";
      if (isPrimitiveResult) {
        str = "unknown";
      }
      self._process(() => eventFromMessageResult.then((result) => self._captureEvent(result, obj, closure_1_1)), str);
      return obj.event_id;
    },
  },
  {
    key: "captureEvent",
    value: function captureEvent(sdkProcessingMetadata, originalException, arg2) {
      const self = this;
      dependencyMap = sdkProcessingMetadata;
      closure_2 = arg2;
      let obj = closure_0(695);
      const uuid4Result = obj.uuid4();
      originalException = undefined;
      if (originalException != null) {
        originalException = originalException.originalException;
      }
      if (originalException) {
        if (tmpResult.checkOrSetAlreadyCaught(originalException.originalException)) {
          if (tmp(688).DEBUG_BUILD) {
            const debug = tmp(689).debug;
            debug.log(Client);
          }
          return uuid4Result;
        }
        tmpResult = tmp(695);
      }
      obj = { event_id: uuid4Result };
      const merged = Object.assign(originalException);
      ({ capturedSpanScope: Client, capturedSpanIsolationScope: closure_0 } =
        sdkProcessingMetadata.sdkProcessingMetadata || {});
      let str = sdkProcessingMetadata.type;
      let str2 = "replay";
      if ("replay_event" !== str) {
        if (!str) {
          str = "error";
        }
        str2 = str;
      }
      self._process(() => {
        let tmp4 = Client;
        if (!Client) {
          tmp4 = closure_2;
        }
        return self._captureEvent(closure_1, obj, tmp4, closure_1_0);
      }, str2);
      return obj.event_id;
    },
  },
  {
    key: "captureSession",
    value: function captureSession(arg0) {
      this.sendSession(arg0);
      closure_0(710).updateSession(arg0, { init: false });
    },
  },
  {
    key: "getDsn",
    value: function getDsn() {
      return this._dsn;
    },
  },
  {
    key: "getOptions",
    value: function getOptions() {
      return this._options;
    },
  },
  {
    key: "getSdkMetadata",
    value: function getSdkMetadata() {
      return this._options._metadata;
    },
  },
  {
    key: "getTransport",
    value: function getTransport() {
      return this._transport;
    },
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
const entry1 = { key: "flush", value: null };
_classCallCheck = asyncGeneratorStep(async function (arg0) {
  const self = this;
  closure_1 = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp2;
    closure_130_0 = closure_1;
    const _transport = self._transport;
    closure_130_1 = _transport;
    if (!_transport) {
      return true;
    }
    obj8.emit("flush");
    closure_130_2 = await obj8._isClientDoneProcessing(tmp17);
    closure_130_3 = await closure_130_1.flush(closure_130_0);
    let tmp7 = closure_130_2;
    if (closure_130_2) {
      tmp7 = closure_130_3;
    }
    return tmp7;
  })();
});
entry1.value = function flush(arg0) {
  const self = this;
  const apply = _classCallCheck.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[8] = entry1;
const entry2 = { key: "close", value: null };
_slicedToArray = asyncGeneratorStep(async function (arg0) {
  const self = this;
  closure_1 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
    closure_3 = self;
    closure_2 = tmp2;
    closure_130_0 = await self.flush(closure_1);
    closure_3.getOptions().enabled = false;
    closure_3.emit("close");
    return closure_130_0;
  })();
});
entry2.value = function close(arg0) {
  const self = this;
  const apply = _slicedToArray.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[9] = entry2;
items[10] = {
  key: "getEventProcessors",
  value: function getEventProcessors() {
    return this._eventProcessors;
  },
};
items[11] = {
  key: "addEventProcessor",
  value: function addEventProcessor(arg0) {
    const _eventProcessors = this._eventProcessors;
    _eventProcessors.push(arg0);
  },
};
items[12] = {
  key: "init",
  value: function init() {
    const self = this;
    let _isEnabledResult = this._isEnabled();
    if (!_isEnabledResult) {
      const integrations = self._options.integrations;
      _isEnabledResult = integrations.some((name) => {
        name = name.name;
        return name.startsWith("Spotlight");
      });
    }
    if (_isEnabledResult) {
      self._setupIntegrations();
    }
  },
};
items[13] = {
  key: "getIntegrationByName",
  value: function getIntegrationByName(arg0) {
    return this._integrations[arg0];
  },
};
items[14] = {
  key: "addIntegration",
  value: function addIntegration(arg0) {
    closure_0(752).setupIntegration(this, arg0, this._integrations);
    if (!this._integrations[arg0.name]) {
      const items = [arg0];
      const result = closure_0(752).afterSetupIntegrations(this, items);
      const tmpResult = closure_0(752);
    }
  },
};
items[15] = {
  key: "sendEvent",
  value: function sendEvent(arg0) {
    const self = this;
    closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    self.emit("beforeSendEvent", arg0, obj);
    let eventEnvelope = closure_0(728).createEventEnvelope(
      arg0,
      self._dsn,
      self._options._metadata,
      self._options.tunnel,
    );
    for (const item10025 of tmp3) {
      let obj3 = closure_0(729);
      let obj4 = closure_0(729);
      eventEnvelope = obj3.addItemToEnvelope(eventEnvelope, obj4.createAttachmentEnvelopeItem(item10025));
      continue;
    }
    const obj2 = closure_0(728);
    const tmp3 = obj.attachments || [];
    self.sendEnvelope(eventEnvelope).then((result) => self.emit("afterSendEvent", closure_0, result));
  },
};
items[16] = {
  key: "sendSession",
  value: function sendSession(attrs) {
    const self = this;
    ({ release, environment } = this._options);
    if (undefined === environment) {
      environment = closure_0(723).DEFAULT_ENVIRONMENT;
    }
    if ("aggregates" in attrs) {
      const tmp7 = attrs.attrs || {};
      if (!tmp7.release) {
        if (!release) {
          if (closure_0(688).DEBUG_BUILD) {
            const debug2 = closure_0(689).debug;
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
          if (closure_0(688).DEBUG_BUILD) {
            const debug = closure_0(689).debug;
            debug.warn(c5);
          }
        }
      }
      attrs.release = attrs.release || release;
      attrs.environment = attrs.environment || environment;
    }
    self.emit("beforeSendSession", attrs);
    self.sendEnvelope(
      closure_0(728).createSessionEnvelope(attrs, self._dsn, self._options._metadata, self._options.tunnel),
    );
  },
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
      if (closure_0(688).DEBUG_BUILD) {
        const debug = tmp5(689).debug;
        let str3 = "";
        if (num > 1) {
          const _HermesInternal2 = HermesInternal;
          str3 = " (" + num + " times)";
        }
        const _HermesInternal3 = HermesInternal;
        debug.log('Recording outcome: "' + combined + '"' + str3);
      }
      let num3 = self._outcomes[combined];
      if (!num3) {
        num3 = 0;
      }
      self._outcomes[combined] = num3 + num;
      tmp5 = closure_0;
    }
  },
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
      return closure_0(...HermesBuiltin.copyRestArgs());
    }
    set.add(uniqueCallback);
    return () => {
      set.delete(uniqueCallback);
    };
  },
};
items[19] = {
  key: "emit",
  value: function emit(arg0) {
    const args = [...arguments].slice();
    if (this._hooks[arg0]) {
      const item = arr.forEach((fn) => fn(...closure_0));
    }
  },
};
const entry3 = { key: "sendEnvelope", value: null };
dependencyMap = asyncGeneratorStep(async function (arg0) {
  const self = this;
  dependencyMap = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp5;
            self.emit("beforeEnvelope", dependencyMap);
            if (self._isEnabled()) {
              if (tmp33._transport) {
                c5 = 1;
                const _transport = tmp33._transport;
                c6 = 2;
                c7 = 1;
                const obj1 = { value: _transport.send(dependencyMap), done: false };
                return obj1;
              }
            }
            if (self(688).DEBUG_BUILD) {
              const debug2 = self(689).debug;
              debug2.error("Transport disabled");
            }
            c7 = 3;
            const obj2 = { value: {}, done: true };
            return obj2;
          }
        } else if (1 === tmp8) {
          c5 = 0;
          closure_130_0 = closure_4;
          if (self(688).DEBUG_BUILD) {
            const debug = self(689).debug;
            debug.error("Error while sending envelope:", closure_130_0);
          }
          c7 = 3;
          const obj3 = { value: {}, done: true };
          return obj3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
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
entry3.value = function sendEnvelope(arg0) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[20] = entry3;
items[21] = {
  key: "_setupIntegrations",
  value: function _setupIntegrations() {
    const integrations = this._options.integrations;
    this._integrations = closure_0(752).setupIntegrations(this, integrations);
    const obj = closure_0(752);
    const result = closure_0(752).afterSetupIntegrations(this, integrations);
  },
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
      closure_0(710);
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
  },
};
const entry4 = { key: "_isClientDoneProcessing", value: null };
React = asyncGeneratorStep(async function (arg0) {
  const self = this;
  closure_1 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            _numProcessing = self;
            closure_2 = self;
            closure_130_0 = closure_1;
            closure_130_1 = 0;
            if (closure_1) {
              if (closure_130_1 >= tmp23) {
                c5 = 3;
              }
            }
            const promise = new Promise((arg0) => setTimeout(arg0, 1));
            c4 = 1;
            c5 = 1;
            const obj1 = { value: promise, done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (_numProcessing._numProcessing) {
            closure_130_1 = closure_130_1 + 1;
          } else {
            c5 = 3;
            return { value: true, done: true };
          }
        }
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp17) {
        c5 = tmp;
        throw tmp17;
      }
    }
  })();
});
entry4.value = function _isClientDoneProcessing(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[23] = entry4;
items[24] = {
  key: "_isEnabled",
  value: function _isEnabled() {
    let tmp = false !== this.getOptions().enabled;
    if (tmp) {
      tmp = undefined !== this._transport;
    }
    return tmp;
  },
};
items[25] = {
  key: "_prepareEvent",
  value: function _prepareEvent(type, integrations, arg2, setLastEventId) {
    const self = this;
    dependencyMap = integrations;
    closure_0 = arg2;
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
    let obj = closure_0(735);
    return closure_0(735)
      .prepareEvent(options, type, integrations, arg2, self, setLastEventId)
      .then((contexts) => {
        if (null === contexts) {
          return contexts;
        } else {
          self.emit("postprocessEvent", contexts, integrations);
          let obj = { trace: closure_0(integrations[20]).getTraceContextFromScope(closure_0) };
          const merged = Object.assign(contexts.contexts);
          contexts.contexts = obj;
          const obj2 = closure_0(integrations[20]);
          obj = {
            dynamicSamplingContext: closure_0(integrations[21]).getDynamicSamplingContextFromScope(self, closure_0),
          };
          const merged1 = Object.assign(contexts.sdkProcessingMetadata);
          contexts.sdkProcessingMetadata = obj;
          return contexts;
        }
      });
  },
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
      currentScope = closure_0(713).getCurrentScope();
      const obj2 = closure_0(713);
    }
    let isolationScope = arg3;
    if (arg3 === undefined) {
      isolationScope = closure_0(713).getIsolationScope();
      const obj3 = closure_0(713);
    }
    if (tmp9) {
      let debug = tmp7(689).debug;
      const tmp7Result = tmp7(753);
      const _HermesInternal = HermesInternal;
      debug.log("Captured error event `" + tmp7(753).getPossibleEventMessages(type)[0] || "<unknown>" + "`");
      const tmp10 = tmp7(753).getPossibleEventMessages(type)[0] || "<unknown>";
    }
    tmp9 = closure_0(688).DEBUG_BUILD && undefined === type.type;
    return this._processEvent(type, obj, currentScope, isolationScope).then(
      (event_id) => event_id.event_id,
      (message) => {
        if (closure_1_0(dependencyMap[7]).DEBUG_BUILD) {
          let tmp4 = message && typeof message === "object";
          if (tmp4) {
            tmp4 = closure_1_7 in message;
          }
          if (tmp4) {
            const debug2 = tmp(tmp2[8]).debug;
            debug2.log(message.message);
          } else {
            let tmp6 = message && typeof message === "object";
            if (tmp6) {
              tmp6 = closure_1_6 in message;
            }
            const debug = tmp(tmp2[8]).debug;
            const warn = debug.warn;
            if (tmp6) {
              warn(message.message);
            } else {
              warn(message);
            }
          }
        }
      },
    );
  },
};
items[27] = {
  key: "_processEvent",
  value: function _processEvent(type, arg1, arg2, arg3) {
    const self = this;
    dependencyMap = type;
    const data = arg1;
    let session = arg2;
    const session2 = arg3;
    const options = this.getOptions();
    const sampleRate = options.sampleRate;
    closure_6 = "transaction" === type.type;
    closure_7 = tmp2;
    closure_8 = "before send for type `" + type.type || "error" + "`";
    if (undefined !== sampleRate) {
      let obj = str2(701);
      const parseSampleRateResult = obj.parseSampleRate(sampleRate);
    }
    if (undefined === type.type) {
      if (typeof parseSampleRateResult === "number") {
        if (obj4.safeMathRandom() > parseSampleRateResult) {
          self.recordDroppedEvent("sample_rate", "error");
          let _HermesInternal = HermesInternal;
          obj = {
            message:
              "Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")",
          };
          obj[closure_7] = true;
          return tmp9(738).rejectedSyncPromise(obj);
        }
        obj4 = str2(696);
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
    let tmp3 = type.type || "error";
    let nextPromise = self._prepareEvent(type, arg1, arg2, arg3).then((result) => {
      if (null === result) {
        self.recordDroppedEvent("event_processor", str2);
        let obj = { message: "An event processor returned `null`, will not send event." };
        obj[closure_7] = true;
        throw obj;
      } else {
        if (data.data) {
          if (true === tmp16.data.__sentry__) {
            return result;
          }
        }
        const promise = (function processBeforeSend(self, options, sdkProcessingMetadata, arg3) {
          ({ beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options);
          if (closure_1_8(sdkProcessingMetadata)) {
            if (beforeSend) {
              return beforeSend(sdkProcessingMetadata, arg3);
            }
          }
          let tmp = sdkProcessingMetadata;
          if (self(sdkProcessingMetadata)) {
            if (beforeSendSpan) {
              let obj = closure_0(combined[27]);
              const result = obj.convertTransactionEventToSpanJson(sdkProcessingMetadata);
              let length;
              if (ignoreSpans != null) {
                length = ignoreSpans.length;
              }
              if (length) {
                let tmp4Result = tmp4(tmp6[28]);
                if (tmp4Result.shouldIgnoreSpan(result, ignoreSpans)) {
                  return null;
                }
              }
              let mergeResult = sdkProcessingMetadata;
              if (beforeSendSpan) {
                const beforeSendSpanResult = beforeSendSpan(result);
                if (beforeSendSpanResult) {
                  tmp4Result = tmp4(tmp6[30]);
                  mergeResult = tmp4Result.merge(
                    sdkProcessingMetadata,
                    tmp4(tmp6[27]).convertSpanJsonToTransactionEvent(beforeSendSpanResult),
                  );
                  const tmp4Result1 = tmp4(tmp6[27]);
                } else {
                  tmp4(tmp6[29]).showSpanDropWarning();
                  mergeResult = sdkProcessingMetadata;
                  const tmp4Result2 = tmp4(tmp6[29]);
                }
              }
              let tmp2 = mergeResult;
              if (mergeResult.spans) {
                const items = [];
                const spans = mergeResult.spans;
                for (const item10054 of spans) {
                  let tmp19 = item10054;
                  let length1;
                  if (ignoreSpans != null) {
                    length1 = ignoreSpans.length;
                  }
                  if (length1) {
                    let tmp22 = closure_0;
                    let tmp24 = combined;
                    let obj6 = closure_0(combined[28]);
                    if (obj6.shouldIgnoreSpan(tmp19, ignoreSpans)) {
                      let tmp22Result = tmp22(tmp24[28]);
                      let reparentChildSpansResult = tmp22Result.reparentChildSpans(spans, tmp19);
                      continue;
                    }
                  }
                  if (beforeSendSpan) {
                    let beforeSendSpanResult1 = beforeSendSpan(tmp19);
                    if (beforeSendSpanResult1) {
                      let arr = items.push(tmp30);
                    } else {
                      let obj7 = closure_0(combined[29]);
                      let showSpanDropWarningResult1 = obj7.showSpanDropWarning();
                      arr = items.push(tmp19);
                    }
                  } else {
                    let arr1 = items.push(tmp19);
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
              return beforeSendTransaction(tmp2, arg3);
            }
          }
          return tmp;
        })(self, options, result, data);
        const _HermesInternal = HermesInternal;
        str2 = "";
        const combined = "" + closure_8 + " must return `null` or a valid event.";
        obj = str2(type[13]);
        if (obj.isThenable(promise)) {
          let nextPromise = promise.then(
            (result) => {
              let obj = str2(closure_1[13]);
              if (!obj.isPlainObject(result)) {
                if (null !== result) {
                  obj = { message: combined };
                  obj[closure_6] = true;
                  throw obj;
                }
              }
              return result;
            },
            (arg0) => {
              const obj = { message: "" + closure_0 + " rejected with " + arg0 };
              obj[closure_6] = true;
              throw obj;
            },
          );
        } else {
          nextPromise = promise;
          if (!tmp8Result.isPlainObject(promise)) {
            nextPromise = promise;
            if (null !== promise) {
              obj = { message: combined };
              obj[closure_6] = true;
              throw obj;
            }
          }
          tmp8Result = str2(type[13]);
        }
        return nextPromise;
      }
    });
    return self
      ._prepareEvent(type, arg1, arg2, arg3)
      .then((result) => {
        if (null === result) {
          self.recordDroppedEvent("event_processor", str2);
          let obj = { message: "An event processor returned `null`, will not send event." };
          obj[closure_7] = true;
          throw obj;
        } else {
          if (data.data) {
            if (true === tmp16.data.__sentry__) {
              return result;
            }
          }
          const promise = (function processBeforeSend(self, options, sdkProcessingMetadata, arg3) {
            ({ beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options);
            if (closure_1_8(sdkProcessingMetadata)) {
              if (beforeSend) {
                return beforeSend(sdkProcessingMetadata, arg3);
              }
            }
            let tmp = sdkProcessingMetadata;
            if (self(sdkProcessingMetadata)) {
              if (beforeSendSpan) {
                let obj = closure_0(combined[27]);
                const result = obj.convertTransactionEventToSpanJson(sdkProcessingMetadata);
                let length;
                if (ignoreSpans != null) {
                  length = ignoreSpans.length;
                }
                if (length) {
                  let tmp4Result = tmp4(tmp6[28]);
                  if (tmp4Result.shouldIgnoreSpan(result, ignoreSpans)) {
                    return null;
                  }
                }
                let mergeResult = sdkProcessingMetadata;
                if (beforeSendSpan) {
                  const beforeSendSpanResult = beforeSendSpan(result);
                  if (beforeSendSpanResult) {
                    tmp4Result = tmp4(tmp6[30]);
                    mergeResult = tmp4Result.merge(
                      sdkProcessingMetadata,
                      tmp4(tmp6[27]).convertSpanJsonToTransactionEvent(beforeSendSpanResult),
                    );
                    const tmp4Result1 = tmp4(tmp6[27]);
                  } else {
                    tmp4(tmp6[29]).showSpanDropWarning();
                    mergeResult = sdkProcessingMetadata;
                    const tmp4Result2 = tmp4(tmp6[29]);
                  }
                }
                let tmp2 = mergeResult;
                if (mergeResult.spans) {
                  const items = [];
                  const spans = mergeResult.spans;
                  for (const item10054 of spans) {
                    let tmp19 = item10054;
                    let length1;
                    if (ignoreSpans != null) {
                      length1 = ignoreSpans.length;
                    }
                    if (length1) {
                      let tmp22 = closure_0;
                      let tmp24 = combined;
                      let obj6 = closure_0(combined[28]);
                      if (obj6.shouldIgnoreSpan(tmp19, ignoreSpans)) {
                        let tmp22Result = tmp22(tmp24[28]);
                        let reparentChildSpansResult = tmp22Result.reparentChildSpans(spans, tmp19);
                        continue;
                      }
                    }
                    if (beforeSendSpan) {
                      let beforeSendSpanResult1 = beforeSendSpan(tmp19);
                      if (beforeSendSpanResult1) {
                        let arr = items.push(tmp30);
                      } else {
                        let obj7 = closure_0(combined[29]);
                        let showSpanDropWarningResult1 = obj7.showSpanDropWarning();
                        arr = items.push(tmp19);
                      }
                    } else {
                      let arr1 = items.push(tmp19);
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
                return beforeSendTransaction(tmp2, arg3);
              }
            }
            return tmp;
          })(self, options, result, data);
          const _HermesInternal = HermesInternal;
          str2 = "";
          const combined = "" + closure_8 + " must return `null` or a valid event.";
          obj = str2(type[13]);
          if (obj.isThenable(promise)) {
            let nextPromise = promise.then(
              (result) => {
                let obj = str2(closure_1[13]);
                if (!obj.isPlainObject(result)) {
                  if (null !== result) {
                    obj = { message: combined };
                    obj[closure_6] = true;
                    throw obj;
                  }
                }
                return result;
              },
              (arg0) => {
                const obj = { message: "" + closure_0 + " rejected with " + arg0 };
                obj[closure_6] = true;
                throw obj;
              },
            );
          } else {
            nextPromise = promise;
            if (!tmp8Result.isPlainObject(promise)) {
              nextPromise = promise;
              if (null !== promise) {
                obj = { message: combined };
                obj[closure_6] = true;
                throw obj;
              }
            }
            tmp8Result = str2(type[13]);
          }
          return nextPromise;
        }
      })
      .then((sdkProcessingMetadata) => {
        if (null === sdkProcessingMetadata) {
          self.recordDroppedEvent("before_send", str2);
          if (closure_6) {
            self.recordDroppedEvent("before_send", "span", 1 + type.spans || [].length);
            const arr = type.spans || [];
          }
          const _HermesInternal = HermesInternal;
          let obj = { message: "" + closure_8 + " returned `null`, will not send event." };
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
            const result = self._updateSessionFromEvent(session, sdkProcessingMetadata);
          }
          if (closure_6) {
            sdkProcessingMetadata = sdkProcessingMetadata.sdkProcessingMetadata;
            let num;
            if (sdkProcessingMetadata != null) {
              num = sdkProcessingMetadata.spanCountBeforeProcessing;
            }
            if (!num) {
              num = 0;
            }
            let num3 = 0;
            if (sdkProcessingMetadata.spans) {
              num3 = sdkProcessingMetadata.spans.length;
            }
            const diff = num - num3;
            if (diff > 0) {
              self.recordDroppedEvent("before_send", "span", diff);
            }
          }
          const transaction_info = sdkProcessingMetadata.transaction_info;
          if (closure_6) {
            if (transaction_info) {
              if (sdkProcessingMetadata.transaction !== type.transaction) {
                obj = {};
                const merged = Object.assign(transaction_info);
                obj.source = "custom";
                sdkProcessingMetadata.transaction_info = obj;
              }
            }
          }
          self.sendEvent(sdkProcessingMetadata, closure_2);
          return sdkProcessingMetadata;
        }
      })
      .then(null, (originalException) => {
        let tmp = originalException && typeof originalException === "object";
        if (tmp) {
          tmp = closure_7 in originalException;
        }
        if (!tmp) {
          let tmp3 = originalException && typeof originalException === "object";
          if (tmp3) {
            tmp3 = closure_6 in originalException;
          }
          if (!tmp3) {
            let obj = {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException,
            };
            self.captureException(originalException, obj);
            const _HermesInternal = HermesInternal;
            obj = {
              message:
                "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                originalException,
            };
            obj[closure_6] = true;
            throw obj;
          }
        }
        throw originalException;
      });
  },
};
items[28] = {
  key: "_process",
  value: function _process(arg0, arg1) {
    const self = this;
    closure_0 = arg1;
    this._numProcessing = this._numProcessing + 1;
    const _promiseBuffer = this._promiseBuffer;
    _promiseBuffer.add(arg0).then(
      (result) => {
        self._numProcessing = self._numProcessing - 1;
        return result;
      },
      (arg0) => {
        self._numProcessing = self._numProcessing - 1;
        if (arg0 === closure_0(_self[4]).SENTRY_BUFFER_FULL_ERROR) {
          self.recordDroppedEvent("queue_overflow", closure_0);
        }
        return arg0;
      },
    );
  },
};
items[29] = {
  key: "_clearOutcomes",
  value: function _clearOutcomes() {
    this._outcomes = {};
    const entries = Object.entries(this._outcomes);
    return entries.map((item) => {
      [str, tmp] = item;
      const tmp2 = _slicedToArray(str.split(":"), 2);
      return { reason: tmp2[0], category: tmp2[1], quantity: tmp };
    });
  },
};
items[30] = {
  key: "_flushOutcomes",
  value: function _flushOutcomes() {
    if (closure_0(688).DEBUG_BUILD) {
      const debug = tmp(689).debug;
      debug.log("Flushing outcomes...");
    }
    const self = this;
    const _clearOutcomesResult = this._clearOutcomes();
    if (0 !== _clearOutcomesResult.length) {
      const DEBUG_BUILD = tmp(688).DEBUG_BUILD;
      if (self._dsn) {
        if (DEBUG_BUILD) {
          const debug4 = tmp(689).debug;
          debug4.log("Sending outcomes:", _clearOutcomesResult);
        }
        let tmpResult = tmp(754);
        let tunnel = self._options.tunnel;
        if (tunnel) {
          tmpResult = tmp(702);
          tunnel = tmpResult.dsnToString(self._dsn);
        }
        self.sendEnvelope(tmpResult.createClientReportEnvelope(_clearOutcomesResult, tunnel));
      } else if (DEBUG_BUILD) {
        const debug3 = tmp(689).debug;
        debug3.log("No dsn provided, will not send outcomes");
      }
    } else if (tmp(688).DEBUG_BUILD) {
      const debug2 = tmp(689).debug;
      debug2.log("No outcomes to send");
    }
  },
};

export const Client = _createClass(Client, items);
