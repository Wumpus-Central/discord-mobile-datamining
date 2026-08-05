// discord_app/modules/stage_channels/useStateChannelIsLive.tsx
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useStateChannelIsLive.tsx");

export default function useStageChannelIsLive(arg0) {
  const _require = arg0;
  const items = [handleStageInstanceCreateOrUpdate];
  const items1 = [arg0];
  return _initialize.useStateFromStores(items, () => outer1_2.isLive(closure_0), items1);
};