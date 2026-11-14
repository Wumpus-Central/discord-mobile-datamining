// === Module 7235: ConjureServerProjectRouteStore ===

// Module 7235 (ConjureServerProjectRouteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureServerProject from "conjureServerProject" /* 7236 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;

require = fn;
const StaticChannelRoute = fn(5162).StaticChannelRoute;
let map = new Map();
const Store = initializeDefault.Store;
class ConjureServerProjectRouteStore extends Store {
}
const prototype = ConjureServerProjectRouteStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ConjureProjectStore);
};
prototype["getReturnProjectId"] = function getReturnProjectId(id) {
  value = map.get(id);
  let tmp2 = null;
  if (null != value) {
    let tmp6 = null;
    if (obj.isConjureServerProjectIn(ConjureProjectStore.getProject(value), id)) {
      tmp6 = value;
    }
    tmp2 = tmp6;
    obj = conjureServerProject;
  }
  return tmp2;
};
ConjureServerProjectRouteStore.displayName = "ConjureServerProjectRouteStore";
const conjureServerProjectRouteStore = new ConjureServerProjectRouteStore(DispatcherDefault, {
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    ({ guildId, messageId } = arg0);
    if (null == guildId) {
      return tmp2;
    } else {
      if (tmp !== StaticChannelRoute.CONJURE_PROJECT) {
        let deleteResult = map.delete(guildId);
      }
      let flag = map.get(guildId) !== messageId;
      if (flag) {
        const result = map.set(guildId, messageId);
        flag = true;
      }
      deleteResult = flag;
    }
  },
  LOGOUT: function handleLogout() {
    map = new Map();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/ConjureServerProjectRouteStore.tsx");

export default conjureServerProjectRouteStore;