// === Module 9440: useTrackOpenPopout ===

// Module 9440 (useTrackOpenPopout)
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4766 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5047 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "handleConnectionOpen" /* 1980 */;
import { EmojiInteractionPoint } from "set" /* 1925 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (emojiId) => {
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = emojiId);
  let current;
  let merged = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(channel.getChannel(channelId.getChannelId(currentGuildId))));
  current = current.useRef({ guild_id: currentGuildId, emoji_id: emojiId.emojiId }).current;
  useMountLayoutEffectDefault(() => {
    let obj = closure_1_0(closure_1_2[7]);
    const result = obj.initiateEmojiInteraction(closure_1_6.TrackOpenPopoutUsed);
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
      closure_1_1(closure_1_2[8]).track(closure_1_7.OPEN_POPOUT, obj);
      const obj2 = closure_1_1(closure_1_2[8]);
    }
  });
  return current;
};