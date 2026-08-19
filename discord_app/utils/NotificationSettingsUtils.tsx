// discord_app/utils/NotificationSettingsUtils.tsx
import expandEventPropertiesDefault from "AnalyticsUtils.tsx";
import hasFlag from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import collectGuildAnalyticsMetadataDefault from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import initialize from "../modules/notifications/LastMentionTimestampStore.tsx";
import ensureGuildLoaded from "../stores/ChannelStore.tsx";
import reinjectEphemerals from "../stores/MessageStore.tsx";
import updateUserGuildSettingsInternal from "../stores/UserGuildSettingsStore.tsx";
import ME from "../Constants.tsx";
import { NotificationSettingsUpdateType as closure_9 } from "../modules/notifications/NotificationConstants.tsx";
import { UnreadSetting } from "../modules/read_states/ReadStateConstants.tsx";
import MAX_FAVORITES from "../modules/user_settings/UserSettingsConstants.tsx";

require = fn;
({ AnalyticEvents: error, UserNotificationSettings } = ME);
({ ChannelNotificationSettingsFlags: unpackModuleId, GuildNotificationSettingsFlags: closure_12 } = MAX_FAVORITES);
let obj = {
  forumThreadsCreated(arg0) {
    return arg0 ? obj.ForumThreadsCreatedOn : obj.ForumThreadsCreatedOff;
  },
  suppressEveryone(arg0) {
    return arg0 ? obj.SuppressEveryoneOn : obj.SuppressEveryoneOff;
  },
  suppressRoles(arg0) {
    return arg0 ? obj.SuppressRolesOn : obj.SuppressRolesOff;
  },
  highlights(arg0) {
    return arg0 ? obj.HighlightsOn : obj.HighlightsOff;
  },
  mobilePush(arg0) {
    return arg0 ? obj.MobilePushOn : obj.MobilePushOff;
  },
  optedIn(arg0) {
    return arg0 ? obj.OptedIn : obj.OptedOut;
  },
  favorited(arg0) {
    return arg0 ? obj.Favorited : obj.UnFavorited;
  },
  muted(muted) {
    return muted ? obj.Muted : obj.Unmuted;
  },
  mutedEvents(arg0) {
    return arg0 ? obj.MutedScheduledEvents : obj.UnmutedScheduledEvents;
  },
  unreads(toggleExpandedHistory) {
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      let UnreadsDefault = obj.UnreadsAll;
    } else if (toggleExpandedHistory === tmp.ONLY_MENTIONS) {
      UnreadsDefault = obj.UnreadsMentions;
    } else {
      UnreadsDefault = obj.UnreadsDefault;
    }
    return UnreadsDefault;
  },
  notifications(closure_0) {
    if (closure_0 === UserNotificationSettings.ALL_MESSAGES) {
      let NotificationsDefault = obj.NotificationsAll;
    } else if (closure_0 === UserNotificationSettings.ONLY_MENTIONS) {
      NotificationsDefault = obj.NotificationsMentions;
    } else if (closure_0 === UserNotificationSettings.NO_MESSAGES) {
      NotificationsDefault = obj.NotificationsNothing;
    } else {
      NotificationsDefault = obj.NotificationsDefault;
    }
    return NotificationsDefault;
  }
};
const frozen = Object.freeze({ [UserNotificationSettings.ALL_MESSAGES]: "All", [UserNotificationSettings.ONLY_MENTIONS]: "Mentions", [UserNotificationSettings.NO_MESSAGES]: "Nothing", [UserNotificationSettings.NULL]: null });
const result = require("obj132").fileFinishedImporting("utils/NotificationSettingsUtils.tsx");

export const NotificationLabels = obj;
export const NotificationLabel = obj;
export const MessageNotificationSettings = frozen;
export const trackGuildNotificationSettingsUpdate = function trackGuildNotificationSettingsUpdate(guild_id, muteSettings, currentGuildSettings, label, location) {
  function compute(guild_message_notification_settings, muteSettings) {
    obj = muteSettings;
    if (muteSettings === undefined) {
      obj = {};
    }
    if (null != obj.mute_config) {
      if (null != obj.mute_config.end_time) {
        const _Date = Date;
        const date = new Date(obj.mute_config.end_time);
        let guild_muted_until = date.getTime();
      }
      if (null != obj.message_notifications) {
        guild_message_notification_settings = table[obj.message_notifications];
      } else {
        guild_message_notification_settings = guild_message_notification_settings.guild_message_notification_settings;
      }
      obj = { guild_muted_until: null, guild_flags: null, guild_is_muted: null, guild_message_notification_settings: null, guild_suppress_roles: null, guild_receive_mobile_push: null, guild_notify_highlights: null, guild_suppress_everyone: null, guild_scheduled_events_muted: null };
      obj[0] = guild_muted_until;
      let guild_flags = obj.flags;
      if (guild_flags == null) {
        guild_flags = guild_message_notification_settings.guild_flags;
      }
      obj[1] = guild_flags;
      let guild_is_muted = obj.muted;
      if (guild_is_muted == null) {
        guild_is_muted = guild_message_notification_settings.guild_is_muted;
      }
      obj[2] = guild_is_muted;
      obj[3] = guild_message_notification_settings;
      let guild_suppress_roles = obj.suppress_roles;
      if (guild_suppress_roles == null) {
        guild_suppress_roles = guild_message_notification_settings.guild_suppress_roles;
      }
      obj[4] = guild_suppress_roles;
      let guild_receive_mobile_push = obj.mobile_push;
      if (guild_receive_mobile_push == null) {
        guild_receive_mobile_push = guild_message_notification_settings.guild_receive_mobile_push;
      }
      obj[5] = guild_receive_mobile_push;
      let guild_notify_highlights = obj.notify_highlights;
      if (guild_notify_highlights == null) {
        guild_notify_highlights = guild_message_notification_settings.guild_notify_highlights;
      }
      obj[6] = guild_notify_highlights;
      let guild_suppress_everyone = obj.suppress_everyone;
      if (guild_suppress_everyone == null) {
        guild_suppress_everyone = guild_message_notification_settings.guild_suppress_everyone;
      }
      obj[7] = guild_suppress_everyone;
      let guild_scheduled_events_muted = obj.mute_scheduled_events;
      if (guild_scheduled_events_muted == null) {
        guild_scheduled_events_muted = guild_message_notification_settings.guild_scheduled_events_muted;
      }
      obj[8] = guild_scheduled_events_muted;
      return obj;
    }
    guild_muted_until = guild_message_notification_settings.guild_muted_until;
  }
  const computeResult = compute(currentGuildSettings);
  const muteConfig = store2.getMuteConfig(guild_id);
  obj = { guild_suppress_everyone: store2.isSuppressEveryoneEnabled(guild_id), guild_suppress_roles: store2.isSuppressRolesEnabled(guild_id), guild_scheduled_events_muted: store2.isMuteScheduledEventsEnabled(guild_id), guild_is_muted: store2.isMuted(guild_id), guild_muted_until: null, guild_receive_mobile_push: null, guild_message_notification_settings: null, guild_notify_highlights: null, guild_flags: null };
  let time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      let _Date = Date;
      let date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
  obj[4] = time;
  obj[5] = obj.isMobilePushEnabled(guild_id);
  obj[6] = frozen[obj.getMessageNotifications(obj, guild_id)];
  obj[7] = obj.getNotifyHighlights(guild_id);
  obj[8] = obj.getGuildFlags(guild_id);
  const computeResult1 = compute(obj, muteSettings);
  let num;
  if (computeResult.guild_flags !== computeResult1.guild_flags) {
    num = computeResult.guild_flags;
  }
  if (num == null) {
    num = 0;
  }
  let num2 = computeResult1.guild_flags;
  if (num2 == null) {
    num2 = 0;
  }
  const isMutedResult = store2.isMuted(guild_id);
  const tmp10 = num2 ^ num;
  const removeFlagsResult = hasFlag.removeFlags(tmp10, constants4.OPT_IN_CHANNELS_OFF, constants4.OPT_IN_CHANNELS_ON);
  obj = {};
  const merged = Object.assign(computeResult1);
  const merged1 = Object.assign(store.getStats(guild_id));
  obj.location = location;
  obj.guild_id = guild_id;
  obj.update_type = constants2.GUILD;
  obj.label = label;
  let guild_flags;
  if (computeResult.guild_flags !== computeResult1.guild_flags) {
    guild_flags = computeResult.guild_flags;
  }
  obj.guild_flags_old = guild_flags;
  let guild_is_muted;
  if (computeResult.guild_is_muted !== computeResult1.guild_is_muted) {
    guild_is_muted = computeResult.guild_is_muted;
  }
  obj.guild_is_muted_old = guild_is_muted;
  let guild_suppress_roles;
  if (computeResult.guild_suppress_roles !== computeResult1.guild_suppress_roles) {
    guild_suppress_roles = computeResult.guild_suppress_roles;
  }
  obj.guild_suppress_roles_old = guild_suppress_roles;
  let prop;
  if (computeResult.guild_notify_highlights !== computeResult1.guild_notify_highlights) {
    prop = computeResult.guild_notify_highlights;
  }
  obj.guild_notify_highlights_old = prop;
  let prop1;
  if (computeResult.guild_suppress_everyone !== computeResult1.guild_suppress_everyone) {
    prop1 = computeResult.guild_suppress_everyone;
  }
  obj.guild_suppress_everyone_old = prop1;
  let prop2;
  if (computeResult.guild_receive_mobile_push !== computeResult1.guild_receive_mobile_push) {
    prop2 = computeResult.guild_receive_mobile_push;
  }
  obj.guild_receive_mobile_push_old = prop2;
  let prop3;
  if (computeResult.guild_scheduled_events_muted !== computeResult1.guild_scheduled_events_muted) {
    prop3 = computeResult.guild_scheduled_events_muted;
  }
  obj.guild_scheduled_events_muted_old = prop3;
  let prop4;
  if (computeResult.guild_message_notification_settings !== computeResult1.guild_message_notification_settings) {
    prop4 = computeResult.guild_message_notification_settings;
  }
  obj.guild_message_notification_settings_old = prop4;
  obj.is_opt_in_only_change = 0 === removeFlagsResult;
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.NOTIFICATION_SETTINGS_UPDATED, obj);
};
export const muteConfigToTimestamp = function muteConfigToTimestamp(muteConfig) {
  let time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
  return time;
};
export const trackChannelNotificationSettingsUpdate = function trackChannelNotificationSettingsUpdate(updateType) {
  let CHANNEL = updateType.updateType;
  if (CHANNEL === undefined) {
    CHANNEL = constants2.CHANNEL;
  }
  const guildId = updateType.guildId;
  const channelId = updateType.channelId;
  function compute(previous, change) {
    obj = change;
    if (change === undefined) {
      obj = {};
    }
    let muted = obj.muted;
    if (muted == null) {
      let channel_is_muted;
      if (previous != null) {
        channel_is_muted = previous.channel_is_muted;
      }
      muted = channel_is_muted;
    }
    if (null != obj.message_notifications) {
      let channel_message_notification_settings = frozen[obj.message_notifications];
    } else if (previous != null) {
      channel_message_notification_settings = previous.channel_message_notification_settings;
    }
    obj = { channel_is_muted: muted, channel_is_overridden: null, channel_flags: null, channel_message_notification_settings: null, channel_muted_until: null };
    let tmp3 = null;
    if (null != guildId) {
      tmp3 = true === muted || null != channel_message_notification_settings;
    }
    obj[1] = tmp3;
    let flags = obj.flags;
    if (flags == null) {
      let channel_flags;
      if (previous != null) {
        channel_flags = previous.channel_flags;
      }
      flags = channel_flags;
    }
    obj[2] = flags;
    obj[3] = channel_message_notification_settings;
    const mute_config = obj.mute_config;
    let time = null;
    if (null != mute_config) {
      time = null;
      if (null != mute_config.end_time) {
        const _Date = Date;
        const date = new Date(mute_config.end_time);
        time = date.getTime();
      }
    }
    obj[4] = time;
    return obj;
  }
  ({ applicationId, change, label, location: _location } = updateType);
  const computeResult = compute(updateType.previous);
  const channelMuteConfig = store2.getChannelMuteConfig(guildId, channelId);
  obj = { channel_is_muted: store2.isChannelMuted(guildId, channelId), channel_muted_until: null, channel_message_notification_settings: null, channel_flags: null };
  let time = null;
  if (null != channelMuteConfig) {
    time = null;
    if (null != channelMuteConfig.end_time) {
      let _Date = Date;
      let date = new Date(channelMuteConfig.end_time);
      time = date.getTime();
    }
  }
  obj[1] = time;
  obj[2] = frozen[obj.getChannelMessageNotifications(obj, guildId, channelId)];
  obj[3] = obj.getChannelIdFlags(guildId, channelId);
  const computeResult1 = compute(obj, change);
  channel = channel.getChannel(channelId);
  let num;
  if (computeResult.channel_flags !== computeResult1.channel_flags) {
    num = computeResult.channel_flags;
  }
  if (num == null) {
    num = 0;
  }
  let num2 = computeResult1.channel_flags;
  if (num2 == null) {
    num2 = 0;
  }
  const isChannelMutedResult = store2.isChannelMuted(guildId, channelId);
  const tmp12 = num2 ^ num;
  const obj4 = guildId(1403);
  lastMessage = lastMessage.getLastMessage(channelId);
  let type;
  if (lastMessage != null) {
    type = lastMessage.type;
  }
  if (type == null) {
    type = null;
  }
  const removeFlagsResult = guildId(1403).removeFlags(tmp12, constants3.FAVORITED, constants3.OPT_IN_ENABLED);
  obj = {};
  const merged = Object.assign(computeResult1);
  const merged1 = Object.assign(store.getStats(guildId));
  obj.location = _location;
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.update_type = CHANNEL;
  obj.label = label;
  let parent_id = null;
  if (null != channel) {
    parent_id = channel.parent_id;
  }
  obj.parent_id = parent_id;
  let channel_flags;
  if (computeResult.channel_flags !== computeResult1.channel_flags) {
    channel_flags = computeResult.channel_flags;
  }
  obj.channel_flags_old = channel_flags;
  let channel_is_muted;
  if (computeResult.channel_is_muted !== computeResult1.channel_is_muted) {
    channel_is_muted = computeResult.channel_is_muted;
  }
  obj.channel_is_muted_old = channel_is_muted;
  let channel_muted_until;
  if (computeResult.channel_muted_until !== computeResult1.channel_muted_until) {
    channel_muted_until = computeResult.channel_muted_until;
  }
  obj.channel_muted_until_old = channel_muted_until;
  let prop;
  if (computeResult.channel_is_overridden !== computeResult1.channel_is_overridden) {
    prop = computeResult.channel_is_overridden;
  }
  obj.channel_is_overridden_old = prop;
  let prop1;
  if (computeResult.channel_message_notification_settings !== computeResult1.channel_message_notification_settings) {
    prop1 = computeResult.channel_message_notification_settings;
  }
  obj.channel_message_notification_settings_old = prop1;
  obj.is_opt_in_only_change = 0 === removeFlagsResult;
  obj.last_message_type = type;
  obj.application_id = applicationId;
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.NOTIFICATION_SETTINGS_UPDATED, obj);
};
export const getCurrentGuildSettings = function getCurrentGuildSettings(guildId) {
  const muteConfig = store2.getMuteConfig(guildId);
  obj = { guild_suppress_everyone: store2.isSuppressEveryoneEnabled(guildId), guild_suppress_roles: store2.isSuppressRolesEnabled(guildId), guild_scheduled_events_muted: store2.isMuteScheduledEventsEnabled(guildId), guild_is_muted: store2.isMuted(guildId), guild_muted_until: null, guild_receive_mobile_push: null, guild_message_notification_settings: null, guild_notify_highlights: null, guild_flags: null };
  let time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
  obj[4] = time;
  obj[5] = obj.isMobilePushEnabled(guildId);
  obj[6] = frozen[obj.getMessageNotifications(obj, guildId)];
  obj[7] = obj.getNotifyHighlights(guildId);
  obj[8] = obj.getGuildFlags(guildId);
  return obj;
};
export const getManyCurrentGuildSettings = function getManyCurrentGuildSettings(arr) {
  const map = new Map();
  const item = arr.forEach((item, index) => {
    const muteConfig = closure_1_6.getMuteConfig(item);
    obj = { guild_suppress_everyone: closure_1_6.isSuppressEveryoneEnabled(item), guild_suppress_roles: closure_1_6.isSuppressRolesEnabled(item), guild_scheduled_events_muted: closure_1_6.isMuteScheduledEventsEnabled(item), guild_is_muted: closure_1_6.isMuted(item), guild_muted_until: null, guild_receive_mobile_push: null, guild_message_notification_settings: null, guild_notify_highlights: null, guild_flags: null };
    let time = null;
    if (null != muteConfig) {
      time = null;
      if (null != muteConfig.end_time) {
        const _Date = Date;
        const date = new Date(muteConfig.end_time);
        time = date.getTime();
      }
    }
    obj[4] = time;
    obj[5] = obj.isMobilePushEnabled(item);
    obj[6] = frozen[obj.getMessageNotifications(obj, item)];
    obj[7] = obj.getNotifyHighlights(item);
    obj[8] = obj.getGuildFlags(item);
    return map.set(item, obj);
  });
  return map;
};
export const getCurrentChannelSettings = function getCurrentChannelSettings(guildId, parent_id) {
  const channelMuteConfig = store2.getChannelMuteConfig(guildId, parent_id);
  obj = { channel_is_muted: store2.isChannelMuted(guildId, parent_id), channel_muted_until: null, channel_message_notification_settings: null, channel_flags: null };
  let time = null;
  if (null != channelMuteConfig) {
    time = null;
    if (null != channelMuteConfig.end_time) {
      const _Date = Date;
      const date = new Date(channelMuteConfig.end_time);
      time = date.getTime();
    }
  }
  obj[1] = time;
  obj[2] = frozen[obj.getChannelMessageNotifications(obj, guildId, parent_id)];
  obj[3] = obj.getChannelIdFlags(guildId, parent_id);
  return obj;
};
export const getManyCurrentChannelSettings = function getManyCurrentChannelSettings(guildId, keys) {
  closure_0 = guildId;
  const map = new Map();
  const item = keys.forEach((item, index) => {
    const channelMuteConfig = closure_1_6.getChannelMuteConfig(closure_0, item);
    obj = { channel_is_muted: closure_1_6.isChannelMuted(closure_0, item), channel_muted_until: null, channel_message_notification_settings: null, channel_flags: null };
    let time = null;
    if (null != channelMuteConfig) {
      time = null;
      if (null != channelMuteConfig.end_time) {
        const _Date = Date;
        const date = new Date(channelMuteConfig.end_time);
        time = date.getTime();
      }
    }
    obj[1] = time;
    obj[2] = frozen[obj.getChannelMessageNotifications(obj, closure_0, item)];
    obj[3] = obj.getChannelIdFlags(closure_0, item);
    return map.set(item, obj);
  });
  return map;
};
export const trackAccountNotificationSettingUpdated = function trackAccountNotificationSettingUpdated(quietMode, quietMode2) {
  obj = { update_type: constants2.ACCOUNT, quiet_mode_enabled: quietMode.quietMode, quiet_mode_enabled_old: quietMode2.quietMode };
  obj.track(constants.NOTIFICATION_SETTINGS_UPDATED, obj);
};