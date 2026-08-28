// discord_app/modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx
import collectGuildAnalyticsMetadataDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import useTopAndNewlyAddedEmojis from "../hooks/useTopAndNewlyAddedEmojis.tsx";
import useEmojiHotrail from "../hooks/useEmojiHotrail.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../emojis/EmojiStore.tsx";
import closure_5 from "../../../stores/ChannelStore.tsx";
import closure_6 from "../../../stores/SelectedChannelStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { EmojiIntention } from "../../emojis/EmojiConstants.tsx";
import { ExpressionPickerViewType } from "../../expression_picker/ExpressionPickerConstants.tsx";

require = arg1;
function trackOnEmojiPickerOpened(arg0) {
  ({ intention, analyticsObject } = arg0);
  ({ containerWidth, rowSize, isBurstReaction } = arg0);
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
  const obj4 = useTopAndNewlyAddedEmojis;
  const tmp6 = require;
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
    num_animated_expressions_favorites: prop.filter((animated) => {
      animated = undefined;
      if (animated != null) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_favorites: prop.filter(tmp11(4107).isCustomEmoji).length,
    num_standard_expressions_favorites: prop.filter((id) => null == id.id).length,
    num_expressions_frecent: substr1.length,
    num_animated_expressions_frecent: substr1.filter((animated) => {
      animated = undefined;
      if (animated != null) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_frecent: substr1.filter(tmp11(4107).isCustomEmoji).length,
    num_standard_expressions_frecent: substr1.filter((id) => null == id.id).length,
    num_current_guild_expressions: guildEmoji.length,
    num_custom_expressions_total: customEmoji.size,
    num_expressions_top_server: visibleTopEmojis.length,
    num_animated_expressions_top_server: visibleTopEmojis.filter((animated) => animated.animated).length,
    num_expressions_newly_added: visibleNewlyAddedEmojis.length,
    num_animated_expressions_newly_added: visibleNewlyAddedEmojis.filter((animated) => animated.animated).length
  };
  let tmp14 = intention === tmp2.REACTION;
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
const result = require("set").fileFinishedImporting("modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx");

export default trackOnEmojiPickerOpened;
export const useTrackOnEmojiPickerOpenedForReactions = function useTrackOnEmojiPickerOpenedForReactions(stateFromStores) {
  closure_0 = React.useRef(stateFromStores);
  const effect = React.useEffect(() => {
    if (ref.current.intention === closure_1_8.REACTION) {
      closure_1_10(tmp.current);
    }
  }, []);
};