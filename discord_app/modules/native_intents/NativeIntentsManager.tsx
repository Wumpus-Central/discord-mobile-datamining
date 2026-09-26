// === Module 17682: NativeIntentsManager ===

// Module 17682 (NativeIntentsManager)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import useChannelName from "useChannelName" /* 4989 */;
import getChannelIcon from "getChannelIcon" /* 12586 */;
import NativeIntentsExperimentDefault from "NativeIntentsExperiment" /* 17683 */;
import IntentsBindingsDefault from "IntentsBindings" /* 17684 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;

require = fn;
function indexingEnabled() {
  const obj2 = { autoTrackExposure: true, disable: null };
  const obj = NativeIntentsExperimentDefault;
  obj2.disable = !IntentsBindingsDefault.hasSearch();
  return obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj2).searchEnabled;
}
function makeSearchItem(channel, guild) {
  if (flag === undefined) {
    flag = false;
  }
  const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore, true);
  const channelName1 = useChannelName.computeChannelName(channel, UserStore, RelationshipStore, false);
  const items = [channelName, channelName1];
  if (channel.isGuildVocal()) {
    const _HermesInternal = HermesInternal;
    items.push("!" + channelName1);
  }
  const items1 = [];
  const items2 = [];
  channel = ChannelStore.getChannel(channel.parent_id);
  if (null != channel) {
    const tmpResult = useChannelName;
    const channelName2 = tmpResult.computeChannelName(channel, UserStore, RelationshipStore, true);
    const tmpResult3 = useChannelName;
    const channelName3 = tmpResult3.computeChannelName(channel, UserStore, RelationshipStore, false);
    items2.push(channelName2);
    items2.push(channelName3);
    items1.push(channelName2);
  }
  if (null != guild) {
    items2.push(guild.name);
    items1.push(guild.name);
  }
  let str2 = "";
  if (items1.length > 0) {
    const _HermesInternal2 = HermesInternal;
    str2 = " (" + items1.join(", ") + ")";
  }
  const sum = channelName + str2;
  id = undefined;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = closure_1_10;
  }
  const CHANNELResult = closure_1_14.CHANNEL(id, channel.id);
  const obj3 = { id: CHANNELResult, relatedUniqueIdentifier: CHANNELResult, type: "url", title: sum, displayName: sum, thumbnailURL: null, rankingHint: null, keywords: null, alternateNames: null, isUpdate: null };
  const channelIconURL = getChannelIcon.getChannelIconURL(channel, 128, false);
  let startsWithResult;
  if (channelIconURL != null) {
    const startsWith = channelIconURL.startsWith;
    if (startsWith != null) {
      startsWithResult = startsWith("/");
    }
  }
  if (startsWithResult) {
    const _location = location;
    let sum1 = location.origin + channelIconURL;
  } else {
    sum1 = channelIconURL;
  }
  obj3.thumbnailURL = sum1;
  if (channel.type === constants.DM) {
    let OTHER_CHANNEL = constants4.DM;
  } else {
    OTHER_CHANNEL = constants4.OTHER_CHANNEL;
  }
  obj3.rankingHint = OTHER_CHANNEL;
  obj3.keywords = items2;
  obj3.alternateNames = items;
  obj3.isUpdate = flag;
  return obj3;
}
function getGuildThumbnail(guild1) {
  if (null != guild1) {
    ({ id: obj2.id, icon: obj2.icon } = guild1);
    const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 128 });
    let startsWithResult;
    if (guildIconURL != null) {
      const startsWith = guildIconURL.startsWith;
      if (startsWith != null) {
        startsWithResult = startsWith("/");
      }
    }
    if (startsWithResult) {
      const _location = location;
      let sum = location.origin + guildIconURL;
    } else {
      sum = guildIconURL;
    }
    const obj3 = { id: null, icon: null, size: 128 };
  }
}
function makeGuildDomain(guild1) {
  if (flag === undefined) {
    flag = false;
  }
  const CHANNELResult = closure_1_14.CHANNEL(guild1.id);
  const obj = { id: CHANNELResult, relatedUniqueIdentifier: CHANNELResult, type: "url", title: guild1.name, displayName: guild1.name, alternateNames: null, rankingHint: null };
  const items = ["*" + guild1.name];
  obj.alternateNames = items;
  obj.rankingHint = constants4.GUILD;
  const items1 = [obj];
  const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(guild1.id);
  for (const key10030 in mutableGuildChannelsForGuild) {
    let tmp14 = mutableGuildChannelsForGuild[key10030];
    if (!PermissionStore.can(constants3.VIEW_CHANNEL, tmp14)) {
      continue;
    } else {
      let arr = items1.push(makeSearchItem(tmp14, arg0, flag));
      continue;
    }
    continue;
  }
  const allThreadsForGuild = ChannelStore.getAllThreadsForGuild(guild1.id);
  for (const item10042 of allThreadsForGuild) {
    if (PermissionStore.can(constants3.VIEW_CHANNEL, item10042)) {
      let arr2 = items1.push(makeSearchItem(item10042, arg0, flag));
    }
    continue;
  }
  const tmp = getGuildThumbnail(guild1);
  return { id: guild1.id, items: items1, defaultThumbnailURL: getGuildThumbnail(guild1), isUpdate: flag };
}
function setChannelActivity(channelId) {
  const obj2 = { autoTrackExposure: true, disable: null };
  const obj = NativeIntentsExperimentDefault;
  obj2.disable = !IntentsBindingsDefault.hasUserActivity();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj2).activityEnabled) {
    let channel;
    if (null != channelId) {
      channel = ChannelStore.getChannel(channelId);
    }
    if (null != channel) {
      const guild = GuildStore.getGuild(channel.guild_id);
      const obj5 = useChannelName;
      const channelName = obj5.computeChannelName(channel, UserStore, RelationshipStore, true);
      let str2 = "";
      if (null != guild) {
        const _HermesInternal = HermesInternal;
        str2 = " (" + guild.name + ")";
      }
      const sum = channelName + str2;
      const items = [channelName];
      const items1 = [];
      if ("" !== channel.name) {
        items1.push(channel.name);
      }
      if (null != channel.nicks) {
        const push = items1.push;
        const _Object = Object;
        const items2 = [];
        HermesBuiltin.arraySpread(Object.values(channel.nicks), 0);
        HermesBuiltin.apply(items2, items1);
      }
      if (channel.type === constants.DM) {
        const recipients = channel.recipients;
        const mapped = recipients.map(UserStore.getUser);
        const first = _slicedToArray(mapped.filter(GlobalUtils.isNotNullish), 1)[0];
        if (null != first) {
          const globalName = UserUtilsDefault.getGlobalName(first);
          if (null != globalName) {
            items1.push(globalName);
          }
          items1.push(first.username);
          items1.push(`@${tmp50.username}`);
          const nickname = RelationshipStore.getNickname(first.id);
          if (null != nickname) {
            items1.push(nickname);
          }
          const tmpResult = UserUtilsDefault;
          const name = UserUtilsDefault.getName(first);
          if (null != name) {
            items1.push(name);
          }
          const tmpResult4 = UserUtilsDefault;
        }
      }
      HermesBuiltin.arraySpread(items1, 1);
      const set = new Set(items);
      const items3 = [];
      HermesBuiltin.arraySpread(set, 0);
      const CHANNELResult = closure_1_14.CHANNEL(channel.guild_id, channel.id);
      const obj4 = { webpageURL: null, relatedUniqueIdentifier: null, eligibleForHandoff: true, eligibleForSearch: true, title: null, keywords: null, displayName: null, type: "com.discord.view-channel" };
      const _HermesInternal2 = HermesInternal;
      obj4.webpageURL = "" + constants2.BASE_URL + CHANNELResult;
      obj4.relatedUniqueIdentifier = CHANNELResult;
      obj4.title = sum;
      obj4.keywords = items3;
      obj4.displayName = sum;
      IntentsBindingsDefault.setActivity(obj4);
      const tmpResult5 = IntentsBindingsDefault;
    } else {
      IntentsBindingsDefault.resignActivity();
      const tmpResult6 = IntentsBindingsDefault;
    }
  }
}
function indexChannelUpdates(items) {
  if (indexingEnabled()) {
    items = [];
    const items1 = [];
    const obj = {};
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      if (PermissionStore.can(constants3.VIEW_CHANNEL, nextResult)) {
        let guild = GuildStore.getGuild(tmp7.guild_id);
        let tmp15 = guild;
        id = undefined;
        if (guild != null) {
          id = guild.id;
        }
        if (id == null) {
          id = closure_1_10;
        }
        let tmp17 = id;
        let tmp21 = makeSearchItem(tmp7, tmp15, true);
        let tmp22 = obj[id];
        let arr3 = tmp22;
        if (null != tmp22) {
          let arr = arr3.push(tmp21);
        } else {
          let items2 = [tmp21];
          let obj2 = { id: null, items: null, defaultThumbnailURL: null };
          obj2.id = tmp17;
          obj2.items = items2;
          obj2.defaultThumbnailURL = getGuildThumbnail(tmp15);
          let arr2 = items.push(obj2);
          obj[tmp17] = items2;
        }
      } else {
        let arr4 = items1.push(tmp7.id);
      }
      continue;
    }
    if (items.length > 0) {
      IntentsBindingsDefault.indexDomains(items);
    }
    if (items1.length > 0) {
      IntentsBindingsDefault.deleteSearchItems(items1);
    }
  }
}
const Constants = fn(1074);
({ ME: c10, ChannelTypes: closure_11, Links: closure_12, Permissions: map1, Routes: closure_14 } = Constants);
const constants4 = { GUILD: 100, [100]: "GUILD", DM: 75, [75]: "DM", OTHER_CHANNEL: 50, [50]: "OTHER_CHANNEL" };
class NativeIntentsManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleInit, LOGOUT: applyArgumentsResult.handleLogout, CHANNEL_SELECT: applyArgumentsResult.handleChannelSelect, CHANNEL_CREATE: applyArgumentsResult.handleChannelCreate, CHANNEL_DELETE: applyArgumentsResult.handleChannelDelete, CHANNEL_UPDATES: applyArgumentsResult.handleChannelUpdates, GUILD_CREATE: applyArgumentsResult.handleGuildCreateOrUpdate, GUILD_UPDATE: applyArgumentsResult.handleGuildCreateOrUpdate, GUILD_DELETE: applyArgumentsResult.handleGuildDelete, RELATIONSHIP_ADD: applyArgumentsResult.handleRelationshipChange, RELATIONSHIP_REMOVE: applyArgumentsResult.handleRelationshipChange, RELATIONSHIP_UPDATE: applyArgumentsResult.handleRelationshipChange, THREAD_CREATE: applyArgumentsResult.handleChannelCreate, THREAD_DELETE: applyArgumentsResult.handleChannelDelete, THREAD_UPDATE: applyArgumentsResult.handleThreadUpdate, USER_UPDATE: applyArgumentsResult.handleUserUpdate };
    return applyArgumentsResult;
  }
}
const prototype = NativeIntentsManager.prototype;
prototype["handleInit"] = function handleInit() {
  setChannelActivity(SelectedChannelStore.getCurrentlySelectedChannelId());
  const obj2 = { autoTrackExposure: true, disable: null };
  const obj = NativeIntentsExperimentDefault;
  obj2.disable = !IntentsBindingsDefault.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj2).clearEnabled) {
    IntentsBindingsDefault.clearSearchIndex();
    const tmp2Result = IntentsBindingsDefault;
  }
  const obj4 = { autoTrackExposure: true, disable: null };
  const tmp2Result5 = NativeIntentsExperimentDefault;
  obj4.disable = !IntentsBindingsDefault.hasSearch();
  if (tmp2Result5.getCurrentConfig({ location: "NativeIntentsManager" }, obj4).searchEnabled) {
    const obj5 = { autoTrackExposure: true, disable: null };
    const tmp2Result7 = NativeIntentsExperimentDefault;
    obj5.disable = !IntentsBindingsDefault.hasSearch();
    if (tmp2Result7.getCurrentConfig({ location: "NativeIntentsManager" }, obj5).searchEnabled) {
      const guildsArray = GuildStore.getGuildsArray();
      const mapped = guildsArray.map((item) => makeGuildDomain(item));
      const items = [];
      const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
      for (const key10061 in mutablePrivateChannels) {
        let arr = items.push(makeSearchItem(mutablePrivateChannels[key10061]));
        continue;
      }
      const obj6 = { id, items };
      mapped.push(obj6);
      IntentsBindingsDefault.indexDomains(mapped);
    }
    const tmp2Result8 = IntentsBindingsDefault;
  }
  const tmp2Result6 = IntentsBindingsDefault;
};
prototype["handleLogout"] = function handleLogout() {
  const obj2 = { autoTrackExposure: true, disable: null };
  const obj = NativeIntentsExperimentDefault;
  obj2.disable = !IntentsBindingsDefault.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj2).clearEnabled) {
    IntentsBindingsDefault.clearSearchIndex();
    const tmpResult = IntentsBindingsDefault;
  }
};
prototype["handleChannelSelect"] = function handleChannelSelect(channelId) {
  setChannelActivity(channelId.channelId);
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  channel = channel.channel;
  const obj2 = { autoTrackExposure: true, disable: null };
  const obj = NativeIntentsExperimentDefault;
  obj2.disable = !IntentsBindingsDefault.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj2).searchEnabled) {
    if (PermissionStore.can(constants3.VIEW_CHANNEL, channel)) {
      const guild = GuildStore.getGuild(channel.guild_id);
      if (null != guild) {
        if (null == guild) {
          id = undefined;
          if (guild != null) {
            id = guild.id;
          }
          if (id == null) {
            id = closure_1_10;
          }
          const obj4 = { id, items: null, defaultThumbnailURL: null };
          const items = [makeSearchItem(channel, guild)];
          obj4.items = items;
          obj4.defaultThumbnailURL = undefined;
          const items1 = [obj4];
          IntentsBindingsDefault.indexDomains(items1);
          const tmpResult = IntentsBindingsDefault;
        } else {
          ({ id: obj5.id, icon: obj5.icon } = guild);
          const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 128 });
          let startsWithResult;
          if (guildIconURL != null) {
            const startsWith = guildIconURL.startsWith;
            if (startsWith != null) {
              startsWithResult = startsWith("/");
            }
          }
          if (startsWithResult) {
            const _location = location;
            let sum = location.origin + guildIconURL;
          } else {
            sum = guildIconURL;
          }
          const obj6 = { id: null, icon: null, size: 128 };
          const tmpResult2 = AvatarUtilsDefault;
        }
      }
    }
  }
};
prototype["handleChannelDelete"] = function handleChannelDelete(channel) {
  const obj2 = { autoTrackExposure: true, disable: null };
  const obj = NativeIntentsExperimentDefault;
  obj2.disable = !IntentsBindingsDefault.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj2).searchEnabled) {
    const items = [channel.channel.id];
    IntentsBindingsDefault.deleteSearchItems(items);
    const tmpResult = IntentsBindingsDefault;
  }
};
prototype["handleChannelUpdates"] = function handleChannelUpdates(channels) {
  indexChannelUpdates(channels.channels);
};
prototype["handleGuildCreateOrUpdate"] = function handleGuildCreateOrUpdate(guild) {
  guild = guild.guild;
  const obj2 = { autoTrackExposure: true, disable: null };
  const obj = NativeIntentsExperimentDefault;
  obj2.disable = !IntentsBindingsDefault.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj2).searchEnabled) {
    const guild1 = GuildStore.getGuild(guild.id);
    if (null != guild1) {
      const items = [makeGuildDomain(guild1, "GUILD_UPDATE" === guild.type)];
      IntentsBindingsDefault.indexDomains(items);
      const tmpResult = IntentsBindingsDefault;
    } else {
      const items1 = [guild.id];
      IntentsBindingsDefault.deleteSearchDomains(items1);
      const tmpResult2 = IntentsBindingsDefault;
    }
  }
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  const obj2 = { autoTrackExposure: true, disable: null };
  const obj = NativeIntentsExperimentDefault;
  obj2.disable = !IntentsBindingsDefault.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj2).searchEnabled) {
    const items = [guild.guild.id];
    IntentsBindingsDefault.deleteSearchDomains(items);
    const tmpResult = IntentsBindingsDefault;
  }
};
prototype["handleThreadUpdate"] = function handleThreadUpdate(channel) {
  const items = [channel.channel];
  indexChannelUpdates(items);
};
prototype["handleUserUpdate"] = function handleUserUpdate(user) {
  const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(user.user.id);
  if (null != dMChannelFromUserId) {
    const items = [dMChannelFromUserId];
    indexChannelUpdates(items);
  }
};
prototype["handleRelationshipChange"] = function handleRelationshipChange(relationship) {
  const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(relationship.relationship.id);
  if (null != dMChannelFromUserId) {
    const items = [dMChannelFromUserId];
    indexChannelUpdates(items);
  }
};
const nativeIntentsManager = new NativeIntentsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_intents/NativeIntentsManager.tsx");

export default nativeIntentsManager;