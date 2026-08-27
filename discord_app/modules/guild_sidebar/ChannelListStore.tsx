// === Module 7203: handleReset ===

// Module 7203 (handleReset)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId" /* 4079 */;
import computeSubtitleDefault from "computeSubtitle" /* 7206 */;
import closure_3 from "participantFromServer" /* 1390 */;
import closure_4 from "isSubscriptionGated" /* 1983 */;
import closure_5 from "scheduledEventSort" /* 7204 */;
import closure_6 from "rebuild" /* 5400 */;
import closure_7 from "storeThread" /* 4091 */;
import closure_8 from "handleConnectionClosedOrResumed" /* 1340 */;
import closure_9 from "fetchFingerprint" /* 1218 */;
import closure_10 from "incrementVersion" /* 5437 */;
import closure_11 from "ensureGuildLoaded" /* 1391 */;
import closure_12 from "handleConnectionOpen" /* 7205 */;
import closure_13 from "getUncachedChannelPermissions" /* 4089 */;
import closure_14 from "generateOldThreadCutoff" /* 4460 */;
import closure_15 from "handleConnectionOpen" /* 1981 */;
import closure_16 from "updateUserGuildSettingsInternal" /* 4654 */;
import { UserSettingsTypes } from "MAX_FAVORITES" /* 685 */;

require = arg1;
function handleReset() {
  const channelId = store2.getChannelId();
  const voiceChannelId = store2.getVoiceChannelId();
  return store3.clear();
}
function handleGuildAction(guild) {
  return store3.clearGuildId(guild.guild.id);
}
function handleChannelAction(channel) {
  return store3.clearGuildId(channel.channel.guild_id);
}
function handleRebuildGuildId(guildId) {
  return store3.clearGuildId(guildId.guildId);
}
function handleReadStateChange(channelId) {
  return store3.nonPositionalChannelIdUpdate(channelId.channelId);
}
function handleThreadUpdate(channel) {
  return store3.nonPositionalChannelIdUpdate(channel.channel.id);
}
function handleThreadMemberUpdate(id) {
  return store3.nonPositionalChannelIdUpdate(id.id);
}
function handleChannelSelect() {
  const channelId = store2.getChannelId();
  const voiceChannelId = store2.getVoiceChannelId();
  let tmp3 = channelId !== channelId;
  if (!tmp3) {
    tmp3 = voiceChannelId !== voiceChannelId;
  }
  let flag = tmp3;
  if (flag) {
    const items = [channelId, voiceChannelId, channelId, voiceChannelId];
    const obj = applyDefault(items);
    const item = applyDefault(items).uniq().forEach((channelId) => {
      if (null != channelId) {
        const result = closure_20.nonPositionalChannelIdUpdate(channelId);
      }
    });
    flag = true;
    const uniqResult = applyDefault(items).uniq();
  }
  return flag;
}
function handleCategoryChange(id) {
  id = id.id;
  const channel = store.getChannel(id);
  if (null == channel) {
    let clearGuildIdResult = store3.clearGuildId(id);
  } else {
    clearGuildIdResult = store3.clearGuildId(channel.guild_id);
  }
  return clearGuildIdResult;
}
function handleVoiceChannelsChange(guildId) {
  return store3.clearGuildId(guildId.guildId);
}
function handleRecomputeAllSubtitles() {
  return store3.updateSubtitles();
}
function handleGuildScheduledEventUpdate(guildScheduledEvent) {
  return store3.updateSubtitles(guildScheduledEvent.guildScheduledEvent.guild_id);
}
let c18 = null;
let c19 = null;
let closure_20 = new computeSubtitleDefault();
const Store = initializeDefault.Store;
class ChannelListStore extends Store {
}
const prototype = ChannelListStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_9, closure_10, closure_11, closure_12, closure_3, closure_4, closure_5, closure_7, closure_13, closure_14, closure_15, closure_16, closure_8);
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
  const guild = store3.getGuild(arg0, guildActionRows, channelNoticeRows);
  return { guildChannelsVersion: guild.version, guildChannels: guild };
};
prototype["getGuildWithoutChangingGuildActionRows"] = function getGuildWithoutChangingGuildActionRows(id) {
  const guildChannelRowsOnly = store3.getGuildChannelRowsOnly(id);
  return { guildChannelsVersion: guildChannelRowsOnly.version, guildChannels: guildChannelRowsOnly };
};
prototype["recentsChannelCount"] = function recentsChannelCount(id) {
  if (null == id) {
    return 0;
  } else {
    const guildChannelRowsOnly = store3.getGuildChannelRowsOnly(id);
    const categoryFromSection = guildChannelRowsOnly.getCategoryFromSection(guildChannelRowsOnly.recentsSectionNumber);
    return categoryFromSection.getShownChannelIds().length;
  }
};
ChannelListStore.displayName = "ChannelListStore";
const channelListStore = new ChannelListStore(dispatcherDefault, {
  APPLICATION_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATION_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATION_FETCH: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH: handleRecomputeAllSubtitles,
  BACKGROUND_SYNC: handleReset,
  BULK_ACK: function handleBulkAck(channels) {
    const _require = false;
    const mapped = applyDefault(channels.channels).map((channelId) => {
      channel = channel.getChannel(channelId.channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return guild_id;
    });
    const found = mapped.filter(_require(1370).isNotNullish);
    const arr = applyDefault(channels.channels);
    const item = found.uniq().forEach((guildId) => {
      if (closure_1_20.clearGuildId(guildId)) {
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
    const channel = store.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return store3.clearGuildId(guild_id);
  },
  CHANNEL_CREATE: handleChannelAction,
  CHANNEL_DELETE: handleChannelAction,
  CHANNEL_LOCAL_ACK: handleReadStateChange,
  CHANNEL_MUTE_EXPIRED: handleRebuildGuildId,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: handleReadStateChange,
  CHANNEL_SELECT: handleChannelSelect,
  CHANNEL_INFO: function handleChannelInfo(guildId) {
    return store3.clearGuildId(guildId.guildId);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    c0 = false;
    const mapped = applyDefault(channels.channels).map((guild_id) => guild_id.guild_id);
    const arr = applyDefault(channels.channels);
    const item = mapped.uniq().forEach((guildId) => {
      if (closure_1_20.clearGuildId(guildId)) {
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
    return store3.nonPositionalChannelIdUpdate(channelId.channelId);
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    instance = instance.instance;
    const embeddedActivityLocationGuildId = getEmbeddedActivityLocationChannelId.getEmbeddedActivityLocationGuildId(instance.location);
    const obj = getEmbeddedActivityLocationChannelId;
    return store3.updateSubtitles(embeddedActivityLocationGuildId, getEmbeddedActivityLocationChannelId.getEmbeddedActivityLocationChannelId(instance.location));
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function handleEmbeddedActivityLaunchStart() {
    store3.updateSubtitles();
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: handleRecomputeAllSubtitles,
  ENABLE_AUTOMATIC_ACK: handleReadStateChange,
  FETCH_GUILD_EVENTS_FOR_GUILD: function handleFetchGuildEventsForGuild(guildId) {
    return store3.updateSubtitles(guildId.guildId);
  },
  GAMES_DATABASE_FETCH_FAIL: handleRecomputeAllSubtitles,
  GAMES_DATABASE_FETCH: handleRecomputeAllSubtitles,
  GAMES_DATABASE_UPDATE: handleRecomputeAllSubtitles,
  GUILD_APPLICATIONS_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  GUILD_CREATE: handleGuildAction,
  GUILD_DELETE: handleGuildAction,
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(arg0) {
    ({ guildId, user } = arg0);
    let clearGuildIdResult = id.getId() === user.id;
    if (clearGuildIdResult) {
      clearGuildIdResult = store3.clearGuildId(guildId);
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
    const item = channels.forEach((guildId) => closure_20.clearGuildId(guildId.guildId));
  },
  LOAD_MESSAGES_SUCCESS: handleReadStateChange,
  MESSAGE_ACK: handleReadStateChange,
  MESSAGE_CREATE: function handleMessageCreate(channelId) {
    return store3.nonPositionalChannelIdUpdate(channelId.channelId);
  },
  MESSAGE_DELETE_BULK: handleReadStateChange,
  MESSAGE_DELETE: handleReadStateChange,
  NOTIFICATION_SETTINGS_UPDATE: handleReset,
  OVERLAY_INITIALIZE: handleReset,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    return store3.clearGuildId(guildId.guildId);
  },
  RECOMPUTE_READ_STATES: handleReset,
  RESORT_THREADS: handleReadStateChange,
  SET_RECENTLY_ACTIVE_COLLAPSED: handleReset,
  THREAD_CREATE: handleThreadUpdate,
  THREAD_DELETE: function handleThreadDelete(channel) {
    return store3.nonPositionalChannelUpdate(channel.channel);
  },
  THREAD_LIST_SYNC: handleRebuildGuildId,
  THREAD_MEMBER_UPDATE: handleThreadMemberUpdate,
  THREAD_MEMBERS_UPDATE: handleThreadMemberUpdate,
  THREAD_UPDATE: handleThreadUpdate,
  TRY_ACK: handleReadStateChange,
  UPDATE_CHANNEL_DIMENSIONS: handleReadStateChange,
  UPDATE_CHANNEL_LIST_SUBTITLES: function handleUpdateSubtitles(guildId) {
    store3.updateSubtitles(guildId.guildId);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: handleRebuildGuildId,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: handleRebuildGuildId,
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => closure_20.clearGuildId(guild_id.guild_id));
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
      guilds = settings.proto.guilds;
      guilds = undefined;
      if (guilds != null) {
        guilds = guilds.guilds;
      }
      importDefault = false;
      if (null != guilds) {
        const keys = DISCORD_EPOCHDefault.keys(guilds);
        const item = keys.forEach((arg0) => {
          if (null != guilds[arg0].guildRecentsDismissedAt) {
            closure_1 = closure_1_20.updateRecentsCategory(arg0) || closure_1;
            const tmp2 = closure_1_20.updateRecentsCategory(arg0) || closure_1;
          }
        });
        const obj = DISCORD_EPOCHDefault;
      }
      return importDefault;
    }
  },
  VOICE_CATEGORY_COLLAPSE: handleVoiceChannelsChange,
  VOICE_CATEGORY_EXPAND: handleVoiceChannelsChange,
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  VOICE_CHANNEL_STATUS_UPDATE: function handleVoiceChannelStatusUpdate(id) {
    return store3.nonPositionalChannelIdUpdate(id.id);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let flag = handleChannelSelect();
    const set = new Set();
    const iter = arg0.voiceStates[Symbol.iterator]();
    while (iter !== undefined) {
      ({ channelId, oldChannelId } = nextResult);
      let tmp2 = oldChannelId;
      let hasItem = null == oldChannelId;
      if (!hasItem) {
        let tmp4 = oldChannelId;
        hasItem = set.has(tmp2);
      }
      if (!hasItem) {
        let tmp5 = store3;
        let tmp6 = oldChannelId;
        if (store3.nonPositionalChannelIdUpdate(tmp2)) {
          flag = true;
        }
        let tmp7 = oldChannelId;
        let addResult = set.add(tmp2);
      }
      let tmp9 = channelId;
      let hasItem1 = null == channelId;
      if (!hasItem1) {
        let tmp11 = channelId;
        hasItem1 = set.has(channelId);
      }
      if (!hasItem1) {
        let tmp12 = store3;
        let tmp13 = channelId;
        if (store3.nonPositionalChannelIdUpdate(channelId)) {
          flag = true;
        }
        let tmp14 = channelId;
        let addResult1 = set.add(channelId);
      }
      continue;
    }
    return flag;
  },
  WINDOW_FOCUS: function handleCurrentChannelReadStateChange() {
    let result = null != c18;
    if (result) {
      result = store3.nonPositionalChannelIdUpdate(c18);
    }
    return result;
  }
});
let obj = {
  APPLICATION_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATION_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATION_FETCH: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH: handleRecomputeAllSubtitles,
  BACKGROUND_SYNC: handleReset,
  BULK_ACK: function handleBulkAck(channels) {
    const _require = false;
    const mapped = applyDefault(channels.channels).map((channelId) => {
      channel = channel.getChannel(channelId.channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return guild_id;
    });
    const found = mapped.filter(_require(1370).isNotNullish);
    const arr = applyDefault(channels.channels);
    const item = found.uniq().forEach((guildId) => {
      if (closure_1_20.clearGuildId(guildId)) {
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
    const channel = store.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return store3.clearGuildId(guild_id);
  },
  CHANNEL_CREATE: handleChannelAction,
  CHANNEL_DELETE: handleChannelAction,
  CHANNEL_LOCAL_ACK: handleReadStateChange,
  CHANNEL_MUTE_EXPIRED: handleRebuildGuildId,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: handleReadStateChange,
  CHANNEL_SELECT: handleChannelSelect,
  CHANNEL_INFO: function handleChannelInfo(guildId) {
    return store3.clearGuildId(guildId.guildId);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    c0 = false;
    const mapped = applyDefault(channels.channels).map((guild_id) => guild_id.guild_id);
    const arr = applyDefault(channels.channels);
    const item = mapped.uniq().forEach((guildId) => {
      if (closure_1_20.clearGuildId(guildId)) {
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
    return store3.nonPositionalChannelIdUpdate(channelId.channelId);
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    instance = instance.instance;
    const embeddedActivityLocationGuildId = getEmbeddedActivityLocationChannelId.getEmbeddedActivityLocationGuildId(instance.location);
    const obj = getEmbeddedActivityLocationChannelId;
    return store3.updateSubtitles(embeddedActivityLocationGuildId, getEmbeddedActivityLocationChannelId.getEmbeddedActivityLocationChannelId(instance.location));
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function handleEmbeddedActivityLaunchStart() {
    store3.updateSubtitles();
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: handleRecomputeAllSubtitles,
  ENABLE_AUTOMATIC_ACK: handleReadStateChange,
  FETCH_GUILD_EVENTS_FOR_GUILD: function handleFetchGuildEventsForGuild(guildId) {
    return store3.updateSubtitles(guildId.guildId);
  },
  GAMES_DATABASE_FETCH_FAIL: handleRecomputeAllSubtitles,
  GAMES_DATABASE_FETCH: handleRecomputeAllSubtitles,
  GAMES_DATABASE_UPDATE: handleRecomputeAllSubtitles,
  GUILD_APPLICATIONS_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  GUILD_CREATE: handleGuildAction,
  GUILD_DELETE: handleGuildAction,
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(arg0) {
    ({ guildId, user } = arg0);
    let clearGuildIdResult = id.getId() === user.id;
    if (clearGuildIdResult) {
      clearGuildIdResult = store3.clearGuildId(guildId);
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
    const item = channels.forEach((guildId) => closure_20.clearGuildId(guildId.guildId));
  },
  LOAD_MESSAGES_SUCCESS: handleReadStateChange,
  MESSAGE_ACK: handleReadStateChange,
  MESSAGE_CREATE: function handleMessageCreate(channelId) {
    return store3.nonPositionalChannelIdUpdate(channelId.channelId);
  },
  MESSAGE_DELETE_BULK: handleReadStateChange,
  MESSAGE_DELETE: handleReadStateChange,
  NOTIFICATION_SETTINGS_UPDATE: handleReset,
  OVERLAY_INITIALIZE: handleReset,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    return store3.clearGuildId(guildId.guildId);
  },
  RECOMPUTE_READ_STATES: handleReset,
  RESORT_THREADS: handleReadStateChange,
  SET_RECENTLY_ACTIVE_COLLAPSED: handleReset,
  THREAD_CREATE: handleThreadUpdate,
  THREAD_DELETE: function handleThreadDelete(channel) {
    return store3.nonPositionalChannelUpdate(channel.channel);
  },
  THREAD_LIST_SYNC: handleRebuildGuildId,
  THREAD_MEMBER_UPDATE: handleThreadMemberUpdate,
  THREAD_MEMBERS_UPDATE: handleThreadMemberUpdate,
  THREAD_UPDATE: handleThreadUpdate,
  TRY_ACK: handleReadStateChange,
  UPDATE_CHANNEL_DIMENSIONS: handleReadStateChange,
  UPDATE_CHANNEL_LIST_SUBTITLES: function handleUpdateSubtitles(guildId) {
    store3.updateSubtitles(guildId.guildId);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: handleRebuildGuildId,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: handleRebuildGuildId,
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => closure_20.clearGuildId(guild_id.guild_id));
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
      guilds = settings.proto.guilds;
      guilds = undefined;
      if (guilds != null) {
        guilds = guilds.guilds;
      }
      importDefault = false;
      if (null != guilds) {
        const keys = DISCORD_EPOCHDefault.keys(guilds);
        const item = keys.forEach((arg0) => {
          if (null != guilds[arg0].guildRecentsDismissedAt) {
            closure_1 = closure_1_20.updateRecentsCategory(arg0) || closure_1;
            const tmp2 = closure_1_20.updateRecentsCategory(arg0) || closure_1;
          }
        });
        const obj = DISCORD_EPOCHDefault;
      }
      return importDefault;
    }
  },
  VOICE_CATEGORY_COLLAPSE: handleVoiceChannelsChange,
  VOICE_CATEGORY_EXPAND: handleVoiceChannelsChange,
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  VOICE_CHANNEL_STATUS_UPDATE: function handleVoiceChannelStatusUpdate(id) {
    return store3.nonPositionalChannelIdUpdate(id.id);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let flag = handleChannelSelect();
    const set = new Set();
    const iter = arg0.voiceStates[Symbol.iterator]();
    while (iter !== undefined) {
      ({ channelId, oldChannelId } = nextResult);
      let tmp2 = oldChannelId;
      let hasItem = null == oldChannelId;
      if (!hasItem) {
        let tmp4 = oldChannelId;
        hasItem = set.has(tmp2);
      }
      if (!hasItem) {
        let tmp5 = store3;
        let tmp6 = oldChannelId;
        if (store3.nonPositionalChannelIdUpdate(tmp2)) {
          flag = true;
        }
        let tmp7 = oldChannelId;
        let addResult = set.add(tmp2);
      }
      let tmp9 = channelId;
      let hasItem1 = null == channelId;
      if (!hasItem1) {
        let tmp11 = channelId;
        hasItem1 = set.has(channelId);
      }
      if (!hasItem1) {
        let tmp12 = store3;
        let tmp13 = channelId;
        if (store3.nonPositionalChannelIdUpdate(channelId)) {
          flag = true;
        }
        let tmp14 = channelId;
        let addResult1 = set.add(channelId);
      }
      continue;
    }
    return flag;
  },
  WINDOW_FOCUS: function handleCurrentChannelReadStateChange() {
    let result = null != c18;
    if (result) {
      result = store3.nonPositionalChannelIdUpdate(c18);
    }
    return result;
  }
};
let tmp2 = new computeSubtitleDefault();
let result = require("set").fileFinishedImporting("modules/guild_sidebar/ChannelListStore.tsx");

export default channelListStore;