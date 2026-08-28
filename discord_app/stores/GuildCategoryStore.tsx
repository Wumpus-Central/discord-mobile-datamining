// discord_app/stores/GuildCategoryStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import closure_2 from "../modules/favorites/FavoriteStore.tsx";
import closure_3 from "AuthenticationStore.tsx";
import closure_4 from "ChannelStore.tsx";
import comparator from "GuildChannelStore.tsx";
import closure_7 from "GuildChannelStore.tsx";
import closure_8 from "GuildStore.tsx";
import ME from "../Constants.tsx";

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
    let _null = tmp[str];
    if (_null == null) {
      _null = tmp.null;
    }
    _null.push({ channel, index: -1 });
  }
  const channels = store2.getChannels(arg0);
  const obj = { _categories: [], null: [] };
  const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
    channel = channel.channel;
    const _categories = obj._categories;
    _categories.push({ channel, index: -1 });
    obj[channel.id] = [];
  });
  const item1 = channels[closure_5].forEach(updateChannel);
  const item2 = channels[closure_6].forEach(updateChannel);
  const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
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
      let _null = tmp[str];
      if (_null == null) {
        _null = tmp.null;
      }
      _null.push({ channel, index: -1 });
    }
    const channels = store2.getChannels(c11);
    const obj = { _categories: null, null: null };
    obj[0] = [];
    obj[1] = [];
    const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      const _categories = obj._categories;
      _categories.push({ channel, index: -1 });
      obj[channel.id] = [];
    });
    const item1 = channels[closure_5].forEach(updateChannel);
    const item2 = channels[closure_6].forEach(updateChannel);
    const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
    closure_12[c11] = obj;
    const arr = channels[constants.GUILD_CATEGORY];
    const arr2 = channels[closure_5];
    const arr3 = channels[closure_6];
    const arr4 = obj(5445)(obj._categories, obj);
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
      let _null = tmp[str];
      if (_null == null) {
        _null = tmp.null;
      }
      _null.push({ channel, index: -1 });
    }
    const channels = store2.getChannels(id);
    const obj = { _categories: null, null: null };
    obj[0] = [];
    obj[1] = [];
    const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      const _categories = obj._categories;
      _categories.push({ channel, index: -1 });
      obj[channel.id] = [];
    });
    const item1 = channels[closure_5].forEach(updateChannel);
    const item2 = channels[closure_6].forEach(updateChannel);
    const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
    closure_12[id] = obj;
    const arr = channels[constants.GUILD_CATEGORY];
    const arr2 = channels[closure_5];
    const arr3 = channels[closure_6];
    const arr4 = obj(5445)(obj._categories, obj);
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
        let _null = tmp[str];
        if (_null == null) {
          _null = tmp.null;
        }
        _null.push({ channel, index: -1 });
      }
      const channels = store2.getChannels(guild_id);
      const obj = { _categories: null, null: null };
      obj[0] = [];
      obj[1] = [];
      const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
        channel = channel.channel;
        const _categories = obj._categories;
        _categories.push({ channel, index: -1 });
        obj[channel.id] = [];
      });
      const item1 = channels[closure_5].forEach(updateChannel);
      const item2 = channels[closure_6].forEach(updateChannel);
      const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
      closure_12[guild_id] = obj;
      const arr = channels[constants.GUILD_CATEGORY];
      const arr2 = channels[closure_5];
      const arr3 = channels[closure_6];
      const arr4 = obj(5445)(obj._categories, obj);
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
      let _null = tmp[str];
      if (_null == null) {
        _null = tmp.null;
      }
      _null.push({ channel, index: -1 });
    }
    const channels = store2.getChannels(guildId);
    const obj = { _categories: null, null: null };
    obj[0] = [];
    obj[1] = [];
    const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      const _categories = obj._categories;
      _categories.push({ channel, index: -1 });
      obj[channel.id] = [];
    });
    const item1 = channels[closure_5].forEach(updateChannel);
    const item2 = channels[closure_6].forEach(updateChannel);
    const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
    closure_12[guildId] = obj;
    const arr = channels[constants.GUILD_CATEGORY];
    const arr2 = channels[closure_5];
    const arr3 = channels[closure_6];
    const arr4 = obj(5445)(obj._categories, obj);
  }
}
function updateSelectedVoiceChannel(channel, channelId) {
  closure_13 = channelId;
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
            let _null = tmp[str];
            if (_null == null) {
              _null = tmp.null;
            }
            _null.push({ channel, index: -1 });
          }
          const channels = store2.getChannels(guildId);
          const obj = { _categories: null, null: null };
          obj[0] = [];
          obj[1] = [];
          const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
            channel = channel.channel;
            const _categories = obj._categories;
            _categories.push({ channel, index: -1 });
            obj[channel.id] = [];
          });
          const item1 = channels[closure_5].forEach(updateChannel);
          const item2 = channels[closure_6].forEach(updateChannel);
          const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
          closure_12[guildId] = obj;
          flag = true;
          const arr = channels[constants.GUILD_CATEGORY];
          const arr2 = channels[closure_5];
          const arr3 = channels[closure_6];
          const arr4 = obj(5445)(obj._categories, obj);
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
    let _null = tmp[str];
    if (_null == null) {
      _null = tmp.null;
    }
    _null.push({ channel, index: -1 });
  }
  const channels = store2.getChannels(closure_10);
  const obj = { _categories: [], null: [] };
  const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
    channel = channel.channel;
    const _categories = obj._categories;
    _categories.push({ channel, index: -1 });
    obj[channel.id] = [];
  });
  const item1 = channels[closure_5].forEach(updateChannel);
  const item2 = channels[closure_6].forEach(updateChannel);
  const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
  closure_12[closure_10] = obj;
}
({ GUILD_SELECTABLE_CHANNELS_KEY: c5, GUILD_VOCAL_CHANNELS_KEY: closure_6 } = comparator);
({ ChannelTypes: c9, FAVORITES: c10 } = ME);
let c11 = null;
let closure_12 = {};
let c13 = null;
let closure_14 = { _categories: [], null: [] };
const Store = initializeDefault.Store;
class GuildCategoryStore extends Store {
}
const prototype = GuildCategoryStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_7, closure_8, closure_3, closure_4, closure_2);
  const items = [closure_2];
  this.syncWith(items, handleFavoritesUpdate);
};
prototype["getCategories"] = function getCategories(arg0) {
  if (null != arg0) {
    let tmp3 = dependencyMap[arg0];
    if (tmp3 == null) {
      function updateChannel(channel) {
        channel = channel.channel;
        let str = "null";
        if (null != channel.parent_id) {
          str = channel.parent_id;
        }
        let _null = tmp[str];
        if (_null == null) {
          _null = tmp.null;
        }
        _null.push({ channel, index: -1 });
      }
      const channels = store2.getChannels(arg0);
      const obj = { _categories: null, null: null };
      obj[0] = [];
      obj[1] = [];
      const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
        channel = channel.channel;
        const _categories = obj._categories;
        _categories.push({ channel, index: -1 });
        obj[channel.id] = [];
      });
      const item1 = channels[closure_5].forEach(updateChannel);
      const item2 = channels[closure_6].forEach(updateChannel);
      const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
      dependencyMap[arg0] = obj;
      tmp3 = obj;
      const arr = channels[constants.GUILD_CATEGORY];
      const arr2 = channels[closure_5];
      const arr3 = channels[closure_6];
      const arr4 = obj(5445)(obj._categories, obj);
    }
    let tmp = tmp3;
  } else {
    tmp = closure_14;
  }
  return tmp;
};
GuildCategoryStore.displayName = "GuildCategoryStore";
const guildCategoryStore = new GuildCategoryStore(dispatcherDefault, {
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    let tmp = guildId;
    if (guildId == null) {
      tmp = null;
    }
    c11 = tmp;
    let tmp2 = null != guildId;
    if (tmp2) {
      if (null == dependencyMap[guildId]) {
        function updateChannel(channel) {
          channel = channel.channel;
          let str = "null";
          if (null != channel.parent_id) {
            str = channel.parent_id;
          }
          let _null = tmp[str];
          if (_null == null) {
            _null = tmp.null;
          }
          _null.push({ channel, index: -1 });
        }
        const channels = store2.getChannels(guildId);
        const obj = { _categories: null, null: null };
        obj[0] = [];
        obj[1] = [];
        const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
          channel = channel.channel;
          const _categories = obj._categories;
          _categories.push({ channel, index: -1 });
          obj[channel.id] = [];
        });
        const item1 = channels[closure_5].forEach(updateChannel);
        const item2 = channels[closure_6].forEach(updateChannel);
        const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
        dependencyMap[guildId] = obj;
        const arr = channels[constants.GUILD_CATEGORY];
        const arr2 = channels[closure_5];
        const arr3 = channels[closure_6];
        const arr4 = obj(5445)(obj._categories, obj);
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
    delete tmp[tmp2];
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
        let tmp2 = closure_12;
        let tmp3 = guild_id;
        closure_12[tmp] = undefined;
        flag = true;
        let tmp4 = c11;
        if (c11 === tmp) {
          let tmp5 = rebuildGuild;
          let tmp6 = guild_id;
          let tmp7 = rebuildGuild(tmp);
        }
      }
      continue;
    }
    return flag;
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    if (id.getId() !== guildId.user.id) {
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
          let _null = tmp[str];
          if (_null == null) {
            _null = tmp.null;
          }
          _null.push({ channel, index: -1 });
        }
        const channels = store2.getChannels(guildId);
        const obj = { _categories: null, null: null };
        obj[0] = [];
        obj[1] = [];
        const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
          channel = channel.channel;
          const _categories = obj._categories;
          _categories.push({ channel, index: -1 });
          obj[channel.id] = [];
        });
        const item1 = channels[closure_5].forEach(updateChannel);
        const item2 = channels[closure_6].forEach(updateChannel);
        const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
        closure_12[guildId] = obj;
        const arr = channels[constants.GUILD_CATEGORY];
        const arr2 = channels[closure_5];
        const arr3 = channels[closure_6];
        const arr4 = obj(5445)(obj._categories, obj);
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
        let _null = tmp[str];
        if (_null == null) {
          _null = tmp.null;
        }
        _null.push({ channel, index: -1 });
      }
      const channels = store2.getChannels(c11);
      const obj = { _categories: null, null: null };
      obj[0] = [];
      obj[1] = [];
      const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
        channel = channel.channel;
        const _categories = obj._categories;
        _categories.push({ channel, index: -1 });
        obj[channel.id] = [];
      });
      const item1 = channels[closure_5].forEach(updateChannel);
      const item2 = channels[closure_6].forEach(updateChannel);
      const item3 = obj(5445)(obj._categories, obj).forEach(setIndex);
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
      if (null != c13) {
        let tmp2 = updateSelectedVoiceChannel(store.getChannel(c13), null);
      }
      return tmp2;
    }
    tmp2 = updateSelectedVoiceChannel(store.getChannel(channelId), channelId);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, channelId) => {
      channelId = channelId.channelId;
      let tmp = arg0;
      if (sessionId.getSessionId() === channelId.sessionId) {
        tmp = callback(channel.getChannel(channelId), channelId) || arg0;
        const tmp4 = callback(channel.getChannel(channelId), channelId) || arg0;
      }
      return tmp;
    }, false);
  }
});
const result = require("set").fileFinishedImporting("stores/GuildCategoryStore.tsx");

export default guildCategoryStore;