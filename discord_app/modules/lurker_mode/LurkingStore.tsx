// === Module 4200: LurkingStore ===

// Module 4200 (LurkingStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildRecord from "GuildRecord" /* 1975 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const isGuildLurker = GuildRecord.isGuildLurker;
({ JoinGuildSources: closure_4, ME: hasOwnProperty } = Constants);
let items = [];
let closure_7 = {};
let closure_8 = {};
const Store = initializeDefault.Store;
class LurkingStore extends Store {
}
const prototype = LurkingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildMemberStore, GuildStore, UserStore);
};
prototype["lurkingGuildIds"] = function lurkingGuildIds() {
  return items;
};
prototype["mostRecentLurkedGuildId"] = function mostRecentLurkedGuildId() {
  let tmp = null;
  if (0 !== items.length) {
    tmp = items[items.length - 1];
  }
  return tmp;
};
prototype["isLurking"] = function isLurking(guildId) {
  const guild = GuildStore.getGuild(guildId);
  if (null == guild) {
    return false;
  } else {
    const isCurrentUserGuestResult = GuildMemberStore.isCurrentUserGuest(guildId);
    let tmp6 = !isCurrentUserGuestResult;
    if (!isCurrentUserGuestResult) {
      tmp6 = isGuildLurker(guild);
    }
    return Boolean(tmp6);
  }
};
prototype["getLurkingSourceForGuild"] = function getLurkingSourceForGuild(guildId) {
  let tmp = null;
  if (null != guildId) {
    let tmp3 = closure_8[guildId];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getLoadId"] = function getLoadId(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = closure_7[arg0];
  }
  return tmp;
};
LurkingStore.displayName = "LurkingStore";
const lurkingStore = new LurkingStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const guildsArray = GuildStore.getGuildsArray();
    const found = guildsArray.filter((item) => isGuildLurker(item));
    items = found.map((id) => id.id);
    closure_8 = {};
  },
  GUILD_JOIN: function handleGuildJoin(lurker) {
    ({ guildId, source, loadId } = lurker);
    if (lurker.lurker) {
      if (guildId !== hasOwnProperty) {
        const hasItem = items.includes(guildId);
        if (!hasItem) {
          items = [];
          items[HermesBuiltin.arraySpread(items, 0)] = guildId;
        }
      }
      if (null != loadId) {
        closure_7[guildId] = loadId;
      }
      if (constants.MOBILE_GUILD_DISCOVERY === source) {
        let obj = { type: constants.MOBILE_GUILD_DISCOVERY };
        closure_8[guildId] = obj;
      } else if (constants.DIRECTORY_ENTRY === source) {
        obj = { type: constants.DIRECTORY_ENTRY, directoryChannelId: tmp3 };
        closure_8[guildId] = obj;
      } else if (constants.GAME_COMMUNITY_UPSELL === source) {
        obj = { type: constants.GAME_COMMUNITY_UPSELL };
        closure_8[guildId] = obj;
      } else {
        delete tmp2[tmp];
      }
      return true;
    } else {
      return false;
    }
  },
  GUILD_STOP_LURKING: function handleGuildStopLurking(ignoredGuildIds) {
    ignoredGuildIds = ignoredGuildIds.ignoredGuildIds;
    let set;
    if (ignoredGuildIds == null) {
      ignoredGuildIds = [];
    }
    items = [...ignoredGuildIds];
    set = new Set(items);
    const items1 = [...items];
    return items1.reduce((acc, item) => {
      let tmp4 = acc;
      if (!set.has(item)) {
        const index = items.indexOf(item);
        let flag = false;
        if (index > -1) {
          items = [];
          HermesBuiltin.arraySpread(items, 0);
          items.splice(index, 1);
          delete tmp3[tmp2];
          delete tmp[tmp2];
          flag = true;
        }
        if (!flag) {
          flag = acc;
        }
        tmp4 = flag;
      }
      return tmp4;
    }, false);
  },
  GUILD_STOP_LURKING_FAILURE: function handleGuildStopLurkingFailure(arg0) {
    ({ lurkingGuildId, lurkingSource } = arg0);
    if (lurkingGuildId !== hasOwnProperty) {
      const hasItem = items.includes(lurkingGuildId);
      if (!hasItem) {
        items = [];
        items[HermesBuiltin.arraySpread(items, 0)] = lurkingGuildId;
      }
    }
    if (null == lurkingSource) {
      delete tmp[tmp2];
    } else {
      closure_8[lurkingGuildId] = lurkingSource;
    }
    return true;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    let tmp4 = null == guild.joined_at;
    if (!tmp4) {
      tmp4 = !items.includes(guild.id);
    }
    let flag = !tmp4;
    if (!tmp4) {
      const index = items.indexOf(guild.id);
      flag = true;
      if (index > -1) {
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items.splice(index, 1);
        delete tmp3[tmp2];
        delete tmp[tmp2];
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    let flag = items.includes(guild.id);
    if (flag) {
      const index = items.indexOf(guild.id);
      flag = true;
      if (index > -1) {
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items.splice(index, 1);
        delete tmp3[tmp2];
        delete tmp[tmp2];
        flag = true;
      }
    }
    return flag;
  },
  GUILD_MEMBER_ADD: function handleGuildMemberAdd(guildId) {
    guildId = guildId.guildId;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp6 = guildId.user.id !== id || null == guildId.joinedAt;
    if (!tmp6) {
      tmp6 = !items.includes(guildId);
    }
    let flag = !tmp6;
    if (!tmp6) {
      const index = items.indexOf(guildId);
      flag = true;
      if (index > -1) {
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items.splice(index, 1);
        delete tmp3[tmp2];
        delete tmp[tmp2];
        flag = true;
      }
    }
    return flag;
  }
});
const result = size.fileFinishedImporting("modules/lurker_mode/LurkingStore.tsx");

export default lurkingStore;