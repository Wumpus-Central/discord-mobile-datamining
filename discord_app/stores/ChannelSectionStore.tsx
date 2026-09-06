// discord_app/stores/ChannelSectionStore.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import ComponentDispatchUtils from "../utils/ComponentDispatchUtils.tsx";
import ApexExperiment from "../modules/experiments/apex/index.tsx";
import SidebarActionTypes from "../modules/sidebar/SidebarActionTypes.tsx";
import FriendsSidebarExperimentDefault from "../modules/friends/FriendsSidebarExperiment.tsx";
import ExperimentStore from "../modules/experiments/ExperimentStore.tsx";
import SearchMessageStore from "../modules/search/SearchMessageStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildStore from "GuildStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import SelectedGuildStore from "SelectedGuildStore.tsx";
import UserStore from "UserStore.tsx";

require = fn;
function toggleSection(c17, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = false;
  if (c24) {
    c24 = false;
    flag2 = true;
  }
  const channelId = SelectedChannelStore.getChannelId();
  let tmp4 = null;
  if (null != channelId) {
    tmp4 = channelId;
    if (closure_1_14(channelId)) {
      const guildId = SelectedGuildStore.getGuildId();
      let tmp8 = null;
      if (null != guildId) {
        tmp8 = __initData(channelId, guildId);
      }
      tmp4 = tmp8;
    }
  }
  let tmp10 = null != tmp4;
  if (tmp10) {
    tmp10 = tmp4 in sidebars;
  }
  if (tmp10) {
    delete tmp[tmp2];
    flag2 = true;
  }
  let sidebarEnabled = flag;
  if (flag) {
    sidebarEnabled = closure_21;
  }
  if (sidebarEnabled) {
    sidebarEnabled = FriendsSidebarExperimentDefault.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
  }
  if (sidebarEnabled) {
    flag2 = true;
  }
  if (!flag2) {
    let tmp15 = !c17;
  } else {
    tmp15 = c17;
  }
  let tmp16 = tmp15;
  if (tmp15) {
    tmp16 = flag;
  }
  if (tmp16) {
    closure_21 = false;
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
      let tmp15 = sidebars[tmp6];
      if (tmp15.type !== SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
        continue;
      } else {
        let channel = ChannelStore.getChannel(tmp15.channelId);
        let canResult = null != channel;
        if (canResult) {
          canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
        }
        flag = tmp5;
        if (canResult) {
          continue;
        } else {
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
  let hasSearchStateResult = null != searchContextId;
  if (hasSearchStateResult) {
    hasSearchStateResult = SearchMessageStore.hasSearchState(searchContextId);
  }
  if (hasSearchStateResult === c24) {
    return false;
  } else {
    c24 = hasSearchStateResult;
  }
}
const isChannelChatInSidebar = fn(1961).isChannelChatInSidebar;
const Constants = fn(1074);
({ ChannelSections: closure_12, ComponentActions: map1 } = Constants);
const ChannelConstants = fn(1964);
({ isStaticChannelRoute: closure_14, buildGuildStaticChannelId: closure_15 } = ChannelConstants);
const Permissions = fn(1085).Permissions;
let c17 = false;
let c18 = false;
let c19 = false;
const isProfileOpen = true;
const isFriendsOpen = true;
let sidebars = {};
let guildSidebars = {};
let c24 = false;
let searchContextId = null;
const PersistedStore = initializeDefault.PersistedStore;
class ChannelSectionStore extends PersistedStore {}
const prototype = ChannelSectionStore.prototype;
prototype["initialize"] = function initialize(isMembersOpen) {
  if (null != isMembersOpen) {
    let flag = isMembersOpen.isMembersOpen;
    if (flag == null) {
      flag = false;
    }
    c17 = flag;
    let flag2 = isMembersOpen.isSummariesOpen;
    if (flag2 == null) {
      flag2 = false;
    }
    c18 = flag2;
    let flag3 = isMembersOpen.isProfileOpen;
    if (flag3 == null) {
      flag3 = true;
    }
    closure_20 = flag3;
    let flag4 = isMembersOpen.isFriendsOpen;
    if (flag4 == null) {
      flag4 = true;
    }
    closure_21 = flag4;
    sidebars = isMembersOpen.sidebars;
    if (sidebars == null) {
      sidebars = {};
    }
    guildSidebars = isMembersOpen.guildSidebars;
    if (guildSidebars == null) {
      guildSidebars = {};
    }
  }
  const items = [SearchMessageStore];
  this.syncWith(items, setIsSearchSidebarOpen);
  const items1 = [PermissionStore];
  this.syncWith(items1, handlePermissionsChange);
  this.waitFor(
    ChannelStore,
    ExperimentStore,
    ApexExperiment.ApexExperimentStore,
    GuildStore,
    PermissionStore,
    SearchMessageStore,
    SelectedChannelStore,
    SelectedGuildStore,
    UserStore,
  );
};
prototype["getState"] = function getState() {
  return { isMembersOpen, isSummariesOpen, isProfileOpen, isFriendsOpen, sidebars, guildSidebars };
};
prototype["getSection"] = function getSection(arg0, arg1) {
  if (c24) {
    return constants.SEARCH;
  } else {
    let tmp3 = null;
    if (null != arg0) {
      tmp3 = arg0;
      if (closure_1_14(arg0)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp7 = null;
        if (null != guildId) {
          tmp7 = __initData(arg0, guildId);
        }
        tmp3 = tmp7;
      }
    }
    if (null != tmp3) {
      if (null != sidebars[tmp3]) {
        let MEMBERS = constants.SIDEBAR_CHAT;
      }
      return MEMBERS;
    }
    if (closure_21) {
      if (obj.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled) {
        MEMBERS = constants.FRIENDS;
      }
      obj = FriendsSidebarExperimentDefault;
    }
    if (arg1) {
      if (closure_20) {
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
    if (closure_1_14(channelId)) {
      const guildId = SelectedGuildStore.getGuildId();
      let tmp5 = null;
      if (null != guildId) {
        tmp5 = __initData(channelId, guildId);
      }
      tmp = tmp5;
    }
  }
  let tmp7;
  if (null != tmp) {
    tmp7 = sidebars[tmp];
  }
  return tmp7;
};
prototype["getGuildSidebarState"] = function getGuildSidebarState(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = guildSidebars[arg0];
  }
  return tmp;
};
prototype["getCurrentSidebarChannelId"] = function getCurrentSidebarChannelId(channelId) {
  let tmp = null;
  if (null != channelId) {
    tmp = channelId;
    if (closure_1_14(channelId)) {
      const guildId = SelectedGuildStore.getGuildId();
      let tmp5 = null;
      if (null != guildId) {
        tmp5 = __initData(channelId, guildId);
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
    if (null != sidebars[tmp]) {
      if (tmp9.type === SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
        channelId = tmp9.channelId;
      } else {
        channelId = null;
      }
      tmp10 = channelId;
    }
    return tmp10;
  }
};
prototype["getCurrentSidebarMessageId"] = function getCurrentSidebarMessageId(channelId) {
  let tmp = null;
  if (null != channelId) {
    tmp = channelId;
    if (closure_1_14(channelId)) {
      const guildId = SelectedGuildStore.getGuildId();
      let tmp5 = null;
      if (null != guildId) {
        tmp5 = __initData(channelId, guildId);
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
    if (null != sidebars[tmp]) {
      if (tmp8.type === SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
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
    }
    return tmp9;
  }
};
prototype["getCurrentSearchContextId"] = function getCurrentSearchContextId() {
  return searchContextId;
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
      entries.filter((item) => {
        [, tmp] = item;
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
const channelSectionStore = new ChannelSectionStore(DispatcherDefault, {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function handleSetSelectedSearchContext(searchContextId) {
    searchContextId = searchContextId.searchContextId;
    let hasSearchStateResult = null != searchContextId;
    if (hasSearchStateResult) {
      hasSearchStateResult = SearchMessageStore.hasSearchState(searchContextId);
    }
    if (hasSearchStateResult !== c24) {
      c24 = hasSearchStateResult;
    }
    return false;
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function handleChannelToggleMembersSection() {
    if (c24) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    if (c18) {
      c18 = toggleSection(tmp5);
    }
    if (c19) {
      c19 = toggleSection(tmp7);
    }
    c17 = toggleSection(c17, true);
  },
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function handleUserProfileSidebarToggleSection() {
    if (!closure_20) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    closure_20 = toggleSection(closure_20, true);
  },
  CHANNEL_TOGGLE_SUMMARIES_SECTION: function handleChannelToggleSummariesSection() {
    if (c17) {
      c17 = toggleSection(tmp);
    }
    if (c19) {
      c19 = toggleSection(tmp3);
    }
    c18 = toggleSection(c18, true);
  },
  CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function handleChannelToggleConversationsSection() {
    if (c24) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    c17 = false;
    c18 = false;
    c19 = toggleSection(c19, true);
  },
  CHANNEL_OPEN_CONVERSATIONS_SECTION: function handleChannelOpenConversationsSection() {
    let flag = !c19;
    if (!c19) {
      if (c24) {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
      }
      c17 = false;
      c18 = false;
      c19 = true;
      closure_21 = false;
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
      if (closure_1_14(baseChannelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = __initData(baseChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null == tmp) {
      return false;
    } else {
      let obj = { type: sidebarType, channelId, details };
      let tmp9 = obj;
      if (sidebarType === SidebarActionTypes.SidebarType.VIEW_MOD_REPORT) {
        obj = {};
        const merged = Object.assign(obj);
        obj.baseChannelId = baseChannelId;
        tmp9 = obj;
      }
      sidebars[tmp] = tmp9;
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
      if (closure_1_14(baseChannelId)) {
        guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = __initData(baseChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    let flag = null != tmp;
    if (flag) {
      const obj = { type: sidebarType, baseChannelId: tmp, guildId, details };
      guildSidebars[guildId] = obj;
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
      if (closure_1_14(parentChannelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = __initData(parentChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null != tmp) {
      const obj = {
        type: SidebarActionTypes.SidebarType.CREATE_THREAD,
        parentChannelId,
        parentMessageId,
        location: _location,
      };
      sidebars[tmp] = obj;
    }
  },
  SIDEBAR_CLOSE: function handleCloseSidebar(baseChannelId) {
    baseChannelId = baseChannelId.baseChannelId;
    let tmp3 = null;
    if (null != baseChannelId) {
      tmp3 = baseChannelId;
      if (closure_1_14(baseChannelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp7 = null;
        if (null != guildId) {
          tmp7 = __initData(baseChannelId, guildId);
        }
        tmp3 = tmp7;
      }
    }
    if (null != tmp3) {
      delete tmp[tmp2];
    }
  },
  SIDEBAR_CLOSE_GUILD: function handleGuildCloseSidebar(arg0) {
    let flag = null != guildSidebars[arg0.guildId];
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
      if (null != SelectedChannelStore.getChannelId()) {
        delete tmp[tmp2];
      }
      if (c24) {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
        c24 = false;
      }
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    let flag = false;
    if (channel.id in sidebars) {
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
        let tmp17 = sidebars[tmp10];
        let hasItem = null != tmp17;
        if (hasItem) {
          let items = [
            SidebarActionTypes.SidebarType.VIEW_CHANNEL,
            SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST,
            SidebarActionTypes.SidebarType.VIEW_MOD_REPORT,
          ];
          hasItem = items.includes(tmp17.type);
        }
        if (hasItem) {
          hasItem = tmp17.channelId === channel.id;
        }
        if (!hasItem) {
          continue;
        } else {
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
        if (sidebars[channelId] != null) {
          type = tmp10.type;
        }
        if (type === SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
          if (tmp10.channelId === channelId) {
            return flag;
          }
        }
        const channel = ChannelStore.getChannel(channelId);
        let flag2 = flag;
        if (null != channel) {
          flag2 = flag;
          if (isChannelChatInSidebar(channel.type)) {
            let obj = { type: SidebarActionTypes.SidebarType.VIEW_CHANNEL, channelId, details: null };
            obj = { type: SidebarActionTypes.ViewChannelDetailType.CHAT, initialMessageId: messageId };
            obj.details = obj;
            sidebars[channelId] = obj;
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
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (channel.ownerId === id) {
      return false;
    } else {
      let tmp5 = null != tmp12;
      if (tmp5) {
        tmp5 = tmp12.type === SidebarActionTypes.SidebarType.CREATE_THREAD;
      }
      if (tmp5) {
        let obj = SnowflakeUtilsDefault;
        tmp5 = tmp12.parentMessageId === obj.castChannelIdAsMessageId(channel.id);
      }
      if (tmp5) {
        obj = { type: SidebarActionTypes.SidebarType.VIEW_CHANNEL, channelId: channel.id, details: null };
        obj = { type: SidebarActionTypes.ViewChannelDetailType.CHAT };
        obj.details = obj;
        sidebars[channel.parent_id] = obj;
      }
    }
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != sidebars[channel.parent_id]) {
      const items = [
        SidebarActionTypes.SidebarType.VIEW_CHANNEL,
        SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST,
        SidebarActionTypes.SidebarType.VIEW_MOD_REPORT,
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
const size = fn(2);
const result = size.fileFinishedImporting("stores/ChannelSectionStore.tsx");

export default channelSectionStore;
export const MESSAGE_REQUESTS_BASE_CHANNEL_ID = "message_requests";
export const isViewChannelSidebar = function isViewChannelSidebar(type) {
  const items = [
    SidebarActionTypes.SidebarType.VIEW_CHANNEL,
    SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST,
    SidebarActionTypes.SidebarType.VIEW_MOD_REPORT,
  ];
  return items.includes(type.type);
};
