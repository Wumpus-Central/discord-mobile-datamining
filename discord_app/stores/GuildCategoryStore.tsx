// === Module 6613: GuildCategoryStore ===

// Module 6613 (GuildCategoryStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6614 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4513 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
function setIndex(arg0, index) {
  arg0.index = index;
}
function rebuildGuild(arg0) {
  function updateChannel(channel) {
    channel = channel.channel;
    let str = "null";
    if (null != channel.parent_id) {
      str = channel.parent_id;
    }
    let _null = obj[str];
    if (_null == null) {
      _null = obj.null;
    }
    _null.push({ channel, index: -1 });
  }
  const channels = GuildChannelStore.getChannels(arg0);
  const obj = { _categories: [], null: [] };
  const arr = channels[constants.GUILD_CATEGORY];
  const item = arr.forEach((channel) => {
    channel = channel.channel;
    const _categories = obj._categories;
    _categories.push({ channel, index: -1 });
    obj[channel.id] = [];
  });
  const arr2 = channels[hasOwnProperty];
  const item1 = arr2.forEach(updateChannel);
  const arr3 = channels[metroRequire];
  const item2 = arr3.forEach(updateChannel);
  const arr4 = getFlattedChannelListDefault(obj._categories, obj);
  const item3 = arr4.forEach(setIndex);
  closure_12[arg0] = obj;
  return obj;
}
function handleConnectionOpen() {
  closure_12 = {};
  if (null != c11) {
    function updateChannel(channel) {
      channel = channel.channel;
      let str = "null";
      if (null != channel.parent_id) {
        str = channel.parent_id;
      }
      let _null = obj[str];
      if (_null == null) {
        _null = obj.null;
      }
      _null.push({ channel, index: -1 });
    }
    const channels = GuildChannelStore.getChannels(c11);
    const obj = { _categories: [], null: [] };
    const arr = channels[constants.GUILD_CATEGORY];
    const item = arr.forEach((channel) => {
      channel = channel.channel;
      const _categories = obj._categories;
      _categories.push({ channel, index: -1 });
      obj[channel.id] = [];
    });
    const arr2 = channels[hasOwnProperty];
    const item1 = arr2.forEach(updateChannel);
    const arr3 = channels[metroRequire];
    const item2 = arr3.forEach(updateChannel);
    const arr4 = getFlattedChannelListDefault(obj._categories, obj);
    const item3 = arr4.forEach(setIndex);
    closure_12[c11] = obj;
  }
}
function handleGuildUpdates(guild) {
  const id = guild.guild.id;
  closure_12[id] = undefined;
  if (c11 === id) {
    function updateChannel(channel) {
      channel = channel.channel;
      let str = "null";
      if (null != channel.parent_id) {
        str = channel.parent_id;
      }
      let _null = obj[str];
      if (_null == null) {
        _null = obj.null;
      }
      _null.push({ channel, index: -1 });
    }
    const channels = GuildChannelStore.getChannels(id);
    const obj = { _categories: [], null: [] };
    const arr = channels[constants.GUILD_CATEGORY];
    const item = arr.forEach((channel) => {
      channel = channel.channel;
      const _categories = obj._categories;
      _categories.push({ channel, index: -1 });
      obj[channel.id] = [];
    });
    const arr2 = channels[hasOwnProperty];
    const item1 = arr2.forEach(updateChannel);
    const arr3 = channels[metroRequire];
    const item2 = arr3.forEach(updateChannel);
    const arr4 = getFlattedChannelListDefault(obj._categories, obj);
    const item3 = arr4.forEach(setIndex);
    closure_12[id] = obj;
  }
}
function handleChannelUpdate(channel) {
  const guild_id = channel.channel.guild_id;
  if (null == guild_id) {
    return false;
  } else {
    closure_12[guild_id] = undefined;
    if (c11 === guild_id) {
      function updateChannel(channel) {
        channel = channel.channel;
        let str = "null";
        if (null != channel.parent_id) {
          str = channel.parent_id;
        }
        let _null = obj[str];
        if (_null == null) {
          _null = obj.null;
        }
        _null.push({ channel, index: -1 });
      }
      const channels = GuildChannelStore.getChannels(guild_id);
      const obj = { _categories: [], null: [] };
      const arr = channels[constants.GUILD_CATEGORY];
      const item = arr.forEach((channel) => {
        channel = channel.channel;
        const _categories = obj._categories;
        _categories.push({ channel, index: -1 });
        obj[channel.id] = [];
      });
      const arr2 = channels[hasOwnProperty];
      const item1 = arr2.forEach(updateChannel);
      const arr3 = channels[metroRequire];
      const item2 = arr3.forEach(updateChannel);
      const arr4 = getFlattedChannelListDefault(obj._categories, obj);
      const item3 = arr4.forEach(setIndex);
      closure_12[guild_id] = obj;
    }
  }
}
function handleGuildRoleUpdate(guildId) {
  guildId = guildId.guildId;
  closure_12[guildId] = undefined;
  if (guildId === c11) {
    function updateChannel(channel) {
      channel = channel.channel;
      let str = "null";
      if (null != channel.parent_id) {
        str = channel.parent_id;
      }
      let _null = obj[str];
      if (_null == null) {
        _null = obj.null;
      }
      _null.push({ channel, index: -1 });
    }
    const channels = GuildChannelStore.getChannels(guildId);
    const obj = { _categories: [], null: [] };
    const arr = channels[constants.GUILD_CATEGORY];
    const item = arr.forEach((channel) => {
      channel = channel.channel;
      const _categories = obj._categories;
      _categories.push({ channel, index: -1 });
      obj[channel.id] = [];
    });
    const arr2 = channels[hasOwnProperty];
    const item1 = arr2.forEach(updateChannel);
    const arr3 = channels[metroRequire];
    const item2 = arr3.forEach(updateChannel);
    const arr4 = getFlattedChannelListDefault(obj._categories, obj);
    const item3 = arr4.forEach(setIndex);
    closure_12[guildId] = obj;
  }
}
function updateSelectedVoiceChannel(channel, channelId) {
  c13 = channelId;
  if (null != channel) {
    if (null != channel.getGuildId()) {
      const guildId = channel.getGuildId();
      let flag = null != guildId;
      if (flag) {
        closure_12[guildId] = undefined;
        flag = true;
        if (guildId === c11) {
          function updateChannel(channel) {
            channel = channel.channel;
            let str = "null";
            if (null != channel.parent_id) {
              str = channel.parent_id;
            }
            let _null = obj[str];
            if (_null == null) {
              _null = obj.null;
            }
            _null.push({ channel, index: -1 });
          }
          const channels = GuildChannelStore.getChannels(guildId);
          const obj = { _categories: [], null: [] };
          const arr = channels[constants.GUILD_CATEGORY];
          const item = arr.forEach((channel) => {
            channel = channel.channel;
            const _categories = obj._categories;
            _categories.push({ channel, index: -1 });
            obj[channel.id] = [];
          });
          const arr2 = channels[hasOwnProperty];
          const item1 = arr2.forEach(updateChannel);
          const arr3 = channels[metroRequire];
          const item2 = arr3.forEach(updateChannel);
          const arr4 = getFlattedChannelListDefault(obj._categories, obj);
          const item3 = arr4.forEach(setIndex);
          closure_12[guildId] = obj;
          flag = true;
        }
      }
      return flag;
    }
  }
  return false;
}
function handleFavoritesUpdate() {
  function updateChannel(channel) {
    channel = channel.channel;
    let str = "null";
    if (null != channel.parent_id) {
      str = channel.parent_id;
    }
    let _null = obj[str];
    if (_null == null) {
      _null = obj.null;
    }
    _null.push({ channel, index: -1 });
  }
  const channels = GuildChannelStore.getChannels(authStore);
  const obj = { _categories: [], null: [] };
  const arr = channels[constants.GUILD_CATEGORY];
  const item = arr.forEach((channel) => {
    channel = channel.channel;
    const _categories = obj._categories;
    _categories.push({ channel, index: -1 });
    obj[channel.id] = [];
  });
  const arr2 = channels[hasOwnProperty];
  const item1 = arr2.forEach(updateChannel);
  const arr3 = channels[metroRequire];
  const item2 = arr3.forEach(updateChannel);
  const arr4 = getFlattedChannelListDefault(obj._categories, obj);
  const item3 = arr4.forEach(setIndex);
  closure_12[authStore] = obj;
}
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: hasOwnProperty, GUILD_VOCAL_CHANNELS_KEY: metroRequire } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ ChannelTypes: c9, FAVORITES: c10 } = Constants);
let c11 = null;
let closure_12 = {};
let c13 = null;
let closure_14 = { _categories: [], null: [] };
const Store = get_initializedDefault.Store;
class GuildCategoryStore extends Store {
  initialize() {
    this.waitFor(GuildChannelStore, GuildStore, AuthenticationStore, ChannelStore, FavoriteStore);
    const items = [FavoriteStore];
    this.syncWith(items, handleFavoritesUpdate);
  }
  getCategories(arg0) {
    let tmp;
    if (null != arg0) {
      let tmp3 = closure_12[arg0];
      if (tmp3 == null) {
        function updateChannel(channel) {
          channel = channel.channel;
          let str = "null";
          if (null != channel.parent_id) {
            str = channel.parent_id;
          }
          let _null = obj[str];
          if (_null == null) {
            _null = obj.null;
          }
          _null.push({ channel, index: -1 });
        }
        const channels = GuildChannelStore.getChannels(arg0);
        const obj = { _categories: [], null: [] };
        const arr = channels[constants.GUILD_CATEGORY];
        const item = arr.forEach((channel) => {
          channel = channel.channel;
          const _categories = obj._categories;
          _categories.push({ channel, index: -1 });
          obj[channel.id] = [];
        });
        const arr2 = channels[hasOwnProperty];
        const item1 = arr2.forEach(updateChannel);
        const arr3 = channels[metroRequire];
        const item2 = arr3.forEach(updateChannel);
        const arr4 = getFlattedChannelListDefault(obj._categories, obj);
        const item3 = arr4.forEach(setIndex);
        closure_12[arg0] = obj;
        tmp3 = obj;
      }
      tmp = tmp3;
    } else {
      tmp = closure_14;
    }
    return tmp;
  }
}
const prototype = GuildCategoryStore.prototype;
GuildCategoryStore.displayName = "GuildCategoryStore";
let obj = {
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    let tmp = guildId;
    if (guildId == null) {
      tmp = null;
    }
    c11 = tmp;
    let tmp2 = null != guildId;
    if (tmp2) {
      if (null == closure_12[guildId]) {
        function updateChannel(channel) {
          channel = channel.channel;
          let str = "null";
          if (null != channel.parent_id) {
            str = channel.parent_id;
          }
          let _null = obj[str];
          if (_null == null) {
            _null = obj.null;
          }
          _null.push({ channel, index: -1 });
        }
        const channels = GuildChannelStore.getChannels(guildId);
        const obj = { _categories: [], null: [] };
        const arr = channels[constants.GUILD_CATEGORY];
        const item = arr.forEach((channel) => {
          channel = channel.channel;
          const _categories = obj._categories;
          _categories.push({ channel, index: -1 });
          obj[channel.id] = [];
        });
        const arr2 = channels[hasOwnProperty];
        const item1 = arr2.forEach(updateChannel);
        const arr3 = channels[metroRequire];
        const item2 = arr3.forEach(updateChannel);
        const arr4 = getFlattedChannelListDefault(obj._categories, obj);
        const item3 = arr4.forEach(setIndex);
        closure_12[guildId] = obj;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED_LAZY: handleConnectionOpen,
  GUILD_CREATE: handleGuildUpdates,
  GUILD_UPDATE: handleGuildUpdates,
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete closure_12[arg0.guild.id];
  },
  CHANNEL_CREATE: handleChannelUpdate,
  CHANNEL_DELETE: handleChannelUpdate,
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    while (iter !== undefined) {
      let guild_id = iter.next().guild_id;
      let tmp = guild_id;
      if (null != guild_id) {
        closure_12[tmp] = undefined;
        flag = true;
        if (c11 === tmp) {
          let tmp7 = rebuildGuild(tmp);
        }
      }
      continue;
    }
    return flag;
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    if (AuthenticationStore.getId() !== guildId.user.id) {
      return false;
    } else {
      closure_12[guildId] = undefined;
      if (guildId === c11) {
        function updateChannel(channel) {
          channel = channel.channel;
          let str = "null";
          if (null != channel.parent_id) {
            str = channel.parent_id;
          }
          let _null = obj[str];
          if (_null == null) {
            _null = obj.null;
          }
          _null.push({ channel, index: -1 });
        }
        const channels = GuildChannelStore.getChannels(guildId);
        const obj = { _categories: [], null: [] };
        const arr = channels[constants.GUILD_CATEGORY];
        const item = arr.forEach((channel) => {
          channel = channel.channel;
          const _categories = obj._categories;
          _categories.push({ channel, index: -1 });
          obj[channel.id] = [];
        });
        const arr2 = channels[hasOwnProperty];
        const item1 = arr2.forEach(updateChannel);
        const arr3 = channels[metroRequire];
        const item2 = arr3.forEach(updateChannel);
        const arr4 = getFlattedChannelListDefault(obj._categories, obj);
        const item3 = arr4.forEach(setIndex);
        closure_12[guildId] = obj;
      }
    }
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (null == c11) {
      return false;
    } else {
      function updateChannel(channel) {
        channel = channel.channel;
        let str = "null";
        if (null != channel.parent_id) {
          str = channel.parent_id;
        }
        let _null = obj[str];
        if (_null == null) {
          _null = obj.null;
        }
        _null.push({ channel, index: -1 });
      }
      const channels = GuildChannelStore.getChannels(c11);
      const obj = { _categories: [], null: [] };
      const arr = channels[constants.GUILD_CATEGORY];
      const item = arr.forEach((channel) => {
        channel = channel.channel;
        const _categories = obj._categories;
        _categories.push({ channel, index: -1 });
        obj[channel.id] = [];
      });
      const arr2 = channels[hasOwnProperty];
      const item1 = arr2.forEach(updateChannel);
      const arr3 = channels[metroRequire];
      const item2 = arr3.forEach(updateChannel);
      const arr4 = getFlattedChannelListDefault(obj._categories, obj);
      const item3 = arr4.forEach(setIndex);
      closure_12[c11] = obj;
    }
  },
  GUILD_ROLE_CREATE: handleGuildRoleUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleUpdate,
  GUILD_ROLE_DELETE: handleGuildRoleUpdate,
  IMPERSONATE_UPDATE: handleGuildRoleUpdate,
  IMPERSONATE_STOP: handleGuildRoleUpdate,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      let tmp2;
      if (null != c13) {
        tmp2 = updateSelectedVoiceChannel(ChannelStore.getChannel(c13), null);
      }
      return tmp2;
    }
    tmp2 = updateSelectedVoiceChannel(ChannelStore.getChannel(channelId), channelId);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let channel;
    let sessionId;
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, channelId) => {
      channelId = channelId.channelId;
      let tmp = acc;
      if (sessionId.getSessionId() === channelId.sessionId) {
        tmp = updateSelectedVoiceChannel(channel.getChannel(channelId), channelId) || acc;
        updateSelectedVoiceChannel(channel.getChannel(channelId), channelId) || acc;
      }
      return tmp;
    }, false);
  }
};
const guildCategoryStore = new GuildCategoryStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/GuildCategoryStore.tsx");

export default guildCategoryStore;