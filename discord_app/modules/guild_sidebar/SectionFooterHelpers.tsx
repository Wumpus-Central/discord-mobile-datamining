// discord_app/modules/guild_sidebar/SectionFooterHelpers.tsx
import computeSubtitle from "ChannelListState.tsx";
import closure_2 from "../../stores/CategoryCollapseStore.tsx";
import closure_3 from "../../stores/PermissionStore.tsx";
import { ChannelListGuildActionRow } from "GuildSidebarConstants.tsx";
import { Permissions } from "../../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_sidebar/SectionFooterHelpers.tsx");

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
    const tmp7 = section === tmp(7241).SECTION_INDEX_GUILD_ACTIONS;
    if (tmp7) {
      tmp6 = tmp7;
    } else {
      if (tmpResult.isFavoritesGuildId(guildChannels.id)) {
        let tmp8 = section !== guildChannels.getSections(false).length - 1;
      } else {
        tmp8 = section === tmp(7241).SECTION_INDEX_FAVORITES;
        if (!tmp8) {
          let tmp10 = optInChannelsEnabled;
          if (tmp10) {
            let tmp11 = section !== tmp(7241).SECTION_INDEX_UNCATEGORIZED_CHANNELS;
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
      tmpResult = tmp(1912);
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
    items = channelRecords.filter((id) => {
      if (closure_1_3.can(closure_1_5.VIEW_CHANNEL, id)) {
        let items = table[id.id];
        if (items == null) {
          items = [];
        }
        let tmp4 = id.id !== closure_2;
        if (tmp4) {
          tmp4 = id.id !== closure_1;
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
    items = channelRecords.filter((id) => {
      if (closure_1_3.can(closure_1_5.VIEW_CHANNEL, id)) {
        let items = table[id.id];
        if (items == null) {
          items = [];
        }
        let tmp4 = id.id !== closure_2;
        if (tmp4) {
          tmp4 = id.id !== closure_1;
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