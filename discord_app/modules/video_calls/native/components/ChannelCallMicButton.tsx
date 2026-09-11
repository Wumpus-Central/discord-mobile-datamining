// === Module 10092: ChannelCallMicButton ===

// Module 10092 (ChannelCallMicButton)
import nativeDefault from "native" /* 576 */;
import useMuteStatesDefault from "useMuteStates" /* 7418 */;
import CallBarActionAll from "CallBarAction" /* 9588 */;
import VoicePanelRiveMicButton from "VoicePanelRiveMicButton" /* 10094 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4623 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export const ChannelCallMicButton = function ChannelCallMicButton(disableTint) {
  let flag = disableTint.disableTint;
  ({ channel, isSmallSize } = disableTint);
  if (flag === undefined) {
    flag = false;
  }
  let mute;
  let obj = mute(504);
  const items = [GameConsoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const tmp3 = useMuteStatesDefault(channel);
  const muteHandler = mute(10093).createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const memo = noop.useMemo(() => jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute }), items1);
  obj = { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null };
  const intl = mute(1114).intl;
  obj.accessibilityLabel = intl.string(mute(1114).t.B3zz0G);
  obj.onPress = muteHandler.onPress;
  obj.source = importDefault(mute ? 10097 : 10098);
  if (!flag) {
    flag = mute;
  }
  obj.isActive = flag;
  obj.isSmallSize = isSmallSize;
  obj.lottieComponent = memo;
  let RED_400;
  if (mute) {
    RED_400 = nativeDefault.unsafe_rawColors.RED_400;
  }
  obj.tintColor = RED_400;
  return jsx(CallBarActionAll.ToggledActionButton, { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null });
};