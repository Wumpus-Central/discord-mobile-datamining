// discord_app/modules/channel_list_v2/native/ChannelListUtils.tsx
import { AnalyticEvents } from "ME";
import { collectGuildAnalyticsMetadata } from "../../app_analytics/AppAnalyticsUtils.tsx";
import { computeSubtitle } from "../../guild_sidebar/ChannelListState.tsx";

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
  return section >= computeSubtitle /* computeSubtitle */.SECTION_INDEX_FIRST_NAMED_CATEGORY;
};
export const logChannelListEndReached = function logChannelListEndReached() {
  collectGuildAnalyticsMetadata.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_END_REACHED);
};