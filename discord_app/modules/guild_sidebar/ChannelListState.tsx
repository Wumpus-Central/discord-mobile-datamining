// discord_app/modules/guild_sidebar/ChannelListState.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ChannelListUtils from "ChannelListUtils.tsx";
import getGuildModeratorReportingEnabledDefault from "../report_to_mod/getGuildModeratorReportingEnabled.tsx";
import getGuildModeratorReportChannelIdDefault from "../report_to_mod/getGuildModeratorReportChannelId.tsx";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ChannelStatusStore from "../channel/ChannelStatusStore.tsx";
import GatedChannelStore from "../channel/GatedChannelStore.tsx";
import GuildScheduledEventStore from "../guild_scheduled_events/GuildScheduledEventStore.tsx";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import FavoritesSuggestionStore from "../opt_in_channels/FavoritesSuggestionStore.tsx";
import RecentlyActiveCollapseStore from "../opt_in_channels/RecentlyActiveCollapseStore.tsx";
import NewChannelsStore from "../recent_channels/NewChannelsStore.tsx";
import ActiveJoinedThreadsStore from "../threads/ActiveJoinedThreadsStore.tsx";
import JoinedThreadsStore from "../threads/JoinedThreadsStore.tsx";
import CategoryCollapseStore from "../../stores/CategoryCollapseStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import CollapsedVoiceChannelStore from "../../stores/CollapsedVoiceChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../stores/views/SortedVoiceStateStore.tsx";
import ChannelListVoiceCategoryStore from "ChannelListVoiceCategoryStore.tsx";

require = fn;
function computeSubtitle(type, arg1, arg2) {
  type = type.type;
  if (constants.GUILD_VOICE === type) {
    const activeEventByChannel = GuildScheduledEventStore.getActiveEventByChannel(type.id);
    if (null != activeEventByChannel) {
      let obj = { type: "event", name: activeEventByChannel.name };
      return obj;
    } else {
      if (arg2) {
        if (arg1) {
          let obj1 = ChannelListUtils;
          if (obj1.hasStream(tmp19)) {
            return { type: "go-live" };
          }
        }
      }
      const channelStatus = ChannelStatusStore.getChannelStatus(type);
      if (null != channelStatus) {
        if (channelStatus.length > 0) {
          obj = { type: "voice", text: channelStatus };
          return obj;
        }
      }
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(type.id);
      const mapped = embeddedActivitiesForChannel.map((applicationId) => {
        application = application.getApplication(applicationId.applicationId);
        let name;
        if (application != null) {
          name = application.name;
        }
        return name;
      });
      const found = mapped.filter(GlobalUtils.isNotNullish);
      let tmp16 = null;
      if (found.length > 0) {
        obj1 = { type: "embedded-activities", name: found.join(", ") };
        tmp16 = obj1;
      }
      return tmp16;
    }
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    const activeEventByChannel1 = GuildScheduledEventStore.getActiveEventByChannel(type.id);
    let tmp5 = null;
    if (null != activeEventByChannel1) {
      obj = { type: "event", name: activeEventByChannel1.name };
      tmp5 = obj;
    }
    return tmp5;
  } else {
    return null;
  }
}
function computeThreadIds(
  record,
  activeJoinedRelevantThreads,
  selectedChannel,
  selectedVoiceChannelId,
  hideMutedChannels,
) {
  let arr = selectedChannel;
  let tmp = null != selectedChannel;
  if (tmp) {
    let tmp2 = arr.id === record.id;
    if (!tmp2) {
      tmp2 = selectedVoiceChannelId === record.id;
    }
    tmp = tmp2;
  }
  if (set.has(record.type)) {
    const _Object = Object;
    const mapped = _modDef12
      .sortBy(Object.values(activeJoinedRelevantThreads), (joinTimestamp) => -joinTimestamp.joinTimestamp)
      .map((channel) => channel.channel.id);
    if (tmp) {
      return mapped;
    } else if (tmp4) {
      let found = mapped;
      if (!(arr.id in activeJoinedRelevantThreads)) {
        arr = mapped.unshift(arr.id);
        found = mapped;
      }
    } else {
      found = mapped;
      if (hideMutedChannels) {
        found = mapped.filter((item) => {
          const isMutedResult = muted.isMuted(item);
          let tmp2 = !isMutedResult;
          if (isMutedResult) {
            tmp2 = mentionCount.getMentionCount(item) > 0;
          }
          return tmp2;
        });
      }
    }
    const sortByResult = _modDef12.sortBy(
      Object.values(activeJoinedRelevantThreads),
      (joinTimestamp) => -joinTimestamp.joinTimestamp,
    );
  } else {
    return [];
  }
}
function shouldAlwaysShowInRecents(self, selectedChannel) {
  selectedChannel = selectedChannel.selectedChannel;
  if (ReadStateStore.getMentionCount(self.id) > 0) {
    return true;
  } else {
    for (const key10009 in tmp[arg0.id]) {
      if (ReadStateStore.getMentionCount(key10009) <= 0) {
        continue;
      } else {
        let flag = true;
        return true;
      }
    }
    if (null != selectedChannel) {
      if (selectedChannel.id === self.id) {
        return false;
      } else if (selectedChannel.isThread()) {
        if (selectedChannel.parent_id === self.id) {
          return false;
        }
      }
    }
    const newChannelIds = NewChannelsStore.getNewChannelIds(self.category.guild.id);
    return newChannelIds.size <= 2 && newChannelIds.has(self.id);
  }
}
function shouldShowInRecents(guild, record, initializationData) {
  if (record.type === constants.GUILD_DIRECTORY) {
    return false;
  } else if (guild.optInEnabled) {
    const optedInChannels = guild.optedInChannels;
    if (optedInChannels.has(record.id)) {
      return false;
    } else if (record.isThread()) {
      return false;
    } else {
      if (null != record.parent_id) {
        const optedInChannels2 = guild.optedInChannels;
        if (optedInChannels2.has(record.parent_id)) {
          return false;
        }
      }
      if (guild.hideResourceChannels) {
        if (record.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
          return false;
        }
      }
      if (record.isGuildVocal()) {
        if (ChannelListVoiceCategoryStore.isVoiceCategoryCollapsed(guild.id)) {
          if (obj.some(VoiceStateStore.getVoiceStatesForChannel(record.id))) {
            return false;
          }
          obj = _modDef12;
        } else {
          return false;
        }
      }
      if (ReadStateStore.getMentionCount(record.id) > 0) {
        return true;
      } else {
        for (const key10048 in tmp[arg1.id]) {
          let obj4 = ReadStateStore;
          if (ReadStateStore.getMentionCount(key10048) > 0) {
            let flag5 = true;
            return true;
          } else if (obj4.hasUnread(key10048)) {
            let flag4 = true;
            return true;
          } else if (!obj4.hasRecentlyVisitedAndRead(key10048)) {
            continue;
          } else {
            let flag3 = true;
            return true;
          }
        }
        const mutedChannelIds = guild.mutedChannelIds;
        if (!mutedChannelIds.has(record.id)) {
          if (null != record.parent_id) {
            const mutedChannelIds2 = guild.mutedChannelIds;
          }
          const newChannelIds = NewChannelsStore.getNewChannelIds(guild.id);
          const _Array = Array;
          const sorted = Array.from(newChannelIds).sort((arg0, arg1) => SnowflakeUtilsDefault.compare(arg1, arg0));
          let hasItem = newChannelIds.has(record.id);
          if (hasItem) {
            hasItem = sorted.indexOf(record.id) < 2;
          }
          let result = hasItem;
          if (!result) {
            result = ReadStateStore.hasRecentlyVisitedAndRead(record.id);
          }
          return result;
        }
        return false;
      }
    }
  } else {
    return false;
  }
}
const ChannelRecord = fn(1961);
({
  ChannelRecordBase: closure_14,
  isGuildReadableType: closure_15,
  isThread: closure_16,
  THREADED_CHANNEL_TYPES: closure_17,
} = ChannelRecord);
const ChannelListGuildActionRow = fn(7534).ChannelListGuildActionRow;
const Constants = fn(1074);
({ ChannelTypes: closure_30, GuildFeatures: items } = Constants);
const ChannelFlags = fn(1964).ChannelFlags;
const Permissions = fn(1085).Permissions;
let c34 = "placeholder-channel-id";
const __initData13 = {
  CannotShow: 1,
  [1]: "CannotShow",
  DoNotShow: 2,
  [2]: "DoNotShow",
  WouldShowIfUncollapsed: 3,
  [3]: "WouldShowIfUncollapsed",
  Show: 4,
  [4]: "Show",
};
let obj = {
  CHANNEL_NOTICES: 0,
  [0]: "CHANNEL_NOTICES",
  GUILD_ACTIONS: 1,
  [1]: "GUILD_ACTIONS",
  FAVORITES: 2,
  [2]: "FAVORITES",
  RECENTS: 3,
  [3]: "RECENTS",
  UNCATEGORIZED_CHANNELS: 4,
  [4]: "UNCATEGORIZED_CHANNELS",
  FIRST_NAMED_CATEGORY: 5,
  [5]: "FIRST_NAMED_CATEGORY",
};
const CHANNEL_NOTICES = obj.CHANNEL_NOTICES;
const GUILD_ACTIONS = obj.GUILD_ACTIONS;
const FAVORITES = obj.FAVORITES;
const RECENTS = obj.RECENTS;
const UNCATEGORIZED_CHANNELS = obj.UNCATEGORIZED_CHANNELS;
const FIRST_NAMED_CATEGORY = obj.FIRST_NAMED_CATEGORY;
items = [String(ChannelListGuildActionRow.GUILD_DIRECTORY)];
let set = new Set(items);
class ChannelListImpl {
  constructor(arg0, arg1, arg2) {
    merged = Object.assign({
      sortedNamedCategories: null,
      sections: null,
      rows: null,
      firstVoiceChannel: "Array",
      allChannelsById: 0,
      version: "asc",
    });
    merged.id = global;
    obj = closure_25;
    merged.hideMutedChannels = closure_25.isGuildCollapsed(merged.id);
    merged.mutedChannelIds = closure_25.getMutedChannels(merged.id);
    optedInChannelsWithPendingUpdates = closure_25.getOptedInChannelsWithPendingUpdates(merged.id);
    if (optedInChannelsWithPendingUpdates == null) {
      optedInChannelsWithPendingUpdates = obj.getOptedInChannels(merged.id);
    }
    merged.optedInChannels = optedInChannelsWithPendingUpdates;
    tmp3 = closure_2;
    obj2 = initializationData(closure_2[28]);
    merged.optInEnabled = obj2.isOptInEnabledForGuild(merged.id);
    obj3 = initializationData(closure_2[29]);
    merged.hideResourceChannels = obj3.canSeeOnboardingHome(merged.id);
    guildFavorites = obj.getGuildFavorites(merged.id);
    if (guildFavorites == null) {
      guildFavorites = [];
    }
    set = new Set(guildFavorites);
    merged.favoriteChannelIds = set;
    merged.suggestedFavoriteChannelId = closure_9.getSuggestedChannelId(merged.id);
    merged.collapsedCategoryIds = closure_18.getCollapsedCategories();
    mutableGuildChannelsForGuild = closure_19.getMutableGuildChannelsForGuild(merged.id);
    guild = closure_21.getGuild(merged.id);
    tmp7 = null;
    if (null != guild) {
      tmp8 = closure_1;
      tmp7 = closure_1(tmp3[30])(guild);
    }
    merged.moderatorReportChannelId = tmp7;
    tmp9 = null != guild;
    if (tmp9) {
      tmp10 = closure_1;
      tmp9 = closure_1(tmp3[31])(guild);
    }
    merged.moderatorReportChannelEnabled = tmp9;
    obj = {};
    obj1 = {};
    for (const key10068 in mutableGuildChannelsForGuild) {
      tmp67 = key10068;
      tmp68 = mutableGuildChannelsForGuild[key10068];
      tmp69 = ChannelTypes;
      if (tmp68.type !== ChannelTypes.GUILD_CATEGORY) {
        continue;
      } else {
        obj[tmp68.id] = tmp68;
        obj1[tmp68.id] = [];
        continue;
      }
      continue;
    }
    items = [];
    items1 = [];
    items2 = [];
    items3 = [];
    initializationData = merged.initializationData;
    for (const key10080 in mutableGuildChannelsForGuild) {
      tmp70 = key10080;
      tmp41 = mutableGuildChannelsForGuild[key10080];
      type = tmp41.type;
      arr3 = ChannelTypes;
      GUILD_CATEGORY = ChannelTypes.GUILD_CATEGORY;
      if (type === GUILD_CATEGORY) {
        continue;
      } else {
        type = tmp41.type;
        if (type !== arr3.GUILD_DIRECTORY) {
          GUILD_CATEGORY = shouldShowInRecents;
          if (shouldShowInRecents(merged, tmp41, initializationData)) {
            arr = items1.push(tmp41);
          } else {
            GUILD_CATEGORY = arr3.GUILD_VOICE;
            tmp13 = tmp41.type !== GUILD_CATEGORY;
            if (!tmp13) {
            } else {
              tmp13 = tmp41.type !== arr3.GUILD_STAGE_VOICE;
            }
            if (tmp13) {
            } else {
              tmp14 = null != tmp41.parent_id;
              if (!tmp14) {
              } else {
                tmp14 = null != obj[tmp41.parent_id];
              }
              if (!tmp14) {
              } else {
                arr1 = items2.push(obj[tmp41.parent_id]);
              }
              arr2 = items2.push(tmp41);
            }
          }
          if (null == tmp41.parent_id) {
          } else if (tmp41.parent_id in obj1) {
            GUILD_CATEGORY = obj1[tmp41.parent_id];
            arr3 = GUILD_CATEGORY.push(tmp41);
            continue;
          }
          arr3 = items.push(tmp41);
          continue;
        } else {
          GUILD_CATEGORY = null == guild;
          if (GUILD_CATEGORY) {
          } else {
            features = guild.features;
            tmp12 = GuildFeatures;
            GUILD_CATEGORY = features.has(GuildFeatures.HUB);
          }
          if (GUILD_CATEGORY) {
            continue;
          } else {
            GUILD_CATEGORY = items3.push(tmp41);
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    merged.categories = {};
    for (const key10112 in obj1) {
      GUILD_CATEGORY = key10112;
      type = ChannelListCategoryWithParent;
      tmp11 = new.target;
      tmp72 = merged;
      tmp73 = initializationData;
      merged.categories[key10112] = new ChannelListCategoryWithParent(
        merged,
        obj[key10112],
        obj1[key10112],
        initializationData,
      );
      continue;
    }
    merged.recentsSectionNumber = RECENTS;
    merged.favoritesSectionNumber = FAVORITES;
    if (typeof closure_44 === "function") {
      closure_1 = undefined;
      tmp19 = closure_66;
      tmp20 = new.target;
      tmp21 = new.target;
      tmp22 = merged;
      tmp23 = new closure_66(
        merged,
        tmp71,
        tmp44,
        initializationData,
        features,
        tmp11,
        type,
        tmp41,
        GUILD_CATEGORY,
        items1,
        items,
        arr3,
        mutableGuildChannelsForGuild,
      );
      tmp24 = tmp23;
      closure_1 = tmp23;
      tmp25 = closure_1;
      tmp26 = closure_2;
      arr7 = closure_1(closure_2[27])(items);
      iter = arr7.map((item) => new ChannelListChannelImpl(closure_1, item, closure_0));
      iter2 = iter.keyBy((id) => id.id);
      tmp23.channels = iter2.value();
      merged.noParentCategory = tmp23;
      tmp27 = ChannelListFavoritesCategory;
      tmp28 = new.target;
      tmp29 = merged;
      tmp30 = initializationData;
      merged.favoritesCategory = new ChannelListFavoritesCategory(merged, initializationData);
      tmp31 = initializationData;
      obj6 = initializationData(closure_2[32]);
      if (obj6.isRecentlyActiveChannelsEnabled()) {
        tmp42 = ChannelListRecentlyActiveCategory;
        iter2 = new.target;
        tmp43 = merged;
        tmp30 = mutableGuildChannelsForGuild;
        tmp44 = initializationData;
        tmp40 = new ChannelListRecentlyActiveCategory(merged, mutableGuildChannelsForGuild, initializationData);
      } else {
        tmp33 = new.target;
        if (typeof ChannelListRecentsCategory === "function") {
          closure_129_0 = initializationData;
          closure_129_1 = undefined;
          tmp34 = ChannelListRecentsCategory;
          tmp35 = new.target;
          tmp36 = new.target;
          tmp37 = merged;
          tmp38 = new ChannelListRecentsCategory(
            merged,
            tmp30,
            tmp44,
            initializationData,
            features,
            tmp11,
            type,
            tmp41,
            GUILD_CATEGORY,
            items1,
            tmp32,
            iter2,
            mutableGuildChannelsForGuild,
            new.target,
            undefined,
            items2,
            obj,
            ChannelListRecentsCategory,
            items3,
            globalThis,
          );
          tmp39 = tmp38;
          closure_129_1 = tmp38;
          iter = merged.optInEnabled;
          tmp40 = tmp38;
          if (iter) {
            tmp41 = closure_8;
            iter = closure_8.isFullServerPreview(merged.id);
            tmp40 = tmp38;
            if (!iter) {
              flag = false;
              tmp38.isCollapsed = false;
              tmp38.isMuted = false;
              arr8 = tmp25(tmp26[27])(items1);
              items1 = arr8.map((item) => new RecentsChannelListChannel(closure_1, item, closure_0));
              iter = items1.keyBy((id) => id.id);
              iter2 = iter.value();
              tmp38.channels = iter2;
              tmp40 = tmp38;
            }
          }
        } else {
          str4 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      merged.recentsCategory = tmp40;
      if (typeof ChannelListVoiceChannelsCategory === "function") {
        closure_130_0 = initializationData;
        closure_130_1 = undefined;
        tmp47 = ChannelListVoiceChannelsCategory;
        tmp48 = new.target;
        tmp49 = new.target;
        tmp50 = merged;
        tmp51 = new ChannelListVoiceChannelsCategory(
          merged,
          tmp30,
          tmp44,
          initializationData,
          features,
          tmp11,
          type,
          tmp41,
          GUILD_CATEGORY,
          items1,
          iter,
          iter2,
          tmp45,
          new.target,
          undefined,
          items2,
          obj,
          tmp46,
        );
        tmp52 = tmp51;
        closure_130_1 = tmp51;
        tmp51.hiddenChannelIds = null;
        tmp51.categoriesById = obj;
        if (merged.optInEnabled) {
          tmp53 = closure_28;
          tmp51.isCollapsed = closure_28.isVoiceCategoryCollapsed(merged.id);
          flag2 = false;
          tmp51.isMuted = false;
          tmp51.categoriesById = obj;
          arr9 = tmp25(tmp26[27])(items2);
          mapped = arr9.map((item) => new VoiceChannelListChannel(closure_1, item, closure_0));
          iter3 = mapped.keyBy((id) => id.id);
          tmp51.channels = iter3.value();
        }
        merged.voiceChannelsCategory = tmp51;
        tmp56 = new.target;
        if (typeof ChannelListGuildActionSection === "function") {
          tmp57 = fn;
          obj2 = Object.create(tmp54.prototype);
          _String = String;
          obj2.guildActionRows = fn.map(String);
          if (tmp55) {
            guildActionRows = obj2.guildActionRows;
            _String2 = String;
            tmp59 = ChannelListGuildActionRow;
            arr4 = guildActionRows.push(String(ChannelListGuildActionRow.GUILD_DIRECTORY));
          }
          merged.guildActionSection = obj2;
          tmp62 = new.target;
          if (typeof ChannelListChannelNoticeSection === "function") {
            tmp63 = importDefault;
            obj3 = Object.create(tmp61.prototype);
            obj3.rows = importDefault;
            merged.channelNoticeSection = obj3;
            str = "null";
            str2 = "somehow a null got into categories";
            tmp65 = tmp25(tmp26[33])(!("null" in merged.categories), "somehow a null got into categories");
            tmp66 = FIRST_NAMED_CATEGORY;
            tmp25Result = tmp25(tmp26[27]);
            merged.voiceChannelsSectionNumber = FIRST_NAMED_CATEGORY + tmp25Result.size(merged.categories);
            return merged;
          } else {
            str7 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          str6 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str5 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      str3 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype = ChannelListImpl.prototype;
Object.defineProperty(prototype, "initializationData", {
  get: function initializationData() {
    return {
      selectedChannel: ChannelStore.getChannel(SelectedChannelStore.getChannelId()),
      selectedVoiceChannelId: SelectedChannelStore.getVoiceChannelId(),
      activeJoinedRelevantThreads: ActiveJoinedThreadsStore.getActiveJoinedRelevantThreadsForGuild(this.id),
      activeJoinedUnreadThreads: ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForGuild(this.id),
    };
  },
  set: undefined,
});
prototype["invalidate"] = function invalidate() {
  this.sections = null;
  this.rows = null;
  this.sortedNamedCategories = null;
  this.firstVoiceChannel = undefined;
  this.version = this.version + 1;
};
prototype["getSortedNamedCategories"] = function getSortedNamedCategories() {
  const self = this;
  if (null == this.sortedNamedCategories) {
    const rows = self.getRows();
  }
  return self.sortedNamedCategories;
};
prototype["getSortedCategories"] = function getSortedCategories() {
  const items = [, , ,];
  ({ favoritesCategory: arr[0], recentsCategory: arr[1], noParentCategory: arr[2] } = this);
  items[HermesBuiltin.arraySpread(this.getSortedNamedCategories(), 3)] = this.voiceChannelsCategory;
  return items;
};
prototype["getSections"] = function getSections() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const self = this;
  if (null == this.sections) {
    const rows = self.getRows();
    self.sections = rows.map((item) => item.length);
  }
  const sections = self.sections;
  if (flag) {
    const items = [];
    HermesBuiltin.arraySpread(sections, 0);
    let tmp = items;
  } else {
    tmp = sections;
  }
  return tmp;
};
prototype["getRows"] = function getRows() {
  const self = this;
  if (null == this.rows) {
    const _Object = Object;
    self.sortedNamedCategories = _modDef12.sortBy(Object.values(self.categories), (record) => record.record.position);
    const items = [, , , , ,];
    ({
      channelNoticeSection: arr[0],
      guildActionSection: arr[1],
      favoritesCategory: arr[2],
      recentsCategory: arr[3],
      noParentCategory: arr[4],
    } = self);
    items[HermesBuiltin.arraySpread(self.sortedNamedCategories, 5)] = self.voiceChannelsCategory;
    self.rows = items.map((getRows) => getRows.getRows());
    let num = 0;
    const items1 = [self.noParentCategory];
    HermesBuiltin.arraySpread(self.sortedNamedCategories, 1);
    for (const item10007 of items1) {
      let sum = num + 1;
      num = sum;
      item10007.position = sum;
      let tmp2 = item10007;
      let shownChannelIds = item10007.getShownChannelIds();
      for (const item10018 of shownChannelIds) {
        let sum1 = num + 1;
        num = sum1;
        tmp2.channels[item10018].position = sum1;
        continue;
      }
      continue;
    }
  }
  return self.rows;
};
prototype["getCategoryFromSection"] = function getCategoryFromSection(arg0) {
  if (CHANNEL_NOTICES === arg0) {
    const _Error2 = Error;
    throw Error("Invalid section. Use getChannelNoticeSection instead");
  } else if (GUILD_ACTIONS === arg0) {
    const _Error = Error;
    throw Error("Invalid section. Use getGuildActionSection instead");
  } else {
    const self = this;
    if (FAVORITES === arg0) {
      return self.favoritesCategory;
    } else if (UNCATEGORIZED_CHANNELS === arg0) {
      return self.noParentCategory;
    } else if (self.recentsSectionNumber === arg0) {
      return self.recentsCategory;
    } else if (self.voiceChannelsSectionNumber === arg0) {
      return self.voiceChannelsCategory;
    } else {
      return self.getSortedNamedCategories()[arg0 - FIRST_NAMED_CATEGORY];
    }
  }
};
prototype["getNamedCategoryFromSection"] = function getNamedCategoryFromSection(arg0) {
  const self = this;
  const diff = arg0 - FIRST_NAMED_CATEGORY;
  let tmp3 = diff >= 0;
  if (tmp3) {
    tmp3 = diff < self.getSortedNamedCategories().length;
  }
  _modDef38(tmp3, "invalid section index " + diff);
  return self.getSortedNamedCategories()[diff];
};
prototype["getGuildActionSection"] = function getGuildActionSection() {
  return this.guildActionSection;
};
prototype["getChannelNoticeSection"] = function getChannelNoticeSection() {
  return this.channelNoticeSection;
};
prototype["getChannelFromSectionRow"] = function getChannelFromSectionRow(arg0, arg1) {
  const categoryFromSection = this.getCategoryFromSection(arg0);
  if (null == categoryFromSection) {
    return null;
  } else {
    const tmp2 = categoryFromSection.channels[categoryFromSection.getShownChannelIds(categoryFromSection)[arg1]];
    let tmp3 = null;
    if (null != tmp2) {
      const obj = { category: categoryFromSection, channel: tmp2 };
      tmp3 = obj;
    }
    return tmp3;
  }
};
prototype["isPlaceholderRow"] = function isPlaceholderRow(arg0, arg1) {
  const self = this;
  _modDef38(arg0 > GUILD_ACTIONS, "Invalid section");
  let tmp2 = arg0 !== this.recentsSectionNumber;
  if (tmp2) {
    tmp2 = self.getRows()[arg0][arg1] === c34;
  }
  return tmp2;
};
prototype["getFirstVoiceChannel"] = function getFirstVoiceChannel(arg0) {
  const self = this;
  if (undefined === this.firstVoiceChannel) {
    const favoritesCategory = self.favoritesCategory;
    self.firstVoiceChannel = favoritesCategory.getFirstVoiceChannel(arg0);
    if (null != self.firstVoiceChannel) {
      return self.firstVoiceChannel;
    } else {
      const noParentCategory = self.noParentCategory;
      self.firstVoiceChannel = noParentCategory.getFirstVoiceChannel(arg0);
      if (null != self.firstVoiceChannel) {
        return self.firstVoiceChannel;
      } else {
        const sortedNamedCategories = self.getSortedNamedCategories();
        for (const item10009 of sortedNamedCategories) {
          let obj2 = item10009;
          if (null != item10009.getFirstVoiceChannel(arg0)) {
            self.firstVoiceChannel = obj2.getFirstVoiceChannel(arg0);
            obj.return();
            break;
          }
          break;
        }
      }
    }
  }
  return self.firstVoiceChannel;
};
prototype["getSectionRowsFromChannel"] = function getSectionRowsFromChannel(arg0) {
  let GUILD_DIRECTORY = null;
  if (null != arg0) {
    GUILD_DIRECTORY = arg0;
    if (!set1.has(arg0)) {
      const channel = ChannelStore.getChannel(arg0);
      let isDirectoryResult;
      if (channel != null) {
        isDirectoryResult = channel.isDirectory();
      }
      GUILD_DIRECTORY = null;
      if (isDirectoryResult) {
        GUILD_DIRECTORY = ChannelListGuildActionRow.GUILD_DIRECTORY;
      }
    }
  }
  const self = this;
  if (null != GUILD_DIRECTORY) {
    let obj = { row: null, section: null };
    const guildActionSection = self.getGuildActionSection();
    const rows = guildActionSection.getRows();
    obj.row = rows.indexOf(GUILD_DIRECTORY);
    obj.section = GUILD_ACTIONS;
    const items = [obj];
    return items;
  } else {
    const items1 = [];
    const channel1 = ChannelStore.getChannel(arg0);
    let channel2 = channel1;
    if (null != channel1) {
      if (null != arg0) {
        const isThreadResult = channel1.isThread();
        let tmp7 = channel1;
        if (isThreadResult) {
          channel2 = ChannelStore.getChannel(channel1.parent_id);
          tmp7 = channel2;
        }
        if (null == tmp7) {
          return items1;
        } else {
          const favoritesCategory = self.favoritesCategory;
          const shownChannelIds = favoritesCategory.getShownChannelIds();
          const index = shownChannelIds.indexOf(tmp7.id);
          if (index >= 0) {
            obj = { section: FAVORITES, row: index };
            items1.push(obj);
          }
          const recentsCategory = self.recentsCategory;
          const shownChannelIds1 = recentsCategory.getShownChannelIds();
          const index1 = shownChannelIds1.indexOf(tmp7.id);
          if (index1 >= 0) {
            const obj1 = { section: self.recentsSectionNumber, row: index1 };
            items1.push(obj1);
          }
          if (tmp7.type === constants.GUILD_CATEGORY) {
            const obj2 = {
              section:
                _modDef12.findIndex(self.getSortedNamedCategories(), (id) => {
                  id = undefined;
                  if (channel2 != null) {
                    id = channel2.id;
                  }
                  return id.id === id;
                }) + FIRST_NAMED_CATEGORY,
            };
            const items2 = [obj2];
            return items2;
          } else {
            const category = self.getCategory(tmp7);
            if (category instanceof prototype3) {
              let sum = UNCATEGORIZED_CHANNELS;
            } else {
              const sortedNamedCategories = self.getSortedNamedCategories();
              sum = sortedNamedCategories.indexOf(category) + FIRST_NAMED_CATEGORY;
            }
            const shownChannelIds2 = category.getShownChannelIds();
            const index2 = shownChannelIds2.indexOf(tmp7.id);
            if (sum >= 0) {
              if (index2 >= 0) {
                let num = 0;
                if (isThreadResult) {
                  const threadIds = category.channels[tmp7.id].threadIds;
                  num = threadIds.indexOf(arg0);
                }
                const obj3 = { section: sum, row: index2, threadOffset: num };
                items1.push(obj3);
              }
            }
            const voiceChannelsCategory = self.voiceChannelsCategory;
            const shownChannelIds3 = voiceChannelsCategory.getShownChannelIds();
            const index3 = shownChannelIds3.indexOf(tmp7.id);
            if (index3 >= 0) {
              const obj4 = { section: self.voiceChannelsSectionNumber, row: index3 };
              items1.push(obj4);
            }
            return items1;
          }
        }
      }
    }
    return items1;
  }
};
prototype["getCategory"] = function getCategory(parent_id) {
  const self = this;
  if (null != parent_id.parent_id) {
    if (parent_id.parent_id in self.categories) {
      let noParentCategory = self.categories[parent_id.parent_id];
    }
    return noParentCategory;
  }
  noParentCategory = self.noParentCategory;
};
prototype["updateRecentsCategory"] = function updateRecentsCategory() {
  const self = this;
  const recentsCategory = this.recentsCategory;
  const updateAllChannelsResult = recentsCategory.updateAllChannels(this.initializationData);
  if (updateAllChannelsResult) {
    self.invalidate();
  }
  return updateAllChannelsResult;
};
prototype["nonPositionalChannelUpdate"] = function nonPositionalChannelUpdate(arg0) {
  const self = this;
  const initializationData = this.initializationData;
  const category = this.getCategory(arg0);
  let flag = category.updateChannel(arg0, initializationData);
  const favoritesCategory = this.favoritesCategory;
  if (favoritesCategory.updateChannel(arg0, initializationData)) {
    flag = true;
  }
  const recentsCategory = self.recentsCategory;
  if (recentsCategory.updateChannel(arg0, initializationData)) {
    flag = true;
  }
  const voiceChannelsCategory = self.voiceChannelsCategory;
  if (voiceChannelsCategory.updateChannel(arg0, initializationData)) {
    flag = true;
  }
  if (flag) {
    self.invalidate();
  }
  return flag;
};
prototype["getSlicedChannels"] = function getSlicedChannels(arg0, ignoreRecents) {
  _modDef38(arg0.length > 0, "must have at least one channel in the slice");
  let flag = true;
  let flag2 = false;
  const items = [];
  const items1 = [];
  const sortedCategories = this.getSortedCategories();
  const iter = sortedCategories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    ignoreRecents = undefined;
    if (ignoreRecents != null) {
      ignoreRecents = ignoreRecents.ignoreRecents;
    }
    if (ignoreRecents) {
      ignoreRecents = obj === this.recentsCategory;
    }
    let tmp8 = ignoreRecents;
    let shownChannelIds = obj.getShownChannelIds();
    for (const item10047 of shownChannelIds) {
      let tmp14 = obj.channels[item10047];
      if (flag) {
        if (tmp14.id === tmp2.id) {
          flag = false;
        } else if (!tmp8) {
          let arr = items.push(tmp14);
        }
      }
      let tmp20 = flag2;
      if (flag2) {
        tmp20 = !tmp8;
      }
      if (tmp20) {
        arr = items1.push(tmp14);
      }
      let tmp24 = flag;
      if (!flag) {
        tmp24 = flag2;
      }
      if (!tmp24) {
        if (tmp14.id === tmp3.id) {
          flag2 = true;
        }
      }
      continue;
    }
    continue;
  }
  const items2 = [items, arg0, items1];
  return items2;
};
prototype["_initializeAllChannelsById"] = function _initializeAllChannelsById() {
  const self = this;
  if (null == this.allChannelsById) {
    self.allChannelsById = {};
    const sortedCategories = self.getSortedCategories();
    for (const item10011 of sortedCategories) {
      for (const key10016 in item10011.channels) {
        self.allChannelsById[key10016] = tmp4.channels[key10016];
        continue;
      }
      continue;
    }
  }
  return self.allChannelsById;
};
prototype["getChannels"] = function getChannels(arg0) {
  const items = [];
  const result = this._initializeAllChannelsById();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null != result[nextResult]) {
      let arr = items.push(result[tmp3]);
    }
    continue;
  }
  return items;
};
prototype["getChannel"] = function getChannel(arg0) {
  let tmp = this._initializeAllChannelsById()[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["updateSubtitles"] = function updateSubtitles(arg0) {
  const self = this;
  if (null != arg0) {
    const items = [];
    const channel = ChannelStore.getChannel(arg0);
    let valueResult = items;
    if (null != channel) {
      if (channel.id in self.favoritesCategory.channels) {
        const items1 = [self.favoritesCategory.channels[channel.id]];
        valueResult = items1;
      } else if (channel.id in self.recentsCategory.channels) {
        const items2 = [self.recentsCategory.channels[channel.id]];
        valueResult = items2;
      } else {
        const category = self.getCategory(channel);
        valueResult = items;
        if (tmp7) {
          const items3 = [category.channels[arg0]];
          valueResult = items3;
        }
        tmp7 = null != category && null != category.channels[arg0];
      }
    }
  } else {
    const mapped = _modDef12(self.getSortedCategories()).map((channels) => Object.values(channels.channels));
    const tmp3Result = _modDef12(self.getSortedCategories());
    valueResult = mapped.flatten().value();
    const iter = mapped.flatten();
  }
  c0 = false;
  const item = valueResult.forEach((updateSubtitle) => {
    if (updateSubtitle.updateSubtitle()) {
      c0 = true;
    }
  });
  if (c0) {
    self.version = self.version + 1;
  }
  return c0;
};
prototype["forEachShownChannel"] = function forEachShownChannel(fn, ignoreRecents) {
  const sortedCategories = this.getSortedCategories();
  const iter = sortedCategories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    ignoreRecents = undefined;
    if (ignoreRecents != null) {
      ignoreRecents = ignoreRecents.ignoreRecents;
    }
    if (!ignoreRecents) {
      let shownChannelIds = obj.getShownChannelIds();
      for (const item10025 of shownChannelIds) {
        let tmp10 = obj.channels[item10025];
        let tmp11 = arg0(tmp10.record);
        let threadIds = tmp10.threadIds;
        for (const item10036 of threadIds) {
          let channel = ChannelStore.getChannel(item10036);
          if (null != channel) {
            let tmp18 = arg0(tmp16);
          }
          continue;
        }
        continue;
      }
    }
    continue;
  }
};
prototype["forEachChannel"] = function forEachChannel(fn, ignoreRecents) {
  const sortedCategories = this.getSortedCategories();
  const iter = sortedCategories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    ignoreRecents = undefined;
    if (ignoreRecents != null) {
      ignoreRecents = ignoreRecents.ignoreRecents;
    }
    if (!ignoreRecents) {
      let channelRecords = obj.getChannelRecords();
      for (const item10024 of channelRecords) {
        let tmp9 = arg0(item10024);
        continue;
      }
    }
    continue;
  }
};
class BaseChannelListCategory {
  constructor(arg0) {
    merged = Object.assign({ isMuted: false, isCollapsed: false, position: -1, channels: null, shownChannelIds: null });
    merged[3] = {};
    merged.guild = global;
    return merged;
  }
}
const prototype2 = BaseChannelListCategory.prototype;
prototype2["updateChannel"] = function updateChannel(id, arg1) {
  const self = this;
  let tmp = !(id.id in this.channels);
  if (!tmp) {
    tmp = !self.channels[id.id].updateChannel(id, arg1);
  }
  let flag = !tmp;
  if (!tmp) {
    self.invalidate();
    flag = true;
  }
  return flag;
};
prototype2["invalidate"] = function invalidate() {
  this.shownChannelIds = null;
};
prototype2["getRows"] = function getRows() {
  const self = this;
  const shownChannelIds = this.getShownChannelIds();
  let tmp = shownChannelIds;
  if (0 === shownChannelIds.length) {
    tmp = shownChannelIds;
    if (self.shouldShowEmptyCategory()) {
      const items = [c34];
      tmp = items;
    }
  }
  return tmp;
};
prototype2["shouldShowEmptyCategory"] = function shouldShowEmptyCategory() {
  return _modDef12.some(this.channels, (renderLevel) => renderLevel.renderLevel >= closure_1_35.WouldShowIfUncollapsed);
};
prototype2["getShownChannelIds"] = function getShownChannelIds() {
  const self = this;
  if (null == this.shownChannelIds) {
    const values = _modDef12(self.channels).values();
    const found = values.filter((renderLevel) => renderLevel.renderLevel === Show.Show);
    const obj = _modDef12(self.channels);
    const sortByResult = found.sortBy((record) => {
      record = record.record;
      const position = record.position;
      if (record.isGuildVocal()) {
        let sum = position + 10000;
      } else {
        sum = position;
      }
      return sum;
    });
    self.shownChannelIds = found
      .sortBy((record) => {
        record = record.record;
        const position = record.position;
        if (record.isGuildVocal()) {
          let sum = position + 10000;
        } else {
          sum = position;
        }
        return sum;
      })
      .map((id) => id.id)
      .value();
    const iter = found
      .sortBy((record) => {
        record = record.record;
        const position = record.position;
        if (record.isGuildVocal()) {
          let sum = position + 10000;
        } else {
          sum = position;
        }
        return sum;
      })
      .map((id) => id.id);
  }
  return self.shownChannelIds;
};
prototype2["getShownChannelAndThreadIds"] = function getShownChannelAndThreadIds() {
  const values = _modDef12(this.channels).values();
  const obj = _modDef12(this.channels);
  const iter = values.flatMap((threadIds) => threadIds.threadIds);
  const shownChannelIds = this.getShownChannelIds();
  return shownChannelIds.concat(values.flatMap((threadIds) => threadIds.threadIds).value());
};
prototype2["isEmpty"] = function isEmpty() {
  return 0 === this.getShownChannelIds().length;
};
prototype2["getChannelRecords"] = function getChannelRecords() {
  const values = _modDef12(this.channels).values();
  const found = values.filter((renderLevel) => renderLevel.renderLevel > CannotShow.CannotShow);
  const obj = _modDef12(this.channels);
  return found.map((record) => record.record).value();
};
prototype2["getFirstVoiceChannel"] = function getFirstVoiceChannel(arg0) {
  const self = this;
  const shownChannelIds = this.getShownChannelIds();
  for (const item10009 of shownChannelIds) {
    let tmp2 = item10009;
    if (arg0) {
      let record = self.channels[tmp2].record;
      if (record.isGuildStageVoice()) {
        obj.return();
        return self.channels[item10009];
      }
    }
    if (!arg0) {
      let record2 = self.channels[tmp2].record;
      if (record2.isGuildVocal()) {
        obj.return();
        return self.channels[tmp2];
      }
    }
    continue;
  }
  return null;
};
const prototype3 = function ChannelListCategoryNoParent(arg0, arg1, arg2) {
  closure_0 = arg2;
  tmp2 = new tmp2(arg0, new.target, tmp2, new.target, undefined, tmp);
  importDefault = tmp2;
  const mapped = _modDef12(arg1).map((item) => new ChannelListChannelImpl(closure_1, item, closure_0));
  const arr = _modDef12(arg1);
  tmp2.channels = mapped.keyBy((id) => id.id).value();
  return tmp2;
}.prototype;
class prototype3 extends BaseChannelListCategory {}
class ChannelListCategoryWithParent extends BaseChannelListCategory {
  constructor(arg0, arg1, arg2, arg3) {
    obj = { record: fn, id: fn.id, isCollapsed: true === global.collapsedCategoryIds[fn.id] };
    mutedChannelIds = global.mutedChannelIds;
    obj.isMuted = mutedChannelIds.has(fn.id);
    obj.channels = {};
    iter = importDefault[Symbol.iterator]();
    nextResult = iter.next();
    while (iter !== undefined) {
      tmp2 = ChannelListChannelImpl;
      tmp3 = new.target;
      tmp4 = obj;
      tmp5 = nextResult;
      tmp6 = importAll;
      obj.channels[nextResult.id] = new ChannelListChannelImpl(obj, nextResult, importAll);
      continue;
    }
    return obj;
  }
  shouldShowEmptyCategory() {
    self = this;
    tmp = super.shouldShowEmptyCategory();
    if (!tmp) {
      obj = closure_22;
      tmp2 = Permissions;
      isEmptyResult =
        closure_22.can(Permissions.MANAGE_CHANNELS, self.record) && obj.can(tmp2.VIEW_CHANNEL, self.record);
      if (isEmptyResult) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        obj2 = closure_1(closure_2[27]);
        isEmptyResult = obj2.isEmpty(self.channels);
      }
      tmp6 = !isEmptyResult;
      if (isEmptyResult) {
        optInEnabled = self.guild.optInEnabled;
        if (optInEnabled) {
          optedInChannels = self.guild.optedInChannels;
          optInEnabled = !optedInChannels.has(self.id);
        }
        tmp6 = optInEnabled;
      }
      tmp = !tmp6;
    }
    return tmp;
  }
}
let closure_63 = ChannelListCategoryWithParent.prototype;
class ChannelListFavoritesCategory extends BaseChannelListCategory {
  constructor(arg0, arg1) {
    closure_0 = fn;
    closure_1 = undefined;
    tmp5 = new ChannelListFavoritesCategory(global, tmp4, tmp3, tmp2, tmp, new.target, fn, new.target, undefined);
    closure_1 = tmp5;
    tmp6 = closure_2;
    tmp7 = closure_1(closure_2[27]);
    guildFavorites = closure_25.getGuildFavorites(global.id);
    if (guildFavorites == null) {
      guildFavorites = [];
    }
    tmp7Result = tmp7(guildFavorites);
    mapped = tmp7Result.map((item) => channel.getChannel(item));
    found = mapped.filter(closure_0(tmp6[34]).isNotNullish);
    mapped1 = found.map((item) => new FavoritesChannelListChannel(closure_1, item, closure_0));
    iter = mapped1.keyBy((id) => id.id);
    tmp5.channels = iter.value();
    suggestedChannelId = closure_9.getSuggestedChannelId(global.id);
    channel = closure_19.getChannel(suggestedChannelId);
    tmp10 = null != channel && null != suggestedChannelId;
    if (tmp10) {
      tmp11 = FavoritesChannelListChannel;
      obj = {};
      tmp12 = obj;
      tmp13 = fn;
      merged = Object.assign(fn);
      obj.activeJoinedRelevantThreads = {};
      obj.activeJoinedUnreadThreads = {};
      tmp15 = new.target;
      tmp16 = tmp5;
      tmp17 = channel;
      tmp18 = obj;
      tmp5.channels[suggestedChannelId] = new FavoritesChannelListChannel(tmp5, channel, obj);
    }
    return tmp5;
  }
}
const prototype4 = ChannelListFavoritesCategory.prototype;
prototype4["updateChannel"] = function updateChannel(id, arg1) {
  const self = this;
  let isFavoriteResult = id.id in this.channels;
  if (isFavoriteResult) {
    isFavoriteResult = UserGuildSettingsStore.isFavorite(id.guild_id, id.id);
  }
  const suggestedChannelId = FavoritesSuggestionStore.getSuggestedChannelId(id.guild_id);
  let tmp7 = arg1;
  if (tmp6) {
    const obj = {};
    const merged = Object.assign(arg1);
    obj.activeJoinedRelevantThreads = {};
    obj.activeJoinedUnreadThreads = {};
    tmp7 = obj;
  }
  if (id.id in self.channels) {
    if (obj2.updateChannel(id, tmp7)) {
      self.invalidate();
      let flag = true;
    }
    return flag;
  }
  const tmp11 = !(id.id in self.channels) || id.id === suggestedChannelId || isFavoriteResult;
  flag = !tmp11;
  if (!tmp11) {
    const channels = self.channels;
    id = id.id;
    delete tmp2[tmp];
    self.invalidate();
    flag = true;
  }
};
prototype4["getFirstVoiceChannel"] = function getFirstVoiceChannel() {
  return null;
};
let ChannelListRecentlyActiveCategory;
_instance_members_initializer_ChannelListRecentlyActiveCategory_ = function () {
  this.enabled = false;
};
class ChannelListRecentlyActiveCategory extends BaseChannelListCategory {
  constructor(arg0, arg1, arg2) {
    tmp6 = new ChannelListRecentlyActiveCategory(global, tmp5, tmp4, tmp3, tmp2, tmp, new.target);
    tmp7 = _instance_members_initializer_ChannelListRecentlyActiveCategory_();
    tmp6.isCollapsed = closure_10.isCollapsed(global.id);
    tmp6.enabled = Object.keys(fn).length >= ChannelListRecentlyActiveCategory.MIN_READABLE_CHANNELS;
    if (tmp6.enabled) {
      _Object = Object;
      values = Object.values(fn);
      tmp9 = values;
      tmp10 = values;
      for (const item10034 of values) {
        tmp11 = item10034;
        tmp12 = isGuildReadableType;
        tmp13 = isGuildReadableType(item10034.type);
        if (!tmp13) {
        } else {
          tmp14 = isThread;
          tmp15 = item10034;
          tmp13 = !isThread(tmp11.type);
        }
        if (!tmp13) {
        } else {
          tmp16 = item10034;
          tmp17 = RecentlyActiveChannelListChannel;
          tmp18 = new.target;
          tmp19 = tmp6;
          tmp20 = tmp11;
          tmp21 = arg2;
          tmp6.channels[tmp11.id] = new RecentlyActiveChannelListChannel(tmp6, item10034, arg2);
        }
        continue;
      }
    }
    return tmp6;
  }
  shouldShowEmptyCategory() {
    self = this;
    result = this.enabled && self.isCollapsed;
    if (result) {
      tmp2 = closure_67;
      result = super.shouldShowEmptyCategory();
    }
    return result;
  }
}
const prototype5 = ChannelListRecentlyActiveCategory.prototype;
prototype5["updateAllChannels"] = function updateAllChannels(arg0) {
  const self = this;
  closure_0 = arg0;
  const values = Object.values(this.channels);
  return values.reduce((acc, record) => self.updateChannel(record.record, closure_0) || acc, false);
};
prototype5["updateChannel"] = function updateChannel(type, initializationData) {
  const self = this;
  if (this.enabled) {
    if (value2(type.type)) {
      return null != self.channels[type.parent_id] && self.updateShownChannelIds(self.channels[type.parent_id]);
    } else if (__initData(type.type)) {
      if (null == self.channels[type.id]) {
        self.channels[type.id] = new RecentlyActiveChannelListChannel(self, type, initializationData);
        self.invalidate();
        let flag3 = true;
      } else {
        flag3 = self.updateShownChannelIds(tmp7) || tmp6;
      }
      return flag3;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
prototype5["getFirstVoiceChannel"] = function getFirstVoiceChannel() {
  return null;
};
prototype5["getShownChannelIds"] = function getShownChannelIds() {
  const self = this;
  if (null != this.shownChannelIds) {
    return self.shownChannelIds;
  } else {
    closure_0 = self.isCollapsed ? tmp4.Show : tmp4.WouldShowIfUncollapsed;
    if (self.enabled) {
      const found = _modDef12(self.channels).filter((renderLevel) => renderLevel.renderLevel >= closure_0);
      const mapped = found.map((item) => {
        const items = [, ,];
        ({ id: arr[0], lastMessageTimestamp: arr[1], renderLevel: arr[2] } = item);
        return items;
      });
      const found1 = mapped.filter((item) => {
        [, tmp, tmp2] = item;
        let tmp3 = tmp2 === closure_1_35.Show;
        if (!tmp3) {
          let tmp4 = tmp > 0;
          if (tmp4) {
            const _Date = Date;
            tmp4 = Date.now() - tmp < constants.MAX_TIMESTAMP_DELTA;
          }
          tmp3 = tmp4;
        }
        return tmp3;
      });
      const arr2 = _modDef12(self.channels);
      const sortByResult = found1.sortBy((arg0) => {
        [, tmp, tmp2] = arg0;
        let num = 0;
        if (tmp2 !== closure_1_35.Show) {
          num = closure_0(dependencyMap[35]).DISCORD_EPOCH;
        }
        return -tmp - num;
      });
      const takeResult = found1
        .sortBy((arg0) => {
          [, tmp, tmp2] = arg0;
          let num = 0;
          if (tmp2 !== closure_1_35.Show) {
            num = closure_0(dependencyMap[35]).DISCORD_EPOCH;
          }
          return -tmp - num;
        })
        .take(ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS);
      const sortByResult1 = found1
        .sortBy((arg0) => {
          [, tmp, tmp2] = arg0;
          let num = 0;
          if (tmp2 !== closure_1_35.Show) {
            num = closure_0(dependencyMap[35]).DISCORD_EPOCH;
          }
          return -tmp - num;
        })
        .take(ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS)
        .sortBy((arg0) => {
          [, tmp] = arg0;
          return -tmp;
        });
      let items = found1
        .sortBy((arg0) => {
          [, tmp, tmp2] = arg0;
          let num = 0;
          if (tmp2 !== closure_1_35.Show) {
            num = closure_0(dependencyMap[35]).DISCORD_EPOCH;
          }
          return -tmp - num;
        })
        .take(ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS)
        .sortBy((arg0) => {
          [, tmp] = arg0;
          return -tmp;
        })
        .map((item) => {
          [tmp] = item;
          return tmp;
        })
        .value();
      const iter = found1
        .sortBy((arg0) => {
          [, tmp, tmp2] = arg0;
          let num = 0;
          if (tmp2 !== closure_1_35.Show) {
            num = closure_0(dependencyMap[35]).DISCORD_EPOCH;
          }
          return -tmp - num;
        })
        .take(ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS)
        .sortBy((arg0) => {
          [, tmp] = arg0;
          return -tmp;
        })
        .map((item) => {
          [tmp] = item;
          return tmp;
        });
    } else {
      items = [];
    }
    self.shownChannelIds = items;
  }
};
prototype5["updateShownChannelIds"] = function updateShownChannelIds(renderLevel) {
  const self = this;
  if (null != self.shownChannelIds) {
    if (renderLevel.renderLevel >= tmp) {
      let lastMessageTimestamp;
      if (self.channels[self.shownChannelIds[0]] != null) {
        lastMessageTimestamp = tmp8.lastMessageTimestamp;
      }
      if (renderLevel.lastMessageTimestamp > lastMessageTimestamp) {
        const shownChannelIds = self.shownChannelIds;
        const index = shownChannelIds.indexOf(renderLevel.id);
        if (index > -1) {
          const shownChannelIds1 = self.shownChannelIds;
          shownChannelIds1.splice(index, 1);
        }
        const shownChannelIds2 = self.shownChannelIds;
        shownChannelIds2.splice(0, 0, renderLevel.id);
        if (self.shownChannelIds.length > ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS) {
          const shownChannelIds3 = self.shownChannelIds;
          self.shownChannelIds = shownChannelIds3.slice(0, tmp6.MAX_RECENT_CHANNELS);
        }
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};
ChannelListRecentlyActiveCategory.MIN_READABLE_CHANNELS = 7;
ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS = 10;
ChannelListRecentlyActiveCategory.MAX_TIMESTAMP_DELTA = 604800000;
class ChannelListRecentsCategory extends BaseChannelListCategory {
  constructor(arg0, arg1, arg2) {
    closure_0 = importDefault;
    closure_1 = undefined;
    tmp2 = new ChannelListRecentsCategory(global, new.target, new.target, undefined, global, tmp);
    closure_1 = tmp2;
    if (global.optInEnabled) {
      tmp3 = closure_8;
      if (!closure_8.isFullServerPreview(global.id)) {
        tmp4 = fn;
        flag = false;
        tmp2.isCollapsed = false;
        tmp2.isMuted = false;
        tmp5 = closure_1;
        tmp6 = closure_2;
        arr = closure_1(closure_2[27])(fn);
        mapped = arr.map((item) => new RecentsChannelListChannel(closure_1, item, closure_0));
        iter = mapped.keyBy((id) => id.id);
        tmp2.channels = iter.value();
      }
    }
    return tmp2;
  }
  updateChannel(arg0, arg1) {
    self = this;
    updateChannelResult = super.updateChannel(global, fn);
    if (this.guild.optInEnabled) {
      tmp2 = shouldShowInRecents;
      num = 0;
      if (shouldShowInRecents(self.guild, global, fn)) {
        tmp3 = null;
        if (null == self.channels[global.id]) {
          tmp4 = RecentsChannelListChannel;
          tmp5 = new.target;
          tmp6 = self;
          tmp7 = global;
          tmp8 = fn;
          self.channels[global.id] = new RecentsChannelListChannel(self, global, fn);
          invalidateResult = self.invalidate();
          flag = true;
          return true;
        }
      }
    }
    return updateChannelResult;
  }
}
const prototype6 = ChannelListRecentsCategory.prototype;
prototype6["updateAllChannels"] = function updateAllChannels(arg0) {
  const self = this;
  closure_1 = arg0;
  c0 = false;
  const keys = SnowflakeUtilsDefault.keys(this.channels);
  const item = keys.forEach((item) => {
    if (self.updateChannel(self.channels[item].record, closure_1)) {
      c0 = true;
    }
  });
  return c0;
};
prototype6["getFirstVoiceChannel"] = function getFirstVoiceChannel() {
  return null;
};
prototype6["getShownChannelIds"] = function getShownChannelIds() {
  const self = this;
  if (null == this.shownChannelIds) {
    const values = _modDef12(self.channels).values();
    const found = values.filter(
      (renderLevel) =>
        renderLevel.renderLevel === closure_1_35.Show || renderLevel.renderLevel === tmp.WouldShowIfUncollapsed,
    );
    const obj = _modDef12(self.channels);
    const sortByResult = found.sortBy((record) => record.record.position);
    const valueResult = found
      .sortBy((record) => record.record.position)
      .take(5)
      .value();
    const iter = found.sortBy((record) => record.record.position).take(5);
    const _Set = Set;
    const items = [];
    HermesBuiltin.arraySpread(
      valueResult,
      HermesBuiltin.arraySpread(
        found.filter((renderLevel) => renderLevel.renderLevel === closure_1_35.Show).value(),
        0,
      ),
    );
    set = new Set(items);
    const items1 = [];
    const iter2 = found.filter((renderLevel) => renderLevel.renderLevel === closure_1_35.Show);
    HermesBuiltin.arraySpread(set, 0);
    const tmp13Result = _modDef12(items1);
    const sortByResult1 = _modDef12(items1).sortBy((record) => record.record.position);
    self.shownChannelIds = _modDef12(items1)
      .sortBy((record) => record.record.position)
      .map((id) => id.id)
      .value();
    const iter3 = _modDef12(items1)
      .sortBy((record) => record.record.position)
      .map((id) => id.id);
  }
  return self.shownChannelIds;
};
class ChannelListVoiceChannelsCategory extends BaseChannelListCategory {
  constructor(arg0, arg1, arg2, arg3) {
    closure_0 = importAll;
    closure_1 = undefined;
    tmp2 = new ChannelListVoiceChannelsCategory(global, new.target, new.target, global, importDefault, undefined, tmp);
    closure_1 = tmp2;
    tmp2.hiddenChannelIds = null;
    tmp2.categoriesById = importDefault;
    if (global.optInEnabled) {
      tmp3 = fn;
      tmp4 = closure_28;
      tmp2.isCollapsed = closure_28.isVoiceCategoryCollapsed(global.id);
      flag = false;
      tmp2.isMuted = false;
      tmp2.categoriesById = importDefault;
      tmp5 = closure_1;
      tmp6 = closure_2;
      arr = closure_1(closure_2[27])(fn);
      mapped = arr.map((item) => new VoiceChannelListChannel(closure_1, item, closure_0));
      iter = mapped.keyBy((id) => id.id);
      tmp2.channels = iter.value();
    }
    return tmp2;
  }
  invalidate() {
    invalidateResult = super.invalidate();
    this.hiddenChannelIds = null;
    return;
  }
}
const prototype7 = ChannelListVoiceChannelsCategory.prototype;
prototype7["getHiddenChannelIds"] = function getHiddenChannelIds() {
  const self = this;
  if (this.guild.optInEnabled) {
    if (null == self.hiddenChannelIds) {
      const arr = _modDef12(self.channels);
      const valueResult = _modDef12(self.channels)
        .filter((renderLevel) => renderLevel.renderLevel === closure_1_35.WouldShowIfUncollapsed)
        .value();
      if (
        valueResult.every((record) => {
          record = record.record;
          return record.isCategory();
        })
      ) {
        self.hiddenChannelIds = [];
        return self.hiddenChannelIds;
      } else {
        self.hiddenChannelIds = valueResult.map((id) => id.id);
      }
      const iter = _modDef12(self.channels).filter(
        (renderLevel) => renderLevel.renderLevel === closure_1_35.WouldShowIfUncollapsed,
      );
    }
    return self.hiddenChannelIds;
  } else {
    return [];
  }
};
prototype7["getRows"] = function getRows() {
  const self = this;
  if (this.guild.optInEnabled) {
    const shownChannelIds = self.getShownChannelIds();
    let tmp = shownChannelIds;
    if (0 === shownChannelIds.length) {
      tmp = shownChannelIds;
      if (self.getHiddenChannelIds().length > 0) {
        const items = [c34];
        tmp = items;
      }
    }
    return tmp;
  } else {
    return [];
  }
};
prototype7["getShownChannelIds"] = function getShownChannelIds() {
  const self = this;
  if (this.guild.optInEnabled) {
    if (null == self.shownChannelIds) {
      const found = _modDef12(self.channels).filter((renderLevel) => renderLevel.renderLevel === Show.Show);
      const items = [
        (record) => {
          if (record.record.type === constants.GUILD_CATEGORY) {
            let num2 = record.record.position;
          } else {
            num2 = -1;
            if (null != record.record.parent_id) {
              let num3;
              if (tmp[record.record.parent_id] != null) {
                num3 = tmp3.position;
              }
              if (num3 == null) {
                num3 = -1;
              }
              num2 = num3;
            }
          }
          return num2;
        },
        (record) => {
          let num = -1;
          if (record.record.type !== constants.GUILD_CATEGORY) {
            num = record.record.position;
          }
          return num;
        },
      ];
      const arr2 = _modDef12(self.channels);
      const valueResult = found.orderBy(items, ["asc", "asc"]).value();
      self.shownChannelIds = [];
      for (let num = 0; num < valueResult.length; num = num + 1) {
        let tmp2 = valueResult[num];
        let diff = valueResult.length - 1;
        let tmp4 = num < diff;
        if (num < diff) {
          tmp4 = tmp2.record.type === constants.GUILD_CATEGORY;
        }
        if (tmp4) {
          let tmp7 = valueResult[num + 1];
          let type;
          if (tmp7 != null) {
            type = tmp7.record.type;
          }
          tmp4 = type === constants.GUILD_CATEGORY;
        }
        if (!tmp4) {
          let diff1 = valueResult.length - 1;
          let tmp11 = num === diff1;
          if (num === diff1) {
            tmp11 = tmp2.record.type === constants.GUILD_CATEGORY;
          }
          if (!tmp11) {
            let shownChannelIds = self.shownChannelIds;
            let arr = shownChannelIds.push(tmp2.id);
          }
        }
      }
      const iter = found.orderBy(items, ["asc", "asc"]);
    }
    return self.shownChannelIds;
  } else {
    return [];
  }
};
prototype7["getFirstVoiceChannel"] = function getFirstVoiceChannel() {
  return null;
};
class ChannelListChannelNoticeSection {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.rows = global;
    return obj;
  }
}
const prototype8 = ChannelListChannelNoticeSection.prototype;
prototype8["isEmpty"] = function isEmpty() {
  return 0 === this.rows.length;
};
prototype8["getRows"] = function getRows() {
  return this.rows;
};
prototype8["getRow"] = function getRow(arg0) {
  return this.rows[arg0];
};
class ChannelListGuildActionSection {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.guildActionRows = global.map(String);
    if (fn) {
      guildActionRows = obj.guildActionRows;
      _String = String;
      tmp2 = ChannelListGuildActionRow;
      arr = guildActionRows.push(String(ChannelListGuildActionRow.GUILD_DIRECTORY));
    }
    return obj;
  }
}
const prototype9 = ChannelListGuildActionSection.prototype;
prototype9["isEmpty"] = function isEmpty() {
  return 0 === this.guildActionRows.length;
};
prototype9["getRows"] = function getRows() {
  return this.guildActionRows;
};
prototype9["getRow"] = function getRow(arg0) {
  return this.guildActionRows[arg0];
};
class BaseChannelListChannel {
  constructor(arg0, arg1, arg2) {
    merged = Object.assign({ position: -1, threadIds: null, threadCount: 0, subtitle: null, renderLevel: null });
    merged[1] = [];
    merged[4] = closure_35.CannotShow;
    merged.category = global;
    merged.record = fn;
    merged.id = fn.id;
    state = merged.computeState(importDefault);
    ({ renderLevel, threadIds } = state);
    merged.renderLevel = renderLevel;
    obj2 = closure_1(closure_2[27]);
    merged.threadCount = obj2.size(threadIds);
    merged.threadIds = threadIds;
    if (renderLevel === closure_35.Show) {
      merged.subtitle = merged.computeSubtitle();
    }
    return merged;
  }
}
const prototype10 = BaseChannelListChannel.prototype;
Object.defineProperty(prototype10, "isMuted", {
  get: function isMuted() {
    const mutedChannelIds = this.category.guild.mutedChannelIds;
    return mutedChannelIds.has(this.id);
  },
  set: undefined,
});
Object.defineProperty(prototype10, "isCollapsed", {
  get: function isCollapsed() {
    return CollapsedVoiceChannelStore.isCollapsed(this.id);
  },
  set: undefined,
});
Object.defineProperty(prototype10, "isFirstVoiceChannel", {
  get: function isFirstVoiceChannel() {
    const category = this.category;
    return category.getFirstVoiceChannel() === this;
  },
  set: undefined,
});
Object.defineProperty(prototype10, "lastMessageTimestamp", {
  get: function lastMessageTimestamp() {
    const items = [ReadStateStore.lastMessageTimestamp(this.id), ...threadIds.map(ReadStateStore.lastMessageTimestamp)];
    threadIds = this.threadIds;
    return Math.max.apply(items);
  },
  set: undefined,
});
prototype10["updateChannel"] = function updateChannel(record, arg1) {
  const self = this;
  let flag = false;
  if (tmp) {
    self.record = record;
    flag = true;
  }
  const state = self.computeState(arg1);
  let isEqualResult = state.renderLevel === self.renderLevel;
  if (isEqualResult) {
    isEqualResult = _modDef12.isEqual(state.threadIds, self.threadIds);
  }
  if (!isEqualResult) {
    ({ renderLevel: self.renderLevel, threadIds: self.threadIds } = state);
    self.threadCount = _modDef12.size(state.threadIds);
    flag = true;
  }
  if (tmp8) {
    flag = true;
  }
  return flag;
};
prototype10["updateSubtitle"] = function updateSubtitle() {
  const subtitle = this.computeSubtitle();
  const isEqualResult = _modDef12.isEqual(this.subtitle, subtitle);
  let flag = !isEqualResult;
  if (!isEqualResult) {
    this.subtitle = subtitle;
    flag = true;
  }
  return flag;
};
prototype10["computeSubtitle"] = function computeSubtitle() {
  const self = this;
  let isCollapsed = this.isCollapsed;
  if (!isCollapsed) {
    isCollapsed = self.category.isCollapsed;
  }
  return computeSubtitle(this.record, isCollapsed, self.category.guild.optInEnabled);
};
class ChannelListChannelImpl extends BaseChannelListChannel {}
ChannelListChannelImpl.prototype["computeState"] = function computeState(arg0) {
  const self = this;
  ({ selectedChannel, selectedVoiceChannelId } = arg0);
  ({ activeJoinedRelevantThreads, activeJoinedUnreadThreads } = arg0);
  if (!PermissionStore.can(Permissions.VIEW_CHANNEL, this.record)) {
    if (self.id === selectedVoiceChannelId) {
      let obj = { renderLevel: closure_35.Show, threadIds: [] };
      return obj;
    } else if (!GatedChannelStore.isChannelGatedAndVisible(self.record.guild_id, self.record.id)) {
      obj = { renderLevel: closure_35.CannotShow, threadIds: [] };
      return obj;
    }
  }
  const parent_id = self.record.parent_id;
  const guild = self.category.guild;
  const favoriteChannelIds = guild.favoriteChannelIds;
  if (favoriteChannelIds.has(self.record.id)) {
    obj = { renderLevel: closure_35.CannotShow, threadIds: [] };
    return obj;
  } else {
    let id;
    if (selectedChannel != null) {
      id = selectedChannel.id;
    }
    const tmp7 = null != selectedChannel && selectedChannel.isThread() && selectedChannel.parent_id === self.id;
    if (!(id === self.id || selectedVoiceChannelId === self.id)) {
      if (!tmp7) {
        let obj1 = activeJoinedUnreadThreads[self.id];
      }
      if (obj1 == null) {
        obj1 = {};
      }
      const tmp12 = computeThreadIds(
        self.record,
        obj1,
        selectedChannel,
        selectedVoiceChannelId,
        guild.hideMutedChannels,
      );
      if (self.id === guild.moderatorReportChannelId) {
        const obj2 = { renderLevel: closure_35.DoNotShow, threadIds: tmp12 };
        return obj2;
      } else {
        if (guild.optInEnabled) {
          if (guild.hideResourceChannels) {
            const record = self.record;
            if (record.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
              const obj3 = { renderLevel: tmp6 ? closure_35.Show : closure_35.CannotShow, threadIds: tmp12 };
              return obj3;
            }
          }
        }
        if (guild.optInEnabled) {
          const optedInChannels = guild.optedInChannels;
          if (!optedInChannels.has(self.id)) {
            if (null != parent_id) {
              const optedInChannels2 = guild.optedInChannels;
            }
            let obj4 = { renderLevel: closure_35.DoNotShow, threadIds: tmp12 };
            return obj4;
          }
        }
        if (!tmp6) {
          if (!tmp7) {
            obj4 = _modDef12;
            if (obj4.isEmpty(tmp12)) {
              let obj5 = ReadStateStore;
              if (ReadStateStore.getMentionCount(self.id) <= 0) {
                if (guild.hideMutedChannels) {
                  const mutedChannelIds = guild.mutedChannelIds;
                  if (mutedChannelIds.has(self.id)) {
                    obj5 = { renderLevel: closure_35.DoNotShow, threadIds: tmp12 };
                    return obj5;
                  }
                }
                if (self.category.isCollapsed) {
                  const mutedChannelIds2 = guild.mutedChannelIds;
                  if (!mutedChannelIds2.has(self.id)) {
                    if (null != parent_id) {
                      const mutedChannelIds3 = guild.mutedChannelIds;
                    }
                    const record2 = self.record;
                    if (!record2.isGuildVocal()) {
                      if (self.record.type !== constants.GUILD_STORE) {
                        if (__initData(self.record.type)) {
                          if (!obj5.hasUnread(self.record.id)) {
                            const obj6 = { renderLevel: closure_35.WouldShowIfUncollapsed, threadIds: tmp12 };
                            return obj6;
                          }
                        }
                      }
                    }
                    const obj7 = { renderLevel: closure_35.WouldShowIfUncollapsed, threadIds: tmp12 };
                    return obj7;
                  }
                  const obj8 = { renderLevel: closure_35.WouldShowIfUncollapsed, threadIds: tmp12 };
                  return obj8;
                }
                const obj9 = { renderLevel: closure_35.Show, threadIds: tmp12 };
                return obj9;
              }
            }
          }
        }
        const obj10 = { renderLevel: closure_35.Show, threadIds: tmp12 };
        return obj10;
      }
    }
    obj1 = activeJoinedRelevantThreads[self.id];
  }
};
class FavoritesChannelListChannel extends BaseChannelListChannel {}
FavoritesChannelListChannel.prototype["computeState"] = function computeState(arg0) {
  const self = this;
  ({ selectedChannel, selectedVoiceChannelId } = arg0);
  let obj = { renderLevel: null, threadIds: null };
  if (PermissionStore.can(Permissions.VIEW_CHANNEL, this.record)) {
    obj.renderLevel = tmp.Show;
    const record = self.record;
    obj = arg0.activeJoinedRelevantThreads[self.id];
    if (obj == null) {
      obj = {};
    }
    obj.threadIds = computeThreadIds(record, obj, selectedChannel, selectedVoiceChannelId, false);
    let tmp2 = obj;
  } else {
    obj.renderLevel = tmp.CannotShow;
    obj.threadIds = [];
    tmp2 = obj;
  }
  return tmp2;
};
class RecentsChannelListChannel extends BaseChannelListChannel {}
RecentsChannelListChannel.prototype["computeState"] = function computeState(initializationData) {
  let self = this;
  let tmp = initializationData;
  ({ selectedChannel, selectedVoiceChannelId } = initializationData);
  if (PermissionStore.can(Permissions.VIEW_CHANNEL, this.record)) {
    let obj = { renderLevel: null, threadIds: null };
    if (shouldShowInRecents(self.category.guild, self.record, tmp)) {
      tmp = closure_35;
      obj.renderLevel = shouldAlwaysShowInRecents(self, tmp) ? tmp.Show : tmp.WouldShowIfUncollapsed;
      const record = self.record;
      obj = initializationData.activeJoinedRelevantThreads[self.id];
      if (obj == null) {
        obj = {};
      }
      self = computeThreadIds(record, obj, selectedChannel, selectedVoiceChannelId, false);
      obj.threadIds = self;
      const tmp7 = shouldAlwaysShowInRecents(self, tmp);
    } else {
      obj.renderLevel = closure_35.DoNotShow;
      obj.threadIds = [];
    }
  } else {
    obj = { renderLevel: closure_35.CannotShow, threadIds: [] };
    return obj;
  }
};
class RecentlyActiveChannelListChannel extends ChannelListChannelImpl {
  computeState(arg0) {
    self = this;
    state = super.computeState(global);
    ({ renderLevel, threadIds } = state);
    tmp2 = closure_35;
    sortByResult = threadIds;
    if (renderLevel > closure_35.CannotShow) {
      parent_id = self.record.parent_id;
      guild = self.category.guild;
      mutedChannelIds2 = guild.mutedChannelIds;
      if (!mutedChannelIds2.has(self.id)) {
        tmp5 = null;
        if (null != parent_id) {
          mutedChannelIds = guild.mutedChannelIds;
          tmp9 = renderLevel === tmp2.WouldShowIfUncollapsed;
          if (tmp9) {
            tmp10 = shouldAlwaysShowInRecents;
            num2 = 0;
            tmp9 = shouldAlwaysShowInRecents(self, global);
          }
          if (tmp9) {
            renderLevel = tmp2.Show;
          }
          tmp11 = closure_1;
          tmp12 = closure_2;
          obj = closure_1(closure_2[27]);
          sortByResult = obj.sortBy(threadIds, (arg0) => -ReadStateStore.lastMessageTimestamp(arg0));
        }
        tmp6 = renderLevel === tmp2.Show;
        if (!tmp6) {
          tmp7 = renderLevel === tmp2.DoNotShow;
          if (tmp7) {
            tmp8 = shouldShowInRecents;
            num = 0;
            tmp7 = shouldShowInRecents(self.category.guild, self.record, global);
          }
          tmp6 = tmp7;
        }
        if (tmp6) {
          renderLevel = tmp2.WouldShowIfUncollapsed;
        }
      }
      renderLevel = tmp2.DoNotShow;
    }
    return { renderLevel, threadIds: sortByResult };
  }
}
let closure_77 = RecentlyActiveChannelListChannel.prototype;
class VoiceChannelListChannel extends ChannelListChannelImpl {
  computeState(arg0) {
    self = this;
    renderLevel = this.getRenderLevel(super.computeState(global).renderLevel);
    if (renderLevel === closure_35.Show) {
      isCollapsed = self.isCollapsed;
      tmp2 = computeSubtitle;
      if (!isCollapsed) {
        isCollapsed = self.category.isCollapsed;
      }
      self.subtitle = tmp2(self.record, isCollapsed, self.category.guild.optInEnabled);
    }
    return { threadIds: [], renderLevel };
  }
}
const prototype11 = VoiceChannelListChannel.prototype;
prototype11["getRenderLevel"] = function getRenderLevel(renderLevel) {
  const self = this;
  if (PermissionStore.can(Permissions.VIEW_CHANNEL, this.record)) {
    if (renderLevel !== tmp.Show) {
      if (renderLevel !== tmp.WouldShowIfUncollapsed) {
        const favoriteChannelIds = this.category.guild.favoriteChannelIds;
        if (!favoriteChannelIds.has(self.record.id)) {
          if (self.category.isCollapsed) {
            _modDef12.some(VoiceStateStore.getVoiceStatesForChannel(self.record.id))
              ? tmp.Show
              : tmp.WouldShowIfUncollapsed;
          } else {
            let CannotShow = tmp.Show;
          }
        }
      }
    }
    CannotShow = tmp.CannotShow;
  } else {
    return tmp.CannotShow;
  }
};
const set1 = new Set(Object.values(ChannelListGuildActionRow));
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/ChannelListState.tsx");
class ChannelListStates {
  constructor() {
    merged = Object.assign({ guilds: null });
    merged[0] = {};
    return merged;
  }
}
const prototype12 = ChannelListStates.prototype;
prototype12["_areGuildActionRowsUpdated"] = function _areGuildActionRowsUpdated(id, arr) {
  let found;
  if (this.guilds[id] != null) {
    const guildActionSection = obj2.getGuildActionSection();
    const rows = guildActionSection.getRows();
    found = rows.filter((item) => !set.has(item));
  }
  return !_modDef12.isEqual(found, arr);
};
prototype12["_areChannelNoticeRowsUpdated"] = function _areChannelNoticeRowsUpdated(id, rows) {
  rows = undefined;
  if (this.guilds[id] != null) {
    const channelNoticeSection = obj2.getChannelNoticeSection();
    rows = channelNoticeSection.getRows();
  }
  return !_modDef12.isEqual(rows, rows);
};
prototype12["_areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow"] =
  function _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(id) {
    if (null == this.guilds[id]) {
      return false;
    } else {
      const categoryFromSection = obj.getCategoryFromSection(obj.voiceChannelsSectionNumber);
      const categoryFromSection1 = obj.getCategoryFromSection(obj.recentsSectionNumber);
      for (const key10005 in categoryFromSection1.channels) {
        let tmp8 = categoryFromSection1.channels[key10005];
        if (tmp8.renderLevel !== closure_35.DoNotShow) {
          continue;
        } else {
          let record = tmp8.record;
          if (!record.isGuildVocal()) {
            continue;
          } else {
            if (null != categoryFromSection.channels[tmp8.id]) {
              continue;
            } else {
              let obj2 = _modDef12;
              if (!obj2.some(VoiceStateStore.getVoiceStatesForChannel(tmp8.id))) {
                continue;
              } else if (ReadStateStore.getMentionCount(tmp8.id) <= 0) {
                continue;
              } else {
                let flag3 = true;
                return true;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      return false;
    }
  };
prototype12["getGuild"] = function getGuild(id, arr, rows) {
  const self = this;
  let result = !(id in this.guilds) || self._areGuildActionRowsUpdated(id, arr);
  if (!result) {
    result = self._areChannelNoticeRowsUpdated(id, rows);
  }
  if (!result) {
    result = self._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(id);
  }
  if (result) {
    self.guilds[id] = new ChannelListImpl(id, arr, rows);
  }
  return self.guilds[id];
};
prototype12["getGuildChannelRowsOnly"] = function getGuildChannelRowsOnly(id) {
  const self = this;
  if (!(id in this.guilds)) {
    self.guilds[id] = new ChannelListImpl(id, [], []);
  }
  return self.guilds[id];
};
prototype12["clear"] = function clear() {
  this.guilds = {};
};
prototype12["clearGuildId"] = function clearGuildId(guildId) {
  const self = this;
  let flag = null != guildId && guildId in self.guilds;
  if (flag) {
    const guilds = self.guilds;
    delete tmp[tmp2];
    flag = true;
  }
  return flag;
};
prototype12["updateRecentsCategory"] = function updateRecentsCategory(arg0) {
  const self = this;
  let tmp = null != arg0 && arg0 in self.guilds;
  if (tmp) {
    let flag;
    if (self.guilds[arg0] != null) {
      flag = obj.updateRecentsCategory();
    }
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
};
prototype12["nonPositionalChannelIdUpdate"] = function nonPositionalChannelIdUpdate(channelId) {
  const basicChannel = ChannelStore.getBasicChannel(channelId);
  let tmp2 = null != basicChannel;
  if (tmp2) {
    let tmp3 = null != basicChannel.guild_id;
    if (tmp3) {
      const self = this;
      let tmp4 = null != this.guilds[basicChannel.guild_id];
      if (tmp4) {
        let result = basicChannel instanceof closure_1_14;
        let tmp7 = basicChannel;
        if (!result) {
          const channel = ChannelStore.getChannel(channelId);
          result = null != channel;
          tmp7 = channel;
        }
        if (result) {
          result = self.nonPositionalChannelUpdate(tmp7);
        }
        tmp4 = result;
      }
      tmp3 = tmp4;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
prototype12["nonPositionalChannelUpdate"] = function nonPositionalChannelUpdate(guild_id) {
  if (null == guild_id.guild_id) {
    return false;
  } else {
    const self = this;
    if (null == this.guilds[guild_id.guild_id]) {
      return false;
    } else {
      let flag = false;
      if (guild_id.isThread()) {
        flag = self.nonPositionalChannelIdUpdate(guild_id.parent_id);
      }
      return obj.nonPositionalChannelUpdate(guild_id) || flag;
    }
  }
};
prototype12["updateSubtitles"] = function updateSubtitles(arg0, arg1) {
  const self = this;
  closure_0 = arg1;
  if (null == arg0) {
    const _Object = Object;
    let items = Object.values(self.guilds);
  } else if (arg0 in self.guilds) {
    items = [self.guilds[arg0]];
  } else {
    items = [];
  }
  const item = items.forEach((updateSubtitles) => updateSubtitles.updateSubtitles(closure_0));
};

export default ChannelListStates;
export const MAX_NEW_CHANNELS_TO_SHOW = 2;
export const ChannelListSections = obj;
export const SECTION_INDEX_CHANNEL_NOTICES = CHANNEL_NOTICES;
export const SECTION_INDEX_GUILD_ACTIONS = GUILD_ACTIONS;
export const SECTION_INDEX_FAVORITES = FAVORITES;
export const SECTION_INDEX_RECENTS = RECENTS;
export const SECTION_INDEX_UNCATEGORIZED_CHANNELS = UNCATEGORIZED_CHANNELS;
export const SECTION_INDEX_FIRST_NAMED_CATEGORY = FIRST_NAMED_CATEGORY;
export { ChannelListFavoritesCategory };
export { ChannelListVoiceChannelsCategory };
export { computeSubtitle };
export { computeThreadIds };
