// === Module 6842: useStateChannelIsLive ===

// Module 6842 (useStateChannelIsLive)
import StageInstanceStore from "StageInstanceStore" /* 5097 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStateChannelIsLive.tsx");

export default function useStageChannelIsLive(arg0) {
  _require = arg0;
  items = [StageInstanceStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => StageInstanceStore.isLive(closure_0), items1);
};