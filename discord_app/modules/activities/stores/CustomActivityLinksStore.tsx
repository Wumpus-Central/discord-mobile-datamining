// discord_app/modules/activities/stores/CustomActivityLinksStore.tsx
import getAssetURL from "getAssetURL";
import { Store } from "initialize";

let closure_1 = {};
class CustomActivityLinksStore extends Store {
}
CustomActivityLinksStore.prototype["getOne"] = function getOne(id, linkId) {
  if (null != dependencyMap[id]) {
    return dependencyMap[id][linkId];
  }
};
CustomActivityLinksStore.displayName = "CustomActivityLinksStore";
const customActivityLinksStore = new CustomActivityLinksStore(require("dispatcher"), {
  CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let applicationId;
    let link;
    ({ applicationId, link } = arg0);
    if (null == dependencyMap[applicationId]) {
      const _Object = Object;
      dependencyMap[applicationId] = Object.create(null);
    }
    dependencyMap[applicationId][link.link_id] = new getAssetURL(link);
  },
  LOGOUT: function handleLogout() {
    let closure_1 = {};
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/activities/stores/CustomActivityLinksStore.tsx");

export default customActivityLinksStore;