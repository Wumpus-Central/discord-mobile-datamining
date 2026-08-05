// _runtime/00860_isFullFinishedSpan.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

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
    tmp = isFullFinishedSpan(this, SentrySpan);
    traceId = obj.traceId;
    if (!traceId) {
      tmp2 = SentrySpan;
      tmp3 = closure_1;
      obj2 = require("generateSpanId");
      traceId = obj2.generateTraceId();
    }
    self._traceId = traceId;
    spanId = obj.spanId;
    if (!spanId) {
      tmp4 = SentrySpan;
      tmp5 = closure_1;
      obj3 = require("generateSpanId");
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
    self._links = obj.links;
    self._attributes = {};
    obj = { [outer1_0(outer1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual" };
    obj[require("module_839").SEMANTIC_ATTRIBUTE_SENTRY_OP] = obj.op;
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
  },
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
      const tmp = SentrySpan(819);
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
      this._startTime = SentrySpan(819).spanTimeInputToSeconds(arg0);
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
      const attr = this.setAttribute(SentrySpan(839).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
      return this;
    }
  },
  {
    key: "end",
    value: function end(arg0) {
      const self = this;
      if (!this._endTime) {
        self._endTime = SentrySpan(819).spanTimeInputToSeconds(arg0);
        const obj = SentrySpan(819);
        SentrySpan(861).logSpanEnd(self);
        self._onSpanEnded();
        const obj2 = SentrySpan(861);
      }
    }
  },
  {
    key: "getSpanJSON",
    value: function getSpanJSON() {
      let _attributes;
      const self = this;
      const obj = { data: this._attributes, description: this._name, op: this._attributes[SentrySpan(undefined, 839).SEMANTIC_ATTRIBUTE_SENTRY_OP], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: null, timestamp: null, trace_id: null, origin: null, profile_id: null, exclusive_time: null, measurements: null, is_segment: null, segment_id: null, links: null };
      obj[6] = SentrySpan(819).getStatusMessage(this._status);
      ({ _endTime: obj[7], _traceId: obj[8], _attributes } = this);
      obj[9] = _attributes[SentrySpan(undefined, 839).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      obj[10] = this._attributes[SentrySpan(undefined, 839).SEMANTIC_ATTRIBUTE_PROFILE_ID];
      obj[11] = this._attributes[SentrySpan(undefined, 839).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME];
      const obj2 = SentrySpan(819);
      obj[12] = SentrySpan(862).timedEventsToMeasurements(this._events);
      let _isStandaloneSpan = this._isStandaloneSpan;
      if (_isStandaloneSpan) {
        let tmpResult = tmp(819);
        _isStandaloneSpan = tmpResult.getRootSpan(self) === self;
      }
      obj[13] = _isStandaloneSpan;
      let spanId;
      if (self._isStandaloneSpan) {
        tmpResult = tmp(819);
        const rootSpan = tmpResult.getRootSpan(self);
        spanId = rootSpan.spanContext().spanId;
      }
      obj[14] = spanId;
      const obj3 = SentrySpan(862);
      obj[15] = SentrySpan(819).convertSpanLinksForEnvelope(self._links);
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
    value: function addEvent(name, num) {
      if (SentrySpan(823).DEBUG_BUILD) {
        const debug = tmp(824).debug;
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
          let tmpResult = tmp(838);
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
      tmpResult = tmp(819);
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
      const client = SentrySpan(848).getClient();
      if (client) {
        client.emit("spanEnd", self);
      }
      if (self._isStandaloneSpan) {
        if (self._isStandaloneSpan) {
          if (self._sampled) {
            let tmpResult = tmp(863);
            const items = [self];
            const spanEnvelope = tmpResult.createSpanEnvelope(items, client);
            tmpResult = tmp(848);
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
            if (tmp(823).DEBUG_BUILD) {
              const debug = tmp(824).debug;
              debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
            }
            if (client) {
              client.recordDroppedEvent("sample_rate", "span");
            }
          }
        } else {
          const result = self._convertSpanToTransaction();
          if (result) {
            let scope = tmp(820).getCapturedScopesOnSpan(self).scope;
            if (!scope) {
              scope = tmp(848).getCurrentScope();
              const tmpResult2 = tmp(848);
            }
            scope.captureEvent(result);
            const tmpResult1 = tmp(820);
          }
        }
      } else {
        const tmpResult3 = tmp(819);
      }
    }
  },
  {
    key: "_convertSpanToTransaction",
    value: function _convertSpanToTransaction() {
      let self = this;
      self = this;
      let obj = self(819);
      const spanToJSONResult = obj.spanToJSON(this);
      if (tmp6) {
        if (!self._name) {
          if (tmp3(823).DEBUG_BUILD) {
            const debug = tmp3(824).debug;
            debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
          }
          self._name = "<unlabeled transaction>";
        }
        let tmp3Result = tmp3(820);
        const capturedScopesOnSpan = tmp3Result.getCapturedScopesOnSpan(self);
        const scope = capturedScopesOnSpan.scope;
        if (scope != null) {
          const sdkProcessingMetadata = scope.getScopeData().sdkProcessingMetadata;
          if (sdkProcessingMetadata != null) {
            const normalizedRequest = sdkProcessingMetadata.normalizedRequest;
          }
        }
        if (true === self._sampled) {
          tmp3Result = tmp3(819);
          const spanDescendants = tmp3Result.getSpanDescendants(self);
          const found = spanDescendants.filter((isStandaloneSpan) => {
            let tmp = isStandaloneSpan !== self;
            if (tmp) {
              tmp = !(isStandaloneSpan instanceof outer1_3 && isStandaloneSpan.isStandaloneSpan());
              const tmp3 = isStandaloneSpan instanceof outer1_3 && isStandaloneSpan.isStandaloneSpan();
            }
            return tmp;
          });
          const mapped = found.map((arg0) => self(819).spanToJSON(arg0));
          const found1 = mapped.filter(isFullFinishedSpan);
          const tmp11 = self._attributes[tmp3(undefined, 839).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          const _attributes = self._attributes;
          let SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = tmp3(839).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
          delete tmp2[tmp];
          const item = found1.forEach((arg0) => {
            const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = self(839).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
            delete tmp2[tmp];
          });
          obj = { contexts: null, spans: null, start_timestamp: null, timestamp: null, transaction: null, type: "transaction", sdkProcessingMetadata: null, request: null };
          obj = { trace: null };
          obj[0] = tmp3(819).spanToTransactionTraceContext(self);
          obj[0] = obj;
          let substr = found1;
          if (found1.length > 1000) {
            const sorted = found1.sort((start_timestamp, start_timestamp2) => start_timestamp.start_timestamp - start_timestamp2.start_timestamp);
            substr = sorted.slice(0, 1000);
          }
          obj[1] = substr;
          ({ _startTime: obj4[2], _endTime: obj4[3], _name: obj4[4] } = self);
          const obj1 = { capturedSpanScope: null, capturedSpanIsolationScope: null, dynamicSamplingContext: null };
          obj1[0] = scope;
          obj1[1] = capturedScopesOnSpan.isolationScope;
          const tmp3Result1 = tmp3(819);
          obj1[2] = tmp3(857).getDynamicSamplingContextFromSpan(self);
          obj[6] = obj1;
          obj[7] = normalizedRequest;
          let tmp14 = tmp11;
          if (tmp11) {
            const obj2 = { transaction_info: null };
            const obj3 = { source: null };
            obj3[0] = tmp11;
            obj2[0] = obj3;
            tmp14 = obj2;
          }
          const merged = Object.assign(tmp14);
          const tmp3Result2 = tmp3(857);
          const result = tmp3(862).timedEventsToMeasurements(self._events);
          let length = result;
          if (result) {
            const _Object = Object;
            length = Object.keys(result).length;
          }
          if (length) {
            if (tmp3(823).DEBUG_BUILD) {
              const debug2 = tmp3(824).debug;
              const _JSON = JSON;
              debug2.log("[Measurements] Adding measurements to transaction event", JSON.stringify(result, undefined, 2));
            }
            obj.measurements = result;
          }
          return obj;
        }
      }
    }
  }
];
const _moduleResult = _createClass(SentrySpan, items);
let c3 = _moduleResult;

export const SentrySpan = _moduleResult;