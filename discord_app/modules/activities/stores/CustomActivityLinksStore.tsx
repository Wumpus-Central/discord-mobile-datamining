// === Module 12412: getOne ===

// Module 12412 (getOne)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getAssetURL from "getAssetURL" /* 12413 */;

let closure_1 = {};
const Store = initializeDefault.Store;
class CustomActivityLinksStore extends Store {
}
CustomActivityLinksStore.prototype["getOne"] = function getOne(id, linkId) {
  if (null != dependencyMap[id]) {
    return dependencyMap[id][linkId];
  }
};
CustomActivityLinksStore.displayName = "CustomActivityLinksStore";
const customActivityLinksStore = new CustomActivityLinksStore(dispatcherDefault, {
  CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ applicationId, link } = arg0);
    if (null == dependencyMap[applicationId]) {
      const _Object = Object;
      dependencyMap[applicationId] = Object.create(null);
    }
    dependencyMap[applicationId][link.link_id] = new closure_0(link);
    const tmp3 = new closure_0(link);
  },
  LOGOUT: function handleLogout() {
    closure_1 = {};
  }
});
const result = require("obj132").fileFinishedImporting("modules/activities/stores/CustomActivityLinksStore.tsx");

export default customActivityLinksStore;