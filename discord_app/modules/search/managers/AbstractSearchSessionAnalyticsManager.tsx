// === Module 10130: getSession ===

// Module 10130 (getSession)
let result = require("set").fileFinishedImporting("modules/search/managers/AbstractSearchSessionAnalyticsManager.tsx");
class AbstractSearchSessionAnalyticsManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[0] = map;
    return obj;
  }
}
const prototype = AbstractSearchSessionAnalyticsManager.prototype;
prototype["getSession"] = function getSession(searchContext) {
  const sessions = this.sessions;
  let value = sessions.get(require(10116) /* SearchTokenTypes */.getSearchContextId(searchContext));
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["setSession"] = function setSession(searchContext) {
  let obj = require(10116) /* SearchTokenTypes */;
  const searchContextId = obj.getSearchContextId(searchContext);
  const sessions = this.sessions;
  let value = sessions.get(searchContextId);
  if (value == null) {
    obj = { sessionId: null, searchQueryId: null };
    obj[0] = require(514) /* v1 */.v4();
    value = obj;
    const tmpResult = require(514) /* v1 */;
  }
  const sessions2 = this.sessions;
  obj = {};
  const merged = Object.assign(value);
  const merged1 = Object.assign(arg1);
  const result = sessions2.set(searchContextId, obj);
};
prototype["deleteSession"] = function deleteSession(searchContext) {
  const sessions = this.sessions;
  sessions.delete(require(10116) /* SearchTokenTypes */.getSearchContextId(searchContext));
};
prototype["getSessionId"] = function getSessionId(arg0) {
  const session = this.getSession(arg0);
  let sessionId;
  if (session != null) {
    sessionId = session.sessionId;
  }
  if (sessionId == null) {
    sessionId = null;
  }
  return sessionId;
};
prototype["getQueryId"] = function getQueryId(arg0) {
  const session = this.getSession(arg0);
  let searchQueryId;
  if (session != null) {
    searchQueryId = session.searchQueryId;
  }
  if (searchQueryId == null) {
    searchQueryId = null;
  }
  return searchQueryId;
};
prototype["refreshQueryId"] = function refreshQueryId(searchContext) {
  const obj = { searchQueryId: null };
  obj[0] = require(514) /* v1 */.v4();
  this.setSession(searchContext, obj);
};
prototype["initialize"] = function initialize(arg0) {
  const items = [arg0, ...HermesBuiltin.copyRestArgs()];
  this._initialize.apply(items);
  const obj = { sessionId: null, searchQueryId: null };
  obj[0] = require(514) /* v1 */.v4();
  this.setSession(arg0, obj);
};
prototype["terminate"] = function terminate(arg0) {
  this._terminate(arg0);
  this.deleteSession(arg0);
};
prototype["transferSession"] = function transferSession(arg0, searchContext) {
  const self = this;
  this._transferSession(arg0, searchContext);
  let session = this.getSession(arg0);
  const sessions = this.sessions;
  let obj = require(10116) /* SearchTokenTypes */;
  const searchContextId = obj.getSearchContextId(searchContext);
  if (session == null) {
    obj = { sessionId: null, searchQueryId: null };
    obj[0] = require(514) /* v1 */.v4();
    session = obj;
    const tmp3Result = require(514) /* v1 */;
  }
  const result = sessions.set(searchContextId, session);
  self.deleteSession(arg0);
};

export default AbstractSearchSessionAnalyticsManager;