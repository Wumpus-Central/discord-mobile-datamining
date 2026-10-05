// === Module 736: SentrySpan ===

// Module 736 (SentrySpan)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 695 */;
import _mod696 from "module_696" /* 696 */;
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import generateSpanId from "generateSpanId" /* 705 */;
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 714 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 715 */;
import _mod724 from "module_724" /* 724 */;
import logSpanEnd from "logSpanEnd" /* 737 */;
import timedEventsToMeasurements from "timedEventsToMeasurements" /* 738 */;
import _enhanceEventWithSdkInfo from "_enhanceEventWithSdkInfo" /* 739 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let data;

function isFullFinishedSpan(start_timestamp) {
  return start_timestamp.start_timestamp && start_timestamp.timestamp && start_timestamp.span_id && start_timestamp.trace_id;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class SentrySpan {
  constructor() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const self = this;
    _classCallCheck(this, SentrySpan);
    let traceId = obj.traceId;
    if (!traceId) {
      const obj2 = generateSpanId;
      traceId = obj2.generateTraceId();
    }
    self._traceId = traceId;
    let spanId = obj.spanId;
    if (!spanId) {
      const obj3 = generateSpanId;
      spanId = obj3.generateSpanId();
    }
    self._spanId = spanId;
    let startTimestamp = obj.startTimestamp;
    if (!startTimestamp) {
      const obj4 = browserPerformanceTimeOrigin;
      startTimestamp = obj4.timestampInSeconds();
    }
    self._startTime = startTimestamp;
    self._links = obj.links;
    self._attributes = {};
    const obj5 = { [closure_2_0(closure_2_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual" };
    const setAttributes = self.setAttributes;
    obj5[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = obj.op;
    const merged = Object.assign(obj.attributes);
    setAttributes(obj5);
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
      self._onSpanEnded();
    }
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
        HermesBuiltin.arraySpread(items, _links, 0);
        HermesBuiltin.apply(push, items, _links);
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
      let _sampled;
      let tmp;
      const obj = { spanId: this._spanId, traceId: this._traceId, traceFlags: _sampled ? tmp.TRACE_FLAG_SAMPLED : tmp.TRACE_FLAG_NONE };
      _sampled = this._sampled;
      tmp = TRACE_FLAG_NONE;
      return obj;
    }
  },
  {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      const self = this;
      if (undefined === arg1) {
        delete self._attributes[tmp];
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
      const item = keys.forEach((item) => self.setAttribute(item, closure_0[item]));
      return this;
    }
  },
  {
    key: "updateStartTime",
    value: function updateStartTime(startTime) {
      const obj = TRACE_FLAG_NONE;
      this._startTime = obj.spanTimeInputToSeconds(startTime);
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
      const attr = this.setAttribute(SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
      return this;
    }
  },
  {
    key: "end",
    value: function end(startTime) {
      const self = this;
      if (!this._endTime) {
        const obj = TRACE_FLAG_NONE;
        self._endTime = obj.spanTimeInputToSeconds(startTime);
        const obj2 = logSpanEnd;
        obj2.logSpanEnd(self);
        self._onSpanEnded();
      }
    }
  },
  {
    key: "getSpanJSON",
    value: function getSpanJSON() {
      let _attributes;
      let _isStandaloneSpan;
      let obj2;
      let obj3;
      let spanId;
      let tmpResult4;
      const self = this;
      const obj = { data: this._attributes, description: this._name, op: this._attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: obj2.getStatusMessage(this._status), timestamp: null, trace_id: null, origin: _attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], profile_id: this._attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_PROFILE_ID], exclusive_time: this._attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME], measurements: obj3.timedEventsToMeasurements(this._events), is_segment: _isStandaloneSpan, segment_id: spanId, links: tmpResult4.convertSpanLinksForEnvelope(self._links) };
      ({ _endTime: obj.timestamp, _traceId: obj.trace_id, _attributes } = this);
      obj2 = TRACE_FLAG_NONE;
      _isStandaloneSpan = this._isStandaloneSpan;
      obj3 = timedEventsToMeasurements;
      if (_isStandaloneSpan) {
        const tmpResult = TRACE_FLAG_NONE;
        _isStandaloneSpan = tmpResult.getRootSpan(self) === self;
      }
      spanId = undefined;
      if (self._isStandaloneSpan) {
        const tmpResult3 = TRACE_FLAG_NONE;
        const rootSpan = tmpResult3.getRootSpan(self);
        spanId = rootSpan.spanContext().spanId;
      }
      tmpResult4 = TRACE_FLAG_NONE;
      return obj;
    }
  },
  {
    key: "isRecording",
    value: function isRecording() {
      return !this._endTime && this._sampled;
    }
  },
  {
    key: "addEvent",
    value: function addEvent(name, startTime, arg2) {
      let obj;
      let tmpResult2;
      if (_mod699.DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS.debug;
        debug.log("[Tracing] Adding an event to span:", name);
      }
      let isArray = startTime && typeof startTime === "number";
      if (!isArray) {
        const _Date = Date;
        isArray = startTime instanceof Date;
      }
      if (!isArray) {
        const _Array = Array;
        isArray = Array.isArray(startTime);
      }
      let tmp7 = startTime;
      if (!isArray) {
        let timestampInSecondsResult = arg2;
        if (!timestampInSecondsResult) {
          const tmpResult = browserPerformanceTimeOrigin;
          timestampInSecondsResult = tmpResult.timestampInSeconds();
        }
        tmp7 = timestampInSecondsResult;
      }
      let isArray1 = startTime && typeof startTime === "number";
      if (!isArray1) {
        const _Date2 = Date;
        isArray1 = startTime instanceof Date;
      }
      if (!isArray1) {
        const _Array2 = Array;
        isArray1 = Array.isArray(startTime);
      }
      if (isArray1) {
        obj = {};
      } else {
        obj = startTime || {};
      }
      const obj2 = { name, time: tmpResult2.spanTimeInputToSeconds(tmp7), attributes: obj };
      const _events = this._events;
      tmpResult2 = TRACE_FLAG_NONE;
      _events.push(obj2);
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
      const obj = _mod724;
      const client = obj.getClient();
      if (client) {
        client.emit("spanEnd", self);
      }
      if (self._isStandaloneSpan) {
        if (self._isStandaloneSpan) {
          if (self._sampled) {
            const items = [self];
            const tmpResult = _enhanceEventWithSdkInfo;
            const spanEnvelope = tmpResult.createSpanEnvelope(items, client);
            const tmpResult5 = _mod724;
            const client1 = tmpResult5.getClient();
            if (client1) {
              if (spanEnvelope[1]) {
                if (0 !== spanEnvelope[1].length) {
                  client1.sendEnvelope(spanEnvelope);
                }
              }
              client1.recordDroppedEvent("before_send", "span");
            }
          } else {
            if (_mod699.DEBUG_BUILD) {
              const debug = CONSOLE_LEVELS.debug;
              debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
            }
            if (client) {
              client.recordDroppedEvent("sample_rate", "span");
            }
          }
        } else {
          const result = self._convertSpanToTransaction();
          if (result) {
            const tmpResult6 = _mod696;
            let scope = tmpResult6.getCapturedScopesOnSpan(self).scope;
            if (!scope) {
              const tmpResult7 = _mod724;
              scope = tmpResult7.getCurrentScope();
            }
            scope.captureEvent(result);
          }
        }
      } else {
        TRACE_FLAG_NONE;
      }
    }
  },
  {
    key: "_convertSpanToTransaction",
    value: function _convertSpanToTransaction() {
      let obj3;
      let obj5;
      let obj7;
      let substr;
      let tmpResult6;
      let tmpResult7;
      const self = this;
      let tmp = self;
      let obj = self(695);
      const spanToJSONResult = obj.spanToJSON(this);
      const tmp4 = spanToJSONResult.start_timestamp && spanToJSONResult.timestamp && spanToJSONResult.span_id && spanToJSONResult.trace_id;
      if (tmp4) {
        let normalizedRequest;
        if (!self._name) {
          if (tmp(699).DEBUG_BUILD) {
            const debug = tmp(700).debug;
            debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
          }
          self._name = "<unlabeled transaction>";
        }
        const tmpResult = tmp(696);
        const capturedScopesOnSpan = tmpResult.getCapturedScopesOnSpan(self);
        const scope = capturedScopesOnSpan.scope;
        const isolationScope = capturedScopesOnSpan.isolationScope;
        if (scope != null) {
          const sdkProcessingMetadata = scope.getScopeData().sdkProcessingMetadata;
          if (sdkProcessingMetadata != null) {
            normalizedRequest = sdkProcessingMetadata.normalizedRequest;
          }
        }
        if (true === self._sampled) {
          const tmpResult5 = tmp(695);
          const spanDescendants = tmpResult5.getSpanDescendants(self);
          const found = spanDescendants.filter((isStandaloneSpan) => {
            let tmp = isStandaloneSpan !== self;
            if (tmp) {
              tmp = !(isStandaloneSpan instanceof c3 && isStandaloneSpan.isStandaloneSpan());
              isStandaloneSpan instanceof c3 && isStandaloneSpan.isStandaloneSpan();
            }
            return tmp;
          });
          const mapped = found.map((item) => {
            const obj = self(dependencyMap[5]);
            return obj.spanToJSON(item);
          });
          const found1 = mapped.filter(isFullFinishedSpan);
          const tmp9 = self._attributes[tmp(undefined, 715).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          const _attributes = self._attributes;
          delete _attributes[tmp(undefined, 715).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
          const item = found1.forEach((data) => {
            data = data.data;
            delete data[self(undefined, dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
          });
          const obj2 = { contexts: obj3, spans: substr, start_timestamp: null, timestamp: null, transaction: null, type: "transaction", sdkProcessingMetadata: obj5, request: normalizedRequest };
          obj3 = { trace: tmpResult6.spanToTransactionTraceContext(self) };
          substr = found1;
          tmpResult6 = tmp(695);
          if (found1.length > 1000) {
            const sorted = found1.sort((start_timestamp, start_timestamp2) => start_timestamp.start_timestamp - start_timestamp2.start_timestamp);
            substr = sorted.slice(0, 1000);
          }
          ({ _startTime: obj4.start_timestamp, _endTime: obj4.timestamp, _name: obj4.transaction } = self);
          obj5 = { capturedSpanScope: scope, capturedSpanIsolationScope: isolationScope, dynamicSamplingContext: tmpResult7.getDynamicSamplingContextFromSpan(self) };
          let tmp12 = tmp9;
          tmpResult7 = tmp(733);
          if (tmp12) {
            const obj6 = { transaction_info: obj7 };
            tmp12 = obj6;
            obj7 = { source: tmp9 };
          }
          const merged = Object.assign(tmp12);
          const tmpResult8 = tmp(738);
          const result = tmpResult8.timedEventsToMeasurements(self._events);
          let length = result;
          if (length) {
            const _Object = Object;
            length = Object.keys(result).length;
          }
          if (length) {
            if (tmp(699).DEBUG_BUILD) {
              const debug2 = tmp(700).debug;
              const _JSON = JSON;
              debug2.log("[Measurements] Adding measurements to transaction event", JSON.stringify(result, undefined, 2));
            }
            obj2.measurements = result;
          }
          return obj2;
        }
      }
    }
  }
];
const _moduleResult = _createClass(SentrySpan, items);
let c3 = _moduleResult;
const SentrySpan_export = _moduleResult;

export { SentrySpan_export as SentrySpan };