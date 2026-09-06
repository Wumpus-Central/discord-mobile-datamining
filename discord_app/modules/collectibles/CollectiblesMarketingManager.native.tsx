// discord_app/modules/collectibles/CollectiblesMarketingManager.native.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import CollectiblesActionCreators from "CollectiblesActionCreators.tsx";
import CollectiblesMarketingReleaseType2 from "../../../discord_common/js/shared/shared-constants/CollectiblesMarketingReleaseType.tsx";
import DevSettingsStore from "../devtools/dev_settings/DevSettingsStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";

require = fn;
class CollectiblesMarketingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      value = DevSettingsStore.get("shop_include_unpublished");
      const CollectiblesMarketingReleaseType = CollectiblesMarketingReleaseType2.CollectiblesMarketingReleaseType;
      const obj = { release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD };
      const collectiblesMarketings = obj.fetchCollectiblesMarketings(obj);
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
