// === Module 12392: ChannelAutocompleteAnalytics ===

// Module 12392 (ChannelAutocompleteAnalytics)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteAnalytics.tsx");

export const iOSTrackAutocompleteOpen = function iOSTrackAutocompleteOpen(autocompleteType, channel, arg2) {
  const obj = {};
  const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.guild_id));
  obj.autocomplete_type = autocompleteType;
  ({ numEmojiResults: obj2.num_emoji_results, numStickerResults: obj2.num_sticker_results, gameMentionsAvailable: obj2.game_mentions_available } = arg2);
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, obj);
};
export const iOSTrackAutocompleteSelect = function iOSTrackAutocompleteSelect(autocompleteType, channel, arg2) {
  const obj = {};
  const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.guild_id));
  obj.autocomplete_type = autocompleteType;
  ({ selectionType: obj2.selection_type, stickerId: obj2.sticker_id, gameId: obj2.application_id, numEmojiResults: obj2.num_emoji_results, numStickerResults: obj2.num_sticker_results, expressionName: obj2.emoji_name, isCustom: obj2.is_custom, isAnimated: obj2.is_animated } = arg2);
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, obj);
};