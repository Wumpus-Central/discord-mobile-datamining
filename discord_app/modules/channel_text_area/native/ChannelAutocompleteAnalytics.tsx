// discord_app/modules/channel_text_area/native/ChannelAutocompleteAnalytics.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteAnalytics.tsx");

export const iOSTrackAutocompleteOpen = function iOSTrackAutocompleteOpen(autocompleteType, channel, arg2) {
  const obj = { autocomplete_type: autocompleteType };
  const track = AnalyticsUtilsDefault.track;
  const CHANNEL_AUTOCOMPLETE_OPEN = AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN;
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectChannelAnalyticsMetadata(channel));
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectGuildAnalyticsMetadata(channel.guild_id));
  ({
    numEmojiResults: obj.num_emoji_results,
    numStickerResults: obj.num_sticker_results,
    gameMentionsAvailable: obj.game_mentions_available,
  } = arg2);
  track(CHANNEL_AUTOCOMPLETE_OPEN, obj);
};
export const iOSTrackAutocompleteSelect = function iOSTrackAutocompleteSelect(autocompleteType, channel, arg2) {
  const obj = { autocomplete_type: autocompleteType };
  const track = AnalyticsUtilsDefault.track;
  const CHANNEL_AUTOCOMPLETE_SELECTED = AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED;
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectChannelAnalyticsMetadata(channel));
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectGuildAnalyticsMetadata(channel.guild_id));
  ({
    selectionType: obj.selection_type,
    stickerId: obj.sticker_id,
    gameId: obj.application_id,
    numEmojiResults: obj.num_emoji_results,
    numStickerResults: obj.num_sticker_results,
    expressionName: obj.emoji_name,
    isCustom: obj.is_custom,
    isAnimated: obj.is_animated,
  } = arg2);
  track(CHANNEL_AUTOCOMPLETE_SELECTED, obj);
};
