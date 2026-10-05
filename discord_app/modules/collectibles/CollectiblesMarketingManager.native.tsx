// discord_app/modules/collectibles/CollectiblesMarketingManager.native.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import CollectiblesActionCreators from "CollectiblesActionCreators.tsx";
import CollectiblesMarketingReleaseType2 from "../../../discord_common/js/shared/shared-constants/CollectiblesMarketingReleaseType.tsx";
import DevSettingsStore from "../devtools/dev_settings/DevSettingsStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

class CollectiblesMarketingManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const value = DevSettingsStore.get("shop_include_unpublished");
      const fetchCollectiblesMarketings = CollectiblesActionCreators.fetchCollectiblesMarketings;
      CollectiblesActionCreators;
      const CollectiblesMarketingReleaseType = CollectiblesMarketingReleaseType2.CollectiblesMarketingReleaseType;
      const obj = { release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD };
      const collectiblesMarketings = fetchCollectiblesMarketings(obj);
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
}
const prototype = CollectiblesMarketingManager.prototype;
const collectiblesMarketingManager = new CollectiblesMarketingManager();
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingManager.native.tsx");

export default collectiblesMarketingManager;
