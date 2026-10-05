// discord_app/modules/lurker_mode/LurkingStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildRecord from "../../records/GuildRecord.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_8;

let closure_4;
let hasOwnProperty;
const isGuildLurker = GuildRecord.isGuildLurker;
({ JoinGuildSources: closure_4, ME: hasOwnProperty } = Constants);
let items = [];
const metroImportDefault = {};
const metroImportAll = {};
const Store = get_initializedDefault.Store;
class LurkingStore extends Store {
  initialize() {
    this.waitFor(GuildMemberStore, GuildStore, UserStore);
  }
  lurkingGuildIds() {
    return items;
  }
  mostRecentLurkedGuildId() {
    let tmp = null;
    if (0 !== items.length) {
      tmp = items[items.length - 1];
    }
    return tmp;
  }
  isLurking(guildId) {
    const guild = GuildStore.getGuild(guildId);
    if (null == guild) {
      return false;
    } else {
      const isCurrentUserGuestResult = GuildMemberStore.isCurrentUserGuest(guildId);
      let tmp6 = !isCurrentUserGuestResult;
      const _Boolean = Boolean;
      if (!isCurrentUserGuestResult) {
        tmp6 = isGuildLurker(guild);
      }
      return _Boolean(tmp6);
    }
  }
  getLurkingSourceForGuild(guildId) {
    let tmp = null;
    if (null != guildId) {
      let tmp3 = closure_8[guildId];
      if (tmp3 == null) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getLoadId(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = closure_7[arg0];
    }
    return tmp;
  }
}
const prototype = LurkingStore.prototype;
LurkingStore.displayName = "LurkingStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const guildsArray = GuildStore.getGuildsArray();
    const found = guildsArray.filter((item) => isGuildLurker(item));
    items = found.map((id) => id.id);
    closure_8 = {};
  },
  GUILD_JOIN: function handleGuildJoin(lurker) {
    let guildId;
    let loadId;
    let source;
    ({ guildId, source, loadId } = lurker);
    if (lurker.lurker) {
      if (guildId !== hasOwnProperty) {
        const hasItem = items.includes(guildId);
        const tmp6 = !hasItem;
        if (tmp6) {
          items = [];
          items[HermesBuiltin.arraySpread(items, items, 0)] = guildId;
        }
      }
      if (null != loadId) {
        closure_7[guildId] = loadId;
      }
      if (constants.MOBILE_GUILD_DISCOVERY === source) {
        const obj2 = { type: constants.MOBILE_GUILD_DISCOVERY };
        closure_8[guildId] = obj2;
      } else if (constants.DIRECTORY_ENTRY === source) {
        const obj3 = { type: constants.DIRECTORY_ENTRY, directoryChannelId: tmp2 };
        closure_8[guildId] = obj3;
      } else if (constants.GAME_COMMUNITY_UPSELL === source) {
        const obj = { type: constants.GAME_COMMUNITY_UPSELL };
        closure_8[guildId] = obj;
      } else {
        delete closure_8[guildId];
      }
      return true;
    } else {
      return false;
    }
  },
  GUILD_STOP_LURKING: function handleGuildStopLurking(ignoredGuildIds) {
    ignoredGuildIds = ignoredGuildIds.ignoredGuildIds;
    let _Set1;
    const _Set = Set;
    if (ignoredGuildIds == null) {
      ignoredGuildIds = [];
    }
    items = [...ignoredGuildIds];
    _Set1 = new _Set(items);
    const items1 = [...items];
    return items1.reduce((acc, item) => {
      let tmp3 = acc;
      if (!_Set1.has(item)) {
        const index = items.indexOf(item);
        let flag = false;
        if (index > -1) {
          items = [];
          HermesBuiltin.arraySpread(items, items, 0);
          items.splice(index, 1);
          delete closure_7[item];
          delete closure_8[item];
          flag = true;
        }
        if (!flag) {
          flag = acc;
        }
        tmp3 = flag;
      }
      return tmp3;
    }, false);
  },
  GUILD_STOP_LURKING_FAILURE: function handleGuildStopLurkingFailure(arg0) {
    let lurkingGuildId;
    let lurkingSource;
    ({ lurkingGuildId, lurkingSource } = arg0);
    if (lurkingGuildId !== hasOwnProperty) {
      const hasItem = items.includes(lurkingGuildId);
      const tmp4 = !hasItem;
      if (tmp4) {
        items = [];
        items[HermesBuiltin.arraySpread(items, items, 0)] = lurkingGuildId;
      }
    }
    if (null == lurkingSource) {
      delete closure_8[lurkingGuildId];
    } else {
      closure_8[lurkingGuildId] = lurkingSource;
    }
    return true;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    let flag = !(null == guild.joined_at || !items.includes(guild.id));
    const tmp2 = null == guild.joined_at || !items.includes(guild.id);
    if (flag) {
      const id = guild.id;
      const index = items.indexOf(id);
      flag = true;
      if (index > -1) {
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items.splice(index, 1);
        delete closure_7[id];
        delete closure_8[id];
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    let flag = items.includes(guild.id);
    if (flag) {
      const id = guild.id;
      const index = items.indexOf(id);
      flag = true;
      if (index > -1) {
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items.splice(index, 1);
        delete closure_7[id];
        delete closure_8[id];
        flag = true;
      }
    }
    return flag;
  },
  GUILD_MEMBER_ADD: function handleGuildMemberAdd(guildId) {
    guildId = guildId.guildId;
    const joinedAt = guildId.joinedAt;
    const id = guildId.user.id;
    const currentUser = UserStore.getCurrentUser();
    let id1;
    if (currentUser != null) {
      id1 = currentUser.id;
    }
    let flag = !(id !== id1 || null == joinedAt || !items.includes(guildId));
    const tmp4 = id !== id1 || null == joinedAt || !items.includes(guildId);
    if (flag) {
      const index = items.indexOf(guildId);
      flag = true;
      if (index > -1) {
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items.splice(index, 1);
        delete closure_7[guildId];
        delete closure_8[guildId];
        flag = true;
      }
    }
    return flag;
  },
};
const lurkingStore = new LurkingStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/lurker_mode/LurkingStore.tsx");

export default lurkingStore;
