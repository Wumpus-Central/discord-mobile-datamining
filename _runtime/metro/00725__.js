// === Module 725: ? ===

// Module 725
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const SentrySpan = require;
function isFullFinishedSpan(start_timestamp) {
  return start_timestamp.start_timestamp && start_timestamp.timestamp && start_timestamp.span_id && start_timestamp.trace_id;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
    self._links = obj.links;
    self._attributes = {};
    obj = { [closure_2_0(closure_2_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual" };
    obj[closure_0(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = obj.op;
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
const entry = {
  key: "addLink",
  value: function addLink(arg0) {
    const self = this;
    if (this._links) {
      const _links = self._links;
      _links.push(arg0);
    } else {
      const items = [arg0];
      self._links = items;
    }
    return self;
  }
};
let items = [
  entry,
  {
    key: "addLinks",
    value: function addLinks(_links) {
      const self = this;
      if (this._links) {
        _links = self._links;
        const push = _links.push;
        const items = [];
        HermesBuiltin.arraySpread(_links, 0);
        HermesBuiltin.apply(items, _links);
      } else {
        self._links = _links;
      }
      return self;
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
      const tmp = SentrySpan(684);
      obj.traceFlags = this._sampled ? tmp.TRACE_FLAG_SAMPLED : tmp.TRACE_FLAG_NONE;
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
      closure_0 = arg0;
      const keys = Object.keys(arg0);
      const item = keys.forEach((item) => self.setAttribute(item, closure_0[item]));
      return this;
    }
  },
  {
    key: "updateStartTime",
    value: function updateStartTime(arg0) {
      this._startTime = SentrySpan(684).spanTimeInputToSeconds(arg0);
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
      const attr = this.setAttribute(SentrySpan(704).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
      return this;
    }
  },
  {
    key: "end",
    value: function end(arg0) {
      const self = this;
      if (!this._endTime) {
        self._endTime = SentrySpan(684).spanTimeInputToSeconds(arg0);
        const obj = SentrySpan(684);
        SentrySpan(726).logSpanEnd(self);
        self._onSpanEnded();
        const obj2 = SentrySpan(726);
      }
    }
  },
  {
    key: "getSpanJSON",
    value: function getSpanJSON() {
      const self = this;
      const obj = { data: this._attributes, description: this._name, op: this._attributes[SentrySpan(undefined, 704).SEMANTIC_ATTRIBUTE_SENTRY_OP], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: SentrySpan(684).getStatusMessage(this._status), timestamp: null, trace_id: null, origin: _attributes[SentrySpan(undefined, 704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], profile_id: this._attributes[SentrySpan(undefined, 704).SEMANTIC_ATTRIBUTE_PROFILE_ID], exclusive_time: this._attributes[SentrySpan(undefined, 704).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME], measurements: null, is_segment: null, segment_id: null, links: null };
      ({ _endTime: obj.timestamp, _traceId: obj.trace_id, _attributes } = this);
      const obj2 = SentrySpan(684);
      obj.measurements = SentrySpan(727).timedEventsToMeasurements(this._events);
      let _isStandaloneSpan = this._isStandaloneSpan;
      if (_isStandaloneSpan) {
        let tmpResult = SentrySpan(684);
        _isStandaloneSpan = tmpResult.getRootSpan(self) === self;
      }
      obj.is_segment = _isStandaloneSpan;
      let spanId;
      if (self._isStandaloneSpan) {
        tmpResult = SentrySpan(684);
        const rootSpan = tmpResult.getRootSpan(self);
        spanId = rootSpan.spanContext().spanId;
      }
      obj.segment_id = spanId;
      const obj3 = SentrySpan(727);
      obj.links = SentrySpan(684).convertSpanLinksForEnvelope(self._links);
      return obj;
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
    value: function addEvent(name, num, arg2) {
      if (SentrySpan(688).DEBUG_BUILD) {
        const debug = SentrySpan(689).debug;
        debug.log("[Tracing] Adding an event to span:", name);
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
          let tmpResult = SentrySpan(703);
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
      tmpResult = SentrySpan(684);
      obj.time = tmpResult.spanTimeInputToSeconds(tmp7);
      obj.attributes = obj;
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
      const client = SentrySpan(713).getClient();
      if (client) {
        client.emit("spanEnd", self);
      }
      if (self._isStandaloneSpan) {
        if (self._isStandaloneSpan) {
          if (self._sampled) {
            let tmpResult = SentrySpan(728);
            const items = [self];
            const spanEnvelope = tmpResult.createSpanEnvelope(items, client);
            tmpResult = SentrySpan(713);
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
            if (SentrySpan(688).DEBUG_BUILD) {
              const debug = SentrySpan(689).debug;
              debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
            }
            if (client) {
              client.recordDroppedEvent("sample_rate", "span");
            }
          }
        } else {
          const result = self._convertSpanToTransaction();
          if (result) {
            let scope = SentrySpan(685).getCapturedScopesOnSpan(self).scope;
            if (!scope) {
              scope = SentrySpan(713).getCurrentScope();
              const tmpResult2 = SentrySpan(713);
            }
            scope.captureEvent(result);
            const tmpResult1 = SentrySpan(685);
          }
        }
      } else {
        SentrySpan(684);
      }
      const obj = SentrySpan(713);
    }
  },
  {
    key: "_convertSpanToTransaction",
    value: function _convertSpanToTransaction() {
      const self = this;
      let obj = self(684);
      const spanToJSONResult = obj.spanToJSON(this);
      if (tmp6) {
        if (!self._name) {
          if (tmp3(688).DEBUG_BUILD) {
            const debug = tmp3(689).debug;
            debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
          }
          self._name = "<unlabeled transaction>";
        }
        let tmp3Result = tmp3(685);
        const capturedScopesOnSpan = tmp3Result.getCapturedScopesOnSpan(self);
        const scope = capturedScopesOnSpan.scope;
        if (scope != null) {
          const sdkProcessingMetadata = scope.getScopeData().sdkProcessingMetadata;
          if (sdkProcessingMetadata != null) {
            const normalizedRequest = sdkProcessingMetadata.normalizedRequest;
          }
        }
        if (true === self._sampled) {
          tmp3Result = tmp3(684);
          const spanDescendants = tmp3Result.getSpanDescendants(self);
          const found = spanDescendants.filter((isStandaloneSpan) => {
            let tmp = isStandaloneSpan !== self;
            if (tmp) {
              tmp = !(isStandaloneSpan instanceof _moduleResult && isStandaloneSpan.isStandaloneSpan());
              const tmp3 = isStandaloneSpan instanceof _moduleResult && isStandaloneSpan.isStandaloneSpan();
            }
            return tmp;
          });
          const mapped = found.map((item) => self(684).spanToJSON(item));
          const found1 = mapped.filter(isFullFinishedSpan);
          const tmp11 = self._attributes[tmp3(undefined, 704).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          const _attributes = self._attributes;
          let SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = tmp3(704).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
          delete tmp2[tmp];
          const item = found1.forEach((item) => {
            const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = self(704).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
            delete tmp2[tmp];
          });
          obj = { contexts: null, spans: null, start_timestamp: null, timestamp: null, transaction: null, type: "transaction", sdkProcessingMetadata: null, request: null };
          obj = { trace: tmp3(684).spanToTransactionTraceContext(self) };
          obj.contexts = obj;
          let substr = found1;
          if (found1.length > 1000) {
            const sorted = found1.sort((start_timestamp, start_timestamp2) => start_timestamp.start_timestamp - start_timestamp2.start_timestamp);
            substr = sorted.slice(0, 1000);
          }
          obj.spans = substr;
          ({ _startTime: obj4.start_timestamp, _endTime: obj4.timestamp, _name: obj4.transaction } = self);
          const obj1 = { capturedSpanScope: scope, capturedSpanIsolationScope: capturedScopesOnSpan.isolationScope, dynamicSamplingContext: null };
          const tmp3Result1 = tmp3(684);
          obj1.dynamicSamplingContext = tmp3(722).getDynamicSamplingContextFromSpan(self);
          obj.sdkProcessingMetadata = obj1;
          obj.request = normalizedRequest;
          let tmp14 = tmp11;
          if (tmp11) {
            const obj2 = { transaction_info: null };
            const obj3 = { source: tmp11 };
            obj2.transaction_info = obj3;
            tmp14 = obj2;
          }
          const merged = Object.assign(tmp14);
          const tmp3Result2 = tmp3(722);
          const result = tmp3(727).timedEventsToMeasurements(self._events);
          let length = result;
          if (result) {
            const _Object = Object;
            length = Object.keys(result).length;
          }
          if (length) {
            if (tmp3(688).DEBUG_BUILD) {
              const debug2 = tmp3(689).debug;
              const _JSON = JSON;
              debug2.log("[Measurements] Adding measurements to transaction event", JSON.stringify(result, undefined, 2));
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