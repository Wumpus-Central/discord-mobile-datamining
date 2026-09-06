// === Module 16183: channel_list_v2/ChannelListUtils ===

// Module 16183 (channel_list_v2/ChannelListUtils)
import Constants from "Constants" /* 1074 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import ChannelListState from "ChannelListState" /* 7528 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListUtils.tsx");

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
  return section >= ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY;
};
export const logChannelListEndReached = function logChannelListEndReached() {
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_END_REACHED);
};