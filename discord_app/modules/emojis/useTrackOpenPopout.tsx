// === Module 10332: useTrackOpenPopout ===

// Module 10332 (useTrackOpenPopout)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 10333 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
const EmojiInteractionPoint = fn(1374).EmojiInteractionPoint;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (emojiId) => {
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = emojiId);
  let current;
  let merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(SelectedChannelStore.getChannelId(currentGuildId))));
  current = current.useRef({ guild_id: currentGuildId, emoji_id: emojiId.emojiId }).current;
  useMountEffectDefault(() => {
    let obj = emojis_EmojiActionCreators;
    const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.TrackOpenPopoutUsed);
    if (!dependencyMap) {
      let str;
      if (analyticsType != null) {
        str = analyticsType.analyticsType;
      }
      if (str == null) {
        str = "Standard Emoji Popout";
      }
      obj = { type: str, nonce };
      const merged = Object.assign(current);
      AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj);
    }
  });
  return current;
};