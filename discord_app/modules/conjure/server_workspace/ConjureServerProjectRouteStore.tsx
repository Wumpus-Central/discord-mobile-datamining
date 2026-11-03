// discord_app/modules/conjure/server_workspace/ConjureServerProjectRouteStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import conjureServerProject from "conjureServerProject.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
const StaticChannelRoute = fn(4997).StaticChannelRoute;
let map = new Map();
const Store = initializeDefault.Store;
class ConjureServerProjectRouteStore extends Store {}
const prototype = ConjureServerProjectRouteStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ConjureProjectStore);
};
prototype["getReturnProjectId"] = function getReturnProjectId(id) {
  value = map.get(id);
  let tmp2 = null;
  if (null != value) {
    let tmp6 = null;
    if (obj.conjureServerProjectGuildId(ConjureProjectStore.getProject(value)) === id) {
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/ConjureServerProjectRouteStore.tsx");

export default conjureServerProjectRouteStore;
