// === Module 6718: VibegrationsBuilderRouteStore ===

// Module 6718 (VibegrationsBuilderRouteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import size from "module_2" /* 2 */;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let lastProjectIdByGuildId = { lastProjectIdByGuildId: {} };
let c2 = null;
let closure_3 = lastProjectIdByGuildId;
const PersistedStore = initializeDefault.PersistedStore;
class VibegrationsBuilderRouteStore extends PersistedStore {
}
const prototype = VibegrationsBuilderRouteStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  closure_3 = tmp;
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["getRoutedProjectId"] = function getRoutedProjectId(guildId) {
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
prototype["getLastProjectId"] = function getLastProjectId(guildId) {
  let tmp = closure_3.lastProjectIdByGuildId[guildId];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
VibegrationsBuilderRouteStore.displayName = "VibegrationsBuilderRouteStore";
VibegrationsBuilderRouteStore.persistKey = "VibegrationsBuilderRoute";
const vibegrationsBuilderRouteStore = new VibegrationsBuilderRouteStore(DispatcherDefault, {
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    ({ guildId, messageId } = channelId);
    let tmp3 = null;
    if (channelId.channelId === StaticChannelRoute.VIBEGRATIONS) {
      tmp3 = null;
      if (null != guildId) {
        tmp3 = null;
        if (null != messageId) {
          const obj = { guildId, projectId: messageId };
          tmp3 = obj;
        }
      }
    }
    let guildId1;
    if (tmp3 != null) {
      guildId1 = tmp3.guildId;
    }
    let guildId2;
    if (_null != null) {
      guildId2 = _null.guildId;
    }
    let tmp6 = guildId1 !== guildId2;
    if (!tmp6) {
      let projectId;
      if (tmp3 != null) {
        projectId = tmp3.projectId;
      }
      let projectId1;
      if (_null != null) {
        projectId1 = _null.projectId;
      }
      tmp6 = projectId !== projectId1;
    }
    _null = tmp3;
    let tmp9 = tmp6;
    if (null != guildId) {
      let projectId2;
      if (tmp3 != null) {
        projectId2 = tmp3.projectId;
      }
      if (projectId2 == null) {
        projectId2 = null;
      }
      let tmp12 = closure_3.lastProjectIdByGuildId[guildId];
      if (tmp12 == null) {
        tmp12 = null;
      }
      let flag = false;
      if (tmp12 === projectId2) {
        if (!flag) {
          flag = tmp6;
        }
        tmp9 = flag;
      } else {
        const obj2 = {};
        const merged = Object.assign(closure_3.lastProjectIdByGuildId);
        if (null == projectId2) {
          delete tmp2[tmp];
        } else {
          obj2[guildId] = projectId2;
        }
        const obj3 = { lastProjectIdByGuildId: obj2 };
        closure_3 = obj3;
      }
    }
    return tmp9;
  },
  VIBEGRATIONS_PROJECT_SELECT: function handleProjectSelect(projectId) {
    let tmp4 = null == projectId.projectId;
    if (tmp4) {
      let tmp6 = closure_3.lastProjectIdByGuildId[tmp3];
      if (tmp6 == null) {
        tmp6 = null;
      }
      let flag = false;
      if (tmp6 !== null) {
        lastProjectIdByGuildId = {};
        const merged = Object.assign(closure_3.lastProjectIdByGuildId);
        delete tmp2[tmp];
        const obj2 = { lastProjectIdByGuildId };
        closure_3 = obj2;
        flag = true;
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  LOGOUT: function handleLogout() {
    c2 = null;
    closure_3 = obj;
  }
});
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsBuilderRouteStore.tsx");

export default vibegrationsBuilderRouteStore;