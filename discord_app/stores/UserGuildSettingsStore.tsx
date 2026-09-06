// discord_app/stores/UserGuildSettingsStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import FlagUtilsAll from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import MuteTimers from "../lib/MuteTimers.tsx";
import ImpersonateStore from "../modules/impersonate/ImpersonateStore.tsx";
import JoinedThreadsStore from "../modules/threads/JoinedThreadsStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildStore from "GuildStore.tsx";
import UserStore from "UserStore.tsx";

const MuteTimersDefault = MuteTimers;

require = fn;
function updateUserGuildSettingsInternal(guild_id, channel_overrides) {
  channel_overrides = undefined;
  if (userGuildSettings[guild_id] != null) {
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
    keyByResult = _modDef12.keyBy(channel_overrides1, "channel_id");
  }
  const guild = GuildStore.getGuild(guild_id);
  if (null != guild) {
    let ALL_MESSAGES = guild.defaultMessageNotifications;
  } else {
    ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
  }
  obj = {};
  const merged = Object.assign(obj[ALL_MESSAGES]);
  const merged1 = Object.assign(tmp4);
  const merged2 = Object.assign(channel_overrides);
  obj.channel_overrides = keyByResult;
  navigation.clearTimer(guild_id);
  const item = _modDef12.forEach(channel_overrides, (channel_id) => {
    navigation2.clearTimer(channel_id.channel_id);
  });
  closure_0 = guild_id;
  if (true === obj.muted) {
    if (
      obj5.setTimer(guild_id, obj.mute_config, () => {
        let channel_overrides;
        if (closure_16[set] != null) {
          channel_overrides = tmp2.channel_overrides;
        }
        if (channel_overrides == null) {
          channel_overrides = {};
        }
        const merged = Object.assign({ muted: false });
        updateUserGuildSettingsInternal(set, { channel_overrides });
        DispatcherDefault.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: set });
      })
    ) {
      obj.muted = false;
    }
  }
  let tmp14Result = tmp14(12);
  const item1 = tmp14Result.forEach(obj.channel_overrides, (muted) => {
    if (true === muted.muted) {
      if (
        timer.setTimer(muted.channel_id, muted.mute_config, () => {
          const channel_id = muted.channel_id;
          obj = { channel_id, muted: false };
          let channel_overrides;
          if (dependencyMap[set] != null) {
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
          if (null != dependencyMap[set]) {
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
          updateUserGuildSettingsInternal(set, { channel_overrides: tmp8 });
          DispatcherDefault.dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: set, channelId: muted.channel_id });
        })
      ) {
        muted.muted = false;
      }
    }
  });
  userGuildSettings[guild_id] = obj;
  let valueResult = null;
  if (null != userGuildSettings[guild_id].channel_overrides) {
    const found = tmp14(12)(tmp19.channel_overrides).filter((item) =>
      closure_1_0(closure_1_3[10]).computeIsMuted(item),
    );
    const arr3 = tmp14(12)(tmp19.channel_overrides);
    valueResult = found.map((channel_id) => channel_id.channel_id).value();
    const iter = found.map((channel_id) => channel_id.channel_id);
  }
  obj5 = navigation;
  const tmp18 = closure_24;
  tmp18[guild_id] = new Set(valueResult);
  tmp14Result = tmp14(12);
  const found1 = tmp14Result.filter(obj.channel_overrides, (flags) => {
    let num = flags.flags;
    if (num == null) {
      num = 0;
    }
    return FlagUtilsAll.hasFlag(num, constants.OPT_IN_ENABLED);
  });
  set = new Set(valueResult);
  optedInChannelsByGuild[guild_id] = new Set(found1.map((channel_id) => channel_id.channel_id));
  if (null != guild_id) {
    const _Set = Set;
    const set2 = new Set(optedInChannelsByGuild[guild_id]);
    obj = dependencyMap[guild_id];
    if (obj == null) {
      obj = {};
    }
    for (const key10101 in obj) {
      let obj8 = FlagUtilsAll;
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
      closure_29[guild_id] = set2;
    } else {
      delete tmp3[tmp2];
    }
  }
  delete tmp[tmp2];
}
function updateUserGuildChannelSettingsBulk(guildId, channel_overrides) {
  closure_0 = guildId;
  importDefault = channel_overrides;
  obj = {};
  obj = null;
  if (null != guildId) {
    obj = dependencyMap[guildId];
  }
  if (obj == null) {
    obj = {};
  }
  const keys = require("SnowflakeUtils").keys(channel_overrides);
  const item = keys.forEach((channel_id) => {
    obj = { channel_id, muted: false };
    channel_overrides = undefined;
    if (closure_16[closure_0] != null) {
      channel_overrides = tmp.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const merged = Object.assign(channel_overrides[channel_id]);
    const merged1 = Object.assign(closure_1[channel_id]);
    obj[channel_id] = obj;
    let num = obj.flags;
    if (num == null) {
      num = 0;
    }
    obj[channel_id] = { flags: num };
  });
  if (null != guildId) {
    obj = {};
    let merged = Object.assign(dependencyMap[guildId]);
    let merged1 = Object.assign(obj);
    dependencyMap[guildId] = obj;
  }
  let tmp11 = obj;
  if (null != userGuildSettings[guildId]) {
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
const ChannelRecord = fn(1961);
({ THREAD_CHANNEL_TYPES: metroRequire, isPrivate: closure_7 } = ChannelRecord);
const Constants = fn(1074);
const UserNotificationSettings = Constants.UserNotificationSettings;
const AccountNotificationFlags = fn(4212).AccountNotificationFlags;
const UnreadSetting = fn(4742).UnreadSetting;
const UserSettingsConstants = fn(1084);
({ ChannelNotificationSettingsFlags: closure_14, GuildNotificationSettingsFlags: closure_15 } = UserSettingsConstants);
let userGuildSettings = {};
let dependencyMap = {};
const useNewNotifications = false;
let closure_19 = false;
let settings = { flags: 0 };
const navigation = new MuteTimersDefault();
let tmp5 = new MuteTimersDefault();
const navigation2 = new MuteTimersDefault();
let obj = {
  suppress_everyone: false,
  suppress_roles: false,
  mute_scheduled_events: false,
  mobile_push: true,
  muted: false,
  message_notifications: UserNotificationSettings.ALL_MESSAGES,
  flags: 0,
  channel_overrides: {},
  notify_highlights: Constants.HighlightSettings.NULL,
  hide_muted_channels: false,
  version: -1,
  mute_config: null,
};
obj = {};
obj = {};
let merged = Object.assign(obj);
obj.message_notifications = UserNotificationSettings.ALL_MESSAGES;
obj[UserNotificationSettings.ALL_MESSAGES] = obj;
let obj1 = {};
let merged1 = Object.assign(obj);
obj1.message_notifications = UserNotificationSettings.ONLY_MENTIONS;
obj[UserNotificationSettings.ONLY_MENTIONS] = obj1;
let mutedChannels = {};
let optedInChannelsByGuild = {};
let set = new Set();
let set1 = new Set();
dependencyMap = {};
const dependencyMap2 = {};
const PersistedStore = initializeDefault.PersistedStore;
class UserGuildSettingsStoreClass extends PersistedStore {}
const prototype = UserGuildSettingsStoreClass.prototype;
prototype["initialize"] = function initialize(useNewNotifications) {
  this.waitFor(ChannelStore, GuildStore, ImpersonateStore, JoinedThreadsStore, UserStore);
  if (null != useNewNotifications) {
    let flag = useNewNotifications.useNewNotifications;
    if (flag == null) {
      flag = false;
    }
    closure_18 = flag;
    if ("userGuildSettings" in useNewNotifications) {
      userGuildSettings = useNewNotifications.userGuildSettings;
      let prop = useNewNotifications.optedInChannelsByGuild;
      if (prop == null) {
        prop = {};
      }
      closure_25 = _modDef12.mapValues(prop, (items) => new Set(items));
      const item = _modDef12.forEach(userGuildSettings, (channel_overrides, arg1) => {
        let valueResult = null;
        if (null != channel_overrides.channel_overrides) {
          const found = _modDef12(channel_overrides.channel_overrides).filter((item) =>
            closure_1_0(closure_1_3[10]).computeIsMuted(item),
          );
          const arr = _modDef12(channel_overrides.channel_overrides);
          valueResult = found.map((channel_id) => channel_id.channel_id).value();
          const iter = found.map((channel_id) => channel_id.channel_id);
        }
        mutedChannels[arg1] = new Set(valueResult);
      });
      const tmp2Result = _modDef12;
    }
  }
};
prototype["getState"] = function getState() {
  return { useNewNotifications };
};
Object.defineProperty(prototype, "mentionOnAllMessages", {
  get: function mentionOnAllMessages() {
    return closure_19;
  },
  set: undefined,
});
prototype["isSuppressEveryoneEnabled"] = function isSuppressEveryoneEnabled(guildId) {
  if (userGuildSettings[guildId] != null) {
    return tmp.suppress_everyone;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["isSuppressRolesEnabled"] = function isSuppressRolesEnabled(guildId) {
  if (userGuildSettings[guildId] != null) {
    return tmp.suppress_roles;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["isMuteScheduledEventsEnabled"] = function isMuteScheduledEventsEnabled(guildId) {
  if (userGuildSettings[guildId] != null) {
    return tmp.mute_scheduled_events;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["isMobilePushEnabled"] = function isMobilePushEnabled(c2) {
  if (userGuildSettings[c2] != null) {
    return tmp.mobile_push;
  } else {
    const guild = GuildStore.getGuild(c2);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["isMuted"] = function isMuted(arg0) {
  if (userGuildSettings[arg0] != null) {
    obj = MuteTimers;
    return obj.computeIsMuted(tmp);
  } else {
    let guild = GuildStore.getGuild(arg0);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
    guild = obj;
  }
};
prototype["isTemporarilyMuted"] = function isTemporarilyMuted(arg0) {
  if (userGuildSettings[arg0] != null) {
    obj = MuteTimers;
    return obj.isTemporarilyMuted(tmp);
  } else {
    let guild = GuildStore.getGuild(arg0);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
    guild = obj;
  }
};
prototype["getMuteConfig"] = function getMuteConfig(arg0) {
  if (userGuildSettings[arg0] != null) {
    return tmp.mute_config;
  } else {
    const guild = GuildStore.getGuild(arg0);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["getMessageNotifications"] = function getMessageNotifications(guildId) {
  if (userGuildSettings[guildId] != null) {
    return tmp.message_notifications;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["getChannelOverrides"] = function getChannelOverrides(guild_id) {
  if (userGuildSettings[guild_id] != null) {
    let channel_overrides = tmp.channel_overrides;
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    return channel_overrides;
  } else {
    const guild = GuildStore.getGuild(guild_id);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["getNotifyHighlights"] = function getNotifyHighlights(guildId) {
  if (userGuildSettings[guildId] != null) {
    return tmp.notify_highlights;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      let ALL_MESSAGES = guild.defaultMessageNotifications;
    } else {
      ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
    }
  }
};
prototype["getGuildFlags"] = function getGuildFlags(guildId) {
  if (userGuildSettings[guildId] != null) {
    return tmp.flags;
  } else {
    const guild = GuildStore.getGuild(guildId);
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
  let tmp = mutedChannels[guildId];
  if (tmp == null) {
    tmp = set;
  }
  return tmp;
};
prototype["isChannelMuted"] = function isChannelMuted(guildId, id) {
  const channel = ChannelStore.getChannel(id);
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  mutedChannels = this.getMutedChannels(guildId);
  return mutedChannels.has(id);
};
prototype["isCategoryMuted"] = function isCategoryMuted(guild_id, item) {
  const channel = ChannelStore.getChannel(item);
  if (null == channel) {
    return false;
  } else {
    const parent_id = channel.parent_id;
    let hasItem = null != parent_id;
    if (hasItem) {
      const self = this;
      mutedChannels = this.getMutedChannels(guild_id);
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
  } else if (React5(channel.type)) {
    return UnreadSetting.ALL_MESSAGES;
  } else if (closure_18) {
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
        self.resolvedMessageNotifications(channel) === UserNotificationSettings.ALL_MESSAGES
          ? tmp5.ALL_MESSAGES
          : tmp5.ONLY_MENTIONS;
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
  if (userGuildSettings[id] != null) {
    hide_muted_channels = tmp.hide_muted_channels;
  }
  return true === hide_muted_channels;
};
prototype["getAllSettings"] = function getAllSettings() {
  return { userGuildSettings, mutedChannels, optedInChannelsByGuild };
};
prototype["getChannelIdFlags"] = function getChannelIdFlags(guild_id, id) {
  const tmp = this.getChannelOverrides(guild_id)[id];
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
      obj = FlagUtilsAll;
      tmp2 = importAll;
      tmp4 = constants;
    }
  }
  return self.resolvedMessageNotifications(channel) === UserNotificationSettings.ALL_MESSAGES;
};
prototype["isOptInEnabled"] = function isOptInEnabled(id) {
  if (null == id) {
    return tmp;
  } else {
    if (ImpersonateStore.isFullServerPreview(id)) {
      let isOptInEnabledResult = obj.isOptInEnabled(id);
    } else {
      const self = this;
      isOptInEnabledResult = FlagUtilsAll.hasFlag(this.getGuildFlags(id), constants2.OPT_IN_CHANNELS_ON);
    }
    obj = ImpersonateStore;
  }
};
prototype["isChannelRecordOrParentOptedIn"] = function isChannelRecordOrParentOptedIn(channel, arg1) {
  let tmp = null != channel && null != channel.guild_id;
  if (tmp) {
    const self = this;
    let isChannelOptedInResult = this.isChannelOptedIn(channel.guild_id, channel.id, arg1);
    if (!isChannelOptedInResult) {
      isChannelOptedInResult =
        null != channel.parent_id && self.isChannelOptedIn(channel.guild_id, channel.parent_id, arg1);
      const tmp4 = null != channel.parent_id && self.isChannelOptedIn(channel.guild_id, channel.parent_id, arg1);
    }
    tmp = isChannelOptedInResult;
  }
  return tmp;
};
prototype["isChannelOrParentOptedIn"] = function isChannelOrParentOptedIn(_guildId, channelId, arg2) {
  return this.isChannelRecordOrParentOptedIn(ChannelStore.getChannel(channelId), arg2);
};
prototype["isChannelOptedIn"] = function isChannelOptedIn(id, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (null == id) {
    return false;
  } else {
    if (ImpersonateStore.isFullServerPreview(id)) {
      return obj3.isChannelOptedIn(id, arg1);
    } else {
      if (flag) {
        if (null != dependencyMap2[id]) {
          return dependencyMap2[id].has(arg1);
        }
      }
      const self = this;
      const tmp = this.getChannelOverrides(id)[arg1];
      let num;
      if (tmp != null) {
        num = tmp.flags;
      }
      if (num == null) {
        num = 0;
      }
      return FlagUtilsAll.hasFlag(num, constants.OPT_IN_ENABLED);
    }
    obj3 = ImpersonateStore;
  }
};
prototype["getOptedInChannels"] = function getOptedInChannels(id) {
  if (ImpersonateStore.isFullServerPreview(id)) {
    let viewingChannels = ImpersonateStore.getViewingChannels(id);
    if (viewingChannels == null) {
      viewingChannels = set1;
    }
    let tmp2 = viewingChannels;
  } else {
    tmp2 = optedInChannelsByGuild[id];
    if (tmp2 == null) {
      tmp2 = set1;
    }
  }
  return tmp2;
};
prototype["getOptedInChannelsWithPendingUpdates"] = function getOptedInChannelsWithPendingUpdates(id) {
  return dependencyMap2[id];
};
prototype["getPendingChannelUpdates"] = function getPendingChannelUpdates(arg0) {
  return dependencyMap[arg0];
};
prototype["getGuildFavorites"] = function getGuildFavorites(id) {
  closure_0 = id;
  if (ImpersonateStore.isFullServerPreview(id)) {
    return null;
  } else {
    if (null == dependencyMap[id]) {
      const self = this;
      const found = _modDef12.filter(this.getChannelOverrides(id), (flags) => {
        let num = flags.flags;
        if (num == null) {
          num = 0;
        }
        let hasFlagResult = FlagUtilsAll.hasFlag(num, constants.FAVORITED);
        if (hasFlagResult) {
          const channel = ChannelStore.getChannel(flags.channel_id);
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          hasFlagResult = guild_id === closure_0;
        }
        return hasFlagResult;
      });
      tmp[id] = found.map((channel_id) => channel_id.channel_id);
    }
    return dependencyMap[id];
  }
};
prototype["isFavorite"] = function isFavorite(id, arg1) {
  const isFullServerPreviewResult = ImpersonateStore.isFullServerPreview(id);
  let tmp2 = !isFullServerPreviewResult;
  if (!isFullServerPreviewResult) {
    const self = this;
    const guildFavorites = this.getGuildFavorites(id);
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
  return FlagUtilsAll.hasFlag(num, constants.FAVORITED);
};
Object.defineProperty(prototype, "accountNotificationSettings", {
  get: function accountNotificationSettings() {
    return settings;
  },
  set: undefined,
});
Object.defineProperty(prototype, "useNewNotifications", {
  get: function useNewNotifications() {
    return closure_18;
  },
  set: undefined,
});
prototype["getGuildUnreadSetting"] = function getGuildUnreadSetting(guild_id) {
  if (closure_18) {
    const self = this;
    const guildFlags = this.getGuildFlags(guild_id);
    if (obj.hasFlag(guildFlags, constants2.UNREADS_ALL_MESSAGES)) {
      let ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    } else {
      ALL_MESSAGES = FlagUtilsAll.hasFlag(guildFlags, constants2.UNREADS_ONLY_MENTIONS)
        ? tmp7.ONLY_MENTIONS
        : tmp7.UNSET;
      const tmp4Result = FlagUtilsAll;
    }
    return ALL_MESSAGES;
  } else {
    return UnreadSetting.ALL_MESSAGES;
  }
};
prototype["resolveGuildUnreadSetting"] = function resolveGuildUnreadSetting(guild) {
  const guildFlags = this.getGuildFlags(guild.id);
  if (closure_18) {
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
    obj = FlagUtilsAll;
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
    ALL_MESSAGES = FlagUtilsAll.hasFlag(channelIdFlags, constants.UNREADS_ONLY_MENTIONS)
      ? tmp5.ONLY_MENTIONS
      : tmp5.UNSET;
    const tmp2Result = FlagUtilsAll;
  }
  return ALL_MESSAGES;
};
UserGuildSettingsStoreClass.displayName = "UserGuildSettingsStore";
UserGuildSettingsStoreClass.persistKey = "collapsedGuilds";
const userGuildSettingsStoreClass = new UserGuildSettingsStoreClass(DispatcherDefault, {
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => {
      const merged = Object.assign(guild_id);
      updateUserGuildSettingsInternal(guild_id.guild_id, { channel_overrides: {} });
    });
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: function handleUserGuildSettingsGuildUpdate(arg0) {
    ({ guildId, settings } = arg0);
    let channel_overrides;
    if (userGuildSettings[guildId] != null) {
      channel_overrides = tmp.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const merged = Object.assign(settings);
    updateUserGuildSettingsInternal(guildId, { channel_overrides });
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function handleUserGuildSettingsGuildAndChannelsUpdate(arg0) {
    ({ guildId, settings } = arg0);
    let channel_overrides;
    if (userGuildSettings[guildId] != null) {
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
    ({ guildId, channelId, settings } = arg0);
    if (tmp) {
      obj = {};
      const merged = Object.assign(dependencyMap[guildId]);
      obj = { flags: settings.flags };
      obj[channelId] = obj;
      dependencyMap[guildId] = obj;
    }
    obj = { channel_id: channelId, muted: false };
    let channel_overrides;
    if (userGuildSettings[guildId] != null) {
      channel_overrides = tmp5.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const merged1 = Object.assign(channel_overrides[channelId]);
    const merged2 = Object.assign(settings);
    const obj1 = { [channelId]: obj };
    let tmp10 = obj1;
    if (null != userGuildSettings[guildId]) {
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
      flag = !ImpersonateStore.isFullServerPreview(guildId);
    }
    if (flag) {
      updateUserGuildChannelSettingsBulk(guildId, guildId.overrides);
      flag = true;
    }
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    notificationSettings = notificationSettings.notificationSettings;
    closure_18 = FlagUtilsAll.hasFlag(notificationSettings.flags, AccountNotificationFlags.USE_NEW_NOTIFICATIONS);
    closure_19 = FlagUtilsAll.hasFlag(notificationSettings.flags, AccountNotificationFlags.MENTION_ON_ALL_MESSAGES);
    navigation.reset();
    navigation2.reset();
    if (!notificationSettings.userGuildSettings.partial) {
      userGuildSettings = {};
      closure_24 = {};
      closure_25 = {};
    }
    set = new Set();
    const entries = notificationSettings.userGuildSettings.entries;
    const item = entries.forEach((guild_id) => {
      if (!("channel_overrides" in guild_id)) {
        guild_id.channel_overrides = {};
      }
      updateUserGuildSettingsInternal(guild_id.guild_id, guild_id);
      if (null != guild_id.guild_id) {
        set.add(guild_id.guild_id);
      }
    });
    for (const key10044 in closure_16) {
      if (set.has(key10044)) {
        continue;
      } else {
        let tmp5 = userGuildSettings[key10044];
        closure_129_0 = key10044;
        if (true === tmp5.muted) {
          if (
            navigation.setTimer(key10044, tmp5.mute_config, () => {
              let channel_overrides;
              if (closure_16[set] != null) {
                channel_overrides = tmp2.channel_overrides;
              }
              if (channel_overrides == null) {
                channel_overrides = {};
              }
              const merged = Object.assign({ muted: false });
              updateUserGuildSettingsInternal(set, { channel_overrides });
              DispatcherDefault.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: set });
            })
          ) {
            tmp5.muted = false;
          }
        }
        let arr2 = _modDef12;
        let item1 = arr2.forEach(tmp5.channel_overrides, (muted) => {
          if (true === muted.muted) {
            if (
              timer.setTimer(muted.channel_id, muted.mute_config, () => {
                const channel_id = muted.channel_id;
                obj = { channel_id, muted: false };
                let channel_overrides;
                if (dependencyMap[set] != null) {
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
                if (null != dependencyMap[set]) {
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
                updateUserGuildSettingsInternal(set, { channel_overrides: tmp8 });
                DispatcherDefault.dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: set, channelId: muted.channel_id });
              })
            ) {
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
      closure_16 = {};
      closure_24 = {};
      closure_25 = {};
      userGuildSettings = userGuildSettings.userGuildSettings;
      const item = userGuildSettings.forEach((guild_id) => {
        guild_id = guild_id.guild_id;
        userGuildSettings[guild_id] = guild_id;
        set = new Set();
        set1 = new Set();
        for (const key10018 in arg0.channel_overrides) {
          let tmp6 = arg0.channel_overrides[key10018];
          let tmp8 = dependencyMap;
          let obj4 = MuteTimers;
          if (obj4.computeIsMuted(tmp6)) {
            let addResult = set.add(key10018);
          }
          let obj3 = require("FlagUtils");
          let num = tmp6.flags;
          if (num == null) {
            num = 0;
          }
          if (!obj3.hasFlag(num, constants.OPT_IN_ENABLED)) {
            continue;
          } else {
            let addResult1 = set1.add(key10018);
            continue;
          }
          continue;
        }
        mutedChannels[guild_id] = set;
        optedInChannelsByGuild[guild_id] = set1;
      });
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(allUserGuildSettings) {
    allUserGuildSettings = allUserGuildSettings.allUserGuildSettings;
    mutedChannels = allUserGuildSettings.mutedChannels;
    optedInChannelsByGuild = allUserGuildSettings.optedInChannelsByGuild;
    obj = {};
    const merged = Object.assign(allUserGuildSettings.userGuildSettings);
    closure_24 = {};
    closure_25 = {};
    const keys = optedInChannelsByGuild(11).keys(mutedChannels);
    const item = keys.forEach((item) => {
      closure_24[item] = new Set(mutedChannels[item]);
    });
    const obj2 = optedInChannelsByGuild(11);
    const keys1 = optedInChannelsByGuild(11).keys(optedInChannelsByGuild);
    const item1 = keys1.forEach((item) => {
      closure_25[item] = new Set(optedInChannelsByGuild[item]);
    });
  },
  GUILD_CREATE: handleGuildUpdate,
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_TOGGLE_COLLAPSE_MUTED: function handleToggleCollapseMuted(guildId) {
    guildId = guildId.guildId;
    if (null == userGuildSettings[guildId]) {
      let guild = GuildStore.getGuild(guildId);
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
      obj.hide_muted_channels = true !== userGuildSettings[guildId].hide_muted_channels;
      userGuildSettings[guildId] = obj;
    }
  },
  IMPERSONATE_UPDATE: handleGuildUpdate,
  IMPERSONATE_STOP: handleGuildUpdate,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function handleRemovePendingUpdates(arg0) {
    ({ guildId, updates } = arg0);
    if (null == guildId) {
      return false;
    } else if (null == dependencyMap[guildId]) {
      return false;
    } else {
      for (const key10009 in updates) {
        obj = _modDef12;
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
    closure_18 = FlagUtilsAll.hasFlag(settings.flags, AccountNotificationFlags.USE_NEW_NOTIFICATIONS);
    closure_19 = FlagUtilsAll.hasFlag(settings.flags, AccountNotificationFlags.MENTION_ON_ALL_MESSAGES);
  },
  GUILD_MUTE_EXPIRED() {
    return true;
  },
  CHANNEL_MUTE_EXPIRED() {
    return true;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/UserGuildSettingsStore.tsx");

export default userGuildSettingsStoreClass;
export const getGuildDefaults = function getGuildDefaults(arg0) {
  const guild = GuildStore.getGuild(arg0);
  if (null != guild) {
    let ALL_MESSAGES = guild.defaultMessageNotifications;
  } else {
    ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
  }
  return obj[ALL_MESSAGES];
};
export const convertChannelOverridesToMap = function convertChannelOverridesToMap() {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let keyByResult = obj;
  if (obj instanceof Array) {
    keyByResult = _modDef12.keyBy(obj, "channel_id");
  }
  return keyByResult;
};
