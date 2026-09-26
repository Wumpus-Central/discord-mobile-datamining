// === Module 14108: CollectiblesMarketingManager ===

// Module 14108 (CollectiblesMarketingManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import CollectiblesMarketingReleaseType2 from "CollectiblesMarketingReleaseType" /* 7010 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import LifecycleManager from "LifecycleManager" /* 1983 */;

require = fn;
class CollectiblesMarketingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      value = DevSettingsStore.get("shop_include_unpublished");
      const CollectiblesMarketingReleaseType = CollectiblesMarketingReleaseType2.CollectiblesMarketingReleaseType;
      const collectiblesMarketings = CollectiblesActionCreators.fetchCollectiblesMarketings({ release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD });
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
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingManager.native.tsx");

export default collectiblesMarketingManager;