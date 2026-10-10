// === Module 9458: trackOnEmojiPickerOpened ===

// Module 9458 (trackOnEmojiPickerOpened)
import EmojiUtilsDefault from "EmojiUtils" /* 4768 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5107 */;
import useTopAndNewlyAddedEmojis from "useTopAndNewlyAddedEmojis" /* 9434 */;
import useEmojiHotrail from "useEmojiHotrail" /* 9435 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5987 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;

const require = globalThis.__r;

require = fn;
function trackOnEmojiPickerOpened(current) {
  ({ intention, analyticsObject } = current);
  ({ containerWidth, rowSize, isBurstReaction } = current);
  const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  if (intention === EmojiIntention.REACTION) {
    const frequently = EmojiStore.emojiReactionFrecencyWithoutFetchingLatest.frequently;
    let substr = frequently.slice();
    let obj2 = EmojiStore;
  } else {
    obj2 = EmojiStore;
    const frequently1 = EmojiStore.emojiFrecencyWithoutFetchingLatest.frequently;
    substr = frequently1.slice();
  }
  if (null != channel) {
    let prop = obj2.getDisambiguatedEmojiContext(channel.getGuildId()).favoriteEmojisWithoutFetchingLatest;
  } else {
    prop = [];
  }
  if (intention === EmojiIntention.REACTION) {
    let numFrequentlyItems = obj2.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems;
  } else {
    numFrequentlyItems = obj2.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems;
  }
  const substr1 = substr.slice(0, numFrequentlyItems);
  if (null != guildId) {
    let guildEmoji = obj2.getGuildEmoji(guildId);
  } else {
    guildEmoji = [];
  }
  let guildId1;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const disambiguatedEmojiContext = obj2.getDisambiguatedEmojiContext(guildId1);
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
  const obj6 = AppAnalyticsUtilsDefault;
  let tmp14 = intention === EmojiIntention.REACTION;
  if (tmp14) {
    const obj3 = { is_burst: isBurstReaction };
    tmp14 = obj3;
  }
  const merged = Object.assign(tmp14);
  let tmp16 = null != analyticsObject;
  if (tmp16) {
    const obj5 = { location_object: analyticsObject };
    tmp16 = obj5;
  }
  const merged1 = Object.assign(tmp16);
  obj6.trackWithMetadata(EXPRESSION_PICKER_OPENED, {
    width: containerWidth,
    tab: ExpressionPickerViewType.EMOJI,
    badged: false,
    num_expressions_favorites: prop.length,
    num_animated_expressions_favorites: prop.filter((animated) => {
      animated = undefined;
      if (animated != null) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_favorites: prop.filter(EmojiUtilsDefault.isCustomEmoji).length,
    num_standard_expressions_favorites: prop.filter((id) => null == id.id).length,
    num_expressions_frecent: substr1.length,
    num_animated_expressions_frecent: substr1.filter((animated) => {
      animated = undefined;
      if (animated != null) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_frecent: substr1.filter(EmojiUtilsDefault.isCustomEmoji).length,
    num_standard_expressions_frecent: substr1.filter((id) => null == id.id).length,
    num_current_guild_expressions: guildEmoji.length,
    num_custom_expressions_total: customEmoji.size,
    num_expressions_top_server: visibleTopEmojis.length,
    num_animated_expressions_top_server: visibleTopEmojis.filter((animated) => animated.animated).length,
    num_expressions_newly_added: visibleNewlyAddedEmojis.length,
    num_animated_expressions_newly_added: visibleNewlyAddedEmojis.filter((animated) => animated.animated).length
  });
  const obj = {
    width: containerWidth,
    tab: ExpressionPickerViewType.EMOJI,
    badged: false,
    num_expressions_favorites: prop.length,
    num_animated_expressions_favorites: prop.filter((animated) => {
      animated = undefined;
      if (animated != null) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_favorites: prop.filter(EmojiUtilsDefault.isCustomEmoji).length,
    num_standard_expressions_favorites: prop.filter((id) => null == id.id).length,
    num_expressions_frecent: substr1.length,
    num_animated_expressions_frecent: substr1.filter((animated) => {
      animated = undefined;
      if (animated != null) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_frecent: substr1.filter(EmojiUtilsDefault.isCustomEmoji).length,
    num_standard_expressions_frecent: substr1.filter((id) => null == id.id).length,
    num_current_guild_expressions: guildEmoji.length,
    num_custom_expressions_total: customEmoji.size,
    num_expressions_top_server: visibleTopEmojis.length,
    num_animated_expressions_top_server: visibleTopEmojis.filter((animated) => animated.animated).length,
    num_expressions_newly_added: visibleNewlyAddedEmojis.length,
    num_animated_expressions_newly_added: visibleNewlyAddedEmojis.filter((animated) => animated.animated).length
  };
}
const AnalyticEvents = fn(1085).AnalyticEvents;
const EmojiIntention = fn(1393).EmojiIntention;
const ExpressionPickerViewType = fn(1241).ExpressionPickerViewType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx");

export default trackOnEmojiPickerOpened;
export const useTrackOnEmojiPickerOpenedForReactions = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackOnEmojiPickerOpenedForReactions(arg0) {
  const cResult = require("c").c(2);
  _require = noop.useRef(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      if (ref.current.intention === EmojiIntention.REACTION) {
        trackOnEmojiPickerOpened(tmp.current);
      }
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
  const obj = require("c");
}) : (function useTrackOnEmojiPickerOpenedForReactions(arg0) {
  noop.useRef(arg0);
  const effect = noop.useEffect(() => {
    if (ref.current.intention === EmojiIntention.REACTION) {
      trackOnEmojiPickerOpened(tmp.current);
    }
  }, []);
});