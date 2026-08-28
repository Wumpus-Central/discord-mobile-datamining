// discord_app/modules/collectibles/CollectiblesMarketingManager.native.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import initializeDefault from "../../lib/LifecycleManager.tsx";
import closure_3 from "../devtools/dev_settings/DevSettingsStore.tsx";

const require = arg1;
initializeDefault;
class CollectiblesMarketingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const value = closure_3.get("shop_include_unpublished");
      let obj = callback(7233);
      const CollectiblesMarketingReleaseType = callback(7283).CollectiblesMarketingReleaseType;
      obj = { release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD };
      const collectiblesMarketings = obj.fetchCollectiblesMarketings(obj);
    };
    return applyArgumentsResult;
  }
}
const prototype = CollectiblesMarketingManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
const collectiblesMarketingManager = new CollectiblesMarketingManager();
const result = require("set").fileFinishedImporting("modules/collectibles/CollectiblesMarketingManager.native.tsx");

export default collectiblesMarketingManager;