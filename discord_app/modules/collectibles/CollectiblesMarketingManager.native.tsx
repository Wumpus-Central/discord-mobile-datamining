// === Module 14423: _initialize ===

// Module 14423 (_initialize)
import dispatcherDefault from "dispatcher" /* 706 */;
import initializeDefault from "initialize" /* 4662 */;
import closure_3 from "getUserAgnosticState" /* 4477 */;

const require = arg1;
initializeDefault;
class CollectiblesMarketingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const value = closure_3.get("shop_include_unpublished");
      let obj = callback(7295);
      const CollectiblesMarketingReleaseType = callback(7345).CollectiblesMarketingReleaseType;
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