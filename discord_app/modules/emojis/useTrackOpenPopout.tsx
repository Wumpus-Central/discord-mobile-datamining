// discord_app/modules/emojis/useTrackOpenPopout.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import useMountEffectDefault from "../../hooks/useMountEffect.tsx";
import emojis_EmojiActionCreators from "EmojiActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

require = fn;
const EmojiInteractionPoint = fn(1374).EmojiInteractionPoint;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (emojiId) => {
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = emojiId);
  let current;
  let merged = Object.assign(
    AppAnalyticsUtils.collectChannelAnalyticsMetadata(
      ChannelStore.getChannel(SelectedChannelStore.getChannelId(currentGuildId)),
    ),
  );
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
