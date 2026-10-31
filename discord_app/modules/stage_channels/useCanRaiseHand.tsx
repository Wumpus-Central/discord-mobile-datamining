// === Module 11902: useCanRaiseHand ===

// Module 11902 (useCanRaiseHand)
import PermissionStore from "PermissionStore" /* 4946 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1083).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export function useCanRaiseHand(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.REQUEST_TO_SPEAK, closure_0));
}