// discord_app/stores/UserGuildSettingsStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import FlagUtilsAll from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import MuteTimers from "../lib/MuteTimers.tsx";
import NotificationConstants from "../modules/notifications/NotificationConstants.tsx";
import ReadStateConstants from "../modules/read_states/ReadStateConstants.tsx";
import ImpersonateStore from "../modules/impersonate/ImpersonateStore.tsx";
import JoinedThreadsStore from "../modules/threads/JoinedThreadsStore.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildStore from "GuildStore.tsx";
import UserStore from "UserStore.tsx";
import Constants from "../Constants.tsx";
import UserSettingsConstants from "../modules/user_settings/UserSettingsConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const MuteTimersDefault = MuteTimers;
let importDefault;

let closure_14;
let closure_15;
let metroImportDefault;
let metroRequire;
const f89971 = (channel_id) => channel_id.channel_id;
function updateUserGuildSettingsInternal(guild_id, channel_overrides) {
  let ALL_MESSAGES;
  const f89966 = (channel_id) => channel_id.channel_id;
  const tmp = guild_id;
  channel_overrides = undefined;
  if (userGuildSettings[guild_id] != null) {
    channel_overrides = tmp2.channel_overrides;
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
    const obj3 = _modDef12;
    keyByResult = obj3.keyBy(channel_overrides1, "channel_id");
  }
  const guild = GuildStore.getGuild(guild_id);
  if (null != guild) {
    ALL_MESSAGES = guild.defaultMessageNotifications;
  } else {
    ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
  }
  const obj = { channel_overrides: keyByResult };
  const merged = Object.assign(obj2[ALL_MESSAGES]);
  const merged1 = Object.assign(tmp2);
  const merged2 = Object.assign(channel_overrides);
  navigation.clearTimer(guild_id);
  const arr = _modDef12;
  const item = arr.forEach(channel_overrides, (channel_id) => {
    navigation2.clearTimer(channel_id.channel_id);
  });
  let closure_0 = guild_id;
  if (true === obj.muted) {
    if (
      navigation.setTimer(guild_id, obj.mute_config, () => {
        let channel_overrides;
        if (closure_16[key10044] != null) {
          channel_overrides = tmp2.channel_overrides;
        }
        if (channel_overrides == null) {
          channel_overrides = {};
        }
        const obj = { channel_overrides };
        const merged = Object.assign({ muted: false });
        updateUserGuildSettingsInternal(key10044, obj);
        const obj3 = DispatcherDefault;
        obj3.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: key10044 });
      })
    ) {
      obj.muted = false;
    }
  }
  const tmp12Result = _modDef12;
  const item1 = tmp12Result.forEach(obj.channel_overrides, (muted) => {
    if (true === muted.muted) {
      if (
        timer.setTimer(muted.channel_id, muted.mute_config, () => {
          const channel_id = muted.channel_id;
          let channel_overrides;
          const obj = { channel_id, muted: false };
          if (closure_16[key10044] != null) {
            channel_overrides = tmp3.channel_overrides;
          }
          if (channel_overrides == null) {
            channel_overrides = {};
          }
          obj2 = { muted: false };
          const merged = Object.assign(channel_overrides[channel_id]);
          const merged1 = Object.assign(obj2);
          const obj3 = { [channel_id]: obj };
          let tmp8 = obj3;
          if (null != closure_16[key10044]) {
            let channel_overrides1;
            if (closure_16[key10044] != null) {
              channel_overrides1 = tmp6.channel_overrides;
            }
            if (channel_overrides1 == null) {
              channel_overrides1 = {};
            }
            const obj4 = {};
            const merged2 = Object.assign(channel_overrides1);
            const merged3 = Object.assign(obj3);
            tmp8 = obj4;
          }
          updateUserGuildSettingsInternal(key10044, { channel_overrides: tmp8 });
          const obj5 = { type: "CHANNEL_MUTE_EXPIRED", guildId: key10044, channelId: muted.channel_id };
          const obj7 = DispatcherDefault;
          obj7.dispatch(obj5);
        })
      ) {
        muted.muted = false;
      }
    }
  });
  userGuildSettings[guild_id] = obj;
  let valueResult = null;
  const _Set = Set;
  if (null != userGuildSettings[guild_id].channel_overrides) {
    const arr3 = _modDef12(userGuildSettings[guild_id].channel_overrides);
    const found = arr3.filter((item) => {
      const obj = closure_1_0(closure_1_3[10]);
      return obj.computeIsMuted(item);
    });
    const iter = found.map(f89971);
    valueResult = iter.value();
  }
  const _Set1 = new _Set(valueResult);
  closure_24[guild_id] = _Set1;
  const tmp12Result2 = _modDef12;
  const found1 = tmp12Result2.filter(obj.channel_overrides, (flags) => {
    let num = flags.flags;
    const hasFlag = FlagUtilsAll.hasFlag;
    FlagUtilsAll;
    if (num == null) {
      num = 0;
    }
    return hasFlag(num, constants.OPT_IN_ENABLED);
  });
  optedInChannelsByGuild[guild_id] = new Set(found1.map(f89966));
  new Set(found1.map(f89966));
  if (null != guild_id) {
    const _Set2 = Set;
    const self = this;
    const self2 = this;
    set1 = new Set(optedInChannelsByGuild[guild_id]);
    obj2 = closure_28[guild_id];
    if (obj2 == null) {
      obj2 = {};
    }
    for (const key10101 in obj2) {
      let tmp29 = obj2[key10101];
      let obj8 = FlagUtilsAll;
      if (obj8.hasFlag(tmp29.flags, constants.OPT_IN_ENABLED)) {
        let addResult = set1.add(key10101);
        continue;
      } else {
        let deleteResult = set1.delete(key10101);
        continue;
      }
      continue;
    }
    const _Object = Object;
    let num = 0;
    if (Object.keys(obj2).length > 0) {
      closure_29[guild_id] = set1;
    } else {
      delete closure_29[tmp];
    }
  }
  delete closure_17[tmp];
}
function updateUserGuildChannelSettingsBulk(guildId, channel_overrides) {
  let closure_0 = guildId;
  importDefault = channel_overrides;
  let obj = {};
  obj2 = null;
  if (null != guildId) {
    obj2 = closure_28[guildId];
  }
  if (obj2 == null) {
    obj2 = {};
  }
  const obj3 = require("SnowflakeUtils");
  const keys = obj3.keys(channel_overrides);
  const item = keys.forEach((channel_id) => {
    obj = { channel_id, muted: false };
    const tmp = channel_overrides[channel_id];
    channel_overrides = undefined;
    if (userGuildSettings[guildId] != null) {
      channel_overrides = tmp2.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const merged = Object.assign(channel_overrides[channel_id]);
    const merged1 = Object.assign(tmp);
    obj[channel_id] = obj;
    let num = obj.flags;
    if (num == null) {
      num = 0;
    }
    obj2[channel_id] = { flags: num };
  });
  if (null != guildId) {
    const obj4 = {};
    let merged = Object.assign(closure_28[guildId]);
    let merged1 = Object.assign(obj2);
    closure_28[guildId] = obj4;
  }
  let tmp11 = obj;
  if (null != userGuildSettings[guildId]) {
    channel_overrides = undefined;
    if (userGuildSettings[guildId] != null) {
      channel_overrides = tmp9.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const obj5 = {};
    const merged2 = Object.assign(channel_overrides);
    const merged3 = Object.assign(obj);
    tmp11 = obj5;
  }
  updateUserGuildSettingsInternal(guildId, { channel_overrides: tmp11 });
}
function handleGuildUpdate() {
  return true;
}
({ THREAD_CHANNEL_TYPES: metroRequire, isPrivate: metroImportDefault } = ChannelRecord);
const UserNotificationSettings = Constants.UserNotificationSettings;
const HighlightSettings = Constants.HighlightSettings;
const AccountNotificationFlags = NotificationConstants.AccountNotificationFlags;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ ChannelNotificationSettingsFlags: closure_14, GuildNotificationSettingsFlags: closure_15 } = UserSettingsConstants);
const authStore3 = {};
let closure_17 = {};
const authStore4 = false;
let closure_19 = false;
let settings = { flags: 0 };
let tmp5 = new MuteTimersDefault();
const navigation = tmp5;
const tmp6 = new MuteTimersDefault();
const navigation2 = tmp6;
let obj = {
  suppress_everyone: false,
  suppress_roles: false,
  mute_scheduled_events: false,
  mobile_push: true,
  muted: false,
  message_notifications: UserNotificationSettings.ALL_MESSAGES,
  flags: 0,
  channel_overrides: {},
  notify_highlights: HighlightSettings.NULL,
  hide_muted_channels: false,
  version: -1,
  mute_config: null,
};
let obj2 = {};
let obj3 = { message_notifications: UserNotificationSettings.ALL_MESSAGES };
let ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
let merged = Object.assign(obj);
obj2[ALL_MESSAGES] = obj3;
let obj4 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS };
let ONLY_MENTIONS = UserNotificationSettings.ONLY_MENTIONS;
let merged1 = Object.assign(obj);
obj2[ONLY_MENTIONS] = obj4;
let mutedChannels = {};
let optedInChannelsByGuild = {};
new Set();
let set1 = new Set();
let closure_28 = {};
let set = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class UserGuildSettingsStoreClass extends PersistedStore {
  initialize(useNewNotifications) {
    this.waitFor(ChannelStore, GuildStore, ImpersonateStore, JoinedThreadsStore, UserStore);
    if (null != useNewNotifications) {
      let flag = useNewNotifications.useNewNotifications;
      if (flag == null) {
        flag = false;
      }
      let closure_18 = flag;
      if ("userGuildSettings" in useNewNotifications) {
        userGuildSettings = useNewNotifications.userGuildSettings;
        let prop = useNewNotifications.optedInChannelsByGuild;
        const mapValues = _modDef12.mapValues;
        _modDef12;
        if (prop == null) {
          prop = {};
        }
        let closure_25 = mapValues(prop, (items) => {
          set = new Set(items);
          return set;
        });
        const tmp2Result = _modDef12;
        const item = tmp2Result.forEach(userGuildSettings, (channel_overrides, arg1) => {
          let valueResult = null;
          const _Set = Set;
          if (null != channel_overrides.channel_overrides) {
            const arr = _modDef12(channel_overrides.channel_overrides);
            const found = arr.filter((item) => {
              const obj = closure_1_0(closure_1_3[10]);
              return obj.computeIsMuted(item);
            });
            const iter = found.map(f89971);
            valueResult = iter.value();
          }
          const _Set1 = new _Set(valueResult);
          mutedChannels[arg1] = _Set1;
        });
      }
    }
  }
  getState() {
    return { useNewNotifications };
  }
  isSuppressEveryoneEnabled(guildId) {
    let tmp = userGuildSettings[guildId];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    return tmp.suppress_everyone;
  }
  isSuppressRolesEnabled(guildId) {
    let tmp = userGuildSettings[guildId];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    return tmp.suppress_roles;
  }
  isMuteScheduledEventsEnabled(guildId) {
    let tmp = userGuildSettings[guildId];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    return tmp.mute_scheduled_events;
  }
  isMobilePushEnabled(guildId) {
    let tmp = userGuildSettings[guildId];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    return tmp.mobile_push;
  }
  isMuted(arg0) {
    let tmp = userGuildSettings[arg0];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(arg0);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    const obj = MuteTimers;
    return obj.computeIsMuted(tmp);
  }
  isTemporarilyMuted(arg0) {
    let tmp = userGuildSettings[arg0];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(arg0);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    const obj = MuteTimers;
    return obj.isTemporarilyMuted(tmp);
  }
  getMuteConfig(arg0) {
    let tmp = userGuildSettings[arg0];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(arg0);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    return tmp.mute_config;
  }
  getMessageNotifications(guildId) {
    let tmp = userGuildSettings[guildId];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    return tmp.message_notifications;
  }
  getChannelOverrides(guild_id) {
    let tmp = userGuildSettings[guild_id];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(guild_id);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    let channel_overrides = tmp.channel_overrides;
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    return channel_overrides;
  }
  getNotifyHighlights(guildId) {
    let tmp = userGuildSettings[guildId];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    return tmp.notify_highlights;
  }
  getGuildFlags(guildId) {
    let tmp = userGuildSettings[guildId];
    if (tmp == null) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp = obj2[ALL_MESSAGES];
    }
    return tmp.flags;
  }
  getChannelMessageNotifications(guildId, channelId) {
    const tmp = this.getChannelOverrides(guildId)[channelId];
    if (null != tmp) {
      let NULL;
      if (null != tmp.message_notifications) {
        NULL = tmp.message_notifications;
      }
      return NULL;
    }
    NULL = UserNotificationSettings.NULL;
  }
  getChannelMuteConfig(guild_id, id) {
    const tmp = this.getChannelOverrides(guild_id)[id];
    let mute_config = null;
    if (null != tmp) {
      mute_config = tmp.mute_config;
    }
    return mute_config;
  }
  getMutedChannels(guildId) {
    let tmp = mutedChannels[guildId];
    if (tmp == null) {
      tmp = set;
    }
    return tmp;
  }
  isChannelMuted(guildId, id) {
    const channel = ChannelStore.getChannel(id);
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    mutedChannels = this.getMutedChannels(guildId);
    return mutedChannels.has(id);
  }
  isCategoryMuted(guild_id, item) {
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
  }
  resolvedMessageNotifications(channel) {
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
  }
  resolveUnreadSetting(channel) {
    if (metroRequire.has(channel.type)) {
      return UnreadSetting.ALL_MESSAGES;
    } else if (metroImportDefault(channel.type)) {
      return UnreadSetting.ALL_MESSAGES;
    } else if (useNewNotifications) {
      const self = this;
      const channelUnreadSetting = this.getChannelUnreadSetting(channel.guild_id, channel.id);
      if (channelUnreadSetting !== UnreadSetting.UNSET) {
        return channelUnreadSetting;
      } else {
        if (null != channel.parent_id) {
          const channelUnreadSetting1 = self.getChannelUnreadSetting(channel.guild_id, channel.parent_id);
          if (channelUnreadSetting1 !== UnreadSetting.UNSET) {
            return channelUnreadSetting1;
          }
        }
        let guildUnreadSetting = self.getGuildUnreadSetting(channel.guild_id);
        if (guildUnreadSetting === UnreadSetting.UNSET) {
          guildUnreadSetting =
            self.resolvedMessageNotifications(channel) === UserNotificationSettings.ALL_MESSAGES
              ? UnreadSetting.ALL_MESSAGES
              : UnreadSetting.ONLY_MENTIONS;
        }
        return guildUnreadSetting;
      }
    } else {
      return UnreadSetting.ALL_MESSAGES;
    }
  }
  isGuildOrCategoryOrChannelMuted(guild_id, id) {
    const self = this;
    const tmp = this.isMuted(guild_id) || self.isCategoryMuted(guild_id, id) || self.isChannelMuted(guild_id, id);
    return tmp;
  }
  allowNoMessages(channel1) {
    const self = this;
    let result =
      this.isGuildOrCategoryOrChannelMuted(channel1.guild_id, channel1.id) ||
      self.resolvedMessageNotifications(channel1) === UserNotificationSettings.NO_MESSAGES;
    if (!result) {
      result = self.isOptInEnabled(channel1.guild_id) && !self.isChannelRecordOrParentOptedIn(channel1);
      self.isOptInEnabled(channel1.guild_id) && !self.isChannelRecordOrParentOptedIn(channel1);
    }
    return result;
  }
  allowAllMessages(channel1) {
    const self = this;
    const result = this.isGuildOrCategoryOrChannelMuted(channel1.guild_id, channel1.id);
    let tmp2 = !result && self.resolvedMessageNotifications(channel1) === UserNotificationSettings.ALL_MESSAGES;
    if (tmp2) {
      const isOptInEnabledResult = self.isOptInEnabled(channel1.guild_id);
      let result1 = !isOptInEnabledResult;
      if (isOptInEnabledResult) {
        result1 = self.isChannelRecordOrParentOptedIn(channel1);
      }
      tmp2 = result1;
    }
    return tmp2;
  }
  isGuildCollapsed(id) {
    let hide_muted_channels;
    if (userGuildSettings[id] != null) {
      hide_muted_channels = tmp.hide_muted_channels;
    }
    return true === hide_muted_channels;
  }
  getAllSettings() {
    return { userGuildSettings, mutedChannels, optedInChannelsByGuild };
  }
  getChannelIdFlags(guild_id, id) {
    const tmp = this.getChannelOverrides(guild_id)[id];
    let num;
    if (tmp != null) {
      num = tmp.flags;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getChannelFlags(guild_id) {
    return this.getChannelIdFlags(guild_id.guild_id, guild_id.id);
  }
  getNewForumThreadsCreated(channel) {
    const self = this;
    const tmp = this.getChannelOverrides(channel.guild_id)[channel.id];
    if (null != tmp) {
      if (null != tmp.flags) {
        const obj = FlagUtilsAll;
        if (obj.hasFlag(tmp.flags, constants.NEW_FORUM_THREADS_ON)) {
          return true;
        } else {
          const tmp2Result = FlagUtilsAll;
          if (tmp2Result.hasFlag(tmp.flags, constants.NEW_FORUM_THREADS_OFF)) {
            return false;
          }
        }
      }
    }
    return self.resolvedMessageNotifications(channel) === UserNotificationSettings.ALL_MESSAGES;
  }
  isOptInEnabled(id) {
    let tmp = null != id;
    if (tmp) {
      let isOptInEnabledResult;
      if (ImpersonateStore.isFullServerPreview(id)) {
        isOptInEnabledResult = ImpersonateStore.isOptInEnabled(id);
      } else {
        const self = this;
        obj2 = FlagUtilsAll;
        isOptInEnabledResult = obj2.hasFlag(this.getGuildFlags(id), constants2.OPT_IN_CHANNELS_ON);
      }
      tmp = isOptInEnabledResult;
    }
    return tmp;
  }
  isChannelRecordOrParentOptedIn(channel, arg1) {
    let tmp = null != channel && null != channel.guild_id;
    if (tmp) {
      const self = this;
      let isChannelOptedInResult = this.isChannelOptedIn(channel.guild_id, channel.id, arg1);
      if (!isChannelOptedInResult) {
        isChannelOptedInResult =
          null != channel.parent_id && self.isChannelOptedIn(channel.guild_id, channel.parent_id, arg1);
        null != channel.parent_id && self.isChannelOptedIn(channel.guild_id, channel.parent_id, arg1);
      }
      tmp = isChannelOptedInResult;
    }
    return tmp;
  }
  isChannelOrParentOptedIn(_guildId, channelId, arg2) {
    return this.isChannelRecordOrParentOptedIn(ChannelStore.getChannel(channelId), arg2);
  }
  isChannelOptedIn(id, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    if (null == id) {
      return false;
    } else if (ImpersonateStore.isFullServerPreview(id)) {
      return ImpersonateStore.isChannelOptedIn(id, arg1);
    } else {
      if (flag) {
        if (null != closure_29[id]) {
          obj2 = closure_29[id];
          return obj2.has(arg1);
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
      const obj = FlagUtilsAll;
      return obj.hasFlag(num, constants.OPT_IN_ENABLED);
    }
  }
  getOptedInChannels(id) {
    let tmp2;
    if (ImpersonateStore.isFullServerPreview(id)) {
      let viewingChannels = ImpersonateStore.getViewingChannels(id);
      if (viewingChannels == null) {
        viewingChannels = set1;
      }
      tmp2 = viewingChannels;
    } else {
      tmp2 = optedInChannelsByGuild[id];
      if (tmp2 == null) {
        tmp2 = set1;
      }
    }
    return tmp2;
  }
  getOptedInChannelsWithPendingUpdates(id) {
    return closure_29[id];
  }
  getPendingChannelUpdates(guildId) {
    return closure_28[guildId];
  }
  getGuildFavorites(id) {
    let closure_0 = id;
    if (ImpersonateStore.isFullServerPreview(id)) {
      return null;
    } else {
      if (null == closure_17[id]) {
        const self = this;
        const arr = _modDef12;
        const found = arr.filter(this.getChannelOverrides(id), (flags) => {
          let num = flags.flags;
          const hasFlag = FlagUtilsAll.hasFlag;
          FlagUtilsAll;
          if (num == null) {
            num = 0;
          }
          let hasFlagResult = hasFlag(num, constants.FAVORITED);
          if (hasFlagResult) {
            const channel = ChannelStore.getChannel(flags.channel_id);
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            hasFlagResult = guild_id === id;
          }
          return hasFlagResult;
        });
        closure_17[id] = found.map((channel_id) => channel_id.channel_id);
      }
      return closure_17[id];
    }
  }
  isFavorite(id, arg1) {
    let tmp2 = !ImpersonateStore.isFullServerPreview(id);
    ImpersonateStore.isFullServerPreview(id);
    if (tmp2) {
      const self = this;
      const guildFavorites = this.getGuildFavorites(id);
      let hasItem;
      if (guildFavorites != null) {
        hasItem = guildFavorites.includes(arg1);
      }
      tmp2 = true === hasItem;
    }
    return tmp2;
  }
  isMessagesFavorite(id) {
    const tmp = this.getChannelOverrides(null)[id];
    let num;
    if (tmp != null) {
      num = tmp.flags;
    }
    if (num == null) {
      num = 0;
    }
    const obj = FlagUtilsAll;
    return obj.hasFlag(num, constants.FAVORITED);
  }
  getGuildUnreadSetting(guild_id) {
    if (useNewNotifications) {
      let ALL_MESSAGES;
      const self = this;
      const guildFlags = this.getGuildFlags(guild_id);
      const obj = FlagUtilsAll;
      if (obj.hasFlag(guildFlags, constants2.UNREADS_ALL_MESSAGES)) {
        ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
      } else {
        const tmp5Result = FlagUtilsAll;
        ALL_MESSAGES = tmp5Result.hasFlag(guildFlags, constants2.UNREADS_ONLY_MENTIONS)
          ? UnreadSetting.ONLY_MENTIONS
          : UnreadSetting.UNSET;
      }
      return ALL_MESSAGES;
    } else {
      return UnreadSetting.ALL_MESSAGES;
    }
  }
  resolveGuildUnreadSetting(guild) {
    let ALL_MESSAGES;
    const guildFlags = this.getGuildFlags(guild.id);
    if (useNewNotifications) {
      let ONLY_MENTIONS;
      const obj = FlagUtilsAll;
      if (obj.hasFlag(guildFlags, constants2.UNREADS_ALL_MESSAGES)) {
        ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
      } else {
        const tmp4Result = FlagUtilsAll;
        if (tmp4Result.hasFlag(guildFlags, constants2.UNREADS_ONLY_MENTIONS)) {
          ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
        } else if (guild.defaultMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
          ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
        } else {
          ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
        }
      }
      ALL_MESSAGES = ONLY_MENTIONS;
    } else {
      ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    }
    return ALL_MESSAGES;
  }
  getChannelRecordUnreadSetting(guild_id) {
    return this.getChannelUnreadSetting(guild_id.guild_id, guild_id.id);
  }
  getChannelUnreadSetting(guild_id, id) {
    let ALL_MESSAGES;
    const channelIdFlags = this.getChannelIdFlags(guild_id, id);
    const obj = FlagUtilsAll;
    if (obj.hasFlag(channelIdFlags, constants.UNREADS_ALL_MESSAGES)) {
      ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    } else {
      const tmp2Result = FlagUtilsAll;
      ALL_MESSAGES = tmp2Result.hasFlag(channelIdFlags, constants.UNREADS_ONLY_MENTIONS)
        ? UnreadSetting.ONLY_MENTIONS
        : UnreadSetting.UNSET;
    }
    return ALL_MESSAGES;
  }
}
const prototype = UserGuildSettingsStoreClass.prototype;
Object.defineProperty(prototype, "mentionOnAllMessages", {
  get: function mentionOnAllMessages() {
    return closure_19;
  },
  set: undefined,
});
Object.defineProperty(prototype, "accountNotificationSettings", {
  get: function accountNotificationSettings() {
    return settings;
  },
  set: undefined,
});
Object.defineProperty(prototype, "useNewNotifications", {
  get: function useNewNotifications() {
    return useNewNotifications;
  },
  set: undefined,
});
UserGuildSettingsStoreClass.displayName = "UserGuildSettingsStore";
UserGuildSettingsStoreClass.persistKey = "collapsedGuilds";
let obj5 = {
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => {
      guild_id = guild_id.guild_id;
      const obj = { channel_overrides: {} };
      const merged = Object.assign(guild_id);
      updateUserGuildSettingsInternal(guild_id, obj);
    });
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: function handleUserGuildSettingsGuildUpdate(arg0) {
    let guildId;
    ({ guildId, settings } = arg0);
    let channel_overrides;
    if (userGuildSettings[guildId] != null) {
      channel_overrides = tmp.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const obj = { channel_overrides };
    const merged = Object.assign(settings);
    updateUserGuildSettingsInternal(guildId, obj);
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function handleUserGuildSettingsGuildAndChannelsUpdate(arg0) {
    let guildId;
    ({ guildId, settings } = arg0);
    let channel_overrides;
    if (userGuildSettings[guildId] != null) {
      channel_overrides = tmp.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const obj = { channel_overrides };
    const merged = Object.assign(settings);
    updateUserGuildSettingsInternal(guildId, obj);
    updateUserGuildChannelSettingsBulk(guildId, settings.channel_overrides);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: function handleUserGuildSettingsChannelUpdate(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId, settings } = arg0);
    const tmp = null != guildId && null != settings.flags;
    if (tmp) {
      const obj = {};
      const merged = Object.assign(closure_28[guildId]);
      obj2 = { flags: settings.flags };
      obj[channelId] = obj2;
      closure_28[guildId] = obj;
    }
    let channel_overrides;
    const obj3 = { channel_id: channelId, muted: false };
    if (userGuildSettings[guildId] != null) {
      channel_overrides = tmp5.channel_overrides;
    }
    if (channel_overrides == null) {
      channel_overrides = {};
    }
    const merged1 = Object.assign(channel_overrides[channelId]);
    const merged2 = Object.assign(settings);
    const obj4 = { [channelId]: obj3 };
    let tmp10 = obj4;
    if (null != userGuildSettings[guildId]) {
      let channel_overrides1;
      if (userGuildSettings[guildId] != null) {
        channel_overrides1 = tmp8.channel_overrides;
      }
      if (channel_overrides1 == null) {
        channel_overrides1 = {};
      }
      const obj5 = {};
      const merged3 = Object.assign(channel_overrides1);
      const merged4 = Object.assign(obj4);
      tmp10 = obj5;
    }
    updateUserGuildSettingsInternal(guildId, { channel_overrides: tmp10 });
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function handleUserGuildSettingsChannelUpdateBulk(guildId) {
    guildId = guildId.guildId;
    let flag = null != guildId;
    const overrides = guildId.overrides;
    if (flag) {
      flag = !ImpersonateStore.isFullServerPreview(guildId);
    }
    if (flag) {
      updateUserGuildChannelSettingsBulk(guildId, overrides);
      flag = true;
    }
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    let closure_16;
    notificationSettings = notificationSettings.notificationSettings;
    let obj = FlagUtilsAll;
    let closure_18 = obj.hasFlag(notificationSettings.flags, AccountNotificationFlags.USE_NEW_NOTIFICATIONS);
    obj2 = FlagUtilsAll;
    closure_19 = obj2.hasFlag(notificationSettings.flags, AccountNotificationFlags.MENTION_ON_ALL_MESSAGES);
    navigation.reset();
    navigation2.reset();
    if (!notificationSettings.userGuildSettings.partial) {
      userGuildSettings = {};
      let closure_24 = {};
      let closure_25 = {};
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
    for (const key10044 in userGuildSettings) {
      if (set.has(key10044)) {
        continue;
      } else {
        let tmp5 = userGuildSettings[key10044];
        if (true === tmp5.muted) {
          if (
            navigation.setTimer(key10044, tmp5.mute_config, () => {
              let channel_overrides;
              if (closure_16[key10044] != null) {
                channel_overrides = tmp2.channel_overrides;
              }
              if (channel_overrides == null) {
                channel_overrides = {};
              }
              const obj = { channel_overrides };
              const merged = Object.assign({ muted: false });
              updateUserGuildSettingsInternal(key10044, obj);
              const obj3 = DispatcherDefault;
              obj3.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: key10044 });
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
                let channel_overrides;
                const obj = { channel_id, muted: false };
                if (closure_16[key10044] != null) {
                  channel_overrides = tmp3.channel_overrides;
                }
                if (channel_overrides == null) {
                  channel_overrides = {};
                }
                obj2 = { muted: false };
                const merged = Object.assign(channel_overrides[channel_id]);
                const merged1 = Object.assign(obj2);
                const obj3 = { [channel_id]: obj };
                let tmp8 = obj3;
                if (null != closure_16[key10044]) {
                  let channel_overrides1;
                  if (closure_16[key10044] != null) {
                    channel_overrides1 = tmp6.channel_overrides;
                  }
                  if (channel_overrides1 == null) {
                    channel_overrides1 = {};
                  }
                  const obj4 = {};
                  const merged2 = Object.assign(channel_overrides1);
                  const merged3 = Object.assign(obj3);
                  tmp8 = obj4;
                }
                updateUserGuildSettingsInternal(key10044, { channel_overrides: tmp8 });
                const obj5 = { type: "CHANNEL_MUTE_EXPIRED", guildId: key10044, channelId: muted.channel_id };
                const obj7 = DispatcherDefault;
                obj7.dispatch(obj5);
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
      let num = 0;
      tmp = 0 !== userGuildSettings.userGuildSettings.length;
    }
    if (tmp) {
      let closure_16 = {};
      let closure_24 = {};
      let closure_25 = {};
      userGuildSettings = userGuildSettings.userGuildSettings;
      const item = userGuildSettings.forEach((guild_id) => {
        guild_id = guild_id.guild_id;
        userGuildSettings[guild_id] = guild_id;
        set = new Set();
        set1 = new Set();
        for (const key10018 in guild_id.channel_overrides) {
          let tmp7 = guild_id.channel_overrides[key10018];
          let obj3 = MuteTimers;
          if (obj3.computeIsMuted(tmp7)) {
            let addResult = set.add(key10018);
          }
          let tmp3 = FlagUtilsAll;
          let num = tmp7.flags;
          let hasFlag = tmp3.hasFlag;
          if (num == null) {
            num = 0;
          }
          if (!hasFlag(num, constants.OPT_IN_ENABLED)) {
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
    let obj;
    allUserGuildSettings = allUserGuildSettings.allUserGuildSettings;
    mutedChannels = allUserGuildSettings.mutedChannels;
    optedInChannelsByGuild = allUserGuildSettings.optedInChannelsByGuild;
    const merged = Object.assign(allUserGuildSettings.userGuildSettings);
    let closure_24 = {};
    let closure_25 = {};
    obj2 = optedInChannelsByGuild(11);
    const keys = obj2.keys(mutedChannels);
    const item = keys.forEach((item) => {
      closure_24[item] = new Set(mutedChannels[item]);
      new Set(mutedChannels[item]);
    });
    const obj3 = optedInChannelsByGuild(11);
    const keys1 = obj3.keys(optedInChannelsByGuild);
    const item1 = keys1.forEach((item) => {
      closure_25[item] = new Set(optedInChannelsByGuild[item]);
      new Set(optedInChannelsByGuild[item]);
    });
  },
  GUILD_CREATE: handleGuildUpdate,
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_TOGGLE_COLLAPSE_MUTED: function handleToggleCollapseMuted(guildId) {
    let tmp2;
    guildId = guildId.guildId;
    if (null == userGuildSettings[guildId]) {
      let ALL_MESSAGES;
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        ALL_MESSAGES = guild.defaultMessageNotifications;
      } else {
        ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
      }
      tmp2 = obj2[ALL_MESSAGES];
    } else {
      tmp2 = userGuildSettings[guildId];
    }
    const obj = { guild_id: guildId, hide_muted_channels: true !== tmp2.hide_muted_channels };
    const merged = Object.assign(tmp2);
    userGuildSettings[guildId] = obj;
  },
  IMPERSONATE_UPDATE: handleGuildUpdate,
  IMPERSONATE_STOP: handleGuildUpdate,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function handleRemovePendingUpdates(arg0) {
    let guildId;
    let updates;
    ({ guildId, updates } = arg0);
    if (null == guildId) {
      return false;
    } else if (null == closure_28[guildId]) {
      return false;
    } else {
      for (const key10009 in updates) {
        let obj = _modDef12;
        if (!obj.isEqual(updates[key10009], tmp2[key10009])) {
          continue;
        } else {
          delete tmp2[key10009];
          continue;
        }
        continue;
      }
    }
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function handleClearPendingUpdates(guildId) {
    guildId = guildId.guildId;
    if (null == guildId) {
      return false;
    } else {
      delete closure_28[guildId];
      delete closure_29[guildId];
    }
  },
  NOTIFICATION_SETTINGS_UPDATE: function handleNotificationSettingsUpdate(settings) {
    settings = settings.settings;
    const obj = FlagUtilsAll;
    let closure_18 = obj.hasFlag(settings.flags, AccountNotificationFlags.USE_NEW_NOTIFICATIONS);
    obj2 = FlagUtilsAll;
    closure_19 = obj2.hasFlag(settings.flags, AccountNotificationFlags.MENTION_ON_ALL_MESSAGES);
  },
  GUILD_MUTE_EXPIRED() {
    return true;
  },
  CHANNEL_MUTE_EXPIRED() {
    return true;
  },
};
const userGuildSettingsStoreClass = new UserGuildSettingsStoreClass(DispatcherDefault, obj5);
let result = size.fileFinishedImporting("stores/UserGuildSettingsStore.tsx");

export default userGuildSettingsStoreClass;
export const getGuildDefaults = function getGuildDefaults(arg0) {
  let ALL_MESSAGES;
  const guild = GuildStore.getGuild(arg0);
  if (null != guild) {
    ALL_MESSAGES = guild.defaultMessageNotifications;
  } else {
    ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
  }
  return obj2[ALL_MESSAGES];
};
export const convertChannelOverridesToMap = function convertChannelOverridesToMap() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let keyByResult = obj;
  if (obj instanceof Array) {
    obj2 = _modDef12;
    keyByResult = obj2.keyBy(obj, "channel_id");
  }
  return keyByResult;
};
