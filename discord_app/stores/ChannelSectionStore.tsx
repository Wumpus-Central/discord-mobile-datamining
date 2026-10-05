// discord_app/stores/ChannelSectionStore.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants2 from "../../discord_common/js/shared/Constants.tsx";
import ComponentDispatchUtils from "../utils/ComponentDispatchUtils.tsx";
import ApexExperiment from "../modules/experiments/apex/index.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import shared_PlatformUtils from "../../discord_common/js/shared/lib/PlatformUtils.tsx";
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
import Constants from "../Constants.tsx";
import ChannelConstants from "../modules/channel/ChannelConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_12;
let closure_14;
let closure_15;
let map1;
function toggleSection(c17, arg1) {
  let tmp12;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = false;
  if (c25) {
    c25 = false;
    flag2 = true;
  }
  const channelId = SelectedChannelStore.getChannelId();
  let tmp2 = null;
  if (null != channelId) {
    tmp2 = channelId;
    if (authStore2(channelId)) {
      const guildId = SelectedGuildStore.getGuildId();
      let tmp6 = null;
      if (null != guildId) {
        tmp6 = closure_15(channelId, guildId);
      }
      tmp2 = tmp6;
    }
  }
  const tmp8 = null != tmp2 && tmp2 in sidebars;
  if (tmp8) {
    delete sidebars[tmp2];
    flag2 = true;
  }
  let sidebarEnabled = flag && closure_21;
  if (sidebarEnabled) {
    const obj = FriendsSidebarExperimentDefault;
    sidebarEnabled = obj.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
  }
  if (sidebarEnabled) {
    flag2 = true;
  }
  if (!flag2) {
    tmp12 = !c17;
  } else {
    tmp12 = c17;
  }
  const tmp13 = tmp12 && flag;
  if (tmp13) {
    closure_21 = false;
  }
  return tmp12;
}
function handlePermissionsChange() {
  let flag = false;
  let flag2 = false;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag2 = flag;
    while (keys[tmp] !== undefined) {
      let tmp12 = sidebars[tmp4];
      let tmp10 = tmp4;
      if (tmp12.type !== SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
        continue;
      } else {
        let channel = ChannelStore.getChannel(tmp12.channelId);
        let canResult = null != channel && PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
        flag = tmp3;
        if (canResult) {
          continue;
        } else {
          delete sidebars[tmp10];
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
const isChannelChatInSidebar = ChannelRecord.isChannelChatInSidebar;
({ ChannelSections: closure_12, ComponentActions: map1 } = Constants);
({ isStaticChannelRoute: closure_14, buildGuildStaticChannelId: closure_15 } = ChannelConstants);
const Permissions = Constants2.Permissions;
let c17 = false;
const authStore4 = false;
let c19 = false;
const isProfileOpen = true;
const isFriendsOpen = true;
let available = false;
let sidebars = {};
let guildSidebars = {};
let c25 = false;
let searchContextId = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelSectionStore extends PersistedStore {
  initialize(isMembersOpen) {
    if (null != isMembersOpen) {
      let flag = isMembersOpen.isMembersOpen;
      if (flag == null) {
        flag = false;
      }
      let c17 = flag;
      let flag2 = isMembersOpen.isSummariesOpen;
      if (flag2 == null) {
        flag2 = false;
      }
      let c18 = flag2;
      let flag3 = isMembersOpen.isProfileOpen;
      if (flag3 == null) {
        flag3 = true;
      }
      let closure_20 = flag3;
      let flag4 = isMembersOpen.isFriendsOpen;
      if (flag4 == null) {
        flag4 = true;
      }
      let closure_21 = flag4;
      sidebars = isMembersOpen.sidebars;
      if (sidebars == null) {
        sidebars = {};
      }
      guildSidebars = isMembersOpen.guildSidebars;
      if (guildSidebars == null) {
        guildSidebars = {};
      }
    }
    const items = [PermissionStore];
    this.syncWith(items, handlePermissionsChange);
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
  }
  getState() {
    return { isMembersOpen, isSummariesOpen, isProfileOpen, isFriendsOpen, sidebars, guildSidebars };
  }
  getSection(arg0, arg1) {
    if (c25) {
      return constants.SEARCH;
    } else {
      let MEMBERS;
      let tmp4 = null;
      if (null != arg0) {
        tmp4 = arg0;
        if (authStore2(arg0)) {
          const guildId = SelectedGuildStore.getGuildId();
          let tmp8 = null;
          if (null != guildId) {
            tmp8 = closure_15(arg0, guildId);
          }
          tmp4 = tmp8;
        }
      }
      if (null != tmp4) {
        if (null != sidebars[tmp4]) {
          MEMBERS = constants.SIDEBAR_CHAT;
        }
        return MEMBERS;
      }
      if (isFriendsOpen) {
        const obj = FriendsSidebarExperimentDefault;
        if (obj.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled) {
          MEMBERS = constants.FRIENDS;
        }
      }
      const tmp14 = arg1;
      if (tmp14) {
        if (isProfileOpen) {
          MEMBERS = constants.PROFILE;
        }
      }
      if (c18) {
        MEMBERS = constants.SUMMARIES;
      } else {
        if (c17) {
          if (!arg1) {
            MEMBERS = constants.MEMBERS;
          }
        }
        MEMBERS = c19 ? constants.CONVERSATIONS : constants.NONE;
      }
    }
  }
  getSidebarState(channelId) {
    let tmp = null;
    if (null != channelId) {
      tmp = channelId;
      if (authStore2(channelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = closure_15(channelId, guildId);
        }
        tmp = tmp5;
      }
    }
    let tmp7;
    if (null != tmp) {
      tmp7 = sidebars[tmp];
    }
    return tmp7;
  }
  getGuildSidebarState(arg0) {
    let tmp;
    if (null != arg0) {
      tmp = guildSidebars[arg0];
    }
    return tmp;
  }
  isFriendsSidebarAvailable() {
    return available;
  }
  getCurrentSidebarChannelId(channelId) {
    let tmp = null;
    if (null != channelId) {
      tmp = channelId;
      if (authStore2(channelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = closure_15(channelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null == tmp) {
      return null;
    } else if (c25) {
      return null;
    } else {
      let tmp10 = null;
      if (null != sidebars[tmp]) {
        if (sidebars[tmp].type === SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
          channelId = tmp9.channelId;
        } else {
          channelId = null;
        }
        tmp10 = channelId;
      }
      return tmp10;
    }
  }
  getCurrentSidebarMessageId(channelId) {
    let tmp = null;
    if (null != channelId) {
      tmp = channelId;
      if (authStore2(channelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = closure_15(channelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null == tmp) {
      return null;
    } else if (c25) {
      return null;
    } else {
      let tmp9 = null;
      if (null != sidebars[tmp]) {
        let tmp12;
        if (sidebars[tmp].type === SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
          const details = tmp8.details;
          let initialMessageId;
          if (details != null) {
            initialMessageId = details.initialMessageId;
          }
          tmp12 = initialMessageId;
        } else {
          tmp12 = null;
        }
        tmp9 = tmp12;
      }
      return tmp9;
    }
  }
  getCurrentSearchContextId() {
    return searchContextId;
  }
}
const prototype = ChannelSectionStore.prototype;
ChannelSectionStore.displayName = "ChannelSectionStore";
ChannelSectionStore.persistKey = "ChannelSectionStore2";
let items = [
  (sidebars) => {
    let entries1;
    let fromEntries;
    const obj = {
      sidebars: fromEntries(
        entries1.filter((item) => {
          let tmp;
          [, tmp] = item;
          let type;
          if (tmp != null) {
            type = tmp.type;
          }
          return 1 !== type;
        }),
      ),
    };
    const merged = Object.assign(sidebars);
    sidebars = sidebars.sidebars;
    const _Object = Object;
    fromEntries = Object.fromEntries;
    const _Object2 = Object;
    if (sidebars == null) {
      sidebars = {};
    }
    entries1 = entries(sidebars);
    return obj;
  },
];
ChannelSectionStore.migrations = items;
let obj = {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function handleSetSelectedSearchContext(searchContextId) {
    searchContextId = searchContextId.searchContextId;
    const hasSearchStateResult = null != searchContextId && SearchMessageStore.hasSearchState(searchContextId);
    let flag = hasSearchStateResult !== c25;
    if (flag) {
      c25 = hasSearchStateResult;
      flag = true;
    }
    return flag;
  },
  SEARCH_MESSAGES_START: function handleSearchMessagesStart(ids) {
    ids = ids.ids;
    let tmp = null != searchContextId;
    if (tmp) {
      let hasItem = ids.includes(searchContextId);
      if (hasItem) {
        let flag = !c25;
        if (flag) {
          c25 = true;
          flag = true;
        }
        hasItem = flag;
      }
      tmp = hasItem;
    }
    return tmp;
  },
  SEARCH_MESSAGES_CLEAR: function handleSearchMessagesClear(id) {
    let tmp = id.id === searchContextId;
    if (tmp) {
      let flag = c25;
      if (flag) {
        c25 = false;
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    let flag = c25;
    if (flag) {
      c25 = false;
      flag = true;
    }
    return flag;
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function handleChannelToggleMembersSection() {
    if (c25) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(map1.SEARCH_RESULTS_CLOSE);
    }
    if (c18) {
      c18 = toggleSection(tmp6);
    }
    if (c19) {
      c19 = toggleSection(tmp8);
    }
    c17 = toggleSection(c17, true);
  },
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function handleUserProfileSidebarToggleSection() {
    const tmp = closure_20;
    if (!tmp) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(map1.SEARCH_RESULTS_CLOSE);
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
    if (c25) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(map1.SEARCH_RESULTS_CLOSE);
    }
    let c17 = false;
    let c18 = false;
    c19 = toggleSection(c19, true);
  },
  CHANNEL_OPEN_CONVERSATIONS_SECTION: function handleChannelOpenConversationsSection() {
    let flag = !c19;
    if (flag) {
      if (c25) {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.dispatch(map1.SEARCH_RESULTS_CLOSE);
      }
      let c17 = false;
      let c18 = false;
      c19 = true;
      let closure_21 = false;
      flag = true;
    }
    return flag;
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(arg0) {
    let baseChannelId;
    let channelId;
    let details;
    let sidebarType;
    ({ sidebarType, baseChannelId } = arg0);
    c25 = false;
    let tmp = null;
    ({ channelId, details } = arg0);
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (authStore2(baseChannelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = closure_15(baseChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null == tmp) {
      return false;
    } else {
      const obj = { type: sidebarType, channelId, details };
      let tmp9 = obj;
      if (sidebarType === SidebarActionTypes.SidebarType.VIEW_MOD_REPORT) {
        const obj2 = { baseChannelId };
        const merged = Object.assign(obj);
        tmp9 = obj2;
      }
      sidebars[tmp] = tmp9;
      return true;
    }
  },
  SIDEBAR_VIEW_GUILD: function handleSidebarViewGuild(arg0) {
    let baseChannelId;
    let details;
    let guildId;
    let sidebarType;
    ({ guildId, baseChannelId } = arg0);
    c25 = false;
    let tmp = null;
    ({ sidebarType, details } = arg0);
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (authStore2(baseChannelId)) {
        const guildId1 = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId1) {
          tmp5 = closure_15(baseChannelId, guildId1);
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
    let _location;
    let parentMessageId;
    parentChannelId = parentChannelId.parentChannelId;
    c25 = false;
    let tmp = null;
    ({ parentMessageId, location: _location } = parentChannelId);
    if (null != parentChannelId) {
      tmp = parentChannelId;
      if (authStore2(parentChannelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = closure_15(parentChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null != tmp) {
      sidebars[tmp] = {
        type: SidebarActionTypes.SidebarType.CREATE_THREAD,
        parentChannelId,
        parentMessageId,
        location: _location,
      };
      const obj = {
        type: SidebarActionTypes.SidebarType.CREATE_THREAD,
        parentChannelId,
        parentMessageId,
        location: _location,
      };
    }
  },
  SIDEBAR_CLOSE: function handleCloseSidebar(baseChannelId) {
    baseChannelId = baseChannelId.baseChannelId;
    let tmp = null;
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (authStore2(baseChannelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = closure_15(baseChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null != tmp) {
      delete sidebars[tmp];
      const hasSearchStateResult = null != searchContextId && SearchMessageStore.hasSearchState(searchContextId);
      if (hasSearchStateResult !== c25) {
        c25 = hasSearchStateResult;
      }
    }
  },
  SIDEBAR_CLOSE_GUILD: function handleGuildCloseSidebar(guildId) {
    guildId = guildId.guildId;
    let flag = null != guildSidebars[guildId];
    if (flag) {
      delete guildSidebars[guildId];
      const hasSearchStateResult = null != searchContextId && SearchMessageStore.hasSearchState(searchContextId);
      flag = true;
      if (hasSearchStateResult !== c25) {
        c25 = hasSearchStateResult;
        flag = true;
      }
    }
    return flag;
  },
  FRIENDS_SIDEBAR_SET_COLLAPSED: function handleSetFriendsSidebarCollapsed(collapsed) {
    collapsed = collapsed.collapsed;
    let closure_21 = !collapsed;
    if (closure_21) {
      const channelId = SelectedChannelStore.getChannelId();
      if (null != channelId) {
        delete sidebars[tmp2];
      }
      const tmp4 = c25;
      if (tmp4) {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.dispatch(map1.SEARCH_RESULTS_CLOSE);
        c25 = false;
      }
    }
  },
  FRIENDS_SIDEBAR_SET_AVAILABLE: function handleSetFriendsSidebarAvailable(available) {
    available = available.available;
    let flag = available !== available;
    if (flag) {
      flag = true;
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    let flag = false;
    if (channel.id in sidebars) {
      delete sidebars[channel.id];
      flag = true;
    }
    let flag2 = flag;
    let tmp2 = flag;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = flag2;
      while (keys[tmp] !== undefined) {
        let tmp11 = sidebars[tmp5];
        let hasItem = null != tmp11;
        let tmp9 = tmp5;
        if (hasItem) {
          let items = [
            SidebarActionTypes.SidebarType.VIEW_CHANNEL,
            SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST,
            SidebarActionTypes.SidebarType.VIEW_MOD_REPORT,
          ];
          hasItem = items.includes(tmp11.type);
        }
        if (hasItem) {
          hasItem = tmp11.channelId === channel.id;
        }
        if (!hasItem) {
          continue;
        } else {
          delete sidebars[tmp9];
          flag2 = true;
          continue;
        }
        continue;
      }
    }
    return tmp2;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let messageId;
    let obj2;
    ({ channelId, messageId } = arg0);
    let flag = false;
    const tmp3 = shared_PlatformUtils.isMobile && c17;
    if (tmp3) {
      c17 = false;
      let c18 = false;
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
          if (sidebars[channelId].channelId === channelId) {
            return flag;
          }
        }
        const channel = ChannelStore.getChannel(channelId);
        let flag2 = flag;
        if (null != channel) {
          flag2 = flag;
          if (isChannelChatInSidebar(channel.type)) {
            const obj = { type: SidebarActionTypes.SidebarType.VIEW_CHANNEL, channelId, details: obj2 };
            sidebars[channelId] = obj;
            flag2 = true;
            obj2 = { type: SidebarActionTypes.ViewChannelDetailType.CHAT, initialMessageId: messageId };
          }
        }
        return flag2;
      }
    }
    return flag;
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    let obj3;
    channel = channel.channel;
    const ownerId = channel.ownerId;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (ownerId === id) {
      return false;
    } else {
      let tmp5 = null != tmp12 && tmp12.type === SidebarActionTypes.SidebarType.CREATE_THREAD;
      if (tmp5) {
        const parentMessageId = tmp12.parentMessageId;
        const obj = SnowflakeUtilsDefault;
        tmp5 = parentMessageId === obj.castChannelIdAsMessageId(channel.id);
      }
      if (tmp5) {
        const parent_id = channel.parent_id;
        const obj2 = { type: SidebarActionTypes.SidebarType.VIEW_CHANNEL, channelId: channel.id, details: obj3 };
        sidebars[parent_id] = obj2;
        obj3 = { type: SidebarActionTypes.ViewChannelDetailType.CHAT };
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
      if (items.includes(sidebars[channel.parent_id].type)) {
        if (sidebars[channel.parent_id].channelId === channel.id) {
          delete sidebars[channel.parent_id];
        }
      }
    }
    return false;
  },
};
const channelSectionStore = new ChannelSectionStore(DispatcherDefault, obj);
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
