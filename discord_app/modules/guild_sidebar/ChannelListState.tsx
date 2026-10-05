// === Module 7039: ChannelListState ===

// Module 7039 (ChannelListState)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import Constants2 from "Constants" /* 1096 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ChannelListUtils from "ChannelListUtils" /* 5036 */;
import getGuildModeratorReportingEnabledDefault from "getGuildModeratorReportingEnabled" /* 6769 */;
import getGuildModeratorReportChannelIdDefault from "getGuildModeratorReportChannelId" /* 6793 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 7045 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7040 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import FavoritesSuggestionStore from "FavoritesSuggestionStore" /* 7041 */;
import RecentlyActiveCollapseStore from "RecentlyActiveCollapseStore" /* 7042 */;
import NewChannelsStore from "NewChannelsStore" /* 7043 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5691 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 6612 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7038 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;
import ChannelListVoiceCategoryStore from "ChannelListVoiceCategoryStore" /* 7044 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _instance_members_initializer_ChannelListRecentlyActiveCategory_, _require, application, importDefault;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_30;
let closure_31;
const f93995 = (id) => id.id;
const f94007 = (id) => id.id;
const f94015 = (id) => id.id;
function computeSubtitle(type, arg1, arg2) {
  type = type.type;
  if (constants.GUILD_VOICE === type) {
    const activeEventByChannel = GuildScheduledEventStore.getActiveEventByChannel(type.id);
    if (null != activeEventByChannel) {
      return { type: "event", name: activeEventByChannel.name };
    } else {
      if (arg2) {
        const tmp9 = arg1;
        if (tmp9) {
          const obj2 = ChannelListUtils;
          if (obj2.hasStream(tmp19)) {
            return { type: "go-live" };
          }
        }
      }
      const channelStatus = ChannelStatusStore.getChannelStatus(type);
      if (null != channelStatus) {
        if (channelStatus.length > 0) {
          return { type: "voice", text: channelStatus };
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
        tmp16 = { type: "embedded-activities", name: found.join(", ") };
        const obj5 = { type: "embedded-activities", name: found.join(", ") };
      }
      return tmp16;
    }
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    const activeEventByChannel1 = GuildScheduledEventStore.getActiveEventByChannel(type.id);
    let tmp5 = null;
    if (null != activeEventByChannel1) {
      tmp5 = { type: "event", name: activeEventByChannel1.name };
      const obj = { type: "event", name: activeEventByChannel1.name };
    }
    return tmp5;
  } else {
    return null;
  }
}
function computeThreadIds(record, activeJoinedRelevantThreads, selectedChannel, selectedVoiceChannelId, hideMutedChannels) {
  let mentionCount;
  let muted;
  let tmp = null != selectedChannel;
  if (tmp) {
    let tmp2 = selectedChannel.id === record.id || selectedVoiceChannelId === record.id;
    tmp = tmp2;
  }
  const tmp4 = null != selectedChannel && selectedChannel.isThread() && selectedChannel.parent_id === record.id;
  if (set.has(record.type)) {
    const _Object = Object;
    const obj = _modDef12;
    const sortByResult = obj.sortBy(Object.values(activeJoinedRelevantThreads), (joinTimestamp) => -joinTimestamp.joinTimestamp);
    const mapped = sortByResult.map((channel) => channel.channel.id);
    let tmp9 = mapped;
    if (!tmp) {
      let found;
      if (tmp4) {
        found = mapped;
        if (!(selectedChannel.id in activeJoinedRelevantThreads)) {
          mapped.unshift(selectedChannel.id);
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
      tmp9 = found;
    }
    return tmp9;
  } else {
    return [];
  }
}
function shouldAlwaysShowInRecents(self, selectedChannel) {
  selectedChannel = selectedChannel.selectedChannel;
  const activeJoinedRelevantThreads = selectedChannel.activeJoinedRelevantThreads;
  if (ReadStateStore.getMentionCount(self.id) > 0) {
    return true;
  } else {
    for (const key10009 in activeJoinedRelevantThreads[self.id]) {
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
    const tmp3 = newChannelIds.size <= 2 && newChannelIds.has(self.id);
    return tmp3;
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
          let obj = _modDef12;
          if (obj.some(VoiceStateStore.getVoiceStatesForChannel(record.id))) {
            return false;
          }
        } else {
          return false;
        }
      }
      if (ReadStateStore.getMentionCount(record.id) > 0) {
        return true;
      } else {
        for (const key10048 in tmp[record.id]) {
          if (ReadStateStore.getMentionCount(key10048) > 0) {
            let flag5 = true;
            return true;
          } else if (ReadStateStore.hasUnread(key10048)) {
            let flag4 = true;
            return true;
          } else if (!ReadStateStore.hasRecentlyVisitedAndRead(key10048)) {
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
          const arr = Array.from(newChannelIds);
          const sorted = arr.sort((arg0, arg1) => {
            const obj = SnowflakeUtilsDefault;
            return obj.compare(arg1, arg0);
          });
          const hasItem = newChannelIds.has(record.id) && sorted.indexOf(record.id) < 2;
          const result = hasItem || ReadStateStore.hasRecentlyVisitedAndRead(record.id);
          return result;
        }
        return false;
      }
    }
  } else {
    return false;
  }
}
({ ChannelRecordBase: closure_14, isGuildReadableType: closure_15, isThread: closure_16, THREADED_CHANNEL_TYPES: closure_17 } = ChannelRecord);
const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
({ ChannelTypes: closure_30, GuildFeatures: closure_31 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const Permissions = Constants2.Permissions;
let c34 = "placeholder-channel-id";
const __initData4 = { CannotShow: 1, [1]: "CannotShow", DoNotShow: 2, [2]: "DoNotShow", WouldShowIfUncollapsed: 3, [3]: "WouldShowIfUncollapsed", Show: 4, [4]: "Show" };
let obj = { CHANNEL_NOTICES: 0, [0]: "CHANNEL_NOTICES", GUILD_ACTIONS: 1, [1]: "GUILD_ACTIONS", FAVORITES: 2, [2]: "FAVORITES", RECENTS: 3, [3]: "RECENTS", UNCATEGORIZED_CHANNELS: 4, [4]: "UNCATEGORIZED_CHANNELS", FIRST_NAMED_CATEGORY: 5, [5]: "FIRST_NAMED_CATEGORY" };
const CHANNEL_NOTICES = obj.CHANNEL_NOTICES;
const GUILD_ACTIONS = obj.GUILD_ACTIONS;
const FAVORITES = obj.FAVORITES;
const RECENTS = obj.RECENTS;
const UNCATEGORIZED_CHANNELS = obj.UNCATEGORIZED_CHANNELS;
const FIRST_NAMED_CATEGORY = obj.FIRST_NAMED_CATEGORY;
let items = [String(ChannelListGuildActionRow.GUILD_DIRECTORY)];
let set = new Set(items);
class ChannelListImpl {
  constructor(id, arr, rows) {
    let GUILD_CATEGORY;
    let arr4;
    let closure_1;
    let features;
    let initializationData;
    let self;
    let tmp34;
    let type;
    const merged = Object.assign({ sortedNamedCategories: null, sections: null, rows: null, firstVoiceChannel: "Array", allChannelsById: 0, version: "System" });
    merged.id = id;
    merged.hideMutedChannels = UserGuildSettingsStore.isGuildCollapsed(merged.id);
    merged.mutedChannelIds = UserGuildSettingsStore.getMutedChannels(merged.id);
    let optedInChannelsWithPendingUpdates = UserGuildSettingsStore.getOptedInChannelsWithPendingUpdates(merged.id);
    if (optedInChannelsWithPendingUpdates == null) {
      optedInChannelsWithPendingUpdates = UserGuildSettingsStore.getOptedInChannels(merged.id);
    }
    merged.optedInChannels = optedInChannelsWithPendingUpdates;
    const obj2 = initializationData(7046);
    merged.optInEnabled = obj2.isOptInEnabledForGuild(merged.id);
    const obj3 = initializationData(6723);
    merged.hideResourceChannels = obj3.canSeeOnboardingHome(merged.id);
    const _Set = Set;
    let guildFavorites = UserGuildSettingsStore.getGuildFavorites(merged.id);
    if (guildFavorites == null) {
      guildFavorites = [];
    }
    const _Set1 = new _Set(guildFavorites);
    merged.favoriteChannelIds = _Set1;
    merged.suggestedFavoriteChannelId = FavoritesSuggestionStore.getSuggestedChannelId(merged.id);
    merged.collapsedCategoryIds = CategoryCollapseStore.getCollapsedCategories();
    const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(merged.id);
    const guild = GuildStore.getGuild(merged.id);
    let tmp7 = null;
    if (null != guild) {
      tmp7 = getGuildModeratorReportChannelIdDefault(guild);
    }
    merged.moderatorReportChannelId = tmp7;
    merged.moderatorReportChannelEnabled = null != guild && getGuildModeratorReportingEnabledDefault(guild);
    const obj4 = {};
    const obj5 = {};
    const tmp9 = null != guild && getGuildModeratorReportingEnabledDefault(guild);
    for (const key10068 in mutableGuildChannelsForGuild) {
      let tmp57 = mutableGuildChannelsForGuild[key10068];
      if (tmp57.type !== constants.GUILD_CATEGORY) {
        continue;
      } else {
        obj4[tmp57.id] = tmp57;
        obj5[tmp57.id] = [];
        continue;
      }
      continue;
    }
    const items = [];
    let items1 = [];
    const items2 = [];
    const items3 = [];
    initializationData = merged.initializationData;
    for (const key10080 in mutableGuildChannelsForGuild) {
      tmp34 = mutableGuildChannelsForGuild[key10080];
      type = tmp34.type;
      arr4 = constants;
      GUILD_CATEGORY = constants.GUILD_CATEGORY;
      if (type === GUILD_CATEGORY) {
        continue;
      } else {
        type = tmp34.type;
        GUILD_CATEGORY = arr4.GUILD_SPACE;
        if (type === GUILD_CATEGORY) {
          continue;
        } else {
          type = tmp34.type;
          if (type !== arr4.GUILD_DIRECTORY) {
            GUILD_CATEGORY = shouldShowInRecents;
            if (shouldShowInRecents(merged, tmp34, initializationData)) {
              arr = items1.push(tmp34);
            } else {
              GUILD_CATEGORY = arr4.GUILD_VOICE;
              let tmp12 = tmp34.type !== GUILD_CATEGORY && tmp34.type !== arr4.GUILD_STAGE_VOICE;
              if (!tmp12) {
                let tmp13 = null != tmp34.parent_id && null != obj4[tmp34.parent_id];
                if (tmp13) {
                  let arr2 = items2.push(obj4[tmp34.parent_id]);
                }
                let arr3 = items2.push(tmp34);
              }
            }
            if (null != tmp34.parent_id) {
              if (tmp34.parent_id in obj5) {
                GUILD_CATEGORY = obj5[tmp34.parent_id];
                arr4 = GUILD_CATEGORY.push(tmp34);
                continue;
              }
            }
            arr4 = items.push(tmp34);
            continue;
          } else {
            GUILD_CATEGORY = null == guild;
            if (!GUILD_CATEGORY) {
              features = guild.features;
              GUILD_CATEGORY = features.has(constants2.HUB);
            }
            if (GUILD_CATEGORY) {
              continue;
            } else {
              GUILD_CATEGORY = items3.push(tmp34);
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    merged.categories = {};
    for (const key10112 in obj5) {
      GUILD_CATEGORY = key10112;
      type = ChannelListCategoryWithParent;
      self = this;
      merged.categories[key10112] = new ChannelListCategoryWithParent(merged, obj4[key10112], obj5[key10112], initializationData);
      continue;
    }
    merged.recentsSectionNumber = RECENTS;
    merged.favoritesSectionNumber = FAVORITES;
    if (typeof ChannelListCategoryNoParent === "function") {
      let tmp33;
      const self2 = this;
      const self3 = this;
      const tmp20 = new ChannelListCategoryNoParent(merged, tmp60, tmp37, initializationData, features, self, type, tmp34, GUILD_CATEGORY, items1, items, arr4, mutableGuildChannelsForGuild);
      importDefault = tmp20;
      const arr7 = _modDef12(items);
      let iter = arr7.map((item) => new ChannelListChannelImpl(closure_1, item, closure_0));
      let self4 = iter.keyBy(f93995);
      tmp20.channels = self4.value();
      merged.noParentCategory = tmp20;
      const self5 = this;
      let tmp26 = initializationData;
      merged.favoritesCategory = new ChannelListFavoritesCategory(merged, initializationData);
      const obj6 = initializationData(7047);
      if (obj6.isRecentlyActiveChannelsEnabled()) {
        self4 = this;
        tmp26 = mutableGuildChannelsForGuild;
        tmp33 = new ChannelListRecentlyActiveCategory(merged, mutableGuildChannelsForGuild, initializationData);
      } else {
        const self6 = this;
        if (typeof ChannelListRecentsCategory === "function") {
          const self7 = this;
          const self8 = this;
          const tmp31 = new ChannelListRecentsCategory(merged, tmp26, tmp37, initializationData, features, self, type, tmp34, GUILD_CATEGORY, items1, tmp28, self4, mutableGuildChannelsForGuild, this, undefined, items2, obj4, ChannelListRecentsCategory, items3, globalThis);
          importDefault = tmp31;
          iter = merged.optInEnabled;
          tmp33 = tmp31;
          if (iter) {
            tmp34 = ImpersonateStore;
            iter = ImpersonateStore.isFullServerPreview(merged.id);
            tmp33 = tmp31;
            if (!iter) {
              tmp31.isCollapsed = false;
              tmp31.isMuted = false;
              const arr8 = _modDef12(items1);
              items1 = arr8.map((item) => new RecentsChannelListChannel(closure_1, item, closure_0));
              iter = items1.keyBy(f94007);
              self4 = iter.value();
              tmp31.channels = self4;
              tmp33 = tmp31;
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      merged.recentsCategory = tmp33;
      if (typeof ChannelListVoiceChannelsCategory === "function") {
        const self9 = this;
        const self10 = this;
        const tmp42 = new ChannelListVoiceChannelsCategory(merged, tmp26, tmp37, initializationData, features, self, type, tmp34, GUILD_CATEGORY, items1, iter, self4, tmp38, this, undefined, items2, obj4, tmp39);
        importDefault = tmp42;
        tmp42.hiddenChannelIds = null;
        tmp42.categoriesById = obj4;
        if (merged.optInEnabled) {
          tmp42.isCollapsed = ChannelListVoiceCategoryStore.isVoiceCategoryCollapsed(merged.id);
          tmp42.isMuted = false;
          tmp42.categoriesById = obj4;
          const arr9 = _modDef12(items2);
          const mapped = arr9.map((item) => new VoiceChannelListChannel(closure_1, item, initializationData));
          const iter2 = mapped.keyBy(f94015);
          tmp42.channels = iter2.value();
        }
        merged.voiceChannelsCategory = tmp42;
        const self11 = this;
        if (typeof ChannelListGuildActionSection === "function") {
          const obj7 = Object.create(tmp45.prototype);
          const _String = String;
          obj7.guildActionRows = arr.map(String);
          if (tmp46) {
            const guildActionRows = obj7.guildActionRows;
            const _String2 = String;
            guildActionRows.push(String(ChannelListGuildActionRow.GUILD_DIRECTORY));
          }
          merged.guildActionSection = obj7;
          const self12 = this;
          if (typeof ChannelListChannelNoticeSection === "function") {
            const obj8 = Object.create(tmp51.prototype);
            obj8.rows = rows;
            merged.channelNoticeSection = obj8;
            _modDef38(!("null" in merged.categories), "somehow a null got into categories");
            const tmp22Result = _modDef12;
            merged.voiceChannelsSectionNumber = FIRST_NAMED_CATEGORY + tmp22Result.size(merged.categories);
            return merged;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  invalidate() {
    this.sections = null;
    this.rows = null;
    this.sortedNamedCategories = null;
    this.firstVoiceChannel = undefined;
    this.version = this.version + 1;
  }
  getSortedNamedCategories() {
    const self = this;
    if (null == this.sortedNamedCategories) {
      const rows = self.getRows();
    }
    return self.sortedNamedCategories;
  }
  getSortedCategories() {
    const items = [, , , ];
    ({ favoritesCategory: arr[0], recentsCategory: arr[1], noParentCategory: arr[2] } = this);
    items[HermesBuiltin.arraySpread(items, this.getSortedNamedCategories(), 3)] = this.voiceChannelsCategory;
    return items;
  }
  getSections() {
    let tmp2;
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
      HermesBuiltin.arraySpread(items, sections, 0);
      tmp2 = items;
    } else {
      tmp2 = sections;
    }
    return tmp2;
  }
  getRows() {
    const self = this;
    if (null == this.rows) {
      const _Object = Object;
      const obj = _modDef12;
      self.sortedNamedCategories = obj.sortBy(Object.values(self.categories), (record) => record.record.position);
      const items = [, , , , , ];
      ({ channelNoticeSection: arr[0], guildActionSection: arr[1], favoritesCategory: arr[2], recentsCategory: arr[3], noParentCategory: arr[4] } = self);
      items[HermesBuiltin.arraySpread(items, self.sortedNamedCategories, 5)] = self.voiceChannelsCategory;
      self.rows = items.map((getRows) => getRows.getRows());
      let num = 0;
      const items1 = [self.noParentCategory];
      HermesBuiltin.arraySpread(items1, self.sortedNamedCategories, 1);
      for (const item10007 of items1) {
        let sum = num + 1;
        num = sum;
        item10007.position = sum;
        let shownChannelIds = item10007.getShownChannelIds();
        for (const item10018 of shownChannelIds) {
          let sum1 = num + 1;
          num = sum1;
          item10007.channels[item10018].position = sum1;
          continue;
        }
        continue;
      }
    }
    return self.rows;
  }
  getCategoryFromSection(arg0) {
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
  }
  getNamedCategoryFromSection(arg0) {
    const self = this;
    const diff = arg0 - FIRST_NAMED_CATEGORY;
    let tmp3 = diff >= 0;
    const tmp2 = _modDef38;
    if (tmp3) {
      tmp3 = diff < self.getSortedNamedCategories().length;
    }
    tmp2(tmp3, "invalid section index " + diff);
    return self.getSortedNamedCategories()[diff];
  }
  getGuildActionSection() {
    return this.guildActionSection;
  }
  getChannelNoticeSection() {
    return this.channelNoticeSection;
  }
  getChannelFromSectionRow(arg0, arg1) {
    const categoryFromSection = this.getCategoryFromSection(arg0);
    if (null == categoryFromSection) {
      return null;
    } else {
      const tmp2 = categoryFromSection.channels[categoryFromSection.getShownChannelIds(categoryFromSection)[arg1]];
      let tmp3 = null;
      if (null != tmp2) {
        tmp3 = { category: categoryFromSection, channel: tmp2 };
        const obj = { category: categoryFromSection, channel: tmp2 };
      }
      return tmp3;
    }
  }
  isPlaceholderRow(arg0, arg1) {
    const self = this;
    _modDef38(arg0 > GUILD_ACTIONS, "Invalid section");
    const tmp2 = arg0 !== this.recentsSectionNumber && self.getRows()[arg0][arg1] === c34;
    return tmp2;
  }
  getFirstVoiceChannel(arg0) {
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
            if (null != item10009.getFirstVoiceChannel(arg0)) {
              self.firstVoiceChannel = item10009.getFirstVoiceChannel(arg0);
              obj.return();
              break;
            }
            break;
          }
        }
      }
    }
    return self.firstVoiceChannel;
  }
  getSectionRowsFromChannel(arg0) {
    let obj6;
    let rows;
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
      const obj = { row: rows.indexOf(GUILD_DIRECTORY), section: GUILD_ACTIONS };
      const guildActionSection = self.getGuildActionSection();
      rows = guildActionSection.getRows();
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
              const obj2 = { section: FAVORITES, row: index };
              items1.push(obj2);
            }
            const recentsCategory = self.recentsCategory;
            const shownChannelIds1 = recentsCategory.getShownChannelIds();
            const index1 = shownChannelIds1.indexOf(tmp7.id);
            if (index1 >= 0) {
              const obj3 = { section: self.recentsSectionNumber, row: index1 };
              items1.push(obj3);
            }
            if (tmp7.type === constants.GUILD_CATEGORY) {
              const obj4 = {
                section: obj6.findIndex(self.getSortedNamedCategories(), (id) => {
                            let id1;
                            id = id.id;
                            if (channel2 != null) {
                              id1 = channel2.id;
                            }
                            return id === id1;
                          }) + FIRST_NAMED_CATEGORY
              };
              const items2 = [obj4];
              obj6 = _modDef12;
              return items2;
            } else {
              let sum;
              const category = self.getCategory(tmp7);
              if (category instanceof ChannelListCategoryNoParent) {
                sum = UNCATEGORIZED_CHANNELS;
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
                  const obj5 = { section: sum, row: index2, threadOffset: num };
                  items1.push(obj5);
                }
              }
              const voiceChannelsCategory = self.voiceChannelsCategory;
              const shownChannelIds3 = voiceChannelsCategory.getShownChannelIds();
              const index3 = shownChannelIds3.indexOf(tmp7.id);
              if (index3 >= 0) {
                const obj7 = { section: self.voiceChannelsSectionNumber, row: index3 };
                items1.push(obj7);
              }
              return items1;
            }
          }
        }
      }
      return items1;
    }
  }
  getCategory(parent_id) {
    const self = this;
    if (null != parent_id.parent_id) {
      let noParentCategory;
      if (parent_id.parent_id in self.categories) {
        noParentCategory = self.categories[parent_id.parent_id];
      }
      return noParentCategory;
    }
    noParentCategory = self.noParentCategory;
  }
  updateRecentsCategory() {
    const self = this;
    const recentsCategory = this.recentsCategory;
    const updateAllChannelsResult = recentsCategory.updateAllChannels(this.initializationData);
    if (updateAllChannelsResult) {
      self.invalidate();
    }
    return updateAllChannelsResult;
  }
  nonPositionalChannelUpdate(arg0) {
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
  }
  getSlicedChannels(arg0, ignoreRecents) {
    _modDef38(arg0.length > 0, "must have at least one channel in the slice");
    let flag = true;
    let flag2 = false;
    const items = [];
    const items1 = [];
    const first = arg0[0];
    const tmp3 = arg0[arg0.length - 1];
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
        let tmp15 = flag;
        if (tmp15) {
          if (tmp14.id === first.id) {
            flag = false;
          } else if (!tmp8) {
            let arr = items.push(tmp14);
          }
        }
        let tmp20 = flag2;
        if (tmp20) {
          tmp20 = !tmp8;
        }
        if (tmp20) {
          let arr2 = items1.push(tmp14);
        }
        let tmp24 = flag || flag2;
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
  }
  _initializeAllChannelsById() {
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
  }
  getChannels(arg0) {
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
  }
  getChannel(arg0) {
    let tmp = this._initializeAllChannelsById()[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  updateSubtitles(arg0) {
    let valueResult;
    const self = this;
    if (null != arg0) {
      const items = [];
      const channel = ChannelStore.getChannel(arg0);
      valueResult = items;
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
          const tmp7 = null != category && null != category.channels[arg0];
          if (tmp7) {
            const items3 = [category.channels[arg0]];
            valueResult = items3;
          }
        }
      }
    } else {
      const tmp3 = _modDef12;
      const tmp3Result = tmp3(self.getSortedCategories());
      const mapped = tmp3Result.map((channels) => Object.values(channels.channels));
      const iter = mapped.flatten();
      valueResult = iter.value();
    }
    let c0 = false;
    const item = valueResult.forEach((updateSubtitle) => {
      if (updateSubtitle.updateSubtitle()) {
        c0 = true;
      }
    });
    const tmp9 = c0;
    if (tmp9) {
      self.version = self.version + 1;
    }
    return c0;
  }
  forEachShownChannel(fn, ignoreRecents) {
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
          let tmp11 = fn(tmp10.record);
          let threadIds = tmp10.threadIds;
          for (const item10036 of threadIds) {
            let channel = ChannelStore.getChannel(item10036);
            if (null != channel) {
              let tmp18 = fn(tmp16);
            }
            continue;
          }
          continue;
        }
      }
      continue;
    }
  }
  forEachChannel(fn, ignoreRecents) {
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
          let tmp9 = fn(item10024);
          continue;
        }
      }
      continue;
    }
  }
}
Object.defineProperty(ChannelListImpl.prototype, "initializationData", {
  get: function initializationData() {
    const obj = { selectedChannel: ChannelStore.getChannel(SelectedChannelStore.getChannelId()), selectedVoiceChannelId: SelectedChannelStore.getVoiceChannelId(), activeJoinedRelevantThreads: ActiveJoinedThreadsStore.getActiveJoinedRelevantThreadsForGuild(this.id), activeJoinedUnreadThreads: ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForGuild(this.id) };
    return obj;
  },
  set: undefined
});
class BaseChannelListCategory {
  constructor(guild) {
    const merged = Object.assign({ isMuted: false, isCollapsed: false, position: -1, channels: null, shownChannelIds: null });
    merged[3] = {};
    merged.guild = guild;
    return merged;
  }
  updateChannel(id, arg1) {
    const self = this;
    let tmp = !(id.id in this.channels);
    if (!tmp) {
      const obj = self.channels[id.id];
      tmp = !obj.updateChannel(id, arg1);
    }
    let flag = !tmp;
    if (flag) {
      self.invalidate();
      flag = true;
    }
    return flag;
  }
  invalidate() {
    this.shownChannelIds = null;
  }
  getRows() {
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
  }
  shouldShowEmptyCategory() {
    const obj = _modDef12;
    return obj.some(this.channels, (renderLevel) => renderLevel.renderLevel >= closure_1_35.WouldShowIfUncollapsed);
  }
  getShownChannelIds() {
    let Show;
    const self = this;
    if (null == this.shownChannelIds) {
      const obj = _modDef12(self.channels);
      const values = obj.values();
      const found = values.filter((renderLevel) => renderLevel.renderLevel === Show.Show);
      const sortByResult = found.sortBy((record) => {
        let sum;
        record = record.record;
        const position = record.position;
        if (record.isGuildVocal()) {
          sum = position + 10000;
        } else {
          sum = position;
        }
        return sum;
      });
      const iter = sortByResult.map((id) => id.id);
      self.shownChannelIds = iter.value();
    }
    return self.shownChannelIds;
  }
  getShownChannelAndThreadIds() {
    const obj = _modDef12(this.channels);
    const values = obj.values();
    const iter = values.flatMap((threadIds) => threadIds.threadIds);
    const valueResult = iter.value();
    const shownChannelIds = this.getShownChannelIds();
    return shownChannelIds.concat(valueResult);
  }
  isEmpty() {
    return 0 === this.getShownChannelIds().length;
  }
  getChannelRecords() {
    let CannotShow;
    const obj = _modDef12(this.channels);
    const values = obj.values();
    const found = values.filter((renderLevel) => renderLevel.renderLevel > CannotShow.CannotShow);
    const iter = found.map((record) => record.record);
    return iter.value();
  }
  getFirstVoiceChannel(arg0) {
    const self = this;
    const shownChannelIds = this.getShownChannelIds();
    for (const item10009 of shownChannelIds) {
      if (arg0) {
        let record = self.channels[item10009].record;
        if (record.isGuildStageVoice()) {
          let tmp8 = self.channels[item10009];
          obj.return();
          return tmp8;
        }
      }
      if (!arg0) {
        let record2 = self.channels[item10009].record;
        if (record2.isGuildVocal()) {
          let tmp6 = self.channels[item10009];
          obj.return();
          return tmp6;
        }
      }
      continue;
    }
    return null;
  }
}
const prototype = BaseChannelListCategory.prototype;
class ChannelListCategoryNoParent extends BaseChannelListCategory {
  constructor(merged, arg1, arg2) {
    let closure_1;
    let closure_0 = arg2;
    const tmp22 = new tmp2(merged, new.target, tmp2, this, undefined, tmp);
    importDefault = tmp22;
    const arr = _modDef12(arg1);
    const mapped = arr.map((item) => new ChannelListChannelImpl(closure_1, item, closure_0));
    const iter = mapped.keyBy(f93995);
    tmp22.channels = iter.value();
    return tmp22;
  }
}
class ChannelListCategoryWithParent extends BaseChannelListCategory {
  constructor(merged, record, arg2, initializationData) {
    let mutedChannelIds;
    const obj = { record, id: record.id, isCollapsed: true === merged.collapsedCategoryIds[record.id], isMuted: mutedChannelIds.has(record.id), channels: {} };
    mutedChannelIds = merged.mutedChannelIds;
    const iter = arg2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let self = this;
      obj.channels[nextResult.id] = new ChannelListChannelImpl(obj, nextResult, initializationData);
      continue;
    }
    return obj;
  }
  shouldShowEmptyCategory() {
    const self = this;
    let result = super.shouldShowEmptyCategory();
    if (!result) {
      let isEmptyResult = PermissionStore.can(Permissions.MANAGE_CHANNELS, self.record) && PermissionStore.can(Permissions.VIEW_CHANNEL, self.record);
      if (isEmptyResult) {
        const obj2 = _modDef12;
        isEmptyResult = obj2.isEmpty(self.channels);
      }
      let tmp6 = !isEmptyResult;
      if (isEmptyResult) {
        let optInEnabled = self.guild.optInEnabled;
        if (optInEnabled) {
          const optedInChannels = self.guild.optedInChannels;
          optInEnabled = !optedInChannels.has(self.id);
        }
        tmp6 = optInEnabled;
      }
      result = !tmp6;
    }
    return result;
  }
}
let closure_63 = ChannelListCategoryWithParent.prototype;
class ChannelListFavoritesCategory extends BaseChannelListCategory {
  constructor(merged, initializationData) {
    let closure_1;
    _require = initializationData;
    const tmp5 = new ChannelListFavoritesCategory(merged, tmp4, tmp3, tmp2, tmp, new.target, initializationData, this, undefined);
    importDefault = tmp5;
    const tmp7 = _modDef12;
    let guildFavorites = UserGuildSettingsStore.getGuildFavorites(merged.id);
    if (guildFavorites == null) {
      guildFavorites = [];
    }
    const tmp7Result = tmp7(guildFavorites);
    const mapped = tmp7Result.map((item) => channel.getChannel(item));
    const found = mapped.filter(require("GlobalUtils").isNotNullish);
    const mapped1 = found.map((item) => new FavoritesChannelListChannel(closure_1, item, initializationData));
    const iter = mapped1.keyBy((id) => id.id);
    tmp5.channels = iter.value();
    const suggestedChannelId = FavoritesSuggestionStore.getSuggestedChannelId(merged.id);
    const channel = ChannelStore.getChannel(suggestedChannelId);
    const tmp10 = null != channel && null != suggestedChannelId;
    if (tmp10) {
      const channels = tmp5.channels;
      const obj = { activeJoinedRelevantThreads: {}, activeJoinedUnreadThreads: {} };
      merged = Object.assign(initializationData);
      const self = this;
      channels[suggestedChannelId] = new FavoritesChannelListChannel(tmp5, channel, obj);
    }
    return tmp5;
  }
  updateChannel(id, arg1) {
    let flag;
    const self = this;
    const isFavoriteResult = id.id in this.channels && UserGuildSettingsStore.isFavorite(id.guild_id, id.id);
    const suggestedChannelId = FavoritesSuggestionStore.getSuggestedChannelId(id.guild_id);
    let tmp5 = arg1;
    const tmp4 = id.id === suggestedChannelId && !isFavoriteResult;
    if (tmp4) {
      const obj = { activeJoinedRelevantThreads: {}, activeJoinedUnreadThreads: {} };
      const merged = Object.assign(arg1);
      tmp5 = obj;
    }
    if (id.id in self.channels) {
      const obj2 = self.channels[id.id];
      if (obj2.updateChannel(id, tmp5)) {
        self.invalidate();
        flag = true;
      }
      return flag;
    }
    flag = !(!(id.id in self.channels) || id.id === suggestedChannelId || isFavoriteResult);
    if (flag) {
      delete self.channels[id.id];
      self.invalidate();
      flag = true;
    }
  }
  getFirstVoiceChannel() {
    return null;
  }
}
const prototype2 = ChannelListFavoritesCategory.prototype;
_instance_members_initializer_ChannelListRecentlyActiveCategory_ = function() {
  this.enabled = false;
};
class ChannelListRecentlyActiveCategory extends BaseChannelListCategory {
  constructor(merged, mutableGuildChannelsForGuild, initializationData) {
    const tmp6 = new ChannelListRecentlyActiveCategory(merged, tmp5, tmp4, tmp3, tmp2, tmp, new.target);
    _instance_members_initializer_ChannelListRecentlyActiveCategory_();
    tmp6.isCollapsed = RecentlyActiveCollapseStore.isCollapsed(merged.id);
    tmp6.enabled = Object.keys(mutableGuildChannelsForGuild).length >= ChannelListRecentlyActiveCategory.MIN_READABLE_CHANNELS;
    if (tmp6.enabled) {
      const _Object = Object;
      const values = Object.values(mutableGuildChannelsForGuild);
      for (const item10034 of values) {
        let tmp13 = closure_15(item10034.type) && !authStore3(item10034.type);
        if (tmp13) {
          let self = this;
          tmp6.channels[item10034.id] = new RecentlyActiveChannelListChannel(tmp6, item10034, initializationData);
        }
        continue;
      }
    }
    return tmp6;
  }
  shouldShowEmptyCategory() {
    const self = this;
    const result = this.enabled && self.isCollapsed && super.shouldShowEmptyCategory();
    return result;
  }
  updateAllChannels(arg0) {
    const self = this;
    let closure_0 = arg0;
    const values = Object.values(this.channels);
    return values.reduce((acc, record) => {
      const tmp = self.updateChannel(record.record, closure_0) || acc;
      return tmp;
    }, false);
  }
  updateChannel(type, initializationData) {
    const self = this;
    if (this.enabled) {
      if (authStore3(type.type)) {
        const tmp16 = null != self.channels[type.parent_id] && self.updateShownChannelIds(self.channels[type.parent_id]);
        return tmp16;
      } else if (closure_15(type.type)) {
        let flag3;
        if (null == self.channels[type.id]) {
          const self2 = this;
          self.channels[type.id] = new RecentlyActiveChannelListChannel(self, type, initializationData);
          self.invalidate();
          flag3 = true;
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
  }
  getFirstVoiceChannel() {
    return null;
  }
  getShownChannelIds() {
    const self = this;
    if (null == this.shownChannelIds) {
      let items;
      let closure_0 = self.isCollapsed ? closure_35.Show : closure_35.WouldShowIfUncollapsed;
      if (self.enabled) {
        const arr2 = _modDef12(self.channels);
        const found = arr2.filter((renderLevel) => renderLevel.renderLevel >= closure_0);
        const mapped = found.map((item) => {
          const items = [, , ];
          ({ id: arr[0], lastMessageTimestamp: arr[1], renderLevel: arr[2] } = item);
          return items;
        });
        const found1 = mapped.filter((item) => {
          let tmp;
          let tmp2;
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
        const sortByResult = found1.sortBy((arg0) => {
          let tmp;
          let tmp2;
          [, tmp, tmp2] = arg0;
          let num = 0;
          if (tmp2 !== closure_1_35.Show) {
            num = closure_0(dependencyMap[35]).DISCORD_EPOCH;
          }
          return -tmp - num;
        });
        const takeResult = sortByResult.take(ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS);
        const sortByResult1 = takeResult.sortBy((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        });
        const iter = sortByResult1.map((item) => {
          let tmp;
          [tmp] = item;
          return tmp;
        });
        items = iter.value();
      } else {
        items = [];
      }
      self.shownChannelIds = items;
    }
    return self.shownChannelIds;
  }
  updateShownChannelIds(renderLevel) {
    const self = this;
    if (null != self.shownChannelIds) {
      if (renderLevel.renderLevel >= tmp) {
        let lastMessageTimestamp1;
        const lastMessageTimestamp = renderLevel.lastMessageTimestamp;
        if (self.channels[self.shownChannelIds[0]] != null) {
          lastMessageTimestamp1 = tmp8.lastMessageTimestamp;
        }
        if (lastMessageTimestamp > lastMessageTimestamp1) {
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
  }
}
let closure_67 = ChannelListRecentlyActiveCategory.prototype;
ChannelListRecentlyActiveCategory.MIN_READABLE_CHANNELS = 7;
ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS = 10;
ChannelListRecentlyActiveCategory.MAX_TIMESTAMP_DELTA = 604800000;
class ChannelListRecentsCategory extends BaseChannelListCategory {
  constructor(merged, arg1, arg2) {
    let closure_1;
    let closure_0 = arg2;
    const tmp2 = new ChannelListRecentsCategory(merged, new.target, this, undefined, merged, tmp);
    importDefault = tmp2;
    if (merged.optInEnabled) {
      if (!ImpersonateStore.isFullServerPreview(merged.id)) {
        tmp2.isCollapsed = false;
        tmp2.isMuted = false;
        const arr = _modDef12(arg1);
        const mapped = arr.map((item) => new RecentsChannelListChannel(closure_1, item, closure_0));
        const iter = mapped.keyBy(f94007);
        tmp2.channels = iter.value();
      }
    }
    return tmp2;
  }
  updateAllChannels(arg0) {
    const self = this;
    let closure_1 = arg0;
    let c0 = false;
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(this.channels);
    const item = keys.forEach((item) => {
      if (self.updateChannel(self.channels[item].record, closure_1)) {
        c0 = true;
      }
    });
    return c0;
  }
  updateChannel(id, initializationData) {
    const self = this;
    const updateChannelResult = super.updateChannel(id, initializationData);
    if (this.guild.optInEnabled) {
      const tmp2 = self.channels[id.id];
      if (shouldShowInRecents(self.guild, id, initializationData)) {
        if (null == tmp2) {
          const self2 = this;
          self.channels[id.id] = new RecentsChannelListChannel(self, id, initializationData);
          self.invalidate();
          return true;
        }
      }
    }
    return updateChannelResult;
  }
  getFirstVoiceChannel() {
    return null;
  }
  getShownChannelIds() {
    const self = this;
    if (null == this.shownChannelIds) {
      const obj = _modDef12(self.channels);
      const values = obj.values();
      const found = values.filter((renderLevel) => renderLevel.renderLevel === closure_1_35.Show || renderLevel.renderLevel === tmp.WouldShowIfUncollapsed);
      const sortByResult = found.sortBy((record) => record.record.position);
      const iter = sortByResult.take(5);
      const _Set = Set;
      const items = [];
      const valueResult = iter.value();
      const iter2 = found.filter((renderLevel) => renderLevel.renderLevel === closure_1_35.Show);
      HermesBuiltin.arraySpread(items, valueResult, HermesBuiltin.arraySpread(items, iter2.value(), 0));
      const self2 = this;
      const self3 = this;
      const items1 = [];
      set = new Set(items);
      const tmp12 = _modDef12;
      HermesBuiltin.arraySpread(items1, set, 0);
      const tmp12Result = tmp12(items1);
      const sortByResult1 = tmp12Result.sortBy((record) => record.record.position);
      const iter3 = sortByResult1.map((id) => id.id);
      self.shownChannelIds = iter3.value();
    }
    return self.shownChannelIds;
  }
}
let closure_70 = ChannelListRecentsCategory.prototype;
class ChannelListVoiceChannelsCategory extends BaseChannelListCategory {
  constructor(merged, arg1, categoriesById, initializationData) {
    let closure_1;
    let closure_0 = initializationData;
    const tmp2 = new ChannelListVoiceChannelsCategory(merged, new.target, this, merged, categoriesById, undefined, tmp);
    importDefault = tmp2;
    tmp2.hiddenChannelIds = null;
    tmp2.categoriesById = categoriesById;
    if (merged.optInEnabled) {
      tmp2.isCollapsed = ChannelListVoiceCategoryStore.isVoiceCategoryCollapsed(merged.id);
      tmp2.isMuted = false;
      tmp2.categoriesById = categoriesById;
      const arr = _modDef12(arg1);
      const mapped = arr.map((item) => new VoiceChannelListChannel(closure_1, item, initializationData));
      const iter = mapped.keyBy(f94015);
      tmp2.channels = iter.value();
    }
    return tmp2;
  }
  invalidate() {
    super.invalidate();
    this.hiddenChannelIds = null;
  }
  getHiddenChannelIds() {
    const self = this;
    if (this.guild.optInEnabled) {
      if (null == self.hiddenChannelIds) {
        const arr = _modDef12(self.channels);
        const iter = arr.filter((renderLevel) => renderLevel.renderLevel === closure_1_35.WouldShowIfUncollapsed);
        const valueResult = iter.value();
        if (valueResult.every((record) => {
          record = record.record;
          return record.isCategory();
        })) {
          self.hiddenChannelIds = [];
          return self.hiddenChannelIds;
        } else {
          self.hiddenChannelIds = valueResult.map((id) => id.id);
        }
      }
      return self.hiddenChannelIds;
    } else {
      return [];
    }
  }
  getRows() {
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
  }
  getShownChannelIds() {
    let Show;
    const self = this;
    if (this.guild.optInEnabled) {
      const tmp = null;
      if (null == self.shownChannelIds) {
        const arr2 = _modDef12(self.channels);
        const found = arr2.filter((renderLevel) => renderLevel.renderLevel === Show.Show);
        const items = [
          (record) => {
                let num2;
                if (record.record.type === constants.GUILD_CATEGORY) {
                  num2 = record.record.position;
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
              }
        ];
        const iter = found.orderBy(items, ["asc", "asc"]);
        const valueResult = iter.value();
        self.shownChannelIds = [];
        let num = 0;
        let num2 = 1;
        if (0 < valueResult.length) {
          do {
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
            num = num + 1;
          } while (num < valueResult.length);
        }
      }
      return self.shownChannelIds;
    } else {
      return [];
    }
  }
  getFirstVoiceChannel() {
    return null;
  }
}
let closure_72 = ChannelListVoiceChannelsCategory.prototype;
class ChannelListChannelNoticeSection {
  constructor(rows) {
    const obj = Object.create(new.target.prototype);
    obj.rows = rows;
    return obj;
  }
  isEmpty() {
    return 0 === this.rows.length;
  }
  getRows() {
    return this.rows;
  }
  getRow(arg0) {
    return this.rows[arg0];
  }
}
const prototype3 = ChannelListChannelNoticeSection.prototype;
class ChannelListGuildActionSection {
  constructor(arr, arg1) {
    const obj = Object.create(new.target.prototype);
    obj.guildActionRows = arr.map(String);
    const tmp2 = arg1;
    if (tmp2) {
      const guildActionRows = obj.guildActionRows;
      const _String = String;
      arr = guildActionRows.push(String(ChannelListGuildActionRow.GUILD_DIRECTORY));
    }
    return obj;
  }
  isEmpty() {
    return 0 === this.guildActionRows.length;
  }
  getRows() {
    return this.guildActionRows;
  }
  getRow(arg0) {
    return this.guildActionRows[arg0];
  }
}
const prototype4 = ChannelListGuildActionSection.prototype;
class BaseChannelListChannel {
  constructor(category, record, arg2) {
    let renderLevel;
    let threadIds;
    const merged = Object.assign({ position: -1, threadIds: null, threadCount: 0, subtitle: null, renderLevel: null });
    merged[1] = [];
    merged[4] = closure_35.CannotShow;
    merged.category = category;
    merged.record = record;
    merged.id = record.id;
    const state = merged.computeState(arg2);
    ({ renderLevel, threadIds } = state);
    merged.renderLevel = renderLevel;
    const obj2 = _modDef12;
    merged.threadCount = obj2.size(threadIds);
    merged.threadIds = threadIds;
    if (renderLevel === closure_35.Show) {
      merged.subtitle = merged.computeSubtitle();
    }
    return merged;
  }
  updateChannel(record, arg1) {
    const self = this;
    let flag = false;
    const tmp = null != record && record !== self.record;
    if (tmp) {
      self.record = record;
      flag = true;
    }
    const state = self.computeState(arg1);
    let isEqualResult = state.renderLevel === self.renderLevel;
    if (isEqualResult) {
      const obj = _modDef12;
      isEqualResult = obj.isEqual(state.threadIds, self.threadIds);
    }
    if (!isEqualResult) {
      ({ renderLevel: self.renderLevel, threadIds: self.threadIds } = state);
      const obj2 = _modDef12;
      self.threadCount = obj2.size(state.threadIds);
      flag = true;
    }
    const tmp8 = self.renderLevel === closure_35.Show && self.updateSubtitle();
    if (tmp8) {
      flag = true;
    }
    return flag;
  }
  updateSubtitle() {
    const subtitle = this.computeSubtitle();
    const obj = _modDef12;
    let flag = !obj.isEqual(this.subtitle, subtitle);
    obj.isEqual(this.subtitle, subtitle);
    if (flag) {
      this.subtitle = subtitle;
      flag = true;
    }
    return flag;
  }
  computeSubtitle() {
    const self = this;
    let isCollapsed = this.isCollapsed;
    const record = this.record;
    if (!isCollapsed) {
      isCollapsed = self.category.isCollapsed;
    }
    return computeSubtitle(record, isCollapsed, self.category.guild.optInEnabled);
  }
}
const prototype5 = BaseChannelListChannel.prototype;
Object.defineProperty(prototype5, "isMuted", {
  get: function isMuted() {
    const mutedChannelIds = this.category.guild.mutedChannelIds;
    return mutedChannelIds.has(this.id);
  },
  set: undefined
});
Object.defineProperty(prototype5, "isCollapsed", {
  get: function isCollapsed() {
    return CollapsedVoiceChannelStore.isCollapsed(this.id);
  },
  set: undefined
});
Object.defineProperty(prototype5, "isFirstVoiceChannel", {
  get: function isFirstVoiceChannel() {
    const category = this.category;
    return category.getFirstVoiceChannel() === this;
  },
  set: undefined
});
Object.defineProperty(prototype5, "lastMessageTimestamp", {
  get: function lastMessageTimestamp() {
    let threadIds;
    const items = [ReadStateStore.lastMessageTimestamp(this.id), ...threadIds.map(ReadStateStore.lastMessageTimestamp)];
    threadIds = this.threadIds;
    return max.apply(items);
  },
  set: undefined
});
class ChannelListChannelImpl extends BaseChannelListChannel {
  computeState(arg0) {
    let activeJoinedRelevantThreads;
    let activeJoinedUnreadThreads;
    let selectedChannel;
    let selectedVoiceChannelId;
    const self = this;
    ({ selectedChannel, selectedVoiceChannelId } = arg0);
    ({ activeJoinedRelevantThreads, activeJoinedUnreadThreads } = arg0);
    if (!PermissionStore.can(Permissions.VIEW_CHANNEL, this.record)) {
      if (self.id === selectedVoiceChannelId) {
        return { renderLevel: closure_35.Show, threadIds: [] };
      } else if (!GatedChannelStore.isChannelGatedAndVisible(self.record.guild_id, self.record.id)) {
        return { renderLevel: closure_35.CannotShow, threadIds: [] };
      }
    }
    const parent_id = self.record.parent_id;
    const guild = self.category.guild;
    const favoriteChannelIds = guild.favoriteChannelIds;
    if (favoriteChannelIds.has(self.record.id)) {
      return { renderLevel: closure_35.CannotShow, threadIds: [] };
    } else {
      let id;
      if (selectedChannel != null) {
        id = selectedChannel.id;
      }
      const tmp7 = null != selectedChannel && selectedChannel.isThread() && selectedChannel.parent_id === self.id;
      if (!(id === self.id || selectedVoiceChannelId === self.id)) {
        let obj4;
        if (!tmp7) {
          obj4 = activeJoinedUnreadThreads[self.id];
        }
        if (obj4 == null) {
          obj4 = {};
        }
        const tmp12 = computeThreadIds(self.record, obj4, selectedChannel, selectedVoiceChannelId, guild.hideMutedChannels);
        if (self.id === guild.moderatorReportChannelId) {
          return { renderLevel: closure_35.DoNotShow, threadIds: tmp12 };
        } else {
          if (guild.optInEnabled) {
            if (guild.hideResourceChannels) {
              const record = self.record;
              if (record.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                return { renderLevel: id === self.id || selectedVoiceChannelId === self.id ? closure_35.Show : closure_35.CannotShow, threadIds: tmp12 };
              }
            }
          }
          if (guild.optInEnabled) {
            const optedInChannels = guild.optedInChannels;
            if (!optedInChannels.has(self.id)) {
              if (null != parent_id) {
                const optedInChannels2 = guild.optedInChannels;
              }
              return { renderLevel: closure_35.DoNotShow, threadIds: tmp12 };
            }
          }
          if (!(id === self.id || selectedVoiceChannelId === self.id)) {
            if (!tmp7) {
              const obj5 = _modDef12;
              if (obj5.isEmpty(tmp12)) {
                if (ReadStateStore.getMentionCount(self.id) <= 0) {
                  if (guild.hideMutedChannels) {
                    const mutedChannelIds = guild.mutedChannelIds;
                    if (mutedChannelIds.has(self.id)) {
                      return { renderLevel: closure_35.DoNotShow, threadIds: tmp12 };
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
                          if (closure_15(self.record.type)) {
                            if (!ReadStateStore.hasUnread(self.record.id)) {
                              return { renderLevel: closure_35.WouldShowIfUncollapsed, threadIds: tmp12 };
                            }
                          }
                        }
                      }
                      return { renderLevel: closure_35.WouldShowIfUncollapsed, threadIds: tmp12 };
                    }
                    return { renderLevel: closure_35.WouldShowIfUncollapsed, threadIds: tmp12 };
                  }
                  return { renderLevel: closure_35.Show, threadIds: tmp12 };
                }
              }
            }
          }
          return { renderLevel: closure_35.Show, threadIds: tmp12 };
        }
      }
      obj4 = activeJoinedRelevantThreads[self.id];
    }
  }
}
const prototype6 = ChannelListChannelImpl.prototype;
class FavoritesChannelListChannel extends BaseChannelListChannel {
  computeState(activeJoinedRelevantThreads) {
    let selectedChannel;
    let selectedVoiceChannelId;
    let tmp2;
    const self = this;
    ({ selectedChannel, selectedVoiceChannelId } = activeJoinedRelevantThreads);
    activeJoinedRelevantThreads = activeJoinedRelevantThreads.activeJoinedRelevantThreads;
    const obj = { renderLevel: null, threadIds: null };
    if (PermissionStore.can(Permissions.VIEW_CHANNEL, this.record)) {
      obj.renderLevel = closure_35.Show;
      const record = self.record;
      let obj2 = activeJoinedRelevantThreads[self.id];
      if (obj2 == null) {
        obj2 = {};
      }
      obj.threadIds = computeThreadIds(record, obj2, selectedChannel, selectedVoiceChannelId, false);
      tmp2 = obj;
    } else {
      obj.renderLevel = closure_35.CannotShow;
      obj.threadIds = [];
      tmp2 = obj;
    }
    return tmp2;
  }
}
const prototype7 = FavoritesChannelListChannel.prototype;
class RecentsChannelListChannel extends BaseChannelListChannel {
  computeState(activeJoinedRelevantThreads) {
    let obj;
    let selectedChannel;
    let selectedVoiceChannelId;
    const self = this;
    ({ selectedChannel, selectedVoiceChannelId } = activeJoinedRelevantThreads);
    activeJoinedRelevantThreads = activeJoinedRelevantThreads.activeJoinedRelevantThreads;
    if (PermissionStore.can(Permissions.VIEW_CHANNEL, this.record)) {
      let tmp4;
      const obj2 = { renderLevel: null, threadIds: null };
      if (shouldShowInRecents(self.category.guild, self.record, activeJoinedRelevantThreads)) {
        obj2.renderLevel = shouldAlwaysShowInRecents(self, activeJoinedRelevantThreads) ? closure_35.Show : closure_35.WouldShowIfUncollapsed;
        const record = self.record;
        let obj3 = activeJoinedRelevantThreads[self.id];
        if (obj3 == null) {
          obj3 = {};
        }
        obj2.threadIds = computeThreadIds(record, obj3, selectedChannel, selectedVoiceChannelId, false);
        tmp4 = obj2;
      } else {
        obj2.renderLevel = closure_35.DoNotShow;
        obj2.threadIds = [];
        tmp4 = obj2;
      }
      obj = tmp4;
    } else {
      obj = { renderLevel: closure_35.CannotShow, threadIds: [] };
    }
    return obj;
  }
}
const prototype8 = RecentsChannelListChannel.prototype;
class RecentlyActiveChannelListChannel extends ChannelListChannelImpl {
  computeState(initializationData) {
    let renderLevel;
    let threadIds;
    const self = this;
    const state = super.computeState(initializationData);
    ({ renderLevel, threadIds } = state);
    let threadIds1 = threadIds;
    let renderLevel2 = renderLevel;
    if (renderLevel > closure_35.CannotShow) {
      const parent_id = self.record.parent_id;
      const guild = self.category.guild;
      const mutedChannelIds2 = guild.mutedChannelIds;
      if (!mutedChannelIds2.has(self.id)) {
        if (null != parent_id) {
          const mutedChannelIds = guild.mutedChannelIds;
          const tmp9 = renderLevel === closure_35.WouldShowIfUncollapsed && shouldAlwaysShowInRecents(self, initializationData);
          if (tmp9) {
            renderLevel = closure_35.Show;
          }
          const obj = _modDef12;
          threadIds1 = obj.sortBy(threadIds, (arg0) => -ReadStateStore.lastMessageTimestamp(arg0));
          renderLevel2 = renderLevel;
        }
        let tmp6 = renderLevel === closure_35.Show;
        if (!tmp6) {
          tmp6 = renderLevel === closure_35.DoNotShow && shouldShowInRecents(self.category.guild, self.record, initializationData);
          const tmp7 = renderLevel === closure_35.DoNotShow && shouldShowInRecents(self.category.guild, self.record, initializationData);
        }
        if (tmp6) {
          renderLevel = closure_35.WouldShowIfUncollapsed;
        }
      }
      renderLevel = closure_35.DoNotShow;
    }
    return { renderLevel: renderLevel2, threadIds: threadIds1 };
  }
}
let closure_77 = RecentlyActiveChannelListChannel.prototype;
class VoiceChannelListChannel extends ChannelListChannelImpl {
  getRenderLevel(renderLevel) {
    let CannotShow;
    const self = this;
    const guild = this.category.guild;
    if (PermissionStore.can(Permissions.VIEW_CHANNEL, this.record)) {
      if (renderLevel !== closure_35.Show) {
        if (renderLevel !== closure_35.WouldShowIfUncollapsed) {
          let CannotShow2;
          const favoriteChannelIds = guild.favoriteChannelIds;
          if (!favoriteChannelIds.has(self.record.id)) {
            if (self.category.isCollapsed) {
              const obj = _modDef12;
              CannotShow2 = obj.some(VoiceStateStore.getVoiceStatesForChannel(self.record.id)) ? closure_35.Show : closure_35.WouldShowIfUncollapsed;
            } else {
              CannotShow2 = closure_35.Show;
            }
          }
          CannotShow = CannotShow2;
        }
      }
      CannotShow2 = closure_35.CannotShow;
    } else {
      CannotShow = closure_35.CannotShow;
    }
    return CannotShow;
  }
  computeState(arg0) {
    const self = this;
    const renderLevel = this.getRenderLevel(super.computeState(arg0).renderLevel);
    if (renderLevel === closure_35.Show) {
      let isCollapsed = self.isCollapsed;
      const record = self.record;
      if (!isCollapsed) {
        isCollapsed = self.category.isCollapsed;
      }
      self.subtitle = computeSubtitle(record, isCollapsed, self.category.guild.optInEnabled);
    }
    return { threadIds: [], renderLevel };
  }
}
let closure_79 = VoiceChannelListChannel.prototype;
const set1 = new Set(Object.values(ChannelListGuildActionRow));
let result = size.fileFinishedImporting("modules/guild_sidebar/ChannelListState.tsx");
class ChannelListStates {
  constructor() {
    const merged = Object.assign({ guilds: null });
    merged[0] = {};
    return merged;
  }
  _areGuildActionRowsUpdated(id, arr) {
    let found;
    const isEqual = _modDef12.isEqual;
    _modDef12;
    if (this.guilds[id] != null) {
      const guildActionSection = obj.getGuildActionSection();
      const rows = guildActionSection.getRows();
      found = rows.filter((item) => !set.has(item));
    }
    return !isEqual(found, arr);
  }
  _areChannelNoticeRowsUpdated(id, rows) {
    rows = undefined;
    const isEqual = _modDef12.isEqual;
    _modDef12;
    if (this.guilds[id] != null) {
      const channelNoticeSection = obj.getChannelNoticeSection();
      rows = channelNoticeSection.getRows();
    }
    return !isEqual(rows, rows);
  }
  _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(id) {
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
  }
  getGuild(id, arr, rows) {
    const self = this;
    const result = !(id in this.guilds) || self._areGuildActionRowsUpdated(id, arr) || self._areChannelNoticeRowsUpdated(id, rows) || self._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(id);
    if (result) {
      const self2 = this;
      self.guilds[id] = new ChannelListImpl(id, arr, rows);
    }
    return self.guilds[id];
  }
  getGuildChannelRowsOnly(id) {
    const self = this;
    if (!(id in this.guilds)) {
      const self2 = this;
      self.guilds[id] = new ChannelListImpl(id, [], []);
    }
    return self.guilds[id];
  }
  clear() {
    this.guilds = {};
  }
  clearGuildId(guildId) {
    const self = this;
    let flag = null != guildId;
    const tmp = guildId;
    if (flag) {
      flag = guildId in self.guilds;
    }
    if (flag) {
      delete self.guilds[tmp];
      flag = true;
    }
    return flag;
  }
  updateRecentsCategory(arg0) {
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
  }
  nonPositionalChannelIdUpdate(channelId) {
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    let tmp2 = null != basicChannel;
    if (tmp2) {
      let tmp3 = null != basicChannel.guild_id;
      if (tmp3) {
        const self = this;
        let tmp4 = null != this.guilds[basicChannel.guild_id];
        if (tmp4) {
          let result = basicChannel instanceof authStore2;
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
  }
  nonPositionalChannelUpdate(guild_id) {
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
        const tmp = this.guilds[guild_id.guild_id].nonPositionalChannelUpdate(guild_id) || flag;
        return tmp;
      }
    }
  }
  updateSubtitles(arg0, arg1) {
    let items1;
    const self = this;
    let closure_0 = arg1;
    if (null == arg0) {
      const _Object = Object;
      items1 = Object.values(self.guilds);
    } else if (arg0 in self.guilds) {
      const items = [self.guilds[arg0]];
      items1 = items;
    } else {
      items1 = [];
    }
    const item = items1.forEach((updateSubtitles) => updateSubtitles.updateSubtitles(closure_0));
  }
}

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