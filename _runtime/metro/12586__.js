// _runtime/metro/12586__.js
import _mod12565 from "12565__.js";
import _mod12572 from "12572__.js";
import generatePropagationContext from "../12575_generatePropagationContext.js";
import _mod12576 from "12576__.js";
import _browserPerformanceTimeOriginMode from "../12579__browserPerformanceTimeOriginMode.js";
import _mod12587 from "12587__.js";
import _mod12588 from "12588__.js";
import _mod12590 from "12590__.js";
import _slicedToArray from "00032__slicedToArray.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

class ScopeClass {
  constructor() {
    let obj2;
    let obj3;
    _classCallCheck(this, ScopeClass);
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    const obj = { traceId: obj2.generateTraceId(), spanId: obj3.generateSpanId() };
    obj2 = generatePropagationContext;
    this._propagationContext = obj;
    obj3 = generatePropagationContext;
  }
}
const entry = {
  key: "clone",
  value: function clone() {
    let items1;
    let obj2;
    let obj3;
    const self = this;
    const obj4 = Object.create(ScopeClass.prototype);
    _classCallCheck(obj4, ScopeClass);
    obj4._notifyingListeners = false;
    obj4._scopeListeners = [];
    obj4._eventProcessors = [];
    obj4._breadcrumbs = [];
    obj4._attachments = [];
    obj4._user = {};
    obj4._tags = {};
    obj4._extra = {};
    obj4._contexts = {};
    obj4._sdkProcessingMetadata = {};
    const obj = { traceId: obj2.generateTraceId(), spanId: obj3.generateSpanId() };
    obj2 = generatePropagationContext;
    obj4._propagationContext = obj;
    const items = [...this._breadcrumbs];
    obj4._breadcrumbs = items;
    obj3 = generatePropagationContext;
    const obj5 = {};
    const merged = Object.assign(this._tags);
    obj4._tags = obj5;
    const obj6 = {};
    const merged1 = Object.assign(this._extra);
    obj4._extra = obj6;
    const obj7 = {};
    const merged2 = Object.assign(this._contexts);
    obj4._contexts = obj7;
    if (this._contexts.flags) {
      const obj8 = { values: items1 };
      items1 = [];
      const _contexts = obj4._contexts;
      HermesBuiltin.arraySpread(items1, self._contexts.flags.values, 0);
      _contexts.flags = obj8;
    }
    ({
      _user: tmp2._user,
      _level: tmp2._level,
      _session: tmp2._session,
      _transactionName: tmp2._transactionName,
      _fingerprint: tmp2._fingerprint,
    } = self);
    const items2 = [...self._eventProcessors];
    obj4._eventProcessors = items2;
    obj4._requestSession = self._requestSession;
    obj4._attachments = [...self._attachments];
    const obj9 = {};
    const merged3 = Object.assign(self._sdkProcessingMetadata);
    obj4._sdkProcessingMetadata = obj9;
    const obj10 = {};
    const merged4 = Object.assign(self._propagationContext);
    obj4._propagationContext = obj10;
    ({ _client: tmp2._client, _lastEventId: tmp2._lastEventId } = self);
    const _setSpanForScope = _mod12587._setSpanForScope;
    _mod12587;
    const tmp4Result2 = _mod12587;
    _setSpanForScope(obj4, tmp4Result2._getSpanForScope(self));
    return obj4;
  },
};
let items = [
  entry,
  {
    key: "setClient",
    value: function setClient(_client) {
      this._client = _client;
    },
  },
  {
    key: "setLastEventId",
    value: function setLastEventId(_lastEventId) {
      this._lastEventId = _lastEventId;
    },
  },
  {
    key: "getClient",
    value: function getClient() {
      return this._client;
    },
  },
  {
    key: "lastEventId",
    value: function lastEventId() {
      return this._lastEventId;
    },
  },
  {
    key: "addScopeListener",
    value: function addScopeListener(arg0) {
      const _scopeListeners = this._scopeListeners;
      _scopeListeners.push(arg0);
    },
  },
  {
    key: "addEventProcessor",
    value: function addEventProcessor(arg0) {
      const _eventProcessors = this._eventProcessors;
      _eventProcessors.push(arg0);
      return this;
    },
  },
  {
    key: "setUser",
    value: function setUser(user) {
      const self = this;
      const tmp = user || { email: "Array", id: "T", ip_address: "y", username: "IconComponent" };
      this._user = tmp;
      if (this._session) {
        const obj2 = { user };
        const obj = _mod12588;
        obj.updateSession(self._session, obj2);
      }
      const result = self._notifyScopeListeners();
      return self;
    },
  },
  {
    key: "getUser",
    value: function getUser() {
      return this._user;
    },
  },
  {
    key: "getRequestSession",
    value: function getRequestSession() {
      return this._requestSession;
    },
  },
  {
    key: "setRequestSession",
    value: function setRequestSession(_requestSession) {
      this._requestSession = _requestSession;
      return this;
    },
  },
  {
    key: "setTags",
    value: function setTags(arg0) {
      const obj = {};
      const merged = Object.assign(this._tags);
      const merged1 = Object.assign(arg0);
      this._tags = obj;
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "setTag",
    value: function setTag(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(this._tags);
      obj[arg0] = arg1;
      this._tags = obj;
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "setExtras",
    value: function setExtras(arg0) {
      const obj = {};
      const merged = Object.assign(this._extra);
      const merged1 = Object.assign(arg0);
      this._extra = obj;
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "setExtra",
    value: function setExtra(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(this._extra);
      obj[arg0] = arg1;
      this._extra = obj;
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "setFingerprint",
    value: function setFingerprint(_fingerprint) {
      this._fingerprint = _fingerprint;
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "setLevel",
    value: function setLevel(_level) {
      this._level = _level;
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "setTransactionName",
    value: function setTransactionName(_transactionName) {
      this._transactionName = _transactionName;
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "setContext",
    value: function setContext(arg0, arg1) {
      const self = this;
      if (null === arg1) {
        delete self._contexts[tmp];
      } else {
        self._contexts[arg0] = arg1;
      }
      const result = self._notifyScopeListeners();
      return self;
    },
  },
  {
    key: "setSession",
    value: function setSession(_session) {
      const self = this;
      const tmp = _session;
      if (tmp) {
        self._session = _session;
      } else {
        delete self["_session"];
      }
      const result = self._notifyScopeListeners();
      return self;
    },
  },
  {
    key: "getSession",
    value: function getSession() {
      return this._session;
    },
  },
  {
    key: "update",
    value: function update(requestSession) {
      let contexts;
      let extra;
      let fingerprint;
      let level;
      let obj3;
      let obj4;
      let tags;
      let tmp7;
      let user;
      const self = this;
      const tmp = requestSession;
      if (tmp) {
        let items2;
        let obj = requestSession;
        if (typeof requestSession === "function") {
          obj = requestSession(self);
        }
        if (obj instanceof _moduleResult) {
          const items = [obj.getScopeData(), obj.getRequestSession()];
          items2 = items;
        } else {
          const obj2 = _mod12572;
          if (obj2.isPlainObject(obj)) {
            const items1 = [requestSession, requestSession.requestSession];
            items2 = items1;
          } else {
            items2 = [];
          }
        }
        [obj3, tmp7] = items2;
        _slicedToArray(items2, 2);
        if (!obj4) {
          obj4 = {};
        }
        ({ tags, extra, user, contexts, level, fingerprint } = obj4);
        if (undefined === fingerprint) {
          fingerprint = [];
        }
        const propagationContext = obj4.propagationContext;
        const obj5 = {};
        const merged = Object.assign(self._tags);
        const merged1 = Object.assign(tags);
        self._tags = obj5;
        const obj6 = {};
        const merged2 = Object.assign(self._extra);
        const merged3 = Object.assign(extra);
        self._extra = obj6;
        const obj10 = {};
        const merged4 = Object.assign(self._contexts);
        const merged5 = Object.assign(contexts);
        self._contexts = obj10;
        let length = user;
        if (length) {
          const _Object = Object;
          length = Object.keys(user).length;
        }
        if (length) {
          self._user = user;
        }
        if (level) {
          self._level = level;
        }
        if (fingerprint.length) {
          self._fingerprint = fingerprint;
        }
        if (propagationContext) {
          self._propagationContext = propagationContext;
        }
        if (tmp7) {
          self._requestSession = tmp7;
        }
        return self;
      } else {
        return self;
      }
    },
  },
  {
    key: "clear",
    value: function clear() {
      let obj4;
      const obj = {
        _breadcrumbs: [],
        _tags: {},
        _extra: {},
        _user: {},
        _contexts: {},
        _level: undefined,
        _transactionName: undefined,
        _fingerprint: undefined,
        _requestSession: undefined,
        _session: undefined,
        _attachments: [],
      };
      const obj2 = _mod12587;
      obj2._setSpanForScope(obj, undefined);
      const setPropagationContext = obj.setPropagationContext;
      const obj3 = { traceId: obj4.generateTraceId() };
      obj4 = generatePropagationContext;
      const result = setPropagationContext(obj3);
      const result1 = obj._notifyScopeListeners();
      return obj;
    },
  },
  {
    key: "addBreadcrumb",
    value: function addBreadcrumb(arg0, num) {
      let obj2;
      const self = this;
      if (100 <= 0) {
        return self;
      } else {
        const obj = { timestamp: obj2.dateTimestampInSeconds() };
        obj2 = _browserPerformanceTimeOriginMode;
        const merged = Object.assign(arg0);
        const _breadcrumbs = self._breadcrumbs;
        _breadcrumbs.push(obj);
        if (self._breadcrumbs.length > 100) {
          const _breadcrumbs1 = self._breadcrumbs;
          self._breadcrumbs = _breadcrumbs1.slice(-100);
          if (self._client) {
            const _client = self._client;
            _client.recordDroppedEvent("buffer_overflow", "log_item");
          }
        }
        const result = self._notifyScopeListeners();
        return self;
      }
    },
  },
  {
    key: "getLastBreadcrumb",
    value: function getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    },
  },
  {
    key: "clearBreadcrumbs",
    value: function clearBreadcrumbs() {
      this._breadcrumbs = [];
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "addAttachment",
    value: function addAttachment(arg0) {
      const _attachments = this._attachments;
      _attachments.push(arg0);
      return this;
    },
  },
  {
    key: "clearAttachments",
    value: function clearAttachments() {
      this._attachments = [];
      return this;
    },
  },
  {
    key: "getScopeData",
    value: function getScopeData() {
      let obj2;
      const self = this;
      const obj = {
        breadcrumbs: this._breadcrumbs,
        attachments: this._attachments,
        contexts: this._contexts,
        tags: this._tags,
        extra: this._extra,
        user: this._user,
        level: this._level,
        fingerprint: this._fingerprint || [],
        eventProcessors: self._eventProcessors,
        propagationContext: self._propagationContext,
        sdkProcessingMetadata: self._sdkProcessingMetadata,
        transactionName: self._transactionName,
        span: obj2._getSpanForScope(self),
      };
      obj2 = _mod12587;
      return obj;
    },
  },
  {
    key: "setSDKProcessingMetadata",
    value: function setSDKProcessingMetadata(arg0) {
      const obj = _mod12590;
      this._sdkProcessingMetadata = obj.merge(this._sdkProcessingMetadata, arg0, 2);
      return this;
    },
  },
  {
    key: "setPropagationContext",
    value: function setPropagationContext(arg0) {
      let obj2;
      const obj = { spanId: obj2.generateSpanId() };
      obj2 = generatePropagationContext;
      const merged = Object.assign(arg0);
      this._propagationContext = obj;
      return this;
    },
  },
  {
    key: "getPropagationContext",
    value: function getPropagationContext() {
      return this._propagationContext;
    },
  },
  {
    key: "captureException",
    value: function captureException(originalException, event_id) {
      const tmp = event_id;
      if (tmp) {
        if (event_id.event_id) {
          event_id = event_id.event_id;
        }
        const self = this;
        if (this._client) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error = new Error("Sentry syntheticException");
          const _client = self._client;
          const captureException = _client.captureException;
          const obj2 = { originalException, syntheticException: error, event_id };
          const merged = Object.assign(event_id);
          captureException(originalException, obj2, self);
          return event_id;
        } else {
          const logger = _mod12565.logger;
          logger.warn("No client configured on scope - will not capture exception!");
          return event_id;
        }
      }
      const obj = _mod12576;
      event_id = obj.uuid4();
    },
  },
  {
    key: "captureMessage",
    value: function captureMessage(originalException, arg1, event_id) {
      const tmp = event_id;
      if (tmp) {
        if (event_id.event_id) {
          event_id = event_id.event_id;
        }
        const self = this;
        if (this._client) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error = new Error(originalException);
          const _client = self._client;
          const captureMessage = _client.captureMessage;
          const obj2 = { originalException, syntheticException: error, event_id };
          const merged = Object.assign(event_id);
          captureMessage(originalException, arg1, obj2, self);
          return event_id;
        } else {
          const logger = _mod12565.logger;
          logger.warn("No client configured on scope - will not capture message!");
          return event_id;
        }
      }
      const obj = _mod12576;
      event_id = obj.uuid4();
    },
  },
  {
    key: "captureEvent",
    value: function captureEvent(arg0, event_id) {
      const tmp = event_id;
      if (tmp) {
        if (event_id.event_id) {
          event_id = event_id.event_id;
        }
        const self = this;
        if (this._client) {
          const _client = self._client;
          const captureEvent = _client.captureEvent;
          const obj2 = { event_id };
          const merged = Object.assign(event_id);
          captureEvent(arg0, obj2, self);
        } else {
          const logger = _mod12565.logger;
          logger.warn("No client configured on scope - will not capture event!");
        }
        return event_id;
      }
      const obj = _mod12576;
      event_id = obj.uuid4();
    },
  },
  {
    key: "_notifyScopeListeners",
    value: function _notifyScopeListeners() {
      const self = this;
      if (!this._notifyingListeners) {
        self._notifyingListeners = true;
        const _scopeListeners = self._scopeListeners;
        const item = _scopeListeners.forEach((fn) => {
          fn(self);
        });
        self._notifyingListeners = false;
      }
    },
  },
];
const _moduleResult = _createClass(ScopeClass, items);

export const Scope = _moduleResult;
