// discord_app/modules/pinot/useCanMessageInPinotChannel.tsx
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/useCanMessageInPinotChannel.tsx");

export function useCanMessageInPinotChannel(guild_id) {
  _require = guild_id;
  const items = [PermissionStore];
  const items1 = [guild_id];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (null == guild_id) {
        return tmp;
      } else {
        let isLockedThreadResult = PermissionStore;
        let can = PermissionStore.can;
        let canResult = Permissions;
        if (guild_id.isThread()) {
          canResult = can(canResult.SEND_MESSAGES_IN_THREADS, guild_id);
          if (canResult) {
            isLockedThreadResult = guild_id.isLockedThread();
            can = !isLockedThreadResult;
            if (isLockedThreadResult) {
              can = PermissionStore.can(Permissions.MANAGE_THREADS, guild_id);
            }
            canResult = can;
          }
          let canResult1 = canResult;
        } else {
          canResult1 = can(canResult.SEND_MESSAGES, guild_id);
        }
      }
    },
    items1,
  );
}
