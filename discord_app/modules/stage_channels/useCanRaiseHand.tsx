// discord_app/modules/stage_channels/useCanRaiseHand.tsx
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () =>
    PermissionStore.can(Permissions.REQUEST_TO_SPEAK, closure_0),
  );
};
