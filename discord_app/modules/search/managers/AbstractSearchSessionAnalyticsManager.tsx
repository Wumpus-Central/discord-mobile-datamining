// === Module 12003: AbstractSearchSessionAnalyticsManager ===

// Module 12003 (AbstractSearchSessionAnalyticsManager)
import v1 from "v1" /* 1266 */;
import SearchUtils from "SearchUtils" /* 11987 */;
import size from "module_2" /* 2 */;

let set;

let result = size.fileFinishedImporting("modules/search/managers/AbstractSearchSessionAnalyticsManager.tsx");
class AbstractSearchSessionAnalyticsManager {
  constructor() {
    const merged = Object.assign({ sessions: null });
    merged[0] = new Map();
    new Map();
    return merged;
  }
  getSession(searchContext) {
    const sessions = this.sessions;
    const get = sessions.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = null;
    }
    return value;
  }
  setSession(searchContext, arg1) {
    let tmpResult;
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const sessions = this.sessions;
    let value = sessions.get(searchContextId);
    if (value == null) {
      const obj2 = { sessionId: tmpResult.v4(), searchQueryId: null };
      value = obj2;
      tmpResult = v1;
    }
    const sessions2 = this.sessions;
    const obj3 = {};
    set = sessions2.set;
    const merged = Object.assign(value);
    const merged1 = Object.assign(arg1);
    const result = set(searchContextId, obj3);
  }
  deleteSession(searchContext) {
    const sessions = this.sessions;
    const _delete = sessions.delete;
    const obj = SearchUtils;
    _delete(obj.getSearchContextId(searchContext));
  }
  getSessionId(arg0) {
    const session = this.getSession(arg0);
    let sessionId;
    if (session != null) {
      sessionId = session.sessionId;
    }
    if (sessionId == null) {
      sessionId = null;
    }
    return sessionId;
  }
  getQueryId(arg0) {
    const session = this.getSession(arg0);
    let searchQueryId;
    if (session != null) {
      searchQueryId = session.searchQueryId;
    }
    if (searchQueryId == null) {
      searchQueryId = null;
    }
    return searchQueryId;
  }
  refreshQueryId(searchContext) {
    let obj2;
    const setSession = this.setSession;
    const obj = { searchQueryId: obj2.v4() };
    obj2 = v1;
    setSession(searchContext, obj);
  }
  initialize(arg0) {
    let obj2;
    const items = [arg0, ...HermesBuiltin.copyRestArgs()];
    this._initialize.apply(items);
    const setSession = this.setSession;
    const obj = { sessionId: obj2.v4(), searchQueryId: null };
    obj2 = v1;
    setSession(arg0, obj);
  }
  terminate(arg0) {
    this._terminate(arg0);
    this.deleteSession(arg0);
  }
  transferSession(arg0, searchContext) {
    let tmp3Result;
    const self = this;
    this._transferSession(arg0, searchContext);
    let session = this.getSession(arg0);
    const sessions = this.sessions;
    set = sessions.set;
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    if (session == null) {
      const obj2 = { sessionId: tmp3Result.v4(), searchQueryId: null };
      session = obj2;
      tmp3Result = v1;
    }
    const result = set(searchContextId, session);
    self.deleteSession(arg0);
  }
}
const prototype = AbstractSearchSessionAnalyticsManager.prototype;

export default AbstractSearchSessionAnalyticsManager;