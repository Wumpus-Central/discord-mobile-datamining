// === Module 8060: useStageChannelIsLive ===

// Module 8060 (useStageChannelIsLive)
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate" /* 1396 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useStateChannelIsLive.tsx");

export default function useStageChannelIsLive(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => closure_1_2.isLive(closure_0), items1);
};