// === Module 7361: NotificationSettingsUtils ===

// Module 7361 (NotificationSettingsUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4937 */;
import LastMentionTimestampStore from "LastMentionTimestampStore" /* 7362 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import MessageStore from "MessageStore" /* 4977 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4938 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, UserNotificationSettings } = Constants);
const constants2 = fn(4409).NotificationSettingsUpdateType;
const UnreadSetting = fn(4939).UnreadSetting;
const UserSettingsConstants = fn(1084);
({ ChannelNotificationSettingsFlags: closure_11, GuildNotificationSettingsFlags: closure_12 } = UserSettingsConstants);
const NotificationLabels = { ForumThreadsCreatedOn: "enabled forum thread created notifs", ForumThreadsCreatedOff: "disabled forum thread created notifs", SuppressEveryoneOn: "enabled suppress everyone", SuppressEveryoneOff: "disabled suppress everyone", SuppressRolesOn: "enabled suppress roles", SuppressRolesOff: "disabled suppress roles", HighlightsOn: "enabled highlights", HighlightsOff: "disabled highlights", MobilePushOn: "enabled mobile push notifications", MobilePushOff: "disabled mobile push notifications", UnreadsAll: "unreads set to all messages", UnreadsMentions: "unreads set to mentions", UnreadsDefault: "unreads set to the default", NotificationsAll: "notifications set to all messages", NotificationsMentions: "notifications set to mentions", NotificationsNothing: "notifications set to nothing", NotificationsDefault: "notifications set to the default", PresetAll: "notification preset set to all messages", PresetHybrid: "notification preset set to hybrid", PresetMentions: "notification preset set to mentions", PresetNothing: "notification preset set to nothing", PresetDefault: "notification preset set to the default", OptedIn: "opted in to entity", OptedOut: "opted out from entity", Favorited: "favorited", UnFavorited: "unfavorited", Muted: "muted", Unmuted: "unmuted", MutedScheduledEvents: "muted scheduled events", UnmutedScheduledEvents: "unmuted scheduled events", OverrideCreated: "channel override created", OverrideDeleted: "channel override deleted", AnnouncementAutoEnable: "announcement channels auto set to all messages" };
const frozen = Object.freeze({ [UserNotificationSettings.ALL_MESSAGES]: "All", [UserNotificationSettings.ONLY_MENTIONS]: "Mentions", [UserNotificationSettings.NO_MESSAGES]: "Nothing", [UserNotificationSettings.NULL]: null });
const size = fn(2);
const result = size.fileFinishedImporting("utils/NotificationSettingsUtils.tsx");

export { NotificationLabels };
export const NotificationLabel = {
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
  optedIn(optInEnabled) {
    return optInEnabled ? obj.OptedIn : obj.OptedOut;
  },
  favorited(setting) {
    return setting ? obj.Favorited : obj.UnFavorited;
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
  notifications(message_notifications) {
    if (message_notifications === UserNotificationSettings.ALL_MESSAGES) {
      let NotificationsDefault = obj.NotificationsAll;
    } else if (message_notifications === UserNotificationSettings.ONLY_MENTIONS) {
      NotificationsDefault = obj.NotificationsMentions;
    } else if (message_notifications === UserNotificationSettings.NO_MESSAGES) {
      NotificationsDefault = obj.NotificationsNothing;
    } else {
      NotificationsDefault = obj.NotificationsDefault;
    }
    return NotificationsDefault;
  }
};
export const MessageNotificationSettings = frozen;
export const trackGuildNotificationSettingsUpdate = function trackGuildNotificationSettingsUpdate(guild_id, muteSettings, currentGuildSettings, label, location) {
  function compute(guild_message_notification_settings) {
    let obj = muteSettings;
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
        guild_message_notification_settings = frozen[obj.message_notifications];
      } else {
        guild_message_notification_settings = guild_message_notification_settings.guild_message_notification_settings;
      }
      const obj2 = { guild_muted_until, guild_flags: null, guild_is_muted: null, guild_message_notification_settings: null, guild_suppress_roles: null, guild_receive_mobile_push: null, guild_notify_highlights: null, guild_suppress_everyone: null, guild_scheduled_events_muted: null };
      let guild_flags = obj.flags;
      if (guild_flags == null) {
        guild_flags = guild_message_notification_settings.guild_flags;
      }
      obj2.guild_flags = guild_flags;
      let guild_is_muted = obj.muted;
      if (guild_is_muted == null) {
        guild_is_muted = guild_message_notification_settings.guild_is_muted;
      }
      obj2.guild_is_muted = guild_is_muted;
      obj2.guild_message_notification_settings = guild_message_notification_settings;
      let guild_suppress_roles = obj.suppress_roles;
      if (guild_suppress_roles == null) {
        guild_suppress_roles = guild_message_notification_settings.guild_suppress_roles;
      }
      obj2.guild_suppress_roles = guild_suppress_roles;
      let guild_receive_mobile_push = obj.mobile_push;
      if (guild_receive_mobile_push == null) {
        guild_receive_mobile_push = guild_message_notification_settings.guild_receive_mobile_push;
      }
      obj2.guild_receive_mobile_push = guild_receive_mobile_push;
      let guild_notify_highlights = obj.notify_highlights;
      if (guild_notify_highlights == null) {
        guild_notify_highlights = guild_message_notification_settings.guild_notify_highlights;
      }
      obj2.guild_notify_highlights = guild_notify_highlights;
      let guild_suppress_everyone = obj.suppress_everyone;
      if (guild_suppress_everyone == null) {
        guild_suppress_everyone = guild_message_notification_settings.guild_suppress_everyone;
      }
      obj2.guild_suppress_everyone = guild_suppress_everyone;
      let guild_scheduled_events_muted = obj.mute_scheduled_events;
      if (guild_scheduled_events_muted == null) {
        guild_scheduled_events_muted = guild_message_notification_settings.guild_scheduled_events_muted;
      }
      obj2.guild_scheduled_events_muted = guild_scheduled_events_muted;
      return obj2;
    }
    guild_muted_until = guild_message_notification_settings.guild_muted_until;
  }
  const computeResult = compute(currentGuildSettings);
  const muteConfig = UserGuildSettingsStore.getMuteConfig(guild_id);
  let obj2 = { guild_suppress_everyone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guild_id), guild_suppress_roles: UserGuildSettingsStore.isSuppressRolesEnabled(guild_id), guild_scheduled_events_muted: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guild_id), guild_is_muted: UserGuildSettingsStore.isMuted(guild_id), guild_muted_until: null, guild_receive_mobile_push: null, guild_message_notification_settings: null, guild_notify_highlights: null, guild_flags: null };
  let time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      let _Date = Date;
      let date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
  obj2.guild_muted_until = time;
  obj2.guild_receive_mobile_push = UserGuildSettingsStore.isMobilePushEnabled(guild_id);
  obj2.guild_message_notification_settings = frozen[UserGuildSettingsStore.getMessageNotifications(UserGuildSettingsStore, guild_id)];
  obj2.guild_notify_highlights = UserGuildSettingsStore.getNotifyHighlights(guild_id);
  obj2.guild_flags = UserGuildSettingsStore.getGuildFlags(guild_id);
  const computeResult1 = compute(obj2, muteSettings);
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
  const isMutedResult = UserGuildSettingsStore.isMuted(guild_id);
  const tmp10 = num2 ^ num;
  const removeFlagsResult = FlagUtils.removeFlags(tmp10, constants4.OPT_IN_CHANNELS_OFF, constants4.OPT_IN_CHANNELS_ON);
  const obj3 = {};
  const merged = Object.assign(computeResult1);
  const merged1 = Object.assign(LastMentionTimestampStore.getStats(guild_id));
  obj3.location = location;
  obj3.guild_id = guild_id;
  obj3.update_type = constants2.GUILD;
  obj3.label = label;
  let guild_flags;
  if (computeResult.guild_flags !== computeResult1.guild_flags) {
    guild_flags = computeResult.guild_flags;
  }
  obj3.guild_flags_old = guild_flags;
  let guild_is_muted;
  if (computeResult.guild_is_muted !== computeResult1.guild_is_muted) {
    guild_is_muted = computeResult.guild_is_muted;
  }
  obj3.guild_is_muted_old = guild_is_muted;
  let guild_suppress_roles;
  if (computeResult.guild_suppress_roles !== computeResult1.guild_suppress_roles) {
    guild_suppress_roles = computeResult.guild_suppress_roles;
  }
  obj3.guild_suppress_roles_old = guild_suppress_roles;
  let prop;
  if (computeResult.guild_notify_highlights !== computeResult1.guild_notify_highlights) {
    prop = computeResult.guild_notify_highlights;
  }
  obj3.guild_notify_highlights_old = prop;
  let prop1;
  if (computeResult.guild_suppress_everyone !== computeResult1.guild_suppress_everyone) {
    prop1 = computeResult.guild_suppress_everyone;
  }
  obj3.guild_suppress_everyone_old = prop1;
  let prop2;
  if (computeResult.guild_receive_mobile_push !== computeResult1.guild_receive_mobile_push) {
    prop2 = computeResult.guild_receive_mobile_push;
  }
  obj3.guild_receive_mobile_push_old = prop2;
  let prop3;
  if (computeResult.guild_scheduled_events_muted !== computeResult1.guild_scheduled_events_muted) {
    prop3 = computeResult.guild_scheduled_events_muted;
  }
  obj3.guild_scheduled_events_muted_old = prop3;
  let prop4;
  if (computeResult.guild_message_notification_settings !== computeResult1.guild_message_notification_settings) {
    prop4 = computeResult.guild_message_notification_settings;
  }
  obj3.guild_message_notification_settings_old = prop4;
  obj3.is_opt_in_only_change = 0 === removeFlagsResult;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.NOTIFICATION_SETTINGS_UPDATED, obj3);
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
  function compute(previous) {
    let obj = change;
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
    const obj2 = { channel_is_muted: muted, channel_is_overridden: null, channel_flags: null, channel_message_notification_settings: null, channel_muted_until: null };
    let tmp3 = null;
    if (null != guildId) {
      tmp3 = true === muted || null != channel_message_notification_settings;
      const tmp4 = true === muted || null != channel_message_notification_settings;
    }
    obj2.channel_is_overridden = tmp3;
    let flags = obj.flags;
    if (flags == null) {
      let channel_flags;
      if (previous != null) {
        channel_flags = previous.channel_flags;
      }
      flags = channel_flags;
    }
    obj2.channel_flags = flags;
    obj2.channel_message_notification_settings = channel_message_notification_settings;
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
    obj2.channel_muted_until = time;
    return obj2;
  }
  ({ applicationId, change, label, location: _location } = updateType);
  const computeResult = compute(updateType.previous);
  const channelMuteConfig = UserGuildSettingsStore.getChannelMuteConfig(guildId, channelId);
  let obj2 = { channel_is_muted: UserGuildSettingsStore.isChannelMuted(guildId, channelId), channel_muted_until: null, channel_message_notification_settings: null, channel_flags: null };
  let time = null;
  if (null != channelMuteConfig) {
    time = null;
    if (null != channelMuteConfig.end_time) {
      let _Date = Date;
      let date = new Date(channelMuteConfig.end_time);
      time = date.getTime();
    }
  }
  obj2.channel_muted_until = time;
  obj2.channel_message_notification_settings = frozen[UserGuildSettingsStore.getChannelMessageNotifications(UserGuildSettingsStore, guildId, channelId)];
  obj2.channel_flags = UserGuildSettingsStore.getChannelIdFlags(guildId, channelId);
  const computeResult1 = compute(obj2, change);
  const channel = ChannelStore.getChannel(channelId);
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
  const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channelId);
  const tmp12 = num2 ^ num;
  const obj4 = guildId(1385);
  const lastMessage = MessageStore.getLastMessage(channelId);
  let type;
  if (lastMessage != null) {
    type = lastMessage.type;
  }
  if (type == null) {
    type = null;
  }
  const removeFlagsResult = guildId(1385).removeFlags(tmp12, constants3.FAVORITED, constants3.OPT_IN_ENABLED);
  const obj3 = {};
  const merged = Object.assign(computeResult1);
  const merged1 = Object.assign(LastMentionTimestampStore.getStats(guildId));
  obj3.location = _location;
  obj3.guild_id = guildId;
  obj3.channel_id = channelId;
  obj3.update_type = CHANNEL;
  obj3.label = label;
  let parent_id = null;
  if (null != channel) {
    parent_id = channel.parent_id;
  }
  obj3.parent_id = parent_id;
  let channel_flags;
  if (computeResult.channel_flags !== computeResult1.channel_flags) {
    channel_flags = computeResult.channel_flags;
  }
  obj3.channel_flags_old = channel_flags;
  let channel_is_muted;
  if (computeResult.channel_is_muted !== computeResult1.channel_is_muted) {
    channel_is_muted = computeResult.channel_is_muted;
  }
  obj3.channel_is_muted_old = channel_is_muted;
  let channel_muted_until;
  if (computeResult.channel_muted_until !== computeResult1.channel_muted_until) {
    channel_muted_until = computeResult.channel_muted_until;
  }
  obj3.channel_muted_until_old = channel_muted_until;
  let prop;
  if (computeResult.channel_is_overridden !== computeResult1.channel_is_overridden) {
    prop = computeResult.channel_is_overridden;
  }
  obj3.channel_is_overridden_old = prop;
  let prop1;
  if (computeResult.channel_message_notification_settings !== computeResult1.channel_message_notification_settings) {
    prop1 = computeResult.channel_message_notification_settings;
  }
  obj3.channel_message_notification_settings_old = prop1;
  obj3.is_opt_in_only_change = 0 === removeFlagsResult;
  obj3.last_message_type = type;
  obj3.application_id = applicationId;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.NOTIFICATION_SETTINGS_UPDATED, obj3);
};
export const getCurrentGuildSettings = function getCurrentGuildSettings(guildId) {
  const muteConfig = UserGuildSettingsStore.getMuteConfig(guildId);
  const obj2 = { guild_suppress_everyone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId), guild_suppress_roles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId), guild_scheduled_events_muted: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId), guild_is_muted: UserGuildSettingsStore.isMuted(guildId), guild_muted_until: null, guild_receive_mobile_push: null, guild_message_notification_settings: null, guild_notify_highlights: null, guild_flags: null };
  let time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
  obj2.guild_muted_until = time;
  obj2.guild_receive_mobile_push = UserGuildSettingsStore.isMobilePushEnabled(guildId);
  obj2.guild_message_notification_settings = frozen[UserGuildSettingsStore.getMessageNotifications(UserGuildSettingsStore, guildId)];
  obj2.guild_notify_highlights = UserGuildSettingsStore.getNotifyHighlights(guildId);
  obj2.guild_flags = UserGuildSettingsStore.getGuildFlags(guildId);
  return obj2;
};
export const getManyCurrentGuildSettings = function getManyCurrentGuildSettings(arr) {
  const map = new Map();
  const item = arr.forEach((item) => {
    const muteConfig = UserGuildSettingsStore.getMuteConfig(item);
    const obj2 = { guild_suppress_everyone: UserGuildSettingsStore.isSuppressEveryoneEnabled(item), guild_suppress_roles: UserGuildSettingsStore.isSuppressRolesEnabled(item), guild_scheduled_events_muted: UserGuildSettingsStore.isMuteScheduledEventsEnabled(item), guild_is_muted: UserGuildSettingsStore.isMuted(item), guild_muted_until: null, guild_receive_mobile_push: null, guild_message_notification_settings: null, guild_notify_highlights: null, guild_flags: null };
    let time = null;
    if (null != muteConfig) {
      time = null;
      if (null != muteConfig.end_time) {
        const _Date = Date;
        const date = new Date(muteConfig.end_time);
        time = date.getTime();
      }
    }
    obj2.guild_muted_until = time;
    obj2.guild_receive_mobile_push = UserGuildSettingsStore.isMobilePushEnabled(item);
    obj2.guild_message_notification_settings = frozen[UserGuildSettingsStore.getMessageNotifications(UserGuildSettingsStore, item)];
    obj2.guild_notify_highlights = UserGuildSettingsStore.getNotifyHighlights(item);
    obj2.guild_flags = UserGuildSettingsStore.getGuildFlags(item);
    return map.set(item, obj2);
  });
  return map;
};
export const getCurrentChannelSettings = function getCurrentChannelSettings(guildId, parent_id) {
  const channelMuteConfig = UserGuildSettingsStore.getChannelMuteConfig(guildId, parent_id);
  const obj2 = { channel_is_muted: UserGuildSettingsStore.isChannelMuted(guildId, parent_id), channel_muted_until: null, channel_message_notification_settings: null, channel_flags: null };
  let time = null;
  if (null != channelMuteConfig) {
    time = null;
    if (null != channelMuteConfig.end_time) {
      const _Date = Date;
      const date = new Date(channelMuteConfig.end_time);
      time = date.getTime();
    }
  }
  obj2.channel_muted_until = time;
  obj2.channel_message_notification_settings = frozen[UserGuildSettingsStore.getChannelMessageNotifications(UserGuildSettingsStore, guildId, parent_id)];
  obj2.channel_flags = UserGuildSettingsStore.getChannelIdFlags(guildId, parent_id);
  return obj2;
};
export const getManyCurrentChannelSettings = function getManyCurrentChannelSettings(guildId, keys) {
  closure_0 = guildId;
  const map = new Map();
  const item = keys.forEach((item) => {
    const channelMuteConfig = UserGuildSettingsStore.getChannelMuteConfig(closure_0, item);
    const obj2 = { channel_is_muted: UserGuildSettingsStore.isChannelMuted(closure_0, item), channel_muted_until: null, channel_message_notification_settings: null, channel_flags: null };
    let time = null;
    if (null != channelMuteConfig) {
      time = null;
      if (null != channelMuteConfig.end_time) {
        const _Date = Date;
        const date = new Date(channelMuteConfig.end_time);
        time = date.getTime();
      }
    }
    obj2.channel_muted_until = time;
    obj2.channel_message_notification_settings = frozen[UserGuildSettingsStore.getChannelMessageNotifications(UserGuildSettingsStore, closure_0, item)];
    obj2.channel_flags = UserGuildSettingsStore.getChannelIdFlags(closure_0, item);
    return map.set(item, obj2);
  });
  return map;
};
export const trackAccountNotificationSettingUpdated = function trackAccountNotificationSettingUpdated(quietMode, quietMode2) {
  AnalyticsUtilsDefault.track(constants.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants2.ACCOUNT, quiet_mode_enabled: quietMode.quietMode, quiet_mode_enabled_old: quietMode2.quietMode });
};