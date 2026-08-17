// discord_app/modules/stage_channels/useCanRaiseHand.tsx
import closure_2 from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "sum" /* 505 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const _require = channel;
  const items = [closure_2];
  return _initialize.useStateFromStores(items, () => closure_1_2.can(closure_1_3.REQUEST_TO_SPEAK, closure_0));
};