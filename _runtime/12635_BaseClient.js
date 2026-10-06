// _runtime/12635_BaseClient.js
import _mod12580 from "metro/12580__.js";
import _mod12587 from "metro/12587__.js";
import _mod12591 from "metro/12591__.js";
import _mod12603 from "metro/12603__.js";
import _mod12604 from "metro/12604__.js";
import _mod12607 from "metro/12607__.js";
import _mod12608 from "metro/12608__.js";
import _mod12616 from "metro/12616__.js";
import _mod12623 from "metro/12623__.js";
import _mod12624 from "metro/12624__.js";
import _mod12627 from "metro/12627__.js";
import _mod12636 from "metro/12636__.js";
import _mod12637 from "metro/12637__.js";
import _mod12638 from "metro/12638__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let dependencyMap, name;

function isErrorEvent(type) {
  return undefined === type.type;
}
function isTransactionEvent(type) {
  return "transaction" === type.type;
}
let c4 = "Not capturing exception because it's already been captured.";
class BaseClient {
  constructor(_options) {
    let envelopeEndpointWithUrlEncodedAuth;
    let recordDroppedEvent;
    let tmp5;
    const self = this;
    let closure_0 = _options;
    const tmp = _classCallCheck(this, BaseClient);
    this._options = _options;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    if (_options.dsn) {
      const tmp2Result = _mod12627;
      self._dsn = tmp2Result.makeDsn(_options.dsn);
      tmp5 = require;
    } else {
      tmp5 = require;
      if (_mod12608.DEBUG_BUILD) {
        const logger = _mod12580.logger;
        logger.warn("No DSN provided, client will not send events.");
        tmp5 = require;
      }
    }
    if (self._dsn) {
      let sdk;
      const getEnvelopeEndpointWithUrlEncodedAuth = tmp5(12634).getEnvelopeEndpointWithUrlEncodedAuth;
      const _dsn = self._dsn;
      const tunnel = _options.tunnel;
      tmp5(12634);
      if (_options._metadata) {
        sdk = _options._metadata.sdk;
      }
      const obj = {
        tunnel: self._options.tunnel,
        recordDroppedEvent: recordDroppedEvent.bind(self),
        url: envelopeEndpointWithUrlEncodedAuth,
      };
      recordDroppedEvent = self.recordDroppedEvent;
      envelopeEndpointWithUrlEncodedAuth = getEnvelopeEndpointWithUrlEncodedAuth(_dsn, tunnel, sdk);
      const transport = _options.transport;
      const merged = Object.assign(_options.transportOptions);
      self._transport = transport(obj);
    }
    const items = ["enableTracing", "tracesSampleRate", "tracesSampler"];
    const found = items.find((item) => item in closure_0 && null == closure_0[item]);
    if (found) {
      const tmp5Result2 = tmp5(12580);
      tmp5Result2.consoleSandbox(() => {
        console.warn(
          "[Sentry] Deprecation warning: `" +
            found +
            "` is set to undefined, which leads to tracing being enabled. In v9, a value of `undefined` will result in tracing being disabled.",
        );
      });
    }
  }
}
const entry = {
  key: "captureException",
  value: function captureException(originalException, arg1, arg2) {
    const self = this;
    let closure_1 = arg2;
    const obj = _mod12591;
    const uuid4Result = obj.uuid4();
    const obj2 = _mod12591;
    if (obj2.checkOrSetAlreadyCaught(originalException)) {
      if (_mod12608.DEBUG_BUILD) {
        const logger = _mod12580.logger;
        logger.log(c4);
      }
      return uuid4Result;
    } else {
      const obj3 = { event_id: uuid4Result };
      const merged = Object.assign(arg1);
      const _process = self._process;
      const eventFromExceptionResult = self.eventFromException(originalException, obj3);
      _process(eventFromExceptionResult.then((result) => self._captureEvent(result, obj3, closure_1)));
      return obj3.event_id;
    }
  },
};
let items = [
  entry,
  {
    key: "captureMessage",
    value: function captureMessage(value, arg1, arg2, arg3) {
      let eventFromMessageResult;
      let obj2;
      const self = this;
      let closure_1 = arg3;
      const obj = { event_id: obj2.uuid4() };
      obj2 = _mod12591;
      const merged = Object.assign(arg2);
      let StringResult = value;
      const obj3 = _mod12587;
      if (!obj3.isParameterizedString(value)) {
        const _String = String;
        StringResult = String(value);
      }
      const tmpResult = _mod12587;
      if (tmpResult.isPrimitive(value)) {
        eventFromMessageResult = self.eventFromMessage(StringResult, arg1, obj);
      } else {
        eventFromMessageResult = self.eventFromException(value, obj);
      }
      self._process(eventFromMessageResult.then((result) => self._captureEvent(result, obj, closure_1)));
      return obj.event_id;
    },
  },
  {
    key: "captureEvent",
    value: function captureEvent(sdkProcessingMetadata, originalException, arg2) {
      let _captureEvent;
      let _process;
      const obj = _mod12591;
      const uuid4Result = obj.uuid4();
      if (originalException) {
        if (originalException.originalException) {
          const tmpResult = _mod12591;
          if (tmpResult.checkOrSetAlreadyCaught(originalException.originalException)) {
            if (_mod12608.DEBUG_BUILD) {
              const logger = _mod12580.logger;
              logger.log(c4);
            }
            return uuid4Result;
          }
        }
      }
      const obj2 = { event_id: uuid4Result };
      const merged = Object.assign(originalException);
      const self = this;
      let capturedSpanScope = (sdkProcessingMetadata.sdkProcessingMetadata || {}).capturedSpanScope;
      ({ _process, _captureEvent } = this);
      if (!capturedSpanScope) {
        capturedSpanScope = arg2;
      }
      _process(_captureEvent(sdkProcessingMetadata, obj2, capturedSpanScope));
      return obj2.event_id;
    },
  },
  {
    key: "captureSession",
    value: function captureSession(release) {
      if (typeof release.release !== "string") {
        if (_mod12608.DEBUG_BUILD) {
          const logger = _mod12580.logger;
          logger.warn("Discarded session because of missing or non-string release");
        }
      } else {
        const self = this;
        this.sendSession(release);
        const obj = _mod12603;
        obj.updateSession(release, { init: false });
      }
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
  {
    key: "flush",
    value: function flush(arg0) {
      let nextPromise;
      const self = this;
      let closure_0 = arg0;
      const _transport = this._transport;
      if (_transport) {
        self.emit("flush");
        const result = self._isClientDoneProcessing(arg0);
        nextPromise = result.then((result) => {
          closure_0 = result;
          const flushResult = _transport.flush(closure_0);
          return flushResult.then((result) => closure_0 && result);
        });
      } else {
        const obj = _mod12604;
        nextPromise = obj.resolvedSyncPromise(true);
      }
      return nextPromise;
    },
  },
  {
    key: "close",
    value: function close(arg0) {
      const self = this;
      const flushResult = this.flush(arg0);
      return flushResult.then((result) => {
        self.getOptions().enabled = false;
        self.emit("close");
        return result;
      });
    },
  },
  {
    key: "getEventProcessors",
    value: function getEventProcessors() {
      return this._eventProcessors;
    },
  },
  {
    key: "addEventProcessor",
    value: function addEventProcessor(arg0) {
      const _eventProcessors = this._eventProcessors;
      _eventProcessors.push(arg0);
    },
  },
  {
    key: "init",
    value: function init() {
      const self = this;
      let _isEnabledResult = this._isEnabled();
      if (!_isEnabledResult) {
        integrations = self._options.integrations;
        _isEnabledResult = integrations.some((name) => {
          name = name.name;
          return name.startsWith("Spotlight");
        });
      }
      if (_isEnabledResult) {
        self._setupIntegrations();
      }
    },
  },
  {
    key: "getIntegrationByName",
    value: function getIntegrationByName(arg0) {
      return this._integrations[arg0];
    },
  },
  {
    key: "addIntegration",
    value: function addIntegration(arg0) {
      const tmp = this._integrations[arg0.name];
      const obj = _mod12636;
      obj.setupIntegration(this, arg0, this._integrations);
      if (!tmp) {
        const items = [arg0];
        const tmp2Result = _mod12636;
        const result = tmp2Result.afterSetupIntegrations(this, items);
      }
    },
  },
  {
    key: "sendEvent",
    value: function sendEvent(type) {
      const self = this;
      let closure_0 = type;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      self.emit("beforeSendEvent", type, obj);
      const obj2 = _mod12623;
      let eventEnvelope = obj2.createEventEnvelope(type, self._dsn, self._options._metadata, self._options.tunnel);
      const tmp3 = obj.attachments || [];
      for (const item10025 of tmp3) {
        let tmp6 = _mod12624;
        let addItemToEnvelope = tmp6.addItemToEnvelope;
        let obj3 = _mod12624;
        eventEnvelope = addItemToEnvelope(eventEnvelope, obj3.createAttachmentEnvelopeItem(item10025));
        continue;
      }
      const sendEnvelopeResult = self.sendEnvelope(eventEnvelope);
      if (sendEnvelopeResult) {
        sendEnvelopeResult.then((result) => self.emit("afterSendEvent", closure_0, result), null);
      }
    },
  },
  {
    key: "sendSession",
    value: function sendSession(toJSON) {
      const obj = _mod12623;
      this.sendEnvelope(obj.createSessionEnvelope(toJSON, this._dsn, this._options._metadata, this._options.tunnel));
    },
  },
  {
    key: "recordDroppedEvent",
    value: function recordDroppedEvent(arg0, arg1, num) {
      const self = this;
      if (this._options.sendClientReports) {
        let num2 = 1;
        if (typeof 1 === "number") {
          num2 = num;
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + arg0 + ":" + arg1;
        if (_mod12608.DEBUG_BUILD) {
          const logger = _mod12580.logger;
          let str3 = "";
          const log = logger.log;
          if (num2 > 1) {
            const _HermesInternal2 = HermesInternal;
            str3 = " (" + num2 + " times)";
          }
          const _HermesInternal3 = HermesInternal;
          log('Recording outcome: "' + combined + '"' + str3);
        }
        let num3 = self._outcomes[combined];
        const _outcomes = self._outcomes;
        if (!num3) {
          num3 = 0;
        }
        _outcomes[combined] = num3 + num2;
      }
    },
  },
  {
    key: "on",
    value: function on(arg0, arg1) {
      let closure_0 = arg1;
      let items = this._hooks[arg0];
      const _hooks = this._hooks;
      if (!items) {
        items = [];
      }
      _hooks[arg0] = items;
      items.push(arg1);
      return () => {
        const index = items.indexOf(closure_0);
        if (index > -1) {
          items.splice(index, 1);
        }
      };
    },
  },
  {
    key: "emit",
    value: function emit(arg0) {
      const args = [...arguments].slice();
      if (this._hooks[arg0]) {
        const item = arr.forEach((fn) => fn(...closure_0));
      }
    },
  },
  {
    key: "sendEnvelope",
    value: function sendEnvelope(arg0) {
      const self = this;
      this.emit("beforeEnvelope", arg0);
      if (this._isEnabled()) {
        let nextPromise;
        if (self._transport) {
          const _transport = self._transport;
          const sendResult = _transport.send(arg0);
          nextPromise = sendResult.then(null, (arg0) => {
            if (_mod12608.DEBUG_BUILD) {
              const logger = _mod12580.logger;
              logger.error("Error while sending envelope:", arg0);
            }
            return arg0;
          });
        }
        return nextPromise;
      }
      if (_mod12608.DEBUG_BUILD) {
        let logger = _mod12580.logger;
        logger.error("Transport disabled");
      }
      const tmp2Result = _mod12604;
      nextPromise = tmp2Result.resolvedSyncPromise({});
    },
  },
  {
    key: "_setupIntegrations",
    value: function _setupIntegrations() {
      integrations = this._options.integrations;
      const obj = _mod12636;
      this._integrations = obj.setupIntegrations(this, integrations);
      const obj2 = _mod12636;
      const result = obj2.afterSetupIntegrations(this, integrations);
    },
  },
  {
    key: "_updateSessionFromEvent",
    value: function _updateSessionFromEvent(status, level) {
      let errors;
      let flag = "fatal" === level.level;
      let flag2 = false;
      if (level.exception && level.exception.values) {
        const iter = (level.exception && level.exception.values)[Symbol.iterator]();
        flag2 = true;
        while (iter !== undefined) {
          let mechanism = iter.next().mechanism;
          if (mechanism) {
            if (false === tmp5.handled) {
              flag = true;
              iter.return();
              flag2 = true;
              break;
            }
            break;
          }
          continue;
        }
      }
      let tmp8 = "ok" === status.status;
      let tmp9 = tmp8 && 0 === status.errors;
      if (!tmp9) {
        if (tmp8) {
          tmp8 = flag;
        }
        tmp9 = tmp8;
      }
      if (tmp9) {
        let obj = flag;
        const updateSession = _mod12603.updateSession;
        _mod12603;
        if (flag) {
          obj = { status: "crashed" };
        }
        const obj2 = { errors };
        const merged = Object.assign(obj);
        errors = status.errors;
        if (!errors) {
          const _Number = Number;
          if (!flag2) {
            flag2 = flag;
          }
          errors = _Number(flag2);
        }
        const self = this;
        updateSession(status, obj2);
        this.captureSession(status);
      }
    },
  },
  {
    key: "_isClientDoneProcessing",
    value: function _isClientDoneProcessing(arg0) {
      const self = this;
      let closure_0 = arg0;
      const syncPromise = new _mod12604.SyncPromise((arg0) => {
        let closure_2;
        closure_0 = arg0;
        let c1 = 0;
        const interval = setInterval(() => {
          if (0 == self._numProcessing) {
            const _clearInterval2 = clearInterval;
            clearInterval(closure_2);
            closure_0(true);
          } else {
            const sum = c1 + 1;
            c1 = sum;
            const tmp3 = closure_0 && sum >= closure_0;
            if (tmp3) {
              const _clearInterval = clearInterval;
              clearInterval(closure_2);
              closure_0(false);
            }
          }
        }, 1);
      });
      return syncPromise;
    },
  },
  {
    key: "_isEnabled",
    value: function _isEnabled() {
      const tmp = false !== this.getOptions().enabled && undefined !== this._transport;
      return tmp;
    },
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(type, integrations) {
      const self = this;
      let currentScope = arg2;
      if (arg2 === undefined) {
        let obj = currentScope(self[14]);
        currentScope = obj.getCurrentScope();
      }
      let isolationScope = arg3;
      if (arg3 === undefined) {
        let obj2 = currentScope(self[14]);
        isolationScope = obj2.getIsolationScope();
      }
      const options = self.getOptions();
      const keys = Object.keys(self._integrations);
      const tmp8 = !integrations.integrations && keys.length > 0;
      if (tmp8) {
        integrations.integrations = keys;
      }
      self.emit("preprocessEvent", type, integrations);
      if (!type.type) {
        let event_id = type.event_id;
        const setLastEventId = isolationScope.setLastEventId;
        if (!event_id) {
          event_id = integrations.event_id;
        }
        setLastEventId(event_id);
      }
      let obj3 = currentScope(self[15]);
      const prepareEventResult = obj3.prepareEvent(options, type, integrations, currentScope, self, isolationScope);
      return prepareEventResult.then((contexts) => {
        let obj2;
        let obj3;
        if (null === contexts) {
          return contexts;
        } else {
          const obj = { trace: obj2.getTraceContextFromScope(currentScope) };
          obj2 = _mod12607;
          const merged = Object.assign(contexts.contexts);
          contexts.contexts = obj;
          const obj4 = { dynamicSamplingContext: obj3.getDynamicSamplingContextFromScope(self, currentScope) };
          obj3 = _mod12616;
          const merged1 = Object.assign(contexts.sdkProcessingMetadata);
          contexts.sdkProcessingMetadata = obj4;
          return contexts;
        }
      });
    },
  },
  {
    key: "_captureEvent",
    value: function _captureEvent(arg0) {
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      const _processEventResult = this._processEvent(arg0, obj, arg2);
      return _processEventResult.then(
        (event_id) => event_id.event_id,
        (logLevel) => {
          if (_mod12608.DEBUG_BUILD) {
            if (logLevel instanceof _mod12637.SentryError) {
              if ("log" === logLevel.logLevel) {
                const logger2 = _mod12580.logger;
                logger2.log(logLevel.message);
              }
            }
            const logger = _mod12580.logger;
            logger.warn(logLevel);
          }
        },
      );
    },
  },
  {
    key: "_processEvent",
    value: function _processEvent(type, arg1, arg2) {
      let parseSampleRateResult;
      let str;
      let type2;
      let self = this;
      dependencyMap = type;
      const data = arg1;
      const session = arg2;
      const options = this.getOptions();
      const sampleRate = options.sampleRate;
      let closure_5 = "transaction" === type.type;
      ({ type: type2, type } = type);
      if (!type2) {
        type2 = "error";
      }
      let closure_6 = "before send for type `" + type2 + "`";
      if (undefined !== sampleRate) {
        let tmp3 = str;
        let obj = str(12620);
        parseSampleRateResult = obj.parseSampleRate(sampleRate);
      }
      if (undefined === type) {
        if (typeof parseSampleRateResult === "number") {
          const _Math = Math;
          if (Math.random() > parseSampleRateResult) {
            const str2 = "error";
            let recordDroppedEventResult = self.recordDroppedEvent("sample_rate", "error", type);
            let _HermesInternal = HermesInternal;
            let self2 = this;
            let self3 = this;
            const rejectedSyncPromise = str(12604).rejectedSyncPromise;
            let sentryError = new str(12637).SentryError(
              "Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")",
              "log",
            );
            return rejectedSyncPromise(sentryError);
          }
        }
      }
      str = "replay";
      if ("replay_event" !== type2) {
        str = type2;
      }
      const tmp5 = type.sdkProcessingMetadata || {};
      const _prepareEventResult = self._prepareEvent(type, arg1, arg2, tmp5.capturedSpanIsolationScope);
      let nextPromise = _prepareEventResult.then(function (result) {
        function processBeforeSend(self, options, spans, data) {
          let beforeSend;
          let beforeSendSpan;
          let beforeSendTransaction;
          let length;
          ({ beforeSend, beforeSendTransaction, beforeSendSpan } = options);
          if (closure_1_5(spans)) {
            if (beforeSend) {
              return beforeSend(spans, data);
            }
          }
          if (closure_1_6(spans)) {
            if (spans.spans) {
              if (beforeSendSpan) {
                const items = [];
                spans = spans.spans;
                const iter = spans[Symbol.iterator]();
                while (iter !== undefined) {
                  let beforeSendSpanResult = beforeSendSpan(iter.next());
                  if (beforeSendSpanResult) {
                    let arr = items.push(tmp5);
                  } else {
                    let obj = str(type[20]);
                    let showSpanDropWarningResult = obj.showSpanDropWarning();
                    let recordDroppedEventResult = self.recordDroppedEvent("before_send", "span");
                  }
                  continue;
                }
                spans.spans = items;
              }
            }
            if (beforeSendTransaction) {
              if (spans.spans) {
                const obj2 = { spanCountBeforeProcessing: length };
                length = spans.spans.length;
                const merged = Object.assign(spans.sdkProcessingMetadata);
                spans.sdkProcessingMetadata = obj2;
              }
              return beforeSendTransaction(spans, data);
            }
          }
          return spans;
        }
        if (null === result) {
          let recordDroppedEventResult = self.recordDroppedEvent("event_processor", str, type);
          const self3 = this;
          const self4 = this;
          let sentryError = new _mod12637.SentryError(
            "An event processor returned `null`, will not send event.",
            "log",
          );
          throw sentryError;
        } else {
          let nextPromise;
          if (data.data) {
            if (true === data.data.__sentry__) {
              return result;
            }
          }
          const promise = processBeforeSend(self, options, result, data);
          let closure_0 = closure_6;
          let tmp6 = globalThis;
          const _HermesInternal = HermesInternal;
          str = " must return `null` or a valid event.";
          const combined = "" + closure_6 + " must return `null` or a valid event.";
          let obj = _mod12587;
          if (obj.isThenable(promise)) {
            nextPromise = promise.then(
              function (result) {
                const obj = str(type[8]);
                if (!obj.isPlainObject(result)) {
                  if (null !== result) {
                    self = this;
                    const self2 = this;
                    const sentryError = new str(type[17]).SentryError(combined);
                    throw sentryError;
                  }
                }
                return result;
              },
              (arg0) => {
                const sentryError = new str(type[17]).SentryError("" + closure_0 + " rejected with " + arg0);
                throw sentryError;
              },
            );
          } else {
            let obj2 = _mod12587;
            nextPromise = promise;
            if (!obj2.isPlainObject(promise)) {
              nextPromise = promise;
              if (null !== promise) {
                self = this;
                let self2 = this;
                const sentryError1 = new _mod12637.SentryError(combined);
                throw sentryError1;
              }
            }
          }
          return nextPromise;
        }
      });
      const nextPromise1 = nextPromise.then(function (sdkProcessingMetadata) {
        if (null === sdkProcessingMetadata) {
          self.recordDroppedEvent("before_send", str, type);
          const obj2 = self;
          if (closure_5) {
            const arr = type.spans || [];
            obj2.recordDroppedEvent("before_send", "span", 1 + arr.length);
          }
          const _HermesInternal = HermesInternal;
          self = this;
          const self2 = this;
          const sentryError = new _mod12637.SentryError(
            "" + closure_6 + " returned `null`, will not send event.",
            "log",
          );
          throw sentryError;
        } else {
          const tmp = session && session.getSession();
          const tmp3 = !closure_5 && tmp;
          if (tmp3) {
            const result = self._updateSessionFromEvent(tmp, sdkProcessingMetadata);
          }
          if (closure_5) {
            let num2 = 0;
            const tmp6 =
              (sdkProcessingMetadata.sdkProcessingMetadata &&
                sdkProcessingMetadata.sdkProcessingMetadata.spanCountBeforeProcessing) ||
              0;
            if (sdkProcessingMetadata.spans) {
              num2 = sdkProcessingMetadata.spans.length;
            }
            const diff = tmp6 - num2;
            if (diff > 0) {
              self.recordDroppedEvent("before_send", "span", diff);
            }
          }
          const transaction_info = sdkProcessingMetadata.transaction_info;
          if (closure_5) {
            if (transaction_info) {
              if (sdkProcessingMetadata.transaction !== type.transaction) {
                const obj = { source: "custom" };
                const merged = Object.assign(transaction_info);
                sdkProcessingMetadata.transaction_info = obj;
              }
            }
          }
          self.sendEvent(sdkProcessingMetadata, data);
          return sdkProcessingMetadata;
        }
      });
      return nextPromise1.then(null, function (originalException) {
        if (originalException instanceof _mod12637.SentryError) {
          throw originalException;
        } else {
          const obj = { data: { __sentry__: true }, originalException };
          self.captureException(originalException, obj);
          const _HermesInternal = HermesInternal;
          self = this;
          const self2 = this;
          const sentryError = new _mod12637.SentryError(
            "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
              originalException,
          );
          throw sentryError;
        }
      });
    },
  },
  {
    key: "_process",
    value: function _process(promise) {
      const self = this;
      this._numProcessing = this._numProcessing + 1;
      promise.then(
        (result) => {
          self._numProcessing = self._numProcessing - 1;
          return result;
        },
        (arg0) => {
          self._numProcessing = self._numProcessing - 1;
          return arg0;
        },
      );
    },
  },
  {
    key: "_clearOutcomes",
    value: function _clearOutcomes() {
      this._outcomes = {};
      const entries = Object.entries(this._outcomes);
      return entries.map((item) => {
        let str;
        let tmp;
        [str, tmp] = item;
        const tmp2 = _slicedToArray(str.split(":"), 2);
        return { reason: tmp2[0], category: tmp2[1], quantity: tmp };
      });
    },
  },
  {
    key: "_flushOutcomes",
    value: function _flushOutcomes() {
      if (_mod12608.DEBUG_BUILD) {
        const logger = _mod12580.logger;
        logger.log("Flushing outcomes...");
      }
      const self = this;
      const _clearOutcomesResult = this._clearOutcomes();
      if (0 !== _clearOutcomesResult.length) {
        const _dsn = self._dsn;
        const DEBUG_BUILD = _mod12608.DEBUG_BUILD;
        if (_dsn) {
          if (DEBUG_BUILD) {
            const logger4 = _mod12580.logger;
            logger4.log("Sending outcomes:", _clearOutcomesResult);
          }
          let tunnel = self._options.tunnel;
          const createClientReportEnvelope = _mod12638.createClientReportEnvelope;
          _mod12638;
          if (tunnel) {
            const tmpResult2 = _mod12627;
            tunnel = tmpResult2.dsnToString(self._dsn);
          }
          self.sendEnvelope(createClientReportEnvelope(_clearOutcomesResult, tunnel));
        } else if (DEBUG_BUILD) {
          const logger3 = _mod12580.logger;
          logger3.log("No dsn provided, will not send outcomes");
        }
      } else if (_mod12608.DEBUG_BUILD) {
        const logger2 = _mod12580.logger;
        logger2.log("No outcomes to send");
      }
    },
  },
];
const BaseClient_export = _createClass(BaseClient, items);

export { BaseClient_export as BaseClient };
