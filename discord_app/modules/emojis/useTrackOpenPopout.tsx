// === Module 9476: useTrackOpenPopout ===

// Module 9476 (useTrackOpenPopout)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import useMountEffectDefault from "useMountEffect" /* 5392 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9360 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;

require = fn;
const EmojiInteractionPoint = fn(1392).EmojiInteractionPoint;
const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (cResult) => {
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
};