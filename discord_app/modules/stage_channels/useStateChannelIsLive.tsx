// === Module 6716: useStageChannelIsLive ===

// Module 6716 (useStageChannelIsLive)
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useStateChannelIsLive.tsx");

export default function useStageChannelIsLive(arg0) {
  const _require = arg0;
  const items = [handleStageInstanceCreateOrUpdate];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => outer1_2.isLive(closure_0), items1);
};