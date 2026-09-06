// discord_app/modules/channel_text_area/native/ChannelAutocompleteAnalytics.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteAnalytics.tsx");

export const iOSTrackAutocompleteOpen = function iOSTrackAutocompleteOpen(autocompleteType, channel, arg2) {
  const obj = {};
  const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.guild_id));
  obj.autocomplete_type = autocompleteType;
  ({
    numEmojiResults: obj2.num_emoji_results,
    numStickerResults: obj2.num_sticker_results,
    gameMentionsAvailable: obj2.game_mentions_available,
  } = arg2);
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, obj);
};
export const iOSTrackAutocompleteSelect = function iOSTrackAutocompleteSelect(autocompleteType, channel, arg2) {
  const obj = {};
  const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.guild_id));
  obj.autocomplete_type = autocompleteType;
  ({
    selectionType: obj2.selection_type,
    stickerId: obj2.sticker_id,
    gameId: obj2.application_id,
    numEmojiResults: obj2.num_emoji_results,
    numStickerResults: obj2.num_sticker_results,
    expressionName: obj2.emoji_name,
    isCustom: obj2.is_custom,
    isAnimated: obj2.is_animated,
  } = arg2);
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, obj);
};
