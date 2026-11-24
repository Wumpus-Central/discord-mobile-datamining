// === Module 9617: useTrackOpenPopout ===

// Module 9617 (useTrackOpenPopout)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import useMountEffectDefault from "useMountEffect" /* 5478 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5887 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9397 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4820 */;

require = fn;
const EmojiInteractionPoint = fn(1389).EmojiInteractionPoint;
const AnalyticEvents = fn(1071).AnalyticEvents;
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