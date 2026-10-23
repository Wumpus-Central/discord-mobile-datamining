// === Module 9939: useTrackOpenPopout ===

// Module 9939 (useTrackOpenPopout)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import useMountEffectDefault from "useMountEffect" /* 5261 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5709 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9825 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;

require = fn;
const EmojiInteractionPoint = fn(1395).EmojiInteractionPoint;
const AnalyticEvents = fn(1087).AnalyticEvents;
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