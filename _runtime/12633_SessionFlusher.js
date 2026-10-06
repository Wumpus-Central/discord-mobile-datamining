// _runtime/12633_SessionFlusher.js
import _mod12586 from "metro/12586__.js";
import _mod12607 from "metro/12607__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let map;

class SessionFlusher {
  constructor(self, _sessionAttrs) {
    self = this;
    _classCallCheck(this, SessionFlusher);
    this._client = self;
    this.flushTimeout = 60;
    this._pendingAggregates = new Map();
    this._isEnabled = true;
    new Map();
    this._intervalId = setInterval(() => self.flush(), 1000 * this.flushTimeout);
    if (this._intervalId.unref) {
      const _intervalId = self._intervalId;
      _intervalId.unref();
    }
    self._sessionAttrs = _sessionAttrs;
  }
}
const entry = {
  key: "flush",
  value: function flush() {
    const self = this;
    const sessionAggregates = this.getSessionAggregates();
    if (0 !== sessionAggregates.aggregates.length) {
      const _Map = Map;
      const self2 = this;
      const self3 = this;
      self._pendingAggregates = new Map();
      const _client = self._client;
      map = new Map();
      _client.sendSession(sessionAggregates);
    }
  },
};
const items = [
  entry,
  {
    key: "getSessionAggregates",
    value: function getSessionAggregates() {
      const _pendingAggregates = this._pendingAggregates;
      const obj = { attrs: this._sessionAttrs, aggregates: Array.from(_pendingAggregates.values()) };
      const obj2 = _mod12586;
      return obj2.dropUndefinedKeys(obj);
    },
  },
  {
    key: "close",
    value: function close() {
      clearInterval(this._intervalId);
      this._isEnabled = false;
      this.flush();
    },
  },
  {
    key: "incrementSessionStatusCount",
    value: function incrementSessionStatusCount() {
      const self = this;
      if (this._isEnabled) {
        const obj = _mod12607;
        const isolationScope = obj.getIsolationScope();
        const requestSession = isolationScope.getRequestSession();
        const tmp4 = requestSession && requestSession.status;
        if (tmp4) {
          const _Date = Date;
          const self2 = this;
          const self3 = this;
          const _incrementSessionStatusCount = self._incrementSessionStatusCount;
          const status = requestSession.status;
          const date = new Date();
          const result = _incrementSessionStatusCount(status, date);
          isolationScope.setRequestSession(undefined);
        }
      }
    },
  },
  {
    key: "_incrementSessionStatusCount",
    value: function _incrementSessionStatusCount(status, date) {
      let date1;
      date = new Date(date);
      const setSecondsResult = date.setSeconds(0, 0);
      const _pendingAggregates = this._pendingAggregates;
      let value = _pendingAggregates.get(setSecondsResult);
      if (!value) {
        const obj = { started: date1.toISOString() };
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _pendingAggregates2 = this._pendingAggregates;
        date1 = new Date(setSecondsResult);
        const result = _pendingAggregates2.set(setSecondsResult, obj);
        value = obj;
      }
      if ("errored" === status) {
        const tmp8 = value.errored || 0;
        value.errored = tmp8 + 1;
        return value.errored;
      } else if ("ok" === status) {
        const tmp7 = value.exited || 0;
        value.exited = tmp7 + 1;
        return value.exited;
      } else {
        const tmp6 = value.crashed || 0;
        value.crashed = tmp6 + 1;
        return value.crashed;
      }
    },
  },
];
const SessionFlusher_export = _createClass(SessionFlusher, items);

export { SessionFlusher_export as SessionFlusher };
