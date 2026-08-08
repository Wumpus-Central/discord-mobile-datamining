// _runtime/07487_SentryNonRecordingSpan.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const SentryNonRecordingSpan = require;
class SentryNonRecordingSpan {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    self = this;
    tmp = outer1_2(this, SentryNonRecordingSpan);
    traceId = obj.traceId;
    if (!traceId) {
      tmp2 = SentryNonRecordingSpan;
      tmp3 = closure_1;
      obj2 = require("generatePropagationContext");
      traceId = obj2.generateTraceId();
    }
    self._traceId = traceId;
    spanId = obj.spanId;
    if (!spanId) {
      tmp4 = SentryNonRecordingSpan;
      tmp5 = closure_1;
      obj3 = require("generatePropagationContext");
      spanId = obj3.generateSpanId();
    }
    self._spanId = spanId;
    return;
  }
}
const items = [
  {
    key: "spanContext",
    value: function spanContext() {
      return { spanId: this._spanId, traceId: this._traceId, traceFlags: SentryNonRecordingSpan(7459).TRACE_FLAG_NONE };
    }
  },
  {
    key: "end",
    value: function end(arg0) {

    }
  },
  {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      return this;
    }
  },
  {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      return this;
    }
  },
  {
    key: "setStatus",
    value: function setStatus(arg0) {
      return this;
    }
  },
  {
    key: "updateName",
    value: function updateName(arg0) {
      return this;
    }
  },
  {
    key: "isRecording",
    value: function isRecording() {
      return false;
    }
  },
  {
    key: "addEvent",
    value: function addEvent(arg0, arg1, arg2) {
      return this;
    }
  },
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
  }
];

export const SentryNonRecordingSpan = _createClass(SentryNonRecordingSpan, items);