// discord_app/modules/video_calls/native/components/ChannelCallMicButton.tsx
import useMuteStatesDefault from "../../useMuteStates.tsx";
import CallBarActionAll from "CallBarAction.tsx";
import VoicePanelRiveMicButton from "../../../voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";

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
  const stateFromStores = obj.useStateFromStores(
    items,
    () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo(),
  );
  const tmp3 = useMuteStatesDefault(channel);
  const muteHandler = mute(10003).createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const memo = noop.useMemo(() => jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute }), items1);
  obj = {
    appearsDisabled: stateFromStores,
    accessibilityLabel: null,
    onPress: null,
    source: null,
    isActive: null,
    isSmallSize: null,
    lottieComponent: null,
    tintColor: null,
  };
  const intl = mute(1114).intl;
  obj.accessibilityLabel = intl.string(mute(1114).t.B3zz0G);
  obj.onPress = muteHandler.onPress;
  obj.source = importDefault(mute ? 10007 : 10008);
  if (!flag) {
    flag = mute;
  }
  obj.isActive = flag;
  obj.isSmallSize = isSmallSize;
  obj.lottieComponent = memo;
  let RED_400;
  if (mute) {
    RED_400 = tmp(576).unsafe_rawColors.RED_400;
  }
  obj.tintColor = RED_400;
  return jsx(CallBarActionAll.ToggledActionButton, {
    appearsDisabled: stateFromStores,
    accessibilityLabel: null,
    onPress: null,
    source: null,
    isActive: null,
    isSmallSize: null,
    lottieComponent: null,
    tintColor: null,
  });
};
