// === Module 16240: SectionFooterHelpers ===

// Module 16240 (SectionFooterHelpers)
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import ChannelListState from "ChannelListState" /* 7528 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7117 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
const ChannelListGuildActionRow = fn(7534).ChannelListGuildActionRow;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/SectionFooterHelpers.tsx");

export const getSectionFooterConfig = function getSectionFooterConfig(guildChannels, optInChannelsEnabled, section) {
  if (section === ChannelListState.SECTION_INDEX_GUILD_ACTIONS) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const rows = guildActionSection.getRows();
    let isEmptyResult = 1 === rows.length;
    if (isEmptyResult) {
      isEmptyResult = rows[0] === ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR;
    }
    if (!isEmptyResult) {
      const guildActionSection1 = guildChannels.getGuildActionSection();
      isEmptyResult = guildActionSection1.isEmpty();
    }
    let tmp3 = isEmptyResult;
  } else {
    tmp3 = 0 === guildChannels.getSections(false)[section];
  }
  let tmp6 = !tmp3;
  if (!tmp3) {
    const tmp7 = section === ChannelListState.SECTION_INDEX_GUILD_ACTIONS;
    if (tmp7) {
      tmp6 = tmp7;
    } else {
      if (tmpResult.isFavoritesGuildId(guildChannels.id)) {
        let tmp8 = section !== guildChannels.getSections(false).length - 1;
      } else {
        tmp8 = section === ChannelListState.SECTION_INDEX_FAVORITES;
        if (!tmp8) {
          let tmp10 = optInChannelsEnabled;
          if (tmp10) {
            let tmp11 = section !== ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            if (tmp11) {
              let flag2 = section === guildChannels.recentsSectionNumber;
              if (!flag2) {
                const voiceChannelsSectionNumber = guildChannels.voiceChannelsSectionNumber;
                flag2 = false;
              }
              tmp11 = flag2;
            }
            tmp10 = tmp11;
          }
          tmp8 = tmp10;
        }
      }
      tmpResult = FavoritesUtils;
    }
  }
  const obj = { hasDivider: tmp6, canHaveVoiceSummary: !(section === ChannelListState.SECTION_INDEX_GUILD_ACTIONS || section === ChannelListState.SECTION_INDEX_FAVORITES || section === ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS || section === guildChannels.recentsSectionNumber || section === guildChannels.voiceChannelsSectionNumber) };
  return obj;
};
export const getSectionFooterActiveVoiceChannels = function getSectionFooterActiveVoiceChannels(arg0) {
  ({ category, voiceStates: require, selectedChannelId: dependencyMap, selectedVoiceChannelId: CategoryCollapseStore } = arg0);
  if (true !== CategoryCollapseStore.isCollapsed(category.record.id)) {
    let items = [];
  } else {
    const channelRecords = category.getChannelRecords();
    items = channelRecords.filter((id) => {
      if (PermissionStore.can(Permissions.VIEW_CHANNEL, id)) {
        let items = require[id.id];
        if (items == null) {
          items = [];
        }
        let tmp4 = id.id !== CategoryCollapseStore;
        if (tmp4) {
          tmp4 = id.id !== dependencyMap;
        }
        if (tmp4) {
          tmp4 = items.length > 0;
        }
        return tmp4;
      } else {
        return false;
      }
    });
  }
  return items;
};
export const isSectionFooterWithActiveVoiceChannels = function isSectionFooterWithActiveVoiceChannels(arg0) {
  ({ category, voiceStates: require, selectedChannelId: dependencyMap, selectedVoiceChannelId: CategoryCollapseStore } = arg0);
  if (true !== CategoryCollapseStore.isCollapsed(category.record.id)) {
    let items = [];
  } else {
    const channelRecords = category.getChannelRecords();
    items = channelRecords.filter((id) => {
      if (PermissionStore.can(Permissions.VIEW_CHANNEL, id)) {
        let items = require[id.id];
        if (items == null) {
          items = [];
        }
        let tmp4 = id.id !== CategoryCollapseStore;
        if (tmp4) {
          tmp4 = id.id !== dependencyMap;
        }
        if (tmp4) {
          tmp4 = items.length > 0;
        }
        return tmp4;
      } else {
        return false;
      }
    });
  }
  return items.length > 0;
};