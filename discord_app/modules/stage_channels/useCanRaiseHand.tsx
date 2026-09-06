// === Module 9932: useCanRaiseHand ===

// Module 9932 (useCanRaiseHand)
import closure_2 from "getUncachedChannelPermissions" /* 4199 */;
import { Permissions } from "sum" /* 1085 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const _require = channel;
  const items = [closure_2];
  return _require(504).useStateFromStores(items, () => closure_1_2.can(closure_1_3.REQUEST_TO_SPEAK, closure_0));
};