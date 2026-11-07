// === Module 11133: useSelectedParticipant ===

// Module 11133 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 6898 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  _require = arg0;
  items = [ChannelRTCStore];
  return require("initialize").useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipant(id.id));
};