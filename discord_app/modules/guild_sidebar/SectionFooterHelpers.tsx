// === Module 16209: SectionFooterHelpers ===

// Module 16209 (SectionFooterHelpers)
import Constants from "Constants" /* 1085 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import ChannelListState from "ChannelListState" /* 7052 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 7058 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 6619 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import size from "module_2" /* 2 */;

const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_sidebar/SectionFooterHelpers.tsx");

export const getSectionFooterConfig = function getSectionFooterConfig(guildChannels, optInChannelsEnabled, section) {
  let tmp3;
  if (section === ChannelListState.SECTION_INDEX_GUILD_ACTIONS) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const rows = guildActionSection.getRows();
    let isEmptyResult = 1 === rows.length && rows[0] === ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR;
    if (!isEmptyResult) {
      const guildActionSection1 = guildChannels.getGuildActionSection();
      isEmptyResult = guildActionSection1.isEmpty();
    }
    tmp3 = isEmptyResult;
  } else {
    tmp3 = 0 === guildChannels.getSections(false)[section];
  }
  let tmp6 = !tmp3;
  if (tmp6) {
    let tmp7 = section === ChannelListState.SECTION_INDEX_GUILD_ACTIONS;
    if (!tmp7) {
      let tmp8;
      const tmpResult = FavoritesUtils;
      if (tmpResult.isFavoritesGuildId(guildChannels.id)) {
        tmp8 = section !== guildChannels.getSections(false).length - 1;
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
      tmp7 = tmp8;
    }
    tmp6 = tmp7;
  }
  const obj = { hasDivider: tmp6, canHaveVoiceSummary: !(section === ChannelListState.SECTION_INDEX_GUILD_ACTIONS || section === ChannelListState.SECTION_INDEX_FAVORITES || section === ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS || section === guildChannels.recentsSectionNumber || section === guildChannels.voiceChannelsSectionNumber) };
  section === ChannelListState.SECTION_INDEX_GUILD_ACTIONS || section === ChannelListState.SECTION_INDEX_FAVORITES || section === ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS || section === guildChannels.recentsSectionNumber || section === guildChannels.voiceChannelsSectionNumber;
  return obj;
};
export const getSectionFooterActiveVoiceChannels = function getSectionFooterActiveVoiceChannels(arg0) {
  let category;
  let items;
  ({ category, voiceStates: require, selectedChannelId: dependencyMap, selectedVoiceChannelId: CategoryCollapseStore } = arg0);
  if (true !== CategoryCollapseStore.isCollapsed(category.record.id)) {
    items = [];
  } else {
    const channelRecords = category.getChannelRecords();
    items = channelRecords.filter((id) => {
      if (PermissionStore.can(Permissions.VIEW_CHANNEL, id)) {
        let items = require[id.id];
        if (items == null) {
          items = [];
        }
        return id.id !== CategoryCollapseStore && id.id !== dependencyMap && items.length > 0;
      } else {
        return false;
      }
    });
  }
  return items;
};
export const isSectionFooterWithActiveVoiceChannels = function isSectionFooterWithActiveVoiceChannels(arg0) {
  let category;
  let items;
  ({ category, voiceStates: require, selectedChannelId: dependencyMap, selectedVoiceChannelId: CategoryCollapseStore } = arg0);
  if (true !== CategoryCollapseStore.isCollapsed(category.record.id)) {
    items = [];
  } else {
    const channelRecords = category.getChannelRecords();
    items = channelRecords.filter((id) => {
      if (PermissionStore.can(Permissions.VIEW_CHANNEL, id)) {
        let items = require[id.id];
        if (items == null) {
          items = [];
        }
        return id.id !== CategoryCollapseStore && id.id !== dependencyMap && items.length > 0;
      } else {
        return false;
      }
    });
  }
  return items.length > 0;
};