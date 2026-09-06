// === Module 9932: useCanRaiseHand ===

// Module 9932 (useCanRaiseHand)
import PermissionStore from "PermissionStore" /* 4199 */;

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.REQUEST_TO_SPEAK, closure_0));
};