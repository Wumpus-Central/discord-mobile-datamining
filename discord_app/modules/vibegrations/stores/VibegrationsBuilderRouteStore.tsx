// === Module 16215: VibegrationsBuilderRouteStore ===

// Module 16215 (VibegrationsBuilderRouteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ChannelConstants from "ChannelConstants" /* 2051 */;
import size from "module_2" /* 2 */;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let c1 = null;
const Store = initializeDefault.Store;
class VibegrationsBuilderRouteStore extends Store {
}
VibegrationsBuilderRouteStore.prototype["getRoutedProjectId"] = function getRoutedProjectId(guildId) {
  guildId = undefined;
  if (_null != null) {
    guildId = _null.guildId;
  }
  let projectId = null;
  if (guildId === guildId) {
    projectId = _null.projectId;
  }
  return projectId;
};
const vibegrationsBuilderRouteStore = new VibegrationsBuilderRouteStore(DispatcherDefault, {
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    ({ guildId, messageId } = channelId);
    let tmp = null;
    if (channelId.channelId === StaticChannelRoute.VIBEGRATIONS) {
      tmp = null;
      if (null != guildId) {
        tmp = null;
        if (null != messageId) {
          const obj = { guildId, projectId: messageId };
          tmp = obj;
        }
      }
    }
    let guildId1;
    if (tmp != null) {
      guildId1 = tmp.guildId;
    }
    let guildId2;
    if (_null != null) {
      guildId2 = _null.guildId;
    }
    if (guildId1 === guildId2) {
      let projectId;
      if (tmp != null) {
        projectId = tmp.projectId;
      }
      let projectId1;
      if (_null != null) {
        projectId1 = _null.projectId;
      }
      if (projectId === projectId1) {
        return false;
      }
    }
    _null = tmp;
  },
  LOGOUT: function handleLogout() {
    if (null == c1) {
      return false;
    } else {
      c1 = null;
    }
  }
});
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsBuilderRouteStore.tsx");

export default vibegrationsBuilderRouteStore;