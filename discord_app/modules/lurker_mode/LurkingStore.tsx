// === Module 4022: initialize ===

// Module 4022 (initialize)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1434 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

const isGuildLurker = GuildNSFWContentLevel.isGuildLurker;
({ JoinGuildSources: c4, ME: c5 } = ME);
let closure_6 = [];
let closure_7 = {};
let closure_8 = {};
const Store = initializeDefault.Store;
class LurkingStore extends Store {
}
const prototype = LurkingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_1, closure_2, closure_3);
};
prototype["lurkingGuildIds"] = function lurkingGuildIds() {
  return closure_6;
};
prototype["mostRecentLurkedGuildId"] = function mostRecentLurkedGuildId() {
  let tmp = null;
  if (0 !== closure_6.length) {
    tmp = closure_6[closure_6.length - 1];
  }
  return tmp;
};
prototype["isLurking"] = function isLurking(guildId) {
  const guild = store.getGuild(guildId);
  if (null == guild) {
    return false;
  } else {
    const isCurrentUserGuestResult = currentUserGuest.isCurrentUserGuest(guildId);
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
    let tmp3 = table2[guildId];
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
    tmp = table[arg0];
  }
  return tmp;
};
LurkingStore.displayName = "LurkingStore";
const lurkingStore = new LurkingStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const guildsArray = store.getGuildsArray();
    const found = guildsArray.filter((item, index) => callback(item));
    closure_6 = found.map((item, index) => item.id);
    closure_8 = {};
  },
  GUILD_JOIN: function handleGuildJoin(lurker) {
    ({ guildId, source, loadId } = lurker);
    if (lurker.lurker) {
      if (guildId !== closure_5) {
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
        let obj = { type: null };
        obj[0] = constants.MOBILE_GUILD_DISCOVERY;
        closure_8[guildId] = obj;
      } else if (constants.DIRECTORY_ENTRY === source) {
        obj = { type: null, directoryChannelId: null };
        obj[0] = constants.DIRECTORY_ENTRY;
        obj[1] = tmp3;
        closure_8[guildId] = obj;
      } else if (constants.GAME_COMMUNITY_UPSELL === source) {
        obj = { type: null };
        obj[0] = constants.GAME_COMMUNITY_UPSELL;
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
    let items = [...ignoredGuildIds];
    set = new Set(items);
    const items1 = [...items];
    return items1.reduce((acc, item, index) => {
      let tmp4 = acc;
      if (!set.has(item)) {
        index = items.indexOf(item);
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
    if (lurkingGuildId !== closure_5) {
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
    currentUser = currentUser.getCurrentUser();
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
const result = obj132.fileFinishedImporting("modules/lurker_mode/LurkingStore.tsx");

export default lurkingStore;