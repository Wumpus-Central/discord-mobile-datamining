// _runtime/metro/13186__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

const SentrySpan = require;
function isFullFinishedSpan(start_timestamp) {
  return (
    start_timestamp.start_timestamp && start_timestamp.timestamp && start_timestamp.span_id && start_timestamp.trace_id
  );
}
class SentrySpan {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    self = this;
    tmp = c2(this, SentrySpan);
    traceId = obj.traceId;
    if (!traceId) {
      tmp2 = closure_0;
      tmp3 = closure_1;
      obj2 = closure_0(closure_1[2]);
      traceId = obj2.generateTraceId();
    }
    self._traceId = traceId;
    spanId = obj.spanId;
    if (!spanId) {
      tmp4 = closure_0;
      tmp5 = closure_1;
      obj3 = closure_0(closure_1[2]);
      spanId = obj3.generateSpanId();
    }
    self._spanId = spanId;
    startTimestamp = obj.startTimestamp;
    if (!startTimestamp) {
      tmp6 = closure_0;
      tmp7 = closure_1;
      obj4 = closure_0(closure_1[3]);
      startTimestamp = obj4.timestampInSeconds();
    }
    self._startTime = startTimestamp;
    self._attributes = {};
    obj1 = { [closure_2_0(closure_2_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual" };
    obj1[closure_0(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = obj.op;
    merged = Object.assign(obj.attributes);
    setAttributesResult = self.setAttributes(obj1);
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
const entry = {
  key: "addLink",
  value: function addLink(arg0) {
    return this;
  },
};
let items = [
  entry,
  {
    key: "addLinks",
    value: function addLinks(arg0) {
      return this;
    },
  },
  {
    key: "recordException",
    value: function recordException(arg0, arg1) {},
  },
  {
    key: "spanContext",
    value: function spanContext() {
      const obj = { spanId: this._spanId, traceId: this._traceId, traceFlags: null };
      const tmp = SentrySpan(13150);
      obj.traceFlags = this._sampled ? tmp.TRACE_FLAG_SAMPLED : tmp.TRACE_FLAG_NONE;
      return obj;
    },
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
    },
  },
  {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      const self = this;
      closure_0 = arg0;
      const keys = Object.keys(arg0);
      const item = keys.forEach((item) => self.setAttribute(item, closure_0[item]));
      return this;
    },
  },
  {
    key: "updateStartTime",
    value: function updateStartTime(arg0) {
      this._startTime = SentrySpan(13150).spanTimeInputToSeconds(arg0);
    },
  },
  {
    key: "setStatus",
    value: function setStatus(_status) {
      this._status = _status;
      return this;
    },
  },
  {
    key: "updateName",
    value: function updateName(_name) {
      this._name = _name;
      const attr = this.setAttribute(SentrySpan(13160).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
      return this;
    },
  },
  {
    key: "end",
    value: function end(arg0) {
      const self = this;
      if (!this._endTime) {
        self._endTime = SentrySpan(13150).spanTimeInputToSeconds(arg0);
        const obj = SentrySpan(13150);
        SentrySpan(13183).logSpanEnd(self);
        self._onSpanEnded();
        const obj2 = SentrySpan(13183);
      }
    },
  },
  {
    key: "getSpanJSON",
    value: function getSpanJSON() {
      const self = this;
      const obj6 = {
        data: this._attributes,
        description: this._name,
        op: this._attributes[SentrySpan(undefined, 13160).SEMANTIC_ATTRIBUTE_SENTRY_OP],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: null,
        timestamp: null,
        trace_id: null,
        origin: null,
        _metrics_summary: null,
        profile_id: null,
        exclusive_time: null,
        measurements: null,
        is_segment: null,
        segment_id: null,
      };
      const obj = SentrySpan(13151);
      obj6.status = SentrySpan(13150).getStatusMessage(this._status);
      ({ _endTime: obj2.timestamp, _traceId: obj2.trace_id, _attributes } = this);
      obj6.origin = _attributes[SentrySpan(undefined, 13160).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      const obj3 = SentrySpan(13150);
      obj6._metrics_summary = SentrySpan(13161).getMetricSummaryJsonForSpan(this);
      obj6.profile_id = this._attributes[SentrySpan(undefined, 13160).SEMANTIC_ATTRIBUTE_PROFILE_ID];
      obj6.exclusive_time = this._attributes[SentrySpan(undefined, 13160).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME];
      const obj4 = SentrySpan(13161);
      obj6.measurements = SentrySpan(13187).timedEventsToMeasurements(this._events);
      let _isStandaloneSpan = this._isStandaloneSpan;
      if (_isStandaloneSpan) {
        _isStandaloneSpan = SentrySpan(13150).getRootSpan(self) === self;
        const tmpResult = SentrySpan(13150);
      }
      obj6.is_segment = _isStandaloneSpan;
      let spanId;
      if (self._isStandaloneSpan) {
        const rootSpan = SentrySpan(13150).getRootSpan(self);
        spanId = rootSpan.spanContext().spanId;
        const tmpResult2 = SentrySpan(13150);
      }
      obj6.segment_id = spanId;
      return obj.dropUndefinedKeys(obj6);
    },
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
    },
  },
  {
    key: "addEvent",
    value: function addEvent(name, num, arg2) {
      if (SentrySpan(13173).DEBUG_BUILD) {
        const logger = SentrySpan(13145).logger;
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
          timestampInSecondsResult = SentrySpan(13159).timestampInSeconds();
          const tmpResult = SentrySpan(13159);
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
      const obj2 = { name, time: SentrySpan(13150).spanTimeInputToSeconds(tmp7), attributes: obj };
      const _events = this._events;
      _events.push(obj2);
      return this;
    },
  },
  {
    key: "isStandaloneSpan",
    value: function isStandaloneSpan() {
      return this._isStandaloneSpan;
    },
  },
  {
    key: "_onSpanEnded",
    value: function _onSpanEnded() {
      const self = this;
      const client = SentrySpan(13172).getClient();
      if (client) {
        client.emit("spanEnd", self);
      }
      if (self._isStandaloneSpan) {
        if (self._isStandaloneSpan) {
          if (self._sampled) {
            const items = [self];
            const spanEnvelope = SentrySpan(13188).createSpanEnvelope(items, client);
            const tmpResult = SentrySpan(13188);
            const client1 = SentrySpan(13172).getClient();
            if (client1) {
              if (spanEnvelope[1]) {
                if (0 !== arr2.length) {
                  client1.sendEnvelope(spanEnvelope);
                }
              }
              client1.recordDroppedEvent("before_send", "span");
            }
            const tmpResult5 = SentrySpan(13172);
          } else {
            if (SentrySpan(13173).DEBUG_BUILD) {
              const logger = SentrySpan(13145).logger;
              logger.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
            }
            if (client) {
              client.recordDroppedEvent("sample_rate", "span");
            }
          }
        } else {
          const result = self._convertSpanToTransaction();
          if (result) {
            let scope = SentrySpan(13174).getCapturedScopesOnSpan(self).scope;
            if (!scope) {
              scope = SentrySpan(13172).getCurrentScope();
              const tmpResult7 = SentrySpan(13172);
            }
            scope.captureEvent(result);
            const tmpResult6 = SentrySpan(13174);
          }
        }
      } else {
        SentrySpan(13150);
      }
      const obj = SentrySpan(13172);
    },
  },
  {
    key: "_convertSpanToTransaction",
    value: function _convertSpanToTransaction() {
      const self = this;
      const spanToJSONResult = self(13150).spanToJSON(this);
      if (tmp6) {
        if (!self._name) {
          if (tmp3(13173).DEBUG_BUILD) {
            const logger = tmp3(13145).logger;
            logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
          }
          self._name = "<unlabeled transaction>";
        }
        const capturedScopesOnSpan = tmp3(13174).getCapturedScopesOnSpan(self);
        const scope = capturedScopesOnSpan.scope;
        let currentScope = scope;
        if (!scope) {
          currentScope = tmp3(13172).getCurrentScope();
          const tmp3Result9 = tmp3(13172);
        }
        let client = currentScope.getClient();
        if (!client) {
          client = tmp3(13172).getClient();
          const tmp3Result10 = tmp3(13172);
        }
        if (true !== self._sampled) {
          if (tmp3(13173).DEBUG_BUILD) {
            const logger3 = tmp3(13145).logger;
            logger3.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
          }
          if (client) {
            client.recordDroppedEvent("sample_rate", "transaction");
          }
        } else {
          const spanDescendants = tmp3(13150).getSpanDescendants(self);
          const found = spanDescendants.filter((isStandaloneSpan) => {
            let tmp = isStandaloneSpan !== self;
            if (tmp) {
              tmp = !(isStandaloneSpan instanceof _moduleResult && isStandaloneSpan.isStandaloneSpan());
              const tmp3 = isStandaloneSpan instanceof _moduleResult && isStandaloneSpan.isStandaloneSpan();
            }
            return tmp;
          });
          const mapped = found.map((item) => self(13150).spanToJSON(item));
          const found1 = mapped.filter(isFullFinishedSpan);
          const tmp24 = self._attributes[tmp3(undefined, 13160).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          const _attributes = self._attributes;
          let SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = tmp3(13160).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
          delete tmp2[tmp];
          const item = found1.forEach((data) => {
            if (data.data) {
              data = data.data;
              const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = self(13160).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
              delete tmp2[tmp];
            }
          });
          const obj2 = {
            contexts: null,
            spans: null,
            start_timestamp: null,
            timestamp: null,
            transaction: null,
            type: "transaction",
            sdkProcessingMetadata: null,
            _metrics_summary: null,
          };
          const obj3 = { trace: null };
          const tmp3Result11 = tmp3(13150);
          obj3.trace = tmp3(13150).spanToTransactionTraceContext(self);
          obj2.contexts = obj3;
          let substr = found1;
          if (found1.length > 1000) {
            const sorted = found1.sort(
              (start_timestamp, start_timestamp2) => start_timestamp.start_timestamp - start_timestamp2.start_timestamp,
            );
            substr = sorted.slice(0, 1000);
          }
          obj2.spans = substr;
          ({ _startTime: obj16.start_timestamp, _endTime: obj16.timestamp, _name: obj16.transaction } = self);
          const obj4 = { capturedSpanScope: scope, capturedSpanIsolationScope: capturedScopesOnSpan.isolationScope };
          const tmp3Result12 = tmp3(13150);
          const obj5 = { dynamicSamplingContext: null };
          const tmp3Result13 = tmp3(13151);
          obj5.dynamicSamplingContext = tmp3(13181).getDynamicSamplingContextFromSpan(self);
          const merged = Object.assign(tmp3Result13.dropUndefinedKeys(obj5));
          obj2.sdkProcessingMetadata = obj4;
          const tmp3Result14 = tmp3(13181);
          obj2._metrics_summary = tmp3(13161).getMetricSummaryJsonForSpan(self);
          let tmp12 = tmp24;
          if (tmp24) {
            const obj6 = { transaction_info: null };
            const obj7 = { source: tmp24 };
            obj6.transaction_info = obj7;
            tmp12 = obj6;
          }
          const merged1 = Object.assign(tmp12);
          const tmp3Result15 = tmp3(13161);
          const result = tmp3(13187).timedEventsToMeasurements(self._events);
          let length = result;
          if (result) {
            const _Object = Object;
            length = Object.keys(result).length;
          }
          if (length) {
            if (tmp3(13173).DEBUG_BUILD) {
              const logger2 = tmp3(13145).logger;
              const _JSON = JSON;
              logger2.log(
                "[Measurements] Adding measurements to transaction event",
                JSON.stringify(result, undefined, 2),
              );
            }
            obj2.measurements = result;
          }
          return obj2;
        }
        const tmp3Result = tmp3(13174);
      }
      const obj = self(13150);
      tmp6 =
        spanToJSONResult.start_timestamp &&
        spanToJSONResult.timestamp &&
        spanToJSONResult.span_id &&
        spanToJSONResult.trace_id;
    },
  },
];
const _moduleResult = _createClass(SentrySpan, items);
let c3 = _moduleResult;

export const SentrySpan = _moduleResult;
