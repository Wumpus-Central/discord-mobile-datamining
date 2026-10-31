// discord_app/modules/voice_panel/native/controls/useShowConnectedControls.tsx
import useStateFromSharedValueDefault from "../../../reanimated/native/useStateFromSharedValue.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useIsConnectedToVoiceChannelDefault from "../hooks/useIsConnectedToVoiceChannel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useShowConnectedControls.tsx");

export default function useShowConnectedControls(arg0) {
  let tmp = useIsConnectedToVoiceChannelDefault(arg0);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ connected, isDockEnabled, dockJoinMorphOrigin } = context);
  let tmp3 = useStateFromSharedValueDefault(connected);
  if (isDockEnabled) {
    if (tmp3) {
      tmp3 = null == useStateFromSharedValueDefault(dockJoinMorphOrigin);
    }
    tmp = tmp3;
  }
  return tmp;
}
