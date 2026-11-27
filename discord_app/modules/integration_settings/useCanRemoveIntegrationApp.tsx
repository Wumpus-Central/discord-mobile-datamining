// === Module 20066: useCanRemoveIntegrationApp ===

// Module 20066 (useCanRemoveIntegrationApp)
import PermissionStore from "PermissionStore" /* 4975 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1071).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/useCanRemoveIntegrationApp.tsx");

export default function useCanRemoveIntegrationApp(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  items = [PermissionStore];
  const items1 = [arg1, arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != bot;
    }
    if (tmp2) {
      let canManageUserResult = null == bot.bot;
      if (!canManageUserResult) {
        canManageUserResult = PermissionStore.canManageUser(Permissions.MANAGE_GUILD, tmp4.bot.id, closure_0);
      }
      tmp2 = canManageUserResult;
    }
    return tmp2;
  }, items1);
};