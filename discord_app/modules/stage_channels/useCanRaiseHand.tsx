// === Module 9943: useCanRaiseHand ===

// Module 9943 (useCanRaiseHand)
import closure_2 from "getUncachedChannelPermissions" /* 4089 */;
import { Permissions } from "sum" /* 505 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const _require = channel;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => closure_1_2.can(closure_1_3.REQUEST_TO_SPEAK, closure_0));
};