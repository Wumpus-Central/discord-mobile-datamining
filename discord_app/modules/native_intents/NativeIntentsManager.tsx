// discord_app/modules/native_intents/NativeIntentsManager.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import getChannelIcon from "../channel/getChannelIcon.tsx";
import NativeIntentsExperimentDefault from "NativeIntentsExperiment.tsx";
import IntentsBindingsDefault from "IntentsBindings.android.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let id;

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
function indexingEnabled() {
  let obj2;
  const obj = { autoTrackExposure: true, disable: !obj2.hasSearch() };
  const getCurrentConfig = NativeIntentsExperimentDefault.getCurrentConfig;
  NativeIntentsExperimentDefault;
  obj2 = IntentsBindingsDefault;
  return getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled;
}
function makeSearchItem(channel, guild) {
  let OTHER_CHANNEL;
  let sum1;
  const obj = useChannelName;
  const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
  const obj2 = useChannelName;
  const channelName1 = obj2.computeChannelName(channel, UserStore, RelationshipStore, false);
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
  const CHANNEL = authStore2.CHANNEL;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = c10;
  }
  const CHANNELResult = CHANNEL(id, channel.id);
  const obj3 = {
    id: CHANNELResult,
    relatedUniqueIdentifier: CHANNELResult,
    type: "url",
    title: sum,
    displayName: sum,
    thumbnailURL: sum1,
    rankingHint: OTHER_CHANNEL,
    keywords: items2,
    alternateNames: items,
    isUpdate: flag,
  };
  const tmpResult4 = getChannelIcon;
  const channelIconURL = tmpResult4.getChannelIconURL(channel, 128, false);
  let startsWithResult;
  if (channelIconURL != null) {
    const startsWith = channelIconURL.startsWith;
    if (startsWith != null) {
      startsWithResult = startsWith("/");
    }
  }
  if (startsWithResult) {
    const _location = location;
    sum1 = location.origin + channelIconURL;
  } else {
    sum1 = channelIconURL;
  }
  if (channel.type === unpackModuleId.DM) {
    OTHER_CHANNEL = constants4.DM;
  } else {
    OTHER_CHANNEL = constants4.OTHER_CHANNEL;
  }
  return obj3;
}
function getGuildThumbnail(guild1) {
  let tmp;
  if (null != guild1) {
    let sum;
    const obj3 = { id: null, icon: null, size: 128 };
    ({ id: obj2.id, icon: obj2.icon } = guild1);
    const obj = AvatarUtilsDefault;
    const guildIconURL = obj.getGuildIconURL(obj3);
    let startsWithResult;
    if (guildIconURL != null) {
      const startsWith = guildIconURL.startsWith;
      if (startsWith != null) {
        startsWithResult = startsWith("/");
      }
    }
    if (startsWithResult) {
      const _location = location;
      sum = location.origin + guildIconURL;
    } else {
      sum = guildIconURL;
    }
    tmp = sum;
  }
  return tmp;
}
function makeGuildDomain(guild1) {
  let items;
  const tmp = getGuildThumbnail(guild1);
  const CHANNELResult = authStore2.CHANNEL(guild1.id);
  const obj = {
    id: CHANNELResult,
    relatedUniqueIdentifier: CHANNELResult,
    type: "url",
    title: guild1.name,
    displayName: guild1.name,
    alternateNames: items,
    rankingHint: constants4.GUILD,
  };
  items = ["*" + guild1.name];
  const items1 = [obj];
  const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(guild1.id);
  for (const key10030 in mutableGuildChannelsForGuild) {
    let tmp14 = mutableGuildChannelsForGuild[key10030];
    if (!PermissionStore.can(map1.VIEW_CHANNEL, tmp14)) {
      continue;
    } else {
      let arr = items1.push(makeSearchItem(tmp14, guild1, flag));
      continue;
    }
    continue;
  }
  const allThreadsForGuild = ChannelStore.getAllThreadsForGuild(guild1.id);
  for (const item10042 of allThreadsForGuild) {
    if (PermissionStore.can(map1.VIEW_CHANNEL, item10042)) {
      let arr2 = items1.push(makeSearchItem(item10042, guild1, flag));
    }
    continue;
  }
  return { id: guild1.id, items: items1, defaultThumbnailURL: tmp, isUpdate: flag };
}
function setChannelActivity(channelId) {
  let obj2;
  const obj = { autoTrackExposure: true, disable: !obj2.hasUserActivity() };
  const getCurrentConfig = NativeIntentsExperimentDefault.getCurrentConfig;
  NativeIntentsExperimentDefault;
  obj2 = IntentsBindingsDefault;
  if (getCurrentConfig({ location: "NativeIntentsManager" }, obj).activityEnabled) {
    let channel;
    if (null != channelId) {
      channel = ChannelStore.getChannel(channelId);
    }
    if (null != channel) {
      const guild = GuildStore.getGuild(channel.guild_id);
      const obj4 = useChannelName;
      const channelName = obj4.computeChannelName(channel, UserStore, RelationshipStore, true);
      let str2 = "";
      if (null != guild) {
        const _HermesInternal = HermesInternal;
        str2 = " (" + guild.name + ")";
      }
      const sum = channelName + str2;
      const items = [channelName];
      const items1 = [];
      const _Set = Set;
      if ("" !== channel.name) {
        items1.push(channel.name);
      }
      if (null != channel.nicks) {
        const push = items1.push;
        const _Object = Object;
        const items2 = [];
        HermesBuiltin.arraySpread(items2, Object.values(channel.nicks), 0);
        HermesBuiltin.apply(push, items2, items1);
      }
      if (channel.type === unpackModuleId.DM) {
        const recipients = channel.recipients;
        const mapped = recipients.map(UserStore.getUser);
        const first = _slicedToArray(mapped.filter(GlobalUtils.isNotNullish), 1)[0];
        if (null != first) {
          const tmpResult = UserUtilsDefault;
          const globalName = tmpResult.getGlobalName(first);
          if (null != globalName) {
            items1.push(globalName);
          }
          items1.push(first.username);
          items1.push(`@${tmp49.username}`);
          const nickname = RelationshipStore.getNickname(first.id);
          if (null != nickname) {
            items1.push(nickname);
          }
          const tmpResult4 = UserUtilsDefault;
          const name = tmpResult4.getName(first);
          if (null != name) {
            items1.push(name);
          }
        }
      }
      HermesBuiltin.arraySpread(items, items1, 1);
      const self = this;
      const self2 = this;
      const _Set1 = new _Set(items);
      const items3 = [];
      HermesBuiltin.arraySpread(items3, _Set1, 0);
      const CHANNELResult = authStore2.CHANNEL(channel.guild_id, channel.id);
      const _HermesInternal2 = HermesInternal;
      const obj3 = {
        webpageURL: "" + constants2.BASE_URL + CHANNELResult,
        relatedUniqueIdentifier: CHANNELResult,
        eligibleForHandoff: true,
        eligibleForSearch: true,
        title: sum,
        keywords: items3,
        displayName: sum,
        type: "com.discord.view-channel",
      };
      const tmpResult5 = IntentsBindingsDefault;
      tmpResult5.setActivity(obj3);
    } else {
      const tmpResult6 = IntentsBindingsDefault;
      tmpResult6.resignActivity();
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
      if (PermissionStore.can(map1.VIEW_CHANNEL, nextResult)) {
        let guild = GuildStore.getGuild(tmp7.guild_id);
        let tmp15 = guild;
        id = undefined;
        if (guild != null) {
          id = guild.id;
        }
        if (id == null) {
          id = c10;
        }
        let tmp17 = id;
        let tmp21 = makeSearchItem(tmp7, tmp15, true);
        let tmp22 = obj[id];
        let arr3 = tmp22;
        if (null != tmp22) {
          let arr = arr3.push(tmp21);
        } else {
          let items2 = [tmp21];
          let obj2 = { id: tmp17, items: items2, defaultThumbnailURL: getGuildThumbnail(tmp15) };
          let arr2 = items.push(obj2);
          obj[tmp17] = items2;
        }
      } else {
        let arr4 = items1.push(tmp7.id);
      }
      continue;
    }
    if (items.length > 0) {
      const obj3 = IntentsBindingsDefault;
      obj3.indexDomains(items);
    }
    if (items1.length > 0) {
      const obj4 = IntentsBindingsDefault;
      obj4.deleteSearchItems(items1);
    }
  }
}
({ ME: c10, ChannelTypes: unpackModuleId, Links: closure_12, Permissions: map1, Routes: closure_14 } = Constants);
const constants4 = { GUILD: 100, [100]: "GUILD", DM: 75, [75]: "DM", OTHER_CHANNEL: 50, [50]: "OTHER_CHANNEL" };
class NativeIntentsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN: applyArgumentsResult.handleInit,
      LOGOUT: applyArgumentsResult.handleLogout,
      CHANNEL_SELECT: applyArgumentsResult.handleChannelSelect,
      CHANNEL_CREATE: applyArgumentsResult.handleChannelCreate,
      CHANNEL_DELETE: applyArgumentsResult.handleChannelDelete,
      CHANNEL_UPDATES: applyArgumentsResult.handleChannelUpdates,
      GUILD_CREATE: applyArgumentsResult.handleGuildCreateOrUpdate,
      GUILD_UPDATE: applyArgumentsResult.handleGuildCreateOrUpdate,
      GUILD_DELETE: applyArgumentsResult.handleGuildDelete,
      RELATIONSHIP_ADD: applyArgumentsResult.handleRelationshipChange,
      RELATIONSHIP_REMOVE: applyArgumentsResult.handleRelationshipChange,
      RELATIONSHIP_UPDATE: applyArgumentsResult.handleRelationshipChange,
      THREAD_CREATE: applyArgumentsResult.handleChannelCreate,
      THREAD_DELETE: applyArgumentsResult.handleChannelDelete,
      THREAD_UPDATE: applyArgumentsResult.handleThreadUpdate,
      USER_UPDATE: applyArgumentsResult.handleUserUpdate,
    };
    return applyArgumentsResult;
  }
  handleInit() {
    let obj2;
    let tmp2Result6;
    let tmp2Result8;
    setChannelActivity(SelectedChannelStore.getCurrentlySelectedChannelId());
    const obj = { autoTrackExposure: true, disable: !obj2.hasSearch() };
    const getCurrentConfig = NativeIntentsExperimentDefault.getCurrentConfig;
    NativeIntentsExperimentDefault;
    obj2 = IntentsBindingsDefault;
    if (getCurrentConfig({ location: "NativeIntentsManager" }, obj).clearEnabled) {
      const tmp2Result = IntentsBindingsDefault;
      tmp2Result.clearSearchIndex();
    }
    const obj3 = { autoTrackExposure: true, disable: !tmp2Result6.hasSearch() };
    const getCurrentConfig2 = NativeIntentsExperimentDefault.getCurrentConfig;
    NativeIntentsExperimentDefault;
    tmp2Result6 = IntentsBindingsDefault;
    if (getCurrentConfig2({ location: "NativeIntentsManager" }, obj3).searchEnabled) {
      const obj4 = { autoTrackExposure: true, disable: !tmp2Result8.hasSearch() };
      const getCurrentConfig3 = NativeIntentsExperimentDefault.getCurrentConfig;
      NativeIntentsExperimentDefault;
      tmp2Result8 = IntentsBindingsDefault;
      if (getCurrentConfig3({ location: "NativeIntentsManager" }, obj4).searchEnabled) {
        const guildsArray = GuildStore.getGuildsArray();
        const mapped = guildsArray.map((item) => makeGuildDomain(item));
        const items = [];
        const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
        for (const key10061 in mutablePrivateChannels) {
          let arr = items.push(makeSearchItem(mutablePrivateChannels[key10061]));
          continue;
        }
        const obj5 = { id, items };
        mapped.push(obj5);
        const obj9 = IntentsBindingsDefault;
        obj9.indexDomains(mapped);
      }
    }
  }
  handleLogout() {
    let obj2;
    const obj = { autoTrackExposure: true, disable: !obj2.hasSearch() };
    const getCurrentConfig = NativeIntentsExperimentDefault.getCurrentConfig;
    NativeIntentsExperimentDefault;
    obj2 = IntentsBindingsDefault;
    if (getCurrentConfig({ location: "NativeIntentsManager" }, obj).clearEnabled) {
      const tmpResult = IntentsBindingsDefault;
      tmpResult.clearSearchIndex();
    }
  }
  handleChannelSelect(channelId) {
    setChannelActivity(channelId.channelId);
  }
  handleChannelCreate(channel) {
    let items;
    let obj2;
    channel = channel.channel;
    const obj = { autoTrackExposure: true, disable: !obj2.hasSearch() };
    const getCurrentConfig = NativeIntentsExperimentDefault.getCurrentConfig;
    NativeIntentsExperimentDefault;
    obj2 = IntentsBindingsDefault;
    if (getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
      if (PermissionStore.can(map1.VIEW_CHANNEL, channel)) {
        const guild = GuildStore.getGuild(channel.guild_id);
        if (null != guild) {
          let tmp9;
          if (null != guild) {
            let sum;
            const obj3 = { id: null, icon: null, size: 128 };
            ({ id: obj4.id, icon: obj4.icon } = guild);
            const tmpResult = AvatarUtilsDefault;
            const guildIconURL = tmpResult.getGuildIconURL(obj3);
            let startsWithResult;
            if (guildIconURL != null) {
              const startsWith = guildIconURL.startsWith;
              if (startsWith != null) {
                startsWithResult = startsWith("/");
              }
            }
            if (startsWithResult) {
              const _location = location;
              sum = location.origin + guildIconURL;
            } else {
              sum = guildIconURL;
            }
            tmp9 = sum;
          }
          id = undefined;
          const indexDomains = IntentsBindingsDefault.indexDomains;
          IntentsBindingsDefault;
          if (guild != null) {
            id = guild.id;
          }
          if (id == null) {
            id = c10;
          }
          const obj5 = { id, items, defaultThumbnailURL: tmp9 };
          items = [makeSearchItem(channel, guild)];
          const items1 = [obj5];
          indexDomains(items1);
        }
      }
    }
  }
  handleChannelDelete(channel) {
    let obj2;
    channel = channel.channel;
    const obj = { autoTrackExposure: true, disable: !obj2.hasSearch() };
    const getCurrentConfig = NativeIntentsExperimentDefault.getCurrentConfig;
    NativeIntentsExperimentDefault;
    obj2 = IntentsBindingsDefault;
    if (getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
      const items = [channel.id];
      const tmpResult = IntentsBindingsDefault;
      tmpResult.deleteSearchItems(items);
    }
  }
  handleChannelUpdates(channels) {
    indexChannelUpdates(channels.channels);
  }
  handleGuildCreateOrUpdate(guild) {
    let obj2;
    guild = guild.guild;
    const type = guild.type;
    const obj = { autoTrackExposure: true, disable: !obj2.hasSearch() };
    const getCurrentConfig = NativeIntentsExperimentDefault.getCurrentConfig;
    NativeIntentsExperimentDefault;
    obj2 = IntentsBindingsDefault;
    if (getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
      const guild1 = GuildStore.getGuild(guild.id);
      if (null != guild1) {
        const indexDomains = IntentsBindingsDefault.indexDomains;
        const items = [];
        IntentsBindingsDefault;
        items[0] = makeGuildDomain(guild1, "GUILD_UPDATE" === type);
        indexDomains(items);
      } else {
        const items1 = [guild.id];
        const tmpResult2 = IntentsBindingsDefault;
        tmpResult2.deleteSearchDomains(items1);
      }
    }
  }
  handleGuildDelete(guild) {
    let obj2;
    guild = guild.guild;
    const obj = { autoTrackExposure: true, disable: !obj2.hasSearch() };
    const getCurrentConfig = NativeIntentsExperimentDefault.getCurrentConfig;
    NativeIntentsExperimentDefault;
    obj2 = IntentsBindingsDefault;
    if (getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled) {
      const items = [guild.id];
      const tmpResult = IntentsBindingsDefault;
      tmpResult.deleteSearchDomains(items);
    }
  }
  handleThreadUpdate(channel) {
    const items = [channel.channel];
    indexChannelUpdates(items);
  }
  handleUserUpdate(user) {
    const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(user.user.id);
    if (null != dMChannelFromUserId) {
      const items = [dMChannelFromUserId];
      indexChannelUpdates(items);
    }
  }
  handleRelationshipChange(relationship) {
    const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(relationship.relationship.id);
    if (null != dMChannelFromUserId) {
      const items = [dMChannelFromUserId];
      indexChannelUpdates(items);
    }
  }
}
const prototype = NativeIntentsManager.prototype;
const nativeIntentsManager = new NativeIntentsManager();
const result = size.fileFinishedImporting("modules/native_intents/NativeIntentsManager.tsx");

export default nativeIntentsManager;
