// === Module 15444: isFavoritesSection ===

// Module 15444 (isFavoritesSection)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 5042 */;
import computeSubtitle from "computeSubtitle" /* 5272 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/channel_list_v2/native/ChannelListUtils.tsx");

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
  return section >= computeSubtitle.SECTION_INDEX_FIRST_NAMED_CATEGORY;
};
export const logChannelListEndReached = function logChannelListEndReached() {
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_END_REACHED);
};