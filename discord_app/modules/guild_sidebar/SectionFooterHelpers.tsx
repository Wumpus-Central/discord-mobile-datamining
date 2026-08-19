// === Module 15501: getSectionFooterConfig ===

// Module 15501 (getSectionFooterConfig)
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1913 */;
import computeSubtitle from "computeSubtitle" /* 5272 */;
import incrementVersion from "incrementVersion" /* 5270 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow" /* 5281 */;
import { Permissions } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_sidebar/SectionFooterHelpers.tsx");

export const getSectionFooterConfig = function getSectionFooterConfig(guildChannels, optInChannelsEnabled, section) {
  if (section === computeSubtitle.SECTION_INDEX_GUILD_ACTIONS) {
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
    const tmp7 = section === computeSubtitle.SECTION_INDEX_GUILD_ACTIONS;
    if (tmp7) {
      tmp6 = tmp7;
    } else {
      if (tmpResult.isFavoritesGuildId(guildChannels.id)) {
        let tmp8 = section !== guildChannels.getSections(false).length - 1;
      } else {
        tmp8 = section === computeSubtitle.SECTION_INDEX_FAVORITES;
        if (!tmp8) {
          let tmp10 = optInChannelsEnabled;
          if (tmp10) {
            let tmp11 = section !== computeSubtitle.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
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
      tmpResult = getFavoritesAwareGuildName;
    }
  }
  const obj = { hasDivider: tmp6, canHaveVoiceSummary: !(section === computeSubtitle.SECTION_INDEX_GUILD_ACTIONS || section === computeSubtitle.SECTION_INDEX_FAVORITES || section === computeSubtitle.SECTION_INDEX_UNCATEGORIZED_CHANNELS || section === guildChannels.recentsSectionNumber || section === guildChannels.voiceChannelsSectionNumber) };
  return obj;
};
export const getSectionFooterActiveVoiceChannels = function getSectionFooterActiveVoiceChannels(arg0) {
  ({ category, voiceStates: require, selectedChannelId: dependencyMap, selectedVoiceChannelId: closure_2 } = arg0);
  if (true !== closure_2.isCollapsed(category.record.id)) {
    let items = [];
  } else {
    const channelRecords = category.getChannelRecords();
    items = channelRecords.filter((item, index) => {
      if (closure_1_3.can(Permissions.VIEW_CHANNEL, item)) {
        let items = table[item.id];
        if (items == null) {
          items = [];
        }
        let tmp4 = item.id !== closure_2;
        if (tmp4) {
          tmp4 = item.id !== closure_1;
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
  ({ category, voiceStates: require, selectedChannelId: dependencyMap, selectedVoiceChannelId: closure_2 } = arg0);
  if (true !== closure_2.isCollapsed(category.record.id)) {
    let items = [];
  } else {
    const channelRecords = category.getChannelRecords();
    items = channelRecords.filter((item, index) => {
      if (closure_1_3.can(Permissions.VIEW_CHANNEL, item)) {
        let items = table[item.id];
        if (items == null) {
          items = [];
        }
        let tmp4 = item.id !== closure_2;
        if (tmp4) {
          tmp4 = item.id !== closure_1;
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