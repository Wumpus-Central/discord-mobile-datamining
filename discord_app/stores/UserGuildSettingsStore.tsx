// === Module 4451: updateUserGuildSettingsInternal ===

// Module 4451 (updateUserGuildSettingsInternal)
import initialize from "initialize";
import storeThread from "storeThread";
import createChannelRecord from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { AccountNotificationFlags } from "AccountNotificationFlags";
import { UnreadSetting } from "ReadStateTypes";
import MAX_FAVORITES from "MAX_FAVORITES";
import { PersistedStore } from "initialize";
import set from "createChannelRecord";

let closure_14;
let closure_15;
let closure_6;
let error;
const require = arg1;
function updateUserGuildSettingsInternal(id, channel_overrides) {
  channel_overrides = undefined;
  if (dependencyMap[id] != null) {
    channel_overrides = tmp4.channel_overrides;
  }
  if (channel_overrides == null) {
    channel_overrides = {};
  }
  let channel_overrides1 = channel_overrides.channel_overrides;
  if (channel_overrides1 === undefined) {
    channel_overrides1 = {};
  }
  let keyByResult = channel_overrides1;
  if (channel_overrides1 instanceof Array) {
    keyByResult = importDefault(12).keyBy(channel_overrides1, "channel_id");
    const obj3 = importDefault(12);
  }
  const guild = store2.getGuild(id);
  if (null != guild) {
    let ALL_MESSAGES = guild.defaultMessageNotifications;
  } else {
    ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
  }
  let obj = {};
  let merged = Object.assign(obj[ALL_MESSAGES]);
  let merged1 = Object.assign(tmp4);
  let merged2 = Object.assign(channel_overrides);
  obj.channel_overrides = keyByResult;
  tmp5.clearTimer(id);
  const item = importDefault(12).forEach(channel_overrides, (channel_id) => {
    closure_22.clearTimer(channel_id.channel_id);
  });
  let closure_0 = id;
  if (true === obj.muted) {
    if (obj5.setTimer(id, obj.mute_config, () => {
      let channel_overrides;
      if (table[set] != null) {
        channel_overrides = tmp2.channel_overrides;
      }
      if (channel_overrides == null) {
        channel_overrides = {};
      }
      const merged = Object.assign({ muted: false });
      outer1_30(set, { channel_overrides });
      outer1_1(outer1_3[13]).dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: set });
    })) {
      obj.muted = false;
    }
  }
  let tmp14Result = tmp14(12);
  const item1 = tmp14Result.forEach(obj.channel_overrides, (muted) => {
    let closure_0 = muted;
    if (true === muted.muted) {
      if (outer1_22.setTimer(muted.channel_id, muted.mute_config, () => {
        const channel_id = muted.channel_id;
        let obj = { channel_id, muted: false };
        let channel_overrides;
        if (outer2_16[muted] != null) {
          channel_overrides = tmp3.channel_overrides;
        }
        if (channel_overrides == null) {
          channel_overrides = {};
        }
        obj = { muted: false };
        const merged = Object.assign(channel_overrides[channel_id]);
        const merged1 = Object.assign(obj);
        obj = { [channel_id]: obj };
        let tmp8 = obj;
        if (null != outer2_16[muted]) {
          let channel_overrides1;
          if (tmp6 != null) {
            channel_overrides1 = tmp6.channel_overrides;
          }
          if (channel_overrides1 == null) {
            channel_overrides1 = {};
          }
          const obj1 = {};
          const merged2 = Object.assign(channel_overrides1);
          const merged3 = Object.assign(obj);
          tmp8 = obj1;
        }
        outer2_30(muted, { channel_overrides: tmp8 });
        outer2_1(outer2_3[13]).dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: muted, channelId: muted.channel_id });
      })) {
        muted.muted = false;
      }
    }
  });
  dependencyMap[id] = obj;
  let valueResult = null;
  if (null != dependencyMap[id].channel_overrides) {
    const found = tmp14(12)(tmp19.channel_overrides).filter((mute_config) => callback(table[10]).computeIsMuted(mute_config));
    const arr3 = tmp14(12)(tmp19.channel_overrides);
    valueResult = found.map((channel_id) => channel_id.channel_id).value();
    const iter = found.map((channel_id) => channel_id.channel_id);
  }
  const arr = importDefault(12);
  obj5 = tmp5;
  const tmp18 = closure_24;
  tmp18[id] = new Set(valueResult);
  tmp14Result = tmp14(12);
  const found1 = tmp14Result.filter(obj.channel_overrides, (flags) => {
    let num = flags.flags;
    if (num == null) {
      num = 0;
    }
    return callback(table[12]).hasFlag(num, constants.OPT_IN_ENABLED);
  });
  const set = new Set(valueResult);
  dependencyMap2[id] = new Set(found1.map((channel_id) => channel_id.channel_id));
  if (null != id) {
    const _Set = Set;
    const set2 = new Set(dependencyMap2[id]);
    obj = dependencyMap3[id];
    if (obj == null) {
      obj = {};
    }
    for (const key10101 in obj) {
      let tmp33 = key10101;
      let tmp34 = importAll;
      let tmp35 = dependencyMap;
      let obj8 = importAll(1384);
      let tmp36 = constants;
      if (obj8.hasFlag(obj[key10101].flags, constants.OPT_IN_ENABLED)) {
        let addResult = set2.add(key10101);
        continue;
      } else {
        let deleteResult = set2.delete(key10101);
        continue;
      }
      continue;
    }
    const _Object = Object;
    if (Object.keys(obj).length > 0) {
      closure_29[id] = set2;
    } else {
      delete tmp3[tmp2];
    }
  }
  delete tmp[tmp2];
}
function updateUserGuildChannelSettingsBulk(guildId, channel_overrides) {
  let closure_0 = guildId;
  const importDefault = channel_overrides;
  let obj = {};
  obj = null;
  if (null != guildId) {
    obj = dependencyMap3[guildId];
  }
  if (obj == null) {
    obj = {};
  }
  const keys = importDefault(obj[14]).keys(channel_overrides);
  const item = keys.forEach((channel_id) => {
    const obj = { channel_id, muted: false };
    let channel_overrides;
    if (outer1_16[closure_0] != null) {
      channel_overrides = tmp.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const merged = Object.assign(channel_overrides[channel_id]);
    const merged1 = Object.assign(table[channel_id]);
    obj[channel_id] = obj;
    let num = obj.flags;
    if (num == null) {
      num = 0;
    }
    obj[channel_id] = { flags: num };
  });
  if (null != guildId) {
    obj = {};
    let merged = Object.assign(dependencyMap3[guildId]);
    let merged1 = Object.assign(obj);
    dependencyMap3[guildId] = obj;
  }
  let tmp11 = obj;
  if (null != dependencyMap[guildId]) {
    channel_overrides = undefined;
    if (tmp9 != null) {
      channel_overrides = tmp9.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const obj1 = {};
    const merged2 = Object.assign(channel_overrides);
    const merged3 = Object.assign(obj);
    tmp11 = obj1;
  }
  updateUserGuildSettingsInternal(guildId, { channel_overrides: tmp11 });
}
function handleGuildUpdate() {
  return true;
}
({ THREAD_CHANNEL_TYPES: closure_6, isPrivate: error } = createChannelRecord);
const UserNotificationSettings = ME.UserNotificationSettings;
({ ChannelNotificationSettingsFlags: closure_14, GuildNotificationSettingsFlags: closure_15 } = MAX_FAVORITES);
let closure_16 = {};
let closure_17 = {};
let c18 = false;
let c19 = false;
let closure_20 = { flags: 0 };
let closure_21 = new require("reset")();
let tmp5 = new require("reset")();
let closure_22 = new require("reset")();
let obj = { suppress_everyone: false, suppress_roles: false, mute_scheduled_events: false, mobile_push: true, muted: false, message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: 0, channel_overrides: {}, notify_highlights: ME.HighlightSettings.NULL, hide_muted_channels: false, version: -1, mute_config: null };
obj = {};
obj = {};
let merged = Object.assign(obj);
obj.message_notifications = UserNotificationSettings.ALL_MESSAGES;
obj[UserNotificationSettings.ALL_MESSAGES] = obj;
let obj1 = {};
let merged1 = Object.assign(obj);
obj1.message_notifications = UserNotificationSettings.ONLY_MENTIONS;
obj[UserNotificationSettings.ONLY_MENTIONS] = obj1;
let closure_24 = {};
let closure_25 = {};
let set = new Set();
let set1 = new Set();
let closure_28 = {};
let closure_29 = {};
class UserGuildSettingsStoreClass extends PersistedStore {
}
const prototype = UserGuildSettingsStoreClass.prototype;
prototype["initialize"] = function initialize(useNewNotifications) {
  this.waitFor(ensureGuildLoaded, createGuildRecordFromRust, initialize, storeThread, mergeGuildAvatar);
  if (null != useNewNotifications) {
    let flag = useNewNotifications.useNewNotifications;
    if (flag == null) {
      flag = false;
    }
    if ("userGuildSettings" in useNewNotifications) {
      const userGuildSettings = useNewNotifications.userGuildSettings;
      let prop = useNewNotifications.optedInChannelsByGuild;
      if (prop == null) {
        prop = {};
      }
      let closure_25 = importDefault(12).mapValues(prop, (items) => new Set(items));
      const obj = importDefault(12);
      const tmp2 = importDefault;
      const item = importDefault(12).forEach(userGuildSettings, (channel_overrides) => {
        let valueResult = null;
        if (null != channel_overrides.channel_overrides) {
          const found = callback(table[11])(channel_overrides.channel_overrides).filter((mute_config) => callback(table[10]).computeIsMuted(mute_config));
          const arr = callback(table[11])(channel_overrides.channel_overrides);
          valueResult = found.map((channel_id) => channel_id.channel_id).value();
          const iter = found.map((channel_id) => channel_id.channel_id);
        }
        closure_24[arg1] = new Set(valueResult);
      });
      const tmp2Result = importDefault(12);
    }
  }
};
prototype["getState"] = function getState() {
  return { useNewNotifications: c18 };
};
Object.defineProperty(prototype, "mentionOnAllMessages", {
  get: function mentionOnAllMessages() {
    return c19;
  },
  set: undefined
});
prototype["isSuppressEveryoneEnabled"] = function isSuppressEveryoneEnabled(guildId) {
  if (dependencyMap[guildId] != null) {
    return tmp.suppress_everyone;
  } else {
    const guild = store2.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["isSuppressRolesEnabled"] = function isSuppressRolesEnabled(guildId) {
  if (dependencyMap[guildId] != null) {
    return tmp.suppress_roles;
  } else {
    const guild = store2.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["isMuteScheduledEventsEnabled"] = function isMuteScheduledEventsEnabled(guildId) {
  if (dependencyMap[guildId] != null) {
    return tmp.mute_scheduled_events;
  } else {
    const guild = store2.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["isMobilePushEnabled"] = function isMobilePushEnabled(closure_2) {
  if (dependencyMap[closure_2] != null) {
    return tmp.mobile_push;
  } else {
    const guild = store2.getGuild(closure_2);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["isMuted"] = function isMuted(arg0) {
  if (dependencyMap[arg0] != null) {
    const obj = require(3886) /* reset */;
    return obj.computeIsMuted(tmp);
  } else {
    let guild = store2.getGuild(arg0);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
    guild = obj;
  }
};
prototype["isTemporarilyMuted"] = function isTemporarilyMuted(arg0) {
  if (dependencyMap[arg0] != null) {
    const obj = require(3886) /* reset */;
    return obj.isTemporarilyMuted(tmp);
  } else {
    let guild = store2.getGuild(arg0);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
    guild = obj;
  }
};
prototype["getMuteConfig"] = function getMuteConfig(arg0) {
  if (dependencyMap[arg0] != null) {
    return tmp.mute_config;
  } else {
    const guild = store2.getGuild(arg0);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["getMessageNotifications"] = function getMessageNotifications(guildId) {
  if (dependencyMap[guildId] != null) {
    return tmp.message_notifications;
  } else {
    const guild = store2.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["getChannelOverrides"] = function getChannelOverrides(guild_id) {
  if (dependencyMap[guild_id] != null) {
    let channel_overrides = tmp.channel_overrides;
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    return channel_overrides;
  } else {
    const guild = store2.getGuild(guild_id);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["getNotifyHighlights"] = function getNotifyHighlights(guildId) {
  if (dependencyMap[guildId] != null) {
    return tmp.notify_highlights;
  } else {
    const guild = store2.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["getGuildFlags"] = function getGuildFlags(guildId) {
  if (dependencyMap[guildId] != null) {
    return tmp.flags;
  } else {
    const guild = store2.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["getChannelMessageNotifications"] = function getChannelMessageNotifications(guildId, channelId) {
  const tmp = this.getChannelOverrides(guildId)[channelId];
  if (null != tmp) {
    if (null != tmp.message_notifications) {
      let NULL = tmp.message_notifications;
    }
    return NULL;
  }
  NULL = UserNotificationSettings.NULL;
};
prototype["getChannelMuteConfig"] = function getChannelMuteConfig(guildId, id) {
  const tmp = this.getChannelOverrides(guildId)[id];
  let mute_config = null;
  if (null != tmp) {
    mute_config = tmp.mute_config;
  }
  return mute_config;
};
prototype["getMutedChannels"] = function getMutedChannels(guildId) {
  let tmp = table2[guildId];
  if (tmp == null) {
    tmp = set;
  }
  return tmp;
};
prototype["isChannelMuted"] = function isChannelMuted(guildId, id) {
  const channel = store.getChannel(id);
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const mutedChannels = this.getMutedChannels(guildId);
  return mutedChannels.has(id);
};
prototype["isCategoryMuted"] = function isCategoryMuted(closure_0, id) {
  const channel = store.getChannel(id);
  if (null == channel) {
    return false;
  } else {
    const parent_id = channel.parent_id;
    let hasItem = null != parent_id;
    if (hasItem) {
      const self = this;
      const mutedChannels = this.getMutedChannels(closure_0);
      hasItem = mutedChannels.has(parent_id);
    }
    return hasItem;
  }
};
prototype["resolvedMessageNotifications"] = function resolvedMessageNotifications(channel) {
  const self = this;
  const channelMessageNotifications = this.getChannelMessageNotifications(channel.guild_id, channel.id);
  if (channelMessageNotifications !== UserNotificationSettings.NULL) {
    return channelMessageNotifications;
  } else {
    if (null != channel.parent_id) {
      const channelMessageNotifications1 = self.getChannelMessageNotifications(channel.guild_id, channel.parent_id);
      if (channelMessageNotifications1 !== tmp2.NULL) {
        return channelMessageNotifications1;
      }
    }
    return self.getMessageNotifications(channel.guild_id);
  }
};
prototype["resolveUnreadSetting"] = function resolveUnreadSetting(channel) {
  if (set.has(channel.type)) {
    return UnreadSetting.ALL_MESSAGES;
  } else if (callback(channel.type)) {
    return UnreadSetting.ALL_MESSAGES;
  } else if (c18) {
    const self = this;
    const channelUnreadSetting = this.getChannelUnreadSetting(channel.guild_id, channel.id);
    if (channelUnreadSetting !== UnreadSetting.UNSET) {
      return channelUnreadSetting;
    } else {
      if (null != channel.parent_id) {
        const channelUnreadSetting1 = self.getChannelUnreadSetting(channel.guild_id, channel.parent_id);
        if (channelUnreadSetting1 !== tmp5.UNSET) {
          return channelUnreadSetting1;
        }
      }
      const guildUnreadSetting = self.getGuildUnreadSetting(channel.guild_id);
      if (guildUnreadSetting !== tmp5.UNSET) {
        return guildUnreadSetting;
      } else {
        self.resolvedMessageNotifications(channel) === UserNotificationSettings.ALL_MESSAGES ? tmp5.ALL_MESSAGES : tmp5.ONLY_MENTIONS;
      }
    }
  } else {
    return UnreadSetting.ALL_MESSAGES;
  }
};
prototype["isGuildOrCategoryOrChannelMuted"] = function isGuildOrCategoryOrChannelMuted(guild_id, id) {
  const self = this;
  return this.isMuted(guild_id) || self.isCategoryMuted(guild_id, id) || self.isChannelMuted(guild_id, id);
};
prototype["allowNoMessages"] = function allowNoMessages(channel1) {
  const self = this;
  let result = this.isGuildOrCategoryOrChannelMuted(channel1.guild_id, channel1.id);
  if (!result) {
    result = self.resolvedMessageNotifications(channel1) === UserNotificationSettings.NO_MESSAGES;
  }
  if (!result) {
    result = self.isOptInEnabled(channel1.guild_id) && !self.isChannelRecordOrParentOptedIn(channel1);
    const tmp3 = self.isOptInEnabled(channel1.guild_id) && !self.isChannelRecordOrParentOptedIn(channel1);
  }
  return result;
};
prototype["allowAllMessages"] = function allowAllMessages(channel1) {
  const self = this;
  const result = this.isGuildOrCategoryOrChannelMuted(channel1.guild_id, channel1.id);
  let tmp2 = !result;
  if (!result) {
    tmp2 = self.resolvedMessageNotifications(channel1) === UserNotificationSettings.ALL_MESSAGES;
  }
  if (tmp2) {
    const isOptInEnabledResult = self.isOptInEnabled(channel1.guild_id);
    let result1 = !isOptInEnabledResult;
    if (isOptInEnabledResult) {
      result1 = self.isChannelRecordOrParentOptedIn(channel1);
    }
    tmp2 = result1;
  }
  return tmp2;
};
prototype["isGuildCollapsed"] = function isGuildCollapsed(id) {
  let hide_muted_channels;
  if (dependencyMap[id] != null) {
    hide_muted_channels = tmp.hide_muted_channels;
  }
  return true === hide_muted_channels;
};
prototype["getAllSettings"] = function getAllSettings() {
  return { userGuildSettings: closure_16, mutedChannels: closure_24, optedInChannelsByGuild: closure_25 };
};
prototype["getChannelIdFlags"] = function getChannelIdFlags(closure_0, id) {
  const tmp = this.getChannelOverrides(closure_0)[id];
  let num;
  if (tmp != null) {
    num = tmp.flags;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getChannelFlags"] = function getChannelFlags(guild_id) {
  return this.getChannelIdFlags(guild_id.guild_id, guild_id.id);
};
prototype["getNewForumThreadsCreated"] = function getNewForumThreadsCreated(channel) {
  const self = this;
  const tmp = this.getChannelOverrides(channel.guild_id)[channel.id];
  if (null != tmp) {
    if (null != tmp.flags) {
      if (obj.hasFlag(tmp.flags, constants.NEW_FORUM_THREADS_ON)) {
        return true;
      } else {
        if (tmp2Result.hasFlag(tmp.flags, tmp4.NEW_FORUM_THREADS_OFF)) {
          return false;
        }
        tmp2Result = tmp2(1384);
      }
      obj = importAll(1384);
      tmp2 = importAll;
      tmp4 = constants;
    }
  }
  return self.resolvedMessageNotifications(channel) === UserNotificationSettings.ALL_MESSAGES;
};
prototype["isOptInEnabled"] = function isOptInEnabled(closure_0) {
  if (null == closure_0) {
    return tmp;
  } else {
    if (initialize.isFullServerPreview(closure_0)) {
      let isOptInEnabledResult = obj.isOptInEnabled(closure_0);
    } else {
      const self = this;
      isOptInEnabledResult = importAll(1384).hasFlag(this.getGuildFlags(closure_0), constants2.OPT_IN_CHANNELS_ON);
      const obj2 = importAll(1384);
    }
    obj = initialize;
  }
};
prototype["isChannelRecordOrParentOptedIn"] = function isChannelRecordOrParentOptedIn(channel, arg1) {
  let tmp = null != channel && null != channel.guild_id;
  if (tmp) {
    const self = this;
    let isChannelOptedInResult = this.isChannelOptedIn(channel.guild_id, channel.id, arg1);
    if (!isChannelOptedInResult) {
      isChannelOptedInResult = null != channel.parent_id && self.isChannelOptedIn(channel.guild_id, channel.parent_id, arg1);
      const tmp4 = null != channel.parent_id && self.isChannelOptedIn(channel.guild_id, channel.parent_id, arg1);
    }
    tmp = isChannelOptedInResult;
  }
  return tmp;
};
prototype["isChannelOrParentOptedIn"] = function isChannelOrParentOptedIn(closure_0, channelId) {
  return this.isChannelRecordOrParentOptedIn(store.getChannel(channelId), arg2);
};
prototype["isChannelOptedIn"] = function isChannelOptedIn(closure_0) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (null == closure_0) {
    return false;
  } else {
    if (initialize.isFullServerPreview(closure_0)) {
      return obj3.isChannelOptedIn(closure_0, arg1);
    } else {
      if (flag) {
        if (null != dependencyMap4[closure_0]) {
          return dependencyMap4[closure_0].has(arg1);
        }
      }
      const self = this;
      const tmp = this.getChannelOverrides(closure_0)[arg1];
      let num;
      if (tmp != null) {
        num = tmp.flags;
      }
      if (num == null) {
        num = 0;
      }
      return importAll(1384).hasFlag(num, constants.OPT_IN_ENABLED);
    }
    obj3 = initialize;
  }
};
prototype["getOptedInChannels"] = function getOptedInChannels(id) {
  if (initialize.isFullServerPreview(id)) {
    let viewingChannels = initialize.getViewingChannels(id);
    if (viewingChannels == null) {
      viewingChannels = set1;
    }
    let tmp2 = viewingChannels;
  } else {
    tmp2 = dependencyMap2[id];
    if (tmp2 == null) {
      tmp2 = set1;
    }
  }
  return tmp2;
};
prototype["getOptedInChannelsWithPendingUpdates"] = function getOptedInChannelsWithPendingUpdates(id) {
  return dependencyMap4[id];
};
prototype["getPendingChannelUpdates"] = function getPendingChannelUpdates(closure_0) {
  return dependencyMap3[closure_0];
};
prototype["getGuildFavorites"] = function getGuildFavorites(id) {
  let closure_0 = id;
  if (initialize.isFullServerPreview(id)) {
    return null;
  } else {
    if (null == table[id]) {
      const self = this;
      const found = importDefault(12).filter(this.getChannelOverrides(id), (flags) => {
        let num = flags.flags;
        if (num == null) {
          num = 0;
        }
        let hasFlagResult = outer1_2(outer1_3[12]).hasFlag(num, outer1_14.FAVORITED);
        if (hasFlagResult) {
          const channel = outer1_8.getChannel(flags.channel_id);
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          hasFlagResult = guild_id === closure_0;
        }
        return hasFlagResult;
      });
      tmp[id] = found.map((channel_id) => channel_id.channel_id);
      const arr = importDefault(12);
    }
    return table[id];
  }
};
prototype["isFavorite"] = function isFavorite(closure_0) {
  const isFullServerPreviewResult = initialize.isFullServerPreview(closure_0);
  let tmp2 = !isFullServerPreviewResult;
  if (!isFullServerPreviewResult) {
    const self = this;
    const guildFavorites = this.getGuildFavorites(closure_0);
    let hasItem;
    if (guildFavorites != null) {
      hasItem = guildFavorites.includes(arg1);
    }
    tmp2 = true === hasItem;
  }
  return tmp2;
};
prototype["isMessagesFavorite"] = function isMessagesFavorite(id) {
  const tmp = this.getChannelOverrides(null)[id];
  let num;
  if (tmp != null) {
    num = tmp.flags;
  }
  if (num == null) {
    num = 0;
  }
  return importAll(1384).hasFlag(num, constants.FAVORITED);
};
Object.defineProperty(prototype, "accountNotificationSettings", {
  get: function accountNotificationSettings() {
    return closure_20;
  },
  set: undefined
});
Object.defineProperty(prototype, "useNewNotifications", {
  get: function useNewNotifications() {
    return c18;
  },
  set: undefined
});
prototype["getGuildUnreadSetting"] = function getGuildUnreadSetting(guild_id) {
  if (c18) {
    const self = this;
    const guildFlags = this.getGuildFlags(guild_id);
    if (obj.hasFlag(guildFlags, constants2.UNREADS_ALL_MESSAGES)) {
      let ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    } else {
      ALL_MESSAGES = importAll(1384).hasFlag(guildFlags, constants2.UNREADS_ONLY_MENTIONS) ? tmp7.ONLY_MENTIONS : tmp7.UNSET;
      const tmp4Result = importAll(1384);
    }
    return ALL_MESSAGES;
  } else {
    return UnreadSetting.ALL_MESSAGES;
  }
};
prototype["resolveGuildUnreadSetting"] = function resolveGuildUnreadSetting(guild) {
  const guildFlags = this.getGuildFlags(guild.id);
  if (c18) {
    if (obj.hasFlag(guildFlags, constants2.UNREADS_ALL_MESSAGES)) {
      let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
    } else {
      if (tmp3Result.hasFlag(guildFlags, tmp5.UNREADS_ONLY_MENTIONS)) {
        ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
      } else if (guild.defaultMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
        ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
      } else {
        ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
      }
      tmp3Result = tmp3(1384);
    }
    obj = importAll(1384);
    tmp3 = importAll;
    tmp5 = constants2;
  } else {
    return UnreadSetting.ALL_MESSAGES;
  }
};
prototype["getChannelRecordUnreadSetting"] = function getChannelRecordUnreadSetting(guild_id) {
  return this.getChannelUnreadSetting(guild_id.guild_id, guild_id.id);
};
prototype["getChannelUnreadSetting"] = function getChannelUnreadSetting(guild_id, id) {
  const channelIdFlags = this.getChannelIdFlags(guild_id, id);
  if (obj.hasFlag(channelIdFlags, constants.UNREADS_ALL_MESSAGES)) {
    let ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
  } else {
    ALL_MESSAGES = importAll(1384).hasFlag(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) ? tmp5.ONLY_MENTIONS : tmp5.UNSET;
    const tmp2Result = importAll(1384);
  }
  return ALL_MESSAGES;
};
UserGuildSettingsStoreClass.displayName = "UserGuildSettingsStore";
UserGuildSettingsStoreClass.persistKey = "collapsedGuilds";
const userGuildSettingsStoreClass = new UserGuildSettingsStoreClass(require("dispatcher"), {
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => {
      const merged = Object.assign(guild_id);
      callback(guild_id.guild_id, { channel_overrides: {} });
    });
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: function handleUserGuildSettingsGuildUpdate(arg0) {
    let guildId;
    let settings;
    ({ guildId, settings } = arg0);
    let channel_overrides;
    if (dependencyMap[guildId] != null) {
      channel_overrides = tmp.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const merged = Object.assign(settings);
    updateUserGuildSettingsInternal(guildId, { channel_overrides });
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function handleUserGuildSettingsGuildAndChannelsUpdate(arg0) {
    let guildId;
    let settings;
    ({ guildId, settings } = arg0);
    let channel_overrides;
    if (dependencyMap[guildId] != null) {
      channel_overrides = tmp.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const merged = Object.assign(settings);
    updateUserGuildSettingsInternal(guildId, { channel_overrides });
    updateUserGuildChannelSettingsBulk(guildId, settings.channel_overrides);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: function handleUserGuildSettingsChannelUpdate(arg0) {
    let channelId;
    let guildId;
    let settings;
    ({ guildId, channelId, settings } = arg0);
    if (tmp) {
      let obj = {};
      const merged = Object.assign(dependencyMap3[guildId]);
      obj = { flags: null };
      obj[0] = settings.flags;
      obj[channelId] = obj;
      dependencyMap3[guildId] = obj;
    }
    obj = { channel_id: channelId, muted: false };
    let channel_overrides;
    if (dependencyMap[guildId] != null) {
      channel_overrides = tmp5.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const merged1 = Object.assign(channel_overrides[channelId]);
    const merged2 = Object.assign(settings);
    const obj1 = { [channelId]: obj };
    let tmp10 = obj1;
    if (null != dependencyMap[guildId]) {
      let channel_overrides1;
      if (tmp8 != null) {
        channel_overrides1 = tmp8.channel_overrides;
      }
      if (channel_overrides1 == null) {
        channel_overrides1 = {};
      }
      const obj2 = {};
      const merged3 = Object.assign(channel_overrides1);
      const merged4 = Object.assign(obj1);
      tmp10 = obj2;
    }
    updateUserGuildSettingsInternal(guildId, { channel_overrides: tmp10 });
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function handleUserGuildSettingsChannelUpdateBulk(guildId) {
    guildId = guildId.guildId;
    let flag = null != guildId;
    if (flag) {
      flag = !initialize.isFullServerPreview(guildId);
    }
    if (flag) {
      updateUserGuildChannelSettingsBulk(guildId, guildId.overrides);
      flag = true;
    }
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    let tmp5;
    let tmp6;
    notificationSettings = notificationSettings.notificationSettings;
    let closure_18 = importAll(1384).hasFlag(notificationSettings.flags, AccountNotificationFlags.USE_NEW_NOTIFICATIONS);
    const obj = importAll(1384);
    let closure_19 = importAll(1384).hasFlag(notificationSettings.flags, AccountNotificationFlags.MENTION_ON_ALL_MESSAGES);
    tmp5.reset();
    tmp6.reset();
    if (!notificationSettings.userGuildSettings.partial) {
      const dependencyMap = {};
      let closure_24 = {};
      let closure_25 = {};
    }
    let set = new Set();
    const entries = notificationSettings.userGuildSettings.entries;
    const item = entries.forEach((guild_id) => {
      if (!("channel_overrides" in guild_id)) {
        guild_id.channel_overrides = {};
      }
      outer1_30(guild_id.guild_id, guild_id);
      if (null != guild_id.guild_id) {
        set.add(guild_id.guild_id);
      }
    });
    for (const key10044 in closure_16) {
      let tmp10 = key10044;
      if (set.has(key10044)) {
        continue;
      } else {
        let tmp4 = dependencyMap;
        tmp5 = dependencyMap[key10044];
        set = key10044;
        if (true === tmp5.muted) {
          tmp6 = tmp5;
          if (tmp5.setTimer(key10044, tmp5.mute_config, () => {
            let channel_overrides;
            if (table[set] != null) {
              channel_overrides = tmp2.channel_overrides;
            }
            if (channel_overrides == null) {
              channel_overrides = {};
            }
            const merged = Object.assign({ muted: false });
            outer1_30(set, { channel_overrides });
            outer1_1(outer1_3[13]).dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: set });
          })) {
            tmp5.muted = false;
          }
        }
        let tmp7 = importDefault;
        let tmp8 = dependencyMap;
        let arr2 = importDefault(12);
        let item1 = arr2.forEach(tmp5.channel_overrides, (muted) => {
          let closure_0 = muted;
          if (true === muted.muted) {
            if (outer1_22.setTimer(muted.channel_id, muted.mute_config, () => {
              const channel_id = muted.channel_id;
              let obj = { channel_id, muted: false };
              let channel_overrides;
              if (outer2_16[muted] != null) {
                channel_overrides = tmp3.channel_overrides;
              }
              if (channel_overrides == null) {
                channel_overrides = {};
              }
              obj = { muted: false };
              const merged = Object.assign(channel_overrides[channel_id]);
              const merged1 = Object.assign(obj);
              obj = { [channel_id]: obj };
              let tmp8 = obj;
              if (null != outer2_16[muted]) {
                let channel_overrides1;
                if (tmp6 != null) {
                  channel_overrides1 = tmp6.channel_overrides;
                }
                if (channel_overrides1 == null) {
                  channel_overrides1 = {};
                }
                const obj1 = {};
                const merged2 = Object.assign(channel_overrides1);
                const merged3 = Object.assign(obj);
                tmp8 = obj1;
              }
              outer2_30(muted, { channel_overrides: tmp8 });
              outer2_1(outer2_3[13]).dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: muted, channelId: muted.channel_id });
            })) {
              muted.muted = false;
            }
          }
        });
        continue;
      }
      continue;
    }
  },
  CACHE_LOADED: function handleCacheLoaded(userGuildSettings) {
    let tmp = null != userGuildSettings.userGuildSettings;
    if (tmp) {
      tmp = 0 !== userGuildSettings.userGuildSettings.length;
    }
    if (tmp) {
      let closure_16 = {};
      let closure_24 = {};
      let closure_25 = {};
      userGuildSettings = userGuildSettings.userGuildSettings;
      const item = userGuildSettings.forEach((guild_id) => {
        guild_id = guild_id.guild_id;
        closure_16[guild_id] = guild_id;
        const set = new Set();
        const set1 = new Set();
        for (const key10018 in arg0.channel_overrides) {
          let tmp5 = key10018;
          let tmp6 = arg0.channel_overrides[key10018];
          let tmp7 = callback;
          let tmp8 = table;
          let obj4 = callback(table[10]);
          if (obj4.computeIsMuted(tmp6)) {
            let addResult = set.add(key10018);
          }
          let tmp2 = callback2;
          let obj3 = callback2(tmp8[12]);
          let num = tmp6.flags;
          if (num == null) {
            num = 0;
          }
          let tmp3 = constants;
          if (!obj3.hasFlag(num, constants.OPT_IN_ENABLED)) {
            continue;
          } else {
            let addResult1 = set1.add(key10018);
            continue;
          }
          continue;
        }
        closure_24[guild_id] = set;
        closure_25[guild_id] = set1;
      });
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(allUserGuildSettings) {
    allUserGuildSettings = allUserGuildSettings.allUserGuildSettings;
    let mutedChannels;
    let optedInChannelsByGuild;
    mutedChannels = allUserGuildSettings.mutedChannels;
    optedInChannelsByGuild = allUserGuildSettings.optedInChannelsByGuild;
    const obj = {};
    const merged = Object.assign(allUserGuildSettings.userGuildSettings);
    let closure_24 = {};
    let closure_25 = {};
    const keys = optedInChannelsByGuild(11).keys(mutedChannels);
    const item = keys.forEach((arg0) => {
      closure_24[arg0] = new Set(mutedChannels[arg0]);
    });
    const obj2 = optedInChannelsByGuild(11);
    const keys1 = optedInChannelsByGuild(11).keys(optedInChannelsByGuild);
    const item1 = keys1.forEach((arg0) => {
      closure_25[arg0] = new Set(optedInChannelsByGuild[arg0]);
    });
  },
  GUILD_CREATE: handleGuildUpdate,
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_TOGGLE_COLLAPSE_MUTED: function handleToggleCollapseMuted(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      let guild = store2.getGuild(guildId);
      if (null != guild) {
        let ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      guild = obj;
    } else {
      obj = {};
      const merged = Object.assign(tmp2);
      obj.guild_id = guildId;
      obj.hide_muted_channels = true !== dependencyMap[guildId].hide_muted_channels;
      dependencyMap[guildId] = obj;
    }
  },
  IMPERSONATE_UPDATE: handleGuildUpdate,
  IMPERSONATE_STOP: handleGuildUpdate,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function handleRemovePendingUpdates(arg0) {
    let guildId;
    let updates;
    ({ guildId, updates } = arg0);
    if (null == guildId) {
      return false;
    } else if (null == dependencyMap3[guildId]) {
      return false;
    } else {
      for (const key10009 in updates) {
        let tmp6 = key10009;
        let tmp7 = importDefault;
        let tmp8 = dependencyMap;
        let obj = importDefault(12);
        if (!obj.isEqual(updates[key10009], tmp4[key10009])) {
          continue;
        } else {
          delete tmp[tmp2];
          continue;
        }
        continue;
      }
    }
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function handleClearPendingUpdates(guildId) {
    if (null == guildId.guildId) {
      return false;
    } else {
      delete tmp3[tmp2];
      delete tmp[tmp2];
    }
  },
  NOTIFICATION_SETTINGS_UPDATE: function handleNotificationSettingsUpdate(settings) {
    settings = settings.settings;
    let closure_18 = importAll(1384).hasFlag(settings.flags, AccountNotificationFlags.USE_NEW_NOTIFICATIONS);
    const obj = importAll(1384);
    let closure_19 = importAll(1384).hasFlag(settings.flags, AccountNotificationFlags.MENTION_ON_ALL_MESSAGES);
  },
  GUILD_MUTE_EXPIRED() {
    return true;
  },
  CHANNEL_MUTE_EXPIRED() {
    return true;
  }
});
let result = set.fileFinishedImporting("stores/UserGuildSettingsStore.tsx");

export default userGuildSettingsStoreClass;
export const getGuildDefaults = function getGuildDefaults(arg0) {
  const guild = store2.getGuild(arg0);
  if (null != guild) {
    let ALL_MESSAGES = guild.defaultMessageNotifications;
  } else {
    ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
  }
  return obj[ALL_MESSAGES];
};
export const convertChannelOverridesToMap = function convertChannelOverridesToMap() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let keyByResult = obj;
  if (obj instanceof Array) {
    keyByResult = importDefault(12).keyBy(obj, "channel_id");
    const obj2 = importDefault(12);
  }
  return keyByResult;
};