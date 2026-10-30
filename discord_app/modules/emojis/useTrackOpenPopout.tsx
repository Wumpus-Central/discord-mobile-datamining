// === Module 10033: useTrackOpenPopout ===

// Module 10033 (useTrackOpenPopout)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import useMountEffectDefault from "useMountEffect" /* 5588 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5755 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9919 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;

require = fn;
const EmojiInteractionPoint = fn(1387).EmojiInteractionPoint;
const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export (emojiId) => {
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = emojiId);
  let current;
  let merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(SelectedChannelStore.getChannelId(currentGuildId))));
  current = current.useRef({ guild_id: currentGuildId, emoji_id: emojiId.emojiId }).current;
  useMountEffectDefault(() => {
    const result = emojis_EmojiActionCreators.initiateEmojiInteraction(EmojiInteractionPoint.TrackOpenPopoutUsed);
    if (!dependencyMap) {
      let str;
      if (analyticsType != null) {
        str = analyticsType.analyticsType;
      }
      if (str == null) {
        str = "Standard Emoji Popout";
      }
      const obj3 = { type: str, nonce };
      const merged = Object.assign(current);
      AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj3);
    }
  });
  return current;
}