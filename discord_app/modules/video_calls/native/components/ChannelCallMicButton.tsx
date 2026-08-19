// discord_app/modules/video_calls/native/components/ChannelCallMicButton.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getMuteStatesDefault from "../../useMuteStates.tsx";
import ActionButtonAll from "CallBarAction.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import set from "../../../game_console/GameConsoleStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export const ChannelCallMicButton = function ChannelCallMicButton(disableTint) {
  let flag = disableTint.disableTint;
  ({ channel, isSmallSize } = disableTint);
  if (flag === undefined) {
    flag = false;
  }
  let mute;
  let obj = mute(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const tmp3 = getMuteStatesDefault(channel);
  const muteHandler = mute(12567).createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const memo = React.useMemo(() => jsx(mute(dependencyMap[6]).VoicePanelRiveMicButton, { muted: mute }), items1);
  obj = { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null };
  const intl = mute(1236).intl;
  obj[1] = intl.string(mute(1236).t.B3zz0G);
  obj[2] = muteHandler.onPress;
  obj[3] = importDefault(mute ? 12569 : 12570);
  if (!flag) {
    flag = mute;
  }
  obj[4] = flag;
  obj[5] = isSmallSize;
  obj[6] = memo;
  let RED_400;
  if (mute) {
    RED_400 = ThemesDefault.unsafe_rawColors.RED_400;
  }
  obj[7] = RED_400;
  return jsx(ActionButtonAll.ToggledActionButton, { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null });
};