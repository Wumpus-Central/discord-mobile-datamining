// === Module 11302: useTrackOpenPopout ===

// Module 11302 (useTrackOpenPopout)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import useMountEffectDefault from "useMountEffect" /* 5899 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 6067 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9544 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;

require = fn;
const EmojiInteractionPoint = fn(1391).EmojiInteractionPoint;
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