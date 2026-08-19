// === Module 9344: trackOnEmojiPickerOpened ===

// Module 9344 (trackOnEmojiPickerOpened)
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4038 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 5042 */;
import useTopAndNewlyAddedEmojis from "useTopAndNewlyAddedEmojis" /* 9306 */;
import useEmojiHotrail from "useEmojiHotrail" /* 9307 */;
import noop from "noop" /* 19 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { EmojiIntention } from "set" /* 1925 */;
import { ExpressionPickerViewType } from "ExpressionPickerViewType" /* 1338 */;

require = fn;
function trackOnEmojiPickerOpened(current) {
  ({ intention, analyticsObject } = current);
  ({ containerWidth, rowSize, isBurstReaction } = current);
  channel = channel.getChannel(channelId.getChannelId());
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  if (intention === EmojiIntention.REACTION) {
    const frequently = closure_4.emojiReactionFrecencyWithoutFetchingLatest.frequently;
    let substr = frequently.slice();
    obj1 = closure_4;
  } else {
    obj1 = closure_4;
    const frequently1 = closure_4.emojiFrecencyWithoutFetchingLatest.frequently;
    substr = frequently1.slice();
  }
  if (null != channel) {
    let prop = obj1.getDisambiguatedEmojiContext(channel.getGuildId()).favoriteEmojisWithoutFetchingLatest;
  } else {
    prop = [];
  }
  if (intention === EmojiIntention.REACTION) {
    let numFrequentlyItems = obj1.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems;
  } else {
    numFrequentlyItems = obj1.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems;
  }
  const substr1 = substr.slice(0, numFrequentlyItems);
  if (null != guildId) {
    let guildEmoji = obj1.getGuildEmoji(guildId);
  } else {
    guildEmoji = [];
  }
  let guildId1;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const disambiguatedEmojiContext = obj1.getDisambiguatedEmojiContext(guildId1);
  const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
  let guildId2;
  if (channel != null) {
    guildId2 = channel.getGuildId();
  }
  const topAndNewlyAddedEmojis = useTopAndNewlyAddedEmojis.getTopAndNewlyAddedEmojis({ guildId: guildId2, pickerIntention: intention });
  ({ topEmojis, newlyAddedEmojis } = topAndNewlyAddedEmojis);
  const emojiHotrail = useEmojiHotrail.getEmojiHotrail({ topEmojis, newlyAddedEmojis, rowSize });
  ({ visibleTopEmojis, visibleNewlyAddedEmojis } = emojiHotrail);
  const tmp6Result = useEmojiHotrail;
  if (intention === EmojiIntention.REACTION) {
    let EXPRESSION_PICKER_OPENED = AnalyticEvents.REACTION_PICKER_OPENED;
  } else {
    EXPRESSION_PICKER_OPENED = AnalyticEvents.EXPRESSION_PICKER_OPENED;
  }
  let obj = {
    width: containerWidth,
    tab: ExpressionPickerViewType.EMOJI,
    badged: false,
    num_expressions_favorites: prop.length,
    num_animated_expressions_favorites: prop.filter((item, index) => {
      let animated;
      if (item != null) {
        animated = item.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_favorites: prop.filter(getEmojiUnavailableReasonDefault.isCustomEmoji).length,
    num_standard_expressions_favorites: prop.filter((item, index) => null == item.id).length,
    num_expressions_frecent: substr1.length,
    num_animated_expressions_frecent: substr1.filter((item, index) => {
      let animated;
      if (item != null) {
        animated = item.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_frecent: substr1.filter(getEmojiUnavailableReasonDefault.isCustomEmoji).length,
    num_standard_expressions_frecent: substr1.filter((item, index) => null == item.id).length,
    num_current_guild_expressions: guildEmoji.length,
    num_custom_expressions_total: customEmoji.size,
    num_expressions_top_server: visibleTopEmojis.length,
    num_animated_expressions_top_server: visibleTopEmojis.filter((item, index) => item.animated).length,
    num_expressions_newly_added: visibleNewlyAddedEmojis.length,
    num_animated_expressions_newly_added: visibleNewlyAddedEmojis.filter((item, index) => item.animated).length
  };
  let tmp14 = intention === EmojiIntention.REACTION;
  if (tmp14) {
    obj = { is_burst: null };
    obj[0] = isBurstReaction;
    tmp14 = obj;
  }
  const merged = Object.assign(tmp14);
  let tmp16 = null != analyticsObject;
  if (tmp16) {
    obj1 = { location_object: null };
    obj1[0] = analyticsObject;
    tmp16 = obj1;
  }
  const merged1 = Object.assign(tmp16);
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(EXPRESSION_PICKER_OPENED, obj);
}
const result = require("obj132").fileFinishedImporting("modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx");

export default trackOnEmojiPickerOpened;
export const useTrackOnEmojiPickerOpenedForReactions = function useTrackOnEmojiPickerOpenedForReactions(stateFromStores) {
  closure_0 = React.useRef(stateFromStores);
  const effect = React.useEffect(() => {
    if (ref.current.intention === EmojiIntention.REACTION) {
      trackOnEmojiPickerOpened(tmp.current);
    }
  }, []);
};