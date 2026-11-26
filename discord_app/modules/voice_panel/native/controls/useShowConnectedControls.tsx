// discord_app/modules/voice_panel/native/controls/useShowConnectedControls.tsx
import useStateFromSharedValueDefault from "../../../reanimated/native/useStateFromSharedValue.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useIsConnectedToVoiceChannelDefault from "../hooks/useIsConnectedToVoiceChannel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useShowConnectedControls.tsx");

export default function useShowConnectedControls(arg0) {
  _require = arg0;
  let tmp = useIsConnectedToVoiceChannelDefault(arg0);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ connected, isDockEnabled, dockJoinMorphOrigin } = context);
  let stateFromStores = useStateFromSharedValueDefault(connected);
  const tmp4 = null != useStateFromSharedValueDefault(dockJoinMorphOrigin);
  items = [ChannelStore];
  const items1 = [arg0];
  if (isDockEnabled) {
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => null != ChannelStore.getChannel(closure_0), items1);
    }
    if (stateFromStores) {
      stateFromStores = !tmp4;
    }
    tmp = stateFromStores;
  }
  return tmp;
}
