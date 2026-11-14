// === Module 17029: CollectiblesMarketingManager ===

// Module 17029 (CollectiblesMarketingManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8484 */;
import CollectiblesMarketingReleaseType2 from "CollectiblesMarketingReleaseType" /* 8535 */;
import CollectiblesMarketingCacheExperiment from "CollectiblesMarketingCacheExperiment" /* 17030 */;
import DevSettingsStore from "DevSettingsStore" /* 5932 */;
import LifecycleManager from "LifecycleManager" /* 2123 */;

require = fn;
class CollectiblesMarketingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      value = DevSettingsStore.get("shop_include_unpublished");
      const collectiblesMarketingCacheTTL = CollectiblesMarketingCacheExperiment.getCollectiblesMarketingCacheTTL("CollectiblesMarketingManager");
      let result = null != collectiblesMarketingCacheTTL;
      if (result) {
        const obj2 = { ttlMs: collectiblesMarketingCacheTTL };
        result = CollectiblesActionCreators.restoreCollectiblesMarketingsFromCache(obj2);
        const tmp2Result = CollectiblesActionCreators;
      }
      if (!result) {
        let CollectiblesMarketingReleaseType = CollectiblesMarketingReleaseType2.CollectiblesMarketingReleaseType;
        const obj3 = { release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD };
        CollectiblesMarketingReleaseType = CollectiblesActionCreators.fetchCollectiblesMarketings(obj3);
        const tmp2Result2 = CollectiblesActionCreators;
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = CollectiblesMarketingManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
const collectiblesMarketingManager = new CollectiblesMarketingManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingManager.native.tsx");

export default collectiblesMarketingManager;