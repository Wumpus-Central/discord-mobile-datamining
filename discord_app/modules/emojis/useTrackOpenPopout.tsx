// discord_app/modules/emojis/useTrackOpenPopout.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import useMountLayoutEffectDefault from "../../hooks/useMountEffect.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import toggleGuildExpandedState from "EmojiActionCreators.tsx";
import noop from "../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import { EmojiInteractionPoint } from "EmojiConstants.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

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