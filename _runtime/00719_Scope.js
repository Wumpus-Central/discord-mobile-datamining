// _runtime/00719_Scope.js
import _mod699 from "metro/00699__.js";
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import _mod703 from "metro/00703__.js";
import generateSpanId from "00705_generateSpanId.js";
import uuid4 from "00706_uuid4.js";
import safeDateNow from "00707_safeDateNow.js";
import _mod708 from "metro/00708__.js";
import browserPerformanceTimeOrigin from "00714_browserPerformanceTimeOrigin.js";
import _getSpanForScope from "00720__getSpanForScope.js";
import closeSession from "00721_closeSession.js";
import merge from "00722_merge.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class Scope {
  constructor() {
    let obj2;
    let obj3;
    _classCallCheck(this, Scope);
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    const obj = { traceId: obj2.generateTraceId(), sampleRand: obj3.safeMathRandom() };
    obj2 = generateSpanId;
    this._propagationContext = obj;
    obj3 = safeDateNow;
  }
}
const entry = {
  key: "clone",
  value: function clone() {
    let items1;
    let obj2;
    let obj3;
    const self = this;
    const obj4 = Object.create(Scope.prototype);
    _classCallCheck(obj4, Scope);
    obj4._notifyingListeners = false;
    obj4._scopeListeners = [];
    obj4._eventProcessors = [];
    obj4._breadcrumbs = [];
    obj4._attachments = [];
    obj4._user = {};
    obj4._tags = {};
    obj4._attributes = {};
    obj4._extra = {};
    obj4._contexts = {};
    obj4._sdkProcessingMetadata = {};
    const obj = { traceId: obj2.generateTraceId(), sampleRand: obj3.safeMathRandom() };
    obj2 = generateSpanId;
    obj4._propagationContext = obj;
    const items = [...this._breadcrumbs];
    obj4._breadcrumbs = items;
    obj3 = safeDateNow;
    const obj5 = {};
    const merged = Object.assign(this._tags);
    obj4._tags = obj5;
    const obj6 = {};
    const merged1 = Object.assign(this._attributes);
    obj4._attributes = obj6;
    const obj7 = {};
    const merged2 = Object.assign(this._extra);
    obj4._extra = obj7;
    const obj8 = {};
    const merged3 = Object.assign(this._contexts);
    obj4._contexts = obj8;
    if (this._contexts.flags) {
      const obj9 = { values: items1 };
      items1 = [];
      const _contexts = obj4._contexts;
      HermesBuiltin.arraySpread(items1, self._contexts.flags.values, 0);
      _contexts.flags = obj9;
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
    obj4._attachments = [...self._attachments];
    const obj10 = {};
    const merged4 = Object.assign(self._sdkProcessingMetadata);
    obj4._sdkProcessingMetadata = obj10;
    const obj11 = {};
    const merged5 = Object.assign(self._propagationContext);
    obj4._propagationContext = obj11;
    ({ _client: tmp2._client, _lastEventId: tmp2._lastEventId } = self);
    const _setSpanForScope = _getSpanForScope._setSpanForScope;
    _getSpanForScope;
    const tmp4Result2 = _getSpanForScope;
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
        const obj = closeSession;
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
      const obj = { [arg0]: arg1 };
      return this.setTags(obj);
    },
  },
  {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      const obj = {};
      const merged = Object.assign(this._attributes);
      const merged1 = Object.assign(arg0);
      this._attributes = obj;
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      const obj = { [arg0]: arg1 };
      return this.setAttributes(obj);
    },
  },
  {
    key: "removeAttribute",
    value: function removeAttribute(crossorigin) {
      const self = this;
      if (crossorigin in this._attributes) {
        delete self._attributes[tmp];
        const result = self._notifyScopeListeners();
      }
      return self;
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
    value: function update(fn) {
      let attributes;
      let contexts;
      let extra;
      let fingerprint;
      let level;
      let tags;
      let user;
      const self = this;
      const tmp = fn;
      if (tmp) {
        let scopeData;
        let obj = fn;
        if (typeof fn === "function") {
          obj = fn(self);
        }
        if (obj instanceof Scope) {
          scopeData = obj.getScopeData();
        } else {
          const obj2 = _mod703;
          if (obj2.isPlainObject(obj)) {
            scopeData = fn;
          }
        }
        if (!scopeData) {
          scopeData = {};
        }
        ({ tags, attributes, extra, user, contexts, level, fingerprint } = scopeData);
        if (undefined === fingerprint) {
          fingerprint = [];
        }
        const propagationContext = scopeData.propagationContext;
        const obj3 = {};
        const merged = Object.assign(self._tags);
        const merged1 = Object.assign(tags);
        self._tags = obj3;
        const obj4 = {};
        const merged2 = Object.assign(self._attributes);
        const merged3 = Object.assign(attributes);
        self._attributes = obj4;
        const obj5 = {};
        const merged4 = Object.assign(self._extra);
        const merged5 = Object.assign(extra);
        self._extra = obj5;
        const obj6 = {};
        const merged6 = Object.assign(self._contexts);
        const merged7 = Object.assign(contexts);
        self._contexts = obj6;
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
      let obj5;
      const obj = {
        _breadcrumbs: [],
        _tags: {},
        _attributes: {},
        _extra: {},
        _user: {},
        _contexts: {},
        _level: undefined,
        _transactionName: undefined,
        _fingerprint: undefined,
        _session: undefined,
        _attachments: [],
      };
      const obj2 = _getSpanForScope;
      obj2._setSpanForScope(obj, undefined);
      const setPropagationContext = obj.setPropagationContext;
      const obj3 = { traceId: obj4.generateTraceId(), sampleRand: obj5.safeMathRandom() };
      obj4 = generateSpanId;
      obj5 = safeDateNow;
      const result = setPropagationContext(obj3);
      const result1 = obj._notifyScopeListeners();
      return obj;
    },
  },
  {
    key: "addBreadcrumb",
    value: function addBreadcrumb(message, num) {
      let obj3;
      const self = this;
      if (100 <= 0) {
        return self;
      } else {
        const obj = { timestamp: obj3.dateTimestampInSeconds(), message };
        obj3 = browserPerformanceTimeOrigin;
        const merged = Object.assign(message);
        if (message.message) {
          const tmp6Result = _mod708;
          message = tmp6Result.truncate(message.message, 2048);
        } else {
          message = message.message;
        }
        const _breadcrumbs = self._breadcrumbs;
        _breadcrumbs.push(obj);
        if (self._breadcrumbs.length > 100) {
          const _breadcrumbs1 = self._breadcrumbs;
          self._breadcrumbs = _breadcrumbs1.slice(-100);
          const _client = self._client;
          if (_client != null) {
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
        attributes: this._attributes,
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
      obj2 = _getSpanForScope;
      return obj;
    },
  },
  {
    key: "setSDKProcessingMetadata",
    value: function setSDKProcessingMetadata(arg0) {
      const obj = merge;
      this._sdkProcessingMetadata = obj.merge(this._sdkProcessingMetadata, arg0, 2);
      return this;
    },
  },
  {
    key: "setPropagationContext",
    value: function setPropagationContext(_propagationContext) {
      this._propagationContext = _propagationContext;
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
      event_id = undefined;
      if (event_id != null) {
        event_id = event_id.event_id;
      }
      if (!event_id) {
        const obj = uuid4;
        event_id = obj.uuid4();
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
        if (_mod699.DEBUG_BUILD) {
          const debug = CONSOLE_LEVELS.debug;
          debug.warn("No client configured on scope - will not capture exception!");
        }
        return event_id;
      }
    },
  },
  {
    key: "captureMessage",
    value: function captureMessage(originalException, arg1, event_id) {
      event_id = undefined;
      if (event_id != null) {
        event_id = event_id.event_id;
      }
      if (!event_id) {
        const obj = uuid4;
        event_id = obj.uuid4();
      }
      const self = this;
      if (this._client) {
        let syntheticException;
        if (event_id != null) {
          syntheticException = event_id.syntheticException;
        }
        if (syntheticException == null) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          syntheticException = new Error(originalException);
        }
        const _client = self._client;
        const captureMessage = _client.captureMessage;
        const obj2 = { originalException, syntheticException, event_id };
        const merged = Object.assign(event_id);
        captureMessage(originalException, arg1, obj2, self);
        return event_id;
      } else {
        if (_mod699.DEBUG_BUILD) {
          const debug = CONSOLE_LEVELS.debug;
          debug.warn("No client configured on scope - will not capture message!");
        }
        return event_id;
      }
    },
  },
  {
    key: "captureEvent",
    value: function captureEvent(arg0, event_id) {
      event_id = undefined;
      if (event_id != null) {
        event_id = event_id.event_id;
      }
      if (!event_id) {
        const obj = uuid4;
        event_id = obj.uuid4();
      }
      const self = this;
      if (this._client) {
        const _client = self._client;
        const captureEvent = _client.captureEvent;
        const obj2 = { event_id };
        const merged = Object.assign(event_id);
        captureEvent(arg0, obj2, self);
      } else if (_mod699.DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS.debug;
        debug.warn("No client configured on scope - will not capture event!");
      }
      return event_id;
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
const Scope_export = _createClass(Scope, items);

export { Scope_export as Scope };
