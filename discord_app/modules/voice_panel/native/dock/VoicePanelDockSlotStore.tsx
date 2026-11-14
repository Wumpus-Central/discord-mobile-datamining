// === Module 14855: VoicePanelDockSlotStore ===

// Module 14855 (VoicePanelDockSlotStore)
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;

const require = globalThis.__r;

const require = fn;
const module_560 = fn(560);
let closure_4 = module_560.create(() => ({ dockState: null }));
const context = noop.createContext(false);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSlotStore.tsx");

export function useShareVoicePanelDockState(channelId) {
  _require = channelId;
  channelId = channelId.channelId;
  items = [RTCConnectionStore];
  const items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => RTCConnectionStore.getChannelId() === channelId, items1);
  const items2 = [channelId, stateFromStores];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    if (stateFromStores) {
      const obj = { dockState };
      closure_4.setState(obj);
    }
  }, items2);
  const items3 = [channelId];
  const layoutEffect1 = stateFromStores.useLayoutEffect(() => () => {
    dockState = closure_2_4.getState().dockState;
    channelId = undefined;
    if (dockState != null) {
      channelId = dockState.channelId;
    }
    if (channelId === closure_1_1) {
      closure_2_4.setState({ dockState: null });
    }
  }, items3);
}
export const VoicePanelDockHiddenContext = context;
export function useVoicePanelDockState() {
  return closure_4((dockState) => dockState.dockState);
}