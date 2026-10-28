// === Module 7357: ConjureBuilderRouteStore ===

// Module 7357 (ConjureBuilderRouteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelConstants from "ChannelConstants" /* 4863 */;
import conjureGuildReturnsToProjectDefault from "conjureGuildReturnsToProject" /* 7358 */;
import size from "module_2" /* 2 */;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let lastProjectIdByGuildId = { lastProjectIdByGuildId: {} };
let c4 = null;
let closure_5 = lastProjectIdByGuildId;
const PersistedStore = initializeDefault.PersistedStore;
class ConjureBuilderRouteStore extends PersistedStore {
}
const prototype = ConjureBuilderRouteStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  closure_5 = tmp;
};
prototype["getState"] = function getState() {
  return closure_5;
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
prototype["getLastProjectId"] = function getLastProjectId(id) {
  let tmp = null;
  if (conjureGuildReturnsToProjectDefault) {
    let tmp4 = closure_5.lastProjectIdByGuildId[id];
    if (tmp4 == null) {
      tmp4 = null;
    }
    tmp = tmp4;
  }
  return tmp;
};
ConjureBuilderRouteStore.displayName = "ConjureBuilderRouteStore";
ConjureBuilderRouteStore.persistKey = "ConjureBuilderRoute";
const conjureBuilderRouteStore = new ConjureBuilderRouteStore(DispatcherDefault, {
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    ({ guildId, messageId } = channelId);
    let tmp3 = null;
    if (channelId.channelId === StaticChannelRoute.CONJURE) {
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
      let tmp12 = closure_5.lastProjectIdByGuildId[guildId];
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
        const merged = Object.assign(closure_5.lastProjectIdByGuildId);
        if (null == projectId2) {
          delete tmp2[tmp];
        } else {
          obj2[guildId] = projectId2;
        }
        const obj3 = { lastProjectIdByGuildId: obj2 };
        closure_5 = obj3;
      }
    }
    return tmp9;
  },
  CONJURE_PROJECT_SELECT: function handleProjectSelect(projectId) {
    let tmp4 = null == projectId.projectId;
    if (tmp4) {
      let tmp6 = closure_5.lastProjectIdByGuildId[tmp3];
      if (tmp6 == null) {
        tmp6 = null;
      }
      let flag = false;
      if (tmp6 !== null) {
        lastProjectIdByGuildId = {};
        const merged = Object.assign(closure_5.lastProjectIdByGuildId);
        delete tmp2[tmp];
        const obj2 = { lastProjectIdByGuildId };
        closure_5 = obj2;
        flag = true;
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  LOGOUT: function handleLogout() {
    c4 = null;
    closure_5 = obj;
  }
});
const result = size.fileFinishedImporting("modules/conjure/builder/ConjureBuilderRouteStore.tsx");

export default conjureBuilderRouteStore;