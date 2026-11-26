// === Module 19586: useShowConnectedControls ===

// Module 19586 (useShowConnectedControls)
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8619 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11781 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 18248 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;

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
};