// _runtime/12304_isErrorEvent.js
import closure_2 from "metro/00032__slicedToArray.js";
import closure_3 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let BaseClient = require;
function isErrorEvent(type) {
  return undefined === type.type;
}
function isTransactionEvent(type) {
  return "transaction" === type.type;
}
let c4 = "Not capturing exception because it's already been captured.";
class BaseClient {
  constructor(arg0) {
    self = this;
    closure_0 = global;
    tmp = closure_3(this, closure_0);
    this._options = global;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    tmp2 = BaseClient;
    tmp3 = closure_1;
    if (global.dsn) {
      tmp2Result = require("dsnFromString");
      self._dsn = tmp2Result.makeDsn(global.dsn);
      tmp4 = tmp3;
      tmp5 = tmp2;
    } else {
      tmp4 = tmp3;
      tmp5 = tmp2;
      if (require("__SENTRY_DEBUG__").DEBUG_BUILD) {
        logger = require("consoleSandbox").logger;
        str = "No DSN provided, client will not send events.";
        warnResult = logger.warn("No DSN provided, client will not send events.");
        tmp4 = tmp3;
        tmp5 = tmp2;
      }
    }
    if (self._dsn) {
      tmp5Result = require("getEnvelopeEndpointWithUrlEncodedAuth");
      sdk = undefined;
      if (global._metadata) {
        sdk = global._metadata.sdk;
      }
      obj = { tunnel: null, recordDroppedEvent: null };
      obj[0] = self._options.tunnel;
      recordDroppedEvent = self.recordDroppedEvent;
      envelopeEndpointWithUrlEncodedAuth = tmp5Result.getEnvelopeEndpointWithUrlEncodedAuth(self._dsn, global.tunnel, sdk);
      obj[1] = recordDroppedEvent.bind(self);
      tmp9 = obj;
      merged = Object.assign(global.transportOptions);
      obj.url = envelopeEndpointWithUrlEncodedAuth;
      self._transport = global.transport(obj);
    }
    items = ["enableTracing", "tracesSampleRate", "tracesSampler"];
    found = items.find((arg0) => {
      let tmp = arg0 in table;
      if (tmp) {
        tmp = null == table[arg0];
      }
      return tmp;
    });
    closure_1 = found;
    if (found) {
      tmp5Result1 = require("consoleSandbox");
      consoleSandboxResult = tmp5Result1.consoleSandbox(() => {
        console.warn("[Sentry] Deprecation warning: `" + found + "` is set to undefined, which leads to tracing being enabled. In v9, a value of `undefined` will result in tracing being disabled.");
      });
    }
    return;
  }
}
let items = [
  {
    key: "captureException",
    value: function captureException(arg0, arg1, arg2) {
      let self = this;
      self = this;
      dependencyMap = arg2;
      obj = obj(12260);
      const uuid4Result = obj.uuid4();
      if (obj2.checkOrSetAlreadyCaught(arg0)) {
        if (tmp(12277).DEBUG_BUILD) {
          const logger = tmp(12249).logger;
          logger.log(c4);
        }
        return uuid4Result;
      } else {
        obj = { event_id: null };
        obj[0] = uuid4Result;
        const merged = Object.assign(arg1);
        self._process(self.eventFromException(arg0, obj).then((arg0) => self._captureEvent(arg0, obj, closure_1)));
        return obj.event_id;
      }
      obj2 = obj(12260);
    }
  },
  {
    key: "captureMessage",
    value: function captureMessage(arg0, arg1, arg2, arg3) {
      let self = this;
      self = this;
      dependencyMap = arg3;
      obj = { event_id: obj(12260).uuid4() };
      const merged = Object.assign(arg2);
      const obj2 = obj(12260);
      const tmp = obj;
      let StringResult = arg0;
      if (!obj3.isParameterizedString(arg0)) {
        const _String = String;
        StringResult = String(arg0);
      }
      obj3 = obj(12256);
      if (tmpResult.isPrimitive(arg0)) {
        let eventFromMessageResult = self.eventFromMessage(StringResult, arg1, obj);
      } else {
        eventFromMessageResult = self.eventFromException(arg0, obj);
      }
      self._process(eventFromMessageResult.then((arg0) => self._captureEvent(arg0, obj, closure_1)));
      return obj.event_id;
    }
  },
  {
    key: "captureEvent",
    value: function captureEvent(sdkProcessingMetadata, originalException) {
      let obj = BaseClient(12260);
      const uuid4Result = obj.uuid4();
      if (originalException) {
        if (originalException.originalException) {
          if (tmpResult.checkOrSetAlreadyCaught(originalException.originalException)) {
            if (tmp(12277).DEBUG_BUILD) {
              const logger = tmp(12249).logger;
              logger.log(c4);
            }
            return uuid4Result;
          }
          tmpResult = tmp(12260);
        }
      }
      obj = { event_id: uuid4Result };
      const merged = Object.assign(originalException);
      const self = this;
      let capturedSpanScope = sdkProcessingMetadata.sdkProcessingMetadata || {}.capturedSpanScope;
      ({ _process, _captureEvent } = this);
      if (!capturedSpanScope) {
        capturedSpanScope = arg2;
      }
      _process(_captureEvent(sdkProcessingMetadata, obj, capturedSpanScope));
      return obj.event_id;
    }
  },
  {
    key: "captureSession",
    value: function captureSession(release) {
      if (typeof release.release !== "string") {
        if (BaseClient(12277).DEBUG_BUILD) {
          const logger = tmp(12249).logger;
          logger.warn("Discarded session because of missing or non-string release");
        }
        tmp = BaseClient;
      } else {
        const self = this;
        this.sendSession(release);
        BaseClient(12272).updateSession(release, { init: false });
        const obj = BaseClient(12272);
      }
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
  {
    key: "flush",
    value: function flush(arg0) {
      const self = this;
      BaseClient = arg0;
      const _transport = this._transport;
      if (_transport) {
        self.emit("flush");
        const result = self._isClientDoneProcessing(arg0);
        let nextPromise = result.then((arg0) => {
          closure_0 = arg0;
          return _transport.flush(closure_0).then((arg0) => {
            let tmp = closure_0;
            if (closure_0) {
              tmp = arg0;
            }
            return tmp;
          });
        });
      } else {
        nextPromise = BaseClient(_transport[10]).resolvedSyncPromise(true);
        const obj = BaseClient(_transport[10]);
      }
      return nextPromise;
    }
  },
  {
    key: "close",
    value: function close(arg0) {
      const self = this;
      return this.flush(arg0).then((arg0) => {
        self.getOptions().enabled = false;
        self.emit("close");
        return arg0;
      });
    }
  },
  {
    key: "getEventProcessors",
    value: function getEventProcessors() {
      return this._eventProcessors;
    }
  },
  {
    key: "addEventProcessor",
    value: function addEventProcessor(arg0) {
      const _eventProcessors = this._eventProcessors;
      _eventProcessors.push(arg0);
    }
  },
  {
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
    }
  },
  {
    key: "getIntegrationByName",
    value: function getIntegrationByName(arg0) {
      return this._integrations[arg0];
    }
  },
  {
    key: "addIntegration",
    value: function addIntegration(arg0) {
      BaseClient(12305).setupIntegration(this, arg0, this._integrations);
      if (!this._integrations[arg0.name]) {
        const items = [arg0];
        const result = BaseClient(12305).afterSetupIntegrations(this, items);
        const tmpResult = BaseClient(12305);
      }
    }
  },
  {
    key: "sendEvent",
    value: function sendEvent(arg0) {
      let self = this;
      self = this;
      BaseClient = arg0;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      self.emit("beforeSendEvent", arg0, obj);
      let eventEnvelope = BaseClient(self[12]).createEventEnvelope(arg0, self._dsn, self._options._metadata, self._options.tunnel);
      for (const item10025 of tmp3) {
        let tmp4 = BaseClient;
        let tmp5 = self;
        let obj3 = BaseClient(self[13]);
        let tmp6 = eventEnvelope;
        let obj4 = BaseClient(self[13]);
        eventEnvelope = obj3.addItemToEnvelope(eventEnvelope, obj4.createAttachmentEnvelopeItem(item10025));
        continue;
      }
      const sendEnvelopeResult = self.sendEnvelope(eventEnvelope);
      if (sendEnvelopeResult) {
        sendEnvelopeResult.then((arg0) => self.emit("afterSendEvent", closure_0, arg0), null);
      }
    }
  },
  {
    key: "sendSession",
    value: function sendSession(arg0) {
      this.sendEnvelope(BaseClient(12292).createSessionEnvelope(arg0, this._dsn, this._options._metadata, this._options.tunnel));
    }
  },
  {
    key: "recordDroppedEvent",
    value: function recordDroppedEvent(arg0, arg1, num) {
      const self = this;
      if (this._options.sendClientReports) {
        let num2 = 1;
        if (typeof num === "number") {
          num2 = num;
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + arg0 + ":" + arg1;
        if (BaseClient(12277).DEBUG_BUILD) {
          const logger = tmp6(12249).logger;
          let str3 = "";
          if (num2 > 1) {
            const _HermesInternal2 = HermesInternal;
            str3 = " (" + num2 + " times)";
          }
          const _HermesInternal3 = HermesInternal;
          logger.log("Recording outcome: \"" + combined + "\"" + str3);
        }
        let num3 = self._outcomes[combined];
        if (!num3) {
          num3 = 0;
        }
        self._outcomes[combined] = num3 + num2;
        tmp6 = BaseClient;
      }
    }
  },
  {
    key: "on",
    value: function on(arg0, arg1) {
      closure_0 = arg1;
      let items = this._hooks[arg0];
      if (!items) {
        items = [];
      }
      this._hooks[arg0] = items;
      items.push(arg1);
      return () => {
        const index = items.indexOf(closure_0);
        if (index > -1) {
          items.splice(index, 1);
        }
      };
    }
  },
  {
    key: "emit",
    value: function emit(arg0) {
      closure_0 = [...arguments].slice();
      if (this._hooks[arg0]) {
        const item = arr.forEach((arg0) => arg0(...closure_0));
      }
    }
  },
  {
    key: "sendEnvelope",
    value: function sendEnvelope(arg0) {
      const self = this;
      this.emit("beforeEnvelope", arg0);
      if (this._isEnabled()) {
        if (self._transport) {
          const _transport = self._transport;
          let nextPromise = _transport.send(arg0).then(null, (arg0) => {
            if (callback(table[4]).DEBUG_BUILD) {
              const logger = callback(table[5]).logger;
              logger.error("Error while sending envelope:", arg0);
            }
            return arg0;
          });
          const sendResult = _transport.send(arg0);
        }
        return nextPromise;
      }
      if (BaseClient(12277).DEBUG_BUILD) {
        let logger = tmp2(12249).logger;
        logger.error("Transport disabled");
      }
      nextPromise = BaseClient(12273).resolvedSyncPromise({});
    }
  },
  {
    key: "_setupIntegrations",
    value: function _setupIntegrations() {
      const integrations = this._options.integrations;
      this._integrations = BaseClient(12305).setupIntegrations(this, integrations);
      const obj = BaseClient(12305);
      const result = BaseClient(12305).afterSetupIntegrations(this, integrations);
    }
  },
  {
    key: "_updateSessionFromEvent",
    value: function _updateSessionFromEvent(status, level) {
      let flag = "fatal" === level.level;
      let flag2 = false;
      if (level.exception && level.exception.values) {
        const iter = tmp[Symbol.iterator]();
        flag2 = true;
        while (iter !== undefined) {
          let mechanism = iter.next().mechanism;
          if (mechanism) {
            let tmp6 = mechanism;
            if (false === tmp5.handled) {
              flag = true;
              let tmp7 = iter;
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
      let tmp9 = tmp8;
      if (tmp8) {
        tmp9 = 0 === status.errors;
      }
      if (!tmp9) {
        if (tmp8) {
          tmp8 = flag;
        }
        tmp9 = tmp8;
      }
      if (tmp9) {
        let obj = BaseClient(12272);
        obj = flag;
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
  },
  {
    key: "_isClientDoneProcessing",
    value: function _isClientDoneProcessing(arg0) {
      const self = this;
      BaseClient = arg0;
      return new BaseClient(self[10]).SyncPromise((arg0) => {
        closure_0 = arg0;
        c1 = 0;
        const interval = setInterval(() => {
          if (0 == _numProcessing._numProcessing) {
            const _clearInterval2 = clearInterval;
            clearInterval(closure_2);
            callback(true);
          } else {
            const sum = _numProcessing + 1;
            _numProcessing = sum;
            let tmp3 = callback;
            if (callback) {
              tmp3 = sum >= callback;
            }
            if (tmp3) {
              const _clearInterval = clearInterval;
              clearInterval(closure_2);
              callback(false);
            }
          }
        }, 1);
      });
    }
  },
  {
    key: "_isEnabled",
    value: function _isEnabled() {
      let tmp = false !== this.getOptions().enabled;
      if (tmp) {
        tmp = undefined !== this._transport;
      }
      return tmp;
    }
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(type, integrations) {
      let self = this;
      self = this;
      let currentScope = arg2;
      if (arg2 === undefined) {
        currentScope = currentScope(self[14]).getCurrentScope();
        let obj = currentScope(self[14]);
      }
      let isolationScope = arg3;
      if (arg3 === undefined) {
        isolationScope = currentScope(self[14]).getIsolationScope();
        const obj3 = currentScope(self[14]);
      }
      const options = self.getOptions();
      const keys = Object.keys(self._integrations);
      integrations = integrations.integrations;
      let tmp7 = !integrations;
      if (!integrations) {
        tmp7 = keys.length > 0;
      }
      if (tmp7) {
        integrations.integrations = keys;
      }
      self.emit("preprocessEvent", type, integrations);
      if (!type.type) {
        let event_id = type.event_id;
        if (!event_id) {
          event_id = integrations.event_id;
        }
        isolationScope.setLastEventId(event_id);
      }
      const obj4 = currentScope(self[15]);
      return currentScope(self[15]).prepareEvent(options, type, integrations, currentScope, self, isolationScope).then((contexts) => {
        if (null === contexts) {
          return contexts;
        } else {
          let obj = { trace: null };
          obj[0] = currentScope(self[14]).getTraceContextFromScope(currentScope);
          const merged = Object.assign(contexts.contexts);
          contexts.contexts = obj;
          const obj2 = currentScope(self[14]);
          obj = { dynamicSamplingContext: null };
          obj[0] = currentScope(self[16]).getDynamicSamplingContextFromScope(self, currentScope);
          const merged1 = Object.assign(contexts.sdkProcessingMetadata);
          contexts.sdkProcessingMetadata = obj;
          return contexts;
        }
      });
    }
  },
  {
    key: "_captureEvent",
    value: function _captureEvent(arg0) {
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      return this._processEvent(arg0, obj, arg2).then((event_id) => event_id.event_id, (logLevel) => {
        if (callback(table[4]).DEBUG_BUILD) {
          if (logLevel instanceof tmp(tmp2[17]).SentryError) {
            if ("log" === logLevel.logLevel) {
              const logger2 = tmp(tmp2[5]).logger;
              logger2.log(logLevel.message);
            }
          }
          const logger = tmp(tmp2[5]).logger;
          logger.warn(logLevel);
        }
      });
    }
  },
  {
    key: "_processEvent",
    value: function _processEvent(type) {
      let self = this;
      self = this;
      dependencyMap = type;
      closure_2 = arg1;
      closure_3 = arg2;
      const options = this.getOptions();
      const sampleRate = options.sampleRate;
      closure_5 = "transaction" === type.type;
      ({ type: type2, type } = type);
      if (!type2) {
        type2 = "error";
      }
      closure_6 = "before send for type `" + type2 + "`";
      if (undefined !== sampleRate) {
        const parseSampleRateResult = str(12289).parseSampleRate(sampleRate);
        let obj = str(12289);
      }
      if (undefined === type) {
        if (typeof parseSampleRateResult === "number") {
          const _Math = Math;
          if (Math.random() > parseSampleRateResult) {
            self.recordDroppedEvent("sample_rate", "error", type);
            let _HermesInternal = HermesInternal;
            let sentryError = new str(12306).SentryError("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")", "log");
            return str(12273).rejectedSyncPromise(sentryError);
          }
        }
      }
      str = "replay";
      if ("replay_event" !== type2) {
        str = type2;
      }
      const _prepareEventResult = self._prepareEvent(type, arg1, arg2, type.sdkProcessingMetadata || {}.capturedSpanIsolationScope);
      const tmp5 = type.sdkProcessingMetadata || {};
      let nextPromise = self._prepareEvent(type, arg1, arg2, type.sdkProcessingMetadata || {}.capturedSpanIsolationScope).then((spans) => {
        if (null === spans) {
          self.recordDroppedEvent("event_processor", closure_0, combined);
          let sentryError = new str(type[17]).SentryError("An event processor returned `null`, will not send event.", "log");
          throw sentryError;
        } else {
          if (data.data) {
            if (true === tmp30.data.__sentry__) {
              return spans;
            }
          }
          const promise = (function processBeforeSend(self, options, spans, arg3) {
            ({ beforeSend, beforeSendTransaction, beforeSendSpan } = options);
            if (callback2(spans)) {
              if (beforeSend) {
                return beforeSend(spans, arg3);
              }
            }
            if (callback3(spans)) {
              if (spans.spans) {
                if (beforeSendSpan) {
                  const items = [];
                  spans = spans.spans;
                  const iter = spans[Symbol.iterator]();
                  while (iter !== undefined) {
                    let beforeSendSpanResult = beforeSendSpan(iter.next());
                    if (beforeSendSpanResult) {
                      let tmp10 = beforeSendSpanResult;
                      let arr = items.push(tmp5);
                    } else {
                      let tmp6 = callback;
                      let tmp7 = combined;
                      let obj = callback(combined[20]);
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
                  obj = {};
                  const merged = Object.assign(spans.sdkProcessingMetadata);
                  obj.spanCountBeforeProcessing = spans.spans.length;
                  spans.sdkProcessingMetadata = obj;
                }
                return beforeSendTransaction(spans, arg3);
              }
            }
            return spans;
          })(self, options, spans, data);
          closure_0 = closure_6;
          combined = undefined;
          const _HermesInternal = HermesInternal;
          combined = "" + closure_6 + " must return `null` or a valid event.";
          if (obj.isThenable(promise)) {
            let nextPromise = promise.then((arg0) => {
              if (!obj.isPlainObject(arg0)) {
                if (null !== arg0) {
                  const sentryError = new callback(combined[17]).SentryError(combined);
                  throw sentryError;
                }
              }
              return arg0;
            }, (arg0) => {
              const sentryError = new callback(combined[17]).SentryError("" + callback + " rejected with " + arg0);
              throw sentryError;
            });
          } else {
            nextPromise = promise;
            if (!obj2.isPlainObject(promise)) {
              nextPromise = promise;
              if (null !== promise) {
                const sentryError1 = new str(type[17]).SentryError(combined);
                throw sentryError1;
              }
            }
            obj2 = str(type[8]);
          }
          return nextPromise;
        }
      });
      return self._prepareEvent(type, arg1, arg2, type.sdkProcessingMetadata || {}.capturedSpanIsolationScope).then((spans) => {
        if (null === spans) {
          self.recordDroppedEvent("event_processor", closure_0, combined);
          let sentryError = new str(type[17]).SentryError("An event processor returned `null`, will not send event.", "log");
          throw sentryError;
        } else {
          if (data.data) {
            if (true === tmp30.data.__sentry__) {
              return spans;
            }
          }
          const promise = (function processBeforeSend(self, options, spans, arg3) {
            ({ beforeSend, beforeSendTransaction, beforeSendSpan } = options);
            if (callback2(spans)) {
              if (beforeSend) {
                return beforeSend(spans, arg3);
              }
            }
            if (callback3(spans)) {
              if (spans.spans) {
                if (beforeSendSpan) {
                  const items = [];
                  spans = spans.spans;
                  const iter = spans[Symbol.iterator]();
                  while (iter !== undefined) {
                    let beforeSendSpanResult = beforeSendSpan(iter.next());
                    if (beforeSendSpanResult) {
                      let tmp10 = beforeSendSpanResult;
                      let arr = items.push(tmp5);
                    } else {
                      let tmp6 = callback;
                      let tmp7 = combined;
                      let obj = callback(combined[20]);
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
                  obj = {};
                  const merged = Object.assign(spans.sdkProcessingMetadata);
                  obj.spanCountBeforeProcessing = spans.spans.length;
                  spans.sdkProcessingMetadata = obj;
                }
                return beforeSendTransaction(spans, arg3);
              }
            }
            return spans;
          })(self, options, spans, data);
          closure_0 = closure_6;
          combined = undefined;
          const _HermesInternal = HermesInternal;
          combined = "" + closure_6 + " must return `null` or a valid event.";
          if (obj.isThenable(promise)) {
            let nextPromise = promise.then((arg0) => {
              if (!obj.isPlainObject(arg0)) {
                if (null !== arg0) {
                  const sentryError = new callback(combined[17]).SentryError(combined);
                  throw sentryError;
                }
              }
              return arg0;
            }, (arg0) => {
              const sentryError = new callback(combined[17]).SentryError("" + callback + " rejected with " + arg0);
              throw sentryError;
            });
          } else {
            nextPromise = promise;
            if (!obj2.isPlainObject(promise)) {
              nextPromise = promise;
              if (null !== promise) {
                const sentryError1 = new str(type[17]).SentryError(combined);
                throw sentryError1;
              }
            }
            obj2 = str(type[8]);
          }
          return nextPromise;
        }
      }).then((sdkProcessingMetadata) => {
        if (null === sdkProcessingMetadata) {
          self.recordDroppedEvent("before_send", str, type);
          if (closure_5) {
            self.recordDroppedEvent("before_send", "span", 1 + type.spans || [].length);
            const arr = type.spans || [];
          }
          const _HermesInternal = HermesInternal;
          const sentryError = new str(type[17]).SentryError("" + closure_6 + " returned `null`, will not send event.", "log");
          throw sentryError;
        } else {
          let session = closure_3;
          if (closure_3) {
            session = closure_3.getSession();
          }
          let tmp3 = !closure_5;
          if (!closure_5) {
            tmp3 = session;
          }
          if (tmp3) {
            const result = self._updateSessionFromEvent(session, sdkProcessingMetadata);
          }
          if (closure_5) {
            let num2 = 0;
            if (sdkProcessingMetadata.spans) {
              num2 = sdkProcessingMetadata.spans.length;
            }
            const diff = (sdkProcessingMetadata.sdkProcessingMetadata && sdkProcessingMetadata.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - num2;
            if (diff > 0) {
              self.recordDroppedEvent("before_send", "span", diff);
            }
            const tmp6 = sdkProcessingMetadata.sdkProcessingMetadata && sdkProcessingMetadata.sdkProcessingMetadata.spanCountBeforeProcessing || 0;
          }
          const transaction_info = sdkProcessingMetadata.transaction_info;
          if (closure_5) {
            if (transaction_info) {
              if (sdkProcessingMetadata.transaction !== type.transaction) {
                const obj = {};
                const merged = Object.assign(transaction_info);
                obj.source = "custom";
                sdkProcessingMetadata.transaction_info = obj;
              }
            }
          }
          self.sendEvent(sdkProcessingMetadata, closure_2);
          return sdkProcessingMetadata;
        }
      }).then(null, (arg0) => {
        if (arg0 instanceof str(type[17]).SentryError) {
          throw arg0;
        } else {
          const obj = { data: null, originalException: null };
          obj[0] = { __sentry__: true };
          obj[1] = arg0;
          self.captureException(arg0, obj);
          const _HermesInternal = HermesInternal;
          const sentryError = new tmp(tmp2[17]).SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + arg0);
          throw sentryError;
        }
        tmp = str;
        tmp2 = type;
      });
    }
  },
  {
    key: "_process",
    value: function _process(promise) {
      const self = this;
      this._numProcessing = this._numProcessing + 1;
      promise.then((arg0) => {
        self._numProcessing = self._numProcessing - 1;
        return arg0;
      }, (arg0) => {
        self._numProcessing = self._numProcessing - 1;
        return arg0;
      });
    }
  },
  {
    key: "_clearOutcomes",
    value: function _clearOutcomes() {
      this._outcomes = {};
      const entries = Object.entries(this._outcomes);
      return entries.map((arg0) => {
        [str, tmp] = arg0;
        const tmp2 = callback(str.split(":"), 2);
        return { reason: tmp2[0], category: tmp2[1], quantity: tmp };
      });
    }
  },
  {
    key: "_flushOutcomes",
    value: function _flushOutcomes() {
      if (BaseClient(12277).DEBUG_BUILD) {
        const logger = tmp(12249).logger;
        logger.log("Flushing outcomes...");
      }
      const self = this;
      const _clearOutcomesResult = this._clearOutcomes();
      if (0 !== _clearOutcomesResult.length) {
        const DEBUG_BUILD = tmp(12277).DEBUG_BUILD;
        if (self._dsn) {
          if (DEBUG_BUILD) {
            const logger4 = tmp(12249).logger;
            logger4.log("Sending outcomes:", _clearOutcomesResult);
          }
          let tmpResult = tmp(12307);
          let tunnel = self._options.tunnel;
          if (tunnel) {
            tmpResult = tmp(12296);
            tunnel = tmpResult.dsnToString(self._dsn);
          }
          self.sendEnvelope(tmpResult.createClientReportEnvelope(_clearOutcomesResult, tunnel));
        } else if (DEBUG_BUILD) {
          const logger3 = tmp(12249).logger;
          logger3.log("No dsn provided, will not send outcomes");
        }
      } else if (tmp(12277).DEBUG_BUILD) {
        const logger2 = tmp(12249).logger;
        logger2.log("No outcomes to send");
      }
    }
  }
];

export const BaseClient = _createClass(BaseClient, items);