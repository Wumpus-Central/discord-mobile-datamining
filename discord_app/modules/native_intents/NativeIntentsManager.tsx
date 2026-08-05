// discord_app/modules/native_intents/NativeIntentsManager.tsx
import _slicedToArray from "_slicedToArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import "initialize";
import { getAvatarURL } from "../../utils/AvatarUtils.tsx";
import { getChannelIconURL } from "../channel/getChannelIcon.tsx";
import { computeChannelName } from "../channel/useChannelName.tsx";
import { set } from "IntentsBindings.android.tsx";
import { experiment } from "NativeIntentsExperiment.tsx";

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const require = arg1;
function indexingEnabled() {
  let obj = experiment;
  obj = { autoTrackExposure: true, disable: null };
  obj[1] = !set.hasSearch();
  return obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled;
}
function makeSearchItem(channel, guild, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let obj = computeChannelName /* computeChannelName */;
  const channelName = obj.computeChannelName(channel, mergeGuildAvatar, upsertRelationship, true);
  const channelName1 = computeChannelName /* computeChannelName */.computeChannelName(channel, mergeGuildAvatar, upsertRelationship, false);
  const items = [channelName, channelName1];
  if (channel.isGuildVocal()) {
    const _HermesInternal = HermesInternal;
    items.push("!" + channelName1);
  }
  const items1 = [];
  const items2 = [];
  channel = authStore.getChannel(channel.parent_id);
  if (null != channel) {
    let tmpResult = tmp(4475);
    const channelName2 = tmpResult.computeChannelName(channel, tmp3, tmp4, true);
    tmpResult = tmp(4475);
    const channelName3 = tmpResult.computeChannelName(channel, tmp3, tmp4, false);
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
  const obj2 = computeChannelName /* computeChannelName */;
  const channelIconURL = getChannelIconURL /* getChannelIconURL */.getChannelIconURL(channel, 128, false);
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
    let obj = getAvatarURL;
    obj = { id: null, icon: null, size: 128 };
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
    let tmp13 = key10030;
    let tmp14 = mutableGuildChannelsForGuild[key10030];
    let tmp15 = getUncachedChannelPermissions;
    let tmp16 = constants3;
    if (!getUncachedChannelPermissions.can(constants3.VIEW_CHANNEL, tmp14)) {
      continue;
    } else {
      let tmp4 = makeSearchItem;
      let arr = items1.push(makeSearchItem(tmp14, arg0, flag));
      continue;
    }
    continue;
  }
  const allThreadsForGuild = authStore.getAllThreadsForGuild(guild.id);
  for (const item10042 of allThreadsForGuild) {
    let tmp8 = getUncachedChannelPermissions;
    let tmp9 = constants3;
    let tmp7 = item10042;
    if (getUncachedChannelPermissions.can(constants3.VIEW_CHANNEL, item10042)) {
      let tmp10 = makeSearchItem;
      let tmp11 = item10042;
      arr = items1.push(makeSearchItem(tmp7, arg0, flag));
    }
    continue;
  }
  obj = { id: guild.id, items: items1, defaultThumbnailURL: getGuildThumbnail(guild), isUpdate: flag };
  return obj;
}
function setChannelActivity(channelId) {
  let obj = experiment;
  obj = { autoTrackExposure: true, disable: null };
  obj[1] = !set.hasUserActivity();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).activityEnabled) {
    let channel;
    if (null != channelId) {
      channel = authStore.getChannel(channelId);
    }
    if (null != channel) {
      const guild = store.getGuild(channel.guild_id);
      const obj5 = computeChannelName /* computeChannelName */;
      const channelName = obj5.computeChannelName(channel, mergeGuildAvatar, upsertRelationship, true);
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
        const mapped = recipients.map(tmp11.getUser);
        const first = callback(mapped.filter(tmp10(1351).isNotNullish), 1)[0];
        if (null != first) {
          let tmpResult = tmp(4124);
          const globalName = tmpResult.getGlobalName(first);
          if (null != globalName) {
            items1.push(globalName);
          }
          items1.push(first.username);
          items1.push(`@${tmp50.username}`);
          const nickname = obj6.getNickname(first.id);
          if (null != nickname) {
            items1.push(nickname);
          }
          tmpResult = tmp(4124);
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
      tmp(16820).setActivity(obj);
      obj6 = upsertRelationship;
      tmp10 = require;
      tmp11 = mergeGuildAvatar;
      const tmpResult1 = tmp(16820);
    } else {
      tmp(16820).resignActivity();
      const tmpResult2 = tmp(16820);
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
      let tmp8 = getUncachedChannelPermissions;
      let tmp9 = constants3;
      if (getUncachedChannelPermissions.can(constants3.VIEW_CHANNEL, nextResult)) {
        let tmp12 = store;
        let tmp13 = nextResult;
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
        let tmp18 = makeSearchItem;
        let tmp19 = nextResult;
        let tmp20 = guild;
        let tmp21 = makeSearchItem(tmp7, tmp15, true);
        let tmp22 = obj[id];
        let arr3 = tmp22;
        if (null != tmp22) {
          let tmp28 = tmp22;
          let tmp29 = tmp21;
          let arr = arr3.push(tmp21);
        } else {
          let tmp23 = getGuildThumbnail;
          let tmp24 = guild;
          let tmp25 = tmp21;
          let items2 = [tmp21];
          obj = { id: null, items: null, defaultThumbnailURL: null };
          let tmp26 = id;
          obj[0] = tmp17;
          obj[1] = items2;
          obj[2] = getGuildThumbnail(tmp15);
          arr = items.push(obj);
          obj[tmp17] = items2;
        }
      } else {
        let tmp10 = nextResult;
        let arr1 = items1.push(tmp7.id);
      }
      continue;
    }
    if (items.length > 0) {
      set.indexDomains(items);
      const obj3 = set;
    }
    if (items1.length > 0) {
      set.deleteSearchItems(items1);
      const obj4 = set;
    }
  }
}
({ ME: c10, ChannelTypes: unpackModuleId, Links: closure_12, Permissions: map1, Routes: closure_14 } = ME);
let closure_15 = { GUILD: 100, [100]: "GUILD", DM: 75, [75]: "DM", OTHER_CHANNEL: 50, [50]: "OTHER_CHANNEL" };
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
  let obj = experiment;
  obj = { autoTrackExposure: true, disable: null };
  let obj2 = set;
  obj[1] = !obj2.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).clearEnabled) {
    let tmp2Result = tmp2(16820);
    tmp2Result.clearSearchIndex();
  }
  tmp2Result = tmp2(16819);
  obj = { autoTrackExposure: true, disable: null };
  obj[1] = !set.hasSearch();
  if (tmp2Result.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    const obj1 = { autoTrackExposure: true, disable: null };
    const tmp2Result2 = tmp2(16819);
    obj1[1] = !tmp2(16820).hasSearch();
    if (tmp2Result2.getCurrentConfig({ location: "NativeIntentsManager" }, obj1).searchEnabled) {
      const guildsArray = store.getGuildsArray();
      const mapped = guildsArray.map((arg0) => callback(arg0));
      const items = [];
      const mutablePrivateChannels = authStore.getMutablePrivateChannels();
      for (const key10061 in mutablePrivateChannels) {
        let tmp14 = key10061;
        let tmp15 = makeSearchItem;
        let arr = items.push(makeSearchItem(mutablePrivateChannels[key10061]));
        continue;
      }
      obj2 = { id: null, items: null };
      obj2[0] = closure_10;
      obj2[1] = items;
      mapped.push(obj2);
      set.indexDomains(mapped);
      const obj12 = set;
    }
    const tmp2Result3 = tmp2(16820);
  }
};
prototype["handleLogout"] = function handleLogout() {
  let obj = experiment;
  obj = { autoTrackExposure: true, disable: null };
  obj[1] = !set.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).clearEnabled) {
    set.clearSearchIndex();
    const tmpResult = set;
  }
};
prototype["handleChannelSelect"] = function handleChannelSelect(channelId) {
  setChannelActivity(channelId.channelId);
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  channel = channel.channel;
  let obj = experiment;
  obj = { autoTrackExposure: true, disable: null };
  obj[1] = !set.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    if (getUncachedChannelPermissions.can(constants3.VIEW_CHANNEL, channel)) {
      const guild = store.getGuild(channel.guild_id);
      if (null != guild) {
        if (null == guild) {
          let tmpResult = tmp(16820);
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
          tmpResult = tmp(1416);
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
          const obj1 = { id: null, icon: null, size: 128 };
        }
      }
    }
  }
};
prototype["handleChannelDelete"] = function handleChannelDelete(channel) {
  let obj = experiment;
  obj = { autoTrackExposure: true, disable: null };
  obj[1] = !set.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    const items = [channel.channel.id];
    set.deleteSearchItems(items);
    const tmpResult = set;
  }
};
prototype["handleChannelUpdates"] = function handleChannelUpdates(channels) {
  indexChannelUpdates(channels.channels);
};
prototype["handleGuildCreateOrUpdate"] = function handleGuildCreateOrUpdate(guild) {
  guild = guild.guild;
  let obj = experiment;
  obj = { autoTrackExposure: true, disable: null };
  obj[1] = !set.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    guild = store.getGuild(guild.id);
    if (null != guild) {
      let tmpResult = tmp(16820);
      const items = [makeGuildDomain(guild, "GUILD_UPDATE" === guild.type)];
      tmpResult.indexDomains(items);
    } else {
      tmpResult = tmp(16820);
      const items1 = [guild.id];
      tmpResult.deleteSearchDomains(items1);
    }
  }
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  let obj = experiment;
  obj = { autoTrackExposure: true, disable: null };
  obj[1] = !set.hasSearch();
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
    const items = [guild.guild.id];
    set.deleteSearchDomains(items);
    const tmpResult = set;
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
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/native_intents/NativeIntentsManager.tsx");

export default nativeIntentsManager;