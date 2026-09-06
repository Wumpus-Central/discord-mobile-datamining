// discord_app/modules/video_calls/native/components/SingleVideoCall.tsx
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ChannelCallStore = fn(9467);
({ resetFocus: closure_4, toggleFocus: hasOwnProperty } = ChannelCallStore);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleVideoCall.tsx");

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
    onSingleTap,
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    onLongPress(user) {
      showUserProfileActionSheetDefault({
        userId: user.user.id,
        channelId: channel.id,
        isVoiceContext: true,
        sourceAnalyticsLocations: analyticsLocations,
      });
    },
  };
  return jsx(bottom(right[5]), {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: channel(right[6]).AvatarSizes.PROFILE,
    resizeMode: channel(right[7]).ResizeMode.AUTO,
    statusStyle: memo,
    onSingleTap,
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    onLongPress(user) {
      showUserProfileActionSheetDefault({
        userId: user.user.id,
        channelId: channel.id,
        isVoiceContext: true,
        sourceAnalyticsLocations: analyticsLocations,
      });
    },
  });
}
