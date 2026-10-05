// discord_app/modules/search/managers/SearchTokensManager.tsx
import IntlLoaderStore from "../../../intl/IntlLoaderStore.tsx";
import SearchUtils from "../SearchUtils.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const React2 = IntlLoaderStore.subscribeToIntlLoadingSuccess;
class SearchTokensManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      USER_SETTINGS_PROTO_UPDATE: SearchUtils.refreshSearchTokens,
      POST_CONNECTION_OPEN: SearchUtils.refreshSearchTokens,
    };
    ({
      USER_SETTINGS_PROTO_UPDATE: SearchUtils.refreshSearchTokens,
      POST_CONNECTION_OPEN: SearchUtils.refreshSearchTokens,
    });
    return applyArgumentsResult;
  }
  _initialize() {
    this._unsubscribeIntlLoadingStore = closure_2(SearchUtils.refreshSearchTokens);
  }
  _terminate() {
    const _unsubscribeIntlLoadingStore = this._unsubscribeIntlLoadingStore;
    if (_unsubscribeIntlLoadingStore != null) {
      const result = _unsubscribeIntlLoadingStore();
    }
  }
}
const prototype = SearchTokensManager.prototype;
const searchTokensManager = new SearchTokensManager();
let result = size.fileFinishedImporting("modules/search/managers/SearchTokensManager.tsx");

export default searchTokensManager;
