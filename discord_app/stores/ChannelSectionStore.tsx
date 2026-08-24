// === Module 4975: handlePermissionsChange ===

// Module 4975 (handlePermissionsChange)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;
import SidebarType from "SidebarType" /* 4977 */;
import closure_3 from "getHash" /* 4292 */;
import closure_4 from "handleReaction" /* 4976 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "getUncachedChannelPermissions" /* 4024 */;
import closure_8 from "handleConnectionOpen" /* 1980 */;
import closure_9 from "handleConnectionOpen" /* 4201 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import set from "set" /* 1398 */;
import { Permissions } from "sum" /* 505 */;

require = arg1;
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
      if (tmp15.type === SidebarType.SidebarType.VIEW_THREAD) {
        let tmp7 = channel;
        channel = channel.getChannel(tmp15.channelId);
        let canResult = null != channel;
        if (canResult) {
          let tmp10 = closure_7;
          let tmp11 = Permissions;
          canResult = closure_7.can(Permissions.VIEW_CHANNEL, channel);
        }
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
  let hasSearchStateResult = null != c23;
  if (hasSearchStateResult) {
    hasSearchStateResult = closure_4.hasSearchState(c23);
  }
  if (hasSearchStateResult === c22) {
    return false;
  } else {
    c22 = hasSearchStateResult;
  }
}
({ ChannelSections: unpackModuleId, ComponentActions: closure_12 } = ME);
({ isStaticChannelRoute: map1, buildGuildStaticChannelId: closure_14 } = set);
let c16 = false;
let c17 = false;
let c18 = false;
let c19 = true;
let closure_20 = {};
let closure_21 = {};
let c22 = false;
let c23 = null;
const PersistedStore = initializeDefault.PersistedStore;
class ChannelSectionStore extends PersistedStore {
}
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
  const items1 = [closure_7];
  this.syncWith(items1, handlePermissionsChange);
  this.waitFor(closure_5, closure_3, closure_6, closure_7, closure_4, closure_8, closure_9, closure_10);
};
prototype["getState"] = function getState() {
  return { isMembersOpen: c16, isSummariesOpen: c17, isProfileOpen: c19, sidebars: closure_20, guildSidebars: closure_21 };
};
prototype["getSection"] = function getSection(arg0, arg1) {
  if (c22) {
    return constants.SEARCH;
  } else {
    let tmp3 = null;
    if (null != arg0) {
      tmp3 = arg0;
      if (callback(arg0)) {
        const guildId = store2.getGuildId();
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
    if (arg1) {
      if (c19) {
        MEMBERS = constants.PROFILE;
      }
    }
    if (c17) {
      MEMBERS = constants.SUMMARIES;
    } else if (c16) {
      MEMBERS = constants.MEMBERS;
    } else {
      MEMBERS = c18 ? tmp15.CONVERSATIONS : tmp15.NONE;
    }
  }
};
prototype["getSidebarState"] = function getSidebarState(channelId) {
  let tmp = null;
  if (null != channelId) {
    tmp = channelId;
    if (callback(channelId)) {
      const guildId = store2.getGuildId();
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
      const guildId = store2.getGuildId();
      let tmp5 = null;
      if (null != guildId) {
        tmp5 = callback2(channelId, guildId);
      }
      tmp = tmp5;
    }
  }
  if (null == tmp) {
    return null;
  } else if (c22) {
    return null;
  } else {
    let tmp9 = null;
    if (null != dependencyMap[tmp]) {
      if (tmp8.type !== SidebarType.SidebarType.VIEW_THREAD) {
        if (tmp8.type !== tmp10(4977).SidebarType.VIEW_CHANNEL) {
          channelId = null;
        }
        tmp9 = channelId;
      }
      channelId = tmp8.channelId;
    }
    return tmp9;
  }
};
prototype["getCurrentSidebarMessageId"] = function getCurrentSidebarMessageId(channelId) {
  let tmp = null;
  if (null != channelId) {
    tmp = channelId;
    if (callback(channelId)) {
      const guildId = store2.getGuildId();
      let tmp5 = null;
      if (null != guildId) {
        tmp5 = callback2(channelId, guildId);
      }
      tmp = tmp5;
    }
  }
  if (null == tmp) {
    return null;
  } else if (c22) {
    return null;
  } else {
    let tmp9 = null;
    if (null != dependencyMap[tmp]) {
      if (tmp8.type !== SidebarType.SidebarType.VIEW_THREAD) {
        if (tmp8.type !== tmp10(4977).SidebarType.VIEW_CHANNEL) {
          let tmp12 = null;
        }
        tmp9 = tmp12;
      }
      const details = tmp8.details;
      let initialMessageId;
      if (details != null) {
        initialMessageId = details.initialMessageId;
      }
      tmp12 = initialMessageId;
    }
    return tmp9;
  }
};
prototype["getCurrentSearchContextId"] = function getCurrentSearchContextId() {
  return c23;
};
ChannelSectionStore.displayName = "ChannelSectionStore";
ChannelSectionStore.persistKey = "ChannelSectionStore2";
const channelSectionStore = new ChannelSectionStore(dispatcherDefault, {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function handleSetSelectedSearchContext(searchContextId) {
    searchContextId = searchContextId.searchContextId;
    let hasSearchStateResult = null != searchContextId;
    if (hasSearchStateResult) {
      hasSearchStateResult = closure_4.hasSearchState(searchContextId);
    }
    if (hasSearchStateResult !== c22) {
      c22 = hasSearchStateResult;
    }
    return false;
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function handleChannelToggleMembersSection() {
    if (c22) {
      const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    if (closure_17) {
      let flag2 = false;
      if (c22) {
        c22 = false;
        flag2 = true;
      }
      const channelId = store.getChannelId();
      let tmp13 = null;
      if (null != channelId) {
        tmp13 = channelId;
        if (callback(channelId)) {
          const guildId = store2.getGuildId();
          let tmp17 = null;
          if (null != guildId) {
            tmp17 = callback2(channelId, guildId);
          }
          tmp13 = tmp17;
        }
      }
      let tmp19 = null != tmp13;
      if (tmp19) {
        tmp19 = tmp13 in closure_20;
      }
      if (tmp19) {
        delete tmp[tmp3];
        flag2 = true;
      }
      if (!flag2) {
        let tmp22 = !tmp8;
      } else {
        tmp22 = tmp8;
      }
      closure_17 = tmp22;
    }
    if (closure_18) {
      let flag4 = false;
      if (c22) {
        c22 = false;
        flag4 = true;
      }
      const channelId1 = store.getChannelId();
      let tmp28 = null;
      if (null != channelId1) {
        tmp28 = channelId1;
        if (callback(channelId1)) {
          const guildId1 = store2.getGuildId();
          let tmp32 = null;
          if (null != guildId1) {
            tmp32 = callback2(channelId1, guildId1);
          }
          tmp28 = tmp32;
        }
      }
      let tmp34 = null != tmp28;
      if (tmp34) {
        tmp34 = tmp28 in closure_20;
      }
      if (tmp34) {
        delete tmp[tmp2];
        flag4 = true;
      }
      if (!flag4) {
        let tmp37 = !tmp23;
      } else {
        tmp37 = tmp23;
      }
      closure_18 = tmp37;
    }
    let flag5 = false;
    if (c22) {
      c22 = false;
      flag5 = true;
    }
    const channelId2 = store.getChannelId();
    let tmp40 = null;
    if (null != channelId2) {
      tmp40 = channelId2;
      if (callback(channelId2)) {
        const guildId2 = store2.getGuildId();
        let tmp44 = null;
        if (null != guildId2) {
          tmp44 = callback2(channelId2, guildId2);
        }
        tmp40 = tmp44;
      }
    }
    let tmp46 = null != tmp40;
    if (tmp46) {
      tmp46 = tmp40 in closure_20;
    }
    if (tmp46) {
      delete tmp[tmp3];
      flag5 = true;
    }
    if (!flag5) {
      let tmp49 = !tmp38;
    } else {
      tmp49 = tmp38;
    }
    closure_16 = tmp49;
  },
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function handleUserProfileSidebarToggleSection() {
    if (!closure_19) {
      const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    let flag = false;
    if (c22) {
      c22 = false;
      flag = true;
    }
    const channelId = store.getChannelId();
    let tmp9 = null;
    if (null != channelId) {
      tmp9 = channelId;
      if (callback(channelId)) {
        const guildId = store2.getGuildId();
        let tmp13 = null;
        if (null != guildId) {
          tmp13 = callback2(channelId, guildId);
        }
        tmp9 = tmp13;
      }
    }
    let tmp15 = null != tmp9;
    if (tmp15) {
      tmp15 = tmp9 in closure_20;
    }
    if (tmp15) {
      delete tmp[tmp2];
      flag = true;
    }
    if (!flag) {
      let tmp18 = !tmp7;
    } else {
      tmp18 = tmp7;
    }
    closure_19 = tmp18;
  },
  CHANNEL_TOGGLE_SUMMARIES_SECTION: function handleChannelToggleSummariesSection() {
    if (closure_16) {
      let flag2 = false;
      if (c22) {
        c22 = false;
        flag2 = true;
      }
      const channelId = store.getChannelId();
      let tmp9 = null;
      if (null != channelId) {
        tmp9 = channelId;
        if (callback(channelId)) {
          const guildId = store2.getGuildId();
          let tmp13 = null;
          if (null != guildId) {
            tmp13 = callback2(channelId, guildId);
          }
          tmp9 = tmp13;
        }
      }
      let tmp15 = null != tmp9;
      if (tmp15) {
        tmp15 = tmp9 in closure_20;
      }
      if (tmp15) {
        delete tmp[tmp3];
        flag2 = true;
      }
      if (!flag2) {
        let tmp18 = !tmp4;
      } else {
        tmp18 = tmp4;
      }
      closure_16 = tmp18;
    }
    if (closure_18) {
      let flag4 = false;
      if (c22) {
        c22 = false;
        flag4 = true;
      }
      const channelId1 = store.getChannelId();
      let tmp24 = null;
      if (null != channelId1) {
        tmp24 = channelId1;
        if (callback(channelId1)) {
          const guildId1 = store2.getGuildId();
          let tmp28 = null;
          if (null != guildId1) {
            tmp28 = callback2(channelId1, guildId1);
          }
          tmp24 = tmp28;
        }
      }
      let tmp30 = null != tmp24;
      if (tmp30) {
        tmp30 = tmp24 in closure_20;
      }
      if (tmp30) {
        delete tmp[tmp2];
        flag4 = true;
      }
      if (!flag4) {
        let tmp33 = !tmp19;
      } else {
        tmp33 = tmp19;
      }
      closure_18 = tmp33;
    }
    let flag5 = false;
    if (c22) {
      c22 = false;
      flag5 = true;
    }
    const channelId2 = store.getChannelId();
    let tmp36 = null;
    if (null != channelId2) {
      tmp36 = channelId2;
      if (callback(channelId2)) {
        const guildId2 = store2.getGuildId();
        let tmp40 = null;
        if (null != guildId2) {
          tmp40 = callback2(channelId2, guildId2);
        }
        tmp36 = tmp40;
      }
    }
    let tmp42 = null != tmp36;
    if (tmp42) {
      tmp42 = tmp36 in closure_20;
    }
    if (tmp42) {
      delete tmp[tmp3];
      flag5 = true;
    }
    if (!flag5) {
      let tmp45 = !tmp34;
    } else {
      tmp45 = tmp34;
    }
    closure_17 = tmp45;
  },
  CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function handleChannelToggleConversationsSection() {
    if (c22) {
      const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    c16 = false;
    c17 = false;
    let flag = false;
    if (c22) {
      c22 = false;
      flag = true;
    }
    const channelId = store.getChannelId();
    let tmp9 = null;
    if (null != channelId) {
      tmp9 = channelId;
      if (callback(channelId)) {
        const guildId = store2.getGuildId();
        let tmp13 = null;
        if (null != guildId) {
          tmp13 = callback2(channelId, guildId);
        }
        tmp9 = tmp13;
      }
    }
    let tmp15 = null != tmp9;
    if (tmp15) {
      tmp15 = tmp9 in closure_20;
    }
    if (tmp15) {
      delete tmp[tmp2];
      flag = true;
    }
    if (!flag) {
      let tmp18 = !tmp7;
    } else {
      tmp18 = tmp7;
    }
    closure_18 = tmp18;
  },
  CHANNEL_OPEN_CONVERSATIONS_SECTION: function handleChannelOpenConversationsSection() {
    let flag = !c18;
    if (!c18) {
      if (c22) {
        const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
      }
      c16 = false;
      c17 = false;
      c18 = true;
      flag = true;
    }
    return flag;
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(arg0) {
    ({ sidebarType, baseChannelId } = arg0);
    c22 = false;
    let tmp = null;
    ({ channelId, details } = arg0);
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (callback(baseChannelId)) {
        const guildId = store2.getGuildId();
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
      closure_20[tmp] = tmp9;
      return true;
    }
  },
  SIDEBAR_VIEW_GUILD: function handleSidebarViewGuild(arg0) {
    ({ guildId, baseChannelId } = arg0);
    c22 = false;
    let tmp = null;
    ({ sidebarType, details } = arg0);
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (callback(baseChannelId)) {
        guildId = store2.getGuildId();
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
      closure_21[guildId] = obj;
      flag = true;
    }
    return flag;
  },
  SIDEBAR_CREATE_THREAD: function handleCreateThread(parentChannelId) {
    parentChannelId = parentChannelId.parentChannelId;
    c22 = false;
    let tmp = null;
    ({ parentMessageId, location: _location } = parentChannelId);
    if (null != parentChannelId) {
      tmp = parentChannelId;
      if (callback(parentChannelId)) {
        const guildId = store2.getGuildId();
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
      closure_20[tmp] = obj;
    }
  },
  SIDEBAR_CLOSE: function handleCloseSidebar(baseChannelId) {
    baseChannelId = baseChannelId.baseChannelId;
    let tmp3 = null;
    if (null != baseChannelId) {
      tmp3 = baseChannelId;
      if (callback(baseChannelId)) {
        const guildId = store2.getGuildId();
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
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (channel.id in dependencyMap) {
      const id = channel.id;
      delete tmp3[tmp2];
      return true;
    } else {
      let flag = false;
      let flag2 = false;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
          let tmp16 = tmp11;
          let tmp17 = dependencyMap;
          let tmp18 = dependencyMap[tmp11];
          let tmp14 = null != tmp18;
          if (tmp14) {
            let tmp12 = require;
            let tmp13 = dependencyMap;
            tmp14 = tmp18.type === SidebarType.SidebarType.VIEW_CHANNEL;
          }
          if (tmp14) {
            tmp14 = tmp18.channelId === channel.id;
          }
          if (!tmp14) {
            continue;
          } else {
            let tmp15 = dependencyMap;
            delete tmp4[tmp5];
            flag = true;
            continue;
          }
          continue;
        }
      }
      return flag2;
    }
    const tmp6 = dependencyMap;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    if (tmp) {
      c16 = false;
      c17 = false;
      c18 = false;
    }
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
        obj = { type: null, channelId: null };
        obj[0] = SidebarType.SidebarType.VIEW_THREAD;
        obj[1] = channel.id;
        dependencyMap[channel.parent_id] = obj;
      }
    }
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != dependencyMap[channel.parent_id]) {
      if (tmp3.type === SidebarType.SidebarType.VIEW_THREAD) {
        if (tmp3.channelId === channel.id) {
          const parent_id = channel.parent_id;
          delete tmp2[tmp];
        }
      }
    }
    return false;
  }
});
const result = set.fileFinishedImporting("stores/ChannelSectionStore.tsx");

export default channelSectionStore;
export const MESSAGE_REQUESTS_BASE_CHANNEL_ID = "message_requests";
export const isViewChannelSidebar = function isViewChannelSidebar(type) {
  const items = [SidebarType.SidebarType.VIEW_CHANNEL, SidebarType.SidebarType.VIEW_THREAD, SidebarType.SidebarType.VIEW_MESSAGE_REQUEST, SidebarType.SidebarType.VIEW_MOD_REPORT];
  return items.includes(type.type);
};