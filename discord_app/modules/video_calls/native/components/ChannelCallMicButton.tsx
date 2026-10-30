// === Module 11930: ChannelCallMicButton ===

// Module 11930 (ChannelCallMicButton)
import nativeDefault from "native" /* 575 */;
import useMuteStatesDefault from "useMuteStates" /* 7520 */;
import CallBarActionAll from "CallBarAction" /* 11677 */;
import VoicePanelRiveMicButton from "VoicePanelRiveMicButton" /* 11932 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5760 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export function ChannelCallMicButton(disableTint) {
  let flag = disableTint.disableTint;
  ({ channel, isSmallSize } = disableTint);
  if (flag === undefined) {
    flag = false;
  }
  let mute;
  const tmp3 = useMuteStatesDefault(channel);
  const items = [GameConsoleStore];
  const stateFromStores = mute(504).useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj = mute(504);
  const muteHandler = mute(11931).createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const memo = noop.useMemo(() => jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute }), items1);
  const obj3 = { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null };
  const intl = mute(1114).intl;
  obj3.accessibilityLabel = intl.string(mute(1114).t.B3zz0G);
  obj3.onPress = muteHandler.onPress;
  obj3.source = importDefault(mute ? 11935 : 11936);
  if (!flag) {
    flag = mute;
  }
  obj3.isActive = flag;
  obj3.isSmallSize = isSmallSize;
  obj3.lottieComponent = memo;
  let RED_400;
  if (mute) {
    RED_400 = nativeDefault.unsafe_rawColors.RED_400;
  }
  obj3.tintColor = RED_400;
  return jsx(CallBarActionAll.ToggledActionButton, { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null });
}