// discord_app/modules/channel_list_v2/native/ChannelListUtils.tsx
import { AnalyticEvents } from "ME";

const result = require("collectGuildAnalyticsMetadata").fileFinishedImporting("modules/channel_list_v2/native/ChannelListUtils.tsx");

export const isFavoritesSection = function isFavoritesSection(arg0, favoritesSectionNumber) {
  return arg0 === favoritesSectionNumber.favoritesSectionNumber;
};
export const isRecentsSection = function isRecentsSection(arg0, recentsSectionNumber) {
  return arg0 === recentsSectionNumber.recentsSectionNumber;
};
export const isVoiceChannelsSection = function isVoiceChannelsSection(section, guildChannels) {
  return section === guildChannels.voiceChannelsSectionNumber;
};
export const isNamedCategorySection = function isNamedCategorySection(section) {
  return section >= require("../../guild_sidebar/ChannelListState.tsx") /* computeSubtitle */.SECTION_INDEX_FIRST_NAMED_CATEGORY;
};
export const logChannelListEndReached = function logChannelListEndReached() {
  require("../../app_analytics/AppAnalyticsUtils.tsx").trackWithMetadata(AnalyticEvents.CHANNEL_LIST_END_REACHED);
};