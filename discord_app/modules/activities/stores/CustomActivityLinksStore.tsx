// === Module 12941: CustomActivityLinksStore ===

// Module 12941 (CustomActivityLinksStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import CustomActivityLinkRecord from "CustomActivityLinkRecord" /* 12942 */;

const dependencyMap = {};
const Store = initializeDefault.Store;
class CustomActivityLinksStore extends Store {
}
CustomActivityLinksStore.prototype["getOne"] = function getOne(id, linkId) {
  if (null != dependencyMap[id]) {
    return dependencyMap[id][linkId];
  }
};
CustomActivityLinksStore.displayName = "CustomActivityLinksStore";
const customActivityLinksStore = new CustomActivityLinksStore(DispatcherDefault, {
  CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ applicationId, link } = arg0);
    if (null == dependencyMap[applicationId]) {
      const _Object = Object;
      dependencyMap[applicationId] = Object.create(null);
    }
    dependencyMap[applicationId][link.link_id] = new CustomActivityLinkRecord(link);
  },
  LOGOUT: function handleLogout() {
    closure_1 = {};
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/stores/CustomActivityLinksStore.tsx");

export default customActivityLinksStore;