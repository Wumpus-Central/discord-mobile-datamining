// discord_app/modules/native_intents/NativeIntentsManager.tsx
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import getAvatarURLDefault from "../../utils/AvatarUtils.tsx";
import nameFromUserDefault from "../../utils/UserUtils.tsx";
import computeChannelName from "../channel/useChannelName.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import getChannelIconURL from "../channel/getChannelIcon.tsx";
import experimentDefault from "NativeIntentsExperiment.tsx";
import obj132Default from "IntentsBindings.android.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";

require = fn;
function indexingEnabled() {
  const obj = { autoTrackExposure: true, disable: !obj132Default.hasSearch() };
  return obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled;
}
function makeSearchItem(channel, guild, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let obj = computeChannelName;
  const channelName = obj.computeChannelName(channel, closure_9, closure_7, true);
  const channelName1 = computeChannelName.computeChannelName(channel, closure_9, closure_7, false);
  const items = [channelName, channelName1];
  if (channel.isGuildVocal()) {
    const _HermesInternal = HermesInternal;
    items.push("!" + channelName1);
  }
  const items1 = [];
  const items2 = [];
  channel = authStore.getChannel(channel.parent_id);
  if (null != channel) {
    let tmpResult = computeChannelName;
    const channelName2 = tmpResult.computeChannelName(channel, closure_9, closure_7, true);
    tmpResult = computeChannelName;
    const channelName3 = tmpResult.computeChannelName(channel, closure_9, closure_7, false);
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
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = closure_10;
  }
  const CHANNELResult = closure_14.CHANNEL(id, channel.id);
  obj = { id: CHANNELResult, relatedUniqueIdentifier: CHANNELResult, type: "url", title: sum, displayName: sum, thumbnailURL: null, rankingHint: null, keywords: null, alternateNames: null, isUpdate: null };
  const channelIconURL = getChannelIconURL.getChannelIconURL(channel, 128, false);
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
  obj[5] = sum1;
  if (channel.type === constants.DM) {
    let OTHER_CHANNEL = constants4.DM;
  } else {
    OTHER_CHANNEL = constants4.OTHER_CHANNEL;
  }
  obj[6] = OTHER_CHANNEL;
  obj[7] = items2;
  obj[8] = items;
  obj[9] = flag;
  return obj;
}
function getGuildThumbnail(guild) {
  if (null != guild) {
    const obj = { id: null, icon: null, size: 128 };
    ({ id: obj2[0], icon: obj2[1] } = guild);
    const guildIconURL = obj.getGuildIconURL(obj);
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
  }
}
function makeGuildDomain(guild, flag) {
  if (flag === undefined) {
    flag = false;
  }
  const CHANNELResult = closure_14.CHANNEL(guild.id);
  let obj = { id: CHANNELResult, relatedUniqueIdentifier: CHANNELResult, type: "url", title: guild.name, displayName: guild.name, alternateNames: null, rankingHint: null };
  const items = ["*" + guild.name];
  obj[5] = items;
  obj[6] = constants4.GUILD;
  const items1 = [obj];
  const mutableGuildChannelsForGuild = authStore.getMutableGuildChannelsForGuild(guild.id);
  for (const key10030 in mutableGuildChannelsForGuild) {
    let tmp14 = mutableGuildChannelsForGuild[key10030];
    if (!closure_6.can(constants3.VIEW_CHANNEL, tmp14)) {
      continue;
    } else {
      let arr = items1.push(makeSearchItem(tmp14, arg0, flag));
      continue;
    }
    continue;
  }
  const allThreadsForGuild = authStore.getAllThreadsForGuild(guild.id);
  for (const item10042 of allThreadsForGuild) {
    if (closure_6.can(constants3.VIEW_CHANNEL, item10042)) {
      arr = items1.push(makeSearchItem(item10042, arg0, flag));
    }
    continue;
  }
  obj = { id: guild.id, items: items1, defaultThumbnailURL: getGuildThumbnail(guild), isUpdate: flag };
  return obj;
}
function setChannelActivity(channelId) {
  let obj = { autoTrackExposure: true, disable: !obj132Default.hasUserActivity() };
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).activityEnabled) {
    let channel;
    if (null != channelId) {
      channel = authStore.getChannel(channelId);
    }
    if (null != channel) {
      const guild = store.getGuild(channel.guild_id);
      const obj5 = computeChannelName;
      const channelName = obj5.computeChannelName(channel, getUser, nickname, true);
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
        const mapped = recipients.map(getUser.getUser);
        const first = callback(mapped.filter(isDiscordFrontendDevelopment.isNotNullish), 1)[0];
        if (null != first) {
          let tmpResult = nameFromUserDefault;
          const globalName = tmpResult.getGlobalName(first);
          if (null != globalName) {
            items1.push(globalName);
          }
          items1.push(first.username);
          items1.push(`@${tmp50.username}`);
          nickname = nickname.getNickname(first.id);
          if (null != nickname) {
            items1.push(nickname);
          }
          tmpResult = nameFromUserDefault;
          const name = tmpResult.getName(first);
          if (null != name) {
            items1.push(name);
          }
        }
      }
      HermesBuiltin.arraySpread(items1, 1);
      const set = new Set(items);
      const items3 = [];
      HermesBuiltin.arraySpread(set, 0);
      const CHANNELResult = closure_14.CHANNEL(channel.guild_id, channel.id);
      obj = { webpageURL: null, relatedUniqueIdentifier: null, eligibleForHandoff: true, eligibleForSearch: true, title: null, keywords: null, displayName: null, type: "com.discord.view-channel" };
      const _HermesInternal2 = HermesInternal;
      obj[0] = "" + constants2.BASE_URL + CHANNELResult;
      obj[1] = CHANNELResult;
      obj[4] = sum;
      obj[5] = items3;
      obj[6] = sum;
      obj132Default.setActivity(obj);
      const tmpResult1 = obj132Default;
    } else {
      obj132Default.resignActivity();
      const tmpResult2 = obj132Default;
    }
  }
}
function indexChannelUpdates(items) {
  if (indexingEnabled()) {
    items = [];
    const items1 = [];
    let obj = {};
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      if (closure_6.can(constants3.VIEW_CHANNEL, nextResult)) {
        let guild = store.getGuild(tmp7.guild_id);
        let tmp15 = guild;
        let id;
        if (guild != null) {
          id = guild.id;
        }
        if (id == null) {
          id = closure_10;
        }
        let tmp17 = id;
        let tmp21 = makeSearchItem(tmp7, tmp15, true);
        let tmp22 = obj[id];
        let arr3 = tmp22;
        if (null != tmp22) {
          let arr = arr3.push(tmp21);
        } else {
          let items2 = [tmp21];
          obj = { id: null, items: null, defaultThumbnailURL: null };
          obj[0] = tmp17;
          obj[1] = items2;
          obj[2] = getGuildThumbnail(tmp15);
          arr = items.push(obj);
          obj[tmp17] = items2;
        }
      } else {
        let arr1 = items1.push(tmp7.id);
      }
      continue;
    }
    if (items.length > 0) {
      obj132Default.indexDomains(items);
    }
    if (items1.length > 0) {
      obj132Default.deleteSearchItems(items1);
    }
  }
}
({ ME: c10, ChannelTypes: unpackModuleId, Links: closure_12, Permissions: map1, Routes: closure_14 } = ME);
let closure_15 = { GUILD: 100, [100]: "GUILD", DM: 75, [75]: "DM", OTHER_CHANNEL: 50, [50]: "OTHER_CHANNEL" };
initializeDefault;
class NativeIntentsManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleInit, LOGOUT: applyArgumentsResult.handleLogout, CHANNEL_SELECT: applyArgumentsResult.handleChannelSelect, CHANNEL_CREATE: applyArgumentsResult.handleChannelCreate, CHANNEL_DELETE: applyArgumentsResult.handleChannelDelete, CHANNEL_UPDATES: applyArgumentsResult.handleChannelUpdates, GUILD_CREATE: applyArgumentsResult.handleGuildCreateOrUpdate, GUILD_UPDATE: applyArgumentsResult.handleGuildCreateOrUpdate, GUILD_DELETE: applyArgumentsResult.handleGuildDelete, RELATIONSHIP_ADD: applyArgumentsResult.handleRelationshipChange, RELATIONSHIP_REMOVE: applyArgumentsResult.handleRelationshipChange, RELATIONSHIP_UPDATE: applyArgumentsResult.handleRelationshipChange, THREAD_CREATE: applyArgumentsResult.handleChannelCreate, THREAD_DELETE: applyArgumentsResult.handleChannelDelete, THREAD_UPDATE: applyArgumentsResult.handleThreadUpdate, USER_UPDATE: applyArgumentsResult.handleUserUpdate };
    return applyArgumentsResult;
  }
}
const prototype = NativeIntentsManager.prototype;
prototype["handleInit"] = function handleInit() {
  setChannelActivity(currentlySelectedChannelId.getCurrentlySelectedChannelId());
  let obj = { autoTrackExposure: true, disable: null };
  let obj2 = obj132Default;
  obj[1] = !obj2.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).clearEnabled) {
    let tmp2Result = obj132Default;
    tmp2Result.clearSearchIndex();
  }
  tmp2Result = experimentDefault;
  obj = { autoTrackExposure: true, disable: !obj132Default.hasSearch() };
  if (tmp2Result.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    obj1 = { autoTrackExposure: true, disable: null };
    const tmp2Result2 = experimentDefault;
    obj1[1] = !obj132Default.hasSearch();
    if (tmp2Result2.getCurrentConfig({ location: "NativeIntentsManager" }, obj1).searchEnabled) {
      const guildsArray = store.getGuildsArray();
      const mapped = guildsArray.map((item, index) => callback(item));
      const items = [];
      const mutablePrivateChannels = authStore.getMutablePrivateChannels();
      for (const key10061 in mutablePrivateChannels) {
        let arr = items.push(makeSearchItem(mutablePrivateChannels[key10061]));
        continue;
      }
      obj2 = { id: null, items: null };
      obj2[0] = closure_10;
      obj2[1] = items;
      mapped.push(obj2);
      obj132Default.indexDomains(mapped);
    }
    const tmp2Result3 = obj132Default;
  }
  const tmp2Result1 = obj132Default;
};
prototype["handleLogout"] = function handleLogout() {
  const obj = { autoTrackExposure: true, disable: !obj132Default.hasSearch() };
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).clearEnabled) {
    obj132Default.clearSearchIndex();
    const tmpResult = obj132Default;
  }
};
prototype["handleChannelSelect"] = function handleChannelSelect(channelId) {
  setChannelActivity(channelId.channelId);
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  channel = channel.channel;
  let obj = { autoTrackExposure: true, disable: !obj132Default.hasSearch() };
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    if (closure_6.can(constants3.VIEW_CHANNEL, channel)) {
      const guild = store.getGuild(channel.guild_id);
      if (null != guild) {
        if (null == guild) {
          let tmpResult = obj132Default;
          let id;
          if (guild != null) {
            id = guild.id;
          }
          if (id == null) {
            id = closure_10;
          }
          obj = { id: null, items: null, defaultThumbnailURL: null };
          obj[0] = id;
          const items = [makeSearchItem(channel, guild)];
          obj[1] = items;
          obj[2] = undefined;
          const items1 = [obj];
          tmpResult.indexDomains(items1);
        } else {
          tmpResult = getAvatarURLDefault;
          ({ id: obj5[0], icon: obj5[1] } = guild);
          const guildIconURL = tmpResult.getGuildIconURL({ id: null, icon: null, size: 128 });
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
        }
      }
    }
  }
};
prototype["handleChannelDelete"] = function handleChannelDelete(channel) {
  const obj = { autoTrackExposure: true, disable: !obj132Default.hasSearch() };
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    const items = [channel.channel.id];
    obj132Default.deleteSearchItems(items);
    const tmpResult = obj132Default;
  }
};
prototype["handleChannelUpdates"] = function handleChannelUpdates(channels) {
  indexChannelUpdates(channels.channels);
};
prototype["handleGuildCreateOrUpdate"] = function handleGuildCreateOrUpdate(guild) {
  guild = guild.guild;
  const obj = { autoTrackExposure: true, disable: !obj132Default.hasSearch() };
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    guild = store.getGuild(guild.id);
    if (null != guild) {
      let tmpResult = obj132Default;
      const items = [makeGuildDomain(guild, "GUILD_UPDATE" === guild.type)];
      tmpResult.indexDomains(items);
    } else {
      tmpResult = obj132Default;
      const items1 = [guild.id];
      tmpResult.deleteSearchDomains(items1);
    }
  }
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  const obj = { autoTrackExposure: true, disable: !obj132Default.hasSearch() };
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    const items = [guild.guild.id];
    obj132Default.deleteSearchDomains(items);
    const tmpResult = obj132Default;
  }
};
prototype["handleThreadUpdate"] = function handleThreadUpdate(channel) {
  const items = [channel.channel];
  indexChannelUpdates(items);
};
prototype["handleUserUpdate"] = function handleUserUpdate(user) {
  const dMChannelFromUserId = authStore.getDMChannelFromUserId(user.user.id);
  if (null != dMChannelFromUserId) {
    const items = [dMChannelFromUserId];
    indexChannelUpdates(items);
  }
};
prototype["handleRelationshipChange"] = function handleRelationshipChange(relationship) {
  const dMChannelFromUserId = authStore.getDMChannelFromUserId(relationship.relationship.id);
  if (null != dMChannelFromUserId) {
    const items = [dMChannelFromUserId];
    indexChannelUpdates(items);
  }
};
const nativeIntentsManager = new NativeIntentsManager();
const result = require("obj132").fileFinishedImporting("modules/native_intents/NativeIntentsManager.tsx");

export default nativeIntentsManager;