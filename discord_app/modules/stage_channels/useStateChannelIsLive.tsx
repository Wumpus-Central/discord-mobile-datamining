// discord_app/modules/stage_channels/useStateChannelIsLive.tsx
import closure_2 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useStateChannelIsLive.tsx");

export default function useStageChannelIsLive(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _initialize.useStateFromStores(items, () => closure_1_2.isLive(closure_0), items1);
};