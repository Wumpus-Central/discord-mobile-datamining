// discord_app/stores/GuildCategoryStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import getFlattedChannelListDefault from "../modules/channel/getFlattedChannelList.tsx";
import FavoriteStore from "../modules/favorites/FavoriteStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildChannelStore from "GuildChannelStore.tsx";
import GuildStore from "GuildStore.tsx";

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
  const channels = GuildChannelStore.getChannels(arg0);
  const obj = { _categories: [], null: [] };
  const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
    channel = channel.channel;
    const _categories = obj._categories;
    _categories.push({ channel, index: -1 });
    obj[channel.id] = [];
  });
  const item1 = channels[hasOwnProperty].forEach(updateChannel);
  const item2 = channels[timestampProducer].forEach(updateChannel);
  const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
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
    const channels = GuildChannelStore.getChannels(c11);
    const obj = { _categories: [], null: [] };
    const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      const _categories = obj._categories;
      _categories.push({ channel, index: -1 });
      obj[channel.id] = [];
    });
    const item1 = channels[hasOwnProperty].forEach(updateChannel);
    const item2 = channels[timestampProducer].forEach(updateChannel);
    const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
    closure_12[c11] = obj;
    const arr4 = getFlattedChannelListDefault(obj._categories, obj);
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
    const channels = GuildChannelStore.getChannels(id);
    const obj = { _categories: [], null: [] };
    const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      const _categories = obj._categories;
      _categories.push({ channel, index: -1 });
      obj[channel.id] = [];
    });
    const item1 = channels[hasOwnProperty].forEach(updateChannel);
    const item2 = channels[timestampProducer].forEach(updateChannel);
    const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
    closure_12[id] = obj;
    const arr4 = getFlattedChannelListDefault(obj._categories, obj);
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
      const channels = GuildChannelStore.getChannels(guild_id);
      const obj = { _categories: [], null: [] };
      const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
        channel = channel.channel;
        const _categories = obj._categories;
        _categories.push({ channel, index: -1 });
        obj[channel.id] = [];
      });
      const item1 = channels[hasOwnProperty].forEach(updateChannel);
      const item2 = channels[timestampProducer].forEach(updateChannel);
      const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
      closure_12[guild_id] = obj;
      const arr4 = getFlattedChannelListDefault(obj._categories, obj);
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
    const channels = GuildChannelStore.getChannels(guildId);
    const obj = { _categories: [], null: [] };
    const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      const _categories = obj._categories;
      _categories.push({ channel, index: -1 });
      obj[channel.id] = [];
    });
    const item1 = channels[hasOwnProperty].forEach(updateChannel);
    const item2 = channels[timestampProducer].forEach(updateChannel);
    const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
    closure_12[guildId] = obj;
    const arr4 = getFlattedChannelListDefault(obj._categories, obj);
  }
}
function updateSelectedVoiceChannel(channel, channelId) {
  require = channelId;
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
          const channels = GuildChannelStore.getChannels(guildId);
          const obj = { _categories: [], null: [] };
          const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
            channel = channel.channel;
            const _categories = obj._categories;
            _categories.push({ channel, index: -1 });
            obj[channel.id] = [];
          });
          const item1 = channels[hasOwnProperty].forEach(updateChannel);
          const item2 = channels[timestampProducer].forEach(updateChannel);
          const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
          closure_12[guildId] = obj;
          flag = true;
          const arr4 = getFlattedChannelListDefault(obj._categories, obj);
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
  const channels = GuildChannelStore.getChannels(closure_1_10);
  const obj = { _categories: [], null: [] };
  const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
    channel = channel.channel;
    const _categories = obj._categories;
    _categories.push({ channel, index: -1 });
    obj[channel.id] = [];
  });
  const item1 = channels[hasOwnProperty].forEach(updateChannel);
  const item2 = channels[timestampProducer].forEach(updateChannel);
  const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
  closure_12[closure_1_10] = obj;
}
let GuildChannelStore = fn(2012);
({ GUILD_SELECTABLE_CHANNELS_KEY: hasOwnProperty, GUILD_VOCAL_CHANNELS_KEY: metroRequire } = GuildChannelStore);
const Constants = fn(1074);
({ ChannelTypes: closure_9, FAVORITES: c10 } = Constants);
let c11 = null;
const dependencyMap = {};
let require = null;
let closure_14 = { _categories: [], null: [] };
const Store = initializeDefault.Store;
class GuildCategoryStore extends Store {}
const prototype = GuildCategoryStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildChannelStore, GuildStore, AuthenticationStore, ChannelStore, FavoriteStore);
  const items = [FavoriteStore];
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
      const channels = GuildChannelStore.getChannels(arg0);
      const obj = { _categories: [], null: [] };
      const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
        channel = channel.channel;
        const _categories = obj._categories;
        _categories.push({ channel, index: -1 });
        obj[channel.id] = [];
      });
      const item1 = channels[hasOwnProperty].forEach(updateChannel);
      const item2 = channels[timestampProducer].forEach(updateChannel);
      const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
      dependencyMap[arg0] = obj;
      tmp3 = obj;
      const arr4 = getFlattedChannelListDefault(obj._categories, obj);
    }
    let tmp = tmp3;
  } else {
    tmp = closure_14;
  }
  return tmp;
};
GuildCategoryStore.displayName = "GuildCategoryStore";
const guildCategoryStore = new GuildCategoryStore(DispatcherDefault, {
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
        const channels = GuildChannelStore.getChannels(guildId);
        const obj = { _categories: [], null: [] };
        const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
          channel = channel.channel;
          const _categories = obj._categories;
          _categories.push({ channel, index: -1 });
          obj[channel.id] = [];
        });
        const item1 = channels[hasOwnProperty].forEach(updateChannel);
        const item2 = channels[timestampProducer].forEach(updateChannel);
        const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
        dependencyMap[guildId] = obj;
        const arr4 = getFlattedChannelListDefault(obj._categories, obj);
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
          let _null = tmp[str];
          if (_null == null) {
            _null = tmp.null;
          }
          _null.push({ channel, index: -1 });
        }
        const channels = GuildChannelStore.getChannels(guildId);
        const obj = { _categories: [], null: [] };
        const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
          channel = channel.channel;
          const _categories = obj._categories;
          _categories.push({ channel, index: -1 });
          obj[channel.id] = [];
        });
        const item1 = channels[hasOwnProperty].forEach(updateChannel);
        const item2 = channels[timestampProducer].forEach(updateChannel);
        const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
        closure_12[guildId] = obj;
        const arr4 = getFlattedChannelListDefault(obj._categories, obj);
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
      const channels = GuildChannelStore.getChannels(c11);
      const obj = { _categories: [], null: [] };
      const item = channels[constants.GUILD_CATEGORY].forEach((channel) => {
        channel = channel.channel;
        const _categories = obj._categories;
        _categories.push({ channel, index: -1 });
        obj[channel.id] = [];
      });
      const item1 = channels[hasOwnProperty].forEach(updateChannel);
      const item2 = channels[timestampProducer].forEach(updateChannel);
      const item3 = getFlattedChannelListDefault(obj._categories, obj).forEach(setIndex);
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
      if (null != require) {
        let tmp2 = updateSelectedVoiceChannel(ChannelStore.getChannel(require), null);
      }
      return tmp2;
    }
    tmp2 = updateSelectedVoiceChannel(ChannelStore.getChannel(channelId), channelId);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, channelId) => {
      channelId = channelId.channelId;
      let tmp = acc;
      if (sessionId.getSessionId() === channelId.sessionId) {
        tmp = updateSelectedVoiceChannel(channel.getChannel(channelId), channelId) || acc;
        const tmp4 = updateSelectedVoiceChannel(channel.getChannel(channelId), channelId) || acc;
      }
      return tmp;
    }, false);
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/GuildCategoryStore.tsx");

export default guildCategoryStore;
