// === Module 11143: SingleVideoCall ===

// Module 11143 (SingleVideoCall)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5106 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8303 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ChannelCallStore = fn(10353);
({ resetFocus: closure_4, toggleFocus: hasOwnProperty } = ChannelCallStore);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleVideoCall.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SingleVideoCall(arg0) {
  const cResult = channel(576).c(13);
  ({ participant, channel } = arg0);
  const obj = channel(576);
  const tmp4 = analyticsLocations;
  ({ bottom, right } = analyticsLocations(1631)());
  analyticsLocations = analyticsLocations(6851)().analyticsLocations;
  if (cResult[0] !== channel.id) {
    function handleDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    }
    cResult[0] = channel.id;
    cResult[1] = handleDoubleTap;
    let tmp6 = handleDoubleTap;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === channel.id) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === bottom) {
      if (cResult[6] === right) {
        let tmp8 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp7) {
          if (cResult[10] === participant) {
            if (cResult[11] === tmp8) {
              let tmp9 = cResult[12];
            }
            return tmp9;
          }
        }
      }
      const obj2 = { gestureEnabled: true, participant, avatarSize: channel(1200).AvatarSizes.PROFILE, resizeMode: channel(10894).ResizeMode.AUTO, statusStyle: tmp8, onSingleTap, onDoubleTap: tmp6, onLongPress: tmp7 };
      const tmp13 = jsx(tmp4(10905), { gestureEnabled: true, participant, avatarSize: channel(1200).AvatarSizes.PROFILE, resizeMode: channel(10894).ResizeMode.AUTO, statusStyle: tmp8, onSingleTap, onDoubleTap: tmp6, onLongPress: tmp7 });
      cResult[8] = tmp6;
      cResult[9] = tmp7;
      cResult[10] = participant;
      cResult[11] = tmp8;
      cResult[12] = tmp13;
      tmp9 = tmp13;
      const tmp4Result = tmp4(10905);
    }
    const obj3 = { marginRight: right, marginBottom: bottom };
    cResult[5] = bottom;
    cResult[6] = right;
    cResult[7] = obj3;
    tmp8 = obj3;
  }
  function onLongPress(user) {
    showUserProfileActionSheetDefault({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }
  cResult[2] = analyticsLocations;
  cResult[3] = channel.id;
  cResult[4] = onLongPress;
  tmp7 = onLongPress;
  const tmp5 = analyticsLocations(1631)();
}) : (function SingleVideoCall(channel) {
  channel = channel.channel;
  let bottom;
  let right;
  const rect = bottom(right[5])();
  bottom = rect.bottom;
  right = rect.right;
  const analyticsLocations = bottom(right[6])().analyticsLocations;
  const items = [right, bottom];
  const memo = analyticsLocations.useMemo(() => ({ marginRight: right, marginBottom: bottom }), items);
  const obj = {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: channel(right[10]).AvatarSizes.PROFILE,
    resizeMode: channel(right[11]).ResizeMode.AUTO,
    statusStyle: memo,
    onSingleTap,
    onDoubleTap: function handleDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    onLongPress(user) {
      showUserProfileActionSheetDefault({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    }
  };
  return jsx(bottom(right[9]), {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: channel(right[10]).AvatarSizes.PROFILE,
    resizeMode: channel(right[11]).ResizeMode.AUTO,
    statusStyle: memo,
    onSingleTap,
    onDoubleTap: function handleDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    onLongPress(user) {
      showUserProfileActionSheetDefault({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    }
  });
});