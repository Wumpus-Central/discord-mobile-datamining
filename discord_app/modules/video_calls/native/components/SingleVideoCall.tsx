// discord_app/modules/video_calls/native/components/SingleVideoCall.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import VoiceChatDrawerState from "../ChannelCallStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
({ resetFocus: c4, toggleFocus: c5 } = VoiceChatDrawerState);
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/SingleVideoCall.tsx");

export default function SingleVideoCall(channel) {
  channel = channel.channel;
  let bottom;
  let right;
  const rect = bottom(right[3])();
  bottom = rect.bottom;
  right = rect.right;
  const analyticsLocations = bottom(right[4])().analyticsLocations;
  const items = [right, bottom];
  const memo = analyticsLocations.useMemo(() => ({ marginRight: right, marginBottom: bottom }), items);
  const obj = {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: channel(right[6]).AvatarSizes.PROFILE,
    resizeMode: channel(right[7]).ResizeMode.AUTO,
    statusStyle: memo,
    onSingleTap: closure_5,
    onDoubleTap() {
      closure_1_4();
      const participant = bottom(right[8]).selectParticipant(channel.id, null);
    },
    onLongPress(user) {
      bottom(right[9])({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    }
  };
  return jsx(bottom(right[5]), {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: channel(right[6]).AvatarSizes.PROFILE,
    resizeMode: channel(right[7]).ResizeMode.AUTO,
    statusStyle: memo,
    onSingleTap: closure_5,
    onDoubleTap() {
      closure_1_4();
      const participant = bottom(right[8]).selectParticipant(channel.id, null);
    },
    onLongPress(user) {
      bottom(right[9])({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    }
  });
};