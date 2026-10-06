// === Module 6616: NotificationSettingsUtils ===

// Module 6616 (NotificationSettingsUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import NotificationConstants from "NotificationConstants" /* 4528 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import LastMentionTimestampStore from "LastMentionTimestampStore" /* 6617 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5116 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import size from "module_2" /* 2 */;

let map, set;

let UserNotificationSettings;
let closure_12;
let metroImportDefault;
let unpackModuleId;
({ AnalyticEvents: metroImportDefault, UserNotificationSettings } = Constants);
const constants2 = NotificationConstants.NotificationSettingsUpdateType;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ ChannelNotificationSettingsFlags: unpackModuleId, GuildNotificationSettingsFlags: closure_12 } = UserSettingsConstants);
const NotificationLabels = { ForumThreadsCreatedOn: "enabled forum thread created notifs", ForumThreadsCreatedOff: "disabled forum thread created notifs", SuppressEveryoneOn: "enabled suppress everyone", SuppressEveryoneOff: "disabled suppress everyone", SuppressRolesOn: "enabled suppress roles", SuppressRolesOff: "disabled suppress roles", HighlightsOn: "enabled highlights", HighlightsOff: "disabled highlights", MobilePushOn: "enabled mobile push notifications", MobilePushOff: "disabled mobile push notifications", UnreadsAll: "unreads set to all messages", UnreadsMentions: "unreads set to mentions", UnreadsDefault: "unreads set to the default", NotificationsAll: "notifications set to all messages", NotificationsMentions: "notifications set to mentions", NotificationsNothing: "notifications set to nothing", NotificationsDefault: "notifications set to the default", PresetAll: "notification preset set to all messages", PresetHybrid: "notification preset set to hybrid", PresetMentions: "notification preset set to mentions", PresetNothing: "notification preset set to nothing", PresetDefault: "notification preset set to the default", OptedIn: "opted in to entity", OptedOut: "opted out from entity", Favorited: "favorited", UnFavorited: "unfavorited", Muted: "muted", Unmuted: "unmuted", MutedScheduledEvents: "muted scheduled events", UnmutedScheduledEvents: "unmuted scheduled events", OverrideCreated: "channel override created", OverrideDeleted: "channel override deleted", AnnouncementAutoEnable: "announcement channels auto set to all messages" };
let obj2 = {
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
  muted(isModerator) {
    return isModerator ? obj.Muted : obj.Unmuted;
  },
  mutedEvents(arg0) {
    return arg0 ? obj.MutedScheduledEvents : obj.UnmutedScheduledEvents;
  },
  unreads(toggleExpandedHistory) {
    let UnreadsDefault;
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      UnreadsDefault = obj.UnreadsAll;
    } else if (toggleExpandedHistory === tmp.ONLY_MENTIONS) {
      UnreadsDefault = obj.UnreadsMentions;
    } else {
      UnreadsDefault = obj.UnreadsDefault;
    }
    return UnreadsDefault;
  },
  notifications(message_notifications) {
    let NotificationsDefault;
    if (message_notifications === UserNotificationSettings.ALL_MESSAGES) {
      NotificationsDefault = obj.NotificationsAll;
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
const frozen = Object.freeze({ [UserNotificationSettings.ALL_MESSAGES]: "All", [UserNotificationSettings.ONLY_MENTIONS]: "Mentions", [UserNotificationSettings.NO_MESSAGES]: "Nothing", [UserNotificationSettings.NULL]: null });
const result = size.fileFinishedImporting("utils/NotificationSettingsUtils.tsx");

export { NotificationLabels };
export const NotificationLabel = obj2;
export const MessageNotificationSettings = frozen;
export const trackGuildNotificationSettingsUpdate = function trackGuildNotificationSettingsUpdate(guild_id, muteSettings, currentGuildSettings, label, location) {
  let guild_flags;
  let guild_is_muted;
  let guild_suppress_roles;
  let prop;
  let prop1;
  let prop2;
  let prop3;
  let prop4;
  let time;
  function compute(guild_message_notification_settings) {
    let guild_flags;
    let guild_is_muted;
    let guild_notify_highlights;
    let guild_receive_mobile_push;
    let guild_scheduled_events_muted;
    let guild_suppress_everyone;
    let guild_suppress_roles;
    let obj = muteSettings;
    if (muteSettings === undefined) {
      obj = {};
    }
    if (null != obj.mute_config) {
      let guild_muted_until;
      if (null != obj.mute_config.end_time) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(obj.mute_config.end_time);
        guild_muted_until = date.getTime();
      }
      if (null != obj.message_notifications) {
        guild_message_notification_settings = frozen[obj.message_notifications];
      } else {
        guild_message_notification_settings = guild_message_notification_settings.guild_message_notification_settings;
      }
      const obj2 = { guild_muted_until, guild_flags, guild_is_muted, guild_message_notification_settings, guild_suppress_roles, guild_receive_mobile_push, guild_notify_highlights, guild_suppress_everyone, guild_scheduled_events_muted };
      guild_flags = obj.flags;
      if (guild_flags == null) {
        guild_flags = guild_message_notification_settings.guild_flags;
      }
      guild_is_muted = obj.muted;
      if (guild_is_muted == null) {
        guild_is_muted = guild_message_notification_settings.guild_is_muted;
      }
      guild_suppress_roles = obj.suppress_roles;
      if (guild_suppress_roles == null) {
        guild_suppress_roles = guild_message_notification_settings.guild_suppress_roles;
      }
      guild_receive_mobile_push = obj.mobile_push;
      if (guild_receive_mobile_push == null) {
        guild_receive_mobile_push = guild_message_notification_settings.guild_receive_mobile_push;
      }
      guild_notify_highlights = obj.notify_highlights;
      if (guild_notify_highlights == null) {
        guild_notify_highlights = guild_message_notification_settings.guild_notify_highlights;
      }
      guild_suppress_everyone = obj.suppress_everyone;
      if (guild_suppress_everyone == null) {
        guild_suppress_everyone = guild_message_notification_settings.guild_suppress_everyone;
      }
      guild_scheduled_events_muted = obj.mute_scheduled_events;
      if (guild_scheduled_events_muted == null) {
        guild_scheduled_events_muted = guild_message_notification_settings.guild_scheduled_events_muted;
      }
      return obj2;
    }
    guild_muted_until = guild_message_notification_settings.guild_muted_until;
  }
  const computeResult = compute(currentGuildSettings);
  const isMutedResult = UserGuildSettingsStore.isMuted(guild_id);
  const muteConfig = UserGuildSettingsStore.getMuteConfig(guild_id);
  let obj2 = { guild_suppress_everyone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guild_id), guild_suppress_roles: UserGuildSettingsStore.isSuppressRolesEnabled(guild_id), guild_scheduled_events_muted: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guild_id), guild_is_muted: isMutedResult, guild_muted_until: time, guild_receive_mobile_push: UserGuildSettingsStore.isMobilePushEnabled(guild_id), guild_message_notification_settings: frozen[UserGuildSettingsStore.getMessageNotifications(UserGuildSettingsStore, guild_id)], guild_notify_highlights: UserGuildSettingsStore.getNotifyHighlights(guild_id), guild_flags: UserGuildSettingsStore.getGuildFlags(guild_id) };
  time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      let _Date = Date;
      let self = this;
      let self2 = this;
      let date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
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
  const tmp8 = num2 ^ num;
  const obj4 = FlagUtils;
  const obj3 = { location, guild_id, update_type: constants2.GUILD, label, guild_flags_old: guild_flags, guild_is_muted_old: guild_is_muted, guild_suppress_roles_old: guild_suppress_roles, guild_notify_highlights_old: prop, guild_suppress_everyone_old: prop1, guild_receive_mobile_push_old: prop2, guild_scheduled_events_muted_old: prop3, guild_message_notification_settings_old: prop4, is_opt_in_only_change: 0 === obj4.removeFlags(tmp8, constants4.OPT_IN_CHANNELS_OFF, constants4.OPT_IN_CHANNELS_ON) };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const NOTIFICATION_SETTINGS_UPDATED = metroImportDefault.NOTIFICATION_SETTINGS_UPDATED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(computeResult1);
  const merged1 = Object.assign(LastMentionTimestampStore.getStats(guild_id));
  guild_flags = undefined;
  if (computeResult.guild_flags !== computeResult1.guild_flags) {
    guild_flags = computeResult.guild_flags;
  }
  guild_is_muted = undefined;
  if (computeResult.guild_is_muted !== computeResult1.guild_is_muted) {
    guild_is_muted = computeResult.guild_is_muted;
  }
  guild_suppress_roles = undefined;
  if (computeResult.guild_suppress_roles !== computeResult1.guild_suppress_roles) {
    guild_suppress_roles = computeResult.guild_suppress_roles;
  }
  prop = undefined;
  if (computeResult.guild_notify_highlights !== computeResult1.guild_notify_highlights) {
    prop = computeResult.guild_notify_highlights;
  }
  prop1 = undefined;
  if (computeResult.guild_suppress_everyone !== computeResult1.guild_suppress_everyone) {
    prop1 = computeResult.guild_suppress_everyone;
  }
  prop2 = undefined;
  if (computeResult.guild_receive_mobile_push !== computeResult1.guild_receive_mobile_push) {
    prop2 = computeResult.guild_receive_mobile_push;
  }
  prop3 = undefined;
  if (computeResult.guild_scheduled_events_muted !== computeResult1.guild_scheduled_events_muted) {
    prop3 = computeResult.guild_scheduled_events_muted;
  }
  prop4 = undefined;
  if (computeResult.guild_message_notification_settings !== computeResult1.guild_message_notification_settings) {
    prop4 = computeResult.guild_message_notification_settings;
  }
  trackWithMetadata(NOTIFICATION_SETTINGS_UPDATED, obj3);
};
export const muteConfigToTimestamp = function muteConfigToTimestamp(muteConfig) {
  let time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
  return time;
};
export const trackChannelNotificationSettingsUpdate = function trackChannelNotificationSettingsUpdate(updateType) {
  let _location;
  let applicationId;
  let change;
  let channel_flags;
  let channel_is_muted;
  let channel_muted_until;
  let label;
  let parent_id;
  let prop;
  let prop1;
  let time;
  let CHANNEL = updateType.updateType;
  if (CHANNEL === undefined) {
    CHANNEL = constants2.CHANNEL;
  }
  const guildId = updateType.guildId;
  const channelId = updateType.channelId;
  function compute(previous) {
    let channel_message_notification_settings;
    let flags;
    let time;
    let tmp3;
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
      channel_message_notification_settings = frozen[obj.message_notifications];
    } else if (previous != null) {
      channel_message_notification_settings = previous.channel_message_notification_settings;
    }
    const obj2 = { channel_is_muted: muted, channel_is_overridden: tmp3, channel_flags: flags, channel_message_notification_settings, channel_muted_until: time };
    tmp3 = null;
    if (null != guildId) {
      tmp3 = true === muted || null != channel_message_notification_settings;
    }
    flags = obj.flags;
    if (flags == null) {
      let channel_flags;
      if (previous != null) {
        channel_flags = previous.channel_flags;
      }
      flags = channel_flags;
    }
    const mute_config = obj.mute_config;
    time = null;
    if (null != mute_config) {
      time = null;
      if (null != mute_config.end_time) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(mute_config.end_time);
        time = date.getTime();
      }
    }
    return obj2;
  }
  ({ applicationId, change, label, location: _location } = updateType);
  const computeResult = compute(updateType.previous);
  const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channelId);
  const channelMuteConfig = UserGuildSettingsStore.getChannelMuteConfig(guildId, channelId);
  let obj2 = { channel_is_muted: isChannelMutedResult, channel_muted_until: time, channel_message_notification_settings: frozen[UserGuildSettingsStore.getChannelMessageNotifications(UserGuildSettingsStore, guildId, channelId)], channel_flags: UserGuildSettingsStore.getChannelIdFlags(guildId, channelId) };
  time = null;
  if (null != channelMuteConfig) {
    time = null;
    if (null != channelMuteConfig.end_time) {
      let _Date = Date;
      let self = this;
      let self2 = this;
      let date = new Date(channelMuteConfig.end_time);
      time = date.getTime();
    }
  }
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
  const tmp10 = num2 ^ num;
  const obj4 = guildId(1390);
  const removeFlagsResult = obj4.removeFlags(tmp10, constants3.FAVORITED, constants3.OPT_IN_ENABLED);
  const lastMessage = MessageStore.getLastMessage(channelId);
  let type;
  if (lastMessage != null) {
    type = lastMessage.type;
  }
  if (type == null) {
    type = null;
  }
  const obj3 = { location: _location, guild_id: guildId, channel_id: channelId, update_type: CHANNEL, label, parent_id, channel_flags_old: channel_flags, channel_is_muted_old: channel_is_muted, channel_muted_until_old: channel_muted_until, channel_is_overridden_old: prop, channel_message_notification_settings_old: prop1, is_opt_in_only_change: 0 === removeFlagsResult, last_message_type: type, application_id: applicationId };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const NOTIFICATION_SETTINGS_UPDATED = constants.NOTIFICATION_SETTINGS_UPDATED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(computeResult1);
  const merged1 = Object.assign(LastMentionTimestampStore.getStats(guildId));
  parent_id = null;
  if (null != channel) {
    parent_id = channel.parent_id;
  }
  channel_flags = undefined;
  if (computeResult.channel_flags !== computeResult1.channel_flags) {
    channel_flags = computeResult.channel_flags;
  }
  channel_is_muted = undefined;
  if (computeResult.channel_is_muted !== computeResult1.channel_is_muted) {
    channel_is_muted = computeResult.channel_is_muted;
  }
  channel_muted_until = undefined;
  if (computeResult.channel_muted_until !== computeResult1.channel_muted_until) {
    channel_muted_until = computeResult.channel_muted_until;
  }
  prop = undefined;
  if (computeResult.channel_is_overridden !== computeResult1.channel_is_overridden) {
    prop = computeResult.channel_is_overridden;
  }
  prop1 = undefined;
  if (computeResult.channel_message_notification_settings !== computeResult1.channel_message_notification_settings) {
    prop1 = computeResult.channel_message_notification_settings;
  }
  trackWithMetadata(NOTIFICATION_SETTINGS_UPDATED, obj3);
};
export const getCurrentGuildSettings = function getCurrentGuildSettings(guildId) {
  let time;
  const isMutedResult = UserGuildSettingsStore.isMuted(guildId);
  const muteConfig = UserGuildSettingsStore.getMuteConfig(guildId);
  const obj2 = { guild_suppress_everyone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId), guild_suppress_roles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId), guild_scheduled_events_muted: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId), guild_is_muted: isMutedResult, guild_muted_until: time, guild_receive_mobile_push: UserGuildSettingsStore.isMobilePushEnabled(guildId), guild_message_notification_settings: frozen[UserGuildSettingsStore.getMessageNotifications(UserGuildSettingsStore, guildId)], guild_notify_highlights: UserGuildSettingsStore.getNotifyHighlights(guildId), guild_flags: UserGuildSettingsStore.getGuildFlags(guildId) };
  time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
  return obj2;
};
export const getManyCurrentGuildSettings = function getManyCurrentGuildSettings(arr) {
  map = new Map();
  const item = arr.forEach(function(item) {
    let time;
    set = map.set;
    const isMutedResult = UserGuildSettingsStore.isMuted(item);
    const muteConfig = UserGuildSettingsStore.getMuteConfig(item);
    const obj2 = { guild_suppress_everyone: UserGuildSettingsStore.isSuppressEveryoneEnabled(item), guild_suppress_roles: UserGuildSettingsStore.isSuppressRolesEnabled(item), guild_scheduled_events_muted: UserGuildSettingsStore.isMuteScheduledEventsEnabled(item), guild_is_muted: isMutedResult, guild_muted_until: time, guild_receive_mobile_push: UserGuildSettingsStore.isMobilePushEnabled(item), guild_message_notification_settings: frozen[UserGuildSettingsStore.getMessageNotifications(UserGuildSettingsStore, item)], guild_notify_highlights: UserGuildSettingsStore.getNotifyHighlights(item), guild_flags: UserGuildSettingsStore.getGuildFlags(item) };
    time = null;
    if (null != muteConfig) {
      time = null;
      if (null != muteConfig.end_time) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(muteConfig.end_time);
        time = date.getTime();
      }
    }
    return set(item, obj2);
  });
  return map;
};
export const getCurrentChannelSettings = function getCurrentChannelSettings(guildId, channelId) {
  let time;
  const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channelId);
  const channelMuteConfig = UserGuildSettingsStore.getChannelMuteConfig(guildId, channelId);
  const obj2 = { channel_is_muted: isChannelMutedResult, channel_muted_until: time, channel_message_notification_settings: frozen[UserGuildSettingsStore.getChannelMessageNotifications(UserGuildSettingsStore, guildId, channelId)], channel_flags: UserGuildSettingsStore.getChannelIdFlags(guildId, channelId) };
  time = null;
  if (null != channelMuteConfig) {
    time = null;
    if (null != channelMuteConfig.end_time) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(channelMuteConfig.end_time);
      time = date.getTime();
    }
  }
  return obj2;
};
export const getManyCurrentChannelSettings = function getManyCurrentChannelSettings(guildId, keys) {
  let closure_0 = guildId;
  map = new Map();
  const item = keys.forEach(function(item) {
    let time;
    set = map.set;
    const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, item);
    const channelMuteConfig = UserGuildSettingsStore.getChannelMuteConfig(guildId, item);
    const obj2 = { channel_is_muted: isChannelMutedResult, channel_muted_until: time, channel_message_notification_settings: frozen[UserGuildSettingsStore.getChannelMessageNotifications(UserGuildSettingsStore, guildId, item)], channel_flags: UserGuildSettingsStore.getChannelIdFlags(guildId, item) };
    time = null;
    if (null != channelMuteConfig) {
      time = null;
      if (null != channelMuteConfig.end_time) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(channelMuteConfig.end_time);
        time = date.getTime();
      }
    }
    return set(item, obj2);
  });
  return map;
};
export const trackAccountNotificationSettingUpdated = function trackAccountNotificationSettingUpdated(quietMode, quietMode2) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants2.ACCOUNT, quiet_mode_enabled: quietMode.quietMode, quiet_mode_enabled_old: quietMode2.quietMode };
  obj.track(metroImportDefault.NOTIFICATION_SETTINGS_UPDATED, obj2);
};