// === Module 17065: _initialize ===

// Module 17065 (_initialize)
import set from "set" /* 2 */;
import _setAppLocale from "_setAppLocale" /* 1997 */;
import initializeDefault from "initialize" /* 5486 */;
import SearchTokenTypes from "SearchTokenTypes" /* 11907 */;

let closure_2 = _setAppLocale.subscribeToIntlLoadingSuccess;
initializeDefault;
class SearchTokensManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { USER_SETTINGS_PROTO_UPDATE: require("SearchTokenTypes").refreshSearchTokens, POST_CONNECTION_OPEN: require("SearchTokenTypes").refreshSearchTokens };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = SearchTokensManager.prototype;
prototype["_initialize"] = function _initialize() {
  this._unsubscribeIntlLoadingStore = callback(SearchTokenTypes.refreshSearchTokens);
};
prototype["_terminate"] = function _terminate() {
  const _unsubscribeIntlLoadingStore = this._unsubscribeIntlLoadingStore;
  if (_unsubscribeIntlLoadingStore != null) {
    const result = _unsubscribeIntlLoadingStore();
  }
};
const searchTokensManager = new SearchTokensManager();
let result = set.fileFinishedImporting("modules/search/managers/SearchTokensManager.tsx");

export default searchTokensManager;