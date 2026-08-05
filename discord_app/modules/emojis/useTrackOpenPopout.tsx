// discord_app/modules/emojis/useTrackOpenPopout.tsx
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import { EmojiInteractionPoint } from "set";
import { AnalyticEvents } from "ME";
import { useMountLayoutEffect } from "../../hooks/useMountEffect.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";

const require = arg1;
let result = require("handleConnectionOpen").fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (emojiId) => {
  let currentGuildId;
  let dependencyMap;
  let importDefault;
  let require;
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = emojiId);
  let current;
  let merged = Object.assign(collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */.collectChannelAnalyticsMetadata(channel.getChannel(channelId.getChannelId(currentGuildId))));
  current = current.useRef({ guild_id: currentGuildId, emoji_id: emojiId.emojiId }).current;
  useMountLayoutEffect(() => {
    let obj = outer1_0(outer1_2[7]);
    const result = obj.initiateEmojiInteraction(outer1_6.TrackOpenPopoutUsed);
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
      outer1_1(outer1_2[8]).track(outer1_7.OPEN_POPOUT, obj);
      const obj2 = outer1_1(outer1_2[8]);
    }
  });
  return current;
};