import { AnalyticEvents } from "ME";

const result = require("collectGuildAnalyticsMetadata").fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteAnalytics.tsx");

export const iOSTrackAutocompleteOpen = function iOSTrackAutocompleteOpen(autocomplete_type, guild_id, arg2) {
  let obj = importDefault(698);
  obj = {};
  const merged = Object.assign(require(4450) /* collectGuildAnalyticsMetadata */.collectChannelAnalyticsMetadata(guild_id));
  const obj3 = require(4450) /* collectGuildAnalyticsMetadata */;
  const merged1 = Object.assign(require(4450) /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(guild_id.guild_id));
  obj.autocomplete_type = autocomplete_type;
  ({ numEmojiResults: obj2.num_emoji_results, numStickerResults: obj2.num_sticker_results, gameMentionsAvailable: obj2.game_mentions_available } = arg2);
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, obj);
};
export const iOSTrackAutocompleteSelect = function iOSTrackAutocompleteSelect(autocomplete_type, guild_id, arg2) {
  let obj = importDefault(698);
  obj = {};
  const merged = Object.assign(require(4450) /* collectGuildAnalyticsMetadata */.collectChannelAnalyticsMetadata(guild_id));
  const obj3 = require(4450) /* collectGuildAnalyticsMetadata */;
  const merged1 = Object.assign(require(4450) /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(guild_id.guild_id));
  obj.autocomplete_type = autocomplete_type;
  ({ selectionType: obj2.selection_type, stickerId: obj2.sticker_id, gameId: obj2.application_id, numEmojiResults: obj2.num_emoji_results, numStickerResults: obj2.num_sticker_results, expressionName: obj2.emoji_name, isCustom: obj2.is_custom, isAnimated: obj2.is_animated } = arg2);
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, obj);
};