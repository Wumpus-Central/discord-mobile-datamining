// === Module 12530: useCanRaiseHand ===

// Module 12530 (useCanRaiseHand)
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "sum" /* 505 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const _require = channel;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => closure_1_2.can(Permissions.REQUEST_TO_SPEAK, closure_0));
};