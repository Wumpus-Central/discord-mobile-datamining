// discord_app/modules/conjure/builder/ConjureBuilderRouteStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ChannelConstants from "../../channel/ChannelConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let _null, closure_3;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let lastProjectIdByGuildId = { lastProjectIdByGuildId: {} };
const React2 = null;
const _false = lastProjectIdByGuildId;
const PersistedStore = get_initializedDefault.PersistedStore;
class ConjureBuilderRouteStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    closure_3 = tmp;
  }
  getState() {
    return closure_3;
  }
  getRoutedProjectId(guildId) {
    guildId = undefined;
    if (_null != null) {
      guildId = _null.guildId;
    }
    let projectId = null;
    if (guildId === guildId) {
      projectId = _null.projectId;
    }
    return projectId;
  }
  getLastProjectId(id) {
    let tmp = closure_3.lastProjectIdByGuildId[id];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
}
const prototype = ConjureBuilderRouteStore.prototype;
ConjureBuilderRouteStore.displayName = "ConjureBuilderRouteStore";
ConjureBuilderRouteStore.persistKey = "VibegrationsBuilderRoute";
let obj2 = {
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    let guildId;
    let messageId;
    ({ guildId, messageId } = channelId);
    let tmp = null;
    if (channelId.channelId === StaticChannelRoute.CONJURE) {
      tmp = null;
      if (null != guildId) {
        tmp = null;
        if (null != messageId) {
          tmp = { guildId, projectId: messageId };
          const obj = { guildId, projectId: messageId };
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
    let tmp4 = guildId1 !== guildId2;
    if (!tmp4) {
      let projectId;
      if (tmp != null) {
        projectId = tmp.projectId;
      }
      let projectId1;
      if (_null != null) {
        projectId1 = _null.projectId;
      }
      tmp4 = projectId !== projectId1;
    }
    _null = tmp;
    let tmp7 = tmp4;
    if (null != guildId) {
      let projectId2;
      if (tmp != null) {
        projectId2 = tmp.projectId;
      }
      if (projectId2 == null) {
        projectId2 = null;
      }
      let tmp10 = closure_3.lastProjectIdByGuildId[guildId];
      if (tmp10 == null) {
        tmp10 = null;
      }
      let flag = false;
      if (tmp10 !== projectId2) {
        const obj3 = {};
        const merged = Object.assign(closure_3.lastProjectIdByGuildId);
        if (null == projectId2) {
          delete obj2[guildId];
        } else {
          obj3[guildId] = projectId2;
        }
        closure_3 = { lastProjectIdByGuildId: obj3 };
        flag = true;
        const obj5 = { lastProjectIdByGuildId: obj3 };
      }
      if (!flag) {
        flag = tmp4;
      }
      tmp7 = flag;
    }
    return tmp7;
  },
  CONJURE_PROJECT_SELECT: function handleProjectSelect(guildId) {
    guildId = guildId.guildId;
    let tmp = null == guildId.projectId;
    if (tmp) {
      let tmp3 = closure_3.lastProjectIdByGuildId[guildId];
      if (tmp3 == null) {
        tmp3 = null;
      }
      let flag = false;
      if (tmp3 !== null) {
        lastProjectIdByGuildId = {};
        const merged = Object.assign(closure_3.lastProjectIdByGuildId);
        delete lastProjectIdByGuildId[guildId];
        closure_3 = { lastProjectIdByGuildId };
        flag = true;
        const obj2 = { lastProjectIdByGuildId };
      }
      tmp = flag;
    }
    return tmp;
  },
  LOGOUT: function handleLogout() {
    let c2 = null;
    closure_3 = obj;
  },
};
const conjureBuilderRouteStore = new ConjureBuilderRouteStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/conjure/builder/ConjureBuilderRouteStore.tsx");

export default conjureBuilderRouteStore;
