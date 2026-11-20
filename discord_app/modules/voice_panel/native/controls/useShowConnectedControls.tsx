// === Module 19241: useShowConnectedControls ===

// Module 19241 (useShowConnectedControls)
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 10478 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11629 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17910 */;
import noop from "module_19" /* 19 */;

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
};