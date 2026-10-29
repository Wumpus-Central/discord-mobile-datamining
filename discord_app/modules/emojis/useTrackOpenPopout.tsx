// === Module 10006: useTrackOpenPopout ===

// Module 10006 (useTrackOpenPopout)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import useMountEffectDefault from "useMountEffect" /* 5300 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5749 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9892 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;

require = fn;
const EmojiInteractionPoint = fn(1392).EmojiInteractionPoint;
const AnalyticEvents = fn(1084).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export (cResult) => {
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = cResult);
  let current;
  let merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(SelectedChannelStore.getChannelId(currentGuildId))));
  current = current.useRef({ guild_id: currentGuildId, emoji_id: cResult.emojiId }).current;
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