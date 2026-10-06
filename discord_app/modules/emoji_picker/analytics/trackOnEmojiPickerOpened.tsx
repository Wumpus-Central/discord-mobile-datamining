// === Module 9910: trackOnEmojiPickerOpened ===

// Module 9910 (trackOnEmojiPickerOpened)
import Constants from "Constants" /* 1085 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4533 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import useTopAndNewlyAddedEmojis from "useTopAndNewlyAddedEmojis" /* 9887 */;
import useEmojiHotrail from "useEmojiHotrail" /* 9888 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, animated;

function trackOnEmojiPickerOpened(current) {
  let EXPRESSION_PICKER_OPENED;
  let analyticsObject;
  let containerWidth;
  let guildEmoji;
  let intention;
  let isBurstReaction;
  let newlyAddedEmojis;
  let numFrequentlyItems;
  let obj2;
  let prop;
  let rowSize;
  let substr;
  let topEmojis;
  let visibleNewlyAddedEmojis;
  let visibleTopEmojis;
  ({ intention, analyticsObject } = current);
  ({ containerWidth, rowSize, isBurstReaction } = current);
  const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  if (intention === EmojiIntention.REACTION) {
    const frequently = EmojiStore.emojiReactionFrecencyWithoutFetchingLatest.frequently;
    substr = frequently.slice();
    obj2 = EmojiStore;
  } else {
    obj2 = EmojiStore;
    const frequently1 = EmojiStore.emojiFrecencyWithoutFetchingLatest.frequently;
    substr = frequently1.slice();
  }
  if (null != channel) {
    prop = obj2.getDisambiguatedEmojiContext(channel.getGuildId()).favoriteEmojisWithoutFetchingLatest;
  } else {
    prop = [];
  }
  if (intention === EmojiIntention.REACTION) {
    numFrequentlyItems = obj2.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems;
  } else {
    numFrequentlyItems = obj2.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems;
  }
  const substr1 = substr.slice(0, numFrequentlyItems);
  if (null != guildId) {
    guildEmoji = obj2.getGuildEmoji(guildId);
  } else {
    guildEmoji = [];
  }
  let guildId1;
  const getDisambiguatedEmojiContext = obj2.getDisambiguatedEmojiContext;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const disambiguatedEmojiContext = getDisambiguatedEmojiContext(guildId1);
  const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
  let guildId2;
  const getTopAndNewlyAddedEmojis = useTopAndNewlyAddedEmojis.getTopAndNewlyAddedEmojis;
  useTopAndNewlyAddedEmojis;
  if (channel != null) {
    guildId2 = channel.getGuildId();
  }
  const topAndNewlyAddedEmojis = getTopAndNewlyAddedEmojis({ guildId: guildId2, pickerIntention: intention });
  ({ topEmojis, newlyAddedEmojis } = topAndNewlyAddedEmojis);
  const tmp6Result = useEmojiHotrail;
  const emojiHotrail = tmp6Result.getEmojiHotrail({ topEmojis, newlyAddedEmojis, rowSize });
  ({ visibleTopEmojis, visibleNewlyAddedEmojis } = emojiHotrail);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  AppAnalyticsUtilsDefault;
  if (intention === EmojiIntention.REACTION) {
    EXPRESSION_PICKER_OPENED = AnalyticEvents.REACTION_PICKER_OPENED;
  } else {
    EXPRESSION_PICKER_OPENED = AnalyticEvents.EXPRESSION_PICKER_OPENED;
  }
  let tmp16 = intention === EmojiIntention.REACTION;
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
  if (tmp16) {
    tmp16 = { is_burst: isBurstReaction };
    const obj3 = { is_burst: isBurstReaction };
  }
  const merged = Object.assign(tmp16);
  let tmp18 = null != analyticsObject;
  if (tmp18) {
    tmp18 = { location_object: analyticsObject };
    const obj4 = { location_object: analyticsObject };
  }
  const merged1 = Object.assign(tmp18);
  trackWithMetadata(EXPRESSION_PICKER_OPENED, obj);
}
const AnalyticEvents = Constants.AnalyticEvents;
const EmojiIntention = EmojiConstants.EmojiIntention;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ref;
  let tmp2;
  let tmp3;
  const obj = require("react");
  const cResult = obj.c(2);
  _require = react.useRef(arg0);
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
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  const ref = react.useRef(arg0);
  const effect = react.useEffect(() => {
    if (ref.current.intention === EmojiIntention.REACTION) {
      trackOnEmojiPickerOpened(tmp.current);
    }
  }, []);
});
const result = size.fileFinishedImporting("modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx");

export default trackOnEmojiPickerOpened;
export const useTrackOnEmojiPickerOpenedForReactions = tmp2;