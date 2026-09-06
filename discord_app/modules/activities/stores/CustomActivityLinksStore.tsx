// discord_app/modules/activities/stores/CustomActivityLinksStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import CustomActivityLinkRecord from "../records/CustomActivityLinkRecord.tsx";

const dependencyMap = {};
const Store = initializeDefault.Store;
class CustomActivityLinksStore extends Store {}
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
    const tmp3 = new CustomActivityLinkRecord(link);
  },
  LOGOUT: function handleLogout() {
    closure_1 = {};
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/stores/CustomActivityLinksStore.tsx");

export default customActivityLinksStore;
