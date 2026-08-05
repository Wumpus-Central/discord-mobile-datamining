// _runtime/07388_isFullFinishedSpan.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const SentrySpan = require;
function isFullFinishedSpan(start_timestamp) {
  return start_timestamp.start_timestamp && start_timestamp.timestamp && start_timestamp.span_id && start_timestamp.trace_id;
}
class SentrySpan {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    self = this;
    tmp = isFullFinishedSpan(this, SentrySpan);
    traceId = obj.traceId;
    if (!traceId) {
      tmp2 = SentrySpan;
      tmp3 = closure_1;
      obj2 = require("generatePropagationContext");
      traceId = obj2.generateTraceId();
    }
    self._traceId = traceId;
    spanId = obj.spanId;
    if (!spanId) {
      tmp4 = SentrySpan;
      tmp5 = closure_1;
      obj3 = require("generatePropagationContext");
      spanId = obj3.generateSpanId();
    }
    self._spanId = spanId;
    startTimestamp = obj.startTimestamp;
    if (!startTimestamp) {
      tmp6 = SentrySpan;
      tmp7 = closure_1;
      obj4 = require("dateTimestampInSeconds");
      startTimestamp = obj4.timestampInSeconds();
    }
    self._startTime = startTimestamp;
    self._attributes = {};
    obj = { [outer1_0(outer1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual" };
    obj[require("module_7362").SEMANTIC_ATTRIBUTE_SENTRY_OP] = obj.op;
    merged = Object.assign(obj.attributes);
    setAttributesResult = self.setAttributes(obj);
    self._name = obj.name;
    if (obj.parentSpanId) {
      self._parentSpanId = obj.parentSpanId;
    }
    if ("sampled" in obj) {
      self._sampled = obj.sampled;
    }
    if (obj.endTimestamp) {
      self._endTime = obj.endTimestamp;
    }
    self._events = [];
    self._isStandaloneSpan = obj.isStandalone;
    if (self._endTime) {
      _onSpanEndedResult = self._onSpanEnded();
    }
    return;
  }
}
let items = [
  {
    key: "addLink",
    value: function addLink(arg0) {
      return this;
    }
  },
  {
    key: "addLinks",
    value: function addLinks(arg0) {
      return this;
    }
  },
  {
    key: "recordException",
    value: function recordException(arg0, arg1) {

    }
  },
  {
    key: "spanContext",
    value: function spanContext() {
      const obj = { spanId: this._spanId, traceId: this._traceId, traceFlags: null };
      const tmp = SentrySpan(7352);
      obj[2] = this._sampled ? tmp.TRACE_FLAG_SAMPLED : tmp.TRACE_FLAG_NONE;
      return obj;
    }
  },
  {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      const self = this;
      if (undefined === arg1) {
        const _attributes = self._attributes;
        delete tmp[tmp2];
      } else {
        self._attributes[arg0] = arg1;
      }
      return self;
    }
  },
  {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      const self = this;
      let closure_0 = arg0;
      const keys = Object.keys(arg0);
      const item = keys.forEach((arg0) => self.setAttribute(arg0, table[arg0]));
      return this;
    }
  },
  {
    key: "updateStartTime",
    value: function updateStartTime(arg0) {
      this._startTime = SentrySpan(7352).spanTimeInputToSeconds(arg0);
    }
  },
  {
    key: "setStatus",
    value: function setStatus(_status) {
      this._status = _status;
      return this;
    }
  },
  {
    key: "updateName",
    value: function updateName(_name) {
      this._name = _name;
      const attr = this.setAttribute(SentrySpan(7362).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
      return this;
    }
  },
  {
    key: "end",
    value: function end(arg0) {
      const self = this;
      if (!this._endTime) {
        self._endTime = SentrySpan(7352).spanTimeInputToSeconds(arg0);
        const obj = SentrySpan(7352);
        SentrySpan(7385).logSpanEnd(self);
        self._onSpanEnded();
        const obj2 = SentrySpan(7385);
      }
    }
  },
  {
    key: "getSpanJSON",
    value: function getSpanJSON() {
      let _attributes;
      const self = this;
      let obj = SentrySpan(7353);
      obj = { data: this._attributes, description: this._name, op: this._attributes[SentrySpan(undefined, 7362).SEMANTIC_ATTRIBUTE_SENTRY_OP], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: null, timestamp: null, trace_id: null, origin: null, _metrics_summary: null, profile_id: null, exclusive_time: null, measurements: null, is_segment: null, segment_id: null };
      obj[6] = SentrySpan(7352).getStatusMessage(this._status);
      ({ _endTime: obj2[7], _traceId: obj2[8], _attributes } = this);
      obj[9] = _attributes[SentrySpan(undefined, 7362).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      const obj3 = SentrySpan(7352);
      obj[10] = SentrySpan(7363).getMetricSummaryJsonForSpan(this);
      obj[11] = this._attributes[SentrySpan(undefined, 7362).SEMANTIC_ATTRIBUTE_PROFILE_ID];
      obj[12] = this._attributes[SentrySpan(undefined, 7362).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME];
      const obj4 = SentrySpan(7363);
      obj[13] = SentrySpan(7389).timedEventsToMeasurements(this._events);
      let _isStandaloneSpan = this._isStandaloneSpan;
      if (_isStandaloneSpan) {
        let tmpResult = tmp(7352);
        _isStandaloneSpan = tmpResult.getRootSpan(self) === self;
      }
      obj[14] = _isStandaloneSpan;
      let spanId;
      if (self._isStandaloneSpan) {
        tmpResult = tmp(7352);
        const rootSpan = tmpResult.getRootSpan(self);
        spanId = rootSpan.spanContext().spanId;
      }
      obj[15] = spanId;
      return obj.dropUndefinedKeys(obj);
    }
  },
  {
    key: "isRecording",
    value: function isRecording() {
      const _endTime = this._endTime;
      let _sampled = !_endTime;
      if (!_endTime) {
        _sampled = this._sampled;
      }
      return _sampled;
    }
  },
  {
    key: "addEvent",
    value: function addEvent(name, num) {
      if (SentrySpan(7375).DEBUG_BUILD) {
        const logger = tmp(7347).logger;
        logger.log("[Tracing] Adding an event to span:", name);
      }
      let isArray = num;
      if (num) {
        isArray = typeof num === "number";
      }
      if (!isArray) {
        const _Date = Date;
        isArray = num instanceof Date;
      }
      if (!isArray) {
        const _Array = Array;
        isArray = Array.isArray(num);
      }
      let tmp7 = num;
      if (!isArray) {
        let timestampInSecondsResult = arg2;
        if (!arg2) {
          let tmpResult = tmp(7361);
          timestampInSecondsResult = tmpResult.timestampInSeconds();
        }
        tmp7 = timestampInSecondsResult;
      }
      let isArray1 = num;
      if (num) {
        isArray1 = typeof num === "number";
      }
      if (!isArray1) {
        const _Date2 = Date;
        isArray1 = num instanceof Date;
      }
      if (!isArray1) {
        const _Array2 = Array;
        isArray1 = Array.isArray(num);
      }
      if (isArray1) {
        let obj = {};
      } else {
        obj = num;
        if (!num) {
          obj = {};
        }
      }
      obj = { name, time: null, attributes: null };
      tmpResult = tmp(7352);
      obj[1] = tmpResult.spanTimeInputToSeconds(tmp7);
      obj[2] = obj;
      const _events = this._events;
      _events.push(obj);
      return this;
    }
  },
  {
    key: "isStandaloneSpan",
    value: function isStandaloneSpan() {
      return this._isStandaloneSpan;
    }
  },
  {
    key: "_onSpanEnded",
    value: function _onSpanEnded() {
      const self = this;
      const client = SentrySpan(7374).getClient();
      if (client) {
        client.emit("spanEnd", self);
      }
      if (self._isStandaloneSpan) {
        if (self._isStandaloneSpan) {
          if (self._sampled) {
            let tmpResult = tmp(7390);
            const items = [self];
            const spanEnvelope = tmpResult.createSpanEnvelope(items, client);
            tmpResult = tmp(7374);
            const client1 = tmpResult.getClient();
            if (client1) {
              if (spanEnvelope[1]) {
                if (0 !== arr2.length) {
                  client1.sendEnvelope(spanEnvelope);
                }
              }
              client1.recordDroppedEvent("before_send", "span");
            }
          } else {
            if (tmp(7375).DEBUG_BUILD) {
              const logger = tmp(7347).logger;
              logger.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
            }
            if (client) {
              client.recordDroppedEvent("sample_rate", "span");
            }
          }
        } else {
          const result = self._convertSpanToTransaction();
          if (result) {
            let scope = tmp(7376).getCapturedScopesOnSpan(self).scope;
            if (!scope) {
              scope = tmp(7374).getCurrentScope();
              const tmpResult2 = tmp(7374);
            }
            scope.captureEvent(result);
            const tmpResult1 = tmp(7376);
          }
        }
      } else {
        const tmpResult3 = tmp(7352);
      }
    }
  },
  {
    key: "_convertSpanToTransaction",
    value: function _convertSpanToTransaction() {
      let self = this;
      self = this;
      let obj = self(7352);
      const spanToJSONResult = obj.spanToJSON(this);
      if (tmp6) {
        if (!self._name) {
          if (tmp3(7375).DEBUG_BUILD) {
            const logger = tmp3(7347).logger;
            logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
          }
          self._name = "<unlabeled transaction>";
        }
        let tmp3Result = tmp3(7376);
        const capturedScopesOnSpan = tmp3Result.getCapturedScopesOnSpan(self);
        const scope = capturedScopesOnSpan.scope;
        let currentScope = scope;
        if (!scope) {
          tmp3Result = tmp3(7374);
          currentScope = tmp3Result.getCurrentScope();
        }
        let client = currentScope.getClient();
        if (!client) {
          client = tmp3(7374).getClient();
          const tmp3Result1 = tmp3(7374);
        }
        if (true !== self._sampled) {
          if (tmp3(7375).DEBUG_BUILD) {
            const logger3 = tmp3(7347).logger;
            logger3.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
          }
          if (client) {
            client.recordDroppedEvent("sample_rate", "transaction");
          }
        } else {
          const spanDescendants = tmp3(7352).getSpanDescendants(self);
          const found = spanDescendants.filter((isStandaloneSpan) => {
            let tmp = isStandaloneSpan !== self;
            if (tmp) {
              tmp = !(isStandaloneSpan instanceof outer1_3 && isStandaloneSpan.isStandaloneSpan());
              const tmp3 = isStandaloneSpan instanceof outer1_3 && isStandaloneSpan.isStandaloneSpan();
            }
            return tmp;
          });
          const mapped = found.map((arg0) => self(7352).spanToJSON(arg0));
          const found1 = mapped.filter(isFullFinishedSpan);
          const tmp24 = self._attributes[tmp3(undefined, 7362).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          const _attributes = self._attributes;
          let SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = tmp3(7362).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
          delete tmp2[tmp];
          const item = found1.forEach((data) => {
            if (data.data) {
              data = data.data;
              const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = self(7362).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
              delete tmp2[tmp];
            }
          });
          obj = { contexts: null, spans: null, start_timestamp: null, timestamp: null, transaction: null, type: "transaction", sdkProcessingMetadata: null, _metrics_summary: null };
          obj = { trace: null };
          const tmp3Result2 = tmp3(7352);
          obj[0] = tmp3(7352).spanToTransactionTraceContext(self);
          obj[0] = obj;
          let substr = found1;
          if (found1.length > 1000) {
            const sorted = found1.sort((start_timestamp, start_timestamp2) => start_timestamp.start_timestamp - start_timestamp2.start_timestamp);
            substr = sorted.slice(0, 1000);
          }
          obj[1] = substr;
          ({ _startTime: obj16[2], _endTime: obj16[3], _name: obj16[4] } = self);
          const obj1 = { capturedSpanScope: null, capturedSpanIsolationScope: null };
          obj1[0] = scope;
          obj1[1] = capturedScopesOnSpan.isolationScope;
          const tmp3Result3 = tmp3(7352);
          const obj2 = { dynamicSamplingContext: null };
          const tmp3Result4 = tmp3(7353);
          obj2[0] = tmp3(7383).getDynamicSamplingContextFromSpan(self);
          const merged = Object.assign(tmp3Result4.dropUndefinedKeys(obj2));
          obj[6] = obj1;
          const tmp3Result5 = tmp3(7383);
          obj[7] = tmp3(7363).getMetricSummaryJsonForSpan(self);
          let tmp12 = tmp24;
          if (tmp24) {
            const obj3 = { transaction_info: null };
            const obj4 = { source: null };
            obj4[0] = tmp24;
            obj3[0] = obj4;
            tmp12 = obj3;
          }
          const merged1 = Object.assign(tmp12);
          const tmp3Result6 = tmp3(7363);
          const result = tmp3(7389).timedEventsToMeasurements(self._events);
          let length = result;
          if (result) {
            const _Object = Object;
            length = Object.keys(result).length;
          }
          if (length) {
            if (tmp3(7375).DEBUG_BUILD) {
              const logger2 = tmp3(7347).logger;
              const _JSON = JSON;
              logger2.log("[Measurements] Adding measurements to transaction event", JSON.stringify(result, undefined, 2));
            }
            obj.measurements = result;
          }
          return obj;
        }
      }
      tmp6 = spanToJSONResult.start_timestamp && spanToJSONResult.timestamp && spanToJSONResult.span_id && spanToJSONResult.trace_id;
    }
  }
];
const _moduleResult = _createClass(SentrySpan, items);
let c3 = _moduleResult;

export const SentrySpan = _moduleResult;