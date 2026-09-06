// discord_app/stores/ChannelSectionStore.tsx
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import ComponentDispatcher from "../utils/ComponentDispatchUtils.tsx";
import ApexExperiment from "../modules/experiments/apex/index.tsx";
import SidebarType from "../modules/sidebar/SidebarActionTypes.tsx";
import apexExperimentDefault from "../modules/friends/FriendsSidebarExperiment.tsx";
import closure_3 from "../modules/experiments/ExperimentStore.tsx";
import closure_4 from "../modules/search/SearchMessageStore.tsx";
import { isChannelChatInSidebar } from "../records/ChannelRecord.tsx";
import closure_6 from "ChannelStore.tsx";
import closure_7 from "GuildStore.tsx";
import closure_8 from "PermissionStore.tsx";
import closure_9 from "SelectedChannelStore.tsx";
import closure_10 from "SelectedGuildStore.tsx";
import closure_11 from "UserStore.tsx";
import ME from "../Constants.tsx";
import set from "../modules/channel/ChannelConstants.tsx";
import { Permissions } from "../../discord_common/js/shared/Constants.tsx";

require = arg1;
function toggleSection(closure_17, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = false;
  if (c24) {
    c24 = false;
    flag2 = true;
  }
  const channelId = store2.getChannelId();
  let tmp4 = null;
  if (null != channelId) {
    tmp4 = channelId;
    if (callback(channelId)) {
      const guildId = store3.getGuildId();
      let tmp8 = null;
      if (null != guildId) {
        tmp8 = callback2(channelId, guildId);
      }
      tmp4 = tmp8;
    }
  }
  let tmp10 = null != tmp4;
  if (tmp10) {
    tmp10 = tmp4 in closure_22;
  }
  if (tmp10) {
    delete tmp[tmp2];
    flag2 = true;
  }
  let sidebarEnabled = flag;
  if (flag) {
    sidebarEnabled = c21;
  }
  if (sidebarEnabled) {
    sidebarEnabled = apexExperimentDefault.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
    const obj = apexExperimentDefault;
  }
  if (sidebarEnabled) {
    flag2 = true;
  }
  if (!flag2) {
    let tmp15 = !closure_17;
  } else {
    tmp15 = closure_17;
  }
  let tmp16 = tmp15;
  if (tmp15) {
    tmp16 = flag;
  }
  if (tmp16) {
    c21 = false;
  }
  return tmp15;
}
function handlePermissionsChange() {
  let flag = false;
  let flag2 = false;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag2 = flag;
    while (keys[tmp] !== undefined) {
      let tmp13 = tmp6;
      let tmp14 = dependencyMap;
      let tmp15 = dependencyMap[tmp6];
      let tmp16 = require;
      let tmp17 = dependencyMap;
      if (tmp15.type !== SidebarType.SidebarType.VIEW_CHANNEL) {
        continue;
      } else {
        let tmp7 = store;
        let channel = store.getChannel(tmp15.channelId);
        let canResult = null != channel;
        if (canResult) {
          let tmp10 = closure_8;
          let tmp11 = Permissions;
          canResult = closure_8.can(Permissions.VIEW_CHANNEL, channel);
        }
        flag = tmp5;
        if (canResult) {
          continue;
        } else {
          let tmp12 = dependencyMap;
          delete tmp2[tmp3];
          flag = true;
          continue;
        }
        continue;
      }
      continue;
    }
  }
  return flag2;
}
function setIsSearchSidebarOpen() {
  let hasSearchStateResult = null != c25;
  if (hasSearchStateResult) {
    hasSearchStateResult = closure_4.hasSearchState(c25);
  }
  if (hasSearchStateResult === c24) {
    return false;
  } else {
    c24 = hasSearchStateResult;
  }
}
({ ChannelSections: closure_12, ComponentActions: map1 } = ME);
({ isStaticChannelRoute: closure_14, buildGuildStaticChannelId: closure_15 } = set);
let c17 = false;
let c18 = false;
let c19 = false;
let c20 = true;
let c21 = true;
let closure_22 = {};
let closure_23 = {};
let c24 = false;
let c25 = null;
const PersistedStore = initializeDefault.PersistedStore;
class ChannelSectionStore extends PersistedStore {}
const prototype = ChannelSectionStore.prototype;
prototype["initialize"] = function initialize(isMembersOpen) {
  if (null != isMembersOpen) {
    let flag = isMembersOpen.isMembersOpen;
    if (flag == null) {
      flag = false;
    }
    let flag2 = isMembersOpen.isSummariesOpen;
    if (flag2 == null) {
      flag2 = false;
    }
    let flag3 = isMembersOpen.isProfileOpen;
    if (flag3 == null) {
      flag3 = true;
    }
    let flag4 = isMembersOpen.isFriendsOpen;
    if (flag4 == null) {
      flag4 = true;
    }
    let sidebars = isMembersOpen.sidebars;
    if (sidebars == null) {
      sidebars = {};
    }
    let guildSidebars = isMembersOpen.guildSidebars;
    if (guildSidebars == null) {
      guildSidebars = {};
    }
  }
  const items = [closure_4];
  this.syncWith(items, setIsSearchSidebarOpen);
  const items1 = [closure_8];
  this.syncWith(items1, handlePermissionsChange);
  this.waitFor(
    closure_6,
    closure_3,
    ApexExperiment.ApexExperimentStore,
    closure_7,
    closure_8,
    closure_4,
    closure_9,
    closure_10,
    closure_11,
  );
};
prototype["getState"] = function getState() {
  return {
    isMembersOpen: c17,
    isSummariesOpen: c18,
    isProfileOpen: c20,
    isFriendsOpen: c21,
    sidebars: closure_22,
    guildSidebars: closure_23,
  };
};
prototype["getSection"] = function getSection(arg0, arg1) {
  if (c24) {
    return constants.SEARCH;
  } else {
    let tmp3 = null;
    if (null != arg0) {
      tmp3 = arg0;
      if (callback(arg0)) {
        const guildId = store3.getGuildId();
        let tmp7 = null;
        if (null != guildId) {
          tmp7 = callback2(arg0, guildId);
        }
        tmp3 = tmp7;
      }
    }
    if (null != tmp3) {
      if (null != dependencyMap[tmp3]) {
        let MEMBERS = constants.SIDEBAR_CHAT;
      }
      return MEMBERS;
    }
    if (c21) {
      if (obj.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled) {
        MEMBERS = constants.FRIENDS;
      }
      obj = apexExperimentDefault;
    }
    if (arg1) {
      if (c20) {
        MEMBERS = constants.PROFILE;
      }
    }
    if (c18) {
      MEMBERS = constants.SUMMARIES;
    } else if (c17) {
      if (!arg1) {
        MEMBERS = constants.MEMBERS;
      }
    }
  }
};
prototype["getSidebarState"] = function getSidebarState(channelId) {
  let tmp = null;
  if (null != channelId) {
    tmp = channelId;
    if (callback(channelId)) {
      const guildId = store3.getGuildId();
      let tmp5 = null;
      if (null != guildId) {
        tmp5 = callback2(channelId, guildId);
      }
      tmp = tmp5;
    }
  }
  let tmp7;
  if (null != tmp) {
    tmp7 = dependencyMap[tmp];
  }
  return tmp7;
};
prototype["getGuildSidebarState"] = function getGuildSidebarState(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = dependencyMap2[arg0];
  }
  return tmp;
};
prototype["getCurrentSidebarChannelId"] = function getCurrentSidebarChannelId(channelId) {
  let tmp = null;
  if (null != channelId) {
    tmp = channelId;
    if (callback(channelId)) {
      const guildId = store3.getGuildId();
      let tmp5 = null;
      if (null != guildId) {
        tmp5 = callback2(channelId, guildId);
      }
      tmp = tmp5;
    }
  }
  if (null == tmp) {
    return null;
  } else if (c24) {
    return null;
  } else {
    let tmp10 = null;
    if (null != dependencyMap[tmp]) {
      if (tmp9.type === SidebarType.SidebarType.VIEW_CHANNEL) {
        channelId = tmp9.channelId;
      } else {
        channelId = null;
      }
      tmp10 = channelId;
      const tmp11 = require;
    }
    return tmp10;
  }
};
prototype["getCurrentSidebarMessageId"] = function getCurrentSidebarMessageId(channelId) {
  let tmp = null;
  if (null != channelId) {
    tmp = channelId;
    if (callback(channelId)) {
      const guildId = store3.getGuildId();
      let tmp5 = null;
      if (null != guildId) {
        tmp5 = callback2(channelId, guildId);
      }
      tmp = tmp5;
    }
  }
  if (null == tmp) {
    return null;
  } else if (c24) {
    return null;
  } else {
    let tmp9 = null;
    if (null != dependencyMap[tmp]) {
      if (tmp8.type === SidebarType.SidebarType.VIEW_CHANNEL) {
        const details = tmp8.details;
        let initialMessageId;
        if (details != null) {
          initialMessageId = details.initialMessageId;
        }
        let tmp12 = initialMessageId;
      } else {
        tmp12 = null;
      }
      tmp9 = tmp12;
      const tmp10 = require;
    }
    return tmp9;
  }
};
prototype["getCurrentSearchContextId"] = function getCurrentSearchContextId() {
  return c25;
};
ChannelSectionStore.displayName = "ChannelSectionStore";
ChannelSectionStore.persistKey = "ChannelSectionStore2";
let items = [
  (sidebars) => {
    const obj = {};
    const merged = Object.assign(sidebars);
    sidebars = sidebars.sidebars;
    if (sidebars == null) {
      sidebars = {};
    }
    const entries = Object.entries(sidebars);
    obj.sidebars = Object.fromEntries(
      entries.filter((arg0) => {
        [, tmp] = arg0;
        let type;
        if (tmp != null) {
          type = tmp.type;
        }
        return 1 !== type;
      }),
    );
    return obj;
  },
];
ChannelSectionStore.migrations = items;
const channelSectionStore = new ChannelSectionStore(dispatcherDefault, {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function handleSetSelectedSearchContext(searchContextId) {
    searchContextId = searchContextId.searchContextId;
    let hasSearchStateResult = null != searchContextId;
    if (hasSearchStateResult) {
      hasSearchStateResult = closure_4.hasSearchState(searchContextId);
    }
    if (hasSearchStateResult !== c24) {
      c24 = hasSearchStateResult;
    }
    return false;
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function handleChannelToggleMembersSection() {
    if (c24) {
      const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    if (closure_18) {
      closure_18 = toggleSection(tmp5);
    }
    if (closure_19) {
      closure_19 = toggleSection(tmp7);
    }
    closure_17 = toggleSection(closure_17, true);
  },
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function handleUserProfileSidebarToggleSection() {
    if (!closure_20) {
      const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    closure_20 = toggleSection(closure_20, true);
  },
  CHANNEL_TOGGLE_SUMMARIES_SECTION: function handleChannelToggleSummariesSection() {
    if (closure_17) {
      closure_17 = toggleSection(tmp);
    }
    if (closure_19) {
      closure_19 = toggleSection(tmp3);
    }
    closure_18 = toggleSection(closure_18, true);
  },
  CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function handleChannelToggleConversationsSection() {
    if (c24) {
      const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    c17 = false;
    c18 = false;
    closure_19 = toggleSection(closure_19, true);
  },
  CHANNEL_OPEN_CONVERSATIONS_SECTION: function handleChannelOpenConversationsSection() {
    let flag = !c19;
    if (!c19) {
      if (c24) {
        const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
      }
      c17 = false;
      c18 = false;
      c19 = true;
      c21 = false;
      flag = true;
    }
    return flag;
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(arg0) {
    ({ sidebarType, baseChannelId } = arg0);
    c24 = false;
    let tmp = null;
    ({ channelId, details } = arg0);
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (callback(baseChannelId)) {
        const guildId = store3.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = callback2(baseChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null == tmp) {
      return false;
    } else {
      let obj = { type: null, channelId: null, details: null };
      obj[0] = sidebarType;
      obj[1] = channelId;
      obj[2] = details;
      let tmp9 = obj;
      if (sidebarType === SidebarType.SidebarType.VIEW_MOD_REPORT) {
        obj = {};
        const merged = Object.assign(obj);
        obj.baseChannelId = baseChannelId;
        tmp9 = obj;
      }
      closure_22[tmp] = tmp9;
      return true;
    }
  },
  SIDEBAR_VIEW_GUILD: function handleSidebarViewGuild(arg0) {
    ({ guildId, baseChannelId } = arg0);
    c24 = false;
    let tmp = null;
    ({ sidebarType, details } = arg0);
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (callback(baseChannelId)) {
        guildId = store3.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = callback2(baseChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    let flag = null != tmp;
    if (flag) {
      const obj = { type: null, baseChannelId: null, guildId: null, details: null };
      obj[0] = sidebarType;
      obj[1] = tmp;
      obj[2] = guildId;
      obj[3] = details;
      closure_23[guildId] = obj;
      flag = true;
    }
    return flag;
  },
  SIDEBAR_CREATE_THREAD: function handleCreateThread(parentChannelId) {
    parentChannelId = parentChannelId.parentChannelId;
    c24 = false;
    let tmp = null;
    ({ parentMessageId, location: _location } = parentChannelId);
    if (null != parentChannelId) {
      tmp = parentChannelId;
      if (callback(parentChannelId)) {
        const guildId = store3.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = callback2(parentChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null != tmp) {
      const obj = { type: null, parentChannelId: null, parentMessageId: null, location: null };
      obj[0] = SidebarType.SidebarType.CREATE_THREAD;
      obj[1] = parentChannelId;
      obj[2] = parentMessageId;
      obj[3] = _location;
      closure_22[tmp] = obj;
    }
  },
  SIDEBAR_CLOSE: function handleCloseSidebar(baseChannelId) {
    baseChannelId = baseChannelId.baseChannelId;
    let tmp3 = null;
    if (null != baseChannelId) {
      tmp3 = baseChannelId;
      if (callback(baseChannelId)) {
        const guildId = store3.getGuildId();
        let tmp7 = null;
        if (null != guildId) {
          tmp7 = callback2(baseChannelId, guildId);
        }
        tmp3 = tmp7;
      }
    }
    if (null != tmp3) {
      delete tmp[tmp2];
    }
  },
  SIDEBAR_CLOSE_GUILD: function handleGuildCloseSidebar(arg0) {
    let flag = null != dependencyMap2[arg0.guildId];
    if (flag) {
      delete tmp[tmp2];
      flag = true;
    }
    return flag;
  },
  FRIENDS_SIDEBAR_SET_COLLAPSED: function handleSetFriendsSidebarCollapsed(collapsed) {
    collapsed = collapsed.collapsed;
    closure_21 = !collapsed;
    if (!collapsed) {
      if (null != store2.getChannelId()) {
        delete tmp[tmp2];
      }
      if (c24) {
        const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
        c24 = false;
      }
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    let flag = false;
    if (channel.id in dependencyMap) {
      const id = channel.id;
      delete tmp3[tmp2];
      flag = true;
    }
    let flag2 = flag;
    let tmp7 = flag;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp7 = flag2;
      while (keys[tmp] !== undefined) {
        let tmp15 = tmp10;
        let tmp16 = dependencyMap;
        let tmp17 = dependencyMap[tmp10];
        let hasItem = null != tmp17;
        if (hasItem) {
          let tmp11 = require;
          let tmp12 = dependencyMap;
          let items = [
            SidebarType.SidebarType.VIEW_CHANNEL,
            SidebarType.SidebarType.VIEW_MESSAGE_REQUEST,
            SidebarType.SidebarType.VIEW_MOD_REPORT,
          ];
          hasItem = items.includes(tmp17.type);
        }
        if (hasItem) {
          hasItem = tmp17.channelId === channel.id;
        }
        if (!hasItem) {
          continue;
        } else {
          let tmp14 = dependencyMap;
          delete tmp4[tmp5];
          flag2 = true;
          continue;
        }
        continue;
      }
    }
    return tmp7;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    ({ channelId, messageId } = arg0);
    let flag = false;
    if (tmp3) {
      c17 = false;
      c18 = false;
      c19 = false;
      flag = true;
    }
    if (null != channelId) {
      if (null != messageId) {
        let type;
        if (dependencyMap[channelId] != null) {
          type = tmp10.type;
        }
        if (type === tmp(7282).SidebarType.VIEW_CHANNEL) {
          if (tmp10.channelId === channelId) {
            return flag;
          }
        }
        const channel = store.getChannel(channelId);
        let flag2 = flag;
        if (null != channel) {
          flag2 = flag;
          if (isChannelChatInSidebar(channel.type)) {
            let obj = { type: null, channelId: null, details: null };
            obj[0] = tmp(7282).SidebarType.VIEW_CHANNEL;
            obj[1] = channelId;
            obj = { type: null, initialMessageId: null };
            obj[0] = tmp(7282).ViewChannelDetailType.CHAT;
            obj[1] = messageId;
            obj[2] = obj;
            dependencyMap[channelId] = obj;
            flag2 = true;
          }
        }
        return flag2;
      }
    }
    return flag;
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (channel.ownerId === id) {
      return false;
    } else {
      let tmp5 = null != tmp12;
      if (tmp5) {
        tmp5 = tmp12.type === SidebarType.SidebarType.CREATE_THREAD;
      }
      if (tmp5) {
        let obj = DISCORD_EPOCHDefault;
        tmp5 = tmp12.parentMessageId === obj.castChannelIdAsMessageId(channel.id);
      }
      if (tmp5) {
        obj = { type: null, channelId: null, details: null };
        obj[0] = SidebarType.SidebarType.VIEW_CHANNEL;
        obj[1] = channel.id;
        obj = { type: null };
        obj[0] = SidebarType.ViewChannelDetailType.CHAT;
        obj[2] = obj;
        dependencyMap[channel.parent_id] = obj;
      }
    }
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != dependencyMap[channel.parent_id]) {
      const items = [
        SidebarType.SidebarType.VIEW_CHANNEL,
        SidebarType.SidebarType.VIEW_MESSAGE_REQUEST,
        SidebarType.SidebarType.VIEW_MOD_REPORT,
      ];
      if (items.includes(tmp3.type)) {
        if (tmp3.channelId === channel.id) {
          const parent_id = channel.parent_id;
          delete tmp2[tmp];
        }
      }
    }
    return false;
  },
});
const result = set.fileFinishedImporting("stores/ChannelSectionStore.tsx");

export default channelSectionStore;
export const MESSAGE_REQUESTS_BASE_CHANNEL_ID = "message_requests";
export const isViewChannelSidebar = function isViewChannelSidebar(type) {
  const items = [
    SidebarType.SidebarType.VIEW_CHANNEL,
    SidebarType.SidebarType.VIEW_MESSAGE_REQUEST,
    SidebarType.SidebarType.VIEW_MOD_REPORT,
  ];
  return items.includes(type.type);
};
