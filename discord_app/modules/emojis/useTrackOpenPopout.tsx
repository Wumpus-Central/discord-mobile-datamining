// === Module 9403: useTrackOpenPopout ===

// Module 9403 (useTrackOpenPopout)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4761 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import toggleGuildExpandedState from "toggleGuildExpandedState" /* 9299 */;
import noop from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import { EmojiInteractionPoint } from "set" /* 1925 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (emojiId) => {
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = emojiId);
  let current;
  let merged = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(channel.getChannel(channelId.getChannelId(currentGuildId))));
  current = current.useRef({ guild_id: currentGuildId, emoji_id: emojiId.emojiId }).current;
  useMountLayoutEffectDefault(() => {
    let obj = toggleGuildExpandedState;
    const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.TrackOpenPopoutUsed);
    if (!closure_2) {
      let str;
      if (analyticsType != null) {
        str = analyticsType.analyticsType;
      }
      if (str == null) {
        str = "Standard Emoji Popout";
      }
      obj = { type: null, nonce: null };
      obj[0] = str;
      obj[1] = closure_1;
      const merged = Object.assign(current);
      expandEventPropertiesDefault.track(AnalyticEvents.OPEN_POPOUT, obj);
    }
  });
  return current;
};