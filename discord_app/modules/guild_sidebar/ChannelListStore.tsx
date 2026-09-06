// === Module 7525: ChannelListStore ===

// Module 7525 (ChannelListStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import ChannelListStateDefault from "ChannelListState" /* 7528 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import GatedChannelStore from "GatedChannelStore" /* 2013 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5506 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7117 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7527 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

require = fn;
function handleReset() {
  channelId = SelectedChannelStore.getChannelId();
  voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  return closure_20.clear();
}
function handleGuildAction(guild) {
  return closure_20.clearGuildId(guild.guild.id);
}
function handleChannelAction(channel) {
  return closure_20.clearGuildId(channel.channel.guild_id);
}
function handleRebuildGuildId(guildId) {
  return closure_20.clearGuildId(guildId.guildId);
}
function handleReadStateChange(channelId) {
  return closure_20.nonPositionalChannelIdUpdate(channelId.channelId);
}
function handleThreadUpdate(channel) {
  return closure_20.nonPositionalChannelIdUpdate(channel.channel.id);
}
function handleThreadMemberUpdate(id) {
  return closure_20.nonPositionalChannelIdUpdate(id.id);
}
function handleChannelSelect() {
  channelId = SelectedChannelStore.getChannelId();
  voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let tmp3 = channelId !== channelId;
  if (!tmp3) {
    tmp3 = voiceChannelId !== voiceChannelId;
  }
  let flag = tmp3;
  if (flag) {
    const items = [channelId, voiceChannelId, channelId, voiceChannelId];
    const obj = _modDef12(items);
    const item = _modDef12(items).uniq().forEach((item) => {
      if (null != item) {
        const result = closure_1_20.nonPositionalChannelIdUpdate(item);
      }
    });
    flag = true;
    const uniqResult = _modDef12(items).uniq();
  }
  return flag;
}
function handleCategoryChange(id) {
  id = id.id;
  const channel = ChannelStore.getChannel(id);
  if (null == channel) {
    let clearGuildIdResult = closure_20.clearGuildId(id);
  } else {
    clearGuildIdResult = closure_20.clearGuildId(channel.guild_id);
  }
  return clearGuildIdResult;
}
function handleVoiceChannelsChange(guildId) {
  return closure_20.clearGuildId(guildId.guildId);
}
function handleRecomputeAllSubtitles() {
  return closure_20.updateSubtitles();
}
function handleGuildScheduledEventUpdate(guildScheduledEvent) {
  return closure_20.updateSubtitles(guildScheduledEvent.guildScheduledEvent.guild_id);
}
const UserSettingsTypes = fn(1084).UserSettingsTypes;
let channelId = null;
let voiceChannelId = null;
let closure_20 = new ChannelListStateDefault();
const Store = initializeDefault.Store;
class ChannelListStore extends Store {
}
const prototype = ChannelListStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ActiveJoinedThreadsStore, AuthenticationStore, CategoryCollapseStore, ChannelStore, CollapsedVoiceChannelStore, EmbeddedActivitiesStore, GatedChannelStore, GuildScheduledEventStore, JoinedThreadsStore, PermissionStore, ReadStateStore, SelectedChannelStore, UserGuildSettingsStore, UserSettingsProtoStore);
};
prototype["getGuild"] = function getGuild(arg0, guildActionRows) {
  guildActionRows = undefined;
  if (guildActionRows != null) {
    guildActionRows = guildActionRows.guildActionRows;
  }
  if (guildActionRows == null) {
    guildActionRows = [];
  }
  let channelNoticeRows;
  if (guildActionRows != null) {
    channelNoticeRows = guildActionRows.channelNoticeRows;
  }
  if (channelNoticeRows == null) {
    channelNoticeRows = [];
  }
  const guild = closure_20.getGuild(arg0, guildActionRows, channelNoticeRows);
  return { guildChannelsVersion: guild.version, guildChannels: guild };
};
prototype["getGuildWithoutChangingGuildActionRows"] = function getGuildWithoutChangingGuildActionRows(id) {
  const guildChannelRowsOnly = closure_20.getGuildChannelRowsOnly(id);
  return { guildChannelsVersion: guildChannelRowsOnly.version, guildChannels: guildChannelRowsOnly };
};
prototype["recentsChannelCount"] = function recentsChannelCount(id) {
  if (null == id) {
    return 0;
  } else {
    const guildChannelRowsOnly = closure_20.getGuildChannelRowsOnly(id);
    const categoryFromSection = guildChannelRowsOnly.getCategoryFromSection(guildChannelRowsOnly.recentsSectionNumber);
    return categoryFromSection.getShownChannelIds().length;
  }
};
ChannelListStore.displayName = "ChannelListStore";
const channelListStore = new ChannelListStore(DispatcherDefault, {
  APPLICATION_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATION_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATION_FETCH: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH: handleRecomputeAllSubtitles,
  BACKGROUND_SYNC: handleReset,
  BULK_ACK: function handleBulkAck(channels) {
    _require = false;
    const mapped = _modDef12(channels.channels).map((channelId) => {
      channel = channel.getChannel(channelId.channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return guild_id;
    });
    const found = mapped.filter(require("GlobalUtils").isNotNullish);
    const arr = _modDef12(channels.channels);
    const item = found.uniq().forEach((item) => {
      if (closure_20.clearGuildId(item)) {
        c0 = true;
      }
    });
    return _require;
  },
  BULK_CLEAR_RECENTS: handleRebuildGuildId,
  CACHE_LOADED_LAZY: handleReset,
  CATEGORY_COLLAPSE_ALL: handleRebuildGuildId,
  CATEGORY_COLLAPSE: handleCategoryChange,
  CATEGORY_EXPAND_ALL: handleRebuildGuildId,
  CATEGORY_EXPAND: handleCategoryChange,
  CHANNEL_ACK: handleReadStateChange,
  CHANNEL_COLLAPSE: function handleChannelCollapse(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return closure_20.clearGuildId(guild_id);
  },
  CHANNEL_CREATE: handleChannelAction,
  CHANNEL_DELETE: handleChannelAction,
  CHANNEL_LOCAL_ACK: handleReadStateChange,
  CHANNEL_MUTE_EXPIRED: handleRebuildGuildId,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: handleReadStateChange,
  CHANNEL_SELECT: handleChannelSelect,
  CHANNEL_INFO: function handleChannelInfo(guildId) {
    return closure_20.clearGuildId(guildId.guildId);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    c0 = false;
    const mapped = _modDef12(channels.channels).map((guild_id) => guild_id.guild_id);
    const arr = _modDef12(channels.channels);
    const item = mapped.uniq().forEach((item) => {
      if (closure_20.clearGuildId(item)) {
        c0 = true;
      }
    });
    return c0;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: handleRecomputeAllSubtitles,
  CONNECTION_OPEN: handleReset,
  CURRENT_USER_UPDATE: handleReset,
  DECAY_READ_STATES: handleReset,
  DEV_TOOLS_DESIGN_TOGGLE_SET: handleReset,
  DISABLE_AUTOMATIC_ACK: handleReadStateChange,
  DISMISS_FAVORITE_SUGGESTION: function handleFavoriteSuggestionDimissed(channelId) {
    return closure_20.nonPositionalChannelIdUpdate(channelId.channelId);
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    instance = instance.instance;
    const embeddedActivityLocationGuildId = embeddedActivityLocationUtils.getEmbeddedActivityLocationGuildId(instance.location);
    return closure_20.updateSubtitles(embeddedActivityLocationGuildId, embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(instance.location));
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function handleEmbeddedActivityLaunchStart() {
    closure_20.updateSubtitles();
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: handleRecomputeAllSubtitles,
  ENABLE_AUTOMATIC_ACK: handleReadStateChange,
  FETCH_GUILD_EVENTS_FOR_GUILD: function handleFetchGuildEventsForGuild(guildId) {
    return closure_20.updateSubtitles(guildId.guildId);
  },
  GAMES_DATABASE_FETCH_FAIL: handleRecomputeAllSubtitles,
  GAMES_DATABASE_FETCH: handleRecomputeAllSubtitles,
  GAMES_DATABASE_UPDATE: handleRecomputeAllSubtitles,
  GUILD_APPLICATIONS_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  GUILD_CREATE: handleGuildAction,
  GUILD_DELETE: handleGuildAction,
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(arg0) {
    ({ guildId, user } = arg0);
    let clearGuildIdResult = AuthenticationStore.getId() === user.id;
    if (clearGuildIdResult) {
      clearGuildIdResult = closure_20.clearGuildId(guildId);
    }
    return clearGuildIdResult;
  },
  GUILD_MUTE_EXPIRED: handleRebuildGuildId,
  GUILD_ROLE_CREATE: handleRebuildGuildId,
  GUILD_ROLE_DELETE: handleRebuildGuildId,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: handleRebuildGuildId,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: handleRebuildGuildId,
  GUILD_ROLE_UPDATE: handleRebuildGuildId,
  GUILD_SCHEDULED_EVENT_CREATE: handleGuildScheduledEventUpdate,
  GUILD_SCHEDULED_EVENT_DELETE: handleGuildScheduledEventUpdate,
  GUILD_SCHEDULED_EVENT_UPDATE: handleGuildScheduledEventUpdate,
  GUILD_TOGGLE_COLLAPSE_MUTED: handleRebuildGuildId,
  GUILD_UPDATE: handleGuildAction,
  IMPERSONATE_STOP: handleRebuildGuildId,
  IMPERSONATE_UPDATE: handleRebuildGuildId,
  LOAD_CHANNELS: function handleLoadChannels(channels) {
    channels = channels.channels;
    const item = channels.forEach((guildId) => closure_1_20.clearGuildId(guildId.guildId));
  },
  LOAD_MESSAGES_SUCCESS: handleReadStateChange,
  MESSAGE_ACK: handleReadStateChange,
  MESSAGE_CREATE: function handleMessageCreate(channelId) {
    return closure_20.nonPositionalChannelIdUpdate(channelId.channelId);
  },
  MESSAGE_DELETE_BULK: handleReadStateChange,
  MESSAGE_DELETE: handleReadStateChange,
  NOTIFICATION_SETTINGS_UPDATE: handleReset,
  OVERLAY_INITIALIZE: handleReset,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    return closure_20.clearGuildId(guildId.guildId);
  },
  RECOMPUTE_READ_STATES: handleReset,
  RESORT_THREADS: handleReadStateChange,
  SET_RECENTLY_ACTIVE_COLLAPSED: handleReset,
  THREAD_CREATE: handleThreadUpdate,
  THREAD_DELETE: function handleThreadDelete(channel) {
    return closure_20.nonPositionalChannelUpdate(channel.channel);
  },
  THREAD_LIST_SYNC: handleRebuildGuildId,
  THREAD_MEMBER_UPDATE: handleThreadMemberUpdate,
  THREAD_MEMBERS_UPDATE: handleThreadMemberUpdate,
  THREAD_UPDATE: handleThreadUpdate,
  TRY_ACK: handleReadStateChange,
  UPDATE_CHANNEL_DIMENSIONS: handleReadStateChange,
  UPDATE_CHANNEL_LIST_SUBTITLES: function handleUpdateSubtitles(guildId) {
    closure_20.updateSubtitles(guildId.guildId);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: handleRebuildGuildId,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: handleRebuildGuildId,
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => closure_1_20.clearGuildId(guild_id.guild_id));
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: handleRebuildGuildId,
  USER_GUILD_SETTINGS_GUILD_UPDATE: handleRebuildGuildId,
  USER_SETTINGS_PROTO_UPDATE: function handleSettingsProtoUpdate(settings) {
    settings = settings.settings;
    let guilds;
    importDefault = undefined;
    if (settings.type !== UserSettingsTypes.PRELOADED_USER_SETTINGS) {
      return false;
    } else {
      guilds = undefined;
      if (guilds != null) {
        guilds = guilds.guilds;
      }
      importDefault = false;
      if (null != guilds) {
        const keys = SnowflakeUtilsDefault.keys(guilds);
        const item = keys.forEach((item) => {
          if (null != guilds[item].guildRecentsDismissedAt) {
            closure_1 = closure_20.updateRecentsCategory(item) || closure_1;
            const tmp2 = closure_20.updateRecentsCategory(item) || closure_1;
          }
        });
      }
      return importDefault;
    }
  },
  VOICE_CATEGORY_COLLAPSE: handleVoiceChannelsChange,
  VOICE_CATEGORY_EXPAND: handleVoiceChannelsChange,
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  VOICE_CHANNEL_STATUS_UPDATE: function handleVoiceChannelStatusUpdate(id) {
    return closure_20.nonPositionalChannelIdUpdate(id.id);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let flag = handleChannelSelect();
    const set = new Set();
    const iter = arg0.voiceStates[Symbol.iterator]();
    while (iter !== undefined) {
      ({ channelId, oldChannelId } = nextResult);
      let hasItem = null == oldChannelId;
      if (!hasItem) {
        hasItem = set.has(oldChannelId);
      }
      if (!hasItem) {
        if (closure_20.nonPositionalChannelIdUpdate(oldChannelId)) {
          flag = true;
        }
        let addResult = set.add(oldChannelId);
      }
      let hasItem1 = null == channelId;
      if (!hasItem1) {
        hasItem1 = set.has(channelId);
      }
      if (!hasItem1) {
        if (closure_20.nonPositionalChannelIdUpdate(channelId)) {
          flag = true;
        }
        let addResult1 = set.add(channelId);
      }
      continue;
    }
    return flag;
  },
  WINDOW_FOCUS: function handleCurrentChannelReadStateChange() {
    let result = null != channelId;
    if (result) {
      result = closure_20.nonPositionalChannelIdUpdate(channelId);
    }
    return result;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/ChannelListStore.tsx");

export default channelListStore;