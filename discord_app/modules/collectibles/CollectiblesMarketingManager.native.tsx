// === Module 14014: _initialize ===

// Module 14014 (_initialize)
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4562 */;
import closure_3 from "getUserAgnosticState" /* 4379 */;

const require = arg1;
initializeDefault;
class CollectiblesMarketingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const value = closure_3.get("shop_include_unpublished");
      let obj = callback(7147);
      const CollectiblesMarketingReleaseType = callback(7197).CollectiblesMarketingReleaseType;
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