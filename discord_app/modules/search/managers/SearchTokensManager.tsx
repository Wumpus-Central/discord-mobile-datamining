// discord_app/modules/search/managers/SearchTokensManager.tsx
import IntlLoaderStore from "../../../intl/IntlLoaderStore.tsx";
import SearchUtils from "../SearchUtils.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = IntlLoaderStore.subscribeToIntlLoadingSuccess;
class SearchTokensManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = {
      USER_SETTINGS_PROTO_UPDATE: closure_0(closure_1[2]).refreshSearchTokens,
      POST_CONNECTION_OPEN: closure_0(closure_1[2]).refreshSearchTokens,
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = SearchTokensManager.prototype;
prototype["_initialize"] = function _initialize() {
  this._unsubscribeIntlLoadingStore = closure_2(SearchUtils.refreshSearchTokens);
};
prototype["_terminate"] = function _terminate() {
  const _unsubscribeIntlLoadingStore = this._unsubscribeIntlLoadingStore;
  if (_unsubscribeIntlLoadingStore != null) {
    const result = _unsubscribeIntlLoadingStore();
  }
};
const searchTokensManager = new SearchTokensManager();
let result = size.fileFinishedImporting("modules/search/managers/SearchTokensManager.tsx");

export default searchTokensManager;
