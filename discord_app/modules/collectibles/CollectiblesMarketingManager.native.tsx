// === Module 15811: CollectiblesMarketingManager ===

// Module 15811 (CollectiblesMarketingManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7649 */;
import CollectiblesMarketingReleaseType2 from "CollectiblesMarketingReleaseType" /* 7694 */;
import CollectiblesMarketingCacheExperiment from "CollectiblesMarketingCacheExperiment" /* 15812 */;
import DevSettingsStore from "DevSettingsStore" /* 5237 */;
import LifecycleManager from "LifecycleManager" /* 2004 */;

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