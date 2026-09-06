// _runtime/00708_Scope.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const Scope = require;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class Scope {
  constructor() {
    tmp = c2(this, Scope);
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
    obj = { traceId: null, sampleRand: null };
    obj2 = closure_0(closure_1[2]);
    obj.traceId = obj2.generateTraceId();
    obj3 = closure_0(closure_1[3]);
    obj.sampleRand = obj3.safeMathRandom();
    this._propagationContext = obj;
    return;
  }
}
const entry = {
  key: "clone",
  value: function clone() {
    const self = this;
    let obj = Object.create(Scope.prototype);
    _classCallCheck(obj, Scope);
    obj._notifyingListeners = false;
    obj._scopeListeners = [];
    obj._eventProcessors = [];
    obj._breadcrumbs = [];
    obj._attachments = [];
    obj._user = {};
    obj._tags = {};
    obj._attributes = {};
    obj._extra = {};
    obj._contexts = {};
    obj._sdkProcessingMetadata = {};
    obj = { traceId: null, sampleRand: null };
    let obj1 = Scope(694);
    obj.traceId = obj1.generateTraceId();
    let obj2 = Scope(696);
    obj.sampleRand = obj2.safeMathRandom();
    obj._propagationContext = obj;
    const items = [...this._breadcrumbs];
    obj._breadcrumbs = items;
    obj = {};
    const merged = Object.assign(this._tags);
    obj._tags = obj;
    obj1 = {};
    const merged1 = Object.assign(this._attributes);
    obj._attributes = obj1;
    obj2 = {};
    const merged2 = Object.assign(this._extra);
    obj._extra = obj2;
    const merged3 = Object.assign(this._contexts);
    obj._contexts = {};
    if (this._contexts.flags) {
      const obj4 = { values: null };
      const items1 = [];
      HermesBuiltin.arraySpread(self._contexts.flags.values, 0);
      obj4.values = items1;
      obj._contexts.flags = obj4;
    }
    ({
      _user: tmp._user,
      _level: tmp._level,
      _session: tmp._session,
      _transactionName: tmp._transactionName,
      _fingerprint: tmp._fingerprint,
    } = self);
    const items2 = [...self._eventProcessors];
    obj._eventProcessors = items2;
    obj._attachments = [...self._attachments];
    const merged4 = Object.assign(self._sdkProcessingMetadata);
    obj._sdkProcessingMetadata = {};
    const merged5 = Object.assign(self._propagationContext);
    obj._propagationContext = {};
    ({ _client: tmp._client, _lastEventId: tmp._lastEventId } = self);
    tmp3(709);
    const tmp3Result = tmp3(709);
    tmp3Result._setSpanForScope(obj, tmp3Result._getSpanForScope(self));
    return obj;
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
        Scope(710).updateSession(self._session, obj);
        const obj2 = Scope(710);
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
      return this.setTags({ [arg0]: arg1 });
    },
  },
  {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      const merged = Object.assign(this._attributes);
      const merged1 = Object.assign(arg0);
      this._attributes = {};
      const result = this._notifyScopeListeners();
      return this;
    },
  },
  {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      return this.setAttributes({ [arg0]: arg1 });
    },
  },
  {
    key: "removeAttribute",
    value: function removeAttribute(crossorigin) {
      const self = this;
      if (crossorigin in this._attributes) {
        const _attributes = self._attributes;
        delete tmp[tmp2];
        const result = self._notifyScopeListeners();
      }
      return self;
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
    value: function update(fn) {
      const self = this;
      if (fn) {
        let obj = fn;
        if (typeof fn === "function") {
          obj = fn(self);
        }
        if (obj instanceof Scope) {
          let scopeData = obj.getScopeData();
        } else {
          let obj1 = Scope(692);
          if (obj1.isPlainObject(obj)) {
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
        obj = {};
        const merged = Object.assign(self._tags);
        const merged1 = Object.assign(tags);
        self._tags = obj;
        obj = {};
        const merged2 = Object.assign(self._attributes);
        const merged3 = Object.assign(attributes);
        self._attributes = obj;
        obj1 = {};
        const merged4 = Object.assign(self._extra);
        const merged5 = Object.assign(extra);
        self._extra = obj1;
        const obj2 = {};
        const merged6 = Object.assign(self._contexts);
        const merged7 = Object.assign(contexts);
        self._contexts = obj2;
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
        return self;
      } else {
        return self;
      }
    },
  },
  {
    key: "clear",
    value: function clear() {
      let obj = {
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
      };
      Scope(709)._setSpanForScope(obj, undefined);
      obj._attachments = [];
      obj = { traceId: null, sampleRand: null };
      const obj2 = Scope(709);
      obj.traceId = Scope(694).generateTraceId();
      const obj4 = Scope(694);
      obj.sampleRand = Scope(696).safeMathRandom();
      const result = obj.setPropagationContext(obj);
      const result1 = obj._notifyScopeListeners();
      return obj;
    },
  },
  {
    key: "addBreadcrumb",
    value: function addBreadcrumb(message, num) {
      num = 100;
      const self = this;
      if (num <= 0) {
        return self;
      } else {
        const obj = { timestamp: Scope(703).dateTimestampInSeconds() };
        const merged = Object.assign(message);
        if (message.message) {
          message = Scope(697).truncate(message.message, 2048);
          const tmp6Result = Scope(697);
        } else {
          message = message.message;
        }
        obj.message = message;
        const _breadcrumbs = self._breadcrumbs;
        _breadcrumbs.push(obj);
        if (self._breadcrumbs.length > num) {
          const _breadcrumbs1 = self._breadcrumbs;
          self._breadcrumbs = _breadcrumbs1.slice(-num);
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
        span: Scope(709)._getSpanForScope(self),
      };
      return obj;
    },
  },
  {
    key: "setSDKProcessingMetadata",
    value: function setSDKProcessingMetadata(arg0) {
      this._sdkProcessingMetadata = Scope(711).merge(this._sdkProcessingMetadata, arg0, 2);
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
        let obj = Scope(695);
        event_id = obj.uuid4();
      }
      const self = this;
      if (this._client) {
        const _Error = Error;
        const error = new Error("Sentry syntheticException");
        const _client = self._client;
        obj = { originalException, syntheticException: error };
        const merged = Object.assign(event_id);
        obj.event_id = event_id;
        _client.captureException(originalException, obj, self);
        return event_id;
      } else {
        if (Scope(688).DEBUG_BUILD) {
          const debug = Scope(689).debug;
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
        let obj = Scope(695);
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
          syntheticException = new Error(originalException);
        }
        const _client = self._client;
        obj = { originalException, syntheticException };
        const merged = Object.assign(event_id);
        obj.event_id = event_id;
        _client.captureMessage(originalException, arg1, obj, self);
        return event_id;
      } else {
        if (Scope(688).DEBUG_BUILD) {
          const debug = Scope(689).debug;
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
        let obj = Scope(695);
        event_id = obj.uuid4();
      }
      const self = this;
      if (this._client) {
        const _client = self._client;
        obj = {};
        const merged = Object.assign(event_id);
        obj.event_id = event_id;
        _client.captureEvent(arg0, obj, self);
      } else {
        if (Scope(688).DEBUG_BUILD) {
          const debug = tmp4(689).debug;
          debug.warn("No client configured on scope - will not capture event!");
        }
        tmp4 = Scope;
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

export const Scope = _createClass(Scope, items);
