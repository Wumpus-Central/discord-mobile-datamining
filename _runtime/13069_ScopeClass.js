// _runtime/13069_ScopeClass.js
import _slicedToArray from "metro/00032__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const ScopeClass = require;
class ScopeClass {
  constructor() {
    tmp = closure_3(this, ScopeClass);
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
    obj = { traceId: null, spanId: null };
    obj2 = closure_0(closure_1[3]);
    obj.traceId = obj2.generateTraceId();
    obj3 = closure_0(closure_1[3]);
    obj.spanId = obj3.generateSpanId();
    this._propagationContext = obj;
    return;
  }
}
const entry = {
  key: "clone",
  value: function clone() {
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
    const obj = { traceId: ScopeClass(13058).generateTraceId(), spanId: null };
    const obj2 = ScopeClass(13058);
    obj.spanId = ScopeClass(13058).generateSpanId();
    obj4._propagationContext = obj;
    const items = [...this._breadcrumbs];
    obj4._breadcrumbs = items;
    const merged = Object.assign(this._tags);
    obj4._tags = {};
    const merged1 = Object.assign(this._extra);
    obj4._extra = {};
    const merged2 = Object.assign(this._contexts);
    obj4._contexts = {};
    if (this._contexts.flags) {
      const obj8 = { values: null };
      const items1 = [];
      HermesBuiltin.arraySpread(self._contexts.flags.values, 0);
      obj8.values = items1;
      obj4._contexts.flags = obj8;
    }
    ({
      _user: tmp._user,
      _level: tmp._level,
      _session: tmp._session,
      _transactionName: tmp._transactionName,
      _fingerprint: tmp._fingerprint,
    } = self);
    const items2 = [...self._eventProcessors];
    obj4._eventProcessors = items2;
    obj4._requestSession = self._requestSession;
    obj4._attachments = [...self._attachments];
    const merged3 = Object.assign(self._sdkProcessingMetadata);
    obj4._sdkProcessingMetadata = {};
    const merged4 = Object.assign(self._propagationContext);
    obj4._propagationContext = {};
    ({ _client: tmp._client, _lastEventId: tmp._lastEventId } = self);
    const obj10 = {};
    const obj3 = ScopeClass(13058);
    const obj5 = {};
    const obj6 = {};
    const obj7 = {};
    const obj9 = {};
    const tmp3Result = ScopeClass(13070);
    tmp3Result._setSpanForScope(obj4, ScopeClass(13070)._getSpanForScope(self));
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
      if (!user) {
        user = { email: "Array", id: "flexDirection", ip_address: "y", username: "HermesInternal" };
      }
      const self = this;
      this._user = user;
      if (this._session) {
        const obj = { user };
        ScopeClass(13071).updateSession(self._session, obj);
        const obj2 = ScopeClass(13071);
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
      const merged = Object.assign(this._tags);
      const merged1 = Object.assign(arg0);
      this._tags = {};
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
      const merged = Object.assign(this._extra);
      const merged1 = Object.assign(arg0);
      this._extra = {};
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
        const _contexts = self._contexts;
        delete tmp[tmp2];
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
      if (_session) {
        self._session = _session;
      } else {
        delete tmp[tmp2];
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
      const self = this;
      if (requestSession) {
        let obj = requestSession;
        if (typeof requestSession === "function") {
          obj = requestSession(self);
        }
        if (obj instanceof _moduleResult) {
          const items = [obj.getScopeData(), obj.getRequestSession()];
          let items2 = items;
        } else {
          if (obj2.isPlainObject(obj)) {
            const items1 = [requestSession, requestSession.requestSession];
            items2 = items1;
          } else {
            items2 = [];
          }
          obj2 = ScopeClass(13055);
        }
        [obj3, tmp6] = items2;
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
        if (user) {
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
        if (tmp6) {
          self._requestSession = tmp6;
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
      };
      ScopeClass(13070)._setSpanForScope(obj, undefined);
      obj._attachments = [];
      const obj3 = { traceId: null };
      const obj2 = ScopeClass(13070);
      obj3.traceId = ScopeClass(13058).generateTraceId();
      const result = obj.setPropagationContext(obj3);
      const result1 = obj._notifyScopeListeners();
      return obj;
    },
  },
  {
    key: "addBreadcrumb",
    value: function addBreadcrumb(arg0, num) {
      num = 100;
      const self = this;
      if (num <= 0) {
        return self;
      } else {
        const obj = { timestamp: ScopeClass(13062).dateTimestampInSeconds() };
        const merged = Object.assign(arg0);
        const _breadcrumbs = self._breadcrumbs;
        _breadcrumbs.push(obj);
        if (self._breadcrumbs.length > num) {
          const _breadcrumbs1 = self._breadcrumbs;
          self._breadcrumbs = _breadcrumbs1.slice(-num);
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
        span: ScopeClass(13070)._getSpanForScope(self),
      };
      return obj;
    },
  },
  {
    key: "setSDKProcessingMetadata",
    value: function setSDKProcessingMetadata(arg0) {
      this._sdkProcessingMetadata = ScopeClass(13073).merge(this._sdkProcessingMetadata, arg0, 2);
      return this;
    },
  },
  {
    key: "setPropagationContext",
    value: function setPropagationContext(arg0) {
      const obj = { spanId: ScopeClass(13058).generateSpanId() };
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
      if (event_id) {
        if (event_id.event_id) {
          event_id = event_id.event_id;
        }
        const self = this;
        if (this._client) {
          const _Error = Error;
          const error = new Error("Sentry syntheticException");
          const _client = self._client;
          const obj2 = { originalException, syntheticException: error };
          const merged = Object.assign(event_id);
          obj2.event_id = event_id;
          _client.captureException(originalException, obj2, self);
          return event_id;
        } else {
          const logger = ScopeClass(13048).logger;
          logger.warn("No client configured on scope - will not capture exception!");
          return event_id;
        }
      }
      event_id = ScopeClass(13059).uuid4();
      const obj = ScopeClass(13059);
    },
  },
  {
    key: "captureMessage",
    value: function captureMessage(originalException, arg1, event_id) {
      if (event_id) {
        if (event_id.event_id) {
          event_id = event_id.event_id;
        }
        const self = this;
        if (this._client) {
          const _Error = Error;
          const error = new Error(originalException);
          const _client = self._client;
          const obj2 = { originalException, syntheticException: error };
          const merged = Object.assign(event_id);
          obj2.event_id = event_id;
          _client.captureMessage(originalException, arg1, obj2, self);
          return event_id;
        } else {
          const logger = ScopeClass(13048).logger;
          logger.warn("No client configured on scope - will not capture message!");
          return event_id;
        }
      }
      event_id = ScopeClass(13059).uuid4();
      const obj = ScopeClass(13059);
    },
  },
  {
    key: "captureEvent",
    value: function captureEvent(arg0, event_id) {
      if (event_id) {
        if (event_id.event_id) {
          event_id = event_id.event_id;
        }
        const self = this;
        if (this._client) {
          const _client = self._client;
          const obj2 = {};
          const merged = Object.assign(event_id);
          obj2.event_id = event_id;
          _client.captureEvent(arg0, obj2, self);
        } else {
          const logger = ScopeClass(13048).logger;
          logger.warn("No client configured on scope - will not capture event!");
        }
        return event_id;
      }
      event_id = ScopeClass(13059).uuid4();
      const obj = ScopeClass(13059);
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
