// === Module 12850: SessionFlusher ===

// Module 12850 (SessionFlusher)
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const SessionFlusher = require;
class SessionFlusher {
  constructor(arg0, arg1) {
    self = this;
    self = this;
    tmp = closure_2(this, self);
    this._client = global;
    this.flushTimeout = 60;
    map = new Map();
    this._pendingAggregates = map;
    this._isEnabled = true;
    this._intervalId = setInterval(() => self.flush(), 1000 * this.flushTimeout);
    if (this._intervalId.unref) {
      _intervalId = self._intervalId;
      unrefResult = _intervalId.unref();
    }
    self._sessionAttrs = require;
    return;
  }
}
const items = [
  {
    key: "flush",
    value: function flush() {
      const self = this;
      const sessionAggregates = this.getSessionAggregates();
      if (0 !== sessionAggregates.aggregates.length) {
        const _Map = Map;
        const map = new Map();
        self._pendingAggregates = map;
        const _client = self._client;
        _client.sendSession(sessionAggregates);
      }
    }
  },
  {
    key: "getSessionAggregates",
    value: function getSessionAggregates() {
      const _pendingAggregates = this._pendingAggregates;
      const obj = { attrs: this._sessionAttrs, aggregates: Array.from(_pendingAggregates.values()) };
      return SessionFlusher(12803).dropUndefinedKeys(obj);
    }
  },
  {
    key: "close",
    value: function close() {
      clearInterval(this._intervalId);
      this._isEnabled = false;
      this.flush();
    }
  },
  {
    key: "incrementSessionStatusCount",
    value: function incrementSessionStatusCount() {
      const self = this;
      if (this._isEnabled) {
        const isolationScope = SessionFlusher(12824).getIsolationScope();
        const requestSession = isolationScope.getRequestSession();
        let status = requestSession;
        if (requestSession) {
          status = requestSession.status;
        }
        if (status) {
          const _Date = Date;
          const date = new Date();
          const result = self._incrementSessionStatusCount(requestSession.status, date);
          isolationScope.setRequestSession(undefined);
        }
        const obj = SessionFlusher(12824);
      }
    }
  },
  {
    key: "_incrementSessionStatusCount",
    value: function _incrementSessionStatusCount(status, date) {
      const setSecondsResult = new Date(date).setSeconds(0, 0);
      const _pendingAggregates = this._pendingAggregates;
      let value = _pendingAggregates.get(setSecondsResult);
      if (!value) {
        const obj = { started: null };
        const _Date = Date;
        const date1 = new Date(setSecondsResult);
        obj[0] = date1.toISOString();
        const _pendingAggregates2 = this._pendingAggregates;
        const result = _pendingAggregates2.set(setSecondsResult, obj);
        value = obj;
      }
      if ("errored" === status) {
        value.errored = (value.errored || 0) + 1;
        return value.errored;
      } else if ("ok" === status) {
        value.exited = (value.exited || 0) + 1;
        return value.exited;
      } else {
        value.crashed = (value.crashed || 0) + 1;
        return value.crashed;
      }
      date = new Date(date);
    }
  }
];

export const SessionFlusher = _createClass(SessionFlusher, items);